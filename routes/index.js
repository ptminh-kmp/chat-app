import express from 'express';
let router = express.Router();

import contactModel from '../models/contact.model';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test-database', async (req, res) => {
  try {
    let item = {
      userId: '1321321',
      contactId: 'dawdadwad',
    };

    let contact = await contactModel.createNew(item);

    res.send(contact);

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
