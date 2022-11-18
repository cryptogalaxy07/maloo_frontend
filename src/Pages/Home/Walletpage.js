import { Card } from "../../components/Card";
import { useTranslation } from "react-i18next";
export const Walletpage = () => {
    const { t } = useTranslation();
    return (
        <div className="walletContainer py-[2rem] bg-[#232323]">
            <div className="block sm:flex justify-center gap-8">
                <Card title="layer" name={t("CONNECT_WALLET")} />
                <Card title="reward" name={t("REWARD_PROGRAM")} />
                <Card title="dollar" name={t("BUY_SELL_SWAP")} />
            </div>
        </div>
    );
};
