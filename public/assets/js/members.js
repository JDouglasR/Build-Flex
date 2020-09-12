$(document).ready(() => {
  const selectchallengeType = $("#type");
  selectchallengeType.on("change", handleChallengeChange);
  function handleChallengeChange(event) {
    event.preventDefault();
    const challengeType = $("select")
      .children("option:selected")
      .val();
    if (challengeType === "walking") {
      window.location.replace("/walking");
    } else if (challengeType === "hiking") {
      window.location.replace("/hiking");
    } else if (challengeType === "swimming") {
      window.location.replace("/swimming");
    } else if (challengeType === "running") {
      window.location.replace("/running");
    } else if (challengeType === "pullup") {
      window.location.replace("/pullup");
    }
  }
});
