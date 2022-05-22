import { gql, useMutation } from "@apollo/client"
import { GET_COIN } from "./useCoin"

const DELETE_COIN = gql`
    mutation destroyCoin($id: Int!) 
    {
        id
    }
    `
// const {loading, error, data } = useMutation(DELETE_COIN)
// if (loading) return <div>loading...</div>
// if (error) return <div>Error {error}</div>
// return <div>{data}</div>



const useDeleteCoin = (id: number) => {
    const [destroyCoin, { loading, error, data }] = useMutation(DELETE_COIN, {
        refetchQueries: [
            GET_COIN,
            "coins"
        ]
    })

    return {
        error,
        loading,
        data,
        destroyCoin
    }


}

export default useDeleteCoin