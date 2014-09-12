#refMarklet

This bookmarklet is only of use on a drupal node edit page. It allows the fast adding of some custom tags to the (Markdown formatted) body text in order to create an easy to use referencing guide.

<a href="javascript:(function(e,a,g,h,f,c,b,d)%7Bif(!(f%3De.jQuery)%7C%7Cg>f.fn.jquery%7C%7Ch(f))%7Bc%3Da.createElement("script")%3Bc.type%3D"text/javascript"%3Bc.src%3D"http://ajax.googleapis.com/ajax/libs/jquery/"%2Bg%2B"/jquery.min.js"%3Bc.onload%3Dc.onreadystatechange%3Dfunction()%7Bif(!b%26%26(!(d%3Dthis.readyState)%7C%7Cd%3D%3D"loaded"%7C%7Cd%3D%3D"complete"))%7Bh((f%3De.jQuery).noConflict(1),b%3D1)%3Bf(c).remove()%7D%7D%3Ba.documentElement.childNodes%5B0%5D.appendChild(c)%7D%7D)(window,document,"1.3.2",function(%24,L)%7Bvar syntaxElements %3D %7B  %27auth%27 : %27author%27,  %27pub%27 : %27publisher%27,  %27date%27 : %27date%27,  %27title%27: %27title%27%7D%3Bvar options %3D %27%27%3B%24.each(syntaxElements, function(key, value) %7B  options %2B%3D %27<option value%3D"%27%2Bvalue%2B%27">%27%2Bvalue%2B%27</option>%27%3B%7D)%3Bvar checkbox %3D %27<input type%3D"checkbox" name%3D"vehicle" value%3D"Bike" id%3D"refkeyedit">edit reference highlights<br>%27%3Bvar widget %3D %27<br/><div id%3D"refwidget" class%3D"pull-right span4"><label>Referencing Markup Widget</label><select id%3D"refel">%27%2Boptions%2B%27</select><input type%3D"text" name%3D"elabel" id%3D"elabel">%27%2Bcheckbox%2B%27</div>%27%3B%24(%27%23edit-body%27).before(widget)%3Bvar refeditable %3D false%3B%24(%27%23refkeyedit%27).change( function() %7B  refeditable %3D !refeditable%3B%7D)%3Bvar element %3D %27author%27%3Bvar elabel %3D %27%27%3B%24(%27textarea%27).mouseup(function() %7B    mouseDown%3Dfalse%3B    if (refeditable) %7B      var startIndex %3D %24(this)%5B0%5D.selectionStart%3B      var endIndex %3D %24(this)%5B0%5D.selectionEnd%3B      element %3D %24(%27%23refel%27).val()%3B      el %3D %24(%27%23elabel%27).val()%3B      elabel %3D (el !%3D %27%27) %3F %27%7C%27%2Bel : %27%27%3B      var slicedText %3D %24(this).text().slice(startIndex, endIndex)%3B      %24(this).html(%24(this).text().replace(slicedText,%27%5B%27 %2B slicedText %2B %27%7C%27%2Belement%2Belabel%2B%27%5D%27))%3B    %7D%7D)%3B%7D)%3B">
  ref syntax highlighter
</a>
