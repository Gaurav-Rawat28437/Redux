import React, { useState } from 'react'
import { buyIceCream, restockIceCream } from '../Utils/Redux/IceCream/IceCreamAction'
import { connect } from 'react-redux'

function IceCream(props) {

  const [quantity,setQuantity]=useState("")
  const [Rquantity,setRQuantity]=useState("")

  return (
    <main className="flex flex-col items-center gap-6">

      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center hover:shadow-xl transition">

        <h3 className="text-2xl font-bold mb-4 text-gray-700">
          🍦 IceCream: {props.numOfIceCream}
        </h3>

        <input
          onChange={(e)=>setQuantity(e.target.value)}
          value={quantity}
          type="number"
          placeholder="Enter quantity"
          className="border border-gray-300 p-2 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={()=>{
            props.buyIceCream(Number(quantity === "" ? 1 : quantity))
            setQuantity("")
          }}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition mb-4"
        >
          Buy IceCream
        </button>

      </div>

      <div className="bg-white p-4 rounded-xl shadow w-80 text-center">

        <h4 className="font-semibold mb-3 text-gray-600">
          Restock IceCream
        </h4>

        <input
          onChange={(e)=>setRQuantity(e.target.value)}
          value={Rquantity}
          type="number"
          placeholder="Enter quantity"
          className="border border-gray-300 p-2 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={()=>{
            props.restockIceCream(Number(Rquantity))
            setRQuantity("")
          }}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 active:scale-95 transition"
        >
          Restock IceCream
        </button>

      </div>

    </main>
  )
}

function mapStateToProps(state) {
  return {
    numOfIceCream: state.IceCreamReducer.numOfIceCream
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buyIceCream:(q)=>dispatch(buyIceCream(q)),
    restockIceCream:(q)=>dispatch(restockIceCream(q))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCream)