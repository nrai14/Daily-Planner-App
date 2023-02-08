// current time will be highlighted in red 
// past time will be highlighted in gray
// available time will be highlighted in green 

// each time box is an input (you can type into it)

// once task has been written, save it (to local storage) (feedback message?)



// CURRENT DAY/TIME DISPLAYED 

var currentDate = moment().format("dddd, MMMM YYYY, HH:mm:ss a");
$("#currentDay").text(currentDate);

var hour = moment().format("HH");




// .each function from jQuery is similar to forEach - both need an array of data to target 
console.log($(".description"))
// target each hour
$(".description").each(function() {

    var currentHour = $(this).attr("id")
// this points to the current object 




    if (parseInt(hour) > parseInt(currentHour)) {
    $("#" + currentHour).addClass("past");
   
}
    else if (hour == currentHour) {
        $("#" + currentHour).addClass("present");
    }
    
    else {
        $("#" + currentHour).addClass("future");
    }
})
// ADD ELSE IF STATEMENTS TO CHANGE COLOURS IF TIME IS AHEAD OR PRESENT 



// LOCAL STORAGE TO SAVE USER INPUT WHEN CLICKING SVAE BUTTON 

function saveInput() {

    // Need to target save button

    $(".saveBtn").

    // Need to have event listener so that when save button is clicked, it fires to local storage 
    // Do we call this function every time save button is clicked?? 

    localStorage.setItem('userInput', input.value);

    localStorage.getItem


}





// eventhandler example

// THIS ALLOWS TO GAIN ACCESS 

//  local storage.set item method 
//  two parameters inside 
$(".saveBtn").click(function(){
    console.log($(this).parent())
    console.log($(this).siblings("textarea").val())
})


// *********local storage********
//  Store data in an object

//  deal with stringified jSON

//  1) Access 
//  2) Pair content of timeblock with the identifier of where the time came from 
//  3) Have those values? Store it in jSON (store in object)
//  4) Goes into local storage localStorage.setItem(key, value)


