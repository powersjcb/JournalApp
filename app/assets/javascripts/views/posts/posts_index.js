JournalApp.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  events: {

  },


  initialize: function(options) {
    this.collection = options.collection;
    this.collection.fetch( { reset: true });

    this.listenTo(this.collection, 'sync remove reset', this.render);
  },



  render: function() {
    var content = this.template();
    this.$el.html(content);
    var $ul = this.$el.find('ul');

    this.collection.each( function(post) {
      var postView = new JournalApp.Views.PostIndexItem({post: post});
      $ul.append(postView.render().$el);
    });

    return this;
  }

});
