//** Created by KellyShimkoJohnson on 2/7/16. **//

var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 3000);


app.get('/*', function (request, response) {
    var file = request.params[0] || 'view/index.html';

    response.sendFile(path.join(__dirname, 'public', file));
});


app.listen(app.get('port'), function(){
    console.log("I am listening on port: " + (app.get('port')));
});
