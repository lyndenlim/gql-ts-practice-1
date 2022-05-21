import { useQuery, gql } from "@apollo/client"

export const GET_COIN = gql`
{
    coins {
        id
        description 
        price
    }
}
`;


const useCoin = () => {
    const { loading, error, data } = useQuery(GET_COIN)

    return {
        error,
        data,
        loading
    }
}

export default useCoin