/**
 * Created by andreaphillips on 12/28/16.
 */
$(document).ready(function () {
  var embedUrl = null;

  if(!embedUrl){
    generateEmbed();
  }

});

var generateEmbed = function() {
  var api = 45621172;
  var data = {
    "layout": {
      "width": "600",
      "height": "480"
    },
    "domains": [
      "http://localhost:3000",
      "https://andrea-embed.herokuapp.com",
    ]
  };

  $.ajax({
    type: "POST",
    url: "https://ot-embed.herokuapp.com/v1/" + api + "/embed/new",
    data: data,
    crossDomain: true,
    dataType: "application/json",
    headers: {
      "X-OPENTOK-AUTH": "[JWT]"
    },
    success: function (data) {
      console.log("SUCESS");
    },
    error: function (data) {
      console.log("ERROR");
    },
    complete: function (data) {
      console.log("COMPLETE");
      if(data.responseText){
        var response = JSON.parse(data.responseText);
        appendEmbed(response);
      }
    },
  });
}

var appendEmbed = function(data){
  console.log(data);
  var iframe = "<iframe src="+data.fileUrl+" width="+data.layout.width+" height="+data.layout.height+"></iframe>"
  $("#embed-container").append(iframe);
}