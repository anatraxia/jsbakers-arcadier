import express from 'express'

const router = express.Router()

/* GET index page. */
router.get('/', (req, res, next) => {
  var request = require('request')
  var options = { method: 'GET',
    url: 'https://gateaubread.sandbox.arcadier.io/api/consumers/categories',
    qs: { topRows: '2' },
    headers:
    {
      token: 'Qa49ztDmyUFIDafrpTg4oWj_g6Sqc390ov1vU',
      authorization: 'Bearer Q93id07fn2_fcId9Ni8IdmlYg7cE3nikYUbnEXF0NTuYuw5XrvP',
      'content-type': 'application/json' },
    body: { name: 'talk', completed: false, description: 'grandma Nanny' },
    json: true }

  request(options, function (error, response, body) {
    if (error) throw error
    res.render('index', body)
  })
})

/* GET Cart page. */
router.get('/cart', (req, res, next) => {
  res.render('cart', {
    title: 'Express'
  });
});
/* GET login page. */
router.get('/login', (req, res, next) => {
  res.render('login', {
    title: 'Express'
  });
});

router.get('/signup', (req, res, next) => {
  res.render('signup', {
    title: 'Express'
  });
});

/* GET orderhistory page. */
router.get('/order/orderhistory', (req, res, next) => {
  res.render('orderhistory', {
    title: 'Express'
  });
});



export default router
