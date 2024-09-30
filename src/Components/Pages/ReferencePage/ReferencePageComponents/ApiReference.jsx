import { Link } from "react-router-dom";
import style from "../ReferencePage.module.css";
import { ReferenceFooter } from "./ReferenceFooter";

export function ApiRefernece() {
  return (
    <div className={style.api_reference}>
      <Link>API REFERENCE &#10095;</Link>
      <div className={style.learn_section}>
        <h2>React Reference Overview</h2>
        <p>
          This section provides detailed reference documentation for working
          with React. For an introduction to React, please visit the{" "}
          <span>
            <Link to="/learn">Learn</Link>
          </span>{" "}
          section.
        </p>
        <p>
          The React reference documentation is broken down into functional
          subsections:
        </p>
      </div>
      <div className={style.react_features}>
        <h3>React</h3>
        <p>Programmatic React features:</p>
        <ul>
          <li>
            <Link>Hooks</Link> - Use different React features from your
            components.
          </li>
          <li>
            <Link>Components</Link> - Built-in components that you can use in
            your JSX.
          </li>
          <li>
            <Link>APIs</Link> - APIs that are useful for defining components.
          </li>
          <li>
            <Link>Directives</Link> - Provide instructions to bundlers
            compatible with React Server Components.
          </li>
        </ul>
      </div>
      <div className={style.react_dom__features}>
        <h3>React DOM</h3>
        <p>
          React-dom contains features that are only supported for web
          applications (which run in the browser DOM environment). This section
          is broken into the following:
        </p>
        <ul>
          <li>
            <Link>Hooks</Link> - Hooks for web applications which run in the
            browser DOM environment.
          </li>
          <li>
            <Link>Components</Link> - React supports all of the browser built-in
            HTML and SVG components.
          </li>
          <li>
            <Link>APIs</Link> - The react-dom package contains methods supported
            only in web applications.
          </li>
          <li>
            <Link>Client APIs</Link>- The react-dom/client APIs let you render
            React components on the client (in the browser).
          </li>
          <li>
            <Link>Server APIs</Link> - The react-dom/server APIs let you render
            React components to HTML on the server.
          </li>
        </ul>
      </div>
      <div className={style.react_rules}>
        <h3>Rules of React</h3>
        <p>
          React has idioms — or rules — for how to express patterns in a way
          that is easy to understand and yields high-quality applications:
        </p>
        <ul>
          <li>
            <Link>Components and Hooks must be pure</Link> – Purity makes your
            code easier to understand, debug, and allows React to automatically
            optimize your components and hooks correctly.
          </li>
          <li>
            <Link>React calls Components and Hooks</Link> – React is responsible
            for rendering components and hooks when necessary to optimize the
            user experience.
          </li>
          <li>
            <Link>Rules of Hooks</Link> – Hooks are defined using JavaScript
            functions, but they represent a special type of reusable UI logic
            with restrictions on where they can be called.
          </li>
        </ul>
      </div>
      <div className={style.legacy}>
        <h3>Legacy APIs</h3>
        <ul>
          <li>
            <Link>Legacy APIs</Link> - Exported from the react package, but not
            recommended for use in newly written code.
          </li>
        </ul>
      </div>
      <ReferenceFooter />
    </div>
  );
}
