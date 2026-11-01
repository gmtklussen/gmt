export default function About() {
  return (
    <section className="section section-alt" id="over">
      <div className="container about-grid">
        <div className="about-visual reveal" aria-hidden="true">
          <div className="planks">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="about-quote">
            <p>&ldquo;Een klus is pas af als we er zelf zouden willen wonen.&rdquo;</p>
            <span>— GMT Klussen</span>
          </div>
        </div>
        <div className="about-text reveal">
          <span className="kicker">Over GMT Klussen</span>
          <h2>Een vakman die meedenkt en doet wat hij belooft</h2>
          <p>
            GMT Klussen is een klusbedrijf voor particulieren, verhuurders en
            bedrijven. Of u nu een kamer wilt laten schilderen, een nieuwe vloer wilt
            of uw hele woning wilt opknappen na een verhuizing: wij nemen het werk
            van begin tot eind uit handen.
          </p>
          <p>
            We werken met goede materialen, beschermen uw meubels en vloeren, en
            laten de ruimte schoon achter. U krijgt vooraf een duidelijke prijs en
            weet precies wanneer we komen.
          </p>
          <div className="about-stats">
            <div>
              <strong>1</strong>
              <span>vast aanspreekpunt</span>
            </div>
            <div>
              <strong>0</strong>
              <span>verrassingen achteraf</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>netjes opgeleverd</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
