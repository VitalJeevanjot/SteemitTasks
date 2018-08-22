$(document).ready(function() {

  showDiscussion(0);
});

function showDiscussion(val) {
  switch (val) {

    case 0:
      $('#heading').html("Development");
      $(".collection").empty();
      $('#notfound').empty();
      steem.api.getDiscussionsByCreated({
        "tag": 'task-development',
        "limit": 100
      }, function(err, result) {
        console.log(err, result);
        for (let i = 0; i < result.length; i++) {
          let imageUrl = JSON.parse(result[i].json_metadata);
          let image = "img/nimg.png";
          if (imageUrl.hasOwnProperty('image')) {
            console.log("Has property image");
            if (imageUrl.image[0] !== "") {
              image = imageUrl.image[0];
            } else if (imageUrl.image[0] == "") {
              image = "img/nimg.png"
            }
          }

          $(".collection").append("      \
          <li class='collection-item avatar'> \
            <a href='http://steemit.com" + result[i].url + "' style='color: inherit;'> \
            <img src='" + image + "' alt='' class='circle'> \
            <span class='title' style='font-weight:bold;'>" + result[i].root_title + "</span> \
            <p class='truncate'>" + result[i].body + " \
            </p> \
            </a> \
            <br>\
          </li> \
          ");
        }
        if (result.length === 0) {
          $('#notfound').html("No Post To Display.");
        }
      });
      break;


    case 1:
      $('#heading').html("Designers");
      $(".collection").empty();
      $('#notfound').empty();
      steem.api.getDiscussionsByCreated({
        "tag": 'task-graphics',
        "limit": 100
      }, function(err, result) {
        console.log(err, result);
        for (let i = 0; i < result.length; i++) {
          let imageUrl = JSON.parse(result[i].json_metadata);
          let image = "img/nimg.png";
          if (imageUrl.hasOwnProperty('image')) {
            console.log("Has property image");
            if (imageUrl.image[0] !== "") {
              image = imageUrl.image[0];
            } else if (imageUrl.image[0] == "") {
              image = "img/nimg.png"
            }
          }

          $(".collection").append("      \
        <li class='collection-item avatar'> \
          <a href='http://steemit.com" + result[i].url + "' style='color: inherit;'> \
          <img src='" + image + "' alt='' class='circle'> \
          <span class='title' style='font-weight:bold;'>" + result[i].root_title + "</span> \
          <p class='truncate'>" + result[i].body + " \
          </p> \
          </a> \
          <br>\
        </li> \
        ");
        }
        if (result.length === 0) {
          $('#notfound').html("No Post To Display.");
        }
      });
      break;



    case 2:
      $('#heading').html("Bug Hunters");
      $(".collection").empty();
      $('#notfound').empty();
      steem.api.getDiscussionsByCreated({
        "tag": 'task-bug-hunting',
        "limit": 100
      }, function(err, result) {
        console.log(err, result);
        for (let i = 0; i < result.length; i++) {
          let imageUrl = JSON.parse(result[i].json_metadata);
          let image = "img/nimg.png";
          if (imageUrl.hasOwnProperty('image')) {
            console.log("Has property image");
            if (imageUrl.image[0] !== "") {
              image = imageUrl.image[0];
            } else if (imageUrl.image[0] == "") {
              image = "img/nimg.png"
            }
          }

          $(".collection").append("      \
          <li class='collection-item avatar'> \
            <a href='http://steemit.com" + result[i].url + "' style='color: inherit;'> \
            <img src='" + image + "' alt='' class='circle'> \
            <span class='title' style='font-weight:bold;'>" + result[i].root_title + "</span> \
            <p class='truncate'>" + result[i].body + " \
            </p> \
            </a> \
            <br>\
          </li> \
          ");
        }
        if (result.length === 0) {
          $('#notfound').html("No Post To Display.");
        }
      });
      break;




    case 3:
      $('#heading').html("Influencers");
      $(".collection").empty();
      $('#notfound').empty();
      steem.api.getDiscussionsByCreated({
        "tag": 'task-social',
        "limit": 100
      }, function(err, result) {
        console.log(err, result);
        for (let i = 0; i < result.length; i++) {
          let imageUrl = JSON.parse(result[i].json_metadata);
          let image = "img/nimg.png";
          if (imageUrl.hasOwnProperty('image')) {
            console.log("Has property image");
            if (imageUrl.image[0] !== "") {
              image = imageUrl.image[0];
            } else if (imageUrl.image[0] == "") {
              image = "img/nimg.png"
            }
          }

          $(".collection").append("      \
            <li class='collection-item avatar'> \
              <a href='http://steemit.com" + result[i].url + "' style='color: inherit;'> \
              <img src='" + image + "' alt='' class='circle'> \
              <span class='title' style='font-weight:bold;'>" + result[i].root_title + "</span> \
              <p class='truncate'>" + result[i].body + " \
              </p> \
              </a> \
              <br>\
            </li> \
            ");
        }
        if (result.length === 0) {
          $('#notfound').html("No Post To Display.");
        }
      });
      break;



    case 4:
      $('#heading').html("Data Analysts");
      $(".collection").empty();
      $('#notfound').empty();
      steem.api.getDiscussionsByCreated({
        "tag": 'task-analysis',
        "limit": 100
      }, function(err, result) {
        console.log(err, result);
        for (let i = 0; i < result.length; i++) {
          let imageUrl = JSON.parse(result[i].json_metadata);
          let image = "img/nimg.png";
          if (imageUrl.hasOwnProperty('image')) {
            console.log("Has property image");
            if (imageUrl.image[0] !== "") {
              image = imageUrl.image[0];
            } else if (imageUrl.image[0] == "") {
              image = "img/nimg.png"
            }
          }

          $(".collection").append("      \
              <li class='collection-item avatar'> \
                <a href='http://steemit.com" + result[i].url + "' style='color: inherit;'> \
                <img src='" + image + "' alt='' class='circle'> \
                <span class='title' style='font-weight:bold;'>" + result[i].root_title + "</span> \
                <p class='truncate'>" + result[i].body + " \
                </p> \
                </a> \
                <br>\
              </li> \
              ");
        }
        if (result.length === 0) {
          $('#notfound').html("No Post To Display.");
        }
      });
      break;



    case 5:
      $('#heading').html("Tech Writers");
      $(".collection").empty();
      $('#notfound').empty();
      steem.api.getDiscussionsByCreated({
        "tag": 'task-documentation',
        "limit": 100
      }, function(err, result) {
        console.log(err, result);
        for (let i = 0; i < result.length; i++) {
          let imageUrl = JSON.parse(result[i].json_metadata);
          let image = "img/nimg.png";
          if (imageUrl.hasOwnProperty('image')) {
            console.log("Has property image");
            if (imageUrl.image[0] !== "") {
              image = imageUrl.image[0];
            } else if (imageUrl.image[0] == "") {
              image = "img/nimg.png"
            }
          }

          $(".collection").append("      \
                <li class='collection-item avatar'> \
                  <a href='http://steemit.com" + result[i].url + "' style='color: inherit;'> \
                  <img src='" + image + "' alt='' class='circle'> \
                  <span class='title' style='font-weight:bold;'>" + result[i].root_title + "</span> \
                  <p class='truncate'>" + result[i].body + " \
                  </p> \
                  </a> \
                  <br>\
                </li> \
                ");
        }
        if (result.length === 0) {
          $('#notfound').html("No Post To Display.");
        }
      });
      break;


    case 6:
      $('#heading').html("Copywriters");
      $(".collection").empty();
      $('#notfound').empty();
      steem.api.getDiscussionsByCreated({
        "tag": 'task-copywriting',
        "limit": 100
      }, function(err, result) {
        console.log(err, result);
        for (let i = 0; i < result.length; i++) {
          let imageUrl = JSON.parse(result[i].json_metadata);
          let image = "img/nimg.png";
          if (imageUrl.hasOwnProperty('image')) {
            console.log("Has property image");
            if (imageUrl.image[0] !== "") {
              image = imageUrl.image[0];
            } else if (imageUrl.image[0] == "") {
              image = "img/nimg.png"
            }
          }

          $(".collection").append("      \
                  <li class='collection-item avatar'> \
                    <a href='http://steemit.com" + result[i].url + "' style='color: inherit;'> \
                    <img src='" + image + "' alt='' class='circle'> \
                    <span class='title' style='font-weight:bold;'>" + result[i].root_title + "</span> \
                    <p class='truncate'>" + result[i].body + " \
                    </p> \
                    </a> \
                    <br>\
                  </li> \
                  ");
        }

        if (result.length === 0) {
          $('#notfound').html("No Post To Display.");
        }
      });
      break;



  }
}
