import React from 'react';

class Links extends React.Component {
  render() {
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
          <div key={j}>
            <a 
              href="https://www.example.com" 
              className="text-gray-600 hover:text-red-500 duration-200 cursor-pointer"
            >
              {element}
            </a>
          </div>
        );
      });
  
      linksJSX.push(
        <div key={i} className="bg-gray-800 shadow py-2 px-5 m-3 h-full rounded">
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
      <section id="links-container" className="md:flex">
          {linksJSX}
      </section>
    );
  }
}

export default Links;