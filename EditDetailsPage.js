$(document).ready(function () {
    
    CurrentEmployee=JSON.parse(sessionStorage.getItem('Employee'));
    document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';
    
    document.getElementById("empNumIN").value = CurrentEmployee.empNum;
    document.getElementById("empNumIN").disabled = true;
    document.getElementById("empFirstNameIN").value = CurrentEmployee.empFirstName;
    document.getElementById("empLastNameIN").value = CurrentEmployee.empLastName;
    document.getElementById("empPhoneIN").value = CurrentEmployee.empPhone;
    document.getElementById("empEmailIN").value = CurrentEmployee.empEmail;
    document.getElementById("empPasswordIN").value = CurrentEmployee.empPassword;
    document.getElementById("empRoleNumIN").value = CurrentEmployee.empRoleNum;
    document.getElementById("empStatusIN").value = getValue(CurrentEmployee.empStatus);

    $('#empStatusIN').on('change', function() {
        if ($(this).is(':checked')) {
          $('#myCheckboxStatus').text('פעיל').removeClass('unactive').addClass('active');
        } else {
          $('#myCheckboxStatus').text('לא פעיל').removeClass('active').addClass('unactive');
        }
        return false;
    });

    //StudentForm is the id of the form
    $('#Form_container').submit(function (event) {

        // Prevent the form from submitting normally
        event.preventDefault();

        let empNum = $('#empNumIN').val();
        let empFirstName = $('#empFirstNameIN').val();
        let empLastName = $('#empLastNameIN').val();
        let empPhone = $('#empPhoneIN').val();
        let empEmail = $('#empEmailIN').val();
        let empPassword = $('#empPasswordIN').val();
        let empRoleNum = $('#empRoleNumIN').val();
        let empStatus = $('#empStatusIN').val();
        let empAdmin = CurrentEmployee.empAdmin;


        let EmployeetoUpdate = {
            empNum: empNum,
            empFirstName: empFirstName,
            empLastName: empLastName,
            empPhone: empPhone,
            empEmail: empEmail,
            empPassword: empPassword,
            empRoleNum: empRoleNum,
            empStatus:getValue(empStatus),
            empAdmin: empAdmin
        }
        let apiPUT = `https://localhost:7180/api/Employee/${empNum}`
        ajaxCall('PUT', apiPUT, JSON.stringify(EmployeetoUpdate), PutSCB, Errror)

        return false;
    })
})


function PutSCB() {
    alert('העדכון עבר בהצלחה')
    if(CurrentEmployee.empAdmin == false){
         location.assign('../CLIENT/Employees.html');
    }
    else{
        location.assign('../CLIENT/EmployeeAdmin.html');
    }
   
}

function Errror(err) {
    console.log(err)
    alert('somting wrong please check again! ')
}


function getValue() {
    var checkbox = document.querySelector('input[id="empStatusIN"]');
    if (checkbox.checked) {
      return true;
    } else {
      return false;
    }
 }



//document.addEventListener("DOMContentLoaded", () => {
    // Example script to toggle password visibility
    // Select all edit icons and add click event listener to each
//    var editIcons = document.querySelectorAll(".edit-icon");
//  editIcons.forEach(function (editIcon) {
//        editIcon.addEventListener("click", function () {

            // Get the input field corresponding to the edit icon
//            var inputField = this.previousElementSibling;

            // Enable the input field
 //           inputField.disabled = false;
 //           inputField.focus();


            // Select password input and show password icon
  //          var passwordInput = document.getElementById("password");
 //           var showPasswordIcon = document.querySelector(".show-password");

            // Add click event listener to show password icon
 //           showPasswordIcon.addEventListener("click", function () {
 //               if (passwordInput.type === "password") {
  //                  passwordInput.type = "text";
 //               } else {
  //                  passwordInput.type = "password";
  //              }
   //         });



            /*var field = this.parentElement.querySelector("input, select");
            field.disabled = !field.disabled;
            field.focus();*/
     //   });
   // });
//});


