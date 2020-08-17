import React from 'react';

function App() {
  const links = {
    'cloud': ['gmail', 'gmail2', 'google drive', 'google photos'],
    'social': ['youtube', 'reddit', 'twitch', 'twitter', 'whatsapp'],
    'pirating': ['fake email', 'nyaa', 'rarbg', 'fitgirl', 'cs.rin.ru', 'drive bypass', 'r/piracy'],
    'services': ['github', 'bitbucket', 'google maps', 'wetransfer'],
  };

  let linksJSX = []
  let linkEntries = Object.entries(links)
  for(let i = 0; i < linkEntries.length; i++) {
    let children = [];
    linkEntries[i][1].forEach((element, j) => {
      children.push(
        <li key={j} className="ml-10">
          <a href="https://www.example.com" className="hover:bg-pink-500 hover:text-white cursor-pointer">
            {element}
          </a>
        </li>
      );
    });

    linksJSX.push(
      <li key={i}>
        <span className="text-pink-500">{linkEntries[i][0]}</span>
        <ul>
          {children}
        </ul>
      </li>
    );
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto text-white text-lg">
        <span>
          <span className="text-red-400">xadden</span>
          @
          <span className="text-red-400">home </span>
          ~
          > tree
        </span>
        <div>
          <span className="inline">.</span>
          <ul>{linksJSX}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
