import { useState } from 'react';
import i18n from '@/i18n/config';
import { switchLanguage } from '@/helpers/utils';

export type LanguageCode = 'en' | 'ar';

export interface LanguageType {
  title: string;
  code: LanguageCode;
}

const languageList: LanguageType[] = [
  { title: 'English', code: 'en' },
  { title: 'عربي', code: 'ar' },
];
const useLanguage = () => {
  const [language, setLanguage] = useState<LanguageCode>(
    i18n.language as LanguageCode
  );
  const toggleLanguage = () => {
    if (i18n.language === 'en') {
      switchLanguage('ar');
      setLanguage('ar');
    } else {
      switchLanguage('en');
      setLanguage('en');
    }
  };
  const textDirection =
    language === 'en' ? 'items-start text-left' : 'items-end text-right';
  console.log('Language Hook');
  return {
    textDirection,
    languageList,
    language,
    toggleLanguage,
  };
};

export default useLanguage;
