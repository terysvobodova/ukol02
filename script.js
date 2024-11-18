const JustFood = (guests) => {
    const pricePerPerson = 200
    return `Just Food catering pro ${guests} lidí bude dodán za ${guests * pricePerPerson}.`
}

const YourMama = (guests) => {
    const pricePerPerson = 300
    return `Your Mama catering pro ${guests} lidí bude dodán za ${guests * pricePerPerson}.`
}

const FlavourHaven = (guests) => {
    const pricePerPerson = 500
    return `Flavour Haven catering pro ${guests} lidí bude dodán za ${guests * pricePerPerson}.`
}

console.log(JustFood(10))
console.log(YourMama(50))
console.log(FlavourHaven(100))



const createEvent = (event, guests, company) => {
    const catering = company(guests)
    return `Událost: ${event} s ${catering}`
  };

  console.log(createEvent("Večeře s rodinou", 10, FlavourHaven)); 
  console.log(createEvent("Firemní oběd", 20, JustFood));           
  console.log(createEvent("Svatební oběd", 150, YourMama));  

