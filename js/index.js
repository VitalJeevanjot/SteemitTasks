$(document).ready(function() {

  showDiscussion(0);
});

function showDiscussion(val) {
  switch (val) {
    case 0:
      $('#heading').html("Development");
      $(".collection").empty();
      steem.api.getDiscussionsByCreated({
        "tag": 'task-development',
        "limit": 100
      }, function(err, result) {
        console.log(err, result);
        for (let i = 0; i < result.length; i++) {
          let imageUrl = JSON.parse(result[i].json_metadata);
          let image = "img/nimg.png";
          if (imageUrl.hasOwnProperty('image')) {
            if (imageUrl.image[0] !== "") {
              let image = imageUrl.image[0];
            }
            else if (imageUrl.image[0] === "") {
              image = "img/nimg.png"
            }
          }

          $(".collection").append("      \
        <li class='collection-item avatar'> \
          <a href='http://steemit.com" + result[i].url + "' style='color: inherit;'> \
          <img src='" + image + "' alt='' class='circle'> \
          <span class='title'>" + result[i].root_title + "</span> \
          <p class='truncate'>" + result[i].body + " \
          </p> \
          </a> \
          <br>\
        </li> \
        ");
        }

      });
      break;

  }
}
