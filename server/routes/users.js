import express from 'express';
 import Validator from 'validator';
 import isEmpty from 'lodash/isEmpty';
 
 let router = express.Router();
 
 function validateInput(data) {
   let errors = {};
 
   if (Validator.isEmpty(data.firstname)) {
     errors.firstname = 'This field is required';
   }
   
   if (Validator.isEmpty(data.lastname)) {
     errors.lastname = 'This field is required';
   }
   if (Validator.isEmpty(data.phonenumber)) {
     errors.phonenumber = 'This field is required';
   }
   if (Validator.isEmpty(data.email)) {
     errors.email = 'This field is required';
   }
   if (!Validator.isEmail(data.email)) {
     errors.email = 'Email is invalid';
   }
   if (Validator.isEmpty(data.password)) {
     errors.password = 'This field is required';
   }
   if (Validator.isEmpty(data.passwordConfirmation)) {
     errors.passwordConfirmation = 'This field is required';
   }
   if (!Validator.equals(data.password, data.passwordConfirmation)) {
     errors.passwordConfirmation = 'Passwords must match';
   }
   
 
   return {
     errors,
     isValid: isEmpty(errors)
   }
 }
 
 router.post('/', (req, res) => 
 {
	 console.log(req.body);
   const { errors, isValid } = validateInput(req.body);
 
   if (!isValid) {
     res.status(400).json(errors);
   }
 });
 
<<<<<<< HEAD
 export default router;
=======
 export default router;
>>>>>>> origin/master
