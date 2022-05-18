import { CoinData } from "../CoinContainer/CoinContainer"
import "./Coin.css"
import { Link } from "react-router-dom"
interface Props {
    coin: CoinData
}

const Coin: React.FC<Props> = ({ coin }) => {
    const percentChangeColor: string = parseFloat(coin.changePercent24Hr) < 0 ? "red" : "green"

    return (
        <Link className="coin-link" to={`/coins/${coin.id}`}>
            <div className="single-coin">
                <p>{coin.rank}</p>
                <img src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`} alt={coin.symbol} />
                <p>{coin.name}</p>
                <p>{coin.symbol}</p>
                <p>${parseFloat(coin.priceUsd).toFixed(2)}</p>
                <p style={{ color: percentChangeColor }}> {parseFloat(coin.changePercent24Hr).toFixed(2)}%</p>
            </div >
        </Link>
    )
}

export default Coin