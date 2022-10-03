//// CUSTOMIZE THINGS HERE ////
const BUTTON_TEXT = "⮩ Sci-Hub"; // The text of the button
const SCIHUB_DOMAIN = "https://sci-hub.se"; // You can change this to your preferred Sci-Hub domain


//// DO NOT EDIT BELOW THIS LINE UNLESS YOU KNOW WHAT YOU ARE DOING ////

const DOM_Results = document.getElementById("gs_res_ccl_mid");

if (DOM_Results) {
    let resultBlocks = DOM_Results.getElementsByClassName("gs_ri");
    console.log(resultBlocks.length);

    for (let i = 0; i < resultBlocks.length; i++) {
        const resultTitles = resultBlocks[i].getElementsByClassName("gs_rt");
        const resultFooters = resultBlocks[i].getElementsByClassName("gs_fl"); // this is where the button is inserted to

        const URL = resultTitles[0].getElementsByTagName("a")[0].href; // this is the URL of the result

        const button = document.createElement("a");
        const buttonText = document.createTextNode(BUTTON_TEXT); 
        button.setAttribute("href", `${SCIHUB_DOMAIN}/${URL}`); 
        button.setAttribute("target", "_blank");
        button.setAttribute("rel", "noopener noreferrer");
        button.appendChild(buttonText);

        // insert button before the footer [0] of the result
        resultFooters[0].insertBefore(button, resultFooters[0].firstChild);
    }
}
else {
    console.log("-------\n\nThis is probably the Homepage of Google Scholar.\n\n-------\n");
}