import { Link } from 'react-router-dom';
import style from '../BlogPage.module.css';

export function ReactBlock({h2, date, p}){
    return (
        <div className={style.react__block}>
            <h2>{h2}</h2>
            <p>{date}</p>
            <p>{p}</p>
            <Link>Read more</Link>
        </div>
    )
}