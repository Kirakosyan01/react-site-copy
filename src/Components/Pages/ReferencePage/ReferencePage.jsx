import style from './ReferencePage.module.css';
import { ApiRefernece } from './ReferencePageComponents/ApiReference';
import { OnThisPage } from './ReferencePageComponents/OnThisPage';
import { Overview } from './ReferencePageComponents/Overview';

export function ReferencePage() {
    return (
        <div className={style.reference_page}>
            <OnThisPage />
            <ApiRefernece />
            <Overview />
        </div>
    )
}