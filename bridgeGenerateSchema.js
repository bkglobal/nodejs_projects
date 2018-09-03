var csv = require('fast-csv');
var mongoose = require('mongoose');
var Author = require('./author');


module.exports.generateSchemaString_add_in_db = function(data, callback){

    //RESULT IS JSON VARIABLE FOR CREATING THE SCHEMA..
    //SCHEMA LIKE.. 
    //'id': {
    //     type: Number
    // },
    // 'keyword': {
    //     type: String
    // }

    result = {};         
    
    //INSERTING JSON VALUES TO RESULT VARIABLE...
    for (let index in data[0]) {
            value = index.toLowerCase();
            if(value.includes('date') || value.includes('time'))
            {
                result[index] ={ type : 'Date' };
            }
            else
            {
                result[index] ={ type :  typeof data[0][index] };
            }       
    }
    
    //FOR CONSOLE VERIFICATION
    console.log(result);


    return Author.generateSchema_add_in_db(result,data , (res)=>{
        callback(true);
    });
}