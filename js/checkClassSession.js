//alert("checkClassSession");
$.ajaxSetup({
    xhrFields: {
        //允许带上凭据
        withCredentials: true
    },
    crossDomain: true,
});
var classInfo = null;

    $.ajax({
        url: "http://localhost:8880/login/checkClassSession",
        dataType:"text",
        success:function(result){
            if(result == "") {
                window.location="SignInUp.html";
            }
            else {

                classInfo = $.parseJSON(result);
                $("#classInfo").text(classInfo.name+"已登陆");
            }
        },
        error:function (e) {
            alert("错误");
        }

    });
