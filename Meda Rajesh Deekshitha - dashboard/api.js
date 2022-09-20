$(document).ready(function(){
    $('#delete-account').on('click',function()
    {
        deleteAccount()
    });

    $('#view-account').on('click',function()
    {
        getDetails()
    })
    $('#get-all').on('click',function()
    {
        getAllDetails()
    })
    $('#update-empName').on('click',function()
    {
        updateEmpName()
    })
    $('#addBtn').on('click',function()
    {
        addEmpName()
    })

function deleteAccount(){
    var empid = document.getElementById("deleteAccountNumber").value;
    console.log(empid);
    $.ajax({
        type:'DELETE',
        url:'http://localhost:8080/payrollServices/webresources/payroll/delete/'+empid,
        success:alert("employee deleted"+empid)
    });
}
function  getAllDetails(){
    var $Employee =$('#empdetails');
    $.ajax({
        type: 'get',
        url:'http://localhost:8080/payrollServices/webresources/payroll/details',
        success:function(Employee){
            console.log(Employee);
            $.each(Employee.payroll,function(i,payroll){
                $Employee.append('<li>payroll: empid :'+payroll.empid+',  Employee Name :'+payroll.empolyeeName+',  Designation : '+payroll.designation+',  Salary :'+payroll.salary+'</li>')
            });
        },
        error:function(){
            alert('error');
        }
    });
}
function getDetails(){
    var $banks = $('#bankdetail');
    var accountNumber =  document.getElementById("getAccountNumber").value;
    console.log(accountNumber);
     $.ajax({
            type: 'get',
            url : 'http://localhost:8080/payrollServices/webresources/payroll/info/'+accountNumber,
            success: function(data){
            $.each(data,function(i, payRoll){
            $banks.append('<li>payroll: empid :'+payRoll.empid+',  Employee Name :'+payRoll.empolyeeName+',  Designation : '+payRoll.designation+',  Salary :'+payRoll.salary+'</li>')
     });
        },
            error: function(){
                alert("Error Loading Detail")

            }
    });
}
function  updateEmpName(){
   var $emp = $("updateDetails");
   var empid = document.getElementById("getEmpid").value;
   console.log(empid);
   $ajax({
        type: 'get',
        url:'',
        contentType: 'application/json; charset=UTF-8',
   })

    
}
function addEmpName(){
    var emp ={};
    emp.empid=$('#empid').val();
    emp.empolyeeName=$('#empname').val();
    emp.designation=$('#desc').val();
    emp.salary=$('#sal').val();
    var empObj = JSON.stringify(emp);
    $.ajax({
        url:"http://localhost:8080/payrollServices/webresources/payroll/insert",
        type: 'POST',
        data: empObj,
        contentType: 'application/json; charset=UTF-8',
        success:function(){
            alert("added succesfully")
        },
        error:function(){
            alert("error")
        }

    });

}
});