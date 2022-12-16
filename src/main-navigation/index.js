import React from "react";
import { useLocation, Link } from "react-router-dom";
import links from './categories.json';

/**
 * A navigation component that renders all the possible menu
 * options we have in our project.
 * 
 * @returns Navigation menu html
 */
function Navigation() {
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
                  {/*<i className={`fa ${link.icon} text-center`}/>*/}
                  <span className="ttr-label">{link.label}</span>
                </Link>
              </li>
            );
          })
        }
      </ul>
      <p className="text-center text-muted mt-5">
        <small>&copy; 2022 | All right reserved.</small>
        <br />
        <small>With <i className="fa fa-heart text-danger"></i> &nbsp;Saket, Joel, & Pratyasha</small>
      </p>
    </>
  );
};

export default Navigation;