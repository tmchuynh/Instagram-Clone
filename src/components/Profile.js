import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

/**
 * We're creating a function called Profile that takes in props as an argument. We're then
 * destructuring the props object to get the values of the properties we passed in. We're then creating
 * a variable called accountName that will either be the username we passed in or a random username
 * from the users array. We're then returning the JSX that will be rendered to the DOM
 * @param props - This is an object that contains all of the properties that were passed to the
 * component.
 * @returns A div with a class of profile.
 */
function Profile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
  } = props;

  /* This is a ternary operator. It is a shorthand way of writing an if/else statement. */
  let accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username;

  /* Returning the JSX that will be rendered to the DOM. */
  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
      />
      {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{accountName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  );
}

export default Profile;