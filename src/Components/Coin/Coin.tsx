import {CoinData} from "../CoinContainer/CoinContainer"

interface Props {
    coin: CoinData
}

const Coin: React.FC<Props> = ({ coin }) => {
    return (
        <div>
            {coin.exchange_id}
        </div>
    )
}

export default Coin