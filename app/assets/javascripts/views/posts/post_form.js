JournalApp.Views.PostForm = Backbone.View.extend({

  template: JST["posts/post_form"],

  events: {
    'click button' : 'submitForm'
  },


  initialize: function (options) {
    this.post = options.post;
    this.listenTo(this.post, 'sync', this.render);
  },

  render: function() {
    var content = this.template({ post: this.post });
    this.$el.html(content);
    return this;
  },

  parseErrors: function(model, response) {
    console.log('what');
    var that = this;
    var errors = response.responseJSON;
    var $errors = $('<ul>');
    for (var prop in errors) {
      errors[prop].forEach( function (errorMsg) {
        var $error = $('<li>');
        $error.text(prop + " " + errorMsg);
        $errors.append($error);
      });


      // for (var text in prop) {
      // }
    }

    this.render();
    this.$el.prepend($errors);
    return this;
  },

  submitForm: function(event) {
    event.preventDefault();
    var postForm = this;

    var formData =  this.$('form').serializeJSON();
    this.post.save(formData, {
      success: function() {
        Backbone.history.navigate('posts/' + postForm.post.get('id'),
          {trigger: true});
      },
      error: postForm.parseErrors.bind(postForm)
    });
  }
});
