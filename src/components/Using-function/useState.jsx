import React, { useState } from 'react'



const Shop = props => {
    //   useState
    const [cart, setCart] = useState([])


    const cartHandler =() => {
            setCart(['A Book'])
        }

    return
    <button onClick={cartHandler}>Add to Cart</button>
}