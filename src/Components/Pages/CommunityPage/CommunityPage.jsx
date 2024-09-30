import style from './CommunityPage.module.css';
import { GetInvolved } from './CommunityPageComponents/GetInvolved';
import { OnThisPage } from './CommunityPageComponents/OnThisPage';
import { ReactCommunity } from './CommunityPageComponents/ReactCommunity';

export function CommunityPage(){
    return (
        <div className={style.community__page}>
            <GetInvolved />
            <ReactCommunity />
            <OnThisPage />
        </div>
    )
}