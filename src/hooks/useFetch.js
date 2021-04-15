import {useEffect, useState} from 'react'

export const useFetch = (fn) => {

    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const load = async ()=>{
        setLoading(true)
        const res = await fn()
        setResponse(res)
        setLoading(false)
    }

    useEffect(()=>{
        load()
    },[])

    return {
        loading,
        response
    }

}

export default useFetch