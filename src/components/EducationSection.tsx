import { usePointerSurface } from "@/hooks/use-pointer-surface";

const education = [
  {
    country: "Spain",
    type: "Master’s degree",
    degree: "MBA",
    school: "European University of Madrid",
    detail: "Business administration",
    className: "education-business",
  },
  {
    country: "Canada",
    type: "Postgraduate diploma",
    degree: "Data analytics",
    school: "Douglas College",
    detail: "Computer & information systems",
    className: "education-data",
  },
  {
    country: "Chile",
    type: "Bachelor’s degree",
    degree: "Business & economics",
    school: "Andres Bello University",
    detail: "Finance specialization",
    className: "education-finance",
  },
  {
    country: "United States",
    type: "Master’s admission",
    degree: "Computer science",
    school: "Georgia Institute of Technology",
    detail: "MS starts Spring 2027",
    className: "education-next",
  },
];

function EducationCard({ item }: { item: (typeof education)[number] }) {
  const surface = usePointerSurface<HTMLElement>();
  return (
    <article
      {...surface}
      tabIndex={0}
      aria-labelledby={`${item.className}-degree`}
      className={`education-card ${item.className}`}
    >
      <div className="education-top">
        <span>{item.country}</span>
        {item.className === "education-next" && (
          <span className="admission-badge">Admitted</span>
        )}
      </div>
      <div className="education-degree">
        <p>{item.type}</p>
        <h3 id={`${item.className}-degree`}>{item.degree}</h3>
      </div>
      <div className="education-school">
        <p>{item.school}</p>
        <span>{item.detail}</span>
      </div>
    </article>
  );
}

export default function EducationSection() {
  return (
    <section
      id="education"
      className="section page-width education-section"
      aria-labelledby="education-title"
    >
      <div className="section-heading education-heading">
        <h2 id="education-title">Always learning.</h2>
        <p>My education, from business to tech.</p>
      </div>
      <div className="education-grid">
        {education.map((item) => (
          <EducationCard key={item.degree} item={item} />
        ))}
      </div>
    </section>
  );
}
