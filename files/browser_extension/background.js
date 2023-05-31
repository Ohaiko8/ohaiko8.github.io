var a = document.createElement('a');
a.setAttribute('id', 'screen');
a.setAttribute('download', 'download');
a.href = '';

//function for downloading images
function imageDownload(df){
    html2canvas(df).then(function(canvas){
        a.href = canvas.toDataURL("image.png");
        a.click();
    });
    //fixing bug with multiple images download instead of 1
    return false;
}

//calling function for downloading image on variable change
chrome.storage.onChanged.addListener(function(e){
    imageDownload(document.body);
});

//function for taking image of selected element on page
//function for checking if user clicked a key
var flag = false;
window.onkeydown = function(e) {
    var key = e.key;
    if(key.toLowerCase() == 's' && e.shiftKey) {
        if(!flag)
        {
            flag = true;
            alert('"choose element to screenshot" mode enabled');
        }
        else
        {
            flag = false;    
            alert('"choose element to screenshot" mode disabled');
        }
    }
};

//adding outline on hover
$("*").hover(function(){
    if(flag)
        {
           $(this).css("outline", "1px solid #f00");
        }
    return false;
},function(){
       $(this).css("outline", "none");
});

//taking screenshot of selected element
$('*').dblclick(function(){
    if(flag)
    {
        imageDownload(this);     
    }
    return false; 
});