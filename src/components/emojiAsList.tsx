import ListElement from "./ListElement";

/*for each emoji in stored Emoji Array
      create an object with the omoji as a propery and
      wack it into the list component
  */

function emojiAsList(inputEmoji: string): JSX.Element {
  return <ListElement emoji={inputEmoji} />;
}

export default emojiAsList;
