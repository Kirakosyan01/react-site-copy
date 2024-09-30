import style from '../LearnPage.module.css';

export function GetStarted() {
    return (
        <div className={style.get_started}>
            <div className={style.tutorial}>
        <p>GET STARTED</p>
        <ul>
            <li><p>Quick Start</p></li>
            <li><p>Tutorial: Tic-Tac-Toe</p></li>
            <li><p>Thinking in React</p></li>
            <li><div>Installation</div><span>&#10095;</span></li>
        </ul>
            </div>
            <hr />
            <div className={style.describing}>
            <p>LEARN REACT</p>
            <ul>
                <li><div>Describing the UI</div><span>&#10095;</span></li>
                <li><div>Adding Interactivity</div><span>&#10095;</span></li>
                <li><div>Managing State</div><span>&#10095;</span></li>
                <li><div>Escape Hatches</div><span>&#10095;</span></li>
            </ul>
            </div>
        </div>
    )
}