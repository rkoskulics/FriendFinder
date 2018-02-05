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

    var newUser =       {
        "name":"Aretha",
        "photo":"https://cdn1.medicalnewstoday.com/content/images/articles/271/271285/three-strawberries.jpg",
        "scores":[
            4,
            3,
            2,
            1,
            5,
            3,
            1,
            2,
            5,
            0
          ]
      }
var eachDifferenceArray = [];
function compare(){
    for (var i = 0; i < users.length; i++) {
        var eachDifference = 0
        for (var j = 0; j < users[i].scores.length; j++){
            var difference = Math.abs(users[i].scores[j] - newUser.scores[j]);
            eachDifference = difference + eachDifference;
        }
        eachDifferenceArray.push(eachDifference)
        }
   console.log(eachDifferenceArray)        
}
function smallestDifference(array){
    var closestMatch = array.indexOf(Math.min.apply(null, array));
    console.log(users[closestMatch].name)
};
compare();
smallestDifference(eachDifferenceArray);