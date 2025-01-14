const freight = document.getElementById("freight")
const price = document.getElementById("price")
const prisTotalt = document.getElementById("prisTotalt")

function calculateTotal(price,freight){
    if(price > 1000){
        freight = 0        
    }
    return price + freight
}

function recalc(){
    let total = calculateTotal(price.value, freight.value)
    prisTotalt.innerText = total    
}


freight.addEventListener("input",()=>{
    recalc()
})

price.addEventListener("input",()=>{
    recalc()
})



