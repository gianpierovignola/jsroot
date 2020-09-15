var jsroot = require("jsroot");
var fs = require("fs");

console.log('JSROOT version', jsroot.version);

// For histogram object one could specify rendering engine via options
// r3d_img is normal webgl, create svg:image (default)
// r3d_svg uses SVGRenderer, can produce large output

jsroot.OpenFile("https://root.cern/js/files/hsimple.root").then(file => {
   file.ReadObject("hpx;1").then(obj => {
      jsroot.MakeSVG( { object: obj, option: "lego2,pal50", width: 1200, height: 800 /*, option: "r3d_svg" */ }).then(svg => {
         fs.writeFileSync("lego2.svg", svg);
         console.log('Create lego2.svg size', svg.length);
      });
   });
});
