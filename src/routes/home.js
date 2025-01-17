const express = require('express');
const path = require('path');
const router = express.Router();

/* GET pulls. */
router.get( '/', function( req, res ) {
	const baseDir = path.dirname( path.dirname( __dirname ) );

	router.use( express.static( path.join( baseDir, 'build' ) ) );
	res.sendFile( path.join( baseDir, 'build', 'index.html' ) );
} );

module.exports = router;
