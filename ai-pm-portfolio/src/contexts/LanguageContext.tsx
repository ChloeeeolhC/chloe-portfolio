import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'cn' | 'en';

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  t: (cn: string, en: string) => string;
}

const LanguageContext = createContext<LangCtx>({
  lang: 'cn',
  toggle: () => {},
  t: (cn) => cn,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() =>
    (localStorage.getItem('lang') as Lang) || 'cn'
  );

  const toggle = useCallback(() => {
    setLang(prev => {
      const next = prev === 'cn' ? 'en' : 'cn';
      localStorage.setItem('lang', next);
      return next;
    });
  }, []);

  const t = useCallback(
    (cn: string, en: string) => (lang === 'cn' ? cn : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
