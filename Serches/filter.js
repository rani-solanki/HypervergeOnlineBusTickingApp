// filter buses by busType
const filterByBusTye = (buses, busType) => {
    cnsole.log("ljhjgfcsjf", (buses, busType));
//     let filteredBus = buses.filter((bus)=>{
//         return bus.busType === busType;
//     })
//     return filteredBus
}

// Filter bus by seat category
const filterBySeatCategory = (buses, seatCategory) => {
    console.log(buses.seatCategory)
    let filteredbBus = buses.filter((bus) => {
        return bus.seatCategory = seatCategory
    })
    return filteredbBus
}
module.exports = { filterByBusTye, filterBySeatCategory };