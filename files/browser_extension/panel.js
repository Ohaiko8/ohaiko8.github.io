//creating random number to use it in background.js
document.querySelector('button').addEventListener('click', function(){
   chrome.storage.local.set({"key": Math.random()}); 
});