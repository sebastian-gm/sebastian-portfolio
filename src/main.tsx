import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Show any runtime error on the page (not a blank screen)
function showFatal(err: unknown) {
  console.error("FATAL:", err);
  const el = document.createElement("pre");
  el.style.whiteSpace = "pre-wrap";
  el.style.fontFamily = "monospace";
  el.style.color = "#ef4444";
  el.style.padding = "24px";
  el.style.margin = "16px";
  el.style.border = "1px solid #ef4444";
  el.textContent = "App crashed:\n\n" + String(err);
  document.body.innerHTML = "";
  document.body.appendChild(el);
}

try {
  const rootEl = document.getElementById("root");
  if (!rootEl) throw new Error("No #root element found");
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (err) {
  showFatal(err);
}

window.addEventListener("error", (e) => showFatal(e.error || e.message));
window.addEventListener("unhandledrejection", (e) => showFatal(e.reason || e));
