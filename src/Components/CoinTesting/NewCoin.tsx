import { useMutation, gql } from "@apollo/client"
import { useState } from "react"
import { GET_COIN } from "../../hooks/useCoin"

const CREATE_COIN = gql`
    mutation CreateCoin($description: String!, $price: Int!){
        createCoin(input: {description: $description, price: $price }) {
            coin {
                id
                description
                price
            }
        }
    }
`;

const NewCoin: React.FC = () => {
    const [createCoin, { loading, error, data }] = useMutation(CREATE_COIN, {
        refetchQueries: [
            GET_COIN,
            "coins"
        ]
    })
    const [newCoinDescription, setnewCoinDescription] = useState("")
    const [newCoinPrice, setNewCoinPrice] = useState("")

    function createNewCoin(e: React.FormEvent<HTMLElement>): void {
        e.preventDefault()
        createCoin({ variables: { description: newCoinDescription, price: parseInt(newCoinPrice) } })
        setnewCoinDescription("")
        setNewCoinPrice("")
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error {error.message}</div>

    return (
        <form onSubmit={e => createNewCoin(e)}>
            <input placeholder="Enter coin description" onChange={e => setnewCoinDescription(e.target.value)} value={newCoinDescription} />
            <input placeholder="Enter coin price" onChange={e => setNewCoinPrice(e.target.value)} value={newCoinPrice} />
            <button type="submit">Make new coin!</button>
        </form>
    )
}

export default NewCoin