var dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
var maleNames = ["Kwasi", "kwado", "kwabena", "kwaku", "yaw", "kofi", "kwame"]
var femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "yaa", "Afua", "Ama"]


//validation

function validateForm() {
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var monthOfBirth = document.getElementById("monthOfBirth").value;
    var yearOfBirth = document.getElementById("yearOfBirth").value;
    var gender = document.getElementsByName("gender");

    if (dateOfBirth === " " || dateOfBirth < 0 || dateOfBirth > 31) {
        alert("invalid date confirm once more");
        return false;
    } else if (monthOfBirth === " " || monthOfBirth < 0 || monthOfBirth > 12) {
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

    let CC = yearOfBirth.slice(0, 2);
    let YY = yearOfBirth.slice(2);
    let MM = monthOfBirth;
    let DD = dateOfBirth;
    // console.log("CC "+CC+"YY "+YY+"MM "+MM+"DD "+DD)

    let birthday = yearOfBirth + "-" + monthOfBirth + "-" + dateOfBirth;
    let dayvalue = new Date(birthday);
    console.log(dayvalue);
    let day = dayvalue.getDay()

    /*Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);*/ //<= this formula is not working on my end
    //(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + DD ) % 7)

    //end of fomula

    let genders = document.getElementsByName("gender");

    //console.log(day);


    //find akan name

    if (genders[0].checked === true) {
        var gender = "male"
    } else if (genders[1].checked === true) {
        var gender = "female"
    }
    switch (gender) {
        case "female":
            if (day === 0) {
                alert("Your Akan name is " + femaleNames[0]);
            } else if (day === 1) {
                alert("Your Akan name is " + femaleNames[1]);
            } else if (day === 2) {
                alert("Your Akan name is " + femaleNames[2]);
            } else if (day === 3) {
                alert("Your Akan name is " + femaleNames[3]);
            } else if (day === 4) {
                alert("Your Akan name is " + femaleNames[4]);
            } else if (day === 5) {
                alert("Your Akan name is " + femaleNames[5]);
            } else if (day === 6) {
                alert("Your Akan name is " + femaleNames[6]);
            } else {
                alert("invalid");
            }
            break;
        case "male":
            if (day === 0) {
                alert("Your Akan name is " + maleNames[0]);
            } else if (day === 1) {
                alert("Your Akan name is " + maleNames[1]);
            } else if (day === 2) {
                alert("Your Akan name is " + maleNames[2]);
            } else if (day === 3) {
                alert("Your Akan name is " + maleNames[3]);
            } else if (day === 4) {
                alert("Your Akan name is " + maleNames[4]);
            } else if (day === 5) {
                alert("Your Akan name is " + maleNames[5]);
            } else if (day === 6) {
                alert("Your Akan name is " + maleNames[6]);
            } else {
                alert("invalid");
            }
            break;
            default:
    }
    return Math.floor(day);
    
} 



function getAkanName() {
    let day = formulaDay();
   
    //console.log(day);
    // console.log("about to get akan name");
}
