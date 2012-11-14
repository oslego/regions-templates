// Load the content into the document before the end of the body element
(function(){
    var xhr = new XMLHttpRequest(),
        doc = document,
        url = "article.html";
        
   xhr.onreadystatechange = function(){
       if (xhr.readyState === 4 && xhr.status === 200){
           doc.body.insertAdjacentHTML('beforeend', xhr.responseText)
       }
   }
   
   xhr.open("GET", url);
   xhr.send(null);
})()