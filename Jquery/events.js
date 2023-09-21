$('document').ready(function(){

    $('#p1').click(function () { 
        $(this).hide();
    });

    $('#p2').hover(function () {
        $(this).hide();
        }, function () {
        $(this).show();
        }
    );
    $('#p3').dblclick(function (e) { 
        $(this).hide();
    });
});