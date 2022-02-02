
// from the db module, import functions so
// return values can be used in this module
import { getPets, getWalkers, getCities, getWalkerCities } from "./database.js"
const pets = getPets()
    // properties of 'pets' will be: id, name, walkerId
const walkers = getWalkers()
    // properties of 'walkers' will be: id, name, email
const cities = getCities()
    // properties of 'cities' will be: id, name
const walkerCities = getWalkerCities()
    // properties of 'walkerCities' will be: id, cityId, walkerId


export const Assignments = () => { 
    const assignmentHTML = findWalkerAssignedToPet(pets, walkers, walkerCities, cities)
    return assignmentHTML
}


 const findWalkerAssignedToPet = (pets, walkers, walkerCities, cities) => {
    
    let assignmentHTML = ""
    assignmentHTML = "<ul>"     
                    // iterate through each pet
            for (const pet of pets) {

                        // iterate through each walker
                for (const walker of walkers) {
                            // check if id of walker matches pet's walker id
                    if (walker.id === pet.walkerId) {
                                // true? => iterate walker cities
                        for (const walkerCity of walkerCities) {  
                                // check if id of walker matches walker city's walker id
                            if (walker.id === walkerCity.walkerId) {
                                    // true? => iterate cities
                                for (const city of cities) {    
                                        // check if city id matches walker city's city id
                                        // true? => append to assignmentHTML with
                                        // pet's name is being walked by walker's name in city           
                                    if (city.id === walkerCity.cityId) {
                                    assignmentHTML += `
                                                    <li>
                                                        ${pet.name} is being walked by
                                                        ${walker.name} in 
                                                        ${city.name}
                                                    </li>
                                                    `
                                    }                              
                                }
                            }
                        } 
                    }                   
                }   
            }    
            // end the HTML string by closing out the unordered list
            // return the HTML string for use in the index.html page
    assignmentHTML += "</ul>"
            
return assignmentHTML
} 