import React from 'react';
import { Link } from 'react-router-dom';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import PropTypes from 'prop-types';
import ThemeContext from 'src/context/ThemeContext';
import LocaleContext from 'src/context/LocaleContext';
import { header } from 'src/utils/content';
import { ReactComponent as MDMoreVert } from 'src/assets/icons/more_vert_black_24dp.svg';

function Header({ user, onButtonClick }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <header className="w-full h-auto fixed top-0 left-0 z-10">
      <nav className="flex items-center justify-between w-full h-16 p-2 m-0 align-middle bg-white border-0 dark:bg-slate-900">
        <Link className="no-underline overflow-hidden" to="/">          
          <h1 className="p-0 m-2 text-slate-900 text-xl font-Roboto font-medium text-ellipsis overflow-hidden whitespace-nowrap dark:text-slate-200">{header[locale].appName}</h1>
        </Link>
        <div className="inline-block relative z-10">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="block w-10 h-10 p-2 m-1 bg-transparent rounded-full border-0 hover:bg-slate-200 focus:bg-slate-200 text-slate-600 outline-none dark:hover:bg-slate-700 dark:focus:bg-slate-700" type="button" aria-label="open menu">
              <MDMoreVert />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="w-[192px] h-auto py-2 m-4 bg-white rounded shadow-02dp relative z-20 dark:bg-slate-800">
                <DropdownMenu.Group>
                  <DropdownMenu.Item className="inline-block w-full h-9 leading-9 px-4 py-0 m-0 align-middle font-Roboto font-normal text-sm text-slate-900 text-ellipsis text-left whitespace-nowrap overflow-hidden outline-none dark:text-slate-400">Hi, {user.name}</DropdownMenu.Item>
                  <DropdownMenu.Separator className="h-[1px] bg-slate-900/10 my-1" />
                  <DropdownMenu.Item asChild={true}>
                    <button className="inline-block w-full h-9 leading-9 px-4 py-0 m-0 align-middle font-Roboto font-normal text-sm text-slate-900 text-ellipsis text-left whitespace-nowrap overflow-hidden cursor-pointer outline-none hover:bg-slate-200 focus:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:bg-slate-700" onClick={toggleTheme}>{header[locale].theme}: <b>{theme}</b></button>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild={true}>
                    <button className="inline-block w-full h-9 leading-9 px-4 py-0 m-0 align-middle font-Roboto font-normal text-sm text-slate-900 text-ellipsis text-left whitespace-nowrap overflow-hidden cursor-pointer outline-none hover:bg-slate-200 focus:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:bg-slate-700" onClick={toggleLocale}>{header[locale].language}: <b>{locale}</b></button>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild={true}>
                    <button className="inline-block w-full h-9 leading-9 px-4 py-0 m-0 align-middle font-Roboto font-normal text-sm text-slate-900 text-ellipsis text-left whitespace-nowrap overflow-hidden cursor-pointer outline-none hover:bg-slate-200 focus:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:bg-slate-700" onClick={onButtonClick}>{header[locale].exit}</button>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Header;