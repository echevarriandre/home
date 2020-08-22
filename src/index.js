import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/tailwind.output.css';
import * as serviceWorker from './serviceWorker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Links from './components/links';
import Login from './components/login';

function App() {

  const [search, setSearch] = useState('');

  let component;
  if (!localStorage.getItem("auth_token"))
    component = <Links />
  else
    component = <Login />

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let updatedSearch = search.replace(' ', '+');
      window.open(`https://duckduckgo.com/?q=${updatedSearch}`, "_self")
    }

  }

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  }

  return (
    <>
      <div className="fixed right-0 m-5">
        <button onClick={() => alert('todo')} className="text-red-700 hover:text-red-400 duration-200 focus:outline-none text-2xl">
          <FontAwesomeIcon icon={faPen}/>
        </button>
      </div>

      <div className="flex h-screen">
        <div className="m-auto text-white text-lg">
          <section id="title" className="text-center select-none mb-6">
            <span className="text-red-400">echevarria</span>
            <span className="text-indigo-400"> ~/home</span>
            <span className="text-green-500"> > </span> ddg

            <div className="mt-4 w-3/4 shadow m-auto">
              <input 
                type="text"
                className="caret-input w-5/6 p-2 bg-gray-800 rounded-l focus:outline-none"
                placeholder="search"
                autoFocus
                onKeyPress={handleKeyDown}
                onChange={handleSearch}
                value={search}
              />
              <button
                className="focus:outline-none w-1/6 p-2 bg-gray-800 hover:bg-green-500 hover:text-white duration-200 rounded-r text-gray-600"
              >
                <FontAwesomeIcon icon={faChevronRight}/>
              </button>

            </div>
          </section>

          {component}
        </div>
      </div>
    </>
  );
}

export default App;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
