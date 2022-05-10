const {createPool} = require('mysql');

const pool=createPool({
    host:'localhost',
    user:'root',
    password:'malav2001',
    database:'bank_management',
});


pool.getConnection((err) => {
    if(err) {
        console.log('Error connecting to db...');
        console.log(err);
    }
    else {
        console.log('Connected to db...');
    }
});


const executeQuery = (query,arraParms) => {
    return new Promise((resolve,reject) => {
        try {
            pool.query(query,arraParms,(err, data) => {
                if (err) {
                    console.log('error in executing the query');
                    reject(err);
                }
                else {    
                    resolve(data);
                }
            });
        } catch(err) {
            reject(err);
        }
    });
};

module.exports = { executeQuery };