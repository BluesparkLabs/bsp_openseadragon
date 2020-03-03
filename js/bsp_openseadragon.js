(function($) {
  Drupal.behaviors.bspOpenSeadragon = {
    attach: function(context, settings) {
      var resourceUri = settings.bspOpenSeadragon.resourceUri;
      var config = settings.bspOpenSeadragon.settings;

      var openSeadragonId = '#' + config['id'];
      $(openSeadragonId).each(function () {
        var that = this;
        if (!$(that).hasClass('processed')) {
          if (resourceUri instanceof Array) {
            console.error('Support for multiple tile sources has been deprecated.');
            alert('Support for multiple tile sources has been deprecated. Please contact a site administrator.');
            return;
          }
          jQuery.getJSON(resourceUri, function(data, textStatus, jqXHR) {
            config.id = $(that).attr('id');
            config.tileSources = new Array();
            config.tileSources = [{
              '@context': 'http://iiif.io/api/image/2/context.json',
              '@id': resourceUri,
              'height': data.height,
              'width': data.width,
              'profile': [ 'http://iiif.io/api/image/2/level2.json' ],
              'protocol': 'http://iiif.io/api/image',
              'tiles': [{
                'scaleFactors': [ 1, 2, 4, 8, 16, 32 ],
                'width': 1024
              }]
            }];
            new OpenSeadragon(config);
          })
          .fail(function () {
            console.error("Error getting the image resource for " + resourceUri);
          })
          .always(function() {
            $(that).addClass('processed');
          });
        }
      });
    }
  };
})(jQuery);
