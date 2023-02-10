import "../styles/footer.scss";

/**
 * It returns a div with two children, an unordered list and a div
 * @returns A div with a class of footer, an unordered list with a class of links, and a div with a
 * class of copyright.
 */
function Footer() {
  return (
    <div className="footer">
      <ul className="links">
        <li>About</li>
        <li>Help</li>
        <li>Press</li>
        <li>API</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Locations</li>
        <li>Top Accounts</li>
        <li>Hashtags</li>
        <li>Language</li>
      </ul>
      <div className="copyright">@ 2020 INSTAGRAM FROM FACEBOOK</div>
    </div>
  );
}

export default Footer;