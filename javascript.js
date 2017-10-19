
$(document).ready(function(){


$("h1").click(function(){

  $("header").toggle(1000);

});
$.getJSON("https://api.airtable.com/v0/appBregcrPIWd0vaK/musics?api_key=keyCpj3STqVxqRU46",
					function(data) {
          console.log(data);
          $.each(data.records, function(key,val) {
            console.log(val.fields.title);

            $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"' frameborder='0' width='80' height='180' allowtransparency='true'></iframe>").appendTo('#mus-autres');

          });
					}
);
});
$(document).ready(function(){

  $(".button").click(function(){
      $("header").toggle(1000);
  });

  $.getJSON("https://api.airtable.com/v0/appy7PzQ2wWqQWwY6/musics?api_key=keyC15K3Qkejq0vGE",

  function(data) {
      console.log(data);
      $.each(data.records, function(key,val) {
          console.log(val.fields.title);

          $('<li>'+val.fields.title+'</li>').appendTo('#musiques');


      });

    }
  );


});
