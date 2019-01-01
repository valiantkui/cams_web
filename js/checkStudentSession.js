//alert("checkClassSession");
$.ajaxSetup({
    xhrFields: {
        //允许带上凭据
        withCredentials: true
    },
    crossDomain: true,
});
var studentInfo = null;

    $.ajax({
        url: "http://localhost:8880/login/checkStudentSession",
        dataType:"text",
        async: false,
        success:function(result){
            if(result == "") {
                window.location="SignIn.html";
            }
            else {

                studentInfo = $.parseJSON(result);
                $("#studentInfo").text(studentInfo.name+"已登陆");
            }
        },
        error:function (e) {
            window.location="SignIn.html";
        }

    });
