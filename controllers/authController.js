import { validationResult } from 'express-validator';

let getLoginRegister = (req, res) => {
    return res.render('auth/master');
};

let postRegister = (req, res) => {
    let errorArr = [];
    let validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach(item => {
            errorArr.push(item.msg);
        });
        console.log(errorArr);
        return;
    }
    console.log(req.body);
};

module.exports = {
    getLoginRegister: getLoginRegister,
    postRegister: postRegister
};
