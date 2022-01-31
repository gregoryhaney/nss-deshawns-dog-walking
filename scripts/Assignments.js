
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
    
    const findWalkerAssignedToPet = (pets, walkers, walkerCities, cities) => {
        let walkerAssignedToPetArray = []   
        let assignmentHTML = ""
        assignmentHTML = "<ul>"     
                     
             for (const pet of pets) {
                 for (const walker of walkers) {
                     if (walker.id === pet.walkerId) {
                         for (const walkerCity of walkerCities) {  
                             if (walker.id === walkerCity.walkerId) {
                                 for (const city of cities) {               
                                     if (city.id === walkerCity.cityId) {
                                                 const walkerAssignedToPetObject = {
                                                 walkerId: walker.id,
                                                 walkerName: walker.name,
                                                 petId: pet.id,
                                                 petName: pet.name,
                                                 petWalkerId: pet.walkerId,
                                                 cityName: city.name
                                             }
                                     walkerAssignedToPetArray.push(walkerAssignedToPetObject)
                                                     assignmentHTML += `
                                                     <li>
                                                         ${walkerAssignedToPetObject.petName} is being walked by
                                                         ${walkerAssignedToPetObject.walkerName} in 
                                                         ${walkerAssignedToPetObject.cityName}
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

 return assignmentHTMLs
 }
 
}