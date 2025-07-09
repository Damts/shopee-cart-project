import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWishList = []

console.log("Welcome to your Shopee Cart!")

const item1 = await createItem("Hot Wheels Ferrari", 20.99, 1)
const item2 = await createItem("Hot Wheels Lamborghini", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)

//await cartService.deleteItem(myCart, item2.name)
//await cartService.deleteItem(myCart, item1.name)

await cartService.calculateTotal(myCart)
