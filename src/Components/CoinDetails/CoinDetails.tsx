import "./CoinDetails.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Line } from "react-chartjs-2"
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
interface SingleCoin {
    priceUsd: string;
    time: number;
    date: string;
}

let today = new Date().toLocaleDateString()

const CoinDetails: React.FC = () => {
    const { coin } = useParams<string>()
    const [priceArray, setPriceArray] = useState<[]>([])
    const [timeArray, setTimeArray] = useState<[]>([])
    const [percentChange, setPercentageChange] = useState<string>("")
    const chartColor: string = parseFloat(percentChange) < 0 ? "#fedbd8" : "#e0fbef"
    const pointColor: string = parseFloat(percentChange) < 0 ? "#f44337" : "#51edad"

    useEffect(() => {
        async function getSingleCoinData(): Promise<void> {
            const data = await axios.all([axios.get(`https://api.coincap.io/v2/assets/${coin}/history?interval=m15`), axios.get(`https://api.coincap.io/v2/assets/${coin}`)])
            setPriceArray(data[0].data.data.filter((item: SingleCoin) => new Date(item.date).toLocaleDateString("en-US", { timeZone: "America/New_York" }) === today).map((item: SingleCoin) => parseFloat(item.priceUsd).toFixed(2)))
            setTimeArray(data[0].data.data.filter((item: SingleCoin) => new Date(item.date).toLocaleDateString("en-US", { timeZone: "America/New_York" }) === today).map((item: SingleCoin) => new Date(item.time).toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit" },)))
            setPercentageChange(data[1].data.data.changePercent24Hr)
        }

        getSingleCoinData()
    }, [])

    return (
        <div className="graph-container">
            <h1>{coin ? coin.toUpperCase() : null}</h1>
            <h3>{today}</h3>
            <Line
                data={{
                    labels: timeArray,
                    datasets: [{
                        data: priceArray,
                        backgroundColor: chartColor,
                        borderColor: pointColor,
                        pointBackgroundColor: pointColor,
                        fill: true
                    }]
                }}
                options={{
                    scales: {
                        xAxis: {
                            ticks: {
                                maxRotation: 0,
                                minRotation: 0,
                                maxTicksLimit: 12
                            }
                        }
                    },
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    )
}

export default CoinDetails