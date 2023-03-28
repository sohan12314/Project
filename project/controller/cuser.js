/*create some function names-userhome,usersignup,userlogin,userlogout,usercontent,usermycontent,userviewall.
  1.pass the path of the model inside require module and save it in a varibale called blog.
  2.write the function for all the above specified names and write a code to perform the particular task.
  3.Create a instant of the router using router variable and use router.method name 
----------------------------------------Home----------------------
  write a call back function for userhome.
  The function has two arguments request and respond.
  Method: GET.
  parameters : signup, login
  ---------------------------------------signup----------------------
  write a Async and await function for usersignup.
  The Async function has two arguments request and respond.
  This includes then and catch to return the response.
  Method : POST.
  In the function the user enters the data for all the entities in the database and stores in mongodb.
  parameters:  Fistname, Lastname, Email,Password, Phone.
  ------------------------------------login--------------------
  write a Async and await function for userlogin
  The Async function has two arguments request and respond.
  This includes then and catch to return the response.
  Method : POST.
  parameters: username ,password.
  In this function there occurs a condition to check wether the username entered exits in the database and if exits entered password
  matches with the actual password.
  If everything goes perfect .then is called as the response and perform the task written inside it,
  If error occurs .catch is called and error will be printed.

  -----------------------------userlogout-----------------------
  write a call back function for userlogut.
  The function has two arguments request and respond.
  Method: GET.
  The response will redirect to home page .*/

