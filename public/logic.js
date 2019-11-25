$(document).ready(function () {

    $(".note").on("click", function () {
        event.preventDefault();
        var id = $(this).attr("id");

        $.getJSON("/article/" + id, function (data) {
            if (data.note) {
                $("#noteModal-" + id).find("textarea").text(data.note.body);
            }
            $("#noteModal-" + id).modal("show");
        });
    });

    // End of jQuery
})