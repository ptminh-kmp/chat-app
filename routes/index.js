import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  return res.render('main/master');
});

router.get('/login-register', (req, res) => {
  return res.render('auth/loginRegister');
});

module.exports = router;
