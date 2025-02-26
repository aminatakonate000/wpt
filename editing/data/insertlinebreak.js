// For documentation of the format, see README in this directory.
var browserTests = [
["foo[bar]baz",
    [["insertlinebreak",""]],
    "foo<br>{}baz",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["fo[o<table><tr><td>b]ar</table>",
    [["insertlinebreak",""]],
    "fo<br>{}<br><table><tbody><tr><td>ar</td></tr></tbody></table>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<table><tr><td>[foo<td>bar]<tr><td>baz<td>quz</table>",
    [["insertlinebreak",""]],
    "<table><tbody><tr><td><br>{}<br></td><td><br></td></tr><tr><td>baz</td><td>quz</td></tr></tbody></table>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<table><tbody data-start=0 data-end=1><tr><td>foo<td>bar<tr><td>baz<td>quz</table>",
    [["insertlinebreak",""]],
    "<table><tbody>{}<tr><td><br></td><td><br></td></tr><tr><td>baz</td><td>quz</td></tr></tbody></table>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<table><tr><td>fo[o</table>b]ar",
    [["insertlinebreak",""]],
    "<table><tbody><tr><td>fo<br>{}<br></td></tr></tbody></table>ar",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<table><tr><td>fo[o<td>b]ar<td>baz</table>",
    [["insertlinebreak",""]],
    "<table><tbody><tr><td>fo<br>{}<br></td><td>ar</td><td>baz</td></tr></tbody></table>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["{<table><tr><td>foo</table>}",
    [["insertlinebreak",""]],
    "<br>{}<br>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<table><tr><td>[foo]</table>",
    [["insertlinebreak",""]],
    "<table><tbody><tr><td><br>{}<br></td></tr></tbody></table>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li>[foo]<li>bar</ol>",
    [["insertlinebreak",""]],
    "<ol><li><br>{}<br></li><li>bar</li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li>f[o]o<li>bar</ol>",
    [["insertlinebreak",""]],
    "<ol><li>f<br>{}o</li><li>bar</li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["[]foo",
    [["insertlinebreak",""]],
    "<br>{}foo",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["foo[]",
    [["insertlinebreak",""]],
    "foo<br>{}<br>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<span>foo[]</span>",
    [["insertlinebreak",""]],
    "<span>foo<br>{}<br></span>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["foo[]<br>",
    [["insertlinebreak",""]],
    "foo<br>{}<br>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["foo[]bar",
    [["insertlinebreak",""]],
    "foo<br>{}bar",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<address>[]foo</address>",
    [["insertlinebreak",""]],
    "<address><br>{}foo</address>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<address>foo[]</address>",
    [["insertlinebreak",""]],
    "<address>foo<br>{}<br></address>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<address>foo[]<br></address>",
    [["insertlinebreak",""]],
    "<address>foo<br>{}<br></address>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<address>foo[]bar</address>",
    [["insertlinebreak",""]],
    "<address>foo<br>{}bar</address>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div>[]foo</div>",
    [["insertlinebreak",""]],
    "<div><br>{}foo</div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div>foo[]</div>",
    [["insertlinebreak",""]],
    "<div>foo<br>{}<br></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div>foo[]<br></div>",
    [["insertlinebreak",""]],
    "<div>foo<br>{}<br></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div>foo[]bar</div>",
    [["insertlinebreak",""]],
    "<div>foo<br>{}bar</div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>[]foo<dd>bar</dl>",
    [["insertlinebreak",""]],
    "<dl><dt><br>{}foo</dt><dd>bar</dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>foo[]<dd>bar</dl>",
    [["insertlinebreak",""]],
    "<dl><dt>foo<br>{}<br></dt><dd>bar</dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>foo[]<br><dd>bar</dl>",
    [["insertlinebreak",""]],
    "<dl><dt>foo<br>{}<br></dt><dd>bar</dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>foo[]bar<dd>baz</dl>",
    [["insertlinebreak",""]],
    "<dl><dt>foo<br>{}bar</dt><dd>baz</dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>foo<dd>[]bar</dl>",
    [["insertlinebreak",""]],
    "<dl><dt>foo</dt><dd><br>{}bar</dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>foo<dd>bar[]</dl>",
    [["insertlinebreak",""]],
    "<dl><dt>foo</dt><dd>bar<br>{}<br></dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>foo<dd>bar[]<br></dl>",
    [["insertlinebreak",""]],
    "<dl><dt>foo</dt><dd>bar<br>{}<br></dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>foo<dd>bar[]baz</dl>",
    [["insertlinebreak",""]],
    "<dl><dt>foo</dt><dd>bar<br>{}baz</dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<h1>[]foo</h1>",
    [["insertlinebreak",""]],
    "<h1><br>{}foo</h1>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<h1>foo[]</h1>",
    [["insertlinebreak",""]],
    "<h1>foo<br>{}<br></h1>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<h1>foo[]<br></h1>",
    [["insertlinebreak",""]],
    "<h1>foo<br>{}<br></h1>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<h1>foo[]bar</h1>",
    [["insertlinebreak",""]],
    "<h1>foo<br>{}bar</h1>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li>[]foo</ol>",
    [["insertlinebreak",""]],
    "<ol><li><br>{}foo</li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li>foo[]</ol>",
    [["insertlinebreak",""]],
    "<ol><li>foo<br>{}<br></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li>foo[]<br></ol>",
    [["insertlinebreak",""]],
    "<ol><li>foo<br>{}<br></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li>foo[]bar</ol>",
    [["insertlinebreak",""]],
    "<ol><li>foo<br>{}bar</li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>[]foo</p>",
    [["insertlinebreak",""]],
    "<p><br>{}foo</p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo[]</p>",
    [["insertlinebreak",""]],
    "<p>foo<br>{}<br></p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo[]<br></p>",
    [["insertlinebreak",""]],
    "<p>foo<br>{}<br></p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo[]bar</p>",
    [["insertlinebreak",""]],
    "<p>foo<br>{}bar</p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<pre>[]foo</pre>",
    [["insertlinebreak",""]],
    "<pre><br>{}foo</pre>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<pre>foo[]</pre>",
    [["insertlinebreak",""]],
    "<pre>foo<br>{}<br></pre>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<pre>foo[]<br></pre>",
    [["insertlinebreak",""]],
    "<pre>foo<br>{}<br></pre>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<pre>foo[]bar</pre>",
    [["insertlinebreak",""]],
    "<pre>foo<br>{}bar</pre>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<pre>foo[]<br><br></pre>",
    [["insertlinebreak",""]],
    "<pre>foo<br>{}<br><br></pre>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<pre>foo<br>{}<br></pre>",
    [["insertlinebreak",""]],
    "<pre>foo<br><br>{}<br></pre>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<pre>foo&#10;[]</pre>",
    [["insertlinebreak",""]],
    "<pre>foo\n<br>{}<br></pre>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<pre>foo[]&#10;</pre>",
    [["insertlinebreak",""]],
    "<pre>foo<br>{}\n</pre>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<pre>foo&#10;[]&#10;</pre>",
    [["insertlinebreak",""]],
    "<pre>foo\n<br>{}\n</pre>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<xmp>foo[]bar</xmp>",
    [["insertlinebreak",""]],
    "<xmp>foo[]bar</xmp>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<script>foo[]bar</script>baz",
    [["insertlinebreak",""]],
    "<script>foo[]bar</script>baz",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<listing>foo[]bar</listing>",
    [["insertlinebreak",""]],
    "<listing>foo<br>{}bar</listing>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li>{}<br></li></ol>",
    [["insertlinebreak",""]],
    "<ol><li><br>{}<br></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["foo<ol><li>{}<br></li></ol>",
    [["insertlinebreak",""]],
    "foo<ol><li><br>{}<br></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li>{}<br></li></ol>foo",
    [["insertlinebreak",""]],
    "<ol><li><br>{}<br></li></ol>foo",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li>foo<li>{}<br></ol>",
    [["insertlinebreak",""]],
    "<ol><li>foo</li><li><br>{}<br></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li>{}<br><li>bar</ol>",
    [["insertlinebreak",""]],
    "<ol><li><br>{}<br></li><li>bar</li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li>foo</li><ul><li>{}<br></ul></ol>",
    [["insertlinebreak",""]],
    "<ol><li>foo</li><ul><li><br>{}<br></li></ul></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>{}<br></dt></dl>",
    [["insertlinebreak",""]],
    "<dl><dt><br>{}<br></dt></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>foo<dd>{}<br></dl>",
    [["insertlinebreak",""]],
    "<dl><dt>foo</dt><dd><br>{}<br></dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>{}<br><dd>bar</dl>",
    [["insertlinebreak",""]],
    "<dl><dt><br>{}<br></dt><dd>bar</dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>foo<dd>bar<dl><dt>{}<br><dd>baz</dl></dl>",
    [["insertlinebreak",""]],
    "<dl><dt>foo</dt><dd>bar<dl><dt><br>{}<br></dt><dd>baz</dd></dl></dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt>foo<dd>bar<dl><dt>baz<dd>{}<br></dl></dl>",
    [["insertlinebreak",""]],
    "<dl><dt>foo</dt><dd>bar<dl><dt>baz</dt><dd><br>{}<br></dd></dl></dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<h1>foo[bar</h1><p>baz]quz</p>",
    [["defaultparagraphseparator","div"],["insertlinebreak",""]],
    "<h1>foo<br>{}quz</h1>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"div",false,false,"div"],"insertlinebreak":[false,false,"",false,false,""]}],
["<h1>foo[bar</h1><p>baz]quz</p>",
    [["defaultparagraphseparator","p"],["insertlinebreak",""]],
    "<h1>foo<br>{}quz</h1>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"div",false,false,"p"],"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo[bar</p><h1>baz]quz</h1>",
    [["insertlinebreak",""]],
    "<p>foo<br>{}quz</p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo</p>{}<br>",
    [["insertlinebreak",""]],
    "<p>foo</p><br>{}<br>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["{}<br><p>foo</p>",
    [["insertlinebreak",""]],
    "<br>{}<br><p>foo</p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo</p>{}<br><h1>bar</h1>",
    [["insertlinebreak",""]],
    "<p>foo</p><br>{}<br><h1>bar</h1>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<h1>foo</h1>{}<br><p>bar</p>",
    [["insertlinebreak",""]],
    "<h1>foo</h1><br>{}<br><p>bar</p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<h1>foo</h1>{}<br><h2>bar</h2>",
    [["insertlinebreak",""]],
    "<h1>foo</h1><br>{}<br><h2>bar</h2>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo</p><h1>[bar]</h1><p>baz</p>",
    [["insertlinebreak",""]],
    "<p>foo</p><h1><br>{}<br></h1><p>baz</p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo</p>{<h1>bar</h1>}<p>baz</p>",
    [["insertlinebreak",""]],
    "<p>foo</p><br>{}<br><p>baz</p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<table><tr><td>foo[]bar</table>",
    [["insertlinebreak",""]],
    "<table><tbody><tr><td>foo<br>{}bar</td></tr></tbody></table>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<table><tr><td><p>foo[]bar</table>",
    [["insertlinebreak",""]],
    "<table><tbody><tr><td><p>foo<br>{}bar</p></td></tr></tbody></table>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<blockquote>[]foo</blockquote>",
    [["insertlinebreak",""]],
    "<blockquote><br>{}foo</blockquote>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<blockquote>foo[]</blockquote>",
    [["insertlinebreak",""]],
    "<blockquote>foo<br>{}<br></blockquote>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<blockquote>foo[]<br></blockquote>",
    [["insertlinebreak",""]],
    "<blockquote>foo<br>{}<br></blockquote>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<blockquote>foo[]bar</blockquote>",
    [["insertlinebreak",""]],
    "<blockquote>foo<br>{}bar</blockquote>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<blockquote><p>[]foo</blockquote>",
    [["insertlinebreak",""]],
    "<blockquote><p><br>{}foo</p></blockquote>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<blockquote><p>foo[]</blockquote>",
    [["insertlinebreak",""]],
    "<blockquote><p>foo<br>{}<br></p></blockquote>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<blockquote><p>foo[]bar</blockquote>",
    [["insertlinebreak",""]],
    "<blockquote><p>foo<br>{}bar</p></blockquote>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<blockquote><p>foo[]<p>bar</blockquote>",
    [["insertlinebreak",""]],
    "<blockquote><p>foo<br>{}<br></p><p>bar</p></blockquote>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<blockquote><p>foo[]bar<p>baz</blockquote>",
    [["insertlinebreak",""]],
    "<blockquote><p>foo<br>{}bar</p><p>baz</p></blockquote>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<span>foo[]bar</span>",
    [["insertlinebreak",""]],
    "<span>foo<br>{}bar</span>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<span>foo[]bar</span>baz",
    [["insertlinebreak",""]],
    "<span>foo<br>{}bar</span>baz",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<b>foo[]bar</b>",
    [["insertlinebreak",""]],
    "<b>foo<br>{}bar</b>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<b>foo[]bar</b>baz",
    [["insertlinebreak",""]],
    "<b>foo<br>{}bar</b>baz",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<b>foo[]</b>bar",
    [["insertlinebreak",""]],
    "<b>foo<br>{}</b>bar",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["foo<b>[]bar</b>",
    [["insertlinebreak",""]],
    "foo<b><br>{}bar</b>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<b>foo[]</b><i>bar</i>",
    [["insertlinebreak",""]],
    "<b>foo<br>{}</b><i>bar</i>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<b>foo</b>{}<i>bar</i>",
    [["insertlinebreak",""]],
    "<b>foo</b><br>{}<i>bar</i>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<b id=x class=y>foo[]bar</b>",
    [["insertlinebreak",""]],
    "<b id=\"x\" class=\"y\">foo<br>{}bar</b>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<i><b>foo[]bar</b>baz</i>",
    [["insertlinebreak",""]],
    "<i><b>foo<br>{}bar</b>baz</i>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p><b>foo[]bar</b></p>",
    [["insertlinebreak",""]],
    "<p><b>foo<br>{}bar</b></p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p><b>[]foo</b></p>",
    [["insertlinebreak",""]],
    "<p><b><br>{}foo</b></p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p><b id=x class=y>foo[]bar</b></p>",
    [["insertlinebreak",""]],
    "<p><b id=\"x\" class=\"y\">foo<br>{}bar</b></p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div><b>foo[]bar</b></div>",
    [["insertlinebreak",""]],
    "<div><b>foo<br>{}bar</b></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<a href=foo>foo[]bar</a>",
    [["insertlinebreak",""]],
    "<a href=\"foo\">foo<br>{}bar</a>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<a href=foo>foo[]bar</a>baz",
    [["insertlinebreak",""]],
    "<a href=\"foo\">foo<br>{}bar</a>baz",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<a href=foo>foo[]</a>bar",
    [["insertlinebreak",""]],
    "<a href=\"foo\">foo<br>{}</a>bar",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["foo<a href=foo>[]bar</a>",
    [["insertlinebreak",""]],
    "foo<a href=\"foo\"><br>{}bar</a>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo[]<!--bar-->",
    [["insertlinebreak",""]],
    "<p>foo<br>{}<br><!--bar--></p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p><!--foo-->[]bar",
    [["insertlinebreak",""]],
    "<p><!--foo--><br>{}bar</p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo<span style=color:#aBcDeF>[bar]</span>baz",
    [["insertlinebreak",""]],
    "<p>foo<span style=\"color:rgb(171, 205, 239)\"><br>{}</span>baz</p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo<span style=color:#aBcDeF>{bar}</span>baz",
    [["insertlinebreak",""]],
    "<p>foo<span style=\"color:rgb(171, 205, 239)\"><br>{}</span>baz</p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo{<span style=color:#aBcDeF>bar</span>}baz",
    [["insertlinebreak",""]],
    "<p>foo<span style=\"color:rgb(171, 205, 239)\"><br>{}</span>baz</p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>[foo<span style=color:#aBcDeF>bar]</span>baz",
    [["stylewithcss","true"],["insertlinebreak",""]],
    "<p><br>{}baz</p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"insertlinebreak":[false,false,"",false,false,""]}],
["<p>[foo<span style=color:#aBcDeF>bar]</span>baz",
    [["stylewithcss","false"],["insertlinebreak",""]],
    "<p><br>{}baz</p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"insertlinebreak":[false,false,"",false,false,""]}],
["<p>{foo<span style=color:#aBcDeF>bar}</span>baz",
    [["stylewithcss","true"],["insertlinebreak",""]],
    "<p><br>{}baz</p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"insertlinebreak":[false,false,"",false,false,""]}],
["<p>{foo<span style=color:#aBcDeF>bar}</span>baz",
    [["stylewithcss","false"],["insertlinebreak",""]],
    "<p><br>{}baz</p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo<span style=color:#aBcDeF>[bar</span>baz]",
    [["insertlinebreak",""]],
    "<p>foo<span style=\"color:rgb(171, 205, 239)\"><br>{}<br></span></p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo<span style=color:#aBcDeF>{bar</span>baz}",
    [["insertlinebreak",""]],
    "<p>foo<span style=\"color:rgb(171, 205, 239)\"><br>{}<br></span></p>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo<span style=color:#aBcDeF>[bar</span><span style=color:#fEdCbA>baz]</span>quz",
    [["stylewithcss","true"],["insertlinebreak",""]],
    "<p>foo<span style=\"color:rgb(171, 205, 239)\"><br>{}</span>quz</p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"insertlinebreak":[false,false,"",false,false,""]}],
["<p>foo<span style=color:#aBcDeF>[bar</span><span style=color:#fEdCbA>baz]</span>quz",
    [["stylewithcss","false"],["insertlinebreak",""]],
    "<p>foo<span style=\"color:rgb(171, 205, 239)\"><br>{}</span>quz</p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"insertlinebreak":[false,false,"",false,false,""]}],
["<ul contenteditable><li>{}<br></ul>",
    [["insertlinebreak",""]],
    "<ul contenteditable=\"\"><li><br>{}<br></li></ul>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ul contenteditable><li>foo[]</ul>",
    [["insertlinebreak",""]],
    "<ul contenteditable=\"\"><li>foo<br>{}<br></li></ul>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div contenteditable=false><ul contenteditable><li>{}<br></ul></div>",
    [["insertlinebreak",""]],
    "<div contenteditable=\"false\"><ul contenteditable=\"\"><li><br>{}<br></li></ul></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div contenteditable=false><ul contenteditable><li>foo[]</ul></div>",
    [["insertlinebreak",""]],
    "<div contenteditable=\"false\"><ul contenteditable=\"\"><li>foo<br>{}<br></li></ul></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<address><p>foo[]</address>",
    [["insertlinebreak",""]],
    "<address><p>foo<br>{}<br></p></address>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt><p>foo[]</dl>",
    [["insertlinebreak",""]],
    "<dl><dt><p>foo<br>{}<br></p></dt></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dd><p>foo[]</dl>",
    [["insertlinebreak",""]],
    "<dl><dd><p>foo<br>{}<br></p></dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li><p>foo[]</ol>",
    [["insertlinebreak",""]],
    "<ol><li><p>foo<br>{}<br></p></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ul><li><p>foo[]</ul>",
    [["insertlinebreak",""]],
    "<ul><li><p>foo<br>{}<br></p></li></ul>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<address><div>foo[]</address>",
    [["insertlinebreak",""]],
    "<address><div>foo<br>{}<br></div></address>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt><div>foo[]</dl>",
    [["insertlinebreak",""]],
    "<dl><dt><div>foo<br>{}<br></div></dt></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dd><div>foo[]</dl>",
    [["insertlinebreak",""]],
    "<dl><dd><div>foo<br>{}<br></div></dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li><div>foo[]</ol>",
    [["insertlinebreak",""]],
    "<ol><li><div>foo<br>{}<br></div></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ul><li><div>foo[]</ul>",
    [["insertlinebreak",""]],
    "<ul><li><div>foo<br>{}<br></div></li></ul>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div><p>foo[]</div>",
    [["insertlinebreak",""]],
    "<div><p>foo<br>{}<br></p></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div><div>foo[]</div>",
    [["insertlinebreak",""]],
    "<div><div>foo<br>{}<br></div></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<address><p>[]foo</address>",
    [["insertlinebreak",""]],
    "<address><p><br>{}foo</p></address>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt><p>[]foo</dl>",
    [["insertlinebreak",""]],
    "<dl><dt><p><br>{}foo</p></dt></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dd><p>[]foo</dl>",
    [["insertlinebreak",""]],
    "<dl><dd><p><br>{}foo</p></dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li><p>[]foo</ol>",
    [["insertlinebreak",""]],
    "<ol><li><p><br>{}foo</p></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ul><li><p>[]foo</ul>",
    [["insertlinebreak",""]],
    "<ul><li><p><br>{}foo</p></li></ul>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<address><div>[]foo</address>",
    [["insertlinebreak",""]],
    "<address><div><br>{}foo</div></address>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt><div>[]foo</dl>",
    [["insertlinebreak",""]],
    "<dl><dt><div><br>{}foo</div></dt></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dd><div>[]foo</dl>",
    [["insertlinebreak",""]],
    "<dl><dd><div><br>{}foo</div></dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li><div>[]foo</ol>",
    [["insertlinebreak",""]],
    "<ol><li><div><br>{}foo</div></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ul><li><div>[]foo</ul>",
    [["insertlinebreak",""]],
    "<ul><li><div><br>{}foo</div></li></ul>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div><p>[]foo</div>",
    [["insertlinebreak",""]],
    "<div><p><br>{}foo</p></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div><div>[]foo</div>",
    [["insertlinebreak",""]],
    "<div><div><br>{}foo</div></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<address><p>foo[]bar</address>",
    [["insertlinebreak",""]],
    "<address><p>foo<br>{}bar</p></address>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt><p>foo[]bar</dl>",
    [["insertlinebreak",""]],
    "<dl><dt><p>foo<br>{}bar</p></dt></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dd><p>foo[]bar</dl>",
    [["insertlinebreak",""]],
    "<dl><dd><p>foo<br>{}bar</p></dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li><p>foo[]bar</ol>",
    [["insertlinebreak",""]],
    "<ol><li><p>foo<br>{}bar</p></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ul><li><p>foo[]bar</ul>",
    [["insertlinebreak",""]],
    "<ul><li><p>foo<br>{}bar</p></li></ul>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<address><div>foo[]bar</address>",
    [["insertlinebreak",""]],
    "<address><div>foo<br>{}bar</div></address>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dt><div>foo[]bar</dl>",
    [["insertlinebreak",""]],
    "<dl><dt><div>foo<br>{}bar</div></dt></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<dl><dd><div>foo[]bar</dl>",
    [["insertlinebreak",""]],
    "<dl><dd><div>foo<br>{}bar</div></dd></dl>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li><div>foo[]bar</ol>",
    [["insertlinebreak",""]],
    "<ol><li><div>foo<br>{}bar</div></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ul><li><div>foo[]bar</ul>",
    [["insertlinebreak",""]],
    "<ul><li><div>foo<br>{}bar</div></li></ul>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div><p>foo[]bar</div>",
    [["insertlinebreak",""]],
    "<div><p>foo<br>{}bar</p></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div><div>foo[]bar</div>",
    [["insertlinebreak",""]],
    "<div><div>foo<br>{}bar</div></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li class=a id=x><p class=b id=y>foo[]</ol>",
    [["insertlinebreak",""]],
    "<ol><li class=\"a\" id=\"x\"><p class=\"b\" id=\"y\">foo<br>{}<br></p></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div class=a id=x><div class=b id=y>foo[]</div></div>",
    [["insertlinebreak",""]],
    "<div class=\"a\" id=\"x\"><div class=\"b\" id=\"y\">foo<br>{}<br></div></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div class=a id=x><p class=b id=y>foo[]</div>",
    [["insertlinebreak",""]],
    "<div class=\"a\" id=\"x\"><p class=\"b\" id=\"y\">foo<br>{}<br></p></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li class=a id=x><p class=b id=y>[]foo</ol>",
    [["insertlinebreak",""]],
    "<ol><li class=\"a\" id=\"x\"><p class=\"b\" id=\"y\"><br>{}foo</p></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div class=a id=x><div class=b id=y>[]foo</div></div>",
    [["insertlinebreak",""]],
    "<div class=\"a\" id=\"x\"><div class=\"b\" id=\"y\"><br>{}foo</div></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div class=a id=x><p class=b id=y>[]foo</div>",
    [["insertlinebreak",""]],
    "<div class=\"a\" id=\"x\"><p class=\"b\" id=\"y\"><br>{}foo</p></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<ol><li class=a id=x><p class=b id=y>foo[]bar</ol>",
    [["insertlinebreak",""]],
    "<ol><li class=\"a\" id=\"x\"><p class=\"b\" id=\"y\">foo<br>{}bar</p></li></ol>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div class=a id=x><div class=b id=y>foo[]bar</div></div>",
    [["insertlinebreak",""]],
    "<div class=\"a\" id=\"x\"><div class=\"b\" id=\"y\">foo<br>{}bar</div></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div class=a id=x><p class=b id=y>foo[]bar</div>",
    [["insertlinebreak",""]],
    "<div class=\"a\" id=\"x\"><p class=\"b\" id=\"y\">foo<br>{}bar</p></div>",
    [true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div>abc [] </div>",
    [["insertlinebreak",""]],
    "<div>abc<br><br></div>",
    [true,true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div>abc[]  </div>",
    [["insertlinebreak",""]],
    "<div>abc<br><br></div>",
    [true,true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div>[] abc</div>",
    [["insertlinebreak",""]],
    ["<div><br>abc</div>",
     "<div><br> abc</div>"],
    [true,true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div>[]  abc</div>",
    [["insertlinebreak",""]],
    ["<div><br>abc</div>",
     "<div><br>  abc</div>"],
    [true,true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div> [] abc</div>",
    [["insertlinebreak",""]],
    ["<div><br>abc</div>",
     "<div><br> abc</div>"],
    [true,true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
["<div>  []abc</div>",
    [["insertlinebreak",""]],
    ["<div><br>abc</div>",
     "<div><br>  abc</div>"],
    [true,true],
    {"insertlinebreak":[false,false,"",false,false,""]}],
]
