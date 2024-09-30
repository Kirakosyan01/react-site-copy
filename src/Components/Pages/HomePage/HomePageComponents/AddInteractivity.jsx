import style from "../HomePage.module.css";
import SearchVideoList from "../../../images/Screenshot 2024-09-28 185738.png";
import { Link } from "react-router-dom";

export function AddInteractivity() {
  return (
    <div className={style.add__interactivity}>
      <h2>Add interactivity wherever you need it</h2>
      <p>
        React components receive data and return what should appear on the
        screen. You can pass them new data in response to an interaction, like
        when the user types into an input. React will then update the screen to
        match the new data.
      </p>
      <img src={SearchVideoList} />
      <p>
        You don’t have to build your whole page in React. Add React to your
        existing HTML page, and render interactive React components anywhere on
        it.
      </p>
      <Link to="/learn" className={style.add__react}>&#10094; &#8725; &#10095;Add React to your page &#62;</Link>
    </div>
  );
}
