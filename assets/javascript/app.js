window.onload = function() {


var quiz = [{
  "question": "What year did the Beatles hit the scene?",
  "choices": ["1950", "1960", "1970"],
  "correct": 1
}, {
  "question": "Which of the following is the name of band member?",
  "choices": ["John Lennon", "Mick Jagger", "Bob Dylan"],
  "correct": 0
}, {
  "question": "Which of the following is a song written by the band?",
  "choices": ["She Loves You", "All Along the Watchtower", "Satisfaction"],
  "correct": 0
}, {
  "question": "Which of the following is an Album produced by the band?",
  "choices": ["Rainbow Bridge", "In the Court of the Crimoson King", "Revolver"],
  "correct": 2
}, {
  "question": "What was the first song the band performed for an Ameerican audience?",
  "choices": ["She Loves You", "All My Loving", "Can't Buy Me Love"],
  "correct": 1
}]






  $("#start").on("click", stopwatch.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// Our stopwatch object
var stopwatch = {

  time: 120,
  lap: 1,

  reset: function() {

    stopwatch.time = 120;
    stopwatch.lap = 1;
  },

  start: function() {

    // DONE: Use setInterval to start the count here.
    intervalId = setInterval(stopwatch.count, 1000);
  },

  count: function() {

    stopwatch.time--;

    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").html(converted);
  },

  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

};















































