var templates = {};
 templates.movie = [
   "<article data-id='<%= movie.id %>'>",
   "<img src='<%= movie.coverImg %>'>",
   "<h3><%= movie.title %></h3>",
   "<p><%= movie.plot %></p>",
  "<h3><%= movie.release %></h3>",
  "<h3><%= movie.rating %></h3>",
   "<button class='delete'>delete</button>",
   "</article>"
 ].join('');
 $(document).ready(function () {

   page.init();

 });
 var movieCollection = new MovieCollection(movies);

 var page = {
   init: function () {
     page.addAll();
     page.initEvents();
  },
   movieTmpl: _.template(templates.movie),
   initEvents: function () {
     $('.container').on('click', '.delete', function (evt) {
      evt.preventDefault();
       var movieId = $(this).closest('article').data('id');
       movieCollection.remove(movieId);
      page.addAll();
     });
    $('.container').on('click', 'img', page.logSelectedModel);
   },
   logSelectedModel: function (evt) {
     evt.preventDefault();
     var movieId = $(this).closest('article').data('id');
     console.log('here is the selected movie', movieCollection.get(movieId).toJSON());
     movieCollection.get(movieId).set({title: "80's campy movies" });

   },
   addOne: function (el) {
     el.attributes.id = el.cid;
     var markup = page.movieTmpl({movie: el.toJSON()});
     $('.container').append(markup);
   },
   addMovie: function (movie) {
          var view = new MovieView({model: movie});
        },
   addAll: function () {
     $('.container').html('');
     _.each(movieCollection.models, page.addOne);
   }

 }
