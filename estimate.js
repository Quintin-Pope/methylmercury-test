

<script src="./node_modules/odex/scr/odex.js"></script>
var s = new Solver(1);
var f = function(x, y) {
    return y;
}
s.solve(f,
        0,    // initial x value
        [1],  // initial y values (just one in this example)
        1);   // final x value

var out = s.solve(f, 0, [1], 1).y
console.log(out);

