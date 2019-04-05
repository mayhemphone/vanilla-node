// Include the HTTP core module
var http = require ('http')
var moment = require('moment')

// Create a server that listens for connections on a specified port:
http.createServer(function(req,res) {
	//console logs print into terminal
	console.log('')
	res.write('Hey it\'s my first node app! nodemon')
	res.write('\n\n\n')
	res.write(moment('09-11-1985', 'MM DD YYYY').format('dddd [the] Do [of] MMMM [in the year] YYYY'))
	res.write('\n\n\n')
	res.write('\n\n\nWow, that was '+ moment('09-11-1985', 'MM DD YYYY').fromNow())

	res.end()
}).listen(8000)