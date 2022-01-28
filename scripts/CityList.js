import { getWalkerCities, getCities } from "./database.js"

const cities = getCities()
const assignmentArray = getWalkerCities()



// this fn is the list of 'Cities with Service' that
// is imported by main.js for display in index.html page
export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `
                    <li>
                    ${city.name}
                    </li>`
    }
    citiesHTML += "</ul>"
    return citiesHTML
}

/*
  define a fn that takes in the array of matching objects, 
  and use the cityId property on each one to find 
  the matching city name. 
  It should return a string containing all the city names.

    Define a function that builds a string of city names.
     Needs a paramter for assignments array.
*/


export const assignedCityNames = (assignmentArray) => {

    
    // Define an empty string that will get appended with matching cities
    let cityNames = ""

    // Iterate the array of assignment objects
    for (const assignment of assignmentArray) {

        // For each assignment, iterate the cities array to find the match
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                // Add the name of the matching city to the string of city names
                cityNames = `${cityNames} and ${city.name}`
            }
        }
    }

    // After the loop is done, return the string
    return cityNames
}