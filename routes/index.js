
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'CHIME LAB SIMULATION' , link: req.param('type')});
};