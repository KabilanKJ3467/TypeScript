export{}

let userIdAutoIncrementNumber :number =1000;
class UserDetails
{
    
    userName:string;
    userAge:number;
    mobilenumber:number;
    userId:string;
    courseId:string[];
    constructor(paraName:string , paraAge:number, paraMobileNumber:number)
    {
      userIdAutoIncrementNumber++;
      this.userName=paraName;
      this.userAge=paraAge;
      this.mobilenumber=paraMobileNumber;
      this.userId =  "U"+(userIdAutoIncrementNumber).toString();

    }
}
let User1 : UserDetails= new UserDetails("Kabilan",22,9876543210);
 let User : Array<UserDetails>=Array<UserDetails>();
 User.push(new UserDetails("Kabilan",22,9876543210));
 User.push(new UserDetails("Praveen",20,9012345678));
 User.push(new UserDetails("Jayahari",25,9753102468));

 class CourseDetails
{
    autoIncrementNumber :number =1000;
    courseName:string;
    courseId:string;
    count:number;
    constructor(paraName:string )
    {
      this.autoIncrementNumber++;
      this.courseName=paraName;
      this.courseId=  "SF"+(this.autoIncrementNumber).toString();
    }
}

 let Course : Array<CourseDetails>=Array<CourseDetails>();
 var courses=(document.getElementById("availablecourses") as HTMLSelectElement).value;

 for(let i:number =0;i<courses.length;i++)
 {
    Course.push(new CourseDetails(courses[i]));
 }

function NewUser()
{ 
    (document.getElementById("maindiv") as HTMLElement ).style.display="none";
    (document.getElementById("registrationdiv") as HTMLElement ).style.display="block";

  }
function ExistingUser()
{
    (document.getElementById("maindiv") as HTMLElement ).style.display="none";
    (document.getElementById("logindiv") as HTMLElement ).style.display="block";

}
function Register()
{ 
    var name= (document.getElementById("namebox") as HTMLInputElement).value;
     var userNameChecked = checkUserName(name);
    var age= parseInt((document.getElementById("namebox") as HTMLInputElement).value);
    var userAgeChecked= checkUserAge(age);
    var mobileNumber= parseInt((document.getElementById("namebox") as HTMLInputElement).value);
    var userMobileNumberChecked= checkMobileNumber(mobileNumber);

    if(userNameChecked==true && userAgeChecked==true && userMobileNumberChecked==true)
    {
        User.push(new UserDetails(name,age,mobileNumber));
        (document.getElementById("maindiv") as HTMLElement ).style.display="block";
        (document.getElementById("registrationdiv") as HTMLElement ).style.display="none";
    }
    
}

function Login()
{
    

    var userId= (document.getElementById("useridbox") as HTMLInputElement).value;
    for(let i:number=0 ;i<User.length;i++)
    {
        if(userId==User[i].userId)
        {
            (document.getElementById("logindiv") as HTMLElement ).style.display="none";
            (document.getElementById("userhomediv") as HTMLElement ).style.display="block";
        }
        else{
            alert("Invalid User Id");
            (document.getElementById("maindiv") as HTMLElement ).style.display="block";
            (document.getElementById("logindiv") as HTMLElement ).style.display="none";
            return
        }
    }

   
}

function AvailableCourses()
{
    var courses=(document.getElementById("availablecourses") as HTMLSelectElement).value;

    for(let i:number =0;i<courses.length;i++)
    {
               
          if(courses[i]==Course[i].courseName)
          {
             (document.getElementById("numberofdaysbox") as HTMLElement ).style.display="block";
            (document.getElementById("enrollbutton") as HTMLElement ).style.display="block";
                
            
          }
         
    }
    

}

function Enroll()
{
    var availablecourses=(document.getElementById("availablecourses") as HTMLSelectElement).value;
    var enrolledcourses=(document.getElementById("availablecourses") as HTMLInputElement).value;

    for(let i:number =0;i<courses.length;i++)
    {
               
          if(availablecourses[i]==Course[i].courseName)
          {
           User[i].courseId.push(Course[i].courseName);
           let  count= (document.getElementById("numberofdaysbox") as HTMLInputElement ).value;
           Course[i].count=parseInt(count);
           enrolledcourses=Course[i].courseName;
          }
         
    }
    

    (document.getElementById("numberofdaysbox") as HTMLElement ).style.display="none";
    (document.getElementById("enrollbutton") as HTMLElement ).style.display="none";

}

function checkUserName( name:string)
{
 var regexname=/ /;
 if (regexname.test(name))
 {
    
    return true;
 }
 else
{
    return false;
}

}

function checkUserAge( age:number)
{
 var regexage=/ /;
 if ( regexage.test((age).toString()))
 {
    
    return true;
 }
 else
{
    return false;
}

}

function checkMobileNumber( mobilenumber:number)
{
 var regexmobilenumber=/ /;
 if ( regexmobilenumber.test((mobilenumber).toString()))
 {
    
    return true;
 }
 else
{
    return false;
}

}






