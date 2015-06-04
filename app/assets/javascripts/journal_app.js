window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.$el = options.$el;
    this.router = new JournalApp.Routers.Posts(options);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize({$el: $('div.content')});
});
