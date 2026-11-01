const steps = [
  { n: "1", title: "Aanvraag", text: "Vertel ons via het formulier of per e-mail wat er moet gebeuren." },
  { n: "2", title: "Opname & offerte", text: "We komen vrijblijvend kijken en sturen een duidelijke offerte met vaste prijs." },
  { n: "3", title: "Uitvoering", text: "Op de afgesproken dag gaan we aan de slag — netjes en vakkundig." },
  { n: "4", title: "Oplevering", text: "Samen lopen we alles na. Pas als u tevreden bent, zijn wij klaar." },
];

export default function Werkwijze() {
  return (
    <section className="section" id="werkwijze">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Werkwijze</span>
          <h2>In vier stappen geregeld</h2>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li className="step reveal" key={s.n}>
              <span className="step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
