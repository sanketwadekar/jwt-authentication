# Authentication using JWT and password hashing using bcrypt

## Routes

**POST** /auth/register
 
 Request body : {
   "username":"$username",
   "password: "$password"
 }

**POST** /auth/login
 
 Request body : {
   "username":"$username",
   "password: "$password"
 }

 **GET** /quiz/questions

 **POST** /quiz/result

 Request body {
   "$questionid1": "$choice1",
   "$questionid2": "$choice2",
   "$questionid3": "$choice3",
   "$questionid4": "$choice4",
   "$questionid5": "$choice5",
   ....,
   "$questionidn": "$choicen",
 }

 Response body {
  "score": $score
 }