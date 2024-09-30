import style from "../HomePage.module.css";
import Example from "../../../images/Screenshot 2024-09-28 192824.png";
import { Link } from "react-router-dom";

export function FromPlatform() {
  return (
    <div className={style.from__platform}>
      <h2>Use the best from every platform</h2>
      <p>
        People love web and native apps for different reasons. React lets you
        build both web apps and native apps using the same skills. It leans upon
        each platform’s unique strengths to let your interfaces feel just right
        on every platform.
      </p>
      <img src={Example} />
      <p>
        With React, you can be a web and a native developer. Your team can ship
        to many platforms without sacrificing the user experience. Your
        organization can bridge the platform silos, and form teams that own
        entire features end-to-end.
      </p>
      <a href="https://reactnative.dev/" target="_blank">Build for native platforms &#10095;</a>
    </div>
  );
}
