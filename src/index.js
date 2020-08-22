import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/tailwind.output.css';
import * as serviceWorker from './serviceWorker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function App() {
  const links = {
    'cloud': ['gmail x', 'gmail e', 'gdrive', 'gphotos'],
    'social': ['youtube', 'reddit', 'twitch', 'twitter', 'whatsapp'],
    'pirating': ['fake email', 'nyaa', 'rarbg', 'fitgirl', 'cs.rin.ru', 'drive bypass', 'r/piracy'],
    'services': ['github', 'bitbucket', 'gmaps', 'wetransfer'],
  };

  let linksJSX = []
  let linkEntries = Object.entries(links)
  for(let i = 0; i < linkEntries.length; i++) {
    let children = [];
    linkEntries[i][1].forEach((element, j) => {
      children.push(
        <a href="https://www.example.com" className="text-gray-600 hover:text-red-500 duration-200 cursor-pointer clear-both float-left inline-block">
          {element}
        </a>
      );
    });

    linksJSX.push(
      <div className="bg-gray-800 py-2 px-5 m-3 h-full rounded">
        <div>
          <span className="text-indigo-500">~/{linkEntries[i][0]}</span>
          <span className="text-green-500"> ></span>
        </div>
        <div className="pb-2">
          {children}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed right-0 m-5">
        <button onClick={() => alert('todo')} className="text-red-700 hover:text-red-500 duration-200 focus:outline-none text-2xl">
          <FontAwesomeIcon icon={faPen}/>
        </button>
      </div>

      <div className="flex h-screen">
        <div className="m-auto text-white text-lg">
          <section id="title" className="text-center mb-6">
            <span className="text-red-400">echevarria</span>
            <span className="text-indigo-400"> ~/home</span>
            <span className="text-green-500"> > </span> ddg

            <div class="mt-4">
              <input type="text" className="caret-input md:w-3/4 w-64 p-2 bg-gray-800 rounded" autoFocus/>
            </div>
          </section>

          <section id="links-container" className="md:flex">
            {linksJSX}
          </section>
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
