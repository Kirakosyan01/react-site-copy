import style from '../LearnPage.module.css'

export function OnThisPage() {
    return (
        <div className={style.on_this_page}>
            <p>ON THIS PAGE</p>
            <ul>
                <li>Overview</li>
                <li>React</li>
                <li>React DOM</li>
                <li>Rules of React</li>
                <li>Legacy APIs</li>
            </ul>
        </div>
    )
}