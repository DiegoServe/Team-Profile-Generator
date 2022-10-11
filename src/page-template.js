let generatehtmlPage = teamObj => {
    console.log('team object', teamObj)

   // set card to empty
    let htmlCard = ""

    for(let i = 0; i < teamObj.length; i++){
        let finalPrompt = teamObj[i].office || teamObj[i].gitHub || teamObj[i].school;
        let keys = Object.keys(teamObj[i]);
        let lastKey = keys[4];
        let finalOption = lastKey + ":" + finalPrompt

    } else if (lastKey === 'gitHub'){
        finalOption = (`GitHub : <a href = 'https://www.github.com/${teamObj[i].gitHub}'> ${teamObj[i].gitHub}</a>`)
        console.log(finalOption)
    }
    else{
        console.log(finalOption)
    }