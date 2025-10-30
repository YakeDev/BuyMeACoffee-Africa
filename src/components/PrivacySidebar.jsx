// src/components/PrivacySidebar.jsx
import React from 'react';
import { useI18n } from '../context/I18nContext'; // Adjust path if needed

// Define the sections for the Privacy Policy
const sections = [
  { id: 'introduction', titleKey: 'privacy.sidebar.introduction', default: 'Introduction' },
  { id: 'info-collected', titleKey: 'privacy.sidebar.infoCollected', default: 'Information We Collect' },
  { id: 'info-use', titleKey: 'privacy.sidebar.infoUse', default: 'How We Use Your Information' },
  { id: 'info-share', titleKey: 'privacy.sidebar.infoShare', default: 'How We Share Your Information' },
  { id: 'data-security', titleKey: 'privacy.sidebar.dataSecurity', default: 'Data Storage and Security' },
  { id: 'rights-choices', titleKey: 'privacy.sidebar.rightsChoices', default: 'Your Rights and Choices' },
  { id: 'childrens-privacy', titleKey: 'privacy.sidebar.childrensPrivacy', default: "Children's Privacy" },
  { id: 'contact-us', titleKey: 'privacy.sidebar.contactUs', default: 'Contact Us' },
];

const PrivacySidebar = () => {
  const { t } = useI18n(); // Using t for the "On this page" title

  // Smooth scroll handler
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust offset if needed based on your fixed navbar height
      const headerOffset = 100; // Example offset, adjust as needed
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  };

  return (
    <nav className="space-y-4 border-r border-[var(--surface-card-border)] pr-4"> {/* Use theme border */}
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-latte)] mb-3">
        {t('privacy.sidebar.onThisPage', { defaultValue: 'On this page' })}
      </h3>
      <ul className="space-y-2 border-l border-[var(--surface-card-border)] pl-4 text-sm"> {/* Use theme border */}
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleLinkClick(e, section.id)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:font-medium transition-colors duration-150"
            >
              {t(section.titleKey, { defaultValue: section.default })}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PrivacySidebar;