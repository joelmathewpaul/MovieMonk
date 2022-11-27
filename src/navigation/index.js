import React from "react";
import { useLocation, Link } from "react-router-dom";

function Navigation() {
  const { pathname } = useLocation();
  const links = [
    { label: 'Action', icon: 'fa-home', path: '/action' },
    { label: 'Horror', icon: 'fa-home', path: '/horror' },
    { label: 'Thriller', icon: 'fa-home', path: '/thriller' },
    { label: 'Fiction', icon: 'fa-home', path: '/fiction' },
    { label: 'Sci-Fi', icon: 'fa-home', path: '/sci-fi' },
    { label: 'Love & Romance', icon: 'fa-home', path: '/romance' },
    { label: 'Kids & family', icon: 'fa-home', path: '/kids-and-family' },
  ];
  return (
    <ul className="list-group">
      {
        links.map((link, ndx) => {
          return (
            <li key={ndx} className="list-group-item border-0">
              <Link
                to={link.path} id={link.label}
                className={`text-nowrap ${pathname.indexOf(link.path) >= 0 ? 'active' : ''}`}>
                <i className={`fa ${link.icon} text-center`}></i>
                <span className="ttr-label">{link.label}</span>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

export default Navigation;