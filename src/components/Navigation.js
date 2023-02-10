import "../styles/navigation.scss";
import Menu from "./Menu";
import logo from "../images/instagramLogo.png";
import searchIcon from "../images/searchIcon.png";

/**
 * It returns a div with a class of navigation, which contains a div with a class of container, which
 * contains an image with a class of logo, which contains the logo image, which contains a div with a
 * class of search, which contains an image with a class of searchIcon, which contains the search icon
 * image, which contains a span with a class of searchText, which contains the text "Search", which
 * contains the Menu component
 * @returns A div with a class of navigation.
 */
function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src={logo} alt="instagram logo" />
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <span className="searchText">Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;