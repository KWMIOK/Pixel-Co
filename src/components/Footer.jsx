import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer-klar">
      <div className="footer-meta">
        <div className="container footer-meta-inner">
          <span>{t.footerCopy}</span>
        </div>
      </div>
    </footer>
  );
}
