$("#submit").on("click", function (event) {
    event.preventDefault();
    var newUser = {
        name: $("#name").val(),
        photo: $("#link").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    }
    console.log(newUser)

})