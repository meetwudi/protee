/**
 *  Protee.js 0.1.0
 *  A designer-friendly javascript library for fast prototyping
 *  
 *  Author: John Wu <webmaster@leapoahead>
 *  Github Repository: http://github.com/tjwudi/protee
 */

$(window).bind('load refresh', function() {
  /**
   * Include external html
   */
  var ATTR = 'data-protee-include',
    SELECTOR = '[' + ATTR + ']';

  // Here we are using bottom-up approach. Include external
  // HTML for DOM that does not have any child with `data-protee-include`
  // property.
  // 
  // In each step, we include exactly one external HTML. Others will be resolved
  // when the `refresh` event on window is triggered, then the step will run again.
  if ($(SELECTOR).length === 0) {
    // all done
    return;
  }

  $(SELECTOR).each(function() {
    $el = $(this);
    if ($el.children(SELECTOR).length > 0) {
      // has children with `data-protee-include` property, skip
      return;
    }
    var filepath = $el.attr(ATTR);
    $el.removeAttr(ATTR);
    $.ajax({
      url: filepath,
      success: function(data) {
        $el.html(data);
        // Rerun all actions when new html file is included
        $(window).trigger('refresh');
      }
    });
    // Prevent following calls
    return false;
  });
});

$(window).bind('load refresh', function() {
  /**
   * Repeating DOM
   */
  var ATTR = 'data-protee-repeat',
    SELECTOR = '[' + ATTR + ']';

  function repeat($el) {
    var times = parseInt($el.attr(ATTR), 10);
    $el.removeAttr(ATTR);
    for (var i = 0; i < times - 1; i ++) {
      $el.parent().append($el.clone());
    }
  }

  // Here we are using bottom-up approach. Repeat DOM that does not
  // have any child to be repeated.
  while($(SELECTOR).length > 0) {
    $(SELECTOR).each(function() {
      var $el = $(this);
      if ($el.children(SELECTOR).length > 0) {
        // has children to be repeated, skip
        return;
      }
      repeat($el);
    });
  } 
});

$(window).bind('load refresh', function() {
  /**
   * Generate lorem
   */
  var ATTR = 'data-protee-lorem',
    SELECTOR = '[' + ATTR + ']',
    LOREM_DICT = {
      'en': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam earum odio nisi similique sit, dolores accusantium non rerum expedita unde veniam, optio quidem, in, quam incidunt. Architecto, odio distinctio dolore!',
      'zh_CN': '他思车连龙所什机金，之严先角去品资政，动响询七号命家。花应少住积很必速，求那却红交周十，法杏辅对置置。东却局相必回照内世而容少教层，极层百县还铁9七需非容斗。 江花重积走系有社性包，者省最八会林工权参，之养蠢弦些你僚伯。圆收运石精光复转几员问，革类年共生做活育易，事展届包足往复加雪。'
    }, // all supported languages
    language = 'en'; // default to en
  
  $(SELECTOR).each(function() {
    var $el = $(this);
    if(!!$el.attr(ATTR)) {
      language = $el.attr(ATTR);
    }
    $el.html(LOREM_DICT[language]);
  });
});

$(window).bind('load refresh', function() {
  /**
   * Generate placeholder image
   */
  var ATTR = 'data-protee-imgholder',
    SELECTOR = 'img[' + ATTR + ']',
    baseUrl = 'http://placehold.it/';
  $(SELECTOR).each(function() {
    var size = '150x150',
      $el = $(this);
    if (!!$el.attr(ATTR)) {
      size = $el.attr(ATTR);
    }
    $(this).attr('src', baseUrl + size);
    $el.removeAttr(ATTR);
  });
});