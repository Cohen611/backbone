var templates = {};
templates.movie = [
  "<img style='' src='<%= coverImg %>'>",
  "<h3><%= title %></h3>",
  "<p><%= plot %></p>",
  "<button class='btn btn-danger delete'>delete</button>",
  "<button class='btn btn-warning showEdit'>Edit</button>",
  "<div class='editSection'>",
    '<div class="form-group">',
  "<input class='form-control editTitle' type='text' value='<%= title %>'>",
  "</div>",
    '<div class="form-group">',
  "<input class='form-control editCoverImg' type='text' value='<%= coverImg %>'>",
  "</div>",
    '<div class="form-group">',
  "<input class='form-control editPLot' type='text' value='<%= plot %>'>",
  "</div>",
  "<button class='editMovie'>Edit Movie</button>",
  "</div>"

].join('');

templates.addMovie= [
  '<form class="">',
    '<div class="form-group">',
      '<label for="title">Title</label>',
    '<input class="form-control" type="text" name="title" placeholder="Title" value="">',
  '</div>',
    '<div class="form-group">',
      '<label for="author">Author</label>',
    '<input class="form-control" type="text" name="author" placeholder="Author" value="">',
  '</div>',
  '<div class="form-group">',
    '<label for="coverImg">Movie Cover</label>',
    '<input class="form-control" type="text" name="coverImg" placeholder="Cover Image URL" value="">',
  '</div>',
  '<div class="form-group">',
'<label for="plot">Plot</label>',
    '<textarea class="form-control" name="plot" rows="8" cols="40" placeholder="Plot"></textarea>',
  '</div>',
    '<button class="btn btn-success" type="submit" name="Submit">Add Movie</button>',
  '</form>'
].join('');
