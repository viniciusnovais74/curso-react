import { useEffect, useState } from "react"

export const useFetch = (url, method = 'get') => {
    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(function () {
        fetch(url, { method })
            .then((resp) => resp.json)
            .then(json = setState(json))
    }, [url, method])

    return state
}