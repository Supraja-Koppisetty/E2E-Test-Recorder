chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "RECORD_EVENT") {
      console.log("Recorded click:", msg.data);
    }
  });
  