import React from "react";
import { useLocation, Link } from "react-router-dom";
import links from './categories.json';

/**
 * A navigation component that renders all the possible menu
 * options we have in our project.
 * 
 * @returns Navigation menu html
 */
function UserNavigation() {
  const { pathname } = useLocation();
  return (
    <>
      <ul className="nav nav-pills flex-column">
        {
          links.map((link, ndx) => {
            return (
              <li key={ndx} className="nav-item">
                <Link
                  to={link.path} id={link.label}
                  className={`text-nowrap nav-link text-primary ${pathname === link.path ? 'active' : ''}`}>
                  <img src={link.image} className={'rounded-circle'} width={20} height={20} />&nbsp;&nbsp;
                  <span className="ttr-label">{link.label}</span>
                </Link>
              </li>
            );
          })
        }
      </ul>
    </>
  );
};

export default UserNavigation;