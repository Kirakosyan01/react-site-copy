import { Link } from "react-router-dom";
import style from "../HomePage.module.css";

export function UpgradeFuture() {
  return (
    <div className={style.upgrade__future}>
      <div className={style.upgrade__future_text}>
        <h2>Upgrade when the future is ready</h2>
        <p className={style.upgrade__future_p}>
          React approaches changes with care. Every React commit is tested on
          business-critical surfaces with over a billion users. Over 100,000
          React components at Meta help validate every migration strategy.
        </p>
        <p className={style.upgrade__future_p}>
          The React team is always researching how to improve React. Some
          research takes years to pay off. React has a high bar for taking a
          research idea into production. Only proven approaches become a part of
          React.
        </p>
        <Link to='/blog'>Read more React news &#10095;</Link>
      </div>
      <div className={style.upgrade__future_blocks}>
            <p>&#10095; Latest React News</p>
            <div className={style.main__date_block}>
            <div className={style.date__block}>
                <Link to='/blog'>React Conf 2024 Recap</Link>
                <p>May 22, 2024</p>
            </div>
            <div className={style.date__block}>
                <Link to='/blog'>React 19 RC</Link>
                <p>April 25, 2024</p>
            </div>
            <div className={style.date__block}>
                <Link to='/blog'>React 19 RC Upgrade Guide</Link>
                <p>April 25, 2024</p>
            </div>
            <div className={style.date__block}>
                <Link to='/blog'>React Labs: February 2024</Link>
                <p>February 15, 2024</p>
            </div>
            </div>
      </div>
    </div>
  );
}
