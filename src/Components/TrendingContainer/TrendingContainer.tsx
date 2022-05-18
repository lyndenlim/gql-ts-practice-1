import Coin from "../Coin/Coin"
import axios from "axios"
import { useEffect, useState } from "react"
import "./TrendingContainer.css"

export interface CoinData {
    rank: string; 
    name: string;
    symbol: string;
    priceUsd: string;
    changePercent24Hr: string;
}

const CoinContainer: React.FC = () => {
    const [coinData, setCoinData] = useState<CoinData[]>([])

    async function getCoinData(): Promise<void> {
        const data = await axios.get("https://api.coincap.io/v2/assets?limit=10")
        setCoinData(data.data.data)
    }

    useEffect(() => {
        getCoinData()
    }, [])

    return (
        <div className="coin-container">
            {coinData.map(coin => <Coin key={coin.rank} coin={coin} />)}
        </div>
    )
}

export default CoinContainer