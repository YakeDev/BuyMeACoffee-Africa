import React from 'react';
import { useI18n } from '../context/I18nContext'; // Correct relative path to src/context/I18nContext

// Define your sections here (match IDs used in Guide.jsx)
const sections = [
  { id: 'overview', titleKey: 'guide.overview.title', defaultValue: 'Overview' },
  { id: 'getting-started', titleKey: 'guide.gettingStarted.title', defaultValue: 'Getting Started' },
  { id: 'discover-creators', titleKey: 'guide.discover.title', defaultValue: 'Discover Creators' },
  { id: 'support-creator', titleKey: 'guide.support.title', defaultValue: 'Support a Creator' },
  { id: 'dashboard', titleKey: 'guide.dashboard.title', defaultValue: 'Dashboard' },
  { id: 'security-privacy', titleKey: 'guide.security.title', defaultValue: 'Security & Privacy' },
  { id: 'faq', titleKey: 'guide.faq.title', defaultValue: 'FAQ' },
  { id: 'contact-support', titleKey: 'guide.contact.title', defaultValue: 'Contact & Support' },
  { id: 'coming-soon', titleKey: 'guide.comingSoon.title', defaultValue: 'Coming Soon' },
  { id: 'license', titleKey: 'guide.license.title', defaultValue: 'License' },
];

const GuideSidebar = () => {
  const { t } = useI18n();

  // Basic smooth scroll handler (optional, but nice)
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="space-y-4 border-r border-[#30190c1f] pr-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-latte)] mb-3">
        On this page
      </h3>
      <ul className="space-y-2 border-l border-[var(--surface-card-border)] pl-4 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleLinkClick(e, section.id)} // Optional smooth scroll
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:font-medium transition-colors duration-150"
            >
              {t(section.titleKey, { defaultValue: section.defaultValue })}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GuideSidebar;