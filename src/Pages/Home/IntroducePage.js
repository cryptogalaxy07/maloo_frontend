import { useTranslation } from "react-i18next";

export const IntroducePage = () => {
    const { t } = useTranslation();
    return (
        <div className="mx-[10%] my-[40px] text-center">
            <h1 className="text-black text-[3.7rem] leading-[1.1]">
                <strong>{t("WHO_ARE_WE")}</strong>
            </h1>
            <p className="text-[1.2rem] leading-[1.5] mt-3">
                {t("MALOO_ETHEREUM_NETWORK")}
            </p>
            <p className="text-[1.2rem] leading-[1.5] mt-7">
                {t("MALOO_KANGAROO")} "Kangaroo".
            </p>
            <p className="text-[1.2rem] leading-[1.5]">
                {t("MALOO_TOTAL_SUPPLY")}
            </p>
            <p className="text-[1.2rem] leading-[1.5] mt-7">
                {t("MALOO_VISION")}
            </p>
            <p className="text-[1.2rem] leading-[1.5] mt-7">
                {t("REWARD_SYSTEM_PERCENT")}
            </p>
        </div>
    );
};
