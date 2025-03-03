// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.drawing.style.reset.fontKerning.none
// Description:crbug/338965374, fontKerning still works after setting font for a second time.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("crbug/338965374, fontKerning still works after setting font for a second time.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.font = '100px serif';
  ctx.fontKerning = "none";
  const width1 = ctx.measureText("AW").width;
  ctx.font = '100px serif';
  _assertSame(ctx.fontKerning, "none", "ctx.fontKerning", "\"none\"");
  const width2 = ctx.measureText("AW").width;
  _assertSame(width1, width2, "width1", "width2");
  t.done();
});
done();
