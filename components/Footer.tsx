import { site } from "@/lib/site";
import { Brand } from "./Header";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="brand">
            <Brand />
          </a>
          <p>Schilderwerk, vloeren en klussen in en om het huis. Vakwerk, netjes opgeleverd.</p>
        </div>
        <div className="footer-col">
          <h4>Diensten</h4>
          <a href="#diensten">Schilderwerk</a>
          <a href="#diensten">Vloeren</a>
          <a href="#diensten">Stucwerk &amp; behang</a>
          <a href="#diensten">Timmerwerk &amp; klussen</a>
        </div>
        <div className="footer-col">
          <h4>Bedrijf</h4>
          <a href="#over">Over ons</a>
          <a href="#werkwijze">Werkwijze</a>
          <a href="#faq">Veelgestelde vragen</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span className="muted">KvK {site.kvk}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} GMT Klussen. Alle rechten voorbehouden.</span>
        <span className="muted">Schilderwerk · Vloeren · Stucwerk · Behang · Timmerwerk</span>
      </div>
    </footer>
  );
}
