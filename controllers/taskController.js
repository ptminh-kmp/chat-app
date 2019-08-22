import queryExecute from '../config/connectMSSQL';

let getTask = async (req, res) => {
    try {
    	const result = await queryExecute('select * from vB30CongViecPTSPOther WHERE Ngay_Ht IS NULL order by Ngay_Ps DESC');
        
    	return res.render('task/home', {
            errors: req.flash('errors'),
            success: req.flash('success'),
            user: req.user,
            result: result
        });
    } catch (err) {
        console.log('SQL error', err);
        return;
    } 
};

module.exports = {
    getTask: getTask,
};
