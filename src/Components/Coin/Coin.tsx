import { CoinData } from "../CoinContainer/CoinContainer"
import "./Coin.css"
import { useNavigate } from "react-router-dom"
interface Props {
    coin: CoinData
}

const Coin: React.FC<Props> = ({ coin }) => {
    const percentChangeColor: string = parseFloat(coin.changePercent24Hr) < 0 ? "red" : "#00a16d"
    const navigate = useNavigate()

    return (
        <tr className="coin-row" onClick={() => navigate(`/coins/${coin.id}`)}>
            <td>
                {coin.rank}
            </td>
            <td>
                <img className="coin-image" src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`} alt={coin.symbol} />
                <div className="name-symbol-container">
                    {coin.name}
                    <br />
                    <strong className="coin-symbol">{coin.symbol}</strong>
                </div>
            </td>
            <td>
                ${parseFloat(coin.priceUsd).toFixed(2)}
            </td>
            <td>
                <span style={{ color: percentChangeColor }}>{parseFloat(coin.changePercent24Hr).toFixed(2)}%</span>
            </td>
        </tr>
    )
}

export default Coin