var {google} = require('googleapis');


var drive = google.drive("v3");
var key = require("./private_key.json");

var path = require("path");
var fs = require("fs");

var jwToken = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ["https://www.googleapis.com/auth/drive"],
    null
);
jwToken.authorize((authErr) => {
    if(authErr) {
      console.log("Error: ", authErr);
      return;
    } else {
      console.log("Authorization accorded");
    }
});

// // list file in speciifcs folder
// var parents = "1UyQyPujZMnTm8O7mdIvEZVzGqOBl08dy"
// drive.files.list({
//
//   auth: jwToken,
//   pageSize: 10,
//   q: "'" + parents + "' in parents and trashed=false",
//   fields: 'files(id, name)',
// }, (err, {
//   data
// }) => {
//   if (err) return console.log('The API returned an error: ' + err);
//   const files = data.files;
//   if (files.length) {
//     console.log('Files:');
//     files.map((file) => {
//       console.log(`${file.name} (${file.id})`);
//     });
//   } else {
//     console.log('No files found.');
//   }
// });

// Modify goo sheet.
var  getData = () => {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.values.get({
    auth: jwToken,
    spreadsheetId: '1rHWsnPAD3gyrAYtE0Wzn5LxW5vIAJmyDHhfa5fzVLfQ',
    range: 'Sheet1!A1:E1', //Change Sheet1 if your worksheet's name is something else
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var rows = response.data.values;
    if (rows.length === 0) {
      console.log('No data found.');
    } else {
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
         console.log(row.join(", "));
      }
    }
    console.log(response.data.values);
  });
}

//Append new line
var appendData = () => {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.values.append({
    auth: jwToken,
    spreadsheetId: '1rHWsnPAD3gyrAYtE0Wzn5LxW5vIAJmyDHhfa5fzVLfQ',
    range: 'Sheet1!A2:B', //Change Sheet1 if your worksheet's name is something else
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [ ["Void", "Canvas", "Website", "Website"], ["Paul", "Shan", "Human"] ]
    }
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    } else {
        console.log("Appended");
    }
  });
}

var updateData = () => {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.values.update({
    auth: jwToken,
    spreadsheetId: '1rHWsnPAD3gyrAYtE0Wzn5LxW5vIAJmyDHhfa5fzVLfQ',
    range: 'Sheet1!A2:D', //Change Sheet1 if your worksheet's name is something else
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [ ["1", "2", "3", "4"], ["1", "2", "3"] ]
    }
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    } else {
        console.log("Appended");
    }
  });
}

getData();
//updateData();
