// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.strokeTextCluster-range.tentative
// Description:Test that getTextClusters() and strokeTextCluster() correctly render different ranges of the input text.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(400, 300);
  var ctx = canvas.getContext('2d');

  // Renders all the clusters in the list from position (x, y).
  function renderClusters(clusters, x, y) {
    for (const cluster of clusters) {
      ctx.strokeTextCluster(cluster, x, y);
    }
  }

  var f = new FontFace("CanvasTest", "url('/fonts/CanvasTest.ttf')");
  f.load();
  self.fonts.add(f);
  await self.fonts.ready;

  ctx.font = '50px CanvasTest';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  const text = 'EEEEE';
  let tm = ctx.measureText(text);

  // Background color.
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#0f0';
  ctx.lineWidth = 12;

  // Without the first character.
  renderClusters(tm.getTextClusters(1, 5), 0, 0);
  _assertPixelApprox(canvas, 5,5, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 55,5, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 105,5, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 155,5, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 205,5, 0,255,0,255, 2);
  // Without the last character.
  renderClusters(tm.getTextClusters(0, 4), 0, 100);
  _assertPixelApprox(canvas, 5,105, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 55,105, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 105,105, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 155,105, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 245,105, 255,0,0,255, 2);
  // Only the middle character.
  renderClusters(tm.getTextClusters(2, 3), 0, 200);
  _assertPixelApprox(canvas, 5,205, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 55,205, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 105,205, 0,255,0,255, 2);
  _assertPixelApprox(canvas, 195,205, 255,0,0,255, 2);
  _assertPixelApprox(canvas, 245,205, 255,0,0,255, 2);
}, "Test that getTextClusters() and strokeTextCluster() correctly render different ranges of the input text.");
done();
