import Coin from "../Coin/Coin"
import axios from "axios"
import { useEffect, useState } from "react"
import "./CoinContainer.css"

export interface CoinData {
    exchange_id: string;
    name: string;
    website: string;
}

const CoinContainer: React.FC = () => {
    const [coinData, setCoinData] = useState<CoinData[]>([])

    async function getCoinData(): Promise<void> {
        const data = await axios.get("https://rest.coinapi.io/v1/exchanges", {
            headers: {
                'X-CoinAPI-Key': "33222F3F-4C04-4998-A27A-2A29B614FD7B"
            }
        })

        setCoinData(data.data)
    }

    useEffect(() => {
        getCoinData()
    }, [])

    return (
        <div>
            {coinData.map(coin => <Coin key={coin.exchange_id} coin={coin} />)}
        </div>
    )
}

export default CoinContainer