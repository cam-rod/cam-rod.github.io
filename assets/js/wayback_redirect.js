window.onload = function() {
    const waybackDirect = document.getElementById("referrer-page");
    if (!document.baseURI.includes("404.html")) {
        waybackDirect.setAttribute("href", `https://web.archive.org/web/*/${document.URL}`)
    }
}