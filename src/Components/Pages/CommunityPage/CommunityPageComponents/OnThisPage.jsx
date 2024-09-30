import style from '../CommunityPage.module.css';

export function OnThisPage(){
    return (
        <div className={style.on_this_page}>
            <p>ON THIS PAGE</p>
            <ul>
                <li>Overview</li>
                <li>Code of Conduct</li>
                <li>Stack Overflow</li>
                <li>Popular Discussion Forumns</li>
                <li>News</li>
            </ul>
        </div>
    )
}