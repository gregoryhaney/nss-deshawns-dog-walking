
// from the database module, import functions so their
// return values can be used in this module
import { getPets, getWalkers, getCities, getWalkerCities } from "./database.js"

// invoke the imported functions
// Get copy of state for use in this module
const pets = getPets()
    // properties of 'pets' will be: id, name, walkerId

const walkers = getWalkers()
    // properties of 'walkers' will be: id, name, email



// Fn to find the walker assigned to a pet
// Takes two parameters:
//  pet:        the individual pet
//  allWalkers: all of the dog walkers
const findWalker = (pet, allWalkers) => {

    // set variable to hold the walker for each pet
    let petWalker

        // interate through each dog walker
        for (const walker of allWalkers) {

            // check if the id of the walker is equal
            // to the walkerId for the individual pet
            if (walker.id === pet.walkerId) {

                // if yes, set the value of 'walker' into
                // the variable for return (petWalker)
                petWalker = walker
            }
        }
    return petWalker
}


// create a fn for export named "Assignments"
// it requires no parameters

export const Assignments = (walkerCities, citiesListing) => {
    let assignmentsArray = []
    // set an empty variable that will hold the HTML string
    // which will be passed into the index.html page
    let assignmentHTML = ""

    // start the HTML string to be an unordered list
    assignmentHTML = "<ul>"

    // interate through 'pets', which 
    // has properties: id, name, and walkerId
    for (const currentPet of pets) {

        const walkerCities = getWalkerCities()
    // properties of 'walkerCities' will be: cityId, walkerId

        const citiesListing = getCities()
    // properties of 'citiesListing' will be: id, name

        // invoke the 'findWalker' fn (from above in this module)
        // parameters: currentPet, walkers
        // store the fn's return (petWalker) in 'currentPetWalker'
        const currentPetWalker = findWalker(currentPet, walkers)
                    
            for (let walker of walkerCities) {
                walker.id = currentPetWalker.id

                for (let city of citiesListing) {
                    city.id = walker.cityId

        // append to the HTML string the data from each
        // iteration through 'pets'
            // because the 'findWalker' fn is passing in two parameters,
            // we have access to 'currentPet' and 'currentPetWalker'
            // each 'currentPet' will have objects: id, name, walkerId
            // each 'currentPetWalker' will have objects: id, name, email 
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in 
                ${city.name}
            </li>
        `
        assignmentsArray.push(`${currentPet.name} is being walked by
                               ${currentPetWalker.name} in 
                               ${city.name}`)
    }

    // end the HTML string by closing out the unordered list
    assignmentHTML += "</ul>"
}
}   // return the HTML string for use in the index.html page
    return assignmentHTML
}

