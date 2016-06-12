

var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {


	console.log("Travel application is running!");

	var myName = "Kelsee is the best";
	app.get("/", function (req, resp) {
		resp.render('index');
	});

  app.get('/icecream', function(req, resp) {
    resp.render('icecream', { flavor: 'chocolate' });
  });

  app.get('/blog', function(req, resp) {
    db.findArray({}, function(results) {
      console.log(results);
      resp.render('blog', {results: results})
    });
  });
});
