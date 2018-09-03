var csv = require('fast-csv');
var mongoose = require('mongoose');
var Author = require('./author');
var schema = require('./bridgeGenerateSchema');

exports.post = function (req, res) {
	
	if (!req.files)
		return res.status(400).send('No files were uploaded.');
	
	var authorFile = req.files.file;

	var authors = [];
		
	csv.fromString(authorFile.data.toString(), {
		 headers: true,
		 ignoreEmpty: true
	 })
	 .on("data", function(data){
		
		//var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
    	//var reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;
		
			//var a = reISO.exec(data.date);
				//var d = data.date;
				//var result1= d.split("/");
				//console.log(result1);
            // if (a)
            //     console.log(new Date(data.date));
            // a = reMsAjax.exec(data.date);
            // if (a) {
            //     var b = a[1].split(/[-+,.]/);
            //     console.log(new Date(b[0] ? +b[0] : 0 - +b[1]));
            // }
        
		//console.log(typeof (new Date(data.date)));
		
		//PUSHING THE DATA IN ARRAY ONE BY ONE ==============================
		authors.push(data);

	 })
	 .on("end", function(){

		console.log('ok');

		schema.generateSchemaString_add_in_db(authors, (result)=>{
			if(result== true)
			{
				res.send(authors.length + ' ROWS have been successfully uploaded.');
			}
		
		}); 



		
	 });
};










//.CREATE FUNCTION INSERT OR SAVE THE DATA IN TO DATABSE AFTER VALIDATING THE SCHEMA
		//  Author.create(authors, function(err, documents) {
		// 	if (err) throw err;
			
		// 	res.send(authors.length + ' authors have been successfully uploaded.');
		//  });

//  data['_id'] = new mongoose.Types.ObjectId();
		// console.log(data)
									//var arr = data.cdrsCode.split('.');
		// console.log(arr);
		// console.log((arr[1] == undefined || arr[1] == null || arr[1] == "") ?  arr[0] : arr[0] + '.' + arr[1])
		// data['cdrsCode'] = (arr[1] == undefined || arr[1] == null || arr[1] == "") ?  arr[0] : arr[0] + '.' + arr[1];
		// var dcr = "";
		// for(var i = 2; i < arr.length; i++){
		// 	dcr = dcr + arr[i] + ""
		// }
		// data['description'] = dcr;

 		//console.log(Object.keys(data).length);
		// for(let key in data)
		// {
		// 	console.log(key);
		// }



		
								// for (let index in authors[0]) {
								// 	console.log(index);
								// }
		// console.log(authors)
		// for (var index in authors){
		// 		 console.log("Key is " + index + ", value is" + authors[index]);
			
		// }
		//console.log(authors[1][1]);
		// for(let author in authors) // { id: '1', keyword: 'GM Diet', message: '' },
		// {	
			// for(let key in author) 
			// {
			// 	console.log(key);
			// }
			//console.log();
		// }