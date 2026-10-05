import React, { useState } from 'react'
import { buycake, restockCake } from '../Utils/Redux/Cake/cakeAction'
import { connect } from 'react-redux'

function Cake(props) {

  const [quantity,setQuantity]=useState("")
  const [Rquantity,setRQuantity]=useState("")

  return (
    <main className="flex flex-col items-center gap-6">

      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center hover:shadow-xl transition">

        <h3 className="text-2xl font-bold mb-4 text-gray-700">
          🎂 Cakes: {props.numOfCake}
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
            props.buycake(Number(quantity === "" ? 1 : quantity))
            setQuantity("")
          }}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition mb-4"
        >
          Buy Cake
        </button>

      </div>

      <div className="bg-white p-4 rounded-xl shadow w-80 text-center">

        <h4 className="font-semibold mb-3 text-gray-600">
          Restock Cakes
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
            props.restockCake(Number(Rquantity === "" ? 0 : Rquantity))
            setRQuantity("")
          }}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 active:scale-95 transition"
        >
          Restock Cake
        </button>

      </div>

    </main>
  )
}

function mapStateToProps(state) {
  return {
    numOfCake: state.cakeReducer.numOfCake
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buycake:(q)=>dispatch(buycake(q)),
    restockCake:(q)=>dispatch(restockCake(q))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cake)