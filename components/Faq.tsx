const faqs = [
  {
    q: "Is de offerte echt gratis?",
    a: "Ja. We komen vrijblijvend langs om de klus te bekijken en sturen daarna een offerte met een vaste prijs. U zit nergens aan vast.",
  },
  {
    q: "Moet ik zelf de verf of vloer kopen?",
    a: "Dat hoeft niet. Wij adviseren en leveren de materialen, zodat alles op elkaar is afgestemd. Heeft u al iets uitgezocht? Dan verwerken we dat ook graag.",
  },
  {
    q: "Hoe snel kunnen jullie beginnen?",
    a: "Dat hangt af van de planning, maar meestal kunnen we binnen één à twee weken starten. Kleine klussen passen vaak eerder ertussen.",
  },
  {
    q: "Moet ik thuis zijn tijdens de klus?",
    a: "Niet per se. Veel klanten geven ons een sleutel. We spreken vooraf af hoe u het liefst wilt werken.",
  },
  {
    q: "Doen jullie ook klussen voor verhuurders en bedrijven?",
    a: "Zeker. We knappen huurwoningen op tussen huurders door, en werken ook voor kantoren en winkels.",
  },
];

export default function Faq() {
  return (
    <section className="section section-alt" id="faq">
      <div className="container faq-wrap">
        <div className="section-head left">
          <span className="kicker">Veelgestelde vragen</span>
          <h2>Goed om te weten</h2>
          <p>Staat uw vraag er niet bij? Stuur ons gerust een bericht.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq reveal" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
