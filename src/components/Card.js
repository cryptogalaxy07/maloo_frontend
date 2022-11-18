import { Link } from "react-router-dom";
import { ReactComponent as Layer } from "../assets/images/layer.svg";
import { ReactComponent as Reward } from "../assets/images/reward.svg";
import { ReactComponent as Dollar } from "../assets/images/dollar.svg";
import "./Card.css";
export const Card = (props) => {
    let button;
    if (props.title === "layer") {
        button = (
            <Layer className="block text-[#e6c63b] mb-[1rem] font-['Moririse2']" />
        );
    } else if (props.title === "reward") {
        button = (
            <Reward className="block text-[#e6c63b] mb-[1rem] font-['Moririse2']" />
        );
    } else if (props.title === "dollar") {
        button = (
            <Dollar className="block text-[#e6c63b] mb-[1rem] font-['Moririse2']" />
        );
    }
    return (
        <div className="cardcontainer py-[1rem] px-[2.5rem] bg-[#282b2f] rounded-[20px] flex justify-center items-center shadow-[0_0_8px_0_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="text-white w-100 text-center">
                <Link to="#" className="flex justify-center">
                    {button}
                </Link>
                <h4 className="text-white text-[1.2rem] leading-[1.5] text-center">
                    <strong>{props.name}</strong>
                </h4>
            </div>
        </div>
    );
};
