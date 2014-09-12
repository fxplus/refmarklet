var syntaxElements = {
  'auth' : 'author',
  'pub' : 'publisher',
  'date' : 'date',
  'title': 'title'
};
var options = '';
$.each(syntaxElements, function(key, value) {
  options += '<option value="'+value+'">'+value+'</option>';
});

var checkbox = '<input type="checkbox" name="vehicle" value="Bike" id="refkeyedit">edit reference highlights<br>';
var widget = '<br/><div id="refwidget" class="pull-right span4"><label>Referencing Markup Widget</label><select id="refel">'+options+'</select><input type="text" name="elabel" id="elabel">'+checkbox+'</div>';
$('#edit-body').before(widget);
var refeditable = false;
$('#refkeyedit').change( function() {
  refeditable = !refeditable;
});

var element = 'author';
var elabel = '';

$('textarea').mouseup(function() {
    mouseDown=false;

    if (refeditable) {
      var startIndex = $(this)[0].selectionStart;

      var endIndex = $(this)[0].selectionEnd;

      element = $('#refel').val();
      el = $('#elabel').val();
      elabel = (el != '') ? '|'+el : '';
      var slicedText = $(this).text().slice(startIndex, endIndex);
      $(this).html($(this).text().replace(slicedText,'[' + slicedText + '|'+element+elabel+']'));
    }
});