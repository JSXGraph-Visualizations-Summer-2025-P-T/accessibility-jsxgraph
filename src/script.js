const board = JXG.JSXGraph.initBoard('box1', {
  boundingbox: [-5, 5, 5, -5],
  axis: true,
  showCopyright: false,
  showNavigation: false
});

const curve = board.create('functiongraph', [x => Math.sin(x)], {
  strokeColor: 'blue',
  strokeWidth: 2
});

// Make it accessible with description
document.getElementById('box1').setAttribute('aria-description', 'Graph of y = sin(x)');

function resetGraph() {
  board.removeObject(curve);
  board.create('functiongraph', [x => Math.sin(x)]);
}
