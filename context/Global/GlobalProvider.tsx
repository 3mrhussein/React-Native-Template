import { getCurrentUser } from '@/api/user';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from 'react';
import { GlobalContextType } from './Global.types';
import useLanguage, { LanguageCode, LanguageType } from '@/hooks/useLanguage';
import { changeLanguage } from 'i18next';

const initialContextValue = {
  isLoggedIn: false,
  user: null,
  isLoading: false,
  isDataUpToDate: false,
  language: 'en' as LanguageCode,
  changeLanguage,
};

const GlobalContext = createContext<GlobalContextType>(initialContextValue);

export const useGlobalContext = (): GlobalContextType =>
  useContext(GlobalContext);

const GlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataUpToDate, setIsDataUpToDate] = useState(true);
  const { textDirection, language, languageList } = useLanguage();
  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res as any);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
        isDataUpToDate,
        setIsDataUpToDate,
        language,
        changeLanguage,
        languageList,
        textDirection,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
