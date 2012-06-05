chrome.tabs.onUpdated.addListener(function(tabId, changeinfo, tab){		
		if(tab.url && tab.url.indexOf('github.com') != -1){
			chrome.pageAction.show(tabId);
			if(changeinfo.status == "complete") {
				chrome.tabs.executeScript(tabId, {code:"___GitHubWider_resetWidth();"});
			}
		}
});
chrome.pageAction.onClicked.addListener(function(tab) {	
	chrome.tabs.executeScript(tab.id, {code:"___GitHubWider_resetWidth();"});
});