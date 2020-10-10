$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and render the user info in to the page
  $.get("/api/user_data").then(data => {
    $("#name").val(data.firstName);
    $("#age").val(data.age);
  });
  // This file just does a GET request to figure out which user is logged in
  // and render the challenge info in to the page
  $.get("/api/walking").then(data => {
    console.log(data);
    $("#goal").append(data[data.length-1].goal);
    $("#duration").append(data[data.length-1].duration);
    $("#miles").append(data[data.length-1].miles);
    $("#steps").append(data[data.length-1].steps);
  });
});
