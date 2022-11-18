import { useTranslation } from "react-i18next";
import HomeBanner from "../../components/Homebanner";
import { Footer } from "../../components/Footer";

export const Reward = () => {
    const { t } = useTranslation();
    return (
        <div>
            <HomeBanner />
            <div className="mx-[20%] my-10">
                <h1 className="text-[#e6c63b] text-[2rem] leading-[1.5] mb-4">
                    <strong>{t("REWARD_SYSTEM")}</strong>
                </h1>
                <p className="text-black text-[1.2rem] leading-[1.5]">
                    {t("REWARD_DESCRIPTION1")}
                    <br />
                    <br />
                    {t("REWARD_DESCRIPTION2")}
                    <br />
                    <br />
                    {t("REWARD_DESCRIPTION3")}
                    <br />
                    <br />
                    {t("REWARD_DESCRIPTION4")}
                    <br />
                    <br />
                    {t("REWARD_DESCRIPTION5")}
                    <br />
                    <br />
                    {t("REWARD_DESCRIPTION6")}
                </p>
            </div>
            <Footer />
        </div>
    );
};
