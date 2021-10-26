console.log("Working");

//html scraping
var links = document.getElementsByTagName("a");
var formatLinks = [];
for(let i = 0; i < links.length; i++){
    let title = links[i].text;
    let href = links[i].href;
    if(title !== "" && href !== ""){
        formatLinks.push({title: title, href: href});
    }
}

chrome.runtime.sendMessage({
    "action": "print_messages", 
    "date": formatLinks
}, res => {
    console.log(res)
})