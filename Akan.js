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
    
