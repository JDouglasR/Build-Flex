$(document).ready(function() {
    // Getting references to our form and input
    var pullupForm = $("form.pullup-form");
    var goalInput = $("input#pullup-goal");
    var durationInput = $("input#pullup-duration");
    var repsInput = $("input#pullup-reps");
    // When the Add challenge button is clicked, we validate the the inputs.
    pullupForm.on("submit", function(event){
        event.preventDefault();
        var userData = {
            goal: goalInput.val().trim(),
            duration: durationInput.val().trim(),
            reps: repsInput.val().trim()
        };
        if (!userData.goal || !userData.duration || !userData.reps ) {
            return;
        }
      // If we have a goal, reps, duration  run the addChallenge function
        addChallenge(userData.goal, userData.duration, userData.reps);
        goalInput.val("");
        durationInput.val("");
        repsInput.val("")
    });
  // Does a post to the pullup challenge route. If successful, we are redirected to the profile? page
// Otherwise we log any errors
    function addChallenge(goal, duration,reps) {
    $.post("/api/pullup", {
        goal: goal,
        duration: duration,
        reps: reps
    })
        .then(function(data) {
        window.location.replace("/profile");
      // If there's an error, handle it by throwing up a bootstrap alert
    });
    };
    // This file just does a GET request to figure out id of the  challenge 

    $.get("/api/user_data").then(function(data) {
        $("#id-input").val(data.id);
    });
});