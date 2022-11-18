import { useTranslation } from "react-i18next";
import { SocialIcon } from "./SocialIcon";
export const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-[#e6c63b]">
            <div className="mx-[33%] text-[#232323] text-[1.2rem] leading-[1.5] text-center py-10">
                <p className="mb-10">
                    <strong>{t("COMMUNITY_SUPPORT")}</strong>
                </p>
                <p>
                    <strong>{t("TOGETHER_WE")}</strong>
                </p>
            </div>
            <div className="bg-[#353535] h-[1px] w-[100%]"></div>
            <div className="block text-center sm:flex px-[10%] pt-16 pb-12 justify-between">
                <div className="text-[#232323] text-[1.2rem] leading-[1.5]">
                    <strong>{t("MALOO_MARK")}</strong>
                </div>
                <div className="flex justify-center">
                    <SocialIcon name="twitter" />
                    <SocialIcon name="facebook" />
                    <SocialIcon name="youtube" />
                    <SocialIcon name="instagram" />
                    <SocialIcon name="vk" />
                </div>
            </div>
        </div>
    );
};
