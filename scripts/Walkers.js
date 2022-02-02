import { Assignments } from "./Assignments.js"
import { getWalkers, getCities, } from "./database.js"

// invoke getCites fn
// it has properties of: id, name
const cities = getCities()

// invoke getWalkers fn
// it has properties of: id, name, email
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = Assignments()                        
                        
                    window.alert(`${walker.name} services ${cities.name}`)
                        
                }
            }
        }
    }
)


    // create fn for export to be displayed in
    // the "Walkers" section of index.html
export const Walkers = () => {
    let walkerHTML = "<ul>"
                // iterate through each walker
                // for each, append to the 'walkerHTML' variable
                // a line item coded in HTML showing the walker's name
            for (const walker of walkers) {
                walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
            }
        walkerHTML += "</ul>"
    return walkerHTML
}