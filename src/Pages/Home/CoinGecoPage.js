export const CoinGecoPage = () => {
    return (
        <coingecko-coin-list-widget
            coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
            currency="usd"
            locale="en"
        ></coingecko-coin-list-widget>
    );
};
