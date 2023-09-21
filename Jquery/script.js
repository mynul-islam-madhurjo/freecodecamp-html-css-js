//JS
// document.getElementById("test").onclick = function(){
//     alert("test");
// }

// jQuery

// Ready function helps to load jQuery after document is loaded
$(document).ready(function(){
    $('#test').click(function (){
        // alert("test");
        $(this).hide();
        $('p.header-text').show();
    });

    $('p.header-text').click(function (){
        // alert("test");
        $(this).hide();
    });
});
