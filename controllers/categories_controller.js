let categoriesController = {
  list: (req, res) => {
    var request = require('request')
    var options = { method: 'GET',
      url: 'https://gateaubread.sandbox.arcadier.io/api/consumers/categories',
      qs: { topRows: '2' },
      headers:
      { 'postman-token': '0e7352ad-2330-c962-dead-c96ef9b060ed',
        'cache-control': 'no-cache',
        token: 'Qa49ztDmyUFIDafrpTg4oWj_g6Sqc390ov1vU',
        authorization: 'Bearer Q93id07fn2_fcId9Ni8IdmlYg7cE3nikYUbnEXF0NTuYuw5XrvP',
        'content-type': 'application/json' },
      body: { name: 'talk', completed: false, description: 'grandma Nanny' },
      json: true }

    request(options, function (error, response, body) {
      if (error) throw error
      res.json(body)
    })
  }

}
module.exports = categoriesController
