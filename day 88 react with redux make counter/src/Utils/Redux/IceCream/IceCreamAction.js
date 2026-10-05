export const BUY_ICECREAM="BUY_ICECREAM"
export const RESTOCK_ICECREAM="RESTOCK_ICECREAM"

export function buyIceCream(q=1)
{
    return {
        type:BUY_ICECREAM,
        payload:q
    }
}

export function restockIceCream(q)
{
    return {
        type:RESTOCK_ICECREAM,
        payload:q
    }
}