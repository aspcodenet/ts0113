const freight = document.getElementById("freight") as HTMLInputElement;
const price = document.getElementById("price") as HTMLInputElement;
const totalPrice = document.getElementById("totalPrice") as HTMLElement;


function calculateTotal(freight:number, price:number) : number {
  if(price > 1000){
    freight = 0        
  }
  return price + freight
}

function recalc(){
  let total = calculateTotal(parseInt(price.value), parseInt(freight.value))
  totalPrice.innerText = total.toString()    
}


freight.addEventListener("input",()=>{
  recalc()
})

price.addEventListener("input",()=>{
  recalc()
})

