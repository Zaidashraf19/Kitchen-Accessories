import { useEffect, useState } from "react";

const useFetch = (URL) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(res => {
                setData(res)
                console.log(res);
            }).catch(err => {
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
    }, [])


    return [loading, error, data]

}


export default useFetch