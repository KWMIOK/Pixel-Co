import { useLanguage } from "../context/LanguageContext";
import { contactEmail, contactPhone, contactPhoneDisplay } from "../data/translations";

function EmailIcon() {
  return (
    <svg
      className="contact-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="contact-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 4h3l1.5 5-2 1.5a11 11 0 0 0 5 5L17.5 14l5 1.5v3a2 2 0 0 1-2.1 2 16 16 0 0 1-14.25-14.2A2 2 0 0 1 6.5 4z" />
    </svg>
  );
}

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-dark contact-section">
      <div className="container section-y section-compact">
        <h2 className="display-section">{t.contactTitle}</h2>
        <p className="contact-lead text-secondary-klar">{t.contactLead}</p>
        <ul className="contact-details">
          <li>
            <a href={`mailto:${contactEmail}`} className="contact-link">
              <EmailIcon />
              <span>{contactEmail}</span>
            </a>
          </li>
          <li>
            <a href={`tel:${contactPhone}`} className="contact-link">
              <PhoneIcon />
              <span>{contactPhoneDisplay}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
