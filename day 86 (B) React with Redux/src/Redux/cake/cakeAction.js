
const RESTOCK_CAKE="RESTOCK_CAKE"

function buycake(quantity)
{
    return {
        type:"BUY_CAKE",
        payload:quantity
    }
}


export default buycake
