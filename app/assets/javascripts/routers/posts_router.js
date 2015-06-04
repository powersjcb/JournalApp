JournalApp.Routers.Posts = Backbone.Router.extend({

  routes: {
    ""               : 'index',
    "posts/new"      : 'new',
    'posts/:id/edit' : "edit",
    "posts/:id"      : 'show'
  },

  initialize: function(options) {
    this.$el = options.$el;
    this.posts = new JournalApp.Collections.Posts();
  },

  index: function() {
    this.posts.fetch();

    var indexView = new JournalApp.Views.PostsIndex({collection: this.posts});

    this.$el.html(indexView.render().$el);
  },

  show: function(id) {
    var model = this.posts.getOrFetch(id);
    var showView = new JournalApp.Views.PostShow({model: model});

    this.$el.html(showView.render().$el);
  },

  new: function() {
    var post = new JournalApp.Models.Post();

  },

  edit: function(id) {
    console.log("cats");
    var post = this.posts.getOrFetch(id);
    var editItem = new JournalApp.Views.PostForm({post: post});
    this.$el.html(editItem.render().$el);
  }
});
