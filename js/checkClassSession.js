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
            //alert(result);
           classInfo = $.parseJSON(result);
            $("#classInfo").text(classInfo.name+"已登陆");
           /*alert(classInfo.name);
           alert(classInfo.school);*/
        },
        error:function (e) {
            alert("错误");
        }

    });
