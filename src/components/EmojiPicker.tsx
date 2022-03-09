import { useState } from "react";
import emojiAsList from "./emojiAsList";

function EmojiPicker(): JSX.Element {
  const [[currentEmoji, previousEmoji,storedEmojiArray],queueRenderer] = useState<[string,string,string[]]>(["🍳", "",[]]);

  ///Note remember that this storedEmojiArray is function scoped the one we want
  //is passed in to the arrow function

  const handleChangetoSmiley = () => {
    storedEmojiArray.push(currentEmoji)
    queueRenderer(["😀", currentEmoji, storedEmojiArray]);
  };

  const handleChangetoCook = () => {
    storedEmojiArray.push(currentEmoji)
    queueRenderer(["🍳", currentEmoji, storedEmojiArray]);
  };

  const handleChangetoBeans = () => {
    storedEmojiArray.push(currentEmoji)
    queueRenderer(["🌯", currentEmoji,storedEmojiArray]);
  };

  const handleChangetoMonkey = () => {
    storedEmojiArray.push(currentEmoji)
    queueRenderer(["🐒", currentEmoji,storedEmojiArray]);
  };

  const listOfEmojis: JSX.Element[] = storedEmojiArray.map(emojiAsList);
  //Create our array of JSX Components which have the HTML emoji format

  const mostRecentEmojiList = listOfEmojis.reverse().slice(0, 5);

  console.log(currentEmoji, storedEmojiArray);

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Emoji: {currentEmoji}</p>
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


  /*
state 0 
Render CURRENT_EMOJI with cook
Render PREVIOUS_EMOJI as empty
Render EMOJI_HISTORY as empy array

state 1 queuing
Render CURRENT_EMOJI with happy via button press
Render PREVIOUS_EMOJI as with STATE0:CURRENT_EMOJI
Render EMOJI_HISTORY with STATE1:CURRENT_EMOJI Appended

state 2
Render CURRENT_EMOJI with beans via button press
Render PREVIOUS_EMOJI as with STATE1:CURRENT_EMOJI
Render EMOJI_HISTORY with STATE1:CURRENT_EMOJI Appended
*/