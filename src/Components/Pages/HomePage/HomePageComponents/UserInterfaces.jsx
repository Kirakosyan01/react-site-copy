import style from "../HomePage.module.css";
import MyVideo from "../../../images/Screenshot 2024-09-28 183455.png";

export function UserInterfaces() {
  return (
    <div className={style.user__interfaces}>
      <div className={style.user__interfaces_p}>
        <h2>Create user interfaces from components</h2>
        <p>
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like{" "}
          <span>Thumbnail</span>,<span>LikeButton</span>, and <span>Video</span>
          . Then combine them into entire screens, pages, and apps.
        </p>
        <img src={MyVideo} />
        <p>
          Whether you work on your own or with thousands of other developers,
          using React feels the same. It is designed to let you seamlessly
          combine components written by independent people, teams, and
          organizations.
        </p>
      </div>
    </div>
  );
}
