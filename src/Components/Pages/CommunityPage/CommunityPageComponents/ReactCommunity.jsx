import { Link } from "react-router-dom";
import style from "../CommunityPage.module.css";

export function ReactCommunity() {
  return (
    <div className={style.react__community}>
      <Link to="/community">COMMUNITY &#10095;</Link>
      <div className={style.react_community_component}>
        <h2>React Community</h2>
        <p>
          React has a community of millions of developers. On this page we’ve
          listed some React-related communities that you can be a part of; see
          the other pages in this section for additional online and in-person
          learning materials.
        </p>
      </div>
      <div className={style.conduct_code}>
        <h3>Code of Conduct</h3>
        <p>
          Before participating in React’s communities,{" "}
          <span>
            <a
              target="_blank"
              href="https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md"
            >
              please read our Code of Conduct.
            </a>
          </span>{" "}
          We have adopted the{" "}
          <span>
            <a target="_blank" href="https://www.contributor-covenant.org/">
              Contributor Covenant
            </a>
          </span>{" "}
          and we expect that all community members adhere to the guidelines
          within.
        </p>
      </div>
      <div className={style.stack}>
        <h3>Stack Overflow</h3>
        <p>
          Stack Overflow is a popular forum to ask code-level questions or if
          you’re stuck with a specific error. Read through the{" "}
          <span>
            <a
              target="_blank"
              href="https://stackoverflow.com/questions/tagged/reactjs"
            >
              existing questions
            </a>
          </span>{" "}
          existing questions tagged with reactjs or{" "}
          <span>
            <a
              target="_blank"
              href="https://stackoverflow.com/users/login?ssrc=anon_ask&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions%2fask%3ftags%3dreactjs"
            >
              ask your own!
            </a>
          </span>
        </p>
      </div>
      <div className={style.discussion}>
        <h3>Popular Discussion Forums </h3>
        <p>
          There are many online forums which are a great place for discussion
          about best practices and application architecture as well as the
          future of React. If you have an answerable code-level question, Stack
          Overflow is usually a better fit.
        </p>
        <p>Each community consists of many thousands of React users.</p>
        <ul>
          <li>
            <a target="_blank" href="https://dev.to/t/react">
              DEV’s React community
            </a>
          </li>
          <li>
            <a target="_blank" href="https://hashnode.com/n/reactjs">
              Hashnode’s React community
            </a>
          </li>
          <li>
            <a target="_blank" href="vhttps://discord.com/invite/reactiflux">
              Reactiflux online chat
            </a>
          </li>
          <li>
            <a target="_blank" href="https://discord.com/invite/reactiflux">
              Reddit’s React community
            </a>
          </li>
        </ul>
      </div>
      <div className={style.news}>
        <h3>News</h3>
        <p>
          For the latest news about React,{" "}
          <span>
            <a target="_blank" href="https://x.com/reactjs">
              follow @reactjs on Twitter
            </a>
          </span>{" "}
          and the <Link to="/blog">official React blog</Link> on this website.
        </p>
      </div>
      <div className={style.home__footer}>
      <div className={style.meta}>
        <div className={style.meta_svg}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={20}>
            <path fill="blue" d="M640 317.9C640 409.2 600.6 466.4 529.7 466.4C467.1 466.4 433.9 431.8 372.8 329.8L341.4 277.2C333.1 264.7 326.9 253 320.2 242.2C300.1 276 273.1 325.2 273.1 325.2C206.1 441.8 168.5 466.4 116.2 466.4C43.4 466.4 0 409.1 0 320.5C0 177.5 79.8 42.4 183.9 42.4C234.1 42.4 277.7 67.1 328.7 131.9C365.8 81.8 406.8 42.4 459.3 42.4C558.4 42.4 640 168.1 640 317.9H640zM287.4 192.2C244.5 130.1 216.5 111.7 183 111.7C121.1 111.7 69.2 217.8 69.2 321.7C69.2 370.2 87.7 397.4 118.8 397.4C149 397.4 167.8 378.4 222 293.6C222 293.6 246.7 254.5 287.4 192.2V192.2zM531.2 397.4C563.4 397.4 578.1 369.9 578.1 322.5C578.1 198.3 523.8 97.1 454.9 97.1C421.7 97.1 393.8 123 360 175.1C369.4 188.9 379.1 204.1 389.3 220.5L426.8 282.9C485.5 377 500.3 397.4 531.2 397.4L531.2 397.4z" />
          </svg>
        <a target="_blank" href="https://opensource.fb.com/"><h3>Meta Open Source</h3></a>
        </div>
        <p>Copyright © Meta Platforms, Inc</p>
        <p>uwu?</p>
      </div>
      <div className={style.quick__start}>
        <Link to='/learn'><h3>Learn React</h3></Link>
        <p>Quick Start</p>
        <p>Installation</p>
        <p>Describing the UI</p>
        <p>Adding Interactivity</p>
        <p>Managing State</p>
        <p>Escape Hatches</p>
      </div>
      <div className={style.apis}>
        <Link to='/reference'><h3>API Reference</h3></Link>
        <p>React APIs</p>
        <p>React DOM APIs</p>
      </div>
      <div className={style.code_of_conduct}>
        <Link to='/community'><h3>Community</h3></Link>
        <p>Code of Conduct</p>
        <p>Meet the Team</p>
        <p>Docs Contributors</p>
        <p>Acknowledgements</p>
      </div>
      <div className={style.more}>
        <h3>More</h3>
        <p>Blog</p>
        <p>React Native</p>
        <p>Privacy</p>
        <p>Terms</p>
      </div>
    </div>
    </div>
  );
}
