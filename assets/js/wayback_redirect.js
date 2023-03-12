window.onload = function() {
    const waybackDirect = document.getElementById("404-referrer");
    if (!document.baseURI.includes("404.html")) {
        waybackDirect.setAttribute("href", `https://web.archive.org/web/*/${document.URL}`)
    }
}