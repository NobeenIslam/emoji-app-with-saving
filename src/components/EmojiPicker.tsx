import { useState } from "react";
import emojiAsList from "./emojiAsList";

function EmojiPicker(): JSX.Element {
  const [[emojiValueFromCurrentRender, previousEmoji],queueRenderer] = useState(["🍳", ""]);

  const [storedEmojiArray, rerenderStoredEmojiArray] = useState<string[]>([]);

  const appendCurrentEmoji = (storedEmojiArray: string[]): string[] => [...storedEmojiArray,emojiValueFromCurrentRender];
  ///Note remember that this storedEmojiArray is function scoped the one we want
  //is passed in to the arrow function

  const handleChangetoSmiley = () => {
    queueRenderer(["😀", emojiValueFromCurrentRender]);
    rerenderStoredEmojiArray(appendCurrentEmoji);
  };

  const handleChangetoCook = () => {
    queueRenderer(["🍳", emojiValueFromCurrentRender]);
    rerenderStoredEmojiArray(appendCurrentEmoji);
  };

  const handleChangetoBeans = () => {
    queueRenderer(["🌯", emojiValueFromCurrentRender]);
    rerenderStoredEmojiArray(appendCurrentEmoji);
  };

  const handleChangetoMonkey = () => {
    queueRenderer(["🐒", emojiValueFromCurrentRender]);
    rerenderStoredEmojiArray(appendCurrentEmoji);
  };

  const listOfEmojis: JSX.Element[] = storedEmojiArray.map(emojiAsList);
  //Create our array of JSX Components which have the HTML emoji format

  const mostRecentEmojiList = listOfEmojis.reverse().slice(0, 5);

  console.log(emojiValueFromCurrentRender, previousEmoji, storedEmojiArray);

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Emoji: {emojiValueFromCurrentRender}</p>
      <p>Your previous emoji: {previousEmoji}</p>
      <p>Stored Emojis: {storedEmojiArray}</p>
      <ol>{mostRecentEmojiList}</ol>
      <button onClick={handleChangetoSmiley}>😀</button>
      <button onClick={handleChangetoCook}>🍳</button>
      <button onClick={handleChangetoBeans}>🌯</button>
      <button onClick={handleChangetoMonkey}>🐒</button>
      <hr />
    </>
  );
}

export default EmojiPicker;
