const { exec } = require("child_process");console.log('Starting All Packages Install')exec("cd  ../agent && npm install", (error, stdout, stderr) => { console.log('Installing Agent '); if (error) {  console.log(`error: ${error.message}`);  return; } if (stderr) {  console.log(`stderr: ${stderr}`);  return; } console.log(`stdout: ${stdout}`);});exec("cd  ../airline && npm install", (error, stdout, stderr) => { console.log('Installing Airline '); if (error) {  console.log(`error: ${error.message}`);  return; } if (stderr) {  console.log(`stderr: ${stderr}`);  return; } console.log(`stdout: ${stdout}`);});exec("cd  ../auto && npm install", (error, stdout, stderr) => { console.log('Installing Auto '); if (error) {  console.log(`error: ${error.message}`);  return; } if (stderr) {  console.log(`stderr: ${stderr}`);  return; } console.log(`stdout: ${stdout}`);});exec("cd  ../hotel && npm install", (error, stdout, stderr) => { console.log('Installing Hotel '); if (error) {  console.log(`error: ${error.message}`);  return; } if (stderr) {  console.log(`stderr: ${stderr}`);  return; } console.log(`stdout: ${stdout}`);});exec("cd  ../users && npm install", (error, stdout, stderr) => { console.log('Installing Users '); if (error) {  console.log(`error: ${error.message}`);  return; } if (stderr) {  console.log(`stderr: ${stderr}`);  return; } console.log(`stdout: ${stdout}`);});exec("cd ../tools/ && npm install", (error, stdout, stderr) => { console.log('Installing Tools '); if (error) {  console.log(`error: ${error.message}`);  return; } if (stderr) {  console.log(`stderr: ${stderr}`);  return; } console.log(`stdout: ${stdout}`);});