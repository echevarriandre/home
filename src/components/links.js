import React from 'react';
import LinkService from '../services/LinkService';

class Links extends React.Component {
  constructor() {
    super();
    this.state = {
      links: {},
      linksLoaded: false
    }
  }

  componentDidMount() {
    LinkService.getAll()
    .then(response => {
      // Just so it doesn't look very choppy when switching divs on the render method
      let self = this;
      setTimeout(() => { 
        self.setState({
          links: response.data,
          linksLoaded: true
        });
      }, 250);
      
    })
    .catch(error => {
      console.log(error);
    })
  }

  sortLinks(links) {
    let sortedLinks = {};
    for(let i = 0; i < links.length; i++) {
      const link = links[i];

      if (sortedLinks[link.type] === undefined)
        sortedLinks[link.type] = [];

      sortedLinks[link.type].push(link);
    }

    return sortedLinks;
  }

  getLinksInJsx(links) {
    let children = [];
    for(let j = 0; j < links.length; j++) {
      const link = links[j];
      children.push(
        <div key={j}>
          <a
            href={link.url}
            className="text-gray-600 hover:text-red-500 duration-200 cursor-pointer"
          >
            {link.name}
          </a>
        </div>
      );
    }

    return children;
  }

  render() {
    let linksJSX = [];
    if (this.state.linksLoaded) {
      let sortedLinks = this.sortLinks(this.state.links);
      for (let prop in sortedLinks)
        if (Object.prototype.hasOwnProperty.call(sortedLinks, prop)) {
          let children = this.getLinksInJsx(sortedLinks[prop]);
  
          linksJSX.push(
            <div className="bg-gray-800 shadow py-2 px-5 m-3 h-full rounded">
              <div>
                <span className="text-indigo-500">~/{prop}</span>
                <span className="text-green-500"> ></span>
              </div>
              <div className="pb-2">
                {children}
              </div>
            </div>
          );
        }
    } else {
      for(let i = 0; i < 4; i++)
        linksJSX.push(
          <div key={i} className="bg-gray-800 shadow py-2 px-5 m-3 h-full rounded">
            <div>
              <div className="mb-2 text-indigo-500">~/loading</div>
            </div>
            <div className="pb-2 animate-pulse">
              <div className="bg-gray-700 rounded w-24 mb-2 px-10 py-3 text-center"></div>
              <div className="bg-gray-700 rounded w-24 mb-2 px-10 py-3 text-center"></div>
              <div className="bg-gray-700 rounded w-24 mb-2 px-10 py-3 text-center"></div>
              <div className="bg-gray-700 rounded w-24 mb-2 px-10 py-3 text-center"></div>
              <div className="bg-gray-700 rounded w-24 mb-2 px-10 py-3 text-center"></div>
              <div className="bg-gray-700 rounded w-24 mb-2 px-10 py-3 text-center"></div>
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