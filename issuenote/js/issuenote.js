(function($) {

  // Re-enable form elements that are disabled for non-ajax situations.
  Drupal.behaviors.issuenote = {
    attach: function() {

      // Add click event to the first loaded elements.
      $('.issuenote-ajax').click(Drupal.issuenoteLoadIssue);

      // Add a processed class.
      $('.issuenote-ajax').addClass('issuenote-ajax-processed');

      // Remove original class to prevent duplicates.
      $('.issuenote-ajax-processed').removeClass('issuenote-ajax');

    }
  };

  Drupal.issuenoteLoadIssue = function(event) {
    // Get path of link.
    var link = $(event["currentTarget"]).attr("href");

    $(event["currentTarget"]).after('<div class="issuenote-display"></div>')

    $(event["currentTarget"]).removeClass('issuenote-ajax-processed');

    // Set as displayed, not processed.
    $(event["currentTarget"]).addClass('issuenote-ajax-displayed');
    $(event["currentTarget"]).addClass('issuenote-ajax-current');

    $(event["currentTarget"]).unbind('click', Drupal.issuenoteLoadIssue);
   // $(event["currentTarget"]).bind('click', Drupal.issuenoteCloseIssue);
   
    $.ajax({ 
        url: "/issuenote/ajax_link" + link,
        context: document.body, 
        success: Drupal.issuenoteDisplayIssue,
        complete: Drupal.issuenoteDisplayIssueComplete,
      });
    return false;
  };


  Drupal.issuenoteCloseIssue = function(event) {
    console.log('close');
    return false;
  };

  Drupal.issuenoteDisplayIssueComplete = function(data) {
    return false;
  };

  Drupal.issuenoteDisplayIssue = function(data) {
    //$('div.region-content').append(data);
    $('a.issuenote-ajax-current + div.issuenote-display').append(data);
$('a').removeClass('issuenote-ajax-current');
    // Add click event to new links.
    $('.issuenote-ajax').click(Drupal.issuenoteLoadIssue);

    // Add a processed class.
    $('.issuenote-ajax').addClass('issuenote-ajax-processed');

    // Remove original class to prevent duplicates.
    $('.issuenote-ajax-processed').removeClass('issuenote-ajax');
    $('.issuenote-ajax').css('backgroundColor', 'blue');
    $('.issuenote-ajax-processed').css('backgroundColor', '#d4dcf7');

    $('.issuenote-ajax-processed').css('display', 'block');
    $('.issuenote-ajax-displayed').css('backgroundColor', 'yellow');
    $('.issuenote-ajax-current').css('backgroundColor', 'red');
    $('div.field-type-taxonomy-term-reference').css('display', 'block');
    $('div.field-type-taxonomy-term-reference').css('clear', 'both');
    $('div.field-type-taxonomy-term-reference div.field-items').css('float', 'none');
    $('.issuenote-ajax-displayed').unbind('click', Drupal.issuenoteLoadIssue);

    return false;
  };


})(jQuery);