app.get("/api/user-data", (req, res) => {
  connection.query("SELECT * FROM allChallenges;", (err, data) => {
    if (err) {
      return res.status(500).end();
    }
    res.json(data);
  });
});
app.put("/api/user-data/:id", (req, res) => {
  connection.query(
    "UPDATE allChallenges SET allChallenges = ? WHERE id = ?",
    [
      req.body.challenge,
      req.params.id,
      req.body.goal,
      req.body.duration,
      req.body.steps
    ],
    (err, result) => {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      } else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});
