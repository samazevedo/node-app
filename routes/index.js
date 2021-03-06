const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('form', { title: 'Registration form' });
});
router.post('/',
    [
        body('name')
            .isLength({ min: 1 })
            .withMessage('Please enter a name'),
        body('email')
            .isLength({ min: 1 })
            .withMessage('Please enter an valid email'),
    ],
    (req, res) => {
        const errors = validationResult(req);
        //console.log(req.body);

        if (errors.isEmpty()) {
            res.send('Thank you for your registration! ');
        } else {
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                data: req.body,
            });
        }
    });

module.exports = router;