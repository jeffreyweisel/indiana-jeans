import { saveSurveySubmission } from "./TransientState.js"

//What happens when the save submission button is clicked, similar to end of book 3
const handleSurveySubmissionClick = (clickEvent) => {
    if(clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
    }
}

export const saveSubmission = () => {
    document.addEventListener("click", handleSurveySubmissionClick)

    return "<div><button id='saveSubmission'>Save Submission</button></div>"
}