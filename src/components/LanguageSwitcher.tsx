import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  currentLang: string;
  onChange: (lang: string) => void;
};

const LanguageSwitcher: React.FC<Props> = ({ currentLang, onChange }) => {
  const toggleLanguage = () => {
    const newLang = currentLang === 'uz' ? 'en' : 'uz';
    onChange(newLang);
  };

  return (
    <div className="language-switcher">
      <motion.button
        onClick={toggleLanguage}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.2 }}
        >
        {currentLang.toUpperCase()}
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;
