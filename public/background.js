let recordedClicks = [];

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "RECORD_EVENT") {
      recordedClicks.push(msg.data);
      console.log("Recorded click:", msg.data);
    }
    if(msg.type === "GET_RECORDED_CLICKS"){
      sendResponse({clicks: recordedClicks})
    }
    if(msg.type === "CLEAR_RECORDED_CLICKS"){
      sendResponse({success:true})
    }
    return true;
  });
  