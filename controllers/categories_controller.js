let categoriesController = {
  listSubCategories: (req, res) => {
    console.log(req.body.headers.category)
    var request = require('request')
    var options = { method: 'GET',
      url: 'https://gateaubread.sandbox.arcadier.io/api/consumers/items/search',
      headers:
      {
        category: '122',
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
