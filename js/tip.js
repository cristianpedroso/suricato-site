/**
 * Created by matheusmorett on 29/04/17.
 */

// Tip Form Scripts
$(function() {
    
    $('document').ready(function () {
        // this is the id of the form
        $("#tipForm").submit(function(e) {

            var url = "tips"; // the script where you handle the form input.

            $.ajax({
                type: "POST",
                url: url,
                data: {
                    name: $("#name").val(),
                    email : $("#email").val(),
                    tip : $("#tip").val(),
                    tipTitle : $("#tipTitle").val(),
                    tags : $("#tags").val(),
                } ,
                success: function(data)
                {
                    $("#name").val('');
                    $("#email").val('');
                    $("#tip").val('');
                    $("#tipTitle").val('');
                    $("#tags").val('');
                    $.growl.notice({ message: "The kitten is cute!" });

                }
            });

            e.preventDefault(); // avoid to execute the actual submit of the form.
        });
    })

});
