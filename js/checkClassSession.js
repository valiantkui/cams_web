//alert("checkClassSession");

var classInfo = null;

    $.ajax({
        url: "http://localhost:8880/login/checkClassSession",
        dataType:"text",
        success:function(result){
            if(result == "") window.location="SignInUp.html";
            else {

                classInfo = $.parseJSON(result);
                $("#classInfo").text(classInfo.name+"已登陆");
            }
        },
        error:function (e) {
            alert("错误");
        }

    });
