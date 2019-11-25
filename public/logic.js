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

        var deleteBtn = $("#noteModal-" + id).find("button.delete");
        $(deleteBtn).on("click", function() {
            event.preventDefault();
            $.get("/delete/" + id);
            window.location.reload();
        });
    });

    // End of jQuery
})