import "../styles/stories.scss";
import Story from "./Story";
import HorizontalScroll from "react-scroll-horizontal";

/**
 * It returns a div with a class of stories. Inside the div is a HorizontalScroll component. Inside the
 * HorizontalScroll component is a Story component.
 * @returns A div with a class of stories.
 */
function Stories() {
  return (
    <div className="stories">
      <HorizontalScroll className="scroll" reverseScroll={true}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HorizontalScroll>
    </div>
  );
}

export default Stories;