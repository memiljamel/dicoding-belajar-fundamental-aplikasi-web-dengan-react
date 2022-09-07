import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from 'src/pages/Home';
import Detail from 'src/pages/Detail';
import NotFound from 'src/pages/NotFound';

function App() {
  return (
    <React.Fragment>
      <header className="w-full h-auto fixed top-0 left-0 z-10">
        <nav className="flex items-center justify-between w-full h-16 p-2 m-0 align-middle bg-white border-0">
          <Link className="no-underline overflow-hidden" to="/">          
           <h1 className="p-0 m-2 text-black/[0.87] text-xl font-Roboto font-medium text-ellipsis overflow-hidden whitespace-nowrap">Notes App</h1>
          </Link>
        </nav>
      </header>
      <main className="pt-16 px-4 md:px-16 m-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
