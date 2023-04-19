$(document).ready(function () {
  CurrentEmployee = JSON.parse(sessionStorage.getItem("Employee"));
  document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';

  let api = "https://proj.ruppin.ac.il/cgroup42/prod/api/ProductionReport";
  ajaxCall("GET", api, "", GETS, Err);

  //StudentForm is the id of the form
  $("#Form_container").submit(function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    //== document.getElementById('XX')value;
    let empNum = CurrentEmployee.empNum;
    let reportDate = $("#date-field").val();
    let reportTime = $("#hour-field").val();
    let machineNum = parseInt($("#machine-field").val());
    let materialNum = parseInt($("#raw-material-field").val());
    let amountRep = parseInt($("#amount-field").val());

    //
    let PReport = {};

    PReport.empNum = empNum;
    PReport.reportDate = reportDate;
    PReport.reportTime = reportTime;
    PReport.machineNum = machineNum;
    PReport.materialNum = materialNum;
    PReport.amountRep = amountRep;

    //swagger
    let api = "https://proj.ruppin.ac.il/cgroup42/prod/api/ProductionReport";
    ajaxCall("POST", api, JSON.stringify(PReport), Suc, Err);

    return false;
  });
});

function Suc(suc) {
  alert("הוספת דיווח על ייצור עברה בהצלחה");
  location.assign("../CLIENT/ProdRepPage.html");
}

//Error
function Err(err) {
  alert("משהו השתבש, בבקשה נסה שוב");
  console.log(err);
}

function GETS(PRarr) {
  RanderReports(PRarr);
}

function RanderReports(PRarr) {
  let str = '<table id="PRtable">';
  str += '<tr id="trHeader">';
  str += "<td>כמות (בטון)</td>";
  str += "<td>חומר גלם</td>";
  str += "<td>מספר מכונת ייצור</td>";
  str += "<td>שעה</td>";
  str += "<td>תאריך</td>";
  str += "<td>מספר עובד</td>";
  str += "<td>מספר דיווח ייצור</td>";
  str += "</tr>";

  PRarr.forEach((PR) => {
    str += "<tr>";
    str += `<td>${PR.amountRep}</td>`;
    str += `<td>${PR.materialNum}</td>`;
    str += `<td>${PR.machineNum}</td>`;
    str += `<td>${PR.reportTime.replace(":00", "")}</td>`;
    str += `<td>${PR.reportDate.replace("T00:00:00", "")}</td>`;
    str += `<td>${PR.empNum}</td>`;
    str += `<td>${PR.reportNum}</td>`;
    str += "</tr>";
  });
  str += "</table>";
  document.getElementById("reportTB").innerHTML = str;
}
//document.addEventListener("DOMContentLoaded", () => {
// Get form elements
//  const dateField = document.getElementById("date-field");
// const hourField = document.getElementById("hour-field");
// const machineField = document.getElementById("machine-field");
// const rawMaterialField = document.getElementById("raw-material-field");
// const amountField = document.getElementById("amount-field");
// const form = document.getElementById("my-form");

// Disable selecting future dates and times
// dateField.setAttribute("max", formatDate(new Date()));
//hourField.addEventListener("change", () => {
//  const now = new Date();
//   const selectedTime = new Date(`${dateField.value}T${hourField.value}`);
//  if (selectedTime > now) {
//    hourField.value = "";
//     alert("You have selected a future time.");
//   }
// });

// Handle form submission
// form.addEventListener("submit", (event) => {
//  event.preventDefault();
//  const now = new Date();
//  const selectedTime = new Date(`${dateField.value}T${hourField.value}`);
//  if (selectedTime > now) {
//    alert("You have selected a future time.");
//    return;
//  }
///  if (rawMaterialField.value === "" || amountField.value === "") {
//     alert("Please fill in all fields.");
//     return;
//   }
//   form.submit();
// });

// function formatDate(date) {
//   var year = date.getFullYear();
//   var month = date.getMonth() + 1;
// /  var day = date.getDate();
///   if (month < 10) month = "0" + month;
//   if (day < 10) day = "0" + day;
//   return year + "-" + month + "-" + day;
// }

// Utility function to format date as yyyy-mm-dd
// function formatDate(date) {
//  const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//  const day = String(date.getDate()).padStart(2, "0");
//  return `${year}-${month}-${day}`;
// }
//});
