fetchProfilesScript = {
    init: function () {
    
        this.executeMain();
    },
    executeMain: function () {
        chrome.storage.local.set({ profilesScriptExecution: false });
        return chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, { file: "main.js" });
        });
    },
    getScriptInitBtn() {
        return document.getElementById('run_script_btn');
    }
}

fetchProfilesScript.getScriptInitBtn().onclick = function () {
    fetchProfilesScript.init();
}