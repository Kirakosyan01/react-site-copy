import { Link } from "react-router-dom";
import style from "../BlogPage.module.css";

export function ReactBlog() {
  return (
    <div className={style.react_blog}>
        <div className={style.first_div}>
      <Link to="/blog">Blob &#10095;</Link>
      <h2>React Blog</h2>
      <p>
        This blog is the official source for the updates from the React team.
        Anything important, including release notes or deprecation notices, will
        be posted here first. You can also follow the <span><a target="_blank" href="https://x.com/reactjs">@reactjs</a></span> account on
        Twitter, but you won’t miss anything essential if you only read this
        blog.
      </p>
        </div>
    </div>
  );
}
