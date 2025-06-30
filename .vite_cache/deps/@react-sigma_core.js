import {
  require_is_graph
} from "./chunk-LE6F6KRJ.js";
import {
  Graph,
  require_events
} from "./chunk-ITVWZULE.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@react-sigma/core/lib/react-sigma_core.esm.min.js
var e = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/sigma/dist/inherits-d1a1e29b.esm.js
function _toPrimitive(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2 || "default");
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _classCallCheck(a2, n2) {
  if (!(a2 instanceof n2)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e2, r2) {
  for (var t2 = 0; t2 < r2.length; t2++) {
    var o2 = r2[t2];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, _toPropertyKey(o2.key), o2);
  }
}
function _createClass(e2, r2, t2) {
  return r2 && _defineProperties(e2.prototype, r2), t2 && _defineProperties(e2, t2), Object.defineProperty(e2, "prototype", {
    writable: false
  }), e2;
}
function _getPrototypeOf(t2) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, _getPrototypeOf(t2);
}
function _isNativeReflectConstruct() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t2;
  })();
}
function _assertThisInitialized(e2) {
  if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function _possibleConstructorReturn(t2, e2) {
  if (e2 && ("object" == typeof e2 || "function" == typeof e2)) return e2;
  if (void 0 !== e2) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t2);
}
function _callSuper(t2, o2, e2) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t2, _isNativeReflectConstruct() ? Reflect.construct(o2, e2 || [], _getPrototypeOf(t2).constructor) : o2.apply(t2, e2));
}
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}
function _inherits(t2, e2) {
  if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
  t2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: t2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t2, "prototype", {
    writable: false
  }), e2 && _setPrototypeOf(t2, e2);
}

