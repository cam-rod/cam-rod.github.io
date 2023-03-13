// Paste public key into input text field
function pasteKeyFile(event) {
    let reader = new FileReader();
    reader.onload = loadKeyFile;
    reader.readAsText(event.target.files[0])
}
function loadKeyFile(event) {
    document.getElementById("publickey-text").innerText = event.target.result;
}
document.getElementById("publickey-file").addEventListener('change', pasteKeyFile, false)