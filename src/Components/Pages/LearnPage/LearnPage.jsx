import style from './LearnPage.module.css';
import { GetStarted } from './LearnPageComponents/GetStarted';
import { OnThisPage } from './LearnPageComponents/OnThisPage';
import { ReactDocumentation } from './LearnPageComponents/ReactDocumentation';

export function LearnPage() {
    return (
        <div className={style.learn_page}>
            <OnThisPage />
            <GetStarted />
            <ReactDocumentation />
        </div>
    )
}