function doGet() {
  return HtmlService.createHtmlOutputFromFile('kaamera'); // faili nimi HTML-s
}

// funktsioon, mis lisab Sheetsi ainult värvi
function saveData(color) {
  const sheet = SpreadsheetApp
    .openById("1tqQLEHG3mJW3zzP8UpCJaq2AYg1tAUbTzzpqBWAOO54")
    .getActiveSheet();
  
  sheet.appendRow([color]);
}
