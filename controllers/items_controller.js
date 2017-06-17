let itemController = {
  list: (req, res) => {
    var request = require('request')
    var options = { method: 'GET',
      url: 'https://gateaubread.sandbox.arcadier.io/api/consumers/items/search',
      qs: { },
      headers:
      { 'postman-token': '0e7352ad-2330-c962-dead-c96ef9b060ed',
        'cache-control': 'no-cache',
        token: 'Qa49ztDmyUFIDafrpTg4oWj_g6Sqc390ov1vU',
        authorization: 'Bearer Q93id07fn2_fcId9Ni8IdmlYg7cE3nikYUbnEXF0NTuYuw5XrvP',
        'content-type': 'application/json' },
      data: { name: 'talk', completed: false, description: 'grandma Nanny' },
      json: true }
 
    request(options, function (error, response, data) {
      if (error) throw error

      res.render('items', {
        json: data
      });
    }); 
  }
}

module.exports = itemController
