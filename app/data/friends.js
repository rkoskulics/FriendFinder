// Create dummy data for use in the app
var users = [
{
    "name":"Bob",
    "photo":"https://www.organicfacts.net/wp-content/uploads/2013/06/Pineapple.jpg",
    "scores":[
        2,
        4,
        1,
        2,
        3,
        1,
        2,
        4,
        4,
        2
      ]
  },
  {
    "name":"Amanda",
    "photo":"https://www.fruitpassion.ch/wp-content/uploads/2016/06/123.jpg",
    "scores":[
        1,
        2,
        4,
        3,
        5,
        1,
        5,
        2,
        3,
        2
      ]
  },
  {
    "name":"James",
    "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Pitaya_cross_section_ed2.jpg/1200px-Pitaya_cross_section_ed2.jpg",
    "scores":[
        5,
        5,
        4,
        4,
        5,
        4,
        5,
        1,
        2,
        1
      ]
  },
  {
    "name":"Jessica",
    "photo":"https://www.organicfacts.net/wp-content/uploads/2013/07/Kiwi.jpg",
    "scores":[
        1,
        2,
        1,
        1,
        2,
        2,
        2,
        3,
        5,
        5
      ]
  },
  {
    "name":"Franklin",
    "photo":"https://cdn1.medicalnewstoday.com/content/images/articles/271/271285/three-strawberries.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
]
// Get the data from the survery and save it in a new variable
$("#submit").on("click", function(){
    event.preventDefault();
    var newUser ={
        name: $("#name").val(),
        photo: $("#link").val(),
        scores:[
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
console.log(users[1]);
// Export the data to make it available in other files.
module.exports.users = users
module.exports.newUser = newUser