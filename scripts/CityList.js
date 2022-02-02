import { getCities } from "./database.js"
const cities = getCities()

// this fn is the list of 'Cities with Service' that
// is imported by main.js for display on index.html page

export const CityList = () => {
    let citiesHTML = "<ul>"
        // iterate through cities and
        // add each to the citiesHTML variable
    for (const city of cities) {
        citiesHTML += `
                    <li>
                    ${city.name}
                    </li>`
    }
    citiesHTML += "</ul>"
    return citiesHTML
}