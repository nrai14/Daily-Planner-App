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

var currentDate = moment().format("dddd, MMMM YYYY");
$("#currentDay").text(currentDate);


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

