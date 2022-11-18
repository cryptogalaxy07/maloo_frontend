import { ReactComponent as TwitterSVG } from "../assets/images/twitter.svg";
import { ReactComponent as YoutubeSVG } from "../assets/images/youtube.svg";
import { ReactComponent as FacebookSVG } from "../assets/images/facebook.svg";
import { ReactComponent as InstagramSVG } from "../assets/images/instagram.svg";
import { ReactComponent as VkSVG } from "../assets/images/vk.svg";
export const SocialIcon = (props) => {
    return (
        <div className="w-[40px] h-[40px] flex justify-center items-center mx-[5px] my-0 bg-[#282b2f] rounded-[6px]">
            {(() => {
                switch (props.name) {
                    case "twitter":
                        return <TwitterSVG />;
                    case "facebook":
                        return <FacebookSVG />;
                    case "youtube":
                        return <YoutubeSVG />;
                    case "instagram":
                        return <InstagramSVG />;
                    case "vk":
                        return <VkSVG />;
                    default:
                        return <TwitterSVG />;
                }
            })()}
        </div>
    );
};
