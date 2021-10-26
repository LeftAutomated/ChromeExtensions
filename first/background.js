alert("Hello World");

function imageClick(info, tab){
    console.log("Image is clicked", info, tab);
    chrome.windows.create({
        "url": "http://google.com", //info.srcUrl
        "type": "popup"
    })
}

function quoteClick(info, tab){
    console.log("Quote is clicked", info, tab);
    chrome.windows.create({
        "url": "http://google.com", //info.selectionText
        "type": "popup"
    })
}

chrome.contextMenus.create({
    "title": "Share Image",
    "contexts": ["image"], 
    "onclick": imageClick
})

chrome.contextMenus.create({
    "title": "Share Quote",
    "contexts": ["selection"], 
    "onclick": quoteClick
})


chrome.runtime.onMessage.addListener(function(msg, sender, sendResposne){
    console.log(msg);
    sendResposne({"text": "Received links"});
})