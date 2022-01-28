
import { Assignments } from "./Assignments.js"
import { assignedCityNames } from "./CityList.js"
import { getPets, getWalkers, getWalkerCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames()            
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}


/*
  define a fn that will get all objects in the 
  "walkerCities" array that are for the walker 
  that was clicked on. 
  It should return an array of all matching objects.   
*/

const walkerCities = getWalkerCities()

// The function need the walker information, so define a parameter

export const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    const assignments = []

    // Iterate the array value of walkerCities
    for (const assignment of walkerCities) {

        // Check if the primary key of the walker equals the foreign key on the assignment
        if (assignment.walkerId === walker.id) {
            // If it does, add the current object to the array of assignments
            assignments.push(assignment)
        }
    }

    // After the loop is done, return the assignments array
    return assignments
}