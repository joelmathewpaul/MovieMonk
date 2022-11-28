import React from "react";
import { useLocation, Link } from "react-router-dom";
import './index.css';

function Navigation() {
  const { pathname } = useLocation();
  const links = [
    { label: 'Action', icon: 'fa-home', image:'../../images/action.png', path: '/action' },
    { label: 'Horror', icon: 'fa-home', image:'../../images/horror.png', path: '/horror' },
    { label: 'Thriller', icon: 'fa-home', image:'../../images/thriller.png', path: '/thriller' },
    { label: 'Fiction', icon: 'fa-home', image:'../../images/fiction.png', path: '/fiction' },
    { label: 'Sci-Fi', icon: 'fa-home', image:'../../images/sci-fi.png', path: '/sci-fi' },
    { label: 'Love & Romance', icon: 'fa-home', image:'../../images/romance.png', path: '/romance' },
    { label: 'Kids & family', icon: 'fa-home', image:'../../images/family.png', path: '/kids-and-family' },
  ];
  return (
    <ul className="nav nav-pills flex-column">
      {
        links.map((link, ndx) => {
          return (
            <li key={ndx} className="nav-item">
              <Link
                to={link.path} id={link.label}
                className={`text-nowrap nav-link ${pathname.indexOf(link.path) >= 0 ? 'active' : ''}`}>
                <img src={link.image} className={'rounded-circle'} width={30} height={30}/>&nbsp;&nbsp;
                {/*<i className={`fa ${link.icon} text-center`}/>*/}
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