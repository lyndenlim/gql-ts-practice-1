
import { useQuery, gql } from "@apollo/client"

const GET_COIN = gql`
{
    coins {
        id
        description 
        price
    }
}
`;

interface Coin {
    id: number
    description: string;
    price: number;
}

const CoinTesting: React.FC = () => {
    const { loading, error, data } = useQuery(GET_COIN)

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
        </div>
    )
}

export default CoinTesting