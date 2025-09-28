import './App.css'

function generatePlaywrightScript(clicks) {
  const lines = [
    "const { test, expect } = require('@playwright/test');",
    "",
    "test('replay user flow', async ({ page }) => {",
  ];

  clicks.forEach((click) => {
    if (click.id) {
      lines.push(`  await page.click('#${click.id}');`);
    } else if (click.classes) {
      lines.push(`  await page.click('.${click.classes.split(' ').join('.')}');`);
    } else if (click.tag) {
      lines.push(`  await page.click('${click.tag.toLowerCase()}');`);
    }
  });

  lines.push("});");
  return lines.join("\n");
}

function downloadScript(script, filename="playwright_test.js"){
  const blob = new Blob([script], {type: "text/javascript"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  URL.revokeObjectURL(url);
}

function handleDownload(){
  chrome.runtime.sendMessage({type:"GET_RECORDED_CLICKS"}, (data)=>{
    if(data && data.clicks){
      // create playwright script with the data received
     const script =  generatePlaywrightScript(data.clicks);
    //  download the script
      downloadScript(script);
    }
    

  })
}
function App() {
  return (
      <div style={{width:"300px", padding:"16px", fontFamily:"sans-serif"}}>
        <h1 styel={{fontSize:"18px", fontWeigt:"bold"}}> E2E test Recorder - Chrome Extension</h1>
        <button onClick={handleDownload}>
         Download Playwright Script
        </button>
      </div>
  )
}

export default App