// node_modules/sigma/dist/colors-beb06eb2.esm.js
function _arrayWithHoles(r2) {
  if (Array.isArray(r2)) return r2;
}
function _iterableToArrayLimit(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) {
        if (Object(t2) !== t2) return;
        f2 = false;
      } else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2.return && (u2 = t2.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a2;
  }
}
function _arrayLikeToArray(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
  return n2;
}
function _unsupportedIterableToArray(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a2) : void 0;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r2, e2) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
}
var HTML_COLORS = {
  black: "#000000",
  silver: "#C0C0C0",
  gray: "#808080",
  grey: "#808080",
  white: "#FFFFFF",
  maroon: "#800000",
  red: "#FF0000",
  purple: "#800080",
  fuchsia: "#FF00FF",
  green: "#008000",
  lime: "#00FF00",
  olive: "#808000",
  yellow: "#FFFF00",
  navy: "#000080",
  blue: "#0000FF",
  teal: "#008080",
  aqua: "#00FFFF",
  darkblue: "#00008B",
  mediumblue: "#0000CD",
  darkgreen: "#006400",
  darkcyan: "#008B8B",
  deepskyblue: "#00BFFF",
  darkturquoise: "#00CED1",
  mediumspringgreen: "#00FA9A",
  springgreen: "#00FF7F",
  cyan: "#00FFFF",
  midnightblue: "#191970",
  dodgerblue: "#1E90FF",
  lightseagreen: "#20B2AA",
  forestgreen: "#228B22",
  seagreen: "#2E8B57",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  limegreen: "#32CD32",
  mediumseagreen: "#3CB371",
  turquoise: "#40E0D0",
  royalblue: "#4169E1",
  steelblue: "#4682B4",
  darkslateblue: "#483D8B",
  mediumturquoise: "#48D1CC",
  indigo: "#4B0082",
  darkolivegreen: "#556B2F",
  cadetblue: "#5F9EA0",
  cornflowerblue: "#6495ED",
  rebeccapurple: "#663399",
  mediumaquamarine: "#66CDAA",
  dimgray: "#696969",
  dimgrey: "#696969",
  slateblue: "#6A5ACD",
  olivedrab: "#6B8E23",
  slategray: "#708090",
  slategrey: "#708090",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  mediumslateblue: "#7B68EE",
  lawngreen: "#7CFC00",
  chartreuse: "#7FFF00",
  aquamarine: "#7FFFD4",
  skyblue: "#87CEEB",
  lightskyblue: "#87CEFA",
  blueviolet: "#8A2BE2",
  darkred: "#8B0000",
  darkmagenta: "#8B008B",
  saddlebrown: "#8B4513",
  darkseagreen: "#8FBC8F",
  lightgreen: "#90EE90",
  mediumpurple: "#9370DB",
  darkviolet: "#9400D3",
  palegreen: "#98FB98",
  darkorchid: "#9932CC",
  yellowgreen: "#9ACD32",
  sienna: "#A0522D",
  brown: "#A52A2A",
  darkgray: "#A9A9A9",
  darkgrey: "#A9A9A9",
  lightblue: "#ADD8E6",
  greenyellow: "#ADFF2F",
  paleturquoise: "#AFEEEE",
  lightsteelblue: "#B0C4DE",
  powderblue: "#B0E0E6",
  firebrick: "#B22222",
  darkgoldenrod: "#B8860B",
  mediumorchid: "#BA55D3",
  rosybrown: "#BC8F8F",
  darkkhaki: "#BDB76B",
  mediumvioletred: "#C71585",
  indianred: "#CD5C5C",
  peru: "#CD853F",
  chocolate: "#D2691E",
  tan: "#D2B48C",
  lightgray: "#D3D3D3",
  lightgrey: "#D3D3D3",
  thistle: "#D8BFD8",
  orchid: "#DA70D6",
  goldenrod: "#DAA520",
  palevioletred: "#DB7093",
  crimson: "#DC143C",
  gainsboro: "#DCDCDC",
  plum: "#DDA0DD",
  burlywood: "#DEB887",
  lightcyan: "#E0FFFF",
  lavender: "#E6E6FA",
  darksalmon: "#E9967A",
  violet: "#EE82EE",
  palegoldenrod: "#EEE8AA",
  lightcoral: "#F08080",
  khaki: "#F0E68C",
  aliceblue: "#F0F8FF",
  honeydew: "#F0FFF0",
  azure: "#F0FFFF",
  sandybrown: "#F4A460",
  wheat: "#F5DEB3",
  beige: "#F5F5DC",
  whitesmoke: "#F5F5F5",
  mintcream: "#F5FFFA",
  ghostwhite: "#F8F8FF",
  salmon: "#FA8072",
  antiquewhite: "#FAEBD7",
  linen: "#FAF0E6",
  lightgoldenrodyellow: "#FAFAD2",
  oldlace: "#FDF5E6",
  magenta: "#FF00FF",
  deeppink: "#FF1493",
  orangered: "#FF4500",
  tomato: "#FF6347",
  hotpink: "#FF69B4",
  coral: "#FF7F50",
  darkorange: "#FF8C00",
  lightsalmon: "#FFA07A",
  orange: "#FFA500",
  lightpink: "#FFB6C1",
  pink: "#FFC0CB",
  gold: "#FFD700",
  peachpuff: "#FFDAB9",
  navajowhite: "#FFDEAD",
  moccasin: "#FFE4B5",
  bisque: "#FFE4C4",
  mistyrose: "#FFE4E1",
  blanchedalmond: "#FFEBCD",
  papayawhip: "#FFEFD5",
  lavenderblush: "#FFF0F5",
  seashell: "#FFF5EE",
  cornsilk: "#FFF8DC",
  lemonchiffon: "#FFFACD",
  floralwhite: "#FFFAF0",
  snow: "#FFFAFA",
  lightyellow: "#FFFFE0",
  ivory: "#FFFFF0"
};
var INT8 = new Int8Array(4);
var INT32 = new Int32Array(INT8.buffer, 0, 1);
var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
function parseColor(val) {
  var r2 = 0;
  var g = 0;
  var b2 = 0;
  var a2 = 1;
  if (val[0] === "#") {
    if (val.length === 4) {
      r2 = parseInt(val.charAt(1) + val.charAt(1), 16);
      g = parseInt(val.charAt(2) + val.charAt(2), 16);
      b2 = parseInt(val.charAt(3) + val.charAt(3), 16);
    } else {
      r2 = parseInt(val.charAt(1) + val.charAt(2), 16);
      g = parseInt(val.charAt(3) + val.charAt(4), 16);
      b2 = parseInt(val.charAt(5) + val.charAt(6), 16);
    }
    if (val.length === 9) {
      a2 = parseInt(val.charAt(7) + val.charAt(8), 16) / 255;
    }
  } else if (RGBA_TEST_REGEX.test(val)) {
    var match = val.match(RGBA_EXTRACT_REGEX);
    if (match) {
      r2 = +match[1];
      g = +match[2];
      b2 = +match[3];
      if (match[4]) a2 = +match[4];
    }
  }
  return {
    r: r2,
    g,
    b: b2,
    a: a2
  };
}
var FLOAT_COLOR_CACHE = {};
for (htmlColor in HTML_COLORS) {
  FLOAT_COLOR_CACHE[htmlColor] = floatColor(HTML_COLORS[htmlColor]);
  FLOAT_COLOR_CACHE[HTML_COLORS[htmlColor]] = FLOAT_COLOR_CACHE[htmlColor];
}
var htmlColor;
function rgbaToFloat(r2, g, b2, a2, masking) {
  INT32[0] = a2 << 24 | b2 << 16 | g << 8 | r2;
  if (masking) INT32[0] = INT32[0] & 4278190079;
  return FLOAT32[0];
}
function floatColor(val) {
  val = val.toLowerCase();
  if (typeof FLOAT_COLOR_CACHE[val] !== "undefined") return FLOAT_COLOR_CACHE[val];
  var parsed = parseColor(val);
  var r2 = parsed.r, g = parsed.g, b2 = parsed.b;
  var a2 = parsed.a;
  a2 = a2 * 255 | 0;
  var color = rgbaToFloat(r2, g, b2, a2, true);
  FLOAT_COLOR_CACHE[val] = color;
  return color;
}
var FLOAT_INDEX_CACHE = {};
function indexToColor(index) {
  if (typeof FLOAT_INDEX_CACHE[index] !== "undefined") return FLOAT_INDEX_CACHE[index];
  var r2 = (index & 16711680) >>> 16;
  var g = (index & 65280) >>> 8;
  var b2 = index & 255;
  var a2 = 255;
  var color = rgbaToFloat(r2, g, b2, a2, true);
  FLOAT_INDEX_CACHE[index] = color;
  return color;
}
function colorToIndex(r2, g, b2, _a) {
  return b2 + (g << 8) + (r2 << 16);
}
function getPixelColor(gl, frameBuffer, x2, y2, pixelRatio, downSizingRatio) {
  var bufferX = Math.floor(x2 / downSizingRatio * pixelRatio);
  var bufferY = Math.floor(gl.drawingBufferHeight / downSizingRatio - y2 / downSizingRatio * pixelRatio);
  var pixel = new Uint8Array(4);
  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
  gl.readPixels(bufferX, bufferY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
  var _pixel = _slicedToArray(pixel, 4), r2 = _pixel[0], g = _pixel[1], b2 = _pixel[2], a2 = _pixel[3];
  return [r2, g, b2, a2];
}

// node_modules/sigma/dist/index-236c62ad.esm.js
function _defineProperty(e2, r2, t2) {
  return (r2 = _toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _superPropBase(t2, o2) {
  for (; !{}.hasOwnProperty.call(t2, o2) && null !== (t2 = _getPrototypeOf(t2)); ) ;
  return t2;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e2, t2, r2) {
    var p2 = _superPropBase(e2, t2);
    if (p2) {
      var n2 = Object.getOwnPropertyDescriptor(p2, t2);
      return n2.get ? n2.get.call(arguments.length < 3 ? e2 : r2) : n2.value;
    }
  }, _get.apply(null, arguments);
}
function _superPropGet(t2, o2, e2, r2) {
  var p2 = _get(_getPrototypeOf(1 & r2 ? t2.prototype : t2), o2, e2);
  return 2 & r2 && "function" == typeof p2 ? function(t3) {
    return p2.apply(e2, t3);
  } : p2;
}
function getAttributeItemsCount(attr) {
  return attr.normalized ? 1 : attr.size;
}
function getAttributesItemsCount(attrs) {
  var res = 0;
  attrs.forEach(function(attr) {
    return res += getAttributeItemsCount(attr);
  });
  return res;
}
function loadShader(type, gl, source) {
  var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
  var shader = gl.createShader(glType);
  if (shader === null) {
    throw new Error("loadShader: error while creating the shader");
  }
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!successfullyCompiled) {
    var infoLog = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("loadShader: error while compiling the shader:\n".concat(infoLog, "\n").concat(source));
  }
  return shader;
}
function loadVertexShader(gl, source) {
  return loadShader("VERTEX", gl, source);
}
function loadFragmentShader(gl, source) {
  return loadShader("FRAGMENT", gl, source);
}
function loadProgram(gl, shaders) {
  var program = gl.createProgram();
  if (program === null) {
    throw new Error("loadProgram: error while creating the program.");
  }
  var i2, l2;
  for (i2 = 0, l2 = shaders.length; i2 < l2; i2++) gl.attachShader(program, shaders[i2]);
  gl.linkProgram(program);
  var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!successfullyLinked) {
    gl.deleteProgram(program);
    throw new Error("loadProgram: error while linking the program.");
  }
  return program;
}
function killProgram(_ref) {
  var gl = _ref.gl, buffer = _ref.buffer, program = _ref.program, vertexShader = _ref.vertexShader, fragmentShader = _ref.fragmentShader;
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  gl.deleteProgram(program);
  gl.deleteBuffer(buffer);
}
var PICKING_PREFIX = "#define PICKING_MODE\n";
var SIZE_FACTOR_PER_ATTRIBUTE_TYPE = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, WebGL2RenderingContext.BOOL, 1), WebGL2RenderingContext.BYTE, 1), WebGL2RenderingContext.UNSIGNED_BYTE, 1), WebGL2RenderingContext.SHORT, 2), WebGL2RenderingContext.UNSIGNED_SHORT, 2), WebGL2RenderingContext.INT, 4), WebGL2RenderingContext.UNSIGNED_INT, 4), WebGL2RenderingContext.FLOAT, 4);
var AbstractProgram = _createClass(function AbstractProgram2(_gl, _pickGl, _renderer) {
  _classCallCheck(this, AbstractProgram2);
});
var Program = function() {
  function Program2(gl, pickingBuffer, renderer) {
    _classCallCheck(this, Program2);
    _defineProperty(this, "array", new Float32Array());
    _defineProperty(this, "constantArray", new Float32Array());
    _defineProperty(this, "capacity", 0);
    _defineProperty(this, "verticesCount", 0);
    var def = this.getDefinition();
    this.VERTICES = def.VERTICES;
    this.VERTEX_SHADER_SOURCE = def.VERTEX_SHADER_SOURCE;
    this.FRAGMENT_SHADER_SOURCE = def.FRAGMENT_SHADER_SOURCE;
    this.UNIFORMS = def.UNIFORMS;
    this.ATTRIBUTES = def.ATTRIBUTES;
    this.METHOD = def.METHOD;
    this.CONSTANT_ATTRIBUTES = "CONSTANT_ATTRIBUTES" in def ? def.CONSTANT_ATTRIBUTES : [];
    this.CONSTANT_DATA = "CONSTANT_DATA" in def ? def.CONSTANT_DATA : [];
    this.isInstanced = "CONSTANT_ATTRIBUTES" in def;
    this.ATTRIBUTES_ITEMS_COUNT = getAttributesItemsCount(this.ATTRIBUTES);
    this.STRIDE = this.VERTICES * this.ATTRIBUTES_ITEMS_COUNT;
    this.renderer = renderer;
    this.normalProgram = this.getProgramInfo("normal", gl, def.VERTEX_SHADER_SOURCE, def.FRAGMENT_SHADER_SOURCE, null);
    this.pickProgram = pickingBuffer ? this.getProgramInfo("pick", gl, PICKING_PREFIX + def.VERTEX_SHADER_SOURCE, PICKING_PREFIX + def.FRAGMENT_SHADER_SOURCE, pickingBuffer) : null;
    if (this.isInstanced) {
      var constantAttributesItemsCount = getAttributesItemsCount(this.CONSTANT_ATTRIBUTES);
      if (this.CONSTANT_DATA.length !== this.VERTICES) throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES, " items, received ").concat(this.CONSTANT_DATA.length, " instead)"));
      this.constantArray = new Float32Array(this.CONSTANT_DATA.length * constantAttributesItemsCount);
      for (var i2 = 0; i2 < this.CONSTANT_DATA.length; i2++) {
        var vector = this.CONSTANT_DATA[i2];
        if (vector.length !== constantAttributesItemsCount) throw new Error("Program: error while getting constant data (one vector has ".concat(vector.length, " items instead of ").concat(constantAttributesItemsCount, ")"));
        for (var j2 = 0; j2 < vector.length; j2++) this.constantArray[i2 * constantAttributesItemsCount + j2] = vector[j2];
      }
      this.STRIDE = this.ATTRIBUTES_ITEMS_COUNT;
    }
  }
  return _createClass(Program2, [{
    key: "kill",
    value: function kill() {
      killProgram(this.normalProgram);
      if (this.pickProgram) {
        killProgram(this.pickProgram);
        this.pickProgram = null;
      }
    }
  }, {
    key: "getProgramInfo",
    value: function getProgramInfo(name, gl, vertexShaderSource, fragmentShaderSource, frameBuffer) {
      var def = this.getDefinition();
      var buffer = gl.createBuffer();
      if (buffer === null) throw new Error("Program: error while creating the WebGL buffer.");
      var vertexShader = loadVertexShader(gl, vertexShaderSource);
      var fragmentShader = loadFragmentShader(gl, fragmentShaderSource);
      var program = loadProgram(gl, [vertexShader, fragmentShader]);
      var uniformLocations = {};
      def.UNIFORMS.forEach(function(uniformName) {
        var location = gl.getUniformLocation(program, uniformName);
        if (location) uniformLocations[uniformName] = location;
      });
      var attributeLocations = {};
      def.ATTRIBUTES.forEach(function(attr) {
        attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
      });
      var constantBuffer;
      if ("CONSTANT_ATTRIBUTES" in def) {
        def.CONSTANT_ATTRIBUTES.forEach(function(attr) {
          attributeLocations[attr.name] = gl.getAttribLocation(program, attr.name);
        });
        constantBuffer = gl.createBuffer();
        if (constantBuffer === null) throw new Error("Program: error while creating the WebGL constant buffer.");
      }
      return {
        name,
        program,
        gl,
        frameBuffer,
        buffer,
        constantBuffer: constantBuffer || {},
        uniformLocations,
        attributeLocations,
        isPicking: name === "pick",
        vertexShader,
        fragmentShader
      };
    }
  }, {
    key: "bindProgram",
    value: function bindProgram(program) {
      var _this = this;
      var offset = 0;
      var gl = program.gl, buffer = program.buffer;
      if (!this.isInstanced) {
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        offset = 0;
        this.ATTRIBUTES.forEach(function(attr) {
          return offset += _this.bindAttribute(attr, program, offset);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
      } else {
        gl.bindBuffer(gl.ARRAY_BUFFER, program.constantBuffer);
        offset = 0;
        this.CONSTANT_ATTRIBUTES.forEach(function(attr) {
          return offset += _this.bindAttribute(attr, program, offset, false);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.constantArray, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, program.buffer);
        offset = 0;
        this.ATTRIBUTES.forEach(function(attr) {
          return offset += _this.bindAttribute(attr, program, offset, true);
        });
        gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
  }, {
    key: "unbindProgram",
    value: function unbindProgram(program) {
      var _this2 = this;
      if (!this.isInstanced) {
        this.ATTRIBUTES.forEach(function(attr) {
          return _this2.unbindAttribute(attr, program);
        });
      } else {
        this.CONSTANT_ATTRIBUTES.forEach(function(attr) {
          return _this2.unbindAttribute(attr, program, false);
        });
        this.ATTRIBUTES.forEach(function(attr) {
          return _this2.unbindAttribute(attr, program, true);
        });
      }
    }
  }, {
    key: "bindAttribute",
    value: function bindAttribute(attr, program, offset, setDivisor) {
      var sizeFactor = SIZE_FACTOR_PER_ATTRIBUTE_TYPE[attr.type];
      if (typeof sizeFactor !== "number") throw new Error('Program.bind: yet unsupported attribute type "'.concat(attr.type, '"'));
      var location = program.attributeLocations[attr.name];
      var gl = program.gl;
      if (location !== -1) {
        gl.enableVertexAttribArray(location);
        var stride = !this.isInstanced ? this.ATTRIBUTES_ITEMS_COUNT * Float32Array.BYTES_PER_ELEMENT : (setDivisor ? this.ATTRIBUTES_ITEMS_COUNT : getAttributesItemsCount(this.CONSTANT_ATTRIBUTES)) * Float32Array.BYTES_PER_ELEMENT;
        gl.vertexAttribPointer(location, attr.size, attr.type, attr.normalized || false, stride, offset);
        if (this.isInstanced && setDivisor) {
          if (gl instanceof WebGL2RenderingContext) {
            gl.vertexAttribDivisor(location, 1);
          } else {
            var ext = gl.getExtension("ANGLE_instanced_arrays");
            if (ext) ext.vertexAttribDivisorANGLE(location, 1);
          }
        }
      }
      return attr.size * sizeFactor;
    }
  }, {
    key: "unbindAttribute",
    value: function unbindAttribute(attr, program, unsetDivisor) {
      var location = program.attributeLocations[attr.name];
      var gl = program.gl;
      if (location !== -1) {
        gl.disableVertexAttribArray(location);
        if (this.isInstanced && unsetDivisor) {
          if (gl instanceof WebGL2RenderingContext) {
            gl.vertexAttribDivisor(location, 0);
          } else {
            var ext = gl.getExtension("ANGLE_instanced_arrays");
            if (ext) ext.vertexAttribDivisorANGLE(location, 0);
          }
        }
      }
    }
  }, {
    key: "reallocate",
    value: function reallocate(capacity) {
      if (capacity === this.capacity) return;
      this.capacity = capacity;
      this.verticesCount = this.VERTICES * capacity;
      this.array = new Float32Array(!this.isInstanced ? this.verticesCount * this.ATTRIBUTES_ITEMS_COUNT : this.capacity * this.ATTRIBUTES_ITEMS_COUNT);
    }
  }, {
    key: "hasNothingToRender",
    value: function hasNothingToRender() {
      return this.verticesCount === 0;
    }
  }, {
    key: "renderProgram",
    value: function renderProgram(params, programInfo) {
      var gl = programInfo.gl, program = programInfo.program;
      gl.enable(gl.BLEND);
      gl.useProgram(program);
      this.setUniforms(params, programInfo);
      this.drawWebGL(this.METHOD, programInfo);
    }
  }, {
    key: "render",
    value: function render(params) {
      if (this.hasNothingToRender()) return;
      if (this.pickProgram) {
        this.pickProgram.gl.viewport(0, 0, params.width * params.pixelRatio / params.downSizingRatio, params.height * params.pixelRatio / params.downSizingRatio);
        this.bindProgram(this.pickProgram);
        this.renderProgram(_objectSpread2(_objectSpread2({}, params), {}, {
          pixelRatio: params.pixelRatio / params.downSizingRatio
        }), this.pickProgram);
        this.unbindProgram(this.pickProgram);
      }
      this.normalProgram.gl.viewport(0, 0, params.width * params.pixelRatio, params.height * params.pixelRatio);
      this.bindProgram(this.normalProgram);
      this.renderProgram(params, this.normalProgram);
      this.unbindProgram(this.normalProgram);
    }
  }, {
    key: "drawWebGL",
    value: function drawWebGL(method, _ref) {
      var gl = _ref.gl, frameBuffer = _ref.frameBuffer;
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      if (!this.isInstanced) {
        gl.drawArrays(method, 0, this.verticesCount);
      } else {
        if (gl instanceof WebGL2RenderingContext) {
          gl.drawArraysInstanced(method, 0, this.VERTICES, this.capacity);
        } else {
          var ext = gl.getExtension("ANGLE_instanced_arrays");
          if (ext) ext.drawArraysInstancedANGLE(method, 0, this.VERTICES, this.capacity);
        }
      }
    }
  }]);
}();
var AbstractNodeProgram = function(_AbstractProgram) {
  function AbstractNodeProgram2() {
    _classCallCheck(this, AbstractNodeProgram2);
    return _callSuper(this, AbstractNodeProgram2, arguments);
  }
  _inherits(AbstractNodeProgram2, _AbstractProgram);
  return _createClass(AbstractNodeProgram2);
}(AbstractProgram);
var NodeProgram = function(_ref) {
  function NodeProgram2() {
    _classCallCheck(this, NodeProgram2);
    return _callSuper(this, NodeProgram2, arguments);
  }
  _inherits(NodeProgram2, _ref);
  return _createClass(NodeProgram2, [{
    key: "kill",
    value: function kill() {
      _superPropGet(NodeProgram2, "kill", this, 3)([]);
    }
  }, {
    key: "process",
    value: function process(nodeIndex, offset, data) {
      var i2 = offset * this.STRIDE;
      if (data.hidden) {
        for (var l2 = i2 + this.STRIDE; i2 < l2; i2++) {
          this.array[i2] = 0;
        }
        return;
      }
      return this.processVisibleItem(indexToColor(nodeIndex), i2, data);
    }
  }]);
}(Program);
var AbstractEdgeProgram = function(_AbstractProgram) {
  function AbstractEdgeProgram2() {
    _classCallCheck(this, AbstractEdgeProgram2);
    return _callSuper(this, AbstractEdgeProgram2, arguments);
  }
  _inherits(AbstractEdgeProgram2, _AbstractProgram);
  return _createClass(AbstractEdgeProgram2);
}(AbstractProgram);
var EdgeProgram = function(_ref) {
  function EdgeProgram2() {
    var _this;
    _classCallCheck(this, EdgeProgram2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EdgeProgram2, [].concat(args));
    _defineProperty(_this, "drawLabel", void 0);
    return _this;
  }
  _inherits(EdgeProgram2, _ref);
  return _createClass(EdgeProgram2, [{
    key: "kill",
    value: function kill() {
      _superPropGet(EdgeProgram2, "kill", this, 3)([]);
    }
  }, {
    key: "process",
    value: function process(edgeIndex, offset, sourceData, targetData, data) {
      var i2 = offset * this.STRIDE;
      if (data.hidden || sourceData.hidden || targetData.hidden) {
        for (var l2 = i2 + this.STRIDE; i2 < l2; i2++) {
          this.array[i2] = 0;
        }
        return;
      }
      return this.processVisibleItem(indexToColor(edgeIndex), i2, sourceData, targetData, data);
    }
  }]);
}(Program);
function createEdgeCompoundProgram(programClasses, drawLabel) {
  return function() {
    function EdgeCompoundProgram(gl, pickingBuffer, renderer) {
      _classCallCheck(this, EdgeCompoundProgram);
      _defineProperty(this, "drawLabel", drawLabel);
      this.programs = programClasses.map(function(Program2) {
        return new Program2(gl, pickingBuffer, renderer);
      });
    }
    return _createClass(EdgeCompoundProgram, [{
      key: "reallocate",
      value: function reallocate(capacity) {
        this.programs.forEach(function(program) {
          return program.reallocate(capacity);
        });
      }
    }, {
      key: "process",
      value: function process(edgeIndex, offset, sourceData, targetData, data) {
        this.programs.forEach(function(program) {
          return program.process(edgeIndex, offset, sourceData, targetData, data);
        });
      }
    }, {
      key: "render",
      value: function render(params) {
        this.programs.forEach(function(program) {
          return program.render(params);
        });
      }
    }, {
      key: "kill",
      value: function kill() {
        this.programs.forEach(function(program) {
          return program.kill();
        });
      }
    }]);
  }();
}
function drawStraightEdgeLabel(context, edgeData, sourceData, targetData, settings) {
  var size = settings.edgeLabelSize, font = settings.edgeLabelFont, weight = settings.edgeLabelWeight, color = settings.edgeLabelColor.attribute ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000" : settings.edgeLabelColor.color;
  var label = edgeData.label;
  if (!label) return;
  context.fillStyle = color;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  var sSize = sourceData.size;
  var tSize = targetData.size;
  var sx = sourceData.x;
  var sy = sourceData.y;
  var tx = targetData.x;
  var ty = targetData.y;
  var cx = (sx + tx) / 2;
  var cy = (sy + ty) / 2;
  var dx = tx - sx;
  var dy = ty - sy;
  var d2 = Math.sqrt(dx * dx + dy * dy);
  if (d2 < sSize + tSize) return;
  sx += dx * sSize / d2;
  sy += dy * sSize / d2;
  tx -= dx * tSize / d2;
  ty -= dy * tSize / d2;
  cx = (sx + tx) / 2;
  cy = (sy + ty) / 2;
  dx = tx - sx;
  dy = ty - sy;
  d2 = Math.sqrt(dx * dx + dy * dy);
  var textLength = context.measureText(label).width;
  if (textLength > d2) {
    var ellipsis = "…";
    label = label + ellipsis;
    textLength = context.measureText(label).width;
    while (textLength > d2 && label.length > 1) {
      label = label.slice(0, -2) + ellipsis;
      textLength = context.measureText(label).width;
    }
    if (label.length < 4) return;
  }
  var angle;
  if (dx > 0) {
    if (dy > 0) angle = Math.acos(dx / d2);
    else angle = Math.asin(dy / d2);
  } else {
    if (dy > 0) angle = Math.acos(dx / d2) + Math.PI;
    else angle = Math.asin(dx / d2) + Math.PI / 2;
  }
  context.save();
  context.translate(cx, cy);
  context.rotate(angle);
  context.fillText(label, -textLength / 2, edgeData.size / 2 + size);
  context.restore();
}
function drawDiscNodeLabel(context, data, settings) {
  if (!data.label) return;
  var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight, color = settings.labelColor.attribute ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000" : settings.labelColor.color;
  context.fillStyle = color;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}
function drawDiscNodeHover(context, data, settings) {
  var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  context.fillStyle = "#FFF";
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 8;
  context.shadowColor = "#000";
  var PADDING = 2;
  if (typeof data.label === "string") {
    var textWidth = context.measureText(data.label).width, boxWidth = Math.round(textWidth + 5), boxHeight = Math.round(size + 2 * PADDING), radius = Math.max(data.size, size / 2) + PADDING;
    var angleRadian = Math.asin(boxHeight / 2 / radius);
    var xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));
    context.beginPath();
    context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
    context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
    context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
    context.closePath();
    context.fill();
  } else {
    context.beginPath();
    context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  }
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;
  drawDiscNodeLabel(context, data, settings);
}
var SHADER_SOURCE$6 = (
  /*glsl*/
  "\nprecision highp float;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\n\nuniform float u_correctionRatio;\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float border = u_correctionRatio * 2.0;\n  float dist = length(v_diffVector) - v_radius + border;\n\n  // No antialiasing for picking mode:\n  #ifdef PICKING_MODE\n  if (dist > border)\n    gl_FragColor = transparent;\n  else\n    gl_FragColor = v_color;\n\n  #else\n  float t = 0.0;\n  if (dist > border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / border;\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n"
);
var FRAGMENT_SHADER_SOURCE$2 = SHADER_SOURCE$6;
var SHADER_SOURCE$5 = (
  /*glsl*/
  "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_position;\nattribute float a_size;\nattribute float a_angle;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_diffVector;\nvarying float v_radius;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;\n  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));\n  vec2 position = a_position + diffVector;\n  gl_Position = vec4(\n    (u_matrix * vec3(position, 1)).xy,\n    0,\n    1\n  );\n\n  v_diffVector = diffVector;\n  v_radius = size / 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n"
);
var VERTEX_SHADER_SOURCE$3 = SHADER_SOURCE$5;
var _WebGLRenderingContex$3 = WebGLRenderingContext;
var UNSIGNED_BYTE$3 = _WebGLRenderingContex$3.UNSIGNED_BYTE;
var FLOAT$3 = _WebGLRenderingContex$3.FLOAT;
var UNIFORMS$3 = ["u_sizeRatio", "u_correctionRatio", "u_matrix"];
var NodeCircleProgram = function(_NodeProgram) {
  function NodeCircleProgram2() {
    _classCallCheck(this, NodeCircleProgram2);
    return _callSuper(this, NodeCircleProgram2, arguments);
  }
  _inherits(NodeCircleProgram2, _NodeProgram);
  return _createClass(NodeCircleProgram2, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 3,
        VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$3,
        FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$2,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS: UNIFORMS$3,
        ATTRIBUTES: [{
          name: "a_position",
          size: 2,
          type: FLOAT$3
        }, {
          name: "a_size",
          size: 1,
          type: FLOAT$3
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE$3,
          normalized: true
        }],
        CONSTANT_ATTRIBUTES: [{
          name: "a_angle",
          size: 1,
          type: FLOAT$3
        }],
        CONSTANT_DATA: [[NodeCircleProgram2.ANGLE_1], [NodeCircleProgram2.ANGLE_2], [NodeCircleProgram2.ANGLE_3]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(nodeIndex, startIndex, data) {
      var array = this.array;
      var color = floatColor(data.color);
      array[startIndex++] = data.x;
      array[startIndex++] = data.y;
      array[startIndex++] = data.size;
      array[startIndex++] = color;
      array[startIndex++] = nodeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
      var u_sizeRatio = uniformLocations.u_sizeRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_matrix = uniformLocations.u_matrix;
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
    }
  }]);
}(NodeProgram);
_defineProperty(NodeCircleProgram, "ANGLE_1", 0);
_defineProperty(NodeCircleProgram, "ANGLE_2", 2 * Math.PI / 3);
_defineProperty(NodeCircleProgram, "ANGLE_3", 4 * Math.PI / 3);
var SHADER_SOURCE$4 = (
  /*glsl*/
  "\nprecision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n"
);
var FRAGMENT_SHADER_SOURCE$1 = SHADER_SOURCE$4;
var SHADER_SOURCE$3 = (
  /*glsl*/
  "\nattribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec3 a_barycentric;\n\n#ifdef PICKING_MODE\nattribute vec4 a_id;\n#else\nattribute vec4 a_color;\n#endif\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_widenessToThicknessRatio;\n\nvarying vec4 v_color;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength / u_sizeRatio, minThickness);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n  float webGLArrowHeadThickness = webGLThickness * u_widenessToThicknessRatio;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (webGLNodeRadius * unitNormal.y)\n    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadThickness * unitNormal.x)\n    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadThickness * unitNormal.x),\n\n      da * (-webGLNodeRadius * unitNormal.x)\n    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadThickness * unitNormal.y)\n    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadThickness * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n"
);
var VERTEX_SHADER_SOURCE$2 = SHADER_SOURCE$3;
var _WebGLRenderingContex$2 = WebGLRenderingContext;
var UNSIGNED_BYTE$2 = _WebGLRenderingContex$2.UNSIGNED_BYTE;
var FLOAT$2 = _WebGLRenderingContex$2.FLOAT;
var UNIFORMS$2 = ["u_matrix", "u_sizeRatio", "u_correctionRatio", "u_minEdgeThickness", "u_lengthToThicknessRatio", "u_widenessToThicknessRatio"];
var DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS = {
  extremity: "target",
  lengthToThicknessRatio: 2.5,
  widenessToThicknessRatio: 2
};
function createEdgeArrowHeadProgram(inputOptions) {
  var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS), inputOptions || {});
  return function(_EdgeProgram) {
    function EdgeArrowHeadProgram2() {
      _classCallCheck(this, EdgeArrowHeadProgram2);
      return _callSuper(this, EdgeArrowHeadProgram2, arguments);
    }
    _inherits(EdgeArrowHeadProgram2, _EdgeProgram);
    return _createClass(EdgeArrowHeadProgram2, [{
      key: "getDefinition",
      value: function getDefinition() {
        return {
          VERTICES: 3,
          VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$2,
          FRAGMENT_SHADER_SOURCE: FRAGMENT_SHADER_SOURCE$1,
          METHOD: WebGLRenderingContext.TRIANGLES,
          UNIFORMS: UNIFORMS$2,
          ATTRIBUTES: [{
            name: "a_position",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_normal",
            size: 2,
            type: FLOAT$2
          }, {
            name: "a_radius",
            size: 1,
            type: FLOAT$2
          }, {
            name: "a_color",
            size: 4,
            type: UNSIGNED_BYTE$2,
            normalized: true
          }, {
            name: "a_id",
            size: 4,
            type: UNSIGNED_BYTE$2,
            normalized: true
          }],
          CONSTANT_ATTRIBUTES: [{
            name: "a_barycentric",
            size: 3,
            type: FLOAT$2
          }],
          CONSTANT_DATA: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
        };
      }
    }, {
      key: "processVisibleItem",
      value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
        if (options.extremity === "source") {
          var _ref = [targetData, sourceData];
          sourceData = _ref[0];
          targetData = _ref[1];
        }
        var thickness = data.size || 1;
        var radius = targetData.size || 1;
        var x1 = sourceData.x;
        var y1 = sourceData.y;
        var x2 = targetData.x;
        var y2 = targetData.y;
        var color = floatColor(data.color);
        var dx = x2 - x1;
        var dy = y2 - y1;
        var len = dx * dx + dy * dy;
        var n1 = 0;
        var n2 = 0;
        if (len) {
          len = 1 / Math.sqrt(len);
          n1 = -dy * len * thickness;
          n2 = dx * len * thickness;
        }
        var array = this.array;
        array[startIndex++] = x2;
        array[startIndex++] = y2;
        array[startIndex++] = -n1;
        array[startIndex++] = -n2;
        array[startIndex++] = radius;
        array[startIndex++] = color;
        array[startIndex++] = edgeIndex;
      }
    }, {
      key: "setUniforms",
      value: function setUniforms(params, _ref2) {
        var gl = _ref2.gl, uniformLocations = _ref2.uniformLocations;
        var u_matrix = uniformLocations.u_matrix, u_sizeRatio = uniformLocations.u_sizeRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_minEdgeThickness = uniformLocations.u_minEdgeThickness, u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio, u_widenessToThicknessRatio = uniformLocations.u_widenessToThicknessRatio;
        gl.uniformMatrix3fv(u_matrix, false, params.matrix);
        gl.uniform1f(u_sizeRatio, params.sizeRatio);
        gl.uniform1f(u_correctionRatio, params.correctionRatio);
        gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
        gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
        gl.uniform1f(u_widenessToThicknessRatio, options.widenessToThicknessRatio);
      }
    }]);
  }(EdgeProgram);
}
var EdgeArrowHeadProgram = createEdgeArrowHeadProgram();
var SHADER_SOURCE$2 = (
  /*glsl*/
  "\nprecision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  // We only handle antialiasing for normal mode:\n  #ifdef PICKING_MODE\n  gl_FragColor = v_color;\n  #else\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - v_feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n  #endif\n}\n"
);
var FRAGMENT_SHADER_SOURCE = SHADER_SOURCE$2;
var SHADER_SOURCE$1 = (
  /*glsl*/
  "\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\nattribute float a_radius;\nattribute float a_radiusCoef;\n\nuniform mat3 u_matrix;\nuniform float u_zoomRatio;\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  float radius = a_radius * a_radiusCoef;\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(radius);\n  float webGLNodeRadius = direction * radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n"
);
var VERTEX_SHADER_SOURCE$1 = SHADER_SOURCE$1;
var _WebGLRenderingContex$1 = WebGLRenderingContext;
var UNSIGNED_BYTE$1 = _WebGLRenderingContex$1.UNSIGNED_BYTE;
var FLOAT$1 = _WebGLRenderingContex$1.FLOAT;
var UNIFORMS$1 = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness", "u_lengthToThicknessRatio"];
var DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS = {
  lengthToThicknessRatio: DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS.lengthToThicknessRatio
};
function createEdgeClampedProgram(inputOptions) {
  var options = _objectSpread2(_objectSpread2({}, DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS), inputOptions || {});
  return function(_EdgeProgram) {
    function EdgeClampedProgram2() {
      _classCallCheck(this, EdgeClampedProgram2);
      return _callSuper(this, EdgeClampedProgram2, arguments);
    }
    _inherits(EdgeClampedProgram2, _EdgeProgram);
    return _createClass(EdgeClampedProgram2, [{
      key: "getDefinition",
      value: function getDefinition() {
        return {
          VERTICES: 6,
          VERTEX_SHADER_SOURCE: VERTEX_SHADER_SOURCE$1,
          FRAGMENT_SHADER_SOURCE,
          METHOD: WebGLRenderingContext.TRIANGLES,
          UNIFORMS: UNIFORMS$1,
          ATTRIBUTES: [{
            name: "a_positionStart",
            size: 2,
            type: FLOAT$1
          }, {
            name: "a_positionEnd",
            size: 2,
            type: FLOAT$1
          }, {
            name: "a_normal",
            size: 2,
            type: FLOAT$1
          }, {
            name: "a_color",
            size: 4,
            type: UNSIGNED_BYTE$1,
            normalized: true
          }, {
            name: "a_id",
            size: 4,
            type: UNSIGNED_BYTE$1,
            normalized: true
          }, {
            name: "a_radius",
            size: 1,
            type: FLOAT$1
          }],
          CONSTANT_ATTRIBUTES: [
            // If 0, then position will be a_positionStart
            // If 1, then position will be a_positionEnd
            {
              name: "a_positionCoef",
              size: 1,
              type: FLOAT$1
            },
            {
              name: "a_normalCoef",
              size: 1,
              type: FLOAT$1
            },
            {
              name: "a_radiusCoef",
              size: 1,
              type: FLOAT$1
            }
          ],
          CONSTANT_DATA: [[0, 1, 0], [0, -1, 0], [1, 1, 1], [1, 1, 1], [0, -1, 0], [1, -1, -1]]
        };
      }
    }, {
      key: "processVisibleItem",
      value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
        var thickness = data.size || 1;
        var x1 = sourceData.x;
        var y1 = sourceData.y;
        var x2 = targetData.x;
        var y2 = targetData.y;
        var color = floatColor(data.color);
        var dx = x2 - x1;
        var dy = y2 - y1;
        var radius = targetData.size || 1;
        var len = dx * dx + dy * dy;
        var n1 = 0;
        var n2 = 0;
        if (len) {
          len = 1 / Math.sqrt(len);
          n1 = -dy * len * thickness;
          n2 = dx * len * thickness;
        }
        var array = this.array;
        array[startIndex++] = x1;
        array[startIndex++] = y1;
        array[startIndex++] = x2;
        array[startIndex++] = y2;
        array[startIndex++] = n1;
        array[startIndex++] = n2;
        array[startIndex++] = color;
        array[startIndex++] = edgeIndex;
        array[startIndex++] = radius;
      }
    }, {
      key: "setUniforms",
      value: function setUniforms(params, _ref) {
        var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
        var u_matrix = uniformLocations.u_matrix, u_zoomRatio = uniformLocations.u_zoomRatio, u_feather = uniformLocations.u_feather, u_pixelRatio = uniformLocations.u_pixelRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_sizeRatio = uniformLocations.u_sizeRatio, u_minEdgeThickness = uniformLocations.u_minEdgeThickness, u_lengthToThicknessRatio = uniformLocations.u_lengthToThicknessRatio;
        gl.uniformMatrix3fv(u_matrix, false, params.matrix);
        gl.uniform1f(u_zoomRatio, params.zoomRatio);
        gl.uniform1f(u_sizeRatio, params.sizeRatio);
        gl.uniform1f(u_correctionRatio, params.correctionRatio);
        gl.uniform1f(u_pixelRatio, params.pixelRatio);
        gl.uniform1f(u_feather, params.antiAliasingFeather);
        gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
        gl.uniform1f(u_lengthToThicknessRatio, options.lengthToThicknessRatio);
      }
    }]);
  }(EdgeProgram);
}
var EdgeClampedProgram = createEdgeClampedProgram();
function createEdgeArrowProgram(inputOptions) {
  return createEdgeCompoundProgram([createEdgeClampedProgram(inputOptions), createEdgeArrowHeadProgram(inputOptions)]);
}
var EdgeArrowProgram = createEdgeArrowProgram();
var EdgeArrowProgram$1 = EdgeArrowProgram;
var SHADER_SOURCE = (
  /*glsl*/
  `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_normal;
attribute float a_normalCoef;
attribute vec2 a_positionStart;
attribute vec2 a_positionEnd;
attribute float a_positionCoef;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_zoomRatio;
uniform float u_pixelRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_feather;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  vec2 normal = a_normal * a_normalCoef;
  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;

  float normalLength = length(normal);
  vec2 unitNormal = normal / normalLength;

  // We require edges to be at least "minThickness" pixels thick *on screen*
  // (so we need to compensate the size ratio):
  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);

  // Then, we need to retrieve the normalized thickness of the edge in the WebGL
  // referential (in a ([0, 1], [0, 1]) space), using our "magic" correction
  // ratio:
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Here is the proper position of the vertex
  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);

  // For the fragment shader though, we need a thickness that takes the "magic"
  // correction ratio into account (as in webGLThickness), but so that the
  // antialiasing effect does not depend on the zoom level. So here's yet
  // another thickness version:
  v_thickness = webGLThickness / u_zoomRatio;

  v_normal = unitNormal;

  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`
);
var VERTEX_SHADER_SOURCE = SHADER_SOURCE;
var _WebGLRenderingContex = WebGLRenderingContext;
var UNSIGNED_BYTE = _WebGLRenderingContex.UNSIGNED_BYTE;
var FLOAT = _WebGLRenderingContex.FLOAT;
var UNIFORMS = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness"];
var EdgeRectangleProgram = function(_EdgeProgram) {
  function EdgeRectangleProgram2() {
    _classCallCheck(this, EdgeRectangleProgram2);
    return _callSuper(this, EdgeRectangleProgram2, arguments);
  }
  _inherits(EdgeRectangleProgram2, _EdgeProgram);
  return _createClass(EdgeRectangleProgram2, [{
    key: "getDefinition",
    value: function getDefinition() {
      return {
        VERTICES: 6,
        VERTEX_SHADER_SOURCE,
        FRAGMENT_SHADER_SOURCE,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS,
        ATTRIBUTES: [{
          name: "a_positionStart",
          size: 2,
          type: FLOAT
        }, {
          name: "a_positionEnd",
          size: 2,
          type: FLOAT
        }, {
          name: "a_normal",
          size: 2,
          type: FLOAT
        }, {
          name: "a_color",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }, {
          name: "a_id",
          size: 4,
          type: UNSIGNED_BYTE,
          normalized: true
        }],
        CONSTANT_ATTRIBUTES: [
          // If 0, then position will be a_positionStart
          // If 2, then position will be a_positionEnd
          {
            name: "a_positionCoef",
            size: 1,
            type: FLOAT
          },
          {
            name: "a_normalCoef",
            size: 1,
            type: FLOAT
          }
        ],
        CONSTANT_DATA: [[0, 1], [0, -1], [1, 1], [1, 1], [0, -1], [1, -1]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function processVisibleItem(edgeIndex, startIndex, sourceData, targetData, data) {
      var thickness = data.size || 1;
      var x1 = sourceData.x;
      var y1 = sourceData.y;
      var x2 = targetData.x;
      var y2 = targetData.y;
      var color = floatColor(data.color);
      var dx = x2 - x1;
      var dy = y2 - y1;
      var len = dx * dx + dy * dy;
      var n1 = 0;
      var n2 = 0;
      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len * thickness;
        n2 = dx * len * thickness;
      }
      var array = this.array;
      array[startIndex++] = x1;
      array[startIndex++] = y1;
      array[startIndex++] = x2;
      array[startIndex++] = y2;
      array[startIndex++] = n1;
      array[startIndex++] = n2;
      array[startIndex++] = color;
      array[startIndex++] = edgeIndex;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(params, _ref) {
      var gl = _ref.gl, uniformLocations = _ref.uniformLocations;
      var u_matrix = uniformLocations.u_matrix, u_zoomRatio = uniformLocations.u_zoomRatio, u_feather = uniformLocations.u_feather, u_pixelRatio = uniformLocations.u_pixelRatio, u_correctionRatio = uniformLocations.u_correctionRatio, u_sizeRatio = uniformLocations.u_sizeRatio, u_minEdgeThickness = uniformLocations.u_minEdgeThickness;
      gl.uniformMatrix3fv(u_matrix, false, params.matrix);
      gl.uniform1f(u_zoomRatio, params.zoomRatio);
      gl.uniform1f(u_sizeRatio, params.sizeRatio);
      gl.uniform1f(u_correctionRatio, params.correctionRatio);
      gl.uniform1f(u_pixelRatio, params.pixelRatio);
      gl.uniform1f(u_feather, params.antiAliasingFeather);
      gl.uniform1f(u_minEdgeThickness, params.minEdgeThickness);
    }
  }]);
}(EdgeProgram);

// node_modules/sigma/types/dist/sigma-types.esm.js
var import_events = __toESM(require_events());
var TypedEventEmitter = function(_ref) {
  function TypedEventEmitter2() {
    var _this;
    _classCallCheck(this, TypedEventEmitter2);
    _this = _callSuper(this, TypedEventEmitter2);
    _this.rawEmitter = _this;
    return _this;
  }
  _inherits(TypedEventEmitter2, _ref);
  return _createClass(TypedEventEmitter2);
}(import_events.EventEmitter);

// node_modules/sigma/dist/normalization-be445518.esm.js
var import_is_graph = __toESM(require_is_graph());
var linear = function linear2(k2) {
  return k2;
};
var quadraticIn = function quadraticIn2(k2) {
  return k2 * k2;
};
var quadraticOut = function quadraticOut2(k2) {
  return k2 * (2 - k2);
};
var quadraticInOut = function quadraticInOut2(k2) {
  if ((k2 *= 2) < 1) return 0.5 * k2 * k2;
  return -0.5 * (--k2 * (k2 - 2) - 1);
};
var cubicIn = function cubicIn2(k2) {
  return k2 * k2 * k2;
};
var cubicOut = function cubicOut2(k2) {
  return --k2 * k2 * k2 + 1;
};
var cubicInOut = function cubicInOut2(k2) {
  if ((k2 *= 2) < 1) return 0.5 * k2 * k2 * k2;
  return 0.5 * ((k2 -= 2) * k2 * k2 + 2);
};
var easings = {
  linear,
  quadraticIn,
  quadraticOut,
  quadraticInOut,
  cubicIn,
  cubicOut,
  cubicInOut
};
var ANIMATE_DEFAULTS = {
  easing: "quadraticInOut",
  duration: 150
};
function identity() {
  return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
}
function scale(m, x2, y2) {
  m[0] = x2;
  m[4] = typeof y2 === "number" ? y2 : x2;
  return m;
}
function rotate(m, r2) {
  var s2 = Math.sin(r2), c2 = Math.cos(r2);
  m[0] = c2;
  m[1] = s2;
  m[3] = -s2;
  m[4] = c2;
  return m;
}
function translate(m, x2, y2) {
  m[6] = x2;
  m[7] = y2;
  return m;
}
function multiply(a2, b2) {
  var a00 = a2[0], a01 = a2[1], a02 = a2[2];
  var a10 = a2[3], a11 = a2[4], a12 = a2[5];
  var a20 = a2[6], a21 = a2[7], a22 = a2[8];
  var b00 = b2[0], b01 = b2[1], b02 = b2[2];
  var b10 = b2[3], b11 = b2[4], b12 = b2[5];
  var b20 = b2[6], b21 = b2[7], b22 = b2[8];
  a2[0] = b00 * a00 + b01 * a10 + b02 * a20;
  a2[1] = b00 * a01 + b01 * a11 + b02 * a21;
  a2[2] = b00 * a02 + b01 * a12 + b02 * a22;
  a2[3] = b10 * a00 + b11 * a10 + b12 * a20;
  a2[4] = b10 * a01 + b11 * a11 + b12 * a21;
  a2[5] = b10 * a02 + b11 * a12 + b12 * a22;
  a2[6] = b20 * a00 + b21 * a10 + b22 * a20;
  a2[7] = b20 * a01 + b21 * a11 + b22 * a21;
  a2[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return a2;
}
function multiplyVec2(a2, b2) {
  var z2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  var a00 = a2[0];
  var a01 = a2[1];
  var a10 = a2[3];
  var a11 = a2[4];
  var a20 = a2[6];
  var a21 = a2[7];
  var b0 = b2.x;
  var b1 = b2.y;
  return {
    x: b0 * a00 + b1 * a10 + a20 * z2,
    y: b0 * a01 + b1 * a11 + a21 * z2
  };
}
function getCorrectionRatio(viewportDimensions, graphDimensions) {
  var viewportRatio = viewportDimensions.height / viewportDimensions.width;
  var graphRatio = graphDimensions.height / graphDimensions.width;
  if (viewportRatio < 1 && graphRatio > 1 || viewportRatio > 1 && graphRatio < 1) {
    return 1;
  }
  return Math.min(Math.max(graphRatio, 1 / graphRatio), Math.max(1 / viewportRatio, viewportRatio));
}
function matrixFromCamera(state, viewportDimensions, graphDimensions, padding, inverse) {
  var angle = state.angle, ratio = state.ratio, x2 = state.x, y2 = state.y;
  var width = viewportDimensions.width, height = viewportDimensions.height;
  var matrix = identity();
  var smallestDimension = Math.min(width, height) - 2 * padding;
  var correctionRatio = getCorrectionRatio(viewportDimensions, graphDimensions);
  if (!inverse) {
    multiply(matrix, scale(identity(), 2 * (smallestDimension / width) * correctionRatio, 2 * (smallestDimension / height) * correctionRatio));
    multiply(matrix, rotate(identity(), -angle));
    multiply(matrix, scale(identity(), 1 / ratio));
    multiply(matrix, translate(identity(), -x2, -y2));
  } else {
    multiply(matrix, translate(identity(), x2, y2));
    multiply(matrix, scale(identity(), ratio));
    multiply(matrix, rotate(identity(), angle));
    multiply(matrix, scale(identity(), width / smallestDimension / 2 / correctionRatio, height / smallestDimension / 2 / correctionRatio));
  }
  return matrix;
}
function getMatrixImpact(matrix, cameraState, viewportDimensions) {
  var _multiplyVec = multiplyVec2(matrix, {
    x: Math.cos(cameraState.angle),
    y: Math.sin(cameraState.angle)
  }, 0), x2 = _multiplyVec.x, y2 = _multiplyVec.y;
  return 1 / Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)) / viewportDimensions.width;
}
function graphExtent(graph) {
  if (!graph.order) return {
    x: [0, 1],
    y: [0, 1]
  };
  var xMin = Infinity;
  var xMax = -Infinity;
  var yMin = Infinity;
  var yMax = -Infinity;
  graph.forEachNode(function(_2, attr) {
    var x2 = attr.x, y2 = attr.y;
    if (x2 < xMin) xMin = x2;
    if (x2 > xMax) xMax = x2;
    if (y2 < yMin) yMin = y2;
    if (y2 > yMax) yMax = y2;
  });
  return {
    x: [xMin, xMax],
    y: [yMin, yMax]
  };
}
function validateGraph(graph) {
  if (!(0, import_is_graph.default)(graph)) throw new Error("Sigma: invalid graph instance.");
  graph.forEachNode(function(key, attributes) {
    if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) {
      throw new Error("Sigma: Coordinates of node ".concat(key, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
    }
  });
}
function createElement(tag, style, attributes) {
  var element = document.createElement(tag);
  if (style) {
    for (var k2 in style) {
      element.style[k2] = style[k2];
    }
  }
  if (attributes) {
    for (var _k in attributes) {
      element.setAttribute(_k, attributes[_k]);
    }
  }
  return element;
}
function getPixelRatio() {
  if (typeof window.devicePixelRatio !== "undefined") return window.devicePixelRatio;
  return 1;
}
function zIndexOrdering(_extent, getter, elements) {
  return elements.sort(function(a2, b2) {
    var zA = getter(a2) || 0, zB = getter(b2) || 0;
    if (zA < zB) return -1;
    if (zA > zB) return 1;
    return 0;
  });
}
function createNormalizationFunction(extent) {
  var _extent$x = _slicedToArray(extent.x, 2), minX = _extent$x[0], maxX = _extent$x[1], _extent$y = _slicedToArray(extent.y, 2), minY = _extent$y[0], maxY = _extent$y[1];
  var ratio = Math.max(maxX - minX, maxY - minY), dX = (maxX + minX) / 2, dY = (maxY + minY) / 2;
  if (ratio === 0 || Math.abs(ratio) === Infinity || isNaN(ratio)) ratio = 1;
  if (isNaN(dX)) dX = 0;
  if (isNaN(dY)) dY = 0;
  var fn = function fn2(data) {
    return {
      x: 0.5 + (data.x - dX) / ratio,
      y: 0.5 + (data.y - dY) / ratio
    };
  };
  fn.applyTo = function(data) {
    data.x = 0.5 + (data.x - dX) / ratio;
    data.y = 0.5 + (data.y - dY) / ratio;
  };
  fn.inverse = function(data) {
    return {
      x: dX + ratio * (data.x - 0.5),
      y: dY + ratio * (data.y - 0.5)
    };
  };
  fn.ratio = ratio;
  return fn;
}

// node_modules/sigma/dist/data-11df7124.esm.js
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function extend(array, values) {
  var l2 = values.size;
  if (l2 === 0) return;
  var l1 = array.length;
  array.length += l2;
  var i2 = 0;
  values.forEach(function(value) {
    array[l1 + i2] = value;
    i2++;
  });
}
function assign(target) {
  target = target || {};
  for (var i2 = 0, l2 = arguments.length <= 1 ? 0 : arguments.length - 1; i2 < l2; i2++) {
    var o2 = i2 + 1 < 1 || arguments.length <= i2 + 1 ? void 0 : arguments[i2 + 1];
    if (!o2) continue;
    Object.assign(target, o2);
  }
  return target;
}

// node_modules/sigma/settings/dist/sigma-settings.esm.js
var DEFAULT_SETTINGS = {
  // Performance
  hideEdgesOnMove: false,
  hideLabelsOnMove: false,
  renderLabels: true,
  renderEdgeLabels: false,
  enableEdgeEvents: false,
  // Component rendering
  defaultNodeColor: "#999",
  defaultNodeType: "circle",
  defaultEdgeColor: "#ccc",
  defaultEdgeType: "line",
  labelFont: "Arial",
  labelSize: 14,
  labelWeight: "normal",
  labelColor: {
    color: "#000"
  },
  edgeLabelFont: "Arial",
  edgeLabelSize: 14,
  edgeLabelWeight: "normal",
  edgeLabelColor: {
    attribute: "color"
  },
  stagePadding: 30,
  defaultDrawEdgeLabel: drawStraightEdgeLabel,
  defaultDrawNodeLabel: drawDiscNodeLabel,
  defaultDrawNodeHover: drawDiscNodeHover,
  minEdgeThickness: 1.7,
  antiAliasingFeather: 1,
  // Mouse and touch settings
  dragTimeout: 100,
  draggedEventsTolerance: 3,
  inertiaDuration: 200,
  inertiaRatio: 3,
  zoomDuration: 250,
  zoomingRatio: 1.7,
  doubleClickTimeout: 300,
  doubleClickZoomingRatio: 2.2,
  doubleClickZoomingDuration: 200,
  tapMoveTolerance: 10,
  // Size and scaling
  zoomToSizeRatioFunction: Math.sqrt,
  itemSizesReference: "screen",
  autoRescale: true,
  autoCenter: true,
  // Labels
  labelDensity: 1,
  labelGridCellSize: 100,
  labelRenderedSizeThreshold: 6,
  // Reducers
  nodeReducer: null,
  edgeReducer: null,
  // Features
  zIndex: false,
  minCameraRatio: null,
  maxCameraRatio: null,
  enableCameraZooming: true,
  enableCameraPanning: true,
  enableCameraRotation: true,
  cameraPanBoundaries: null,
  // Lifecycle
  allowInvalidContainer: false,
  // Program classes
  nodeProgramClasses: {},
  nodeHoverProgramClasses: {},
  edgeProgramClasses: {}
};
var DEFAULT_NODE_PROGRAM_CLASSES = {
  circle: NodeCircleProgram
};
var DEFAULT_EDGE_PROGRAM_CLASSES = {
  arrow: EdgeArrowProgram$1,
  line: EdgeRectangleProgram
};
function validateSettings(settings) {
  if (typeof settings.labelDensity !== "number" || settings.labelDensity < 0) {
    throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
  }
  var minCameraRatio = settings.minCameraRatio, maxCameraRatio = settings.maxCameraRatio;
  if (typeof minCameraRatio === "number" && typeof maxCameraRatio === "number" && maxCameraRatio < minCameraRatio) {
    throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
  }
}
function resolveSettings(settings) {
  var resolvedSettings = assign({}, DEFAULT_SETTINGS, settings);
  resolvedSettings.nodeProgramClasses = assign({}, DEFAULT_NODE_PROGRAM_CLASSES, resolvedSettings.nodeProgramClasses);
  resolvedSettings.edgeProgramClasses = assign({}, DEFAULT_EDGE_PROGRAM_CLASSES, resolvedSettings.edgeProgramClasses);
  return resolvedSettings;
}

// node_modules/sigma/dist/sigma.esm.js
var import_events2 = __toESM(require_events());
var import_is_graph2 = __toESM(require_is_graph());
var DEFAULT_ZOOMING_RATIO = 1.5;
var Camera = function(_TypedEventEmitter) {
  function Camera2() {
    var _this;
    _classCallCheck(this, Camera2);
    _this = _callSuper(this, Camera2);
    _defineProperty(_this, "x", 0.5);
    _defineProperty(_this, "y", 0.5);
    _defineProperty(_this, "angle", 0);
    _defineProperty(_this, "ratio", 1);
    _defineProperty(_this, "minRatio", null);
    _defineProperty(_this, "maxRatio", null);
    _defineProperty(_this, "enabledZooming", true);
    _defineProperty(_this, "enabledPanning", true);
    _defineProperty(_this, "enabledRotation", true);
    _defineProperty(_this, "clean", null);
    _defineProperty(_this, "nextFrame", null);
    _defineProperty(_this, "previousState", null);
    _defineProperty(_this, "enabled", true);
    _this.previousState = _this.getState();
    return _this;
  }
  _inherits(Camera2, _TypedEventEmitter);
  return _createClass(Camera2, [{
    key: "enable",
    value: (
      /**
       * Method used to enable the camera.
       */
      function enable() {
        this.enabled = true;
        return this;
      }
    )
    /**
     * Method used to disable the camera.
     */
  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
      return this;
    }
    /**
     * Method used to retrieve the camera's current state.
     */
  }, {
    key: "getState",
    value: function getState() {
      return {
        x: this.x,
        y: this.y,
        angle: this.angle,
        ratio: this.ratio
      };
    }
    /**
     * Method used to check whether the camera has the given state.
     */
  }, {
    key: "hasState",
    value: function hasState(state) {
      return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
    }
    /**
     * Method used to retrieve the camera's previous state.
     */
  }, {
    key: "getPreviousState",
    value: function getPreviousState() {
      var state = this.previousState;
      if (!state) return null;
      return {
        x: state.x,
        y: state.y,
        angle: state.angle,
        ratio: state.ratio
      };
    }
    /**
     * Method used to check minRatio and maxRatio values.
     */
  }, {
    key: "getBoundedRatio",
    value: function getBoundedRatio(ratio) {
      var r2 = ratio;
      if (typeof this.minRatio === "number") r2 = Math.max(r2, this.minRatio);
      if (typeof this.maxRatio === "number") r2 = Math.min(r2, this.maxRatio);
      return r2;
    }
    /**
     * Method used to check various things to return a legit state candidate.
     */
  }, {
    key: "validateState",
    value: function validateState(state) {
      var validatedState = {};
      if (this.enabledPanning && typeof state.x === "number") validatedState.x = state.x;
      if (this.enabledPanning && typeof state.y === "number") validatedState.y = state.y;
      if (this.enabledZooming && typeof state.ratio === "number") validatedState.ratio = this.getBoundedRatio(state.ratio);
      if (this.enabledRotation && typeof state.angle === "number") validatedState.angle = state.angle;
      return this.clean ? this.clean(_objectSpread2(_objectSpread2({}, this.getState()), validatedState)) : validatedState;
    }
    /**
     * Method used to check whether the camera is currently being animated.
     */
  }, {
    key: "isAnimated",
    value: function isAnimated() {
      return !!this.nextFrame;
    }
    /**
     * Method used to set the camera's state.
     */
  }, {
    key: "setState",
    value: function setState(state) {
      if (!this.enabled) return this;
      this.previousState = this.getState();
      var validState = this.validateState(state);
      if (typeof validState.x === "number") this.x = validState.x;
      if (typeof validState.y === "number") this.y = validState.y;
      if (typeof validState.ratio === "number") this.ratio = validState.ratio;
      if (typeof validState.angle === "number") this.angle = validState.angle;
      if (!this.hasState(this.previousState)) this.emit("updated", this.getState());
      return this;
    }
    /**
     * Method used to update the camera's state using a function.
     */
  }, {
    key: "updateState",
    value: function updateState(updater) {
      this.setState(updater(this.getState()));
      return this;
    }
    /**
     * Method used to animate the camera.
     */
  }, {
    key: "animate",
    value: function animate(state) {
      var _this2 = this;
      var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var callback = arguments.length > 2 ? arguments[2] : void 0;
      if (!callback) return new Promise(function(resolve) {
        return _this2.animate(state, opts, resolve);
      });
      if (!this.enabled) return;
      var options = _objectSpread2(_objectSpread2({}, ANIMATE_DEFAULTS), opts);
      var validState = this.validateState(state);
      var easing = typeof options.easing === "function" ? options.easing : easings[options.easing];
      var start = Date.now(), initialState = this.getState();
      var _fn = function fn() {
        var t2 = (Date.now() - start) / options.duration;
        if (t2 >= 1) {
          _this2.nextFrame = null;
          _this2.setState(validState);
          if (_this2.animationCallback) {
            _this2.animationCallback.call(null);
            _this2.animationCallback = void 0;
          }
          return;
        }
        var coefficient = easing(t2);
        var newState = {};
        if (typeof validState.x === "number") newState.x = initialState.x + (validState.x - initialState.x) * coefficient;
        if (typeof validState.y === "number") newState.y = initialState.y + (validState.y - initialState.y) * coefficient;
        if (_this2.enabledRotation && typeof validState.angle === "number") newState.angle = initialState.angle + (validState.angle - initialState.angle) * coefficient;
        if (typeof validState.ratio === "number") newState.ratio = initialState.ratio + (validState.ratio - initialState.ratio) * coefficient;
        _this2.setState(newState);
        _this2.nextFrame = requestAnimationFrame(_fn);
      };
      if (this.nextFrame) {
        cancelAnimationFrame(this.nextFrame);
        if (this.animationCallback) this.animationCallback.call(null);
        this.nextFrame = requestAnimationFrame(_fn);
      } else {
        _fn();
      }
      this.animationCallback = callback;
    }
    /**
     * Method used to zoom the camera.
     */
  }, {
    key: "animatedZoom",
    value: function animatedZoom(factorOrOptions) {
      if (!factorOrOptions) return this.animate({
        ratio: this.ratio / DEFAULT_ZOOMING_RATIO
      });
      if (typeof factorOrOptions === "number") return this.animate({
        ratio: this.ratio / factorOrOptions
      });
      return this.animate({
        ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
      }, factorOrOptions);
    }
    /**
     * Method used to unzoom the camera.
     */
  }, {
    key: "animatedUnzoom",
    value: function animatedUnzoom(factorOrOptions) {
      if (!factorOrOptions) return this.animate({
        ratio: this.ratio * DEFAULT_ZOOMING_RATIO
      });
      if (typeof factorOrOptions === "number") return this.animate({
        ratio: this.ratio * factorOrOptions
      });
      return this.animate({
        ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
      }, factorOrOptions);
    }
    /**
     * Method used to reset the camera.
     */
  }, {
    key: "animatedReset",
    value: function animatedReset(options) {
      return this.animate({
        x: 0.5,
        y: 0.5,
        ratio: 1,
        angle: 0
      }, options);
    }
    /**
     * Returns a new Camera instance, with the same state as the current camera.
     */
  }, {
    key: "copy",
    value: function copy() {
      return Camera2.from(this.getState());
    }
  }], [{
    key: "from",
    value: function from(state) {
      var camera = new Camera2();
      return camera.setState(state);
    }
  }]);
}(TypedEventEmitter);
function getPosition(e2, dom) {
  var bbox = dom.getBoundingClientRect();
  return {
    x: e2.clientX - bbox.left,
    y: e2.clientY - bbox.top
  };
}
function getMouseCoords(e2, dom) {
  var res = _objectSpread2(_objectSpread2({}, getPosition(e2, dom)), {}, {
    sigmaDefaultPrevented: false,
    preventSigmaDefault: function preventSigmaDefault() {
      res.sigmaDefaultPrevented = true;
    },
    original: e2
  });
  return res;
}
function cleanMouseCoords(e2) {
  var res = "x" in e2 ? e2 : _objectSpread2(_objectSpread2({}, e2.touches[0] || e2.previousTouches[0]), {}, {
    original: e2.original,
    sigmaDefaultPrevented: e2.sigmaDefaultPrevented,
    preventSigmaDefault: function preventSigmaDefault() {
      e2.sigmaDefaultPrevented = true;
      res.sigmaDefaultPrevented = true;
    }
  });
  return res;
}
function getWheelCoords(e2, dom) {
  return _objectSpread2(_objectSpread2({}, getMouseCoords(e2, dom)), {}, {
    delta: getWheelDelta(e2)
  });
}
var MAX_TOUCHES = 2;
function getTouchesArray(touches) {
  var arr = [];
  for (var i2 = 0, l2 = Math.min(touches.length, MAX_TOUCHES); i2 < l2; i2++) arr.push(touches[i2]);
  return arr;
}
function getTouchCoords(e2, previousTouches, dom) {
  var res = {
    touches: getTouchesArray(e2.touches).map(function(touch) {
      return getPosition(touch, dom);
    }),
    previousTouches: previousTouches.map(function(touch) {
      return getPosition(touch, dom);
    }),
    sigmaDefaultPrevented: false,
    preventSigmaDefault: function preventSigmaDefault() {
      res.sigmaDefaultPrevented = true;
    },
    original: e2
  };
  return res;
}
function getWheelDelta(e2) {
  if (typeof e2.deltaY !== "undefined") return e2.deltaY * -3 / 360;
  if (typeof e2.detail !== "undefined") return e2.detail / -9;
  throw new Error("Captor: could not extract delta from event.");
}
var Captor = function(_TypedEventEmitter) {
  function Captor2(container, renderer) {
    var _this;
    _classCallCheck(this, Captor2);
    _this = _callSuper(this, Captor2);
    _this.container = container;
    _this.renderer = renderer;
    return _this;
  }
  _inherits(Captor2, _TypedEventEmitter);
  return _createClass(Captor2);
}(TypedEventEmitter);
var MOUSE_SETTINGS_KEYS = ["doubleClickTimeout", "doubleClickZoomingDuration", "doubleClickZoomingRatio", "dragTimeout", "draggedEventsTolerance", "inertiaDuration", "inertiaRatio", "zoomDuration", "zoomingRatio"];
var DEFAULT_MOUSE_SETTINGS = MOUSE_SETTINGS_KEYS.reduce(function(iter, key) {
  return _objectSpread2(_objectSpread2({}, iter), {}, _defineProperty({}, key, DEFAULT_SETTINGS[key]));
}, {});
var MouseCaptor = function(_Captor) {
  function MouseCaptor2(container, renderer) {
    var _this;
    _classCallCheck(this, MouseCaptor2);
    _this = _callSuper(this, MouseCaptor2, [container, renderer]);
    _defineProperty(_this, "enabled", true);
    _defineProperty(_this, "draggedEvents", 0);
    _defineProperty(_this, "downStartTime", null);
    _defineProperty(_this, "lastMouseX", null);
    _defineProperty(_this, "lastMouseY", null);
    _defineProperty(_this, "isMouseDown", false);
    _defineProperty(_this, "isMoving", false);
    _defineProperty(_this, "movingTimeout", null);
    _defineProperty(_this, "startCameraState", null);
    _defineProperty(_this, "clicks", 0);
    _defineProperty(_this, "doubleClickTimeout", null);
    _defineProperty(_this, "currentWheelDirection", 0);
    _defineProperty(_this, "settings", DEFAULT_MOUSE_SETTINGS);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleRightClick = _this.handleRightClick.bind(_this);
    _this.handleDown = _this.handleDown.bind(_this);
    _this.handleUp = _this.handleUp.bind(_this);
    _this.handleMove = _this.handleMove.bind(_this);
    _this.handleWheel = _this.handleWheel.bind(_this);
    _this.handleLeave = _this.handleLeave.bind(_this);
    _this.handleEnter = _this.handleEnter.bind(_this);
    container.addEventListener("click", _this.handleClick, {
      capture: false
    });
    container.addEventListener("contextmenu", _this.handleRightClick, {
      capture: false
    });
    container.addEventListener("mousedown", _this.handleDown, {
      capture: false
    });
    container.addEventListener("wheel", _this.handleWheel, {
      capture: false
    });
    container.addEventListener("mouseleave", _this.handleLeave, {
      capture: false
    });
    container.addEventListener("mouseenter", _this.handleEnter, {
      capture: false
    });
    document.addEventListener("mousemove", _this.handleMove, {
      capture: false
    });
    document.addEventListener("mouseup", _this.handleUp, {
      capture: false
    });
    return _this;
  }
  _inherits(MouseCaptor2, _Captor);
  return _createClass(MouseCaptor2, [{
    key: "kill",
    value: function kill() {
      var container = this.container;
      container.removeEventListener("click", this.handleClick);
      container.removeEventListener("contextmenu", this.handleRightClick);
      container.removeEventListener("mousedown", this.handleDown);
      container.removeEventListener("wheel", this.handleWheel);
      container.removeEventListener("mouseleave", this.handleLeave);
      container.removeEventListener("mouseenter", this.handleEnter);
      document.removeEventListener("mousemove", this.handleMove);
      document.removeEventListener("mouseup", this.handleUp);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e2) {
      var _this2 = this;
      if (!this.enabled) return;
      this.clicks++;
      if (this.clicks === 2) {
        this.clicks = 0;
        if (typeof this.doubleClickTimeout === "number") {
          clearTimeout(this.doubleClickTimeout);
          this.doubleClickTimeout = null;
        }
        return this.handleDoubleClick(e2);
      }
      setTimeout(function() {
        _this2.clicks = 0;
        _this2.doubleClickTimeout = null;
      }, this.settings.doubleClickTimeout);
      if (this.draggedEvents < this.settings.draggedEventsTolerance) this.emit("click", getMouseCoords(e2, this.container));
    }
  }, {
    key: "handleRightClick",
    value: function handleRightClick(e2) {
      if (!this.enabled) return;
      this.emit("rightClick", getMouseCoords(e2, this.container));
    }
  }, {
    key: "handleDoubleClick",
    value: function handleDoubleClick(e2) {
      if (!this.enabled) return;
      e2.preventDefault();
      e2.stopPropagation();
      var mouseCoords = getMouseCoords(e2, this.container);
      this.emit("doubleClick", mouseCoords);
      if (mouseCoords.sigmaDefaultPrevented) return;
      var camera = this.renderer.getCamera();
      var newRatio = camera.getBoundedRatio(camera.getState().ratio / this.settings.doubleClickZoomingRatio);
      camera.animate(this.renderer.getViewportZoomedState(getPosition(e2, this.container), newRatio), {
        easing: "quadraticInOut",
        duration: this.settings.doubleClickZoomingDuration
      });
    }
  }, {
    key: "handleDown",
    value: function handleDown(e2) {
      if (!this.enabled) return;
      if (e2.button === 0) {
        this.startCameraState = this.renderer.getCamera().getState();
        var _getPosition = getPosition(e2, this.container), x2 = _getPosition.x, y2 = _getPosition.y;
        this.lastMouseX = x2;
        this.lastMouseY = y2;
        this.draggedEvents = 0;
        this.downStartTime = Date.now();
        this.isMouseDown = true;
      }
      this.emit("mousedown", getMouseCoords(e2, this.container));
    }
  }, {
    key: "handleUp",
    value: function handleUp(e2) {
      var _this3 = this;
      if (!this.enabled || !this.isMouseDown) return;
      var camera = this.renderer.getCamera();
      this.isMouseDown = false;
      if (typeof this.movingTimeout === "number") {
        clearTimeout(this.movingTimeout);
        this.movingTimeout = null;
      }
      var _getPosition2 = getPosition(e2, this.container), x2 = _getPosition2.x, y2 = _getPosition2.y;
      var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || {
        x: 0,
        y: 0
      };
      if (this.isMoving) {
        camera.animate({
          x: cameraState.x + this.settings.inertiaRatio * (cameraState.x - previousCameraState.x),
          y: cameraState.y + this.settings.inertiaRatio * (cameraState.y - previousCameraState.y)
        }, {
          duration: this.settings.inertiaDuration,
          easing: "quadraticOut"
        });
      } else if (this.lastMouseX !== x2 || this.lastMouseY !== y2) {
        camera.setState({
          x: cameraState.x,
          y: cameraState.y
        });
      }
      this.isMoving = false;
      setTimeout(function() {
        var shouldRefresh = _this3.draggedEvents > 0;
        _this3.draggedEvents = 0;
        if (shouldRefresh && _this3.renderer.getSetting("hideEdgesOnMove")) _this3.renderer.refresh();
      }, 0);
      this.emit("mouseup", getMouseCoords(e2, this.container));
    }
  }, {
    key: "handleMove",
    value: function handleMove(e2) {
      var _this4 = this;
      if (!this.enabled) return;
      var mouseCoords = getMouseCoords(e2, this.container);
      this.emit("mousemovebody", mouseCoords);
      if (e2.target === this.container || e2.composedPath()[0] === this.container) {
        this.emit("mousemove", mouseCoords);
      }
      if (mouseCoords.sigmaDefaultPrevented) return;
      if (this.isMouseDown) {
        this.isMoving = true;
        this.draggedEvents++;
        if (typeof this.movingTimeout === "number") {
          clearTimeout(this.movingTimeout);
        }
        this.movingTimeout = window.setTimeout(function() {
          _this4.movingTimeout = null;
          _this4.isMoving = false;
        }, this.settings.dragTimeout);
        var camera = this.renderer.getCamera();
        var _getPosition3 = getPosition(e2, this.container), eX = _getPosition3.x, eY = _getPosition3.y;
        var lastMouse = this.renderer.viewportToFramedGraph({
          x: this.lastMouseX,
          y: this.lastMouseY
        });
        var mouse = this.renderer.viewportToFramedGraph({
          x: eX,
          y: eY
        });
        var offsetX = lastMouse.x - mouse.x, offsetY = lastMouse.y - mouse.y;
        var cameraState = camera.getState();
        var x2 = cameraState.x + offsetX, y2 = cameraState.y + offsetY;
        camera.setState({
          x: x2,
          y: y2
        });
        this.lastMouseX = eX;
        this.lastMouseY = eY;
        e2.preventDefault();
        e2.stopPropagation();
      }
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(e2) {
      this.emit("mouseleave", getMouseCoords(e2, this.container));
    }
  }, {
    key: "handleEnter",
    value: function handleEnter(e2) {
      this.emit("mouseenter", getMouseCoords(e2, this.container));
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e2) {
      var _this5 = this;
      var camera = this.renderer.getCamera();
      if (!this.enabled || !camera.enabledZooming) return;
      var delta = getWheelDelta(e2);
      if (!delta) return;
      var wheelCoords = getWheelCoords(e2, this.container);
      this.emit("wheel", wheelCoords);
      if (wheelCoords.sigmaDefaultPrevented) {
        e2.preventDefault();
        e2.stopPropagation();
        return;
      }
      var currentRatio = camera.getState().ratio;
      var ratioDiff = delta > 0 ? 1 / this.settings.zoomingRatio : this.settings.zoomingRatio;
      var newRatio = camera.getBoundedRatio(currentRatio * ratioDiff);
      var wheelDirection = delta > 0 ? 1 : -1;
      var now = Date.now();
      if (currentRatio === newRatio) return;
      e2.preventDefault();
      e2.stopPropagation();
      if (this.currentWheelDirection === wheelDirection && this.lastWheelTriggerTime && now - this.lastWheelTriggerTime < this.settings.zoomDuration / 5) {
        return;
      }
      camera.animate(this.renderer.getViewportZoomedState(getPosition(e2, this.container), newRatio), {
        easing: "quadraticOut",
        duration: this.settings.zoomDuration
      }, function() {
        _this5.currentWheelDirection = 0;
      });
      this.currentWheelDirection = wheelDirection;
      this.lastWheelTriggerTime = now;
    }
  }, {
    key: "setSettings",
    value: function setSettings(settings) {
      this.settings = settings;
    }
  }]);
}(Captor);
var TOUCH_SETTINGS_KEYS = ["dragTimeout", "inertiaDuration", "inertiaRatio", "doubleClickTimeout", "doubleClickZoomingRatio", "doubleClickZoomingDuration", "tapMoveTolerance"];
var DEFAULT_TOUCH_SETTINGS = TOUCH_SETTINGS_KEYS.reduce(function(iter, key) {
  return _objectSpread2(_objectSpread2({}, iter), {}, _defineProperty({}, key, DEFAULT_SETTINGS[key]));
}, {});
var TouchCaptor = function(_Captor) {
  function TouchCaptor2(container, renderer) {
    var _this;
    _classCallCheck(this, TouchCaptor2);
    _this = _callSuper(this, TouchCaptor2, [container, renderer]);
    _defineProperty(_this, "enabled", true);
    _defineProperty(_this, "isMoving", false);
    _defineProperty(_this, "hasMoved", false);
    _defineProperty(_this, "touchMode", 0);
    _defineProperty(_this, "startTouchesPositions", []);
    _defineProperty(_this, "lastTouches", []);
    _defineProperty(_this, "lastTap", null);
    _defineProperty(_this, "settings", DEFAULT_TOUCH_SETTINGS);
    _this.handleStart = _this.handleStart.bind(_this);
    _this.handleLeave = _this.handleLeave.bind(_this);
    _this.handleMove = _this.handleMove.bind(_this);
    container.addEventListener("touchstart", _this.handleStart, {
      capture: false
    });
    container.addEventListener("touchcancel", _this.handleLeave, {
      capture: false
    });
    document.addEventListener("touchend", _this.handleLeave, {
      capture: false,
      passive: false
    });
    document.addEventListener("touchmove", _this.handleMove, {
      capture: false,
      passive: false
    });
    return _this;
  }
  _inherits(TouchCaptor2, _Captor);
  return _createClass(TouchCaptor2, [{
    key: "kill",
    value: function kill() {
      var container = this.container;
      container.removeEventListener("touchstart", this.handleStart);
      container.removeEventListener("touchcancel", this.handleLeave);
      document.removeEventListener("touchend", this.handleLeave);
      document.removeEventListener("touchmove", this.handleMove);
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      };
    }
  }, {
    key: "handleStart",
    value: function handleStart(e2) {
      var _this2 = this;
      if (!this.enabled) return;
      e2.preventDefault();
      var touches = getTouchesArray(e2.touches);
      this.touchMode = touches.length;
      this.startCameraState = this.renderer.getCamera().getState();
      this.startTouchesPositions = touches.map(function(touch) {
        return getPosition(touch, _this2.container);
      });
      if (this.touchMode === 2) {
        var _this$startTouchesPos = _slicedToArray(this.startTouchesPositions, 2), _this$startTouchesPos2 = _this$startTouchesPos[0], x0 = _this$startTouchesPos2.x, y0 = _this$startTouchesPos2.y, _this$startTouchesPos3 = _this$startTouchesPos[1], x1 = _this$startTouchesPos3.x, y1 = _this$startTouchesPos3.y;
        this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
        this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
      }
      this.emit("touchdown", getTouchCoords(e2, this.lastTouches, this.container));
      this.lastTouches = touches;
      this.lastTouchesPositions = this.startTouchesPositions;
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(e2) {
      if (!this.enabled || !this.startTouchesPositions.length) return;
      if (e2.cancelable) e2.preventDefault();
      if (this.movingTimeout) {
        this.isMoving = false;
        clearTimeout(this.movingTimeout);
      }
      switch (this.touchMode) {
        case 2:
          if (e2.touches.length === 1) {
            this.handleStart(e2);
            e2.preventDefault();
            break;
          }
        case 1:
          if (this.isMoving) {
            var camera = this.renderer.getCamera();
            var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || {
              x: 0,
              y: 0
            };
            camera.animate({
              x: cameraState.x + this.settings.inertiaRatio * (cameraState.x - previousCameraState.x),
              y: cameraState.y + this.settings.inertiaRatio * (cameraState.y - previousCameraState.y)
            }, {
              duration: this.settings.inertiaDuration,
              easing: "quadraticOut"
            });
          }
          this.hasMoved = false;
          this.isMoving = false;
          this.touchMode = 0;
          break;
      }
      this.emit("touchup", getTouchCoords(e2, this.lastTouches, this.container));
      if (!e2.touches.length) {
        var position = getPosition(this.lastTouches[0], this.container);
        var downPosition = this.startTouchesPositions[0];
        var dSquare = Math.pow(position.x - downPosition.x, 2) + Math.pow(position.y - downPosition.y, 2);
        if (!e2.touches.length && dSquare < Math.pow(this.settings.tapMoveTolerance, 2)) {
          if (this.lastTap && Date.now() - this.lastTap.time < this.settings.doubleClickTimeout) {
            var touchCoords = getTouchCoords(e2, this.lastTouches, this.container);
            this.emit("doubletap", touchCoords);
            this.lastTap = null;
            if (!touchCoords.sigmaDefaultPrevented) {
              var _camera = this.renderer.getCamera();
              var newRatio = _camera.getBoundedRatio(_camera.getState().ratio / this.settings.doubleClickZoomingRatio);
              _camera.animate(this.renderer.getViewportZoomedState(position, newRatio), {
                easing: "quadraticInOut",
                duration: this.settings.doubleClickZoomingDuration
              });
            }
          } else {
            var _touchCoords = getTouchCoords(e2, this.lastTouches, this.container);
            this.emit("tap", _touchCoords);
            this.lastTap = {
              time: Date.now(),
              position: _touchCoords.touches[0] || _touchCoords.previousTouches[0]
            };
          }
        }
      }
      this.lastTouches = getTouchesArray(e2.touches);
      this.startTouchesPositions = [];
    }
  }, {
    key: "handleMove",
    value: function handleMove(e2) {
      var _this3 = this;
      if (!this.enabled || !this.startTouchesPositions.length) return;
      e2.preventDefault();
      var touches = getTouchesArray(e2.touches);
      var touchesPositions = touches.map(function(touch) {
        return getPosition(touch, _this3.container);
      });
      var lastTouches = this.lastTouches;
      this.lastTouches = touches;
      this.lastTouchesPositions = touchesPositions;
      var touchCoords = getTouchCoords(e2, lastTouches, this.container);
      this.emit("touchmove", touchCoords);
      if (touchCoords.sigmaDefaultPrevented) return;
      this.hasMoved || (this.hasMoved = touchesPositions.some(function(position, idx) {
        var startPosition = _this3.startTouchesPositions[idx];
        return startPosition && (position.x !== startPosition.x || position.y !== startPosition.y);
      }));
      if (!this.hasMoved) {
        return;
      }
      this.isMoving = true;
      if (this.movingTimeout) clearTimeout(this.movingTimeout);
      this.movingTimeout = window.setTimeout(function() {
        _this3.isMoving = false;
      }, this.settings.dragTimeout);
      var camera = this.renderer.getCamera();
      var startCameraState = this.startCameraState;
      var padding = this.renderer.getSetting("stagePadding");
      switch (this.touchMode) {
        case 1: {
          var _this$renderer$viewpo = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]), xStart = _this$renderer$viewpo.x, yStart = _this$renderer$viewpo.y;
          var _this$renderer$viewpo2 = this.renderer.viewportToFramedGraph(touchesPositions[0]), x2 = _this$renderer$viewpo2.x, y2 = _this$renderer$viewpo2.y;
          camera.setState({
            x: startCameraState.x + xStart - x2,
            y: startCameraState.y + yStart - y2
          });
          break;
        }
        case 2: {
          var newCameraState = {
            x: 0.5,
            y: 0.5,
            angle: 0,
            ratio: 1
          };
          var _touchesPositions$ = touchesPositions[0], x0 = _touchesPositions$.x, y0 = _touchesPositions$.y;
          var _touchesPositions$2 = touchesPositions[1], x1 = _touchesPositions$2.x, y1 = _touchesPositions$2.y;
          var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
          var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;
          var newRatio = camera.getBoundedRatio(startCameraState.ratio / ratioDiff);
          newCameraState.ratio = newRatio;
          newCameraState.angle = startCameraState.angle + angleDiff;
          var dimensions = this.getDimensions();
          var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], {
            cameraState: startCameraState
          });
          var smallestDimension = Math.min(dimensions.width, dimensions.height) - 2 * padding;
          var dx = smallestDimension / dimensions.width;
          var dy = smallestDimension / dimensions.height;
          var ratio = newRatio / smallestDimension;
          var _x = x0 - smallestDimension / 2 / dx;
          var _y = y0 - smallestDimension / 2 / dy;
          var _ref = [_x * Math.cos(-newCameraState.angle) - _y * Math.sin(-newCameraState.angle), _y * Math.cos(-newCameraState.angle) + _x * Math.sin(-newCameraState.angle)];
          _x = _ref[0];
          _y = _ref[1];
          newCameraState.x = touchGraphPosition.x - _x * ratio;
          newCameraState.y = touchGraphPosition.y + _y * ratio;
          camera.setState(newCameraState);
          break;
        }
      }
    }
  }, {
    key: "setSettings",
    value: function setSettings(settings) {
      this.settings = settings;
    }
  }]);
}(Captor);
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray(r2);
}
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}
function _objectWithoutPropertiesLoose(r2, e2) {
  if (null == r2) return {};
  var t2 = {};
  for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
    if (-1 !== e2.indexOf(n2)) continue;
    t2[n2] = r2[n2];
  }
  return t2;
}
function _objectWithoutProperties(e2, t2) {
  if (null == e2) return {};
  var o2, r2, i2 = _objectWithoutPropertiesLoose(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var n2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < n2.length; r2++) o2 = n2[r2], -1 === t2.indexOf(o2) && {}.propertyIsEnumerable.call(e2, o2) && (i2[o2] = e2[o2]);
  }
  return i2;
}
var LabelCandidate = function() {
  function LabelCandidate2(key, size) {
    _classCallCheck(this, LabelCandidate2);
    this.key = key;
    this.size = size;
  }
  return _createClass(LabelCandidate2, null, [{
    key: "compare",
    value: function compare(first, second) {
      if (first.size > second.size) return -1;
      if (first.size < second.size) return 1;
      if (first.key > second.key) return 1;
      return -1;
    }
  }]);
}();
var LabelGrid = function() {
  function LabelGrid2() {
    _classCallCheck(this, LabelGrid2);
    _defineProperty(this, "width", 0);
    _defineProperty(this, "height", 0);
    _defineProperty(this, "cellSize", 0);
    _defineProperty(this, "columns", 0);
    _defineProperty(this, "rows", 0);
    _defineProperty(this, "cells", {});
  }
  return _createClass(LabelGrid2, [{
    key: "resizeAndClear",
    value: function resizeAndClear(dimensions, cellSize) {
      this.width = dimensions.width;
      this.height = dimensions.height;
      this.cellSize = cellSize;
      this.columns = Math.ceil(dimensions.width / cellSize);
      this.rows = Math.ceil(dimensions.height / cellSize);
      this.cells = {};
    }
  }, {
    key: "getIndex",
    value: function getIndex(pos) {
      var xIndex = Math.floor(pos.x / this.cellSize);
      var yIndex = Math.floor(pos.y / this.cellSize);
      return yIndex * this.columns + xIndex;
    }
  }, {
    key: "add",
    value: function add(key, size, pos) {
      var candidate = new LabelCandidate(key, size);
      var index = this.getIndex(pos);
      var cell = this.cells[index];
      if (!cell) {
        cell = [];
        this.cells[index] = cell;
      }
      cell.push(candidate);
    }
  }, {
    key: "organize",
    value: function organize() {
      for (var k2 in this.cells) {
        var cell = this.cells[k2];
        cell.sort(LabelCandidate.compare);
      }
    }
  }, {
    key: "getLabelsToDisplay",
    value: function getLabelsToDisplay(ratio, density) {
      var cellArea = this.cellSize * this.cellSize;
      var scaledCellArea = cellArea / ratio / ratio;
      var scaledDensity = scaledCellArea * density / cellArea;
      var labelsToDisplayPerCell = Math.ceil(scaledDensity);
      var labels = [];
      for (var k2 in this.cells) {
        var cell = this.cells[k2];
        for (var i2 = 0; i2 < Math.min(labelsToDisplayPerCell, cell.length); i2++) {
          labels.push(cell[i2].key);
        }
      }
      return labels;
    }
  }]);
}();
function edgeLabelsToDisplayFromNodes(params) {
  var graph = params.graph, hoveredNode = params.hoveredNode, highlightedNodes = params.highlightedNodes, displayedNodeLabels = params.displayedNodeLabels;
  var worthyEdges = [];
  graph.forEachEdge(function(edge, _2, source, target) {
    if (source === hoveredNode || target === hoveredNode || highlightedNodes.has(source) || highlightedNodes.has(target) || displayedNodeLabels.has(source) && displayedNodeLabels.has(target)) {
      worthyEdges.push(edge);
    }
  });
  return worthyEdges;
}
var X_LABEL_MARGIN = 150;
var Y_LABEL_MARGIN = 50;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function applyNodeDefaults(settings, key, data) {
  if (!hasOwnProperty.call(data, "x") || !hasOwnProperty.call(data, "y")) throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(key, '". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?'));
  if (!data.color) data.color = settings.defaultNodeColor;
  if (!data.label && data.label !== "") data.label = null;
  if (data.label !== void 0 && data.label !== null) data.label = "" + data.label;
  else data.label = null;
  if (!data.size) data.size = 2;
  if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
  if (!hasOwnProperty.call(data, "highlighted")) data.highlighted = false;
  if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
  if (!data.type || data.type === "") data.type = settings.defaultNodeType;
  if (!data.zIndex) data.zIndex = 0;
  return data;
}
function applyEdgeDefaults(settings, _key, data) {
  if (!data.color) data.color = settings.defaultEdgeColor;
  if (!data.label) data.label = "";
  if (!data.size) data.size = 0.5;
  if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
  if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
  if (!data.type || data.type === "") data.type = settings.defaultEdgeType;
  if (!data.zIndex) data.zIndex = 0;
  return data;
}
var Sigma$1 = function(_TypedEventEmitter) {
  function Sigma(graph, container) {
    var _this;
    var settings = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck(this, Sigma);
    _this = _callSuper(this, Sigma);
    _defineProperty(_this, "elements", {});
    _defineProperty(_this, "canvasContexts", {});
    _defineProperty(_this, "webGLContexts", {});
    _defineProperty(_this, "pickingLayers", /* @__PURE__ */ new Set());
    _defineProperty(_this, "textures", {});
    _defineProperty(_this, "frameBuffers", {});
    _defineProperty(_this, "activeListeners", {});
    _defineProperty(_this, "labelGrid", new LabelGrid());
    _defineProperty(_this, "nodeDataCache", {});
    _defineProperty(_this, "edgeDataCache", {});
    _defineProperty(_this, "nodeProgramIndex", {});
    _defineProperty(_this, "edgeProgramIndex", {});
    _defineProperty(_this, "nodesWithForcedLabels", /* @__PURE__ */ new Set());
    _defineProperty(_this, "edgesWithForcedLabels", /* @__PURE__ */ new Set());
    _defineProperty(_this, "nodeExtent", {
      x: [0, 1],
      y: [0, 1]
    });
    _defineProperty(_this, "nodeZExtent", [Infinity, -Infinity]);
    _defineProperty(_this, "edgeZExtent", [Infinity, -Infinity]);
    _defineProperty(_this, "matrix", identity());
    _defineProperty(_this, "invMatrix", identity());
    _defineProperty(_this, "correctionRatio", 1);
    _defineProperty(_this, "customBBox", null);
    _defineProperty(_this, "normalizationFunction", createNormalizationFunction({
      x: [0, 1],
      y: [0, 1]
    }));
    _defineProperty(_this, "graphToViewportRatio", 1);
    _defineProperty(_this, "itemIDsIndex", {});
    _defineProperty(_this, "nodeIndices", {});
    _defineProperty(_this, "edgeIndices", {});
    _defineProperty(_this, "width", 0);
    _defineProperty(_this, "height", 0);
    _defineProperty(_this, "pixelRatio", getPixelRatio());
    _defineProperty(_this, "pickingDownSizingRatio", 2 * _this.pixelRatio);
    _defineProperty(_this, "displayedNodeLabels", /* @__PURE__ */ new Set());
    _defineProperty(_this, "displayedEdgeLabels", /* @__PURE__ */ new Set());
    _defineProperty(_this, "highlightedNodes", /* @__PURE__ */ new Set());
    _defineProperty(_this, "hoveredNode", null);
    _defineProperty(_this, "hoveredEdge", null);
    _defineProperty(_this, "renderFrame", null);
    _defineProperty(_this, "renderHighlightedNodesFrame", null);
    _defineProperty(_this, "needToProcess", false);
    _defineProperty(_this, "checkEdgesEventsFrame", null);
    _defineProperty(_this, "nodePrograms", {});
    _defineProperty(_this, "nodeHoverPrograms", {});
    _defineProperty(_this, "edgePrograms", {});
    _this.settings = resolveSettings(settings);
    validateSettings(_this.settings);
    validateGraph(graph);
    if (!(container instanceof HTMLElement)) throw new Error("Sigma: container should be an html element.");
    _this.graph = graph;
    _this.container = container;
    _this.createWebGLContext("edges", {
      picking: settings.enableEdgeEvents
    });
    _this.createCanvasContext("edgeLabels");
    _this.createWebGLContext("nodes", {
      picking: true
    });
    _this.createCanvasContext("labels");
    _this.createCanvasContext("hovers");
    _this.createWebGLContext("hoverNodes");
    _this.createCanvasContext("mouse", {
      style: {
        touchAction: "none",
        userSelect: "none"
      }
    });
    _this.resize();
    for (var type in _this.settings.nodeProgramClasses) {
      _this.registerNodeProgram(type, _this.settings.nodeProgramClasses[type], _this.settings.nodeHoverProgramClasses[type]);
    }
    for (var _type in _this.settings.edgeProgramClasses) {
      _this.registerEdgeProgram(_type, _this.settings.edgeProgramClasses[_type]);
    }
    _this.camera = new Camera();
    _this.bindCameraHandlers();
    _this.mouseCaptor = new MouseCaptor(_this.elements.mouse, _this);
    _this.mouseCaptor.setSettings(_this.settings);
    _this.touchCaptor = new TouchCaptor(_this.elements.mouse, _this);
    _this.touchCaptor.setSettings(_this.settings);
    _this.bindEventHandlers();
    _this.bindGraphHandlers();
    _this.handleSettingsUpdate();
    _this.refresh();
    return _this;
  }
  _inherits(Sigma, _TypedEventEmitter);
  return _createClass(Sigma, [{
    key: "registerNodeProgram",
    value: function registerNodeProgram(key, NodeProgramClass, NodeHoverProgram) {
      if (this.nodePrograms[key]) this.nodePrograms[key].kill();
      if (this.nodeHoverPrograms[key]) this.nodeHoverPrograms[key].kill();
      this.nodePrograms[key] = new NodeProgramClass(this.webGLContexts.nodes, this.frameBuffers.nodes, this);
      this.nodeHoverPrograms[key] = new (NodeHoverProgram || NodeProgramClass)(this.webGLContexts.hoverNodes, null, this);
      return this;
    }
    /**
     * Internal function used to register an edge program
     *
     * @param  {string}          key              - The program's key, matching the related edges "type" values.
     * @param  {EdgeProgramType} EdgeProgramClass - An edges program class.
     * @return {Sigma}
     */
  }, {
    key: "registerEdgeProgram",
    value: function registerEdgeProgram(key, EdgeProgramClass) {
      if (this.edgePrograms[key]) this.edgePrograms[key].kill();
      this.edgePrograms[key] = new EdgeProgramClass(this.webGLContexts.edges, this.frameBuffers.edges, this);
      return this;
    }
    /**
     * Internal function used to unregister a node program
     *
     * @param  {string} key - The program's key, matching the related nodes "type" values.
     * @return {Sigma}
     */
  }, {
    key: "unregisterNodeProgram",
    value: function unregisterNodeProgram(key) {
      if (this.nodePrograms[key]) {
        var _this$nodePrograms = this.nodePrograms, program = _this$nodePrograms[key], programs = _objectWithoutProperties(_this$nodePrograms, [key].map(_toPropertyKey));
        program.kill();
        this.nodePrograms = programs;
      }
      if (this.nodeHoverPrograms[key]) {
        var _this$nodeHoverProgra = this.nodeHoverPrograms, _program = _this$nodeHoverProgra[key], _programs = _objectWithoutProperties(_this$nodeHoverProgra, [key].map(_toPropertyKey));
        _program.kill();
        this.nodePrograms = _programs;
      }
      return this;
    }
    /**
     * Internal function used to unregister an edge program
     *
     * @param  {string} key - The program's key, matching the related edges "type" values.
     * @return {Sigma}
     */
  }, {
    key: "unregisterEdgeProgram",
    value: function unregisterEdgeProgram(key) {
      if (this.edgePrograms[key]) {
        var _this$edgePrograms = this.edgePrograms, program = _this$edgePrograms[key], programs = _objectWithoutProperties(_this$edgePrograms, [key].map(_toPropertyKey));
        program.kill();
        this.edgePrograms = programs;
      }
      return this;
    }
    /**
     * Method (re)binding WebGL texture (for picking).
     *
     * @return {Sigma}
     */
  }, {
    key: "resetWebGLTexture",
    value: function resetWebGLTexture(id) {
      var gl = this.webGLContexts[id];
      var frameBuffer = this.frameBuffers[id];
      var currentTexture = this.textures[id];
      if (currentTexture) gl.deleteTexture(currentTexture);
      var pickingTexture = gl.createTexture();
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      gl.bindTexture(gl.TEXTURE_2D, pickingTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pickingTexture, 0);
      this.textures[id] = pickingTexture;
      return this;
    }
    /**
     * Method binding camera handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "bindCameraHandlers",
    value: function bindCameraHandlers() {
      var _this2 = this;
      this.activeListeners.camera = function() {
        _this2.scheduleRender();
      };
      this.camera.on("updated", this.activeListeners.camera);
      return this;
    }
    /**
     * Method unbinding camera handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "unbindCameraHandlers",
    value: function unbindCameraHandlers() {
      this.camera.removeListener("updated", this.activeListeners.camera);
      return this;
    }
    /**
     * Method that returns the closest node to a given position.
     */
  }, {
    key: "getNodeAtPosition",
    value: function getNodeAtPosition(position) {
      var x2 = position.x, y2 = position.y;
      var color = getPixelColor(this.webGLContexts.nodes, this.frameBuffers.nodes, x2, y2, this.pixelRatio, this.pickingDownSizingRatio);
      var index = colorToIndex.apply(void 0, _toConsumableArray(color));
      var itemAt = this.itemIDsIndex[index];
      return itemAt && itemAt.type === "node" ? itemAt.id : null;
    }
    /**
     * Method binding event handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "bindEventHandlers",
    value: function bindEventHandlers() {
      var _this3 = this;
      this.activeListeners.handleResize = function() {
        _this3.scheduleRefresh();
      };
      window.addEventListener("resize", this.activeListeners.handleResize);
      this.activeListeners.handleMove = function(e2) {
        var event = cleanMouseCoords(e2);
        var baseEvent = {
          event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        var nodeToHover = _this3.getNodeAtPosition(event);
        if (nodeToHover && _this3.hoveredNode !== nodeToHover && !_this3.nodeDataCache[nodeToHover].hidden) {
          if (_this3.hoveredNode) _this3.emit("leaveNode", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
            node: _this3.hoveredNode
          }));
          _this3.hoveredNode = nodeToHover;
          _this3.emit("enterNode", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
            node: nodeToHover
          }));
          _this3.scheduleHighlightedNodesRender();
          return;
        }
        if (_this3.hoveredNode) {
          if (_this3.getNodeAtPosition(event) !== _this3.hoveredNode) {
            var node = _this3.hoveredNode;
            _this3.hoveredNode = null;
            _this3.emit("leaveNode", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
              node
            }));
            _this3.scheduleHighlightedNodesRender();
            return;
          }
        }
        if (_this3.settings.enableEdgeEvents) {
          var edgeToHover = _this3.hoveredNode ? null : _this3.getEdgeAtPoint(baseEvent.event.x, baseEvent.event.y);
          if (edgeToHover !== _this3.hoveredEdge) {
            if (_this3.hoveredEdge) _this3.emit("leaveEdge", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
              edge: _this3.hoveredEdge
            }));
            if (edgeToHover) _this3.emit("enterEdge", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
              edge: edgeToHover
            }));
            _this3.hoveredEdge = edgeToHover;
          }
        }
      };
      this.activeListeners.handleMoveBody = function(e2) {
        var event = cleanMouseCoords(e2);
        _this3.emit("moveBody", {
          event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        });
      };
      this.activeListeners.handleLeave = function(e2) {
        var event = cleanMouseCoords(e2);
        var baseEvent = {
          event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        if (_this3.hoveredNode) {
          _this3.emit("leaveNode", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
            node: _this3.hoveredNode
          }));
          _this3.scheduleHighlightedNodesRender();
        }
        if (_this3.settings.enableEdgeEvents && _this3.hoveredEdge) {
          _this3.emit("leaveEdge", _objectSpread2(_objectSpread2({}, baseEvent), {}, {
            edge: _this3.hoveredEdge
          }));
          _this3.scheduleHighlightedNodesRender();
        }
        _this3.emit("leaveStage", _objectSpread2({}, baseEvent));
      };
      this.activeListeners.handleEnter = function(e2) {
        var event = cleanMouseCoords(e2);
        var baseEvent = {
          event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        _this3.emit("enterStage", _objectSpread2({}, baseEvent));
      };
      var createInteractionListener = function createInteractionListener2(eventType) {
        return function(e2) {
          var event = cleanMouseCoords(e2);
          var baseEvent = {
            event,
            preventSigmaDefault: function preventSigmaDefault() {
              event.preventSigmaDefault();
            }
          };
          var nodeAtPosition = _this3.getNodeAtPosition(event);
          if (nodeAtPosition) return _this3.emit("".concat(eventType, "Node"), _objectSpread2(_objectSpread2({}, baseEvent), {}, {
            node: nodeAtPosition
          }));
          if (_this3.settings.enableEdgeEvents) {
            var edge = _this3.getEdgeAtPoint(event.x, event.y);
            if (edge) return _this3.emit("".concat(eventType, "Edge"), _objectSpread2(_objectSpread2({}, baseEvent), {}, {
              edge
            }));
          }
          return _this3.emit("".concat(eventType, "Stage"), baseEvent);
        };
      };
      this.activeListeners.handleClick = createInteractionListener("click");
      this.activeListeners.handleRightClick = createInteractionListener("rightClick");
      this.activeListeners.handleDoubleClick = createInteractionListener("doubleClick");
      this.activeListeners.handleWheel = createInteractionListener("wheel");
      this.activeListeners.handleDown = createInteractionListener("down");
      this.activeListeners.handleUp = createInteractionListener("up");
      this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
      this.mouseCaptor.on("mousemovebody", this.activeListeners.handleMoveBody);
      this.mouseCaptor.on("click", this.activeListeners.handleClick);
      this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
      this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick);
      this.mouseCaptor.on("wheel", this.activeListeners.handleWheel);
      this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
      this.mouseCaptor.on("mouseup", this.activeListeners.handleUp);
      this.mouseCaptor.on("mouseleave", this.activeListeners.handleLeave);
      this.mouseCaptor.on("mouseenter", this.activeListeners.handleEnter);
      this.touchCaptor.on("touchdown", this.activeListeners.handleDown);
      this.touchCaptor.on("touchdown", this.activeListeners.handleMove);
      this.touchCaptor.on("touchup", this.activeListeners.handleUp);
      this.touchCaptor.on("touchmove", this.activeListeners.handleMove);
      this.touchCaptor.on("tap", this.activeListeners.handleClick);
      this.touchCaptor.on("doubletap", this.activeListeners.handleDoubleClick);
      this.touchCaptor.on("touchmove", this.activeListeners.handleMoveBody);
      return this;
    }
    /**
     * Method binding graph handlers
     *
     * @return {Sigma}
     */
  }, {
    key: "bindGraphHandlers",
    value: function bindGraphHandlers() {
      var _this4 = this;
      var graph = this.graph;
      var LAYOUT_IMPACTING_FIELDS = /* @__PURE__ */ new Set(["x", "y", "zIndex", "type"]);
      this.activeListeners.eachNodeAttributesUpdatedGraphUpdate = function(e2) {
        var _e$hints;
        var updatedFields = (_e$hints = e2.hints) === null || _e$hints === void 0 ? void 0 : _e$hints.attributes;
        _this4.graph.forEachNode(function(node) {
          return _this4.updateNode(node);
        });
        var layoutChanged = !updatedFields || updatedFields.some(function(f2) {
          return LAYOUT_IMPACTING_FIELDS.has(f2);
        });
        _this4.refresh({
          partialGraph: {
            nodes: graph.nodes()
          },
          skipIndexation: !layoutChanged,
          schedule: true
        });
      };
      this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate = function(e2) {
        var _e$hints2;
        var updatedFields = (_e$hints2 = e2.hints) === null || _e$hints2 === void 0 ? void 0 : _e$hints2.attributes;
        _this4.graph.forEachEdge(function(edge) {
          return _this4.updateEdge(edge);
        });
        var layoutChanged = updatedFields && ["zIndex", "type"].some(function(f2) {
          return updatedFields === null || updatedFields === void 0 ? void 0 : updatedFields.includes(f2);
        });
        _this4.refresh({
          partialGraph: {
            edges: graph.edges()
          },
          skipIndexation: !layoutChanged,
          schedule: true
        });
      };
      this.activeListeners.addNodeGraphUpdate = function(payload) {
        var node = payload.key;
        _this4.addNode(node);
        _this4.refresh({
          partialGraph: {
            nodes: [node]
          },
          skipIndexation: false,
          schedule: true
        });
      };
      this.activeListeners.updateNodeGraphUpdate = function(payload) {
        var node = payload.key;
        _this4.refresh({
          partialGraph: {
            nodes: [node]
          },
          skipIndexation: false,
          schedule: true
        });
      };
      this.activeListeners.dropNodeGraphUpdate = function(payload) {
        var node = payload.key;
        _this4.removeNode(node);
        _this4.refresh({
          schedule: true
        });
      };
      this.activeListeners.addEdgeGraphUpdate = function(payload) {
        var edge = payload.key;
        _this4.addEdge(edge);
        _this4.refresh({
          partialGraph: {
            edges: [edge]
          },
          schedule: true
        });
      };
      this.activeListeners.updateEdgeGraphUpdate = function(payload) {
        var edge = payload.key;
        _this4.refresh({
          partialGraph: {
            edges: [edge]
          },
          skipIndexation: false,
          schedule: true
        });
      };
      this.activeListeners.dropEdgeGraphUpdate = function(payload) {
        var edge = payload.key;
        _this4.removeEdge(edge);
        _this4.refresh({
          schedule: true
        });
      };
      this.activeListeners.clearEdgesGraphUpdate = function() {
        _this4.clearEdgeState();
        _this4.clearEdgeIndices();
        _this4.refresh({
          schedule: true
        });
      };
      this.activeListeners.clearGraphUpdate = function() {
        _this4.clearEdgeState();
        _this4.clearNodeState();
        _this4.clearEdgeIndices();
        _this4.clearNodeIndices();
        _this4.refresh({
          schedule: true
        });
      };
      graph.on("nodeAdded", this.activeListeners.addNodeGraphUpdate);
      graph.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.on("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
      graph.on("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
      graph.on("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
      graph.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.on("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
      graph.on("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
      graph.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.on("cleared", this.activeListeners.clearGraphUpdate);
      return this;
    }
    /**
     * Method used to unbind handlers from the graph.
     *
     * @return {undefined}
     */
  }, {
    key: "unbindGraphHandlers",
    value: function unbindGraphHandlers() {
      var graph = this.graph;
      graph.removeListener("nodeAdded", this.activeListeners.addNodeGraphUpdate);
      graph.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.removeListener("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
      graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
      graph.removeListener("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
      graph.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.removeListener("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
      graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
      graph.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.removeListener("cleared", this.activeListeners.clearGraphUpdate);
    }
    /**
     * Method looking for an edge colliding with a given point at (x, y). Returns
     * the key of the edge if any, or null else.
     */
  }, {
    key: "getEdgeAtPoint",
    value: function getEdgeAtPoint(x2, y2) {
      var color = getPixelColor(this.webGLContexts.edges, this.frameBuffers.edges, x2, y2, this.pixelRatio, this.pickingDownSizingRatio);
      var index = colorToIndex.apply(void 0, _toConsumableArray(color));
      var itemAt = this.itemIDsIndex[index];
      return itemAt && itemAt.type === "edge" ? itemAt.id : null;
    }
    /**
     * Method used to process the whole graph's data.
     *  - extent
     *  - normalizationFunction
     *  - compute node's coordinate
     *  - labelgrid
     *  - program data allocation
     * @return {Sigma}
     */
  }, {
    key: "process",
    value: function process() {
      var _this5 = this;
      this.emit("beforeProcess");
      var graph = this.graph;
      var settings = this.settings;
      var dimensions = this.getDimensions();
      this.nodeExtent = graphExtent(this.graph);
      if (!this.settings.autoRescale) {
        var width = dimensions.width, height = dimensions.height;
        var _this$nodeExtent = this.nodeExtent, x2 = _this$nodeExtent.x, y2 = _this$nodeExtent.y;
        this.nodeExtent = {
          x: [(x2[0] + x2[1]) / 2 - width / 2, (x2[0] + x2[1]) / 2 + width / 2],
          y: [(y2[0] + y2[1]) / 2 - height / 2, (y2[0] + y2[1]) / 2 + height / 2]
        };
      }
      this.normalizationFunction = createNormalizationFunction(this.customBBox || this.nodeExtent);
      var nullCamera = new Camera();
      var nullCameraMatrix = matrixFromCamera(nullCamera.getState(), dimensions, this.getGraphDimensions(), this.getStagePadding());
      this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
      var nodesPerPrograms = {};
      var nodeIndices = {};
      var edgeIndices = {};
      var itemIDsIndex = {};
      var incrID = 1;
      var nodes = graph.nodes();
      for (var i2 = 0, l2 = nodes.length; i2 < l2; i2++) {
        var node = nodes[i2];
        var data = this.nodeDataCache[node];
        var attrs = graph.getNodeAttributes(node);
        data.x = attrs.x;
        data.y = attrs.y;
        this.normalizationFunction.applyTo(data);
        if (typeof data.label === "string" && !data.hidden) this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, {
          matrix: nullCameraMatrix
        }));
        nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
      }
      this.labelGrid.organize();
      for (var type in this.nodePrograms) {
        if (!hasOwnProperty.call(this.nodePrograms, type)) {
          throw new Error('Sigma: could not find a suitable program for node type "'.concat(type, '"!'));
        }
        this.nodePrograms[type].reallocate(nodesPerPrograms[type] || 0);
        nodesPerPrograms[type] = 0;
      }
      if (this.settings.zIndex && this.nodeZExtent[0] !== this.nodeZExtent[1]) nodes = zIndexOrdering(this.nodeZExtent, function(node2) {
        return _this5.nodeDataCache[node2].zIndex;
      }, nodes);
      for (var _i = 0, _l = nodes.length; _i < _l; _i++) {
        var _node = nodes[_i];
        nodeIndices[_node] = incrID;
        itemIDsIndex[nodeIndices[_node]] = {
          type: "node",
          id: _node
        };
        incrID++;
        var _data = this.nodeDataCache[_node];
        this.addNodeToProgram(_node, nodeIndices[_node], nodesPerPrograms[_data.type]++);
      }
      var edgesPerPrograms = {};
      var edges = graph.edges();
      for (var _i2 = 0, _l2 = edges.length; _i2 < _l2; _i2++) {
        var edge = edges[_i2];
        var _data2 = this.edgeDataCache[edge];
        edgesPerPrograms[_data2.type] = (edgesPerPrograms[_data2.type] || 0) + 1;
      }
      if (this.settings.zIndex && this.edgeZExtent[0] !== this.edgeZExtent[1]) edges = zIndexOrdering(this.edgeZExtent, function(edge2) {
        return _this5.edgeDataCache[edge2].zIndex;
      }, edges);
      for (var _type2 in this.edgePrograms) {
        if (!hasOwnProperty.call(this.edgePrograms, _type2)) {
          throw new Error('Sigma: could not find a suitable program for edge type "'.concat(_type2, '"!'));
        }
        this.edgePrograms[_type2].reallocate(edgesPerPrograms[_type2] || 0);
        edgesPerPrograms[_type2] = 0;
      }
      for (var _i3 = 0, _l3 = edges.length; _i3 < _l3; _i3++) {
        var _edge = edges[_i3];
        edgeIndices[_edge] = incrID;
        itemIDsIndex[edgeIndices[_edge]] = {
          type: "edge",
          id: _edge
        };
        incrID++;
        var _data3 = this.edgeDataCache[_edge];
        this.addEdgeToProgram(_edge, edgeIndices[_edge], edgesPerPrograms[_data3.type]++);
      }
      this.itemIDsIndex = itemIDsIndex;
      this.nodeIndices = nodeIndices;
      this.edgeIndices = edgeIndices;
      this.emit("afterProcess");
      return this;
    }
    /**
     * Method that backports potential settings updates where it's needed.
     * @private
     */
  }, {
    key: "handleSettingsUpdate",
    value: function handleSettingsUpdate(oldSettings) {
      var _this6 = this;
      var settings = this.settings;
      this.camera.minRatio = settings.minCameraRatio;
      this.camera.maxRatio = settings.maxCameraRatio;
      this.camera.enabledZooming = settings.enableCameraZooming;
      this.camera.enabledPanning = settings.enableCameraPanning;
      this.camera.enabledRotation = settings.enableCameraRotation;
      if (settings.cameraPanBoundaries) {
        this.camera.clean = function(state) {
          return _this6.cleanCameraState(state, settings.cameraPanBoundaries && _typeof(settings.cameraPanBoundaries) === "object" ? settings.cameraPanBoundaries : {});
        };
      } else {
        this.camera.clean = null;
      }
      this.camera.setState(this.camera.validateState(this.camera.getState()));
      if (oldSettings) {
        if (oldSettings.edgeProgramClasses !== settings.edgeProgramClasses) {
          for (var type in settings.edgeProgramClasses) {
            if (settings.edgeProgramClasses[type] !== oldSettings.edgeProgramClasses[type]) {
              this.registerEdgeProgram(type, settings.edgeProgramClasses[type]);
            }
          }
          for (var _type3 in oldSettings.edgeProgramClasses) {
            if (!settings.edgeProgramClasses[_type3]) this.unregisterEdgeProgram(_type3);
          }
        }
        if (oldSettings.nodeProgramClasses !== settings.nodeProgramClasses || oldSettings.nodeHoverProgramClasses !== settings.nodeHoverProgramClasses) {
          for (var _type4 in settings.nodeProgramClasses) {
            if (settings.nodeProgramClasses[_type4] !== oldSettings.nodeProgramClasses[_type4] || settings.nodeHoverProgramClasses[_type4] !== oldSettings.nodeHoverProgramClasses[_type4]) {
              this.registerNodeProgram(_type4, settings.nodeProgramClasses[_type4], settings.nodeHoverProgramClasses[_type4]);
            }
          }
          for (var _type5 in oldSettings.nodeProgramClasses) {
            if (!settings.nodeProgramClasses[_type5]) this.unregisterNodeProgram(_type5);
          }
        }
      }
      this.mouseCaptor.setSettings(this.settings);
      this.touchCaptor.setSettings(this.settings);
      return this;
    }
  }, {
    key: "cleanCameraState",
    value: function cleanCameraState(state) {
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$tolerance = _ref.tolerance, tolerance = _ref$tolerance === void 0 ? 0 : _ref$tolerance, boundaries = _ref.boundaries;
      var newState = _objectSpread2({}, state);
      var _ref2 = boundaries || this.nodeExtent, _ref2$x = _slicedToArray(_ref2.x, 2), xMinGraph = _ref2$x[0], xMaxGraph = _ref2$x[1], _ref2$y = _slicedToArray(_ref2.y, 2), yMinGraph = _ref2$y[0], yMaxGraph = _ref2$y[1];
      var corners = [this.graphToViewport({
        x: xMinGraph,
        y: yMinGraph
      }, {
        cameraState: state
      }), this.graphToViewport({
        x: xMaxGraph,
        y: yMinGraph
      }, {
        cameraState: state
      }), this.graphToViewport({
        x: xMinGraph,
        y: yMaxGraph
      }, {
        cameraState: state
      }), this.graphToViewport({
        x: xMaxGraph,
        y: yMaxGraph
      }, {
        cameraState: state
      })];
      var xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity;
      corners.forEach(function(_ref3) {
        var x2 = _ref3.x, y2 = _ref3.y;
        xMin = Math.min(xMin, x2);
        xMax = Math.max(xMax, x2);
        yMin = Math.min(yMin, y2);
        yMax = Math.max(yMax, y2);
      });
      var graphWidth = xMax - xMin;
      var graphHeight = yMax - yMin;
      var _this$getDimensions = this.getDimensions(), width = _this$getDimensions.width, height = _this$getDimensions.height;
      var dx = 0;
      var dy = 0;
      if (graphWidth >= width) {
        if (xMax < width - tolerance) dx = xMax - (width - tolerance);
        else if (xMin > tolerance) dx = xMin - tolerance;
      } else {
        if (xMax > width + tolerance) dx = xMax - (width + tolerance);
        else if (xMin < -tolerance) dx = xMin + tolerance;
      }
      if (graphHeight >= height) {
        if (yMax < height - tolerance) dy = yMax - (height - tolerance);
        else if (yMin > tolerance) dy = yMin - tolerance;
      } else {
        if (yMax > height + tolerance) dy = yMax - (height + tolerance);
        else if (yMin < -tolerance) dy = yMin + tolerance;
      }
      if (dx || dy) {
        var origin = this.viewportToFramedGraph({
          x: 0,
          y: 0
        }, {
          cameraState: state
        });
        var delta = this.viewportToFramedGraph({
          x: dx,
          y: dy
        }, {
          cameraState: state
        });
        dx = delta.x - origin.x;
        dy = delta.y - origin.y;
        newState.x += dx;
        newState.y += dy;
      }
      return newState;
    }
    /**
     * Method used to render labels.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderLabels",
    value: function renderLabels() {
      if (!this.settings.renderLabels) return this;
      var cameraState = this.camera.getState();
      var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
      extend(labelsToDisplay, this.nodesWithForcedLabels);
      this.displayedNodeLabels = /* @__PURE__ */ new Set();
      var context = this.canvasContexts.labels;
      for (var i2 = 0, l2 = labelsToDisplay.length; i2 < l2; i2++) {
        var node = labelsToDisplay[i2];
        var data = this.nodeDataCache[node];
        if (this.displayedNodeLabels.has(node)) continue;
        if (data.hidden) continue;
        var _this$framedGraphToVi = this.framedGraphToViewport(data), x2 = _this$framedGraphToVi.x, y2 = _this$framedGraphToVi.y;
        var size = this.scaleSize(data.size);
        if (!data.forceLabel && size < this.settings.labelRenderedSizeThreshold) continue;
        if (x2 < -X_LABEL_MARGIN || x2 > this.width + X_LABEL_MARGIN || y2 < -Y_LABEL_MARGIN || y2 > this.height + Y_LABEL_MARGIN) continue;
        this.displayedNodeLabels.add(node);
        var defaultDrawNodeLabel = this.settings.defaultDrawNodeLabel;
        var nodeProgram = this.nodePrograms[data.type];
        var drawLabel = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawLabel) || defaultDrawNodeLabel;
        drawLabel(context, _objectSpread2(_objectSpread2({
          key: node
        }, data), {}, {
          size,
          x: x2,
          y: y2
        }), this.settings);
      }
      return this;
    }
    /**
     * Method used to render edge labels, based on which node labels were
     * rendered.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderEdgeLabels",
    value: function renderEdgeLabels() {
      if (!this.settings.renderEdgeLabels) return this;
      var context = this.canvasContexts.edgeLabels;
      context.clearRect(0, 0, this.width, this.height);
      var edgeLabelsToDisplay = edgeLabelsToDisplayFromNodes({
        graph: this.graph,
        hoveredNode: this.hoveredNode,
        displayedNodeLabels: this.displayedNodeLabels,
        highlightedNodes: this.highlightedNodes
      });
      extend(edgeLabelsToDisplay, this.edgesWithForcedLabels);
      var displayedLabels = /* @__PURE__ */ new Set();
      for (var i2 = 0, l2 = edgeLabelsToDisplay.length; i2 < l2; i2++) {
        var edge = edgeLabelsToDisplay[i2], extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]], edgeData = this.edgeDataCache[edge];
        if (displayedLabels.has(edge)) continue;
        if (edgeData.hidden || sourceData.hidden || targetData.hidden) {
          continue;
        }
        var defaultDrawEdgeLabel = this.settings.defaultDrawEdgeLabel;
        var edgeProgram = this.edgePrograms[edgeData.type];
        var drawLabel = (edgeProgram === null || edgeProgram === void 0 ? void 0 : edgeProgram.drawLabel) || defaultDrawEdgeLabel;
        drawLabel(context, _objectSpread2(_objectSpread2({
          key: edge
        }, edgeData), {}, {
          size: this.scaleSize(edgeData.size)
        }), _objectSpread2(_objectSpread2(_objectSpread2({
          key: extremities[0]
        }, sourceData), this.framedGraphToViewport(sourceData)), {}, {
          size: this.scaleSize(sourceData.size)
        }), _objectSpread2(_objectSpread2(_objectSpread2({
          key: extremities[1]
        }, targetData), this.framedGraphToViewport(targetData)), {}, {
          size: this.scaleSize(targetData.size)
        }), this.settings);
        displayedLabels.add(edge);
      }
      this.displayedEdgeLabels = displayedLabels;
      return this;
    }
    /**
     * Method used to render the highlighted nodes.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderHighlightedNodes",
    value: function renderHighlightedNodes() {
      var _this7 = this;
      var context = this.canvasContexts.hovers;
      context.clearRect(0, 0, this.width, this.height);
      var render = function render2(node) {
        var data = _this7.nodeDataCache[node];
        var _this7$framedGraphToV = _this7.framedGraphToViewport(data), x2 = _this7$framedGraphToV.x, y2 = _this7$framedGraphToV.y;
        var size = _this7.scaleSize(data.size);
        var defaultDrawNodeHover = _this7.settings.defaultDrawNodeHover;
        var nodeProgram = _this7.nodePrograms[data.type];
        var drawHover = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawHover) || defaultDrawNodeHover;
        drawHover(context, _objectSpread2(_objectSpread2({
          key: node
        }, data), {}, {
          size,
          x: x2,
          y: y2
        }), _this7.settings);
      };
      var nodesToRender = [];
      if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) {
        nodesToRender.push(this.hoveredNode);
      }
      this.highlightedNodes.forEach(function(node) {
        if (node !== _this7.hoveredNode) nodesToRender.push(node);
      });
      nodesToRender.forEach(function(node) {
        return render(node);
      });
      var nodesPerPrograms = {};
      nodesToRender.forEach(function(node) {
        var type2 = _this7.nodeDataCache[node].type;
        nodesPerPrograms[type2] = (nodesPerPrograms[type2] || 0) + 1;
      });
      for (var type in this.nodeHoverPrograms) {
        this.nodeHoverPrograms[type].reallocate(nodesPerPrograms[type] || 0);
        nodesPerPrograms[type] = 0;
      }
      nodesToRender.forEach(function(node) {
        var data = _this7.nodeDataCache[node];
        _this7.nodeHoverPrograms[data.type].process(0, nodesPerPrograms[data.type]++, data);
      });
      this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
      var renderParams = this.getRenderParams();
      for (var _type6 in this.nodeHoverPrograms) {
        var program = this.nodeHoverPrograms[_type6];
        program.render(renderParams);
      }
    }
    /**
     * Method used to schedule a hover render.
     *
     */
  }, {
    key: "scheduleHighlightedNodesRender",
    value: function scheduleHighlightedNodesRender() {
      var _this8 = this;
      if (this.renderHighlightedNodesFrame || this.renderFrame) return;
      this.renderHighlightedNodesFrame = requestAnimationFrame(function() {
        _this8.renderHighlightedNodesFrame = null;
        _this8.renderHighlightedNodes();
        _this8.renderEdgeLabels();
      });
    }
    /**
     * Method used to render.
     *
     * @return {Sigma}
     */
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;
      this.emit("beforeRender");
      var exitRender = function exitRender2() {
        _this9.emit("afterRender");
        return _this9;
      };
      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
      }
      this.resize();
      if (this.needToProcess) this.process();
      this.needToProcess = false;
      this.clear();
      this.pickingLayers.forEach(function(layer) {
        return _this9.resetWebGLTexture(layer);
      });
      if (!this.graph.order) return exitRender();
      var mouseCaptor = this.mouseCaptor;
      var moving = this.camera.isAnimated() || mouseCaptor.isMoving || mouseCaptor.draggedEvents || mouseCaptor.currentWheelDirection;
      var cameraState = this.camera.getState();
      var viewportDimensions = this.getDimensions();
      var graphDimensions = this.getGraphDimensions();
      var padding = this.getStagePadding();
      this.matrix = matrixFromCamera(cameraState, viewportDimensions, graphDimensions, padding);
      this.invMatrix = matrixFromCamera(cameraState, viewportDimensions, graphDimensions, padding, true);
      this.correctionRatio = getMatrixImpact(this.matrix, cameraState, viewportDimensions);
      this.graphToViewportRatio = this.getGraphToViewportRatio();
      var params = this.getRenderParams();
      for (var type in this.nodePrograms) {
        var program = this.nodePrograms[type];
        program.render(params);
      }
      if (!this.settings.hideEdgesOnMove || !moving) {
        for (var _type7 in this.edgePrograms) {
          var _program2 = this.edgePrograms[_type7];
          _program2.render(params);
        }
      }
      if (this.settings.hideLabelsOnMove && moving) return exitRender();
      this.renderLabels();
      this.renderEdgeLabels();
      this.renderHighlightedNodes();
      return exitRender();
    }
    /**
     * Add a node in the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "addNode",
    value: function addNode(key) {
      var attr = Object.assign({}, this.graph.getNodeAttributes(key));
      if (this.settings.nodeReducer) attr = this.settings.nodeReducer(key, attr);
      var data = applyNodeDefaults(this.settings, key, attr);
      this.nodeDataCache[key] = data;
      this.nodesWithForcedLabels["delete"](key);
      if (data.forceLabel && !data.hidden) this.nodesWithForcedLabels.add(key);
      this.highlightedNodes["delete"](key);
      if (data.highlighted && !data.hidden) this.highlightedNodes.add(key);
      if (this.settings.zIndex) {
        if (data.zIndex < this.nodeZExtent[0]) this.nodeZExtent[0] = data.zIndex;
        if (data.zIndex > this.nodeZExtent[1]) this.nodeZExtent[1] = data.zIndex;
      }
    }
    /**
     * Update a node the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "updateNode",
    value: function updateNode(key) {
      this.addNode(key);
      var data = this.nodeDataCache[key];
      this.normalizationFunction.applyTo(data);
    }
    /**
     * Remove a node from the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "removeNode",
    value: function removeNode(key) {
      delete this.nodeDataCache[key];
      delete this.nodeProgramIndex[key];
      this.highlightedNodes["delete"](key);
      if (this.hoveredNode === key) this.hoveredNode = null;
      this.nodesWithForcedLabels["delete"](key);
    }
    /**
     * Add an edge into the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "addEdge",
    value: function addEdge(key) {
      var attr = Object.assign({}, this.graph.getEdgeAttributes(key));
      if (this.settings.edgeReducer) attr = this.settings.edgeReducer(key, attr);
      var data = applyEdgeDefaults(this.settings, key, attr);
      this.edgeDataCache[key] = data;
      this.edgesWithForcedLabels["delete"](key);
      if (data.forceLabel && !data.hidden) this.edgesWithForcedLabels.add(key);
      if (this.settings.zIndex) {
        if (data.zIndex < this.edgeZExtent[0]) this.edgeZExtent[0] = data.zIndex;
        if (data.zIndex > this.edgeZExtent[1]) this.edgeZExtent[1] = data.zIndex;
      }
    }
    /**
     * Update an edge in the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "updateEdge",
    value: function updateEdge(key) {
      this.addEdge(key);
    }
    /**
     * Remove an edge from the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "removeEdge",
    value: function removeEdge(key) {
      delete this.edgeDataCache[key];
      delete this.edgeProgramIndex[key];
      if (this.hoveredEdge === key) this.hoveredEdge = null;
      this.edgesWithForcedLabels["delete"](key);
    }
    /**
     * Clear all indices related to nodes.
     * @private
     */
  }, {
    key: "clearNodeIndices",
    value: function clearNodeIndices() {
      this.labelGrid = new LabelGrid();
      this.nodeExtent = {
        x: [0, 1],
        y: [0, 1]
      };
      this.nodeDataCache = {};
      this.edgeProgramIndex = {};
      this.nodesWithForcedLabels = /* @__PURE__ */ new Set();
      this.nodeZExtent = [Infinity, -Infinity];
      this.highlightedNodes = /* @__PURE__ */ new Set();
    }
    /**
     * Clear all indices related to edges.
     * @private
     */
  }, {
    key: "clearEdgeIndices",
    value: function clearEdgeIndices() {
      this.edgeDataCache = {};
      this.edgeProgramIndex = {};
      this.edgesWithForcedLabels = /* @__PURE__ */ new Set();
      this.edgeZExtent = [Infinity, -Infinity];
    }
    /**
     * Clear all indices.
     * @private
     */
  }, {
    key: "clearIndices",
    value: function clearIndices() {
      this.clearEdgeIndices();
      this.clearNodeIndices();
    }
    /**
     * Clear all graph state related to nodes.
     * @private
     */
  }, {
    key: "clearNodeState",
    value: function clearNodeState() {
      this.displayedNodeLabels = /* @__PURE__ */ new Set();
      this.highlightedNodes = /* @__PURE__ */ new Set();
      this.hoveredNode = null;
    }
    /**
     * Clear all graph state related to edges.
     * @private
     */
  }, {
    key: "clearEdgeState",
    value: function clearEdgeState() {
      this.displayedEdgeLabels = /* @__PURE__ */ new Set();
      this.highlightedNodes = /* @__PURE__ */ new Set();
      this.hoveredEdge = null;
    }
    /**
     * Clear all graph state.
     * @private
     */
  }, {
    key: "clearState",
    value: function clearState() {
      this.clearEdgeState();
      this.clearNodeState();
    }
    /**
     * Add the node data to its program.
     * @private
     * @param node The node's graphology ID
     * @param fingerprint A fingerprint used to identity the node with picking
     * @param position The index where to place the node in the program
     */
  }, {
    key: "addNodeToProgram",
    value: function addNodeToProgram(node, fingerprint, position) {
      var data = this.nodeDataCache[node];
      var nodeProgram = this.nodePrograms[data.type];
      if (!nodeProgram) throw new Error('Sigma: could not find a suitable program for node type "'.concat(data.type, '"!'));
      nodeProgram.process(fingerprint, position, data);
      this.nodeProgramIndex[node] = position;
    }
    /**
     * Add the edge data to its program.
     * @private
     * @param edge The edge's graphology ID
     * @param fingerprint A fingerprint used to identity the edge with picking
     * @param position The index where to place the edge in the program
     */
  }, {
    key: "addEdgeToProgram",
    value: function addEdgeToProgram(edge, fingerprint, position) {
      var data = this.edgeDataCache[edge];
      var edgeProgram = this.edgePrograms[data.type];
      if (!edgeProgram) throw new Error('Sigma: could not find a suitable program for edge type "'.concat(data.type, '"!'));
      var extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]];
      edgeProgram.process(fingerprint, position, sourceData, targetData, data);
      this.edgeProgramIndex[edge] = position;
    }
    /**---------------------------------------------------------------------------
     * Public API.
     **---------------------------------------------------------------------------
     */
    /**
     * Function used to get the render params.
     *
     * @return {RenderParams}
     */
  }, {
    key: "getRenderParams",
    value: function getRenderParams() {
      return {
        matrix: this.matrix,
        invMatrix: this.invMatrix,
        width: this.width,
        height: this.height,
        pixelRatio: this.pixelRatio,
        zoomRatio: this.camera.ratio,
        cameraAngle: this.camera.angle,
        sizeRatio: 1 / this.scaleSize(),
        correctionRatio: this.correctionRatio,
        downSizingRatio: this.pickingDownSizingRatio,
        minEdgeThickness: this.settings.minEdgeThickness,
        antiAliasingFeather: this.settings.antiAliasingFeather
      };
    }
    /**
     * Function used to retrieve the actual stage padding value.
     *
     * @return {number}
     */
  }, {
    key: "getStagePadding",
    value: function getStagePadding() {
      var _this$settings = this.settings, stagePadding = _this$settings.stagePadding, autoRescale = _this$settings.autoRescale;
      return autoRescale ? stagePadding || 0 : 0;
    }
    /**
     * Function used to create a layer element.
     *
     * @param {string} id - Context's id.
     * @param {string} tag - The HTML tag to use.
     * @param options
     * @return {Sigma}
     */
  }, {
    key: "createLayer",
    value: function createLayer(id, tag) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (this.elements[id]) throw new Error('Sigma: a layer named "'.concat(id, '" already exists'));
      var element = createElement(tag, {
        position: "absolute"
      }, {
        "class": "sigma-".concat(id)
      });
      if (options.style) Object.assign(element.style, options.style);
      this.elements[id] = element;
      if ("beforeLayer" in options && options.beforeLayer) {
        this.elements[options.beforeLayer].before(element);
      } else if ("afterLayer" in options && options.afterLayer) {
        this.elements[options.afterLayer].after(element);
      } else {
        this.container.appendChild(element);
      }
      return element;
    }
    /**
     * Function used to create a canvas element.
     *
     * @param {string} id - Context's id.
     * @param options
     * @return {Sigma}
     */
  }, {
    key: "createCanvas",
    value: function createCanvas(id) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.createLayer(id, "canvas", options);
    }
    /**
     * Function used to create a canvas context and add the relevant DOM elements.
     *
     * @param  {string} id - Context's id.
     * @param  options
     * @return {Sigma}
     */
  }, {
    key: "createCanvasContext",
    value: function createCanvasContext(id) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var canvas = this.createCanvas(id, options);
      var contextOptions = {
        preserveDrawingBuffer: false,
        antialias: false
      };
      this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
      return this;
    }
    /**
     * Function used to create a WebGL context and add the relevant DOM
     * elements.
     *
     * @param  {string}  id      - Context's id.
     * @param  {object?} options - #getContext params to override (optional)
     * @return {WebGLRenderingContext}
     */
  }, {
    key: "createWebGLContext",
    value: function createWebGLContext(id) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var canvas = (options === null || options === void 0 ? void 0 : options.canvas) || this.createCanvas(id, options);
      if (options.hidden) canvas.remove();
      var contextOptions = _objectSpread2({
        preserveDrawingBuffer: false,
        antialias: false
      }, options);
      var context;
      context = canvas.getContext("webgl2", contextOptions);
      if (!context) context = canvas.getContext("webgl", contextOptions);
      if (!context) context = canvas.getContext("experimental-webgl", contextOptions);
      var gl = context;
      this.webGLContexts[id] = gl;
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      if (options.picking) {
        this.pickingLayers.add(id);
        var newFrameBuffer = gl.createFramebuffer();
        if (!newFrameBuffer) throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(id));
        this.frameBuffers[id] = newFrameBuffer;
      }
      return gl;
    }
    /**
     * Function used to properly kill a layer.
     *
     * @param  {string} id - Layer id.
     * @return {Sigma}
     */
  }, {
    key: "killLayer",
    value: function killLayer(id) {
      var element = this.elements[id];
      if (!element) throw new Error("Sigma: cannot kill layer ".concat(id, ", which does not exist"));
      if (this.webGLContexts[id]) {
        var _gl$getExtension;
        var gl = this.webGLContexts[id];
        (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) === null || _gl$getExtension === void 0 || _gl$getExtension.loseContext();
        delete this.webGLContexts[id];
      } else if (this.canvasContexts[id]) {
        delete this.canvasContexts[id];
      }
      element.remove();
      delete this.elements[id];
      return this;
    }
    /**
     * Method returning the renderer's camera.
     *
     * @return {Camera}
     */
  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }
    /**
     * Method setting the renderer's camera.
     *
     * @param  {Camera} camera - New camera.
     * @return {Sigma}
     */
  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.unbindCameraHandlers();
      this.camera = camera;
      this.bindCameraHandlers();
    }
    /**
     * Method returning the container DOM element.
     *
     * @return {HTMLElement}
     */
  }, {
    key: "getContainer",
    value: function getContainer() {
      return this.container;
    }
    /**
     * Method returning the renderer's graph.
     *
     * @return {Graph}
     */
  }, {
    key: "getGraph",
    value: function getGraph() {
      return this.graph;
    }
    /**
     * Method used to set the renderer's graph.
     *
     * @return {Graph}
     */
  }, {
    key: "setGraph",
    value: function setGraph(graph) {
      if (graph === this.graph) return;
      if (this.hoveredNode && !graph.hasNode(this.hoveredNode)) this.hoveredNode = null;
      if (this.hoveredEdge && !graph.hasEdge(this.hoveredEdge)) this.hoveredEdge = null;
      this.unbindGraphHandlers();
      if (this.checkEdgesEventsFrame !== null) {
        cancelAnimationFrame(this.checkEdgesEventsFrame);
        this.checkEdgesEventsFrame = null;
      }
      this.graph = graph;
      this.bindGraphHandlers();
      this.refresh();
    }
    /**
     * Method returning the mouse captor.
     *
     * @return {MouseCaptor}
     */
  }, {
    key: "getMouseCaptor",
    value: function getMouseCaptor() {
      return this.mouseCaptor;
    }
    /**
     * Method returning the touch captor.
     *
     * @return {TouchCaptor}
     */
  }, {
    key: "getTouchCaptor",
    value: function getTouchCaptor() {
      return this.touchCaptor;
    }
    /**
     * Method returning the current renderer's dimensions.
     *
     * @return {Dimensions}
     */
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.width,
        height: this.height
      };
    }
    /**
     * Method returning the current graph's dimensions.
     *
     * @return {Dimensions}
     */
  }, {
    key: "getGraphDimensions",
    value: function getGraphDimensions() {
      var extent = this.customBBox || this.nodeExtent;
      return {
        width: extent.x[1] - extent.x[0] || 1,
        height: extent.y[1] - extent.y[0] || 1
      };
    }
    /**
     * Method used to get all the sigma node attributes.
     * It's useful for example to get the position of a node
     * and to get values that are set by the nodeReducer
     *
     * @param  {string} key - The node's key.
     * @return {NodeDisplayData | undefined} A copy of the desired node's attribute or undefined if not found
     */
  }, {
    key: "getNodeDisplayData",
    value: function getNodeDisplayData(key) {
      var node = this.nodeDataCache[key];
      return node ? Object.assign({}, node) : void 0;
    }
    /**
     * Method used to get all the sigma edge attributes.
     * It's useful for example to get values that are set by the edgeReducer.
     *
     * @param  {string} key - The edge's key.
     * @return {EdgeDisplayData | undefined} A copy of the desired edge's attribute or undefined if not found
     */
  }, {
    key: "getEdgeDisplayData",
    value: function getEdgeDisplayData(key) {
      var edge = this.edgeDataCache[key];
      return edge ? Object.assign({}, edge) : void 0;
    }
    /**
     * Method used to get the set of currently displayed node labels.
     *
     * @return {Set<string>} A set of node keys whose label is displayed.
     */
  }, {
    key: "getNodeDisplayedLabels",
    value: function getNodeDisplayedLabels() {
      return new Set(this.displayedNodeLabels);
    }
    /**
     * Method used to get the set of currently displayed edge labels.
     *
     * @return {Set<string>} A set of edge keys whose label is displayed.
     */
  }, {
    key: "getEdgeDisplayedLabels",
    value: function getEdgeDisplayedLabels() {
      return new Set(this.displayedEdgeLabels);
    }
    /**
     * Method returning a copy of the settings collection.
     *
     * @return {Settings} A copy of the settings collection.
     */
  }, {
    key: "getSettings",
    value: function getSettings() {
      return _objectSpread2({}, this.settings);
    }
    /**
     * Method returning the current value for a given setting key.
     *
     * @param  {string} key - The setting key to get.
     * @return {any} The value attached to this setting key or undefined if not found
     */
  }, {
    key: "getSetting",
    value: function getSetting(key) {
      return this.settings[key];
    }
    /**
     * Method setting the value of a given setting key. Note that this will schedule
     * a new render next frame.
     *
     * @param  {string} key - The setting key to set.
     * @param  {any}    value - The value to set.
     * @return {Sigma}
     */
  }, {
    key: "setSetting",
    value: function setSetting(key, value) {
      var oldValues = _objectSpread2({}, this.settings);
      this.settings[key] = value;
      validateSettings(this.settings);
      this.handleSettingsUpdate(oldValues);
      this.scheduleRefresh();
      return this;
    }
    /**
     * Method updating the value of a given setting key using the provided function.
     * Note that this will schedule a new render next frame.
     *
     * @param  {string}   key     - The setting key to set.
     * @param  {function} updater - The update function.
     * @return {Sigma}
     */
  }, {
    key: "updateSetting",
    value: function updateSetting(key, updater) {
      this.setSetting(key, updater(this.settings[key]));
      return this;
    }
    /**
     * Method setting multiple settings at once.
     *
     * @param  {Partial<Settings>} settings - The settings to set.
     * @return {Sigma}
     */
  }, {
    key: "setSettings",
    value: function setSettings(settings) {
      var oldValues = _objectSpread2({}, this.settings);
      this.settings = _objectSpread2(_objectSpread2({}, this.settings), settings);
      validateSettings(this.settings);
      this.handleSettingsUpdate(oldValues);
      this.scheduleRefresh();
      return this;
    }
    /**
     * Method used to resize the renderer.
     *
     * @param  {boolean} force - If true, then resize is processed even if size is unchanged (optional).
     * @return {Sigma}
     */
  }, {
    key: "resize",
    value: function resize(force) {
      var previousWidth = this.width, previousHeight = this.height;
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.pixelRatio = getPixelRatio();
      if (this.width === 0) {
        if (this.settings.allowInvalidContainer) this.width = 1;
        else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }
      if (this.height === 0) {
        if (this.settings.allowInvalidContainer) this.height = 1;
        else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }
      if (!force && previousWidth === this.width && previousHeight === this.height) return this;
      for (var id in this.elements) {
        var element = this.elements[id];
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
      }
      for (var _id in this.canvasContexts) {
        this.elements[_id].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[_id].setAttribute("height", this.height * this.pixelRatio + "px");
        if (this.pixelRatio !== 1) this.canvasContexts[_id].scale(this.pixelRatio, this.pixelRatio);
      }
      for (var _id2 in this.webGLContexts) {
        this.elements[_id2].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[_id2].setAttribute("height", this.height * this.pixelRatio + "px");
        var gl = this.webGLContexts[_id2];
        gl.viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);
        if (this.pickingLayers.has(_id2)) {
          var currentTexture = this.textures[_id2];
          if (currentTexture) gl.deleteTexture(currentTexture);
        }
      }
      this.emit("resize");
      return this;
    }
    /**
     * Method used to clear all the canvases.
     *
     * @return {Sigma}
     */
  }, {
    key: "clear",
    value: function clear() {
      this.emit("beforeClear");
      this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
      this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
      this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
      this.emit("afterClear");
      return this;
    }
    /**
     * Method used to refresh, i.e. force the renderer to reprocess graph
     * data and render, but keep the state.
     * - if a partialGraph is provided, we only reprocess those nodes & edges.
     * - if schedule is TRUE, we schedule a render instead of sync render
     * - if skipIndexation is TRUE, then labelGrid & program indexation are skipped (can be used if you haven't modify x, y, zIndex & size)
     *
     * @return {Sigma}
     */
  }, {
    key: "refresh",
    value: function refresh(opts) {
      var _this10 = this;
      var skipIndexation = (opts === null || opts === void 0 ? void 0 : opts.skipIndexation) !== void 0 ? opts === null || opts === void 0 ? void 0 : opts.skipIndexation : false;
      var schedule = (opts === null || opts === void 0 ? void 0 : opts.schedule) !== void 0 ? opts.schedule : false;
      var fullRefresh = !opts || !opts.partialGraph;
      if (fullRefresh) {
        this.clearEdgeIndices();
        this.clearNodeIndices();
        this.graph.forEachNode(function(node2) {
          return _this10.addNode(node2);
        });
        this.graph.forEachEdge(function(edge2) {
          return _this10.addEdge(edge2);
        });
      } else {
        var _opts$partialGraph, _opts$partialGraph2;
        var nodes = ((_opts$partialGraph = opts.partialGraph) === null || _opts$partialGraph === void 0 ? void 0 : _opts$partialGraph.nodes) || [];
        for (var i2 = 0, l2 = (nodes === null || nodes === void 0 ? void 0 : nodes.length) || 0; i2 < l2; i2++) {
          var node = nodes[i2];
          this.updateNode(node);
          if (skipIndexation) {
            var programIndex = this.nodeProgramIndex[node];
            if (programIndex === void 0) throw new Error('Sigma: node "'.concat(node, `" can't be repaint`));
            this.addNodeToProgram(node, this.nodeIndices[node], programIndex);
          }
        }
        var edges = (opts === null || opts === void 0 || (_opts$partialGraph2 = opts.partialGraph) === null || _opts$partialGraph2 === void 0 ? void 0 : _opts$partialGraph2.edges) || [];
        for (var _i4 = 0, _l4 = edges.length; _i4 < _l4; _i4++) {
          var edge = edges[_i4];
          this.updateEdge(edge);
          if (skipIndexation) {
            var _programIndex = this.edgeProgramIndex[edge];
            if (_programIndex === void 0) throw new Error('Sigma: edge "'.concat(edge, `" can't be repaint`));
            this.addEdgeToProgram(edge, this.edgeIndices[edge], _programIndex);
          }
        }
      }
      if (fullRefresh || !skipIndexation) this.needToProcess = true;
      if (schedule) this.scheduleRender();
      else this.render();
      return this;
    }
    /**
     * Method used to schedule a render at the next available frame.
     * This method can be safely called on a same frame because it basically
     * debounces refresh to the next frame.
     *
     * @return {Sigma}
     */
  }, {
    key: "scheduleRender",
    value: function scheduleRender() {
      var _this11 = this;
      if (!this.renderFrame) {
        this.renderFrame = requestAnimationFrame(function() {
          _this11.render();
        });
      }
      return this;
    }
    /**
     * Method used to schedule a refresh (i.e. fully reprocess graph data and render)
     * at the next available frame.
     * This method can be safely called on a same frame because it basically
     * debounces refresh to the next frame.
     *
     * @return {Sigma}
     */
  }, {
    key: "scheduleRefresh",
    value: function scheduleRefresh(opts) {
      return this.refresh(_objectSpread2(_objectSpread2({}, opts), {}, {
        schedule: true
      }));
    }
    /**
     * Method used to (un)zoom, while preserving the position of a viewport point.
     * Used for instance to zoom "on the mouse cursor".
     *
     * @param viewportTarget
     * @param newRatio
     * @return {CameraState}
     */
  }, {
    key: "getViewportZoomedState",
    value: function getViewportZoomedState(viewportTarget, newRatio) {
      var _this$camera$getState = this.camera.getState(), ratio = _this$camera$getState.ratio, angle = _this$camera$getState.angle, x2 = _this$camera$getState.x, y2 = _this$camera$getState.y;
      var _this$settings2 = this.settings, minCameraRatio = _this$settings2.minCameraRatio, maxCameraRatio = _this$settings2.maxCameraRatio;
      if (typeof maxCameraRatio === "number") newRatio = Math.min(newRatio, maxCameraRatio);
      if (typeof minCameraRatio === "number") newRatio = Math.max(newRatio, minCameraRatio);
      var ratioDiff = newRatio / ratio;
      var center = {
        x: this.width / 2,
        y: this.height / 2
      };
      var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
      var graphCenterPosition = this.viewportToFramedGraph(center);
      return {
        angle,
        x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x2,
        y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y2,
        ratio: newRatio
      };
    }
    /**
     * Method returning the abstract rectangle containing the graph according
     * to the camera's state.
     *
     * @return {object} - The view's rectangle.
     */
  }, {
    key: "viewRectangle",
    value: function viewRectangle() {
      var p1 = this.viewportToFramedGraph({
        x: 0,
        y: 0
      }), p2 = this.viewportToFramedGraph({
        x: this.width,
        y: 0
      }), h2 = this.viewportToFramedGraph({
        x: 0,
        y: this.height
      });
      return {
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        height: p2.y - h2.y
      };
    }
    /**
     * Method returning the coordinates of a point from the framed graph system to the viewport system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
  }, {
    key: "framedGraphToViewport",
    value: function framedGraphToViewport(coordinates) {
      var override = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
      var matrix = override.matrix ? override.matrix : recomputeMatrix ? matrixFromCamera(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getStagePadding()) : this.matrix;
      var viewportPos = multiplyVec2(matrix, coordinates);
      return {
        x: (1 + viewportPos.x) * this.width / 2,
        y: (1 - viewportPos.y) * this.height / 2
      };
    }
    /**
     * Method returning the coordinates of a point from the viewport system to the framed graph system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
  }, {
    key: "viewportToFramedGraph",
    value: function viewportToFramedGraph(coordinates) {
      var override = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
      var invMatrix = override.matrix ? override.matrix : recomputeMatrix ? matrixFromCamera(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getStagePadding(), true) : this.invMatrix;
      var res = multiplyVec2(invMatrix, {
        x: coordinates.x / this.width * 2 - 1,
        y: 1 - coordinates.y / this.height * 2
      });
      if (isNaN(res.x)) res.x = 0;
      if (isNaN(res.y)) res.y = 0;
      return res;
    }
    /**
     * Method used to translate a point's coordinates from the viewport system (pixel distance from the top-left of the
     * stage) to the graph system (the reference system of data as they are in the given graph instance).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  viewportPoint
     * @param {CoordinateConversionOverride} override
     */
  }, {
    key: "viewportToGraph",
    value: function viewportToGraph(viewportPoint) {
      var override = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint, override));
    }
    /**
     * Method used to translate a point's coordinates from the graph system (the reference system of data as they are in
     * the given graph instance) to the viewport system (pixel distance from the top-left of the stage).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  graphPoint
     * @param {CoordinateConversionOverride} override
     */
  }, {
    key: "graphToViewport",
    value: function graphToViewport(graphPoint) {
      var override = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.framedGraphToViewport(this.normalizationFunction(graphPoint), override);
    }
    /**
     * Method returning the distance multiplier between the graph system and the
     * viewport system.
     */
  }, {
    key: "getGraphToViewportRatio",
    value: function getGraphToViewportRatio() {
      var graphP1 = {
        x: 0,
        y: 0
      };
      var graphP2 = {
        x: 1,
        y: 1
      };
      var graphD = Math.sqrt(Math.pow(graphP1.x - graphP2.x, 2) + Math.pow(graphP1.y - graphP2.y, 2));
      var viewportP1 = this.graphToViewport(graphP1);
      var viewportP2 = this.graphToViewport(graphP2);
      var viewportD = Math.sqrt(Math.pow(viewportP1.x - viewportP2.x, 2) + Math.pow(viewportP1.y - viewportP2.y, 2));
      return viewportD / graphD;
    }
    /**
     * Method returning the graph's bounding box.
     *
     * @return {{ x: Extent, y: Extent }}
     */
  }, {
    key: "getBBox",
    value: function getBBox() {
      return this.nodeExtent;
    }
    /**
     * Method returning the graph's custom bounding box, if any.
     *
     * @return {{ x: Extent, y: Extent } | null}
     */
  }, {
    key: "getCustomBBox",
    value: function getCustomBBox() {
      return this.customBBox;
    }
    /**
     * Method used to override the graph's bounding box with a custom one. Give `null` as the argument to stop overriding.
     *
     * @return {Sigma}
     */
  }, {
    key: "setCustomBBox",
    value: function setCustomBBox(customBBox) {
      this.customBBox = customBBox;
      this.scheduleRender();
      return this;
    }
    /**
     * Method used to shut the container & release event listeners.
     *
     * @return {undefined}
     */
  }, {
    key: "kill",
    value: function kill() {
      this.emit("kill");
      this.removeAllListeners();
      this.unbindCameraHandlers();
      window.removeEventListener("resize", this.activeListeners.handleResize);
      this.mouseCaptor.kill();
      this.touchCaptor.kill();
      this.unbindGraphHandlers();
      this.clearIndices();
      this.clearState();
      this.nodeDataCache = {};
      this.edgeDataCache = {};
      this.highlightedNodes.clear();
      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
      }
      if (this.renderHighlightedNodesFrame) {
        cancelAnimationFrame(this.renderHighlightedNodesFrame);
        this.renderHighlightedNodesFrame = null;
      }
      var container = this.container;
      while (container.firstChild) container.removeChild(container.firstChild);
      for (var type in this.nodePrograms) {
        this.nodePrograms[type].kill();
      }
      for (var _type8 in this.nodeHoverPrograms) {
        this.nodeHoverPrograms[_type8].kill();
      }
      for (var _type9 in this.edgePrograms) {
        this.edgePrograms[_type9].kill();
      }
      this.nodePrograms = {};
      this.nodeHoverPrograms = {};
      this.edgePrograms = {};
      for (var id in this.elements) {
        this.killLayer(id);
      }
      this.canvasContexts = {};
      this.webGLContexts = {};
      this.elements = {};
    }
    /**
     * Method used to scale the given size according to the camera's ratio, i.e.
     * zooming state.
     *
     * @param  {number?} size -        The size to scale (node size, edge thickness etc.).
     * @param  {number?} cameraRatio - A camera ratio (defaults to the actual camera ratio).
     * @return {number}              - The scaled size.
     */
  }, {
    key: "scaleSize",
    value: function scaleSize() {
      var size = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      var cameraRatio = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.camera.ratio;
      return size / this.settings.zoomToSizeRatioFunction(cameraRatio) * (this.getSetting("itemSizesReference") === "positions" ? cameraRatio * this.graphToViewportRatio : 1);
    }
    /**
     * Method that returns the collection of all used canvases.
     * At the moment, the instantiated canvases are the following, and in the
     * following order in the DOM:
     * - `edges`
     * - `nodes`
     * - `edgeLabels`
     * - `labels`
     * - `hovers`
     * - `hoverNodes`
     * - `mouse`
     *
     * @return {PlainObject<HTMLCanvasElement>} - The collection of canvases.
     */
  }, {
    key: "getCanvases",
    value: function getCanvases() {
      var res = {};
      for (var layer in this.elements) if (this.elements[layer] instanceof HTMLCanvasElement) res[layer] = this.elements[layer];
      return res;
    }
  }]);
}(TypedEventEmitter);

// node_modules/@react-sigma/core/lib/react-sigma_core.esm.min.js
var d = (0, import_react.createContext)(null);
var f = d.Provider;
function h() {
  const e2 = (0, import_react.useContext)(d);
  if (null == e2) throw new Error("No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>");
  return e2;
}
function v() {
  return h().sigma;
}
function p() {
  const { sigma: e2 } = h();
  return (0, import_react.useCallback)((t2) => {
    e2 && Object.keys(t2).forEach((n2) => {
      e2.setSetting(n2, t2[n2]);
    });
  }, [e2]);
}
function w(e2) {
  return new Set(Object.keys(e2));
}
var b = w({ clickNode: true, rightClickNode: true, downNode: true, enterNode: true, leaveNode: true, doubleClickNode: true, wheelNode: true, clickEdge: true, rightClickEdge: true, downEdge: true, enterEdge: true, leaveEdge: true, doubleClickEdge: true, wheelEdge: true, clickStage: true, rightClickStage: true, downStage: true, doubleClickStage: true, wheelStage: true, beforeRender: true, afterRender: true, kill: true, upStage: true, upEdge: true, upNode: true, enterStage: true, leaveStage: true, resize: true, afterClear: true, afterProcess: true, beforeClear: true, beforeProcess: true, moveBody: true });
var E = w({ click: true, rightClick: true, doubleClick: true, mouseup: true, mousedown: true, mousemove: true, mousemovebody: true, mouseleave: true, mouseenter: true, wheel: true });
var _ = w({ touchup: true, touchdown: true, touchmove: true, touchmovebody: true, tap: true, doubletap: true });
var O = w({ updated: true });
function y() {
  const e2 = v(), t2 = p(), [n2, r2] = (0, import_react.useState)({});
  return (0, import_react.useEffect)(() => {
    if (!e2 || !n2) return;
    const t3 = n2, r3 = Object.keys(t3);
    return r3.forEach((n3) => {
      const r4 = t3[n3];
      b.has(n3) && e2.on(n3, r4), E.has(n3) && e2.getMouseCaptor().on(n3, r4), _.has(n3) && e2.getTouchCaptor().on(n3, r4), O.has(n3) && e2.getCamera().on(n3, r4);
    }), () => {
      e2 && r3.forEach((n3) => {
        const r4 = t3[n3];
        b.has(n3) && e2.off(n3, r4), E.has(n3) && e2.getMouseCaptor().off(n3, r4), _.has(n3) && e2.getTouchCaptor().off(n3, r4), O.has(n3) && e2.getCamera().off(n3, r4);
      });
    };
  }, [e2, n2, t2]), r2;
}
function C() {
  const e2 = v();
  return (0, import_react.useCallback)((t2, n2 = true) => {
    e2 && t2 && (n2 && e2.getGraph().order > 0 && e2.getGraph().clear(), e2.getGraph().import(t2), e2.refresh());
  }, [e2]);
}
function j(e2, t2) {
  if (e2 === t2) return true;
  if ("object" == typeof e2 && null != e2 && "object" == typeof t2 && null != t2) {
    if (Object.keys(e2).length != Object.keys(t2).length) return false;
    for (const n2 in e2) {
      if (!Object.hasOwn(t2, n2)) return false;
      if (!j(e2[n2], t2[n2])) return false;
    }
    return true;
  }
  return false;
}
function x(e2, t2) {
  let n2;
  return (r2) => new Promise((a2) => {
    n2 && clearTimeout(n2), n2 = setTimeout(() => {
      a2(e2(r2));
    }, t2);
  });
}
function N(e2) {
  const t2 = v(), [n2, r2] = (0, import_react.useState)(e2 || {});
  (0, import_react.useEffect)(() => {
    r2((t3) => j(t3, e2 || {}) ? t3 : e2 || {});
  }, [e2]);
  const s2 = (0, import_react.useCallback)((e3) => {
    t2.getCamera().animatedZoom(Object.assign(Object.assign({}, n2), e3));
  }, [t2, n2]), l2 = (0, import_react.useCallback)((e3) => {
    t2.getCamera().animatedUnzoom(Object.assign(Object.assign({}, n2), e3));
  }, [t2, n2]), i2 = (0, import_react.useCallback)((e3) => {
    t2.getCamera().animatedReset(Object.assign(Object.assign({}, n2), e3));
  }, [t2, n2]), u2 = (0, import_react.useCallback)((e3, r3) => {
    t2.getCamera().animate(e3, Object.assign(Object.assign({}, n2), r3));
  }, [t2, n2]), m = (0, import_react.useCallback)((e3, r3) => {
    const a2 = t2.getNodeDisplayData(e3);
    a2 ? t2.getCamera().animate(a2, Object.assign(Object.assign({}, n2), r3)) : console.warn(`Node ${e3} not found`);
  }, [t2, n2]);
  return { zoomIn: s2, zoomOut: l2, reset: i2, goto: u2, gotoNode: m };
}
function k(e2) {
  const t2 = h(), [n2, r2] = (0, import_react.useState)(false), [s2, l2] = (0, import_react.useState)(e2 || t2.container), i2 = (0, import_react.useCallback)(() => r2((e3) => !e3), []);
  (0, import_react.useEffect)(() => (document.addEventListener("fullscreenchange", i2), () => document.removeEventListener("fullscreenchange", i2)), [i2]), (0, import_react.useEffect)(() => {
    l2(e2 || t2.container);
  }, [e2, t2.container]);
  return { toggle: (0, import_react.useCallback)(() => {
    var e3;
    e3 = s2, document.fullscreenElement !== e3 ? e3.requestFullscreen() : document.exitFullscreen && document.exitFullscreen();
  }, [s2]), isFullScreen: n2 };
}
var S = (0, import_react.forwardRef)(({ graph: e2, id: n2, className: r2, style: a2, settings: s2 = {}, children: d2 }, h2) => {
  const v2 = (0, import_react.useRef)(null), p2 = (0, import_react.useRef)(null), w2 = { className: `react-sigma ${r2 || ""}`, id: n2, style: a2 }, [b2, E2] = (0, import_react.useState)(null), [_2, O2] = (0, import_react.useState)(s2);
  (0, import_react.useEffect)(() => {
    O2((e3) => j(e3, s2) ? e3 : s2);
  }, [s2]), (0, import_react.useEffect)(() => {
    E2((t2) => {
      let n3 = null;
      if (null !== p2.current) {
        let r3 = new Graph();
        e2 && (r3 = "function" == typeof e2 ? new e2() : e2);
        let a3 = null;
        t2 && (a3 = t2.getCamera().getState(), t2.kill()), n3 = new Sigma$1(r3, p2.current, _2), a3 && n3.getCamera().setState(a3);
      }
      return n3;
    });
  }, [p2, e2, _2]), (0, import_react.useImperativeHandle)(h2, () => b2, [b2]);
  const y2 = (0, import_react.useMemo)(() => b2 && v2.current ? { sigma: b2, container: v2.current } : null, [b2, v2]), C2 = null !== y2 ? import_react.default.createElement(f, { value: y2 }, d2) : null;
  return import_react.default.createElement("div", Object.assign({}, w2, { ref: v2 }), import_react.default.createElement("div", { className: "sigma-container", ref: p2 }), C2);
});
var H = ({ id: e2, className: n2, style: r2, children: a2, position: c2 = "bottom-left" }) => {
  const o2 = { className: `react-sigma-controls ${n2 || ""} ${c2}`, id: e2, style: r2 };
  return import_react.default.createElement("div", Object.assign({}, o2), a2);
};
var M;
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, P.apply(null, arguments);
}
var z;
var V = function(t2) {
  return e.createElement("svg", P({ xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", className: "dot-circle-regular_svg__svg-inline--fa dot-circle-regular_svg__fa-dot-circle dot-circle-regular_svg__fa-w-16", "data-icon": "dot-circle", "data-prefix": "far", viewBox: "0 0 512 512", width: "1em", height: "1em" }, t2), M || (M = e.createElement("path", { fill: "currentColor", d: "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8m0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80" })));
};
function B() {
  return B = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, B.apply(null, arguments);
}
var F;
var $ = function(t2) {
  return e.createElement("svg", B({ xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", className: "minus-solid_svg__svg-inline--fa minus-solid_svg__fa-minus minus-solid_svg__fa-w-14", "data-icon": "minus", "data-prefix": "fas", viewBox: "0 0 448 512", width: "1em", height: "1em" }, t2), z || (z = e.createElement("path", { fill: "currentColor", d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32" })));
};
function I() {
  return I = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, I.apply(null, arguments);
}
var T = function(t2) {
  return e.createElement("svg", I({ xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", className: "plus-solid_svg__svg-inline--fa plus-solid_svg__fa-plus plus-solid_svg__fa-w-14", "data-icon": "plus", "data-prefix": "fas", viewBox: "0 0 448 512", width: "1em", height: "1em" }, t2), F || (F = e.createElement("path", { fill: "currentColor", d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32" })));
};
var D = ({ className: e2, style: n2, animationDuration: r2 = 200, children: a2, labels: c2 = {} }) => {
  const { zoomIn: o2, zoomOut: s2, reset: l2 } = N({ duration: r2, factor: 1.5 }), i2 = { style: n2, className: `react-sigma-control ${e2 || ""}` };
  return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement("div", Object.assign({}, i2), import_react.default.createElement("button", { onClick: () => o2(), title: c2.zoomIn || "Zoom In" }, a2 ? a2[0] : import_react.default.createElement(T, { style: { width: "1em" } }))), import_react.default.createElement("div", Object.assign({}, i2), import_react.default.createElement("button", { onClick: () => s2(), title: c2.zoomOut || "Zoom Out" }, a2 ? a2[1] : import_react.default.createElement($, { style: { width: "1em" } }))), import_react.default.createElement("div", Object.assign({}, i2), import_react.default.createElement("button", { onClick: () => l2(), title: c2.reset || "See whole graph" }, a2 ? a2[2] : import_react.default.createElement(V, { style: { width: "1em" } }))));
};
var G;
function R() {
  return R = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, R.apply(null, arguments);
}
var Z;
var L = function(t2) {
  return e.createElement("svg", R({ xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", className: "compress-solid_svg__svg-inline--fa compress-solid_svg__fa-compress compress-solid_svg__fa-w-14", "data-icon": "compress", "data-prefix": "fas", viewBox: "0 0 448 512", width: "1em", height: "1em" }, t2), G || (G = e.createElement("path", { fill: "currentColor", d: "M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12m-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24m0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12" })));
};
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, q.apply(null, arguments);
}
var U = function(t2) {
  return e.createElement("svg", q({ xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", className: "expand-solid_svg__svg-inline--fa expand-solid_svg__fa-expand expand-solid_svg__fa-w-14", "data-icon": "expand", "data-prefix": "fas", viewBox: "0 0 448 512", width: "1em", height: "1em" }, t2), Z || (Z = e.createElement("path", { fill: "currentColor", d: "M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12M288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12m148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12M160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12" })));
};
var A = ({ id: e2, className: n2, style: r2, container: a2, children: c2, labels: o2 = {} }) => {
  const { isFullScreen: s2, toggle: l2 } = k(null == a2 ? void 0 : a2.current), i2 = { className: `react-sigma-control ${n2 || ""}`, id: e2, style: r2 };
  return document.fullscreenEnabled ? import_react.default.createElement("div", Object.assign({}, i2), import_react.default.createElement("button", { onClick: l2, title: s2 ? o2.exit || "Exit fullscreen" : o2.enter || "Enter fullscreen" }, c2 && !s2 && c2[0], c2 && s2 && c2[1], !c2 && !s2 && import_react.default.createElement(U, { style: { width: "1em" } }), !c2 && s2 && import_react.default.createElement(L, { style: { width: "1em" } }))) : null;
};
export {
  H as ControlsContainer,
  A as FullScreenControl,
  S as SigmaContainer,
  d as SigmaContext,
  f as SigmaProvider,
  D as ZoomControl,
  x as debounce,
  j as isEqual,
  N as useCamera,
  k as useFullScreen,
  C as useLoadGraph,
  y as useRegisterEvents,
  p as useSetSettings,
  v as useSigma,
  h as useSigmaContext
};
//# sourceMappingURL=@react-sigma_core.js.map
