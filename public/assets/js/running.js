$(document).ready(() => {
  // Getting references to our form and input
  const runningForm = $("form.running-form");
  const goalInput = $("input#running-goal");
  const durationInput = $("input#running-duration");
  const milesInput = $("input#running-miles");
  // When the Add challenge button is clicked, we validate the the inputs.
  runningForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      goal: goalInput.val().trim(),
      duration: durationInput.val().trim(),
      miles: milesInput.val().trim()
    };
    if (!userData.goal || !userData.duration || !userData.miles) {
      return;
    }
    // If we have a goal, miles, duration  run the addChallenge function
    addChallenge(userData.goal, userData.duration, userData.miles);
    goalInput.val("");
    durationInput.val("");
    milesInput.val("");
  });
  // Does a post to the running challenge route. If successful, we are redirected to the profile? page
  // Otherwise we log any errors
  function addChallenge(goal, duration, miles) {
    $.post("/api/running", {
      goal: goal,
      duration: duration,
      miles: miles
    }).then(data => {
      window.location.replace("/profile");
      // If there's an error, handle it by throwing up a bootstrap alert
    });
  }
  $.get("/api/user_data").then(data => {
    $("#id-input").val(data.id);
  });
});
