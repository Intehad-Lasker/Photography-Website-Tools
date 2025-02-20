function getImageIds() {
  var folderId = "1pT1SPY5ds4W880sd0EirsHYDGo5DJgF7"; // Your Sky folder ID
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  var sheet = SpreadsheetApp.create(" Image IDs");
  var sheetData = sheet.getActiveSheet();
  
  // Add header row
  sheetData.appendRow(["File Name", "File ID"]);

  // Loop through files in the folder
  while (files.hasNext()) {
    var file = files.next();
    var fileId = file.getId(); // Only getting the file ID
    var fileName = file.getName();
    
    sheetData.appendRow([fileName, fileId]); // Store name and ID in sheet
  }
  
  Logger.log("Sheet Created: " + sheet.getUrl());
}
