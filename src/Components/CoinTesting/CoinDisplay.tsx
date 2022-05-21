import NewCoin from "./NewCoin"
import useCoin from "../../hooks/useCoin"
interface Coin {
    id: number
    description: string;
    price: string;
}


const CoinTesting: React.FC = () => {
    const { loading, error, data } = useCoin()

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error {error.message}</div>

    return (
        <div>
            {data.coins.map((coin: Coin) => (
                <div key={coin.id}>
                    <p>{coin.description}</p>
                    <p>{coin.price}</p>

                </div>
            ))}
            <NewCoin />
        </div>
    )
}

export default CoinTesting