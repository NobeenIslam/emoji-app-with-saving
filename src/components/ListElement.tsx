import emojiProp from "./emojiprop";

function ListElement(props: emojiProp): JSX.Element {
    return (
        <li>{props.emoji}</li>
    );
  }

  export default ListElement