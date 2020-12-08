$(document).ready(() => {
    // this function handles front end api call when the devour it is selected to set eaten to true
    $(".eat-burg").on("click", function (event) {

        const id = $(this).data("eat");
        $.ajax("/api/burger/uneaten/" + id, {
            type: "PUT"
        }).then(() => {
            location.reload();
        });
    });
    // this function handles front end api call when the eat again another is selected to set eaten to false
    $(".again-burg").on("click", function (event) {
        const id = $(this).data("againid");

        $.ajax("/api/burger/eaten/" + id, {
            type: "PUT"
        }).then(() => {
            location.reload();
        });
    });
    // this function handles front end api call when the digest button is selected to remove the burger from the database
    $(".del-burg").on("click", function (event) {
        const id = $(this).data("delid");

        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(() => {
            location.reload();
        });
    });
        // this function handles front end api call when the add it button is selected to add another burger to the database
    $(".added-burg").on("click", function (event) {
        event.preventDefault();
        const newBurg = {
            name: $("#add-burg").val().trim()
        };
        $.ajax("/api/burger/", {
            type: "POST",
            data: newBurg
        }).then(() => {

            location.reload();
        })
    })
})