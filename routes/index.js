import express from 'express'

const router = express.Router()

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});
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
