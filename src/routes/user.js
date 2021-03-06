const router = require('express').Router();
const Controllers = require('../controllers/user');

router.post('/register', Controllers.register);
router.post('/login', Controllers.login);
router.get('/isloggedin', Controllers.isLoggedIn);
router.patch('/addcreditcard', Controllers.addCreditCard);
router.post('/contact', Controllers.contactUs);
router.post('/sendtoken', Controllers.sendToken);
router.post('/verifytoken', Controllers.verifyToken);

module.exports = router;
