//same thing as iterating a local array, only difference is now the database is in the api

export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    

    // Iterate the submissions and create some <section> representations
    const submissions = await response.json()
    
    let submssionsHTML =""
    
    for (const submission of submissions) {
        submssionsHTML  += `<section class = "submission">
        <div>Owns blue jeans: ${submission.ownsBlueJeans}</div>
        <div>Area type foriegn key: ${submission.socioLocationId}</div>
        
        </section>`
    }

    // Return the HTML string
    return submssionsHTML
}