
// Here we create veriable to grab date, month and Year.

var DateToday = dayjs('2023-03-25', 'YYYY-MM-DD', true)




//$("#currentDay").html(DateToday);
document.getElementById('currentDay').innerHTML = DateToday;
$ (document).ready(function () {

  // This is the Listener Click for Button Save
  $(".saveBtn").on("click", function () {


    // This will get description value in JQuery

    var desCrp = $(this).siblings(".description").val();

    var tme = $(this).parent().attr("id");

    
    // This will save the Time and the Description into Local Storage
    localStorage.setItem(tme, desCrp);
})

// we created this function to check the timings and perform the specific tasks.
function tChecker() {
  
  // This is collecting hours.
  
  var tmenw = dayjs('2023-03-25', 'YYYY-MM-DD', true)
  
  // This is performing iteration for every listed time.
  $(".time-block").each(function () {
      var jQTime = parseInt($(this).attr("id").split("hour")[1]);

      
      // This is the class that is checking specific time for specified background
      if (jQTime < tmenw) {
        // This is removing the class of future
          $(this).removeClass("future");

          // Here it's removing the class of present.
          $(this).removeClass("present");

          // THis is adding the class of past
          $(this).addClass("past");
      }
      //Here it will excute only if the condition above does not match.
      else if (jQTime === tmenw) {
        // This is adding the class of past
          $(this).removeClass("past");

          // This will add the class of future
          $(this).removeClass("future");

          // This will add the present class
          $(this).addClass("present");
      }

      // This is the final condition, if the two above condition did not match then
      // this will be executed.
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");

      }
  })
}



// This is jQuery syntax which is grabbing IDs and classes
// This is storing the hours into the local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));




// This is the function that we called to perform the tasks.
tChecker();
});
