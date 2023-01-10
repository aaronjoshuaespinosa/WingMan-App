const express = require('express');
const router = express.Router();

const {
    getFAQs,
    getFAQ,
    createFAQ,
    deleteFAQ,
    updateFAQ
} = require('../controllers/faqController');

const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

//GET all FAQs
router.get('/', getFAQs);

//getting single FAQ
router.get('/:id', getFAQ);

//Creating a FAQ
router.post('/', createFAQ);

//delete a FAQ
router.delete('/:id', deleteFAQ);

//update a FAQ
router.patch('/:id', updateFAQ);

module.exports = router;