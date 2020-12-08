console.log("hello part 2")
$(document).ready(() => {
    // this function handles front end api call when the devour it is selected to set eaten to true
    $(".eat-burg").on("click", function (event) {

        const id = $(this).data("eat");
        console.log(id);
        $.ajax("/api/burger/uneaten/" + id, {
            type: "PUT"
        }).then(() => {
            console.log("You ate burger id " + id);
            location.reload();
        });
    });
    // this function handles front end api call when the eat again another is selected to set eaten to false
    $(".again-burg").on("click", function (event) {
        console.log("again")
        const id = $(this).data("againid");

        $.ajax("/api/burger/eaten/" + id, {
            type: "PUT"
        }).then(() => {
            console.log("You made burger id: " + id + " again!");
            location.reload();
        });
    });
    // this function handles front end api call when the digest button is selected to remove the burger from the database
    $(".del-burg").on("click", function (event) {
        console.log("del")
        const id = $(this).data("delid");

        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(() => {
            console.log("removed burger id: " + id);
            location.reload();
        });
    });
        // this function handles front end api call when the add it button is selected to add another burger to the database
    $(".added-burg").on("click", function (event) {
        event.preventDefault();
        console.log("hell0?")
        const newBurg = {
            name: $("#add-burg").val().trim()
        };
        console.log(newBurg)
        $.ajax("/api/burger/", {
            type: "POST",
            data: newBurg
        }).then(() => {
            console.log("Made a new burger!");

            location.reload();
        })
    })
})