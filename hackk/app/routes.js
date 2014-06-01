// app/routes.js
module.exports = function(app, passport) {
	var _ = require('underscore');
        var User = require('./models/user');
        var Product = require('./models/product');
	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : User.findOne({'local.email': req.user.local.email}) // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
    // --------------------------------------------------------------------------------
    var API_PREFIX = '/api/v1';
    // --- ROUTES FOR USERS ----------------------------------------
    app.get(API_PREFIX + "/users/:id", function(req, res) {
	User.findOne({'user.id': req.param.email}, function(err, user) {
	    if(err) {
		res.json(404, {error: err});
	    } else {
		res.json(200, {'user': user});
	    }
	});
    });

    // app.get(API_PREFIX + "/users", function(req, res) {
    // 	//res.json( 200, );
    // });
    
    // GET PRODUCTS

    // // --- ROUTES FOR PRODUCTS -------------------------------------
    var PRODUCT_PREFIX = API_PREFIX + "/products";
    app.get(PRODUCT_PREFIX + "/:id", function(req, res) {
	var idToFind = req.params.id;
	if(!idToFind) {
	    res.json(500, {message: "Invalid request: Please specify the 'id' of the product to be requested or simply request '" + PRODUCT_PREFIX + "' in order to fetch all products."});
	    return;
	}
	Product.find({_id: idToFind}, function(err, result) {
	    if(err) {
		console.log(err);
		res.json(500, {message: err});
		return;
	    } else {
		console.log(result);
		res.json(200, {products: result});
	    }
	});
    });
    app.get(PRODUCT_PREFIX, function(req, res) {
	Product.find({'count': {$gt: 0}}, function(err, result) {
	    if(err || !_.isArray(result) || result.length === 0) {
		var message;
		if(err) { 
		    message = err; 
		} else {
		    message = "None found.";
		}
		res.json(404, {products: [], message: err});
	    } else {
		res.json(200, {products: result});
	    }
	});
    });
    

    app.post(PRODUCT_PREFIX, function(req, res) {
	var productConfig = req.body;
	if(!_.isObject(productConfig)) {
	    res.json(500, {message: 'Invalid input'});
	    return;
	}
	var count = (productConfig.count?productConfig.count:1);
	var name = productConfig.name;
	if(!name) {
	    res.json(500, {message: 'Invalid input: please specify Product name'});
	    return;
	}

	//var user = req.user;
	var product = new Product({'name': name, 'count': count});
	var url = PRODUCT_PREFIX + "/" + product._id;
	product.url = url;
	product.save(function(err, result) {
	    if(err) {
		console.log(err);
		res.json(500, {'message': err});
	    } else {
		console.log(result);
		res.json(200, {'product': result});
		
	    }
	});

    });
    
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
