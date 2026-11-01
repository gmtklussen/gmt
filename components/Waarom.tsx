const features = [
  {
    icon: "💶",
    title: "Vaste prijs vooraf",
    text: "Na de opname ontvangt u een heldere offerte. Wat we afspreken, is wat u betaalt.",
  },
  {
    icon: "🧹",
    title: "Schoon gewerkt",
    text: "We dekken af, plakken af en ruimen op. U merkt pas dat we er waren aan het resultaat.",
  },
  {
    icon: "📅",
    title: "Afspraak is afspraak",
    text: "We komen op de afgesproken dag en tijd, en houden u op de hoogte van de voortgang.",
  },
  {
    icon: "🏅",
    title: "Kwaliteitsmaterialen",
    text: "Professionele verf en vloeren van A-merken, voor een resultaat dat lang mooi blijft.",
  },
];

export default function Waarom() {
  return (
    <section className="section section-dark" id="waarom">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Waarom GMT Klussen</span>
          <h2>Daarom kiezen klanten voor ons</h2>
        </div>
        <div className="features">
          {features.map((f) => (
            <div className="feature reveal" key={f.title}>
              <div className="feature-ic">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
