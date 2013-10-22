(function($) {
  Drupal.behaviors.islandoraOpenSeadragon = {
    attach: function(context, settings) {
      var resourceUri = settings.islandoraOpenSeadragon.resourceUri;
      var config = settings.islandoraOpenSeadragon.settings;

      config.prefixUrl = "/sites/all/themes/numa/images/openseadragon/";
      config.navigatorPosition = 'TOP_RIGHT';
      /*config.navImages = {
        zoomIn: {
          REST:   'zoomin.png',
          GROUP:  'zoomin.png',
          HOVER:  'zoomin.png',
          DOWN:   'zoomin.png'
        },
        zoomOut: {
          REST:   'zoomout.png',
          GROUP:  'zoomout.png',
          HOVER:  'zoomout.png',
          DOWN:   'zoomout.png'
        },
        home: {
          REST:   'home.png',
          GROUP:  'home.png',
          HOVER:  'home.png',
          DOWN:   'home.png'
        },
        fullpage: {
          REST:   'fullpage.png',
          GROUP:  'fullpage.png',
          HOVER:  'fullpage.png',
          DOWN:   'fullpage.png'
        },
        previous: {
          REST:   'previous.png',
          GROUP:  'previous.png',
          HOVER:  'previous.png',
          DOWN:   'previous.png'
        },
        next: {
          REST:   'next.png',
          GROUP:  'next.png',
          HOVER:  'next.png',
          DOWN:   'next.png'
        }
      };*/

      var openSeadragonId = '#' + config['id'];
      $(openSeadragonId).each(function () {
        if (!$(this).hasClass('processed')) {
          config.tileSources = new Array();
          resourceUri = (resourceUri instanceof Array) ? resourceUri : new Array(resourceUri);
          $.each(resourceUri, function(index, uri) {
            var tileSource = new OpenSeadragon.DjatokaTileSource(uri, settings.islandoraOpenSeadragon);
            config.tileSources.push(tileSource);
          });
          new OpenSeadragon(config);
          $(this).addClass('processed');
        }
      });
    }
  };
})(jQuery);
