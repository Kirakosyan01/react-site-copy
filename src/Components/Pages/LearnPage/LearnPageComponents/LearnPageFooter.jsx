import { Link } from 'react-router-dom';
import style from '../LearnPage.module.css';

export function LearnPageFooter() {
    return (
        <footer className={style.learn_page_footer}>
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
        </footer>
    )
}