import logo from "../images/logo.svg";
import { pageLinks } from "../data";
import { socialLinks } from "../data";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((pagelink) => {
            return (
              <li key={pagelink.id}>
                <a href={pagelink.href} className="nav-link">
                  {" "}
                  {pagelink.text}{" "}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((social) => {
            const { id, href, icon } = social;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
