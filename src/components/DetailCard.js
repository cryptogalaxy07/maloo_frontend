export const DetailCard = (props) => {
    return (
        <div className="bg-[#212428] rounded-[6px] overflow-hidden shadow-[0_0_8px_0_rgba(0,0,0,0.3)]">
            <div className="image-wrap">
                <img
                    src={props.imageURL}
                    className="w-[100%] h-[400px] object-cover"
                    alt
                />
            </div>
            <div className="p-[10%]">
                <h1 className="text-white text-[2rem] leading-[1.5] text-center">
                    <strong>{props.name}</strong>
                </h1>
                <p className="text-white text-[1.1rem] leading-[1.5] text-center">
                    <strong>{props.role}</strong>
                </p>
                <p className="mt-4 text-[#bbbbbb] pb-2 text-[1.2rem] leading-[1.5] text-center">
                    {props.details}
                </p>
            </div>
        </div>
    );
};
