"use strict";
exports.__esModule = true;
var userIdAutoIncrementNumber = 1000;
var UserDetails = /** @class */ (function () {
    function UserDetails(paraName, paraAge, paraMobileNumber) {
        userIdAutoIncrementNumber++;
        this.userName = paraName;
        this.userAge = paraAge;
        this.mobilenumber = paraMobileNumber;
        this.userId = "U" + (userIdAutoIncrementNumber).toString();
    }
    return UserDetails;
}());
var User1 = new UserDetails("Kabilan", 22, 9876543210);
var User = Array();
User.push(new UserDetails("Kabilan", 22, 9876543210));
User.push(new UserDetails("Praveen", 20, 9012345678));
User.push(new UserDetails("Jayahari", 25, 9753102468));
var CourseDetails = /** @class */ (function () {
    function CourseDetails(paraName) {
        this.autoIncrementNumber = 1000;
        this.autoIncrementNumber++;
        this.courseName = paraName;
        this.courseId = "SF" + (this.autoIncrementNumber).toString();
    }
    return CourseDetails;
}());
var Course = Array();
var courses = document.getElementById("availablecourses").value;
for (var i = 0; i < courses.length; i++) {
    Course.push(new CourseDetails(courses[i]));
}
function NewUser() {
    document.getElementById("maindiv").style.display = "none";
    document.getElementById("registrationdiv").style.display = "block";
}
function ExistingUser() {
    document.getElementById("maindiv").style.display = "none";
    document.getElementById("logindiv").style.display = "block";
}
function Register() {
    var name = document.getElementById("namebox").value;
    var userNameChecked = checkUserName(name);
    var age = parseInt(document.getElementById("namebox").value);
    var userAgeChecked = checkUserAge(age);
    var mobileNumber = parseInt(document.getElementById("namebox").value);
    var userMobileNUmber;
    if (userNameChecked == true && userAgeChecked)
        User.push(new UserDetails(name, age, mobileNumber));
    document.getElementById("maindiv").style.display = "block";
    document.getElementById("registrationdiv").style.display = "none";
}
function Login() {
    var userId = document.getElementById("useridbox").value;
    for (var i = 0; i < User.length; i++) {
        if (userId == User[i].userId) {
            document.getElementById("logindiv").style.display = "none";
            document.getElementById("userhomediv").style.display = "block";
        }
        else {
            alert("Invalid User Id");
            document.getElementById("maindiv").style.display = "block";
            document.getElementById("logindiv").style.display = "none";
            return;
        }
    }
}
function AvailableCourses() {
    var courses = document.getElementById("availablecourses").value;
    for (var i = 0; i < courses.length; i++) {
        if (courses[i] == Course[i].courseName) {
            document.getElementById("numberofdaysbox").style.display = "block";
            document.getElementById("enrollbutton").style.display = "block";
        }
    }
}
function Enroll() {
    var availablecourses = document.getElementById("availablecourses").value;
    var enrolledcourses = document.getElementById("availablecourses").value;
    for (var i = 0; i < courses.length; i++) {
        if (availablecourses[i] == Course[i].courseName) {
            User[i].courseId.push(Course[i].courseName);
            var count = document.getElementById("numberofdaysbox").value;
            Course[i].count = parseInt(count);
            enrolledcourses = Course[i].courseName;
        }
    }
    document.getElementById("numberofdaysbox").style.display = "none";
    document.getElementById("enrollbutton").style.display = "none";
}
function checkUserName(name) {
    var regexname = / /;
    if (regexname.test(name)) {
        return true;
    }
    else {
        return false;
    }
}
function checkUserAge(age) {
    var regexage = / /;
    if (regexage.test((age).toString())) {
        return true;
    }
    else {
        return false;
    }
}
function checkMobileNumber(mobilenumber) {
    var regexmobilenumber = / /;
    if (regexmobilenumber.test((mobilenumber).toString())) {
        return true;
    }
    else {
        return false;
    }
}
