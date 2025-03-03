// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.index-from-offset-edge-cases.tentative
// Description:Test the edge cases for getIndexFromOffset, where the point is at the edge of glyph and at the midpoint.
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
  ctx.direction = 'ltr';
  ctx.align = 'left'
  ctx.baseline = 'alphabetic'
  tm = ctx.measureText('A');
  const a_width = tm.width;
  tm = ctx.measureText('B');
  const b_width = tm.width;
  tm = ctx.measureText('C');
  const c_width = tm.width;
  const epsilon = 1.0e-4;

  tm = ctx.measureText('ABC');
  _assert(tm.getIndexFromOffset(0) == 0, "tm.getIndexFromOffset(0) == 0");
  _assert(tm.getIndexFromOffset(a_width / 2) == 0, "tm.getIndexFromOffset(a_width / 2) == 0");
  _assert(tm.getIndexFromOffset(a_width / 2 + 1) == 1, "tm.getIndexFromOffset(a_width / 2 + 1) == 1");
  _assert(tm.getIndexFromOffset(a_width) == 1, "tm.getIndexFromOffset(a_width) == 1");
  _assert(tm.getIndexFromOffset(a_width + b_width / 2) == 1, "tm.getIndexFromOffset(a_width + b_width / 2) == 1");
  _assert(tm.getIndexFromOffset(a_width + b_width / 2 + 1) == 2, "tm.getIndexFromOffset(a_width + b_width / 2 + 1) == 2");
  _assert(tm.getIndexFromOffset(a_width + b_width) == 2, "tm.getIndexFromOffset(a_width + b_width) == 2");
  _assert(tm.getIndexFromOffset(a_width + b_width + c_width / 2) == 2, "tm.getIndexFromOffset(a_width + b_width + c_width / 2) == 2");
  _assert(tm.getIndexFromOffset(a_width + b_width + c_width / 2 + 1) == 3, "tm.getIndexFromOffset(a_width + b_width + c_width / 2 + 1) == 3");
  _assert(tm.getIndexFromOffset(a_width + b_width + c_width) == 3, "tm.getIndexFromOffset(a_width + b_width + c_width) == 3");
}, "Test the edge cases for getIndexFromOffset, where the point is at the edge of glyph and at the midpoint.");
done();
