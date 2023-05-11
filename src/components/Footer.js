import { pageLinks, socialLinks } from "../data";
export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((pagelink) => {
          return (
            <li key={pagelink.id}>
              <a href={pagelink.href} className="footer-link">
                {pagelink.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((sociallink) => {
          return (
            <li key={sociallink.id}>
              <a
                href={sociallink.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={sociallink.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
