import { useTranslation } from "react-i18next";
import HomeBanner from "../../components/Homebanner";
import { Footer } from "../../components/Footer";
import { DetailCard } from "../../components/DetailCard";
import man1 from "../../assets/images/man1.jpg";
import woman1 from "../../assets/images/woman1.jpg";
import man2 from "../../assets/images/man2.jpg";

export const About = () => {
    const { t } = useTranslation();
    return (
        <div>
            <HomeBanner />
            <div className="pt-7 pb-5 bg-[#e6c63b] px-[20%]">
                <h1 className="text-[3rem] leading-[1.1] mb-4">
                    <strong>{t("ABOUT_US")}</strong>
                </h1>
                <p className="text-[1.1rem] leading-[1.5] mb-3">
                    {t("ABOUT_US_DETAILS")}
                </p>
                <blockquote className="text-[#353535] py-3 px-5">
                    {t("ABOUT_US_DESCRIPTION")}
                </blockquote>
            </div>
            <div className="grid grid-cols-1 bg-[#212428] py-8 px-10 md:grid-cols-3 md:gap-8 md:py-12 md:px-32 ">
                <DetailCard
                    imageURL={man1}
                    name={t("JOHN_SMITH")}
                    role={t("TRADER_ROLE")}
                    details={t("MAN1_DETAILS")}
                />
                <DetailCard
                    imageURL={woman1}
                    name={t("SARAH_PALMER")}
                    role={t("TRADER_ROLE")}
                    details={t("WOMAN1_DETAILS")}
                />
                <DetailCard
                    imageURL={man2}
                    name={t("ALEKSANDAR")}
                    role={t("DEVELOPER_ROLE")}
                    details={t("MAN2_DETAILS")}
                />
            </div>
            <Footer />
        </div>
    );
};
