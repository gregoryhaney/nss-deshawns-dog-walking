import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `
                    <li>
                    ${currentWalker.city}
                    </li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

