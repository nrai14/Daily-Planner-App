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




const taskArray = retrieve();

displayTasks(taskArray);





// eventhandler example

// THIS ALLOWS TO GAIN ACCESS 

//  local storage.set item method 
//  two parameters inside 
$(".saveBtn").click(function(){
    var userInput = $(this).siblings
    ("textarea").val();
    var textAreaID = $(this).siblings
    ("textarea").attr("id");
    var event = {
        id: textAreaID, 
        eventNote: userInput 
     }
    localStorage.setItem("hour" + event.id, JSON.stringify(event))
})

// Function now to render items from local storage and return to relevant places

function retrieve() {


    var storage = [ ];

    for(var i = 0; i < localStorage.length; i++) {
       
    var key = localStorage.key(i) 
    var event = JSON.parse(localStorage.getItem(key))
    storage.push(event)
    }
    return storage; 
    
}

function displayTasks(tasksArray) {
    tasksArray.forEach(task => {
      console.log(task)


        $(`#${task.id}`).text(task.eventNote)
    });
}


// store above as an object ^

// JSON STRINGIFIED ON LINE 69 TO SEE DATA AS A STRING 
// DON'T WANT TO REPLACE OBJECT - TO ADD ANOTHER OBJECT 
// CHECK IF DATA IS TEHRE, THEN ADD ONTO IT, IF EMPTY, THEN SEND EMPTY ARRAY 
// GET ITEM OUTSIDE OF FUCNTION 





// *********local storage********
//  Store data in an object

//  deal with stringified jSON

//  1) Access 
//  2) Pair content of timeblock with the identifier of where the time came from 
//  3) Have those values? Store it in jSON (store in object)
//  4) Goes into local storage localStorage.setItem(key, value)


