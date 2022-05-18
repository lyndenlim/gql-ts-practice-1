import { CoinData } from "../TrendingContainer/TrendingContainer"
import "./Coin.css"
interface Props {
    coin: CoinData
}

const Coin: React.FC<Props> = ({ coin }) => {
    const percentChangeColor: string = parseFloat(coin.changePercent24Hr) < 0 ? "red" : "green"

    return (
        <div className="single-coin">
            <p>{coin.rank}</p>
            <img src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`} alt={coin.symbol} />
            <p>{coin.name}</p>
            <p>{coin.symbol}</p>
            <p>${parseFloat(coin.priceUsd).toFixed(2)}</p>
            <p style={{ color: percentChangeColor }}> {parseFloat(coin.changePercent24Hr).toFixed(2)}%</p>
        </div >
    )
}

export default Coin