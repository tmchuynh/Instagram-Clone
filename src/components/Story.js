import "../styles/story.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

/**
 * It returns a div with a profile icon and a random account name
 * @returns A div with a profile icon and a span with the account name.
 */
function Story() {
  /* Getting a random user from the users array and getting the username from that user. */
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  /* Checking if the account name is longer than 10 characters. If it is, it is shortening it to 10
  characters and adding an ellipsis. */
  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} />
      <span className="accountName">{accountName}</span>
    </div>
  );
}

export default Story;