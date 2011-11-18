(function(document, $) {

  var body = document.body;

  $.fn.stickToTop = function(options) {
    options = $.extend({
      'scrollParent': window,
      'offset': {top: 0, left: 0},
      'bottomBound': 0,
      'initial': null,
    }, options, true);

    var lastApplied = '';

    return $(this).each(function() {
      var $sticky = $(this),
      initialOffset = $sticky.offset(),
      initialPositioning = $sticky.css('position'),

      fnScrollHandler = function() {
        var scrollTop = body.scrollTop,
        bottomBound = (options.bottomBound && document.height - options.bottomBound);

        var 
        applyBottomBound = (!!bottomBound && bottomBound < scrollTop),
        applyFixed = (scrollTop >= initialOffset.top - options.offset.top),
        applyInitial = !applyFixed;

        applyFixed = applyFixed && !applyBottomBound;

        if (applyBottomBound && lastApplied != 'bottomBound') {
          var currentPos = $sticky.position();

          $sticky.css({'position': 'absolute', 'top': bottomBound + 'px' , 'left': currentPos.left + 'px'});
          lastApplied = 'bottomBound';
          return;
        }

        if (applyInitial && lastApplied != 'initial') {
          $sticky.css({'position': initialPositioning, 'top': initialOffset.top, 'left': initialOffset.left});
          lastApplied = 'initial';
          return;
        }

        if (applyFixed && lastApplied != 'fixed') {
          $sticky.css({'position':'fixed', 'top': (options.offset.top || 0)+'px', 'left': (initialOffset.left + (options.offset.left || 0))+'px'});
          lastApplied = 'fixed';
          return;
        }
      };

      if (options.initial) {
        initialPositioning = options.initial.position;
        initialOffset = {'top': options.initial.top, 'left': options.initial.left};
        $sticky.css(options.initial);
      }

      if (initialPositioning == 'relative')
        initialPositioning = 'static';

      $(options.scrollParent).scroll(fnScrollHandler);   
    });
  };
}(document, jQuery))