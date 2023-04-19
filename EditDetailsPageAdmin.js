$(document).ready(function () {

    CurrentEmployee=JSON.parse(sessionStorage.getItem('Employee'));
    document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';

    let api = "https://localhost:7180/api/Employee";
    ajaxCall("GET", api, "", GETS, Errror);

    $('#empStatusIN').on('change', function() {
        if ($(this).is(':checked')) {
          $('#myCheckboxStatus').text('פעיל').removeClass('unactiveStatus').addClass('activeStatus');
        } else {
          $('#myCheckboxStatus').text('לא פעיל').removeClass('activeStatus').addClass('unactiveStatus');
        }
    });

    $('#empAdminIN').on('change', function() {
        if ($(this).is(':checked')) {
          $('#myCheckboxAdmin').text('אדמין').removeClass('unactiveAdmin').addClass('activeAdmin');
        } else {
          $('#myCheckboxAdmin').text('לא אדמין').removeClass('activeAdmin').addClass('unactiveAdmin');
        }
    });

    //StudentForm is the id of the form
    $('#Form_container').submit(function (event) {

        // Prevent the form from submitting normally
        event.preventDefault();

        let empNum = sessionStorage.getItem("UpdateEmpNum");
        let empFirstName = $('#empFirstNameIN').val();
        let empLastName = $('#empLastNameIN').val();
        let empPhone = $('#empPhoneIN').val();
        let empEmail = $('#empEmailIN').val();
        let empPassword = $('#empPasswordIN').val();
        let empRoleNum = $('#empRoleNumIN').val();
        let empStatus = $('#empStatusIN').val();
        let empAdmin = $('#empAdminIN').val();


        let EmployeetoUpdate = {
            empNum: empNum,
            empFirstName: empFirstName,
            empLastName: empLastName,
            empPhone: empPhone,
            empEmail: empEmail,
            empPassword: empPassword,
            empRoleNum: empRoleNum,
            empStatus:getValueStatus(empStatus),
            empAdmin: getValueAdmin(empAdmin)
        }
        let apiPUT = `https://proj.ruppin.ac.il/cgroup42/prod/api/Employee/${empNum}`
        ajaxCall('PUT', apiPUT, JSON.stringify(EmployeetoUpdate), PutSCB, Errror)

        return false;
    })
})

function GETS(empArr){
    let empNumIN = sessionStorage.getItem("UpdateEmpNum");
   
    empArr.forEach(employee => {
        if (employee.empNum==empNumIN) {      
            document.getElementById("empNumIN").value = employee.empNum;
            document.getElementById("empNumIN").disabled = true;
            document.getElementById("empFirstNameIN").value = employee.empFirstName;
            document.getElementById("empLastNameIN").value = employee.empLastName;
            document.getElementById("empPhoneIN").value = employee.empPhone;
            document.getElementById("empEmailIN").value = employee.empEmail;
            document.getElementById("empPasswordIN").value = employee.empPassword;
            document.getElementById("empRoleNumIN").value = employee.empRoleNum;
            document.getElementById("empStatusIN").value =employee.empStatus;
            document.getElementById("empAdminIN").value = employee.empAdmin;
        }     
    });

}


function PutSCB() {

    alert('העדכון עבר בהצלחה')
    location.assign('../CLIENT/EmployeeAdmin.html');
}

function Errror(err) {
    console.log(err)
    alert('משהו השתבש, בבקשה נסה שוב')
}


function getValueStatus() {
    var checkbox = document.querySelector('input[id="empStatusIN"]');
    if (checkbox.checked) {
      return true;
    } else {
      return false;
    }
 }


 function getValueAdmin() {
    var checkbox = document.querySelector('input[id="empAdminIN"]');
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


