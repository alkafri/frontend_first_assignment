// All the reviews stored in an XML file
// This code to get the reviews and show it in the HTML file

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var xmlData = xhttp.responseXML;
    var reviews = xmlData.getElementsByTagName("review");
    
    // Create a list item for each review
    for (var i = 0; i < reviews.length; i++) {
      // Each review has a username and content which is the review
      var userName = reviews[i].getElementsByTagName("user_name")[0].childNodes[0].nodeValue;
      var reviewContent = reviews[i].getElementsByTagName("content")[0].childNodes[0].nodeValue;
      
      // Create the list which contains the review
      var listItem = document.createElement("li");
      var textNode = document.createTextNode(userName + ": " + reviewContent);
      listItem.appendChild(textNode);
      
      // Add the list item to the reviews list
      var reviewsList = document.getElementById("reviewsList");
      reviewsList.appendChild(listItem);
      listItem.classList.add("rev-li"); // This is the CSS class name
    }
  }
};
xhttp.open("GET", "xml/user_reviews.xml", true);
xhttp.send();


/* The following code will add new review to the current list*/
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
    event.preventDefault();

    var userName = form.elements['user_name'].value;
    var reviewContent = form.elements['review'].value;
    var listItem = document.createElement("li");
    var textNode = document.createTextNode(userName + ": " + reviewContent);
    listItem.appendChild(textNode);

    var reviewsList = document.getElementById("reviewsList");
    reviewsList.appendChild(listItem);
    listItem.classList.add("rev-li");

    form.reset();
});