import style from "../HomePage.module.css";
import Confs from "../../../images/Screenshot 2024-09-28 191456.png";
import { Link } from "react-router-dom";

export function GoFullstack() {
  return (
    <div className={style.go__fullstack}>
      <h2>Go full-stack with a framework</h2>
      <p>
        React is a library. It lets you put components together, but it doesn’t
        prescribe how to do routing and data fetching. To build an entire app
        with React, we recommend a full-stack React framework like{" "}
        <a className={style.frameworks} href="https://nextjs.org/"  target="_blank">Next.js</a> or
        <a className={style.frameworks} href="https://remix.run/"  target="_blank">Remix</a>.
      </p>
      <img src={Confs} />
      <p>
        React is also an architecture. Frameworks that implement it let you
        fetch data in asynchronous components that run on the server or even
        during the build. Read data from a file or a database, and pass it down
        to your interactive components.
      </p>
      <Link to="/learn" className={style.get__started}>&#9741; Get started with a framework &#10095;</Link>
    </div>
  );
}
