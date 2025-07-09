//quais ações meu carrinho pode fazer

//CASOS DE USO
//-> adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item) //função push adiciona elemento ao vetor
}

//-> deletar um item do carrinho
async function deleteItem(userCart, nameItem) {
    const index = userCart.findIndex((item) => item.name === nameItem)

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

//-> remover um item do carrinho - diminui um item
async function removeItem(userCart, item) {
    //1. encontrar o index do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    
    //2. caso não encontre o item
    if (indexFound == -1){
        console.log("Item não encontrado")
        return
    }

    //3. Item > 1 subtrair um item
    if(userCart[indexFound].quantity > 1 ){
        userCart[indexFound].quantity -= 1 
        return
    }

    //4. Caso item = 1 deletar o item
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
        return
    }
}

//-> calcular o total doc arrinho
async function calculateTotal(userCart) {
    console.log("\nShopee cart total is: ")
    const result = userCart.reduce((total, item)=>total + item.subtotal(), 0)
    console.log(`Total: ${result}`)
}

async function displayCart(userCart) {
    console.log("\nShopee cart list: ")
    userCart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`
        )
    })
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}