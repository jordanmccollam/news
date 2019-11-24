$(document).ready(function() {

    $(".note").on("click", function() {
        event.preventDefault();
        var id = $(this).attr("id");

        $.post("/article/" + id);
    })

// End of jQuery
})