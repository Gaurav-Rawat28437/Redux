export const BUY_CAKE="BUY_CAKE"
export const RESTOCK_CAKE="RESTOCK_CAKE"

export function buycake(quantity=1)
{
    return {
        type:BUY_CAKE,
        payload:quantity
    }
}

export function restockCake(q)
{
    return {
        type:RESTOCK_CAKE,
        payload:q
    }
}
