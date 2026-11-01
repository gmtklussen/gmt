const diensten = [
  {
    icon: "🖌️",
    title: "Schilderwerk",
    text: "Binnen- en buitenschilderwerk met hoogwaardige verf. Strak afgeplakt, goed voorbereid en zonder vlekken opgeleverd.",
    items: ["Wanden & plafonds", "Kozijnen, deuren & trappen", "Buitenschilderwerk"],
    featured: true,
  },
  {
    icon: "🪵",
    title: "Vloeren",
    text: "Een nieuwe vloer die er jaren mooi uitziet. Wij egaliseren de ondervloer en leggen alles strak en geruisloos.",
    items: ["Laminaat & PVC", "Parket & visgraat", "Egaliseren & plinten"],
    featured: false,
  },
  {
    icon: "🧱",
    title: "Stucwerk & wanden",
    text: "Gladde, strakke wanden als basis voor elk interieur. Van kleine reparaties tot complete ruimtes.",
    items: ["Sausklaar stucwerk", "Gaten & scheuren herstellen", "Voorzetwanden"],
    featured: false,
  },
  {
    icon: "🎨",
    title: "Behangen",
    text: "Van glasvlies tot fotobehang: naadloos aangebracht, recht op patroon en netjes rond stopcontacten en kozijnen.",
    items: ["Glasvliesbehang", "Vliesbehang & fotobehang", "Oud behang verwijderen"],
    featured: false,
  },
  {
    icon: "🔨",
    title: "Timmerwerk",
    text: "Maatwerk en montage in huis. Wij timmeren, monteren en passen alles netjes af.",
    items: ["Deuren & kozijnen afhangen", "Inbouwkasten & ombouw", "Aftimmeren & plinten"],
    featured: false,
  },
  {
    icon: "🧰",
    title: "Kleine klussen",
    text: "Die lijst met klusjes die maar blijft liggen? Wij lopen hem in één keer met u af.",
    items: ["Ophangen & monteren", "Kitwerk badkamer & keuken", "Reparaties in en om huis"],
    featured: false,
  },
];

export default function Diensten() {
  return (
    <section className="section" id="diensten">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Onze diensten</span>
          <h2>Van verfkwast tot nieuwe vloer</h2>
          <p>
            Eén aanspreekpunt voor de afwerking van uw woning. Combineer gerust
            meerdere klussen — dat scheelt tijd én kosten.
          </p>
        </div>

        <div className="cards">
          {diensten.map((d) => (
            <article
              key={d.title}
              className={`card reveal${d.featured ? " card-featured" : ""}`}
            >
              <div className="card-icon">{d.icon}</div>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
              <ul className="tick">
                {d.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
