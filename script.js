
function submitForm() {
    let firstname = document.getElementById('fname').value;
    let lastname = document.getElementById('lname').value;
    let userEmail = document.getElementById('email').value;
    let contractReason = document.getElementById('reason').value;

    if((firstname != "") && (lastname != "") && (userEmail != "") && (contractReason != "")) {
        alert("Form submitted successfully!");
    }
}