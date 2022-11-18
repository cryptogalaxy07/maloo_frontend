import { useTranslation } from "react-i18next";
export const Mainpage = () => {
    const { t } = useTranslation();
    return (
        <div className="maincontainer">
            <div className="z-0 relative pt-[3rem] pb-[2rem] bg-no-repeat bg-cover">
                <div className="backgroundStyle bottom-0 left-0 absolute right-0 top-0 z-[-100] pointer-events-none"></div>
                <div className="mx-[10%]">
                    <div className="w-[50%] mt-[10px] sm:w-100">
                        <h1 className="text-black text-[3.7rem] leading-[1.1]">
                            <strong>{t("BUY_SELL_SWAP_CRYPTO")}</strong>
                        </h1>
                        <p className="text-white text-[1.2rem] leading-[1.5] mt-4 mb-5">
                            {t("REWARDED_PERCENT")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
