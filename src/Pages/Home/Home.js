import HomeBanner from "../../components/Homebanner";
import { Mainpage } from "./Mainpage";
import { Walletpage } from "./Walletpage";
import { CoinGecoPage } from "./CoinGecoPage";
import { IntroducePage } from "./IntroducePage";
import { Footer } from "../../components/Footer";
export const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Mainpage />
            <Walletpage />
            <CoinGecoPage />
            <IntroducePage />
            <Footer />
        </div>
    );
};
