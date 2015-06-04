JournalApp.Collections.Posts = Backbone.Collection.extend({

  model: JournalApp.Models.Post,
  url: 'posts',

  getOrFetch: function(id) {
    var collection = this;
    var post = this.get(id);
    if (post) {
      post.fetch();
    } else {
      post = new JournalApp.Models.Post( { id: id });
      post.fetch({
        success: function (post) {
          collection.add(post);
        }
      });
    }

    return post;
  }

});
