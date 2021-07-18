var dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
var maleNames = ["Kwasi", "kwado", "kwabena", "kwaku", "yaw", "kofi", "kwame"]
var femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "yaa", "Afua", "Ama"]


//validation

function validateForm() {
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var monthOfBirth = document.getElementById("monthOfBirth").value;
    var yearOfBirth = document.getElementById("yearOfBirth").value;
    var gender = document.getElementsByName("gender").value;



    var dateOfBirth = document.userForm.dateOfBirth.value;
    var monthOfBirth = document.userForm.monthOfBirth.value;
    var yearOfBirth = document.userForm.yearOfBirth.value;
    var gender = document.userForm.gender.value;


    if (dateOfBirth === " " || dateOfBirth < 0 || dateOfBirth > 31) {
        alert("invalid date confirm once more");
        return false;
    } else if (monthOfBirth === " " || monthOfBirth < 0 || monthOfBirth > 31) {
        alert("invalid month input confirm once more");
        return false;
    } else if (yearOfBirth === " " || yearOfBirth < 1900 || yearOfBirth > 2100) {
        alert("invalid year input please confirm once more");
        return false;
    } else if (gender[0].checked === false && gender[1].checked === false) {
        alert("you did not input your gender");
        return false;
    } else {
        alert("your data is valid now Click submit to generate your Akan name");
        return true;
    }
}

//end of validation

//formula for finding day of the week 

function formulaDay() {
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var monthOfBirth = document.getElementById("monthOfBirth").value;
    var yearOfBirth = document.getElementById("yearOfBirth").value;


    let CC = parseInt(yearOfBirth.slice(0, 2));
    let YY = parseInt(yearOfBirth.slice(2));
    let MM = parseInt(monthOfBirth);
    let DD = parseInt(dateOfBirth);

    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    console.log(d);
    return (Math.floor(d))
}
//finding akan name
function findGender() {
    var gender = document.getElementsByName("gender");

    if (gender[0].checked === true) {
        var gender = "male"
    } else if (gender[1].checked === true) {
        var gender = "female"
    }
    switch (gender) {
        case "femaleNames":
            if (formulaDay === 0) {
                alert("Your Akan name is " + femaleNames[0]);
            } else if (formulaDay === 1) {
                alert("Your Akan name is " + femaleNames[1]);
            } else if (formulaDay === 2) {
                alert("Your Akan name is " + femaleNames[2]);
            } else if (formulaDay === 3) {
                alert("Your Akan name is " + femaleNames[3]);
            } else if (formulaDay === 4) {
                alert("Your Akan name is " + femaleNames[4]);
            } else if (formulaDay === 5) {
                alert("Your Akan name is " + femaleNames[5]);
            } else if (formulaDay === 6) {
                alert("Your Akan name is " + femaleNames[6]);
            } else {
                alert("invalid");
            }
            break;
        case "maleNames":
            if (formulaDay === 0) {
                alert("Your Akan name is " + maleNames[0]);
            } else if (formulaDay === 1) {
                alert("Your Akan name is " + aleNames[1]);
            } else if (formulaDay === 2) {
                alert("Your Akan name is " + maleNames[2]);
            } else if (formulaDay === 3) {
                alert("Your Akan name is " + maleNames[3]);
            } else if (formulaDay === 4) {
                alert("Your Akan name is " + maleNames[4]);
            } else if (formulaDay === 5) {
                alert("Your Akan name is " + maleNames[5]);
            } else if (formulaDay === 6) {
                alert("Your Akan name is " + maleNames[6]);
            } else {
                alert("invalid");
            }
            break;
    }
}