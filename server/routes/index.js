module.exports = function(app, dbApi) {
  app.get('/api/health', function(req, res) {
  	//health check
    res.json({status: "ok"});
  });
}