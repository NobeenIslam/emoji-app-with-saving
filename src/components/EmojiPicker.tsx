import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [
    [emojiValueFromCurrentRender, previousEmoji],
    queueRerenderWithNewEmojiValues,
  ] = useState(["🍳", ""]);

  const [storedEmojiArray, rerenderStoredEmojiArray] = useState<string[]>([])

  const handleChangetoSmiley = () => {
    queueRerenderWithNewEmojiValues(["😀", emojiValueFromCurrentRender]);
    rerenderStoredEmojiArray([...storedEmojiArray,emojiValueFromCurrentRender])
  };

  const appendCurrentEmoji = (storedEmojiArray: string[]) => [...storedEmojiArray, emojiValueFromCurrentRender]

  const handleChangetoCook = () => {
    queueRerenderWithNewEmojiValues(["🍳", emojiValueFromCurrentRender]);
    rerenderStoredEmojiArray(appendCurrentEmoji)
  };

  const handleChangetoBeans = () => {
    queueRerenderWithNewEmojiValues(["🌯", emojiValueFromCurrentRender]);
    rerenderStoredEmojiArray(appendCurrentEmoji)
  };

  const handleChangetoMonkey = () => {
    queueRerenderWithNewEmojiValues(["🐒", emojiValueFromCurrentRender]);
    rerenderStoredEmojiArray(appendCurrentEmoji)
  };

 

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

    </>
  );
}
