'use strict';

const data = require('./data');

module.exports = router => {

	
	router.post('/', (req, res) => {

		const date = req.body.date;
		const x = req.body.x;
		const y = req.body.y;
		const z = req.body.z;

		if (!date || !z || !y || !z ){ // || !date.trim() || !x.trim() || !y.trim() || !z.trim()) {

			res.status(400).json({message: 'Invalid Request !'});

		} else {

			data.setData(date, z, y, z)

			.then(result => {

				res.setHeader('Location', '/users/'+date);
				res.status(200/*result.status*/).json({ message: result.message })
			})

			.catch(err => res.status(500/*err.status*/).json({ message: err.message }));
		}
	});

	
}