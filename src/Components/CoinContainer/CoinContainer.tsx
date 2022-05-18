import Coin from "../Coin/Coin"
import axios from "axios"
import { useEffect, useState } from "react"
import "./CoinContainer.css"

export interface CoinData {
    id: string;
    rank: string;
    name: string;
    symbol: string;
    priceUsd: string;
    changePercent24Hr: string;
}

const CoinContainer: React.FC = () => {
    const [coinData, setCoinData] = useState<CoinData[]>([])
    const [searchValue, setSearchValue] = useState<string>("")

    async function getCoinData(): Promise<void> {
        const data = await axios.get("https://api.coincap.io/v2/assets?limit=10")
        setCoinData(data.data.data)
    }

    useEffect(() => {
        getCoinData()
    }, [])

    return (
        <>
            <input onChange={e => setSearchValue(e.target.value)} value={searchValue} placeholder="Search for a coin" />
            <div className="coin-container">
                {coinData.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()) || coin.symbol.toLowerCase().includes(searchValue.toLowerCase())).map(coin => <Coin key={coin.rank} coin={coin} />)}
            </div>
        </>
    )
}

export default CoinContainer