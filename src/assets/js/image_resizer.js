// Generated by CoffeeScript 1.7.1
// (function() {
//   var ImageResizer;

//   ImageResizer = (function() {
//     function ImageResizer(image, buttons, addResizePropertyToImage) {
//       var button, _fn, _i, _len, _ref;
//       this.image = image;
//       this.buttons = buttons;
//       this.addResizePropertyToImage = addResizePropertyToImage;
//       if (this.addResizePropertyToImage === true) {
//         this.image.style.reset = "both";
//       }
//       _ref = this.buttons;
//       _fn = (function(_this) {
//         return function(button) {
//           return button.addEventListener('click', function() {
//             return _this.reactToButton(button);
//           });
//         };
//       })(this);
//       for (_i = 0, _len = _ref.length; _i < _len; _i++) {
//         button = _ref[_i];
//         _fn(button);
//       }
//     }

//     ImageResizer.prototype.reactToButton = function(button) {
//       var resizeValue;
//       console.log("Button used is", button);
//       resizeValue = button.dataset.resizeValue;
//       console.log("Resize value is:", resizeValue);
//       if (!!resizeValue) {
//         return this.image.style.width = "" + resizeValue;
//       }
//     };

//     return ImageResizer;

//   })();

//   window.onload = function() {
//     var button1, button2, button3, image, interchange_example;
//     image = document.getElementById('resizableImageByButtons');
//     button1 = document.getElementById('resizeImageButton1');
//     button2 = document.getElementById('resizeImageButton2');
//     button3 = document.getElementById('resizeImageButton3');
//     return interchange_example = new ImageResizer(image, [button1, button2, button3], true);
//   };

// }).call(this);
