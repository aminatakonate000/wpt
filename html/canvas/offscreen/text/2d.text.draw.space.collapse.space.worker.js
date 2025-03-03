// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.draw.space.collapse.space
// Description:Space characters are converted to U+0020, and are NOT collapsed
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  var f = new FontFace("CanvasTest", "url('/fonts/CanvasTest.ttf')");
  f.load();
  self.fonts.add(f);
  await self.fonts.ready;
  ctx.font = '50px CanvasTest';
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.fillStyle = '#0f0';
  ctx.fillText('E  EE', 0, 37.5);
  _assertPixelApprox(canvas, 25,25, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 75,25, 255,0,0,255, 2);
}, "Space characters are converted to U+0020, and are NOT collapsed");
done();
