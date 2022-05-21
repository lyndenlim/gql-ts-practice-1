import { useState } from "react"
import { useQuery, gql } from "@apollo/client"
import NewCoin from "./NewCoin"

export const GET_COIN = gql`
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
    price: string;
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
            <NewCoin />
        </div>
    )
}

export default CoinTesting