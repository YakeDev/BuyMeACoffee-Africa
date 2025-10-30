// src/components/PrivacySidebar.jsx
import React from 'react';
import { useI18n } from '../context/I18nContext'; // Adjust path if needed

// Define the sections for the Privacy Policy
const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'info-collected', title: 'Information We Collect' },
  { id: 'info-use', title: 'How We Use Your Information' },
  { id: 'info-share', title: 'How We Share Your Information' },
  { id: 'data-security', title: 'Data Storage and Security' },
  { id: 'rights-choices', title: 'Your Rights and Choices' },
  { id: 'childrens-privacy', title: 'Children\'s Privacy' },
  { id: 'contact-us', title: 'Contact Us' },
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
        {/* You might want to add a translation key for this */}
        On this page
      </h3>
      <ul className="space-y-2 border-l border-[var(--surface-card-border)] pl-4 text-sm"> {/* Use theme border */}
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleLinkClick(e, section.id)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:font-medium transition-colors duration-150"
            >
              {/* Titles are hardcoded for now, add translation keys if desired */}
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PrivacySidebar;