import { useLanguage } from "../context/LanguageContext";

const clients = ["client1", "client2", "client3", "client4"];

export default function TrustedBy() {
  const { t } = useLanguage();

  return (
    <section id="clients" className="section-numbers bg-black">
      <div className="container section-y section-compact">
        <p className="section-kicker">{t.clientsKicker}</p>
        <h2 className="display-section section-intro">{t.clientsIntro}</h2>
        <div className="clients-grid">
          {clients.map((key) => (
            <div key={key} className="client-cell">
              <p className="client-name">{t[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
