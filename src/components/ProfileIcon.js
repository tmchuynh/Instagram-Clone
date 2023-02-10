import "../styles/profileIcon.scss";


/**
 * If the image prop is passed in, use that image, otherwise use a random image from the Pravatar API.
 * @param props - This is the object that contains all the properties that were passed to the
 * component.
 * @returns A div with a class of storyBorder and an img tag with a class of profileIcon and iconSize
 * and a src of profileImage and an alt of profile.
 */
function ProfileIcon(props) {
  const { iconSize, storyBorder, image } = props;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomId = getRandomInt(1, 70);

  /* This is a ternary operator. It's a shorthand way of writing an if/else statement. */
  let profileImage = image
    ? image
    : `https://i.pravatar.cc/150?img=${randomId}`;

  return (
    <div className={storyBorder ? "storyBorder" : ""}>
      <img
        className={`profileIcon ${iconSize}`}
        src={profileImage}
        alt="profile"
      />
    </div>
  );
}

export default ProfileIcon;