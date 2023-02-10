import "../styles/comment.scss";

/**
 * It takes in a props object, and returns a div with two child divs
 * @param props - This is the object that contains all the properties that were passed to the
 * component.
 * @returns A React component that displays the account name and comment.
 */
function Comment(props) {
  const { accountName, comment } = props;

  return (
    <div className="commentContainer">
      <div className="accountName">{accountName}</div>
      <div className="comment">{comment}</div>
    </div>
  );
}

export default Comment;