// Google Apps Script for Portfolio Contact Form
// Copy this code to script.google.com and deploy as a web app

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Append the data to the sheet with timestamp
    sheet.appendRow([
      new Date(),           // Timestamp
      data.name,            // Name
      data.email,           // Email
      data.message          // Message
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({status: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error for debugging
    Logger.log(error.toString());
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: doGet for testing the web app
function doGet(e) {
  return ContentService.createTextOutput("Web app is running. Use POST to submit form data.")
    .setMimeType(ContentService.MimeType.TEXT);
}
