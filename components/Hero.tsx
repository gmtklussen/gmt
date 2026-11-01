export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow">Schilderwerk · Vloeren · Klussen</span>
          <h1>
            Vakwerk in huis,
            <br />
            <span className="underline-stroke">netjes opgeleverd.</span>
          </h1>
          <p className="lead">
            GMT Klussen schildert, legt vloeren en pakt alle klussen in en om het
            huis aan. Eén vakman, duidelijke afspraken en een eerlijke prijs — en we
            ruimen alles op voordat we vertrekken.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Gratis offerte aanvragen
            </a>
            <a href="#diensten" className="btn btn-ghost">
              Bekijk onze diensten
            </a>
          </div>
          <ul className="hero-points">
            <li>Vrijblijvende opname aan huis</li>
            <li>Vaste prijs vooraf</li>
            <li>Schoon en op tijd opgeleverd</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="room">
            <div className="room-wall">
              <span className="roller-stroke"></span>
              <span className="roller">
                <span className="roller-head"></span>
                <span className="roller-handle"></span>
              </span>
            </div>
            <div className="room-floor"></div>
          </div>

          <div className="swatches">
            <span style={{ background: "#e9e2d3" }}></span>
            <span style={{ background: "#9fb3a0" }}></span>
            <span style={{ background: "#3f5a4a" }}></span>
            <span style={{ background: "#c8763f" }}></span>
          </div>

          <div className="visual-card card-1">
            <span className="ic">🖌️</span>
            <div>
              <strong>Woonkamer geschilderd</strong>
              <small>Wanden &amp; plafond · opgeleverd</small>
            </div>
          </div>
          <div className="visual-card card-2">
            <span className="ic">🪵</span>
            <div>
              <strong>PVC-vloer gelegd</strong>
              <small>42 m² visgraat</small>
            </div>
            <span className="check">✓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
