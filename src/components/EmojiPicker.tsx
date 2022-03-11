import { useState } from "react";
import emojiAsList from "./emojiAsList";

function EmojiPicker(): JSX.Element {
  const [emojiHistory,queueRenderer] = useState<string[]>(["🍳"]);
  const currentEmoji = emojiHistory[0];

  ///Note remember that this storedEmojiArray is function scoped the one we want
  //is passed in to the arrow function

  const handleChangetoSmiley = () => {
    queueRenderer(["😀", ...emojiHistory])
  };

  const handleChangetoCook = () => {
    queueRenderer(["🍳", ...emojiHistory]);
  };

  const handleChangetoBeans = () => {
    queueRenderer(["🌯", ...emojiHistory]);
  };

  const handleChangetoMonkey = () => {
    queueRenderer(["🐒", ...emojiHistory]);
  };

  const listOfEmojis: JSX.Element[] = emojiHistory.map(emojiAsList);
  //Create our array of JSX Components which have the HTML emoji format

  const mostRecentEmojiList = listOfEmojis.slice(0, 5);

  console.log("Current render", emojiHistory);

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Emoji: {currentEmoji}</p>
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


/*
state 0 
Render Emoji History as array with Cook in it
Declare CURRENT_EMOJI with cook;s first array
Declare PREVIOUS_EMOJI as empty


state 1 queuing
Render Emoji History with happy appended
Render CURRENT_EMOJI with 2nd element of emoji history
Render PREVIOUS_EMOJI with first element of emoji history

*/
