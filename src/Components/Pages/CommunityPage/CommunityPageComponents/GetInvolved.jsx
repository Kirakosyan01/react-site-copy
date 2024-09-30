import style from '../CommunityPage.module.css';

export function GetInvolved(){
    return (
        <div className={style.get_involved}>
            <p>GET INVOLVED</p>
            <ul>
                <li><div className={style.active_li}><p>Community</p> <div>&#10095;</div></div></li>
                <li>React Conferences</li>
                <li>React Meetups</li>
                <li>React Videos</li>
                <li>Meet the Team</li>
                <li>Docs Contributors</li>
                <li>Translations</li>
                <li>Acknowledgements</li>
                <li>Versioning Policy</li>
            </ul>
        </div>
    )
}