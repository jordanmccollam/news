$(document).ready(function() {

    $(".note").on("click", function() {
        event.preventDefault();
        var id = $(this).attr("id");
        $("#noteModal-" + id).modal("show");
    })

// End of jQuery
})