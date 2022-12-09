import { BigInt } from "@graphprotocol/graph-ts"
import { Pool } from "../generated/Pool/Pool"
import { Liquidity } from "../generated/schema"

export function handleAddLiquidity(callData:any) :void {
const liquidity = new Liquidity (callData.params.id)
liquidity.tokenA = callData.params.tokenAL
liquidity.tokenB = callData.params.tokenBL
liquidity.amountA = callData.params.amountTokenA
liquidity.amountA = callData.params.amountTokenB
}