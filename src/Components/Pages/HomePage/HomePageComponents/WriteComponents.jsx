import style from "../HomePage.module.css";
import VideoList from "../../../images/Screenshot 2024-09-28 184657.png";

export function WriteComponents() {
  return (
    <div className={style.write__components}>
      <h2>Write components with code and markup</h2>
      <p>
        React components are JavaScript functions. Want to show some content
        conditionally? Use an <span>if</span> statement. Displaying a list? Try
        array
        <span>map()</span>. Learning React is learning programming.
      </p>
      <img src={VideoList} />
      <p>
        This markup syntax is called JSX. It is a JavaScript syntax extension
        popularized by React. Putting JSX markup close to related rendering
        logic makes React components easy to create, maintain, and delete.
      </p>
    </div>
  );
}
