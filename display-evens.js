function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["displayEvens"].elements.length; 
        loopCounter++) {
        if (document.forms["displayEvens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["displayEvens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}

function resetForm() {
    clearErrors();
    document.forms["displayEvens"]["start"].value = "";
    document.forms["displayEvens"]["end"].value = "";
    document.forms["displayEvens"]["step"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["displayEvens"]["start"].focus();
}

function validateItems() {
    clearErrors();
    var start = document.forms["displayEvens"]["start"].value;
    var end = document.forms["displayEvens"]["end"].value;
    var step = document.forms["displayEvens"]["step"].value;
    if (start == "" || isNaN(start)) {
        alert("start must be filled in with a number.");
        document.forms["displayEvens"]["start"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["start"].focus();
        return false;
    }
    if (end == "" || isNaN(end)) {
       alert("end must be filled in with a number.");
       document.forms["displayEvens"]["end"]
          .parentElement.className = "form-group has-error"
       document.forms["displayEvens"]["end"].focus();
       return false;
   }
    if (step == "" || isNaN(step)) {
       alert("step must be filled in with a number.");
       document.forms["displayEvens"]["step"]
        .parentElement.className = "form-group has-error"
       document.forms["displayEvens"]["step"].focus();
       return false;

}
   
    /*for(i = 0; i <= end; i++) {

        if((i % 2) === 0) {
            continue;
        }

        document.write("Here are the even numbers between "start" and "end"; i + "<br />");
        return false;

    }*/

   document.getElementById("start").innerText = Number(start);
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("addResult").innerText = Number(start) +
                                                    Number(end);
   document.getElementById("subtractResult").innerText = start - end;
   document.getElementById("multiplyResult").innerText = start * end;
   document.getElementById("divideResult").innerText = start / end;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}