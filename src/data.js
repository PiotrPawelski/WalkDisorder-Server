'use strict';

const data = require('./schema');

exports.setData = (date, x, y, z)  => 

	new Promise((resolve,reject) => {

		const newData = new data({

			date: date,
			x: x,
			y: y,
			z: z
		});
		
		
		newData.save()
		.then(() => resolve({ status: 200, message: 'Data Saved!' }))
		.catch(err => reject({ status: 500, message: 'Internal Server Error !' }))

	});