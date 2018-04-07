function txtToTable()
{
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "definitions.txt", true);
    txtFile.onreadystatechange = function() {
      if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
        if (txtFile.status === 200) {  // Makes sure it's found the file.
          allText = txtFile.responseText; 
          lines = txtFile.responseText.split("\n"); // Will separate each line into an array
        }
      }
    }
    txtFile.send(null);
    return lines[0];
}

/* function addDateStamp()
{
    // Create new date object
    var d = new Date();

    // Add a "0" to the day if one digit # (e.g. The 5th: 5 -> 05)
    if (d.getDate() < 10) {
        day = "0" + d.getDate().toString();
    } else {
        day = d.getDate().toString()
    }

    // Add a "0" to the month if one digit # (e.g. March: 3 -> 03)
    // Need to add "1" to month b/c January = 0
    if (d.getMonth()+1 < 10) {
        month = "0" + (d.getMonth()+1).toString();
    } else {
        month = (d.getMonth()+1).toString()
    }

    // Remove first two digits of year (e.g. 2018 -> 18)
    var year = (d.getFullYear().toString()).slice(2);
    
    // Create date stamp string and return
    var dateStamp = year + month + day;
    return dateStamp;
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
*/