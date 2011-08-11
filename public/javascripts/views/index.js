App.Views.Index = Backbone.View.extend({
    initialize: function() {
        this.documents = this.options.documents;
        this.render();
    },

    render: function() {
        $(this.el).html(JST.documents_collection({ collection: this.collection }))
        $('#app').html(this.el);

    }
});

