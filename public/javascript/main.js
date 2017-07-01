$(document).ready(function() {
  var searchResults;

  function passDataToVariable(data) {
    var searchData = data;
    return searchData;
  }  

$('#searchButton').on('click', function(event) {
  var keywords = ($(event.target).parents().find($('.searchInput')).val()).toString();
  var url = 'http://anyorigin.com/go?url=https://gateaubread.sandbox.arcadier.io/api/consumers/items/search&callback=?';
  console.log(url);
  $.getJSON(url, function(data){
    for (var i=0;i<(data.contents).length;i++) {
      if((data.contents[i].ItemName).toLowerCase().includes(keywords.toLowerCase())) {
        $('#output').append('<p>' + data.contents[i].ItemName + '</p>');
      }
    } 
    console.log(data);   
  });
  $(event.target).parents().find($('.searchInput')).val('');

});


});
