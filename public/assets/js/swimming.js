$(document).ready(() => {
  // Getting references to our form and input
  const swimingForm = $("form.swimming-form");
  const goalInput = $("input#swimming-goal");
  const durationInput = $("input#swimming-duration");
  const milesInput = $("input#swimming-miles");
  // When the Add challenge button is clicked, we validate the the inputs.
  swimingForm.on("submit", event => {
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
  // Does a post to the swim challenge route. If successful, we are redirected to the profile? page
  // Otherwise we log any errors
  function addChallenge(goal, duration, miles) {
    $.post("/api/swimming", {
      goal: goal,
      duration: duration,
      miles: miles
    }).then(userData => {
      window.location.replace("/profile");
      // If there's an error, handle it by throwing up a bootstrap alert
    });
  }
  $.get("/api/user_data").then(data => {
    $("#id-input").val(data.id);
  });
});
