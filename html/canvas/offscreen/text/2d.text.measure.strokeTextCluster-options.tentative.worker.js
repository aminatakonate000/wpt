// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.strokeTextCluster-options.tentative
// Description:Test that strokeTextCluster() correctly applies the options passed as a dictionary.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 300);
  var ctx = canvas.getContext('2d');

  var f = new FontFace("CanvasTest", "url('/fonts/CanvasTest.ttf')");
  f.load();
  self.fonts.add(f);
  await self.fonts.ready;

  ctx.font = '50px CanvasTest';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  const text = 'E';
  const tm = ctx.measureText(text);
  const cluster = tm.getTextClusters()[0];

  // Background color.
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#0f0';
  ctx.lineWidth = 12;

  // Override the align and baseline of the cluster.
  ctx.strokeTextCluster(cluster, 50, 50, {align: 'right', baseline: 'bottom'});
  _assertPixelApprox(canvas, 5,5, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 45,5, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 5,45, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 45,45, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 5,95, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 50,95, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 95,50, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 95,5, 255,0,0,255, 2);

  // Override the x and y values of the cluster.
  ctx.strokeTextCluster(cluster, 0, 100, {x: 10, y: 10});
  _assertPixelApprox(canvas, 15,115, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 55,115, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 15,155, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 55,155, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 1,101, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 1,151, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 51,101, 255,0,0,255, 2);

  // Override the align, baseline, x, and y values of the cluster.
  ctx.strokeTextCluster(cluster, 50, 250,
                      {align: 'right', baseline: 'bottom', x: 10,  y: 10});
  _assertPixelApprox(canvas, 15,215, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 55,215, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 15,255, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 55,255, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 5,295, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 50,295, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 95,250, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 95,25, 255,0,0,255, 2);
}, "Test that strokeTextCluster() correctly applies the options passed as a dictionary.");
done();
