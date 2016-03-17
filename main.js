 $(document).ready(function () {
  var movieCollection = new MovieCollection(movies);
  new ListView({collection: movieCollection});
  var formMarkup = new FormView({collection: movieCollection});
  $('.col-md-4').html(formMarkup.render().el);
});
