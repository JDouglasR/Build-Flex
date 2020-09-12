$(() => {
  $(document).ready(() => {
    getAllStats();
  });
});

function getAllStats() {
  $.get("api/user-data", data => {
    console.log(data);
  });
}
