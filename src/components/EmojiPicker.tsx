import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [
    [emojiValueFromCurrentRender, previousEmoji],
    queueRerenderWithNewEmojiValues,
  ] = useState(["🍳", ""]);

  const [storedEmojiArray, rerenderStoredEmojiArray] = useState<string[]>([])

  const handleChangetoSmiley = () => {
    queueRerenderWithNewEmojiValues(["😀", emojiValueFromCurrentRender]);
  };

  const handleChangetoCook = () => {
    queueRerenderWithNewEmojiValues(["🍳", emojiValueFromCurrentRender]);
  };

  const handleChangetoBeans = () => {
    queueRerenderWithNewEmojiValues(["🌯", emojiValueFromCurrentRender]);
  };

  const handleChangetoMonkey = () => {
    queueRerenderWithNewEmojiValues(["🐒", emojiValueFromCurrentRender]);
  };

  const handleStoreEmojis = () => {
    rerenderStoredEmojiArray([...storedEmojiArray,emojiValueFromCurrentRender])
  }

  console.log(emojiValueFromCurrentRender, previousEmoji, storedEmojiArray);

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Stored Emojis: {storedEmojiArray}</p>
      <p>Your previous emoji: {previousEmoji}</p>
      <p>Counter: {emojiValueFromCurrentRender}</p>
      <button onClick={handleChangetoSmiley}>😀</button>
      <button onClick={handleChangetoCook}>🍳</button>
      <button onClick={handleChangetoBeans}>🌯</button>
      <button onClick={handleChangetoMonkey}>🐒</button>
      <hr />
      <button onClick = {handleStoreEmojis}>Store Emojis</button>
    </>
  );
}
