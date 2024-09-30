import style from './HomePage.module.css';
import { AddInteractivity } from './HomePageComponents/AddInteractivity';
import { FromPlatform } from './HomePageComponents/FromPlatform';
import { GoFullstack } from './HomePageComponents/GoFullstack';
import { HomeFooter } from './HomePageComponents/HomeFooter';
import { Introduction } from './HomePageComponents/Introduction';
import { JoinCommunity } from './HomePageComponents/JoinCommunity';
import { UpgradeFuture } from './HomePageComponents/UpgradeFuture';
import { UserInterfaces } from './HomePageComponents/UserInterfaces';
import { WriteComponents } from './HomePageComponents/WriteComponents';

export function HomePage() {
    return (
        <div>
            <Introduction />
            <UserInterfaces />
            <WriteComponents />
            <AddInteractivity />
            <GoFullstack />
            <FromPlatform />
            <UpgradeFuture />
            <JoinCommunity />
            <HomeFooter />
        </div>
    )
}