import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'src/pages/Home';
import Detail from 'src/pages/Detail';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';
import NotFound from 'src/pages/NotFound';
import Header from 'src/components/Header';
import ToggleButton from 'src/components/ToggleButton';
import ThemeContext from 'src/context/ThemeContext';
import LocaleContext from 'src/context/LocaleContext';
import { getUserLogged, putAccessToken } from 'src/data/network-data';
import { getTheme, putTheme } from 'src/data/theme-data';
import { getLocale, putLocale } from 'src/data/locale-data';

function App() {
  const [authenticated, setAuthenticated] = React.useState(null);
  const [theme, setTheme] = React.useState(() => getTheme() || 'light');
  const [locale, setLocale] = React.useState(() => getLocale() || 'id');
  const [initializing, setInitializing] = React.useState(true);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthenticated(data);
  }

  const onLogoutHandler = () => {
    setAuthenticated(null);
    putAccessToken('');
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      putTheme(newTheme);
      return newTheme;
    });
  }

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  React.useEffect(() => {
    if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      putLocale(newLocale);
      return newLocale;
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  React.useState(() => {
    async function setCurrentUserLogged() {
      const { data } = await getUserLogged();
      setAuthenticated(data);
      setInitializing(false);
    };

    setCurrentUserLogged();
  }, [authenticated]);

  if (initializing) {
    return null;
  }

  if (authenticated === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <ToggleButton />
          <Routes>
            <Route path="/*" element={<Login onLoginSuccess={onLoginSuccess} />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <Header user={authenticated} onButtonClick={onLogoutHandler} />
        <main className="w-full h-screen pt-16 px-4 md:px-16 m-0 dark:bg-slate-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
