  // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });
const con = require('../db/connect');
const validator = require('validator');
exports.registerCustomer = async(req,res,next)=>{
    const {name,email,phoneNo} = req.body;
    if(validator.isEmail(email)&&validator.isMobilePhone(phoneNo)){
        var sql = `INSERT INTO user (name, phoneNo,email) VALUES ('${name}', '${phoneNo}','${email}')`;
        con.query(sql, function (err, result) {
        if (err) throw err;
        });
        res.status(201).json({
            success:true,
            name,email,phoneNo
        })
    }
    if(!(validator.isEmail(email)&&validator.isMobilePhone(phoneNo))){
        res.status(400).json({
            success:false
        })
    }   
}
exports.deleteCustomer = async(req,res,next)=>{
    const email = req.body.email;
    var sql = `DELETE FROM user WHERE email = '${email}'`;
    con.query(sql, function (err, result) {
        if (err){
            res.status(404).json({
                success:false
            })
        } ;
        res.status(200).json({
            success:true,
            "Number of records deleted":result.affectedRows
        })
    });
}
exports.searchCustomer = async(req,res,next)=>{
        const email = req.body.email;
        var sql = `SELECT * FROM user WHERE email = '${email}'`;
        con.query(sql,function (err, result) {
            if (err) {
                res.json({
                    success:false,
                    message:"Customer not found"
                }).status(200);
            }
            res.json({
                result
            }).status(200)
        });
}
exports.getAllCustomer = async(req,res,next)=>{
    const email = req.body.email;
        var sql = `SELECT * FROM user ORDER BY posted_date`;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.status(200).json({
                result
            })
        });
}
