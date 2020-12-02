$(".eat-burg").on("click", event => {
    
    const id = $(this).data("eatid");

    $.ajax("/api/burger/uneaten/" + id, {
        type: "PUT"
    }).then(() =>{
        console.log("You ate burger id " + id);
        location.reload();
    });
});

$(".again-burg").on("click", event => {

    const id = $(this).data("againid");

    $.ajax("/api/burger/eaten/" + id, {
        type: "PUT"
    }).then(()=>{
        console.log("You made burger id: " + id + " again!");
        location.reload();
    });
});

$(".del-burg").on("click", event => {

    const id = $(this).data("delid");

    $.ajax("/api/burger/" + id, {
        type: "DELETE"
    }).then(()=>{
        console.log("removed burger id: " + id);
        location.reload();
    });
});

$(".add-burg").on("submit", event => {
    event.preventDefault();

    const newBurg = {
        burger_name: $("#addburg [name=add-burg]").val().trim()
    };

    $.post("/api/burger", newBurg).then(()=>{
        console.log("Made a new burger!");

        location.reload();
    })
})