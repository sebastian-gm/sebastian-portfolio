// /functions/contact.ts
type Env = {
  RESEND_API_KEY: string;
  MAIL_FROM: string; // contact@sebastiangm.com
  MAIL_TO: string;   // (e.g. sebastiangm.dev@gmail.com)
};

function escapeHTML(s: string) {
  return s.replace(/[&<>"']/g, (m) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as Record<string, string>)[m]
  );
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const headers = { "content-type": "application/json" };

  try {
    const { name, email, message } = await request.json<any>();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400, headers });
    }

    const html = `
      <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
        <p><strong>From:</strong> ${escapeHTML(name)} &lt;${escapeHTML(email)}&gt;</p>
        <p>${escapeHTML(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Sebastian Gonzalez <${env.MAIL_FROM}>`,
        to: [env.MAIL_TO],
        reply_to: email,
        subject: `Portfolio contact — ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html,
      }),
    });

    if (!resp.ok) {
      const body = await resp.text();
      console.error("Resend error:", resp.status, body);
      return new Response(JSON.stringify({ error: "Failed to send" }), { status: 502, headers });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch (err) {
    console.error("Send failed:", err);
    return new Response(JSON.stringify({ error: "Failed to send" }), { status: 500, headers });
  }
};
