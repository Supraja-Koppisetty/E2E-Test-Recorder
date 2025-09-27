// This file records clicks on the document 
console.log("Content script loaded!", typeof chrome.runtime);

document.addEventListener("click",(event)=>{
    const element = event.target;
    const data = {
        id: element.id,
        classes: element.className,
        text: element.innerText,
        tag: element.tagName
    }

    chrome.runtime.sendMessage({type:"RECORD_EVENT", data})

})