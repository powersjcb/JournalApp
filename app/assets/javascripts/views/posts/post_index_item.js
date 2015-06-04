JournalApp.Views.PostIndexItem = Backbone.View.extend({

  template: JST["posts/post_index_item"],

  tagName: "li",

  className: "group-list-item",

  events: {
    "click button.btn-danger" : "deletePost"
    // "click h4" :
  },

  initialize: function(options) {
    this.model = options.post;
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({post: this.model });
    this.$el.html(content);
    return this;
  },

  deletePost: function() {
    var postItem = this;
    this.model.destroy();
  }

});
