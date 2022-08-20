import { useEffect, useState } from 'react'
import './Products.css'

const API = 'https://solstice-temporal-tornado.glitch.me/api/productos'

function Products () {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const prod = fetch(API, {method: 'GET', mode: 'cors'})
            .then(data => {
                return data.json()
            })
    },[products])

    return (
        <h1>Products works!</h1>
    )
}

export default Products