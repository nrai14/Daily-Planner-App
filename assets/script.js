// current time will be highlighted in red 
// past time will be highlighted in gray
// available time will be highlighted in green 

// each time box is an input (you can type into it)

// once task has been written, save it (to local storage) (feedback message?)

// e.g. 12 - Take lunch --> Save to local storage --> Save 

/*
NOtes: Hours = object? 

*/


// Current date: Day Time

var currentDate = moment().format("dddd, MMMM YYYY, h:mm:ss a");
$("#currentDay").text(currentDate);

var hour = moment().format("h");


//&

// .each function from jQuery is similar to forEach - both need an array of data to target 

// target each hour
$(".description").each(function() {

    var currentHour = $(this).attr("id")

    if (hour > currentHour) {
    $("#" + hour).addClass("past");
   
}
    
})
// ADD ELSE IF STATEMENTS TO CHANGE COLOURS IF TIME IS AHEAD OR PRESENT 











// &


// jQuery to target textarea 





// for every hour from 9 to 5, create a time block row 
// build time blocks with loop that loops at 9 and breaks at 6
// for each loop generate or build html time block
    // append timeblock to container
        // Hour
            // A number corresponding with the hour in 12 hour format
        // Textarea
            // Show existing event text, if any and allow user to input event text
        // save button
            // when clicked, store/reset the event corresponding with the hour to localStorage 
    // increase hour by one
    // check if hour is past, current or future and apply correspending css class 


// var time = 0; 

// while (time < 9; time++) {
    // create three rows
    // moment js to add time slot ++hour
    // add texterea and button 




    // Timeblocks in HTML 
    // JS functionality comes from saving data (local storage)
    



    // ONCE USER WRITES TASKS - RECORD INPUT ON AN EVENT (SAVE BUTTON IS CLICKED - 1) record value of textarea 2) save data to local storage 

        // JavaScript needs to record the current time and apply a class to all timeblocks based on current time and the identifier of the timeblock to compare it to 
                // Gives past time- gray, present - red, future - green
                // Figure out way to target entire div and find out value, maybe an ID 
        
//  two logics: 1) If (adds the class) 2) Event handler (save button - store data from textarea into local storage) 

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


//  key will be hour (id) // value will be user text


// 