"use strict"
const func = {
    addBtnClick() {
        document.querySelector(".teamInput").classList.toggle("hidden");
    },
    saveTeam() {
        //Getting the values from the user.
        const teamName = document.querySelector("#teamName").value;
        const teamAbbr = document.querySelector("#teamAbbr").value;
        const teamColor = document.querySelector("#teamColor").value;
        //Storing Data
        const teamData = {
            teamName: teamName,
            teamAbbr: teamAbbr,
            teamColor: teamColor
        }
        let names = [...Object.keys(localStorage)];
        // Setting LocalStorage  
        localStorage.setItem(teamName, JSON.stringify(teamData));
        this.addBtnClick()
        //Looping over the teamData
        for (let i = 0; i <= names.length; i++) {
            console.log(JSON.parse(localStorage.getItem(names[i])));
            document.querySelector(".div").innerHTML = `<h1>${names}names</h1>`;
        }
    }
}
