var mongoose = require('mongoose');

//CREATED GLOBAL VARIABLES
var Author, authorSchema;

module.exports.generateSchema_add_in_db = function(res,data, callback){
	
	//INSTANTIATE THE SCHEMA AS NULL
	authorSchema = mongoose.Schema({});
	
	//CREATED ACTUAL SCHEMA .. THE VALUE IS PASSED FROM ---- bridgeGenerateSchema.js
	authorSchema = mongoose.Schema(res);
	Author	= mongoose.model('myDietPlan', authorSchema);
	
	//INSERT THE RECORD IN COLLECTION myDietPlan
	Author.insertMany(data);
	
	//RETURN TRUE.. YOU MAY PUT MORE THAN ONE ARGUMENTS TO PASS.. E.G callback(arg1,arg2,arg3....)
	callback(true);

	//DELETE THE CURRENT MODEL .. IN ORDER TO AVOID OVERRIDING THE MODEL
	delete mongoose.connection.models['myDietPlan'];
}







loadSchema = (req,callback)=>{
	
	
	authorSchema = mongoose.Schema({

		'id': {
			type: Number
		},
		'keyword': {
			type: String
		}
	});
	callback(true);


}



//module.exports = Author;











// loadSchema(data,(d)=>{
	//    if(d == true)
	//    {
	// 	   console.log(data);
	// 		
			
	//    }
	//    else
	//    {
	// 	   console.log('Schema is not created');
	//    }
	// })





// _id: mongoose.Schema.Types.ObjectId,
				// date: {
				// 	type: Date
				// },
				// cdrsCode: {
				// 	type: String
				// },
				// cdrsCount: {
				// 	type: Number
				// },
	// description: {
	// 	type: String
	// },
				// bankName: {
				// 	type: String
				// },
				// type: {
				// 	type: String,
				// },
				// timestamp: {
				// 	type: Date, default: Date.now
				// }
    // name: {
	// 	firstName: {
	// 		type: String,
	// 		required: true
	// 	},
	// 	lastName: String
	// },
	// biography: String,
	// twitter: {
	// 	type: String,
	// 	validate: {
	// 		validator: function(text) {
	// 			if (text !== null && text.length > 0)
	// 				return text.indexOf('https://twitter.com/') === 0;
				
	// 			return true;
	// 		},
	// 		message: 'Twitter handle must start with https://twitter.com/'
	// 	}
	// },
	// facebook: {
	// 	type: String,
	// 	validate: {
	// 		validator: function(text) {
	// 			if (text !== null && text.length > 0)
	// 				return text.indexOf('https://www.facebook.com/') === 0;
				
	// 			return true;
	// 		},
	// 		message: 'Facebook Page must start with https://www.facebook.com/'
	// 	}
	// },
	// linkedin: {
	// 	type: String,
	// 	validate: {
	// 		validator: function(text) {
	// 			if (text !== null && text.length > 0)
	// 				return text.indexOf('https://www.linkedin.com/') === 0;
				
	// 			return true;
	// 		},
	// 		message: 'LinkedIn must start with https://www.linkedin.com/'
	// 	}
	// },
	// profilePicture: Buffer,
	// created: { 
	// 	type: Date,
	// 	default: Date.now
	// }