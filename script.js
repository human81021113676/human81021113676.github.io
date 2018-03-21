function addDateStamp()
{
    var d = new Date();
    var dateStamp = d.getFullYear().toString() 
                + (d.getMonth()+1).toString() 
                + d.getDate().toString();
    return dateStamp.slice(2);
}

function saveTextAsFile()
{
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = addDateStamp() + "-" +
                           document.getElementById("inputFileNameToSaveAs").value;
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}