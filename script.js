$(".submit").click(function(){
    var username=$(".name").val();
    //declaring the variable username and giving it the value of the input id"name"// 
    var userage=parseInt($(".age").val());
    //declaring the variable userage and giving it the value of the input id"age"//
    var usermoney=parseInt($(".money").val());
    //declaring the variable userage and giving it the value of the input id "money"//
    var userold=userage+60;
    //declaring the variable userold and making it equal to userage and adding 60 to it//
    var userdollar=usermoney*3120;
    //declaring the variable userdollar and making it eqaul to usermoney and multiplying it by 3120//
    $(".change").text("By the year 2079 "+username+" you will be "+userold+" years old and have spent "+userdollar+" dollars");
    //Once the user puts all the information this code will change the text to say that by the year 2079 so and so will be something years old and will have spent a number of dollars//
    console.log(username, userage,usermoney,userold,userdollar);
});