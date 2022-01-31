import { getPets } from "./database.js"

// invoke getPets fn
// the variable 'pets' has: id, name, walkerId
const pets = getPets()

// create a fn to gather all the pets
export const RegisteredPets = () => {
    let petHTML = "<ul>"

    // iterate through all the pet objects
    // and get the 'pet.name'
    // this will be displayed on the index.html
    // page in the "Pets" section
            for (const pet of pets) {
                petHTML += `
                        <li>
                        ${pet.name}
                        </li>`
            }

    petHTML += "</ul>"

    return petHTML
}

