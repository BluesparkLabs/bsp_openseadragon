(function($) {
  Drupal.behaviors.bspOpenSeadragon = {
    attach: function(context, settings) {
      var resourceUri = settings.bspOpenSeadragon.resourceUri;
      var config = settings.bspOpenSeadragon.settings;

      var openSeadragonId = '#' + config['id'];
      $(openSeadragonId).each(function () {
        if (!$(this).hasClass('processed')) {
          config.tileSources = new Array();
          resourceUri = (resourceUri instanceof Array) ? resourceUri : new Array(resourceUri);
          $.each(resourceUri, function(index, uri) {
            var tileSource = new OpenSeadragon.DjatokaTileSource(uri, settings.bspOpenSeadragon);
            config.tileSources.push(tileSource);
          });
          new OpenSeadragon(config);
          $(this).addClass('processed');
        }
      });
    }
  };
})(jQuery);
