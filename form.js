  function validation()
         {
              var user = document.getElementById('user').value;
              var pass = document.getElementById('pass').value;
              var confirmpass = document.getElementById('conpass').value;
              var mobile = document.getElementById('MobileNumber').value;
              var emailID = document.getElementById('email').value;
             


                    if(user =="")
                    {
                       document.getElementById('username').innerHTML ="*Please fill the username field*";
                       return false;
                    }

                   if((user.length <=2) || (user.length > 20))
                      {
                         document.getElementById('username').innerHTML ="*Username length must be between 2 to 20*";
                          return false;
                      }
                   if(!isNaN(user))
                     {
                        document.getElementById('username').innerHTML ="*Only Characters are allowed*";
                        return false;
                     }
              
                   


                    if(pass =="")
                    {
                       document.getElementById('password').innerHTML ="*Please fill the Password field*";
                  return false;
                    }
                    if((pass.length <=5) || (pass.length > 20))
                      {
                         document.getElementById('password').innerHTML ="*Password length must be between 5 to 20*";
                          return false;
                      }
                       if(pass!= confirmpass)
                    {
                       document.getElementById('password').innerHTML ="*Password are not matching*";
                  return false;
                    }
                      

           
                  if(confirmpass =="")
                    {
                       document.getElementById('conpassword').innerHTML ="*Please fill the Confirm Password field*";
                  return false;
                
                   }


                   if(mobile =="")
                    {
                       document.getElementById('mobileno').innerHTML ="*Please fill the Mobile Number field*";
                  return false;
                
                   }
                   if(isNaN(mobile))
                   {
                      document.getElementById('mobileno').innerHTML ="*User must write digits only no charaters*";
                  return false;
                   }
                   if(mobile.length!=10)
                    {
                       document.getElementById('mobileno').innerHTML ="*User should write only 10 digits*";
                  return false;
                   }
                        


                   if(emailID =="")
                    {
                       document.getElementById('emailids').innerHTML ="*Please fill the Email ID field*";
                  return false;
                   }
                   if(email.indexOf('@')<= 0)
                   {                
                      document.getElementById('emailids').innerHTML ="*@ at invalid position*";
                  return false;
                   }
                   if((email.charAt(emails.length-4)!='.')&&  (emails.charAt(emails.length-3)!='.'))
                   {
                       document.getElementById('emailids').innerHTML ="* '.' at invalid position *";
                  return false;
                   }

          }

              /*function show_alert()
                      {
                      alert("Your Information is saved");
                       }*/