import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [[emojiValueFromCurrentRender,previousEmoji], queueRerenderWithNewEmojiValues] =
    useState(["🍳",""]);


  const handleChangetoSmiley = () => {
    queueRerenderWithNewEmojiValues(["😀",emojiValueFromCurrentRender]);
  };

  const handleChangetoCook= () => {
    queueRerenderWithNewEmojiValues(["🍳",emojiValueFromCurrentRender]);
  };

  const handleChangetoBeans= () => {
    queueRerenderWithNewEmojiValues(["🌯",emojiValueFromCurrentRender]);
  };

  const handleChangetoMonkey= () => {
    queueRerenderWithNewEmojiValues(["🐒",emojiValueFromCurrentRender]);
  };


  console.log(emojiValueFromCurrentRender,previousEmoji);

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your previous emoji: {emojiValueFromCurrentRender}</p>
      <p>Counter: {previousEmoji}</p>
      <button onClick={handleChangetoSmiley}>😀</button>
      <button onClick={handleChangetoCook}>🍳</button>
      <button onClick={handleChangetoBeans}>🌯</button>
      <button onClick={handleChangetoMonkey}>🐒</button>
      <hr />
    </>
  );
}
