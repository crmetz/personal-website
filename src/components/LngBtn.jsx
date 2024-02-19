import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';
import usaFlag from '../assets/usaFlag.png';
import brazilFlag from '../assets/brazilFlag.png';


function LanguageButton () {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const lngs = {
    en: { nativeName: 'English' },
    pt: { nativeName: 'Portuguese' }
  };

  return (
    <div className="language-container">
      <button className="flag-button" onClick={() => setShowDropdown(!showDropdown)}>
        <img className="flag-image" src={i18n.language === 'en' ? usaFlag : brazilFlag} alt={i18n.language === 'en' ? 'USA Flag' : 'Brazil Flag'} />
        <FaChevronDown />
      </button>
      {showDropdown && (
        <div className="dropdown">
          {Object.keys(lngs).map((lng) => (
            <div
              key={lng}
              className="dropdown-item"
              onClick={() => {
                i18n.changeLanguage(lng);
                setShowDropdown(false);
              }}
            >
              <img className="flag-image" src={lng === 'en' ? usaFlag : brazilFlag} alt={lng === 'en' ? 'USA Flag' : 'Brazil Flag'} />
              {lngs[lng].nativeName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageButton;