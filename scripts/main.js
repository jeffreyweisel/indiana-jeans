import { OwnJeanChoices } from "./OwnsJeans.js"
import { saveSubmission } from "./SaveSubmission.js"
import { LocationTypeChoices } from "./UrbanDweller.js"
import { SubmissionList } from "./Submissions.js"

const container = document.querySelector('#container')

//need async if you have awaits
const render = async () => {
    
    const jeanOwnershipHTML = OwnJeanChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = await saveSubmission()
    const submissionListHTML = await SubmissionList()
    
    
    container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}
        ${buttonHTML}
        ${submissionListHTML}
        `
}

//Adds the new selection each time the save submission button is clicked
document.addEventListener("newSubmissionCreated", render)

render()