const merchantSite = 'https://gateaubread.sandbox.arcadier.io'
$(document).ready(function () {
  $('.subCategories').on('click', function (event) {
    event.preventDefault()
    console.log(event.target.id)
    $.getJSON('http://anyorigin.com/go?url=https%3A//gateaubread.sandbox.arcadier.io/api/consumers/items/search?category=' + event.target.id + '&callback=?', function (data) {
      // data is object, data.contents is array
      console.log(data)
      console.log(data.contents)
      console.log('success listing items in subCategories', data)
      $('h3.text-danger').hide()
      $('.resultCategory').empty() // clear the container of existing peanuts
      data.contents.forEach(function (elem) {
        $('.resultCategory').append(
          '<div class="col-md-4 boxcard">' +
          '<div class="card item" style="display: inline-block; margin: 5px">' +
          '<div class="card-header"><h2>' + elem.ItemName + '</h2></div>' +
          '<div class="card-block" >' +
            '<image src="' + merchantSite + elem.ImageUrl + '" class="half">' +
            '<p class="card-text">' + elem.CurrencyCode + ' ' + elem.Price + '</p>' +
              '<div class="btn-group" id="' + elem.ID + '">' +
                '<button class="btn btn-danger add-item">Add to Cart</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>')
      })
    })
  })
})
