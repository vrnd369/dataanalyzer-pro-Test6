import {
  require_is_graph
} from "./chunk-LE6F6KRJ.js";
import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/graphology-metrics/centrality/degree.js
var require_degree = __commonJS({
  "node_modules/graphology-metrics/centrality/degree.js"(exports) {
    var isGraph = require_is_graph();
    function abstractDegreeCentrality(assign, method, graph, options) {
      var name = method + "Centrality";
      if (!isGraph(graph))
        throw new Error(
          "graphology-centrality/" + name + ": the given graph is not a valid graphology instance."
        );
      if (method !== "degree" && graph.type === "undirected")
        throw new Error(
          "graphology-centrality/" + name + ": cannot compute " + method + " centrality on an undirected graph."
        );
      options = options || {};
      var centralityAttribute = options.nodeCentralityAttribute || name;
      var ratio = graph.order - 1;
      var getDegree = graph[method].bind(graph);
      if (assign) {
        graph.updateEachNodeAttributes(
          function(node, attr) {
            attr[centralityAttribute] = getDegree(node) / ratio;
            return attr;
          },
          { attributes: [centralityAttribute] }
        );
        return;
      }
      var centralities = {};
      graph.forEachNode(function(node) {
        centralities[node] = getDegree(node) / ratio;
      });
      return centralities;
    }
    var degreeCentrality = abstractDegreeCentrality.bind(null, false, "degree");
    var inDegreeCentrality = abstractDegreeCentrality.bind(null, false, "inDegree");
    var outDegreeCentrality = abstractDegreeCentrality.bind(
      null,
      false,
      "outDegree"
    );
    degreeCentrality.assign = abstractDegreeCentrality.bind(null, true, "degree");
    inDegreeCentrality.assign = abstractDegreeCentrality.bind(
      null,
      true,
      "inDegree"
    );
    outDegreeCentrality.assign = abstractDegreeCentrality.bind(
      null,
      true,
      "outDegree"
    );
    exports.degreeCentrality = degreeCentrality;
    exports.inDegreeCentrality = inDegreeCentrality;
    exports.outDegreeCentrality = outDegreeCentrality;
  }
});

// node_modules/obliterator/support.js
var require_support = __commonJS({
  "node_modules/obliterator/support.js"(exports) {
    exports.ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== "undefined";
    exports.SYMBOL_SUPPORT = typeof Symbol !== "undefined";
  }
});

// node_modules/obliterator/foreach.js
var require_foreach = __commonJS({
  "node_modules/obliterator/foreach.js"(exports, module) {
    var support = require_support();
    var ARRAY_BUFFER_SUPPORT = support.ARRAY_BUFFER_SUPPORT;
    var SYMBOL_SUPPORT = support.SYMBOL_SUPPORT;
    module.exports = function forEach(iterable, callback) {
      var iterator, k, i, l, s;
      if (!iterable) throw new Error("obliterator/forEach: invalid iterable.");
      if (typeof callback !== "function")
        throw new Error("obliterator/forEach: expecting a callback.");
      if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
        for (i = 0, l = iterable.length; i < l; i++) callback(iterable[i], i);
        return;
      }
      if (typeof iterable.forEach === "function") {
        iterable.forEach(callback);
        return;
      }
      if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
        iterable = iterable[Symbol.iterator]();
      }
      if (typeof iterable.next === "function") {
        iterator = iterable;
        i = 0;
        while (s = iterator.next(), s.done !== true) {
          callback(s.value, i);
          i++;
        }
        return;
      }
      for (k in iterable) {
        if (iterable.hasOwnProperty(k)) {
          callback(iterable[k], k);
        }
      }
      return;
    };
  }
});

// node_modules/mnemonist/utils/typed-arrays.js
var require_typed_arrays = __commonJS({
  "node_modules/mnemonist/utils/typed-arrays.js"(exports) {
    var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1;
    var MAX_16BIT_INTEGER = Math.pow(2, 16) - 1;
    var MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;
    var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1;
    var MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1;
    var MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;
    exports.getPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_8BIT_INTEGER)
        return Uint8Array;
      if (maxIndex <= MAX_16BIT_INTEGER)
        return Uint16Array;
      if (maxIndex <= MAX_32BIT_INTEGER)
        return Uint32Array;
      throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.");
    };
    exports.getSignedPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
        return Int8Array;
      if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
        return Int16Array;
      if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
        return Int32Array;
      return Float64Array;
    };
    exports.getNumberType = function(value) {
      if (value === (value | 0)) {
        if (Math.sign(value) === -1) {
          if (value <= 127 && value >= -128)
            return Int8Array;
          if (value <= 32767 && value >= -32768)
            return Int16Array;
          return Int32Array;
        } else {
          if (value <= 255)
            return Uint8Array;
          if (value <= 65535)
            return Uint16Array;
          return Uint32Array;
        }
      }
      return Float64Array;
    };
    var TYPE_PRIORITY = {
      Uint8Array: 1,
      Int8Array: 2,
      Uint16Array: 3,
      Int16Array: 4,
      Uint32Array: 5,
      Int32Array: 6,
      Float32Array: 7,
      Float64Array: 8
    };
    exports.getMinimalRepresentation = function(array, getter) {
      var maxType = null, maxPriority = 0, p, t, v, i, l;
      for (i = 0, l = array.length; i < l; i++) {
        v = getter ? getter(array[i]) : array[i];
        t = exports.getNumberType(v);
        p = TYPE_PRIORITY[t.name];
        if (p > maxPriority) {
          maxPriority = p;
          maxType = t;
        }
      }
      return maxType;
    };
    exports.isTypedArray = function(value) {
      return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
    };
    exports.concat = function() {
      var length = 0, i, o, l;
      for (i = 0, l = arguments.length; i < l; i++)
        length += arguments[i].length;
      var array = new arguments[0].constructor(length);
      for (i = 0, o = 0; i < l; i++) {
        array.set(arguments[i], o);
        o += arguments[i].length;
      }
      return array;
    };
    exports.indices = function(length) {
      var PointerArray = exports.getPointerArray(length);
      var array = new PointerArray(length);
      for (var i = 0; i < length; i++)
        array[i] = i;
      return array;
    };
  }
});

// node_modules/mnemonist/utils/iterables.js
var require_iterables = __commonJS({
  "node_modules/mnemonist/utils/iterables.js"(exports) {
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    function isArrayLike(target) {
      return Array.isArray(target) || typed.isTypedArray(target);
    }
    function guessLength(target) {
      if (typeof target.length === "number")
        return target.length;
      if (typeof target.size === "number")
        return target.size;
      return;
    }
    function toArray(target) {
      var l = guessLength(target);
      var array = typeof l === "number" ? new Array(l) : [];
      var i = 0;
      forEach(target, function(value) {
        array[i++] = value;
      });
      return array;
    }
    function toArrayWithIndices(target) {
      var l = guessLength(target);
      var IndexArray = typeof l === "number" ? typed.getPointerArray(l) : Array;
      var array = typeof l === "number" ? new Array(l) : [];
      var indices = typeof l === "number" ? new IndexArray(l) : [];
      var i = 0;
      forEach(target, function(value) {
        array[i] = value;
        indices[i] = i++;
      });
      return [array, indices];
    }
    exports.isArrayLike = isArrayLike;
    exports.guessLength = guessLength;
    exports.toArray = toArray;
    exports.toArrayWithIndices = toArrayWithIndices;
  }
});

// node_modules/obliterator/iterator.js
var require_iterator = __commonJS({
  "node_modules/obliterator/iterator.js"(exports, module) {
    function Iterator(next) {
      if (typeof next !== "function")
        throw new Error("obliterator/iterator: expecting a function!");
      this.next = next;
    }
    if (typeof Symbol !== "undefined")
      Iterator.prototype[Symbol.iterator] = function() {
        return this;
      };
    Iterator.of = function() {
      var args = arguments, l = args.length, i = 0;
      return new Iterator(function() {
        if (i >= l) return { done: true };
        return { done: false, value: args[i++] };
      });
    };
    Iterator.empty = function() {
      var iterator = new Iterator(function() {
        return { done: true };
      });
      return iterator;
    };
    Iterator.fromSequence = function(sequence) {
      var i = 0, l = sequence.length;
      return new Iterator(function() {
        if (i >= l) return { done: true };
        return { done: false, value: sequence[i++] };
      });
    };
    Iterator.is = function(value) {
      if (value instanceof Iterator) return true;
      return typeof value === "object" && value !== null && typeof value.next === "function";
    };
    module.exports = Iterator;
  }
});

// node_modules/mnemonist/fixed-deque.js
var require_fixed_deque = __commonJS({
  "node_modules/mnemonist/fixed-deque.js"(exports, module) {
    var iterables = require_iterables();
    var Iterator = require_iterator();
    function FixedDeque(ArrayClass, capacity) {
      if (arguments.length < 2)
        throw new Error("mnemonist/fixed-deque: expecting an Array class and a capacity.");
      if (typeof capacity !== "number" || capacity <= 0)
        throw new Error("mnemonist/fixed-deque: `capacity` should be a positive number.");
      this.ArrayClass = ArrayClass;
      this.capacity = capacity;
      this.items = new ArrayClass(this.capacity);
      this.clear();
    }
    FixedDeque.prototype.clear = function() {
      this.start = 0;
      this.size = 0;
    };
    FixedDeque.prototype.push = function(item) {
      if (this.size === this.capacity)
        throw new Error("mnemonist/fixed-deque.push: deque capacity (" + this.capacity + ") exceeded!");
      var index = this.start + this.size;
      if (index >= this.capacity)
        index -= this.capacity;
      this.items[index] = item;
      return ++this.size;
    };
    FixedDeque.prototype.unshift = function(item) {
      if (this.size === this.capacity)
        throw new Error("mnemonist/fixed-deque.unshift: deque capacity (" + this.capacity + ") exceeded!");
      var index = this.start - 1;
      if (this.start === 0)
        index = this.capacity - 1;
      this.items[index] = item;
      this.start = index;
      return ++this.size;
    };
    FixedDeque.prototype.pop = function() {
      if (this.size === 0)
        return;
      this.size--;
      var index = this.start + this.size;
      if (index >= this.capacity)
        index -= this.capacity;
      return this.items[index];
    };
    FixedDeque.prototype.shift = function() {
      if (this.size === 0)
        return;
      var index = this.start;
      this.size--;
      this.start++;
      if (this.start === this.capacity)
        this.start = 0;
      return this.items[index];
    };
    FixedDeque.prototype.peekFirst = function() {
      if (this.size === 0)
        return;
      return this.items[this.start];
    };
    FixedDeque.prototype.peekLast = function() {
      if (this.size === 0)
        return;
      var index = this.start + this.size - 1;
      if (index >= this.capacity)
        index -= this.capacity;
      return this.items[index];
    };
    FixedDeque.prototype.get = function(index) {
      if (this.size === 0 || index >= this.capacity)
        return;
      index = this.start + index;
      if (index >= this.capacity)
        index -= this.capacity;
      return this.items[index];
    };
    FixedDeque.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var c = this.capacity, l = this.size, i = this.start, j = 0;
      while (j < l) {
        callback.call(scope, this.items[i], j, this);
        i++;
        j++;
        if (i === c)
          i = 0;
      }
    };
    FixedDeque.prototype.toArray = function() {
      var offset = this.start + this.size;
      if (offset < this.capacity)
        return this.items.slice(this.start, offset);
      var array = new this.ArrayClass(this.size), c = this.capacity, l = this.size, i = this.start, j = 0;
      while (j < l) {
        array[j] = this.items[i];
        i++;
        j++;
        if (i === c)
          i = 0;
      }
      return array;
    };
    FixedDeque.prototype.values = function() {
      var items = this.items, c = this.capacity, l = this.size, i = this.start, j = 0;
      return new Iterator(function() {
        if (j >= l)
          return {
            done: true
          };
        var value = items[i];
        i++;
        j++;
        if (i === c)
          i = 0;
        return {
          value,
          done: false
        };
      });
    };
    FixedDeque.prototype.entries = function() {
      var items = this.items, c = this.capacity, l = this.size, i = this.start, j = 0;
      return new Iterator(function() {
        if (j >= l)
          return {
            done: true
          };
        var value = items[i];
        i++;
        if (i === c)
          i = 0;
        return {
          value: [j++, value],
          done: false
        };
      });
    };
    if (typeof Symbol !== "undefined")
      FixedDeque.prototype[Symbol.iterator] = FixedDeque.prototype.values;
    FixedDeque.prototype.inspect = function() {
      var array = this.toArray();
      array.type = this.ArrayClass.name;
      array.capacity = this.capacity;
      Object.defineProperty(array, "constructor", {
        value: FixedDeque,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      FixedDeque.prototype[Symbol.for("nodejs.util.inspect.custom")] = FixedDeque.prototype.inspect;
    FixedDeque.from = function(iterable, ArrayClass, capacity) {
      if (arguments.length < 3) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/fixed-deque.from: could not guess iterable length. Please provide desired capacity as last argument.");
      }
      var deque = new FixedDeque(ArrayClass, capacity);
      if (iterables.isArrayLike(iterable)) {
        var i, l;
        for (i = 0, l = iterable.length; i < l; i++)
          deque.items[i] = iterable[i];
        deque.size = l;
        return deque;
      }
      iterables.forEach(iterable, function(value) {
        deque.push(value);
      });
      return deque;
    };
    module.exports = FixedDeque;
  }
});

// node_modules/mnemonist/fixed-stack.js
var require_fixed_stack = __commonJS({
  "node_modules/mnemonist/fixed-stack.js"(exports, module) {
    var Iterator = require_iterator();
    var iterables = require_iterables();
    function FixedStack(ArrayClass, capacity) {
      if (arguments.length < 2)
        throw new Error("mnemonist/fixed-stack: expecting an Array class and a capacity.");
      if (typeof capacity !== "number" || capacity <= 0)
        throw new Error("mnemonist/fixed-stack: `capacity` should be a positive number.");
      this.capacity = capacity;
      this.ArrayClass = ArrayClass;
      this.items = new this.ArrayClass(this.capacity);
      this.clear();
    }
    FixedStack.prototype.clear = function() {
      this.size = 0;
    };
    FixedStack.prototype.push = function(item) {
      if (this.size === this.capacity)
        throw new Error("mnemonist/fixed-stack.push: stack capacity (" + this.capacity + ") exceeded!");
      this.items[this.size++] = item;
      return this.size;
    };
    FixedStack.prototype.pop = function() {
      if (this.size === 0)
        return;
      return this.items[--this.size];
    };
    FixedStack.prototype.peek = function() {
      return this.items[this.size - 1];
    };
    FixedStack.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      for (var i = 0, l = this.items.length; i < l; i++)
        callback.call(scope, this.items[l - i - 1], i, this);
    };
    FixedStack.prototype.toArray = function() {
      var array = new this.ArrayClass(this.size), l = this.size - 1, i = this.size;
      while (i--)
        array[i] = this.items[l - i];
      return array;
    };
    FixedStack.prototype.values = function() {
      var items = this.items, l = this.size, i = 0;
      return new Iterator(function() {
        if (i >= l)
          return {
            done: true
          };
        var value = items[l - i - 1];
        i++;
        return {
          value,
          done: false
        };
      });
    };
    FixedStack.prototype.entries = function() {
      var items = this.items, l = this.size, i = 0;
      return new Iterator(function() {
        if (i >= l)
          return {
            done: true
          };
        var value = items[l - i - 1];
        return {
          value: [i++, value],
          done: false
        };
      });
    };
    if (typeof Symbol !== "undefined")
      FixedStack.prototype[Symbol.iterator] = FixedStack.prototype.values;
    FixedStack.prototype.toString = function() {
      return this.toArray().join(",");
    };
    FixedStack.prototype.toJSON = function() {
      return this.toArray();
    };
    FixedStack.prototype.inspect = function() {
      var array = this.toArray();
      array.type = this.ArrayClass.name;
      array.capacity = this.capacity;
      Object.defineProperty(array, "constructor", {
        value: FixedStack,
        enumerable: false
      });
      return array;
    };
    if (typeof Symbol !== "undefined")
      FixedStack.prototype[Symbol.for("nodejs.util.inspect.custom")] = FixedStack.prototype.inspect;
    FixedStack.from = function(iterable, ArrayClass, capacity) {
      if (arguments.length < 3) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/fixed-stack.from: could not guess iterable length. Please provide desired capacity as last argument.");
      }
      var stack = new FixedStack(ArrayClass, capacity);
      if (iterables.isArrayLike(iterable)) {
        var i, l;
        for (i = 0, l = iterable.length; i < l; i++)
          stack.items[i] = iterable[i];
        stack.size = l;
        return stack;
      }
      iterables.forEach(iterable, function(value) {
        stack.push(value);
      });
      return stack;
    };
    module.exports = FixedStack;
  }
});

// node_modules/mnemonist/utils/comparators.js
var require_comparators = __commonJS({
  "node_modules/mnemonist/utils/comparators.js"(exports) {
    var DEFAULT_COMPARATOR = function(a, b) {
      if (a < b)
        return -1;
      if (a > b)
        return 1;
      return 0;
    };
    var DEFAULT_REVERSE_COMPARATOR = function(a, b) {
      if (a < b)
        return 1;
      if (a > b)
        return -1;
      return 0;
    };
    function reverseComparator(comparator) {
      return function(a, b) {
        return comparator(b, a);
      };
    }
    function createTupleComparator(size) {
      if (size === 2) {
        return function(a, b) {
          if (a[0] < b[0])
            return -1;
          if (a[0] > b[0])
            return 1;
          if (a[1] < b[1])
            return -1;
          if (a[1] > b[1])
            return 1;
          return 0;
        };
      }
      return function(a, b) {
        var i = 0;
        while (i < size) {
          if (a[i] < b[i])
            return -1;
          if (a[i] > b[i])
            return 1;
          i++;
        }
        return 0;
      };
    }
    exports.DEFAULT_COMPARATOR = DEFAULT_COMPARATOR;
    exports.DEFAULT_REVERSE_COMPARATOR = DEFAULT_REVERSE_COMPARATOR;
    exports.reverseComparator = reverseComparator;
    exports.createTupleComparator = createTupleComparator;
  }
});

// node_modules/mnemonist/heap.js
var require_heap = __commonJS({
  "node_modules/mnemonist/heap.js"(exports, module) {
    var forEach = require_foreach();
    var comparators = require_comparators();
    var iterables = require_iterables();
    var DEFAULT_COMPARATOR = comparators.DEFAULT_COMPARATOR;
    var reverseComparator = comparators.reverseComparator;
    function siftDown(compare, heap, startIndex, i) {
      var item = heap[i], parentIndex, parent;
      while (i > startIndex) {
        parentIndex = i - 1 >> 1;
        parent = heap[parentIndex];
        if (compare(item, parent) < 0) {
          heap[i] = parent;
          i = parentIndex;
          continue;
        }
        break;
      }
      heap[i] = item;
    }
    function siftUp(compare, heap, i) {
      var endIndex = heap.length, startIndex = i, item = heap[i], childIndex = 2 * i + 1, rightIndex;
      while (childIndex < endIndex) {
        rightIndex = childIndex + 1;
        if (rightIndex < endIndex && compare(heap[childIndex], heap[rightIndex]) >= 0) {
          childIndex = rightIndex;
        }
        heap[i] = heap[childIndex];
        i = childIndex;
        childIndex = 2 * i + 1;
      }
      heap[i] = item;
      siftDown(compare, heap, startIndex, i);
    }
    function push(compare, heap, item) {
      heap.push(item);
      siftDown(compare, heap, 0, heap.length - 1);
    }
    function pop(compare, heap) {
      var lastItem = heap.pop();
      if (heap.length !== 0) {
        var item = heap[0];
        heap[0] = lastItem;
        siftUp(compare, heap, 0);
        return item;
      }
      return lastItem;
    }
    function replace(compare, heap, item) {
      if (heap.length === 0)
        throw new Error("mnemonist/heap.replace: cannot pop an empty heap.");
      var popped = heap[0];
      heap[0] = item;
      siftUp(compare, heap, 0);
      return popped;
    }
    function pushpop(compare, heap, item) {
      var tmp;
      if (heap.length !== 0 && compare(heap[0], item) < 0) {
        tmp = heap[0];
        heap[0] = item;
        item = tmp;
        siftUp(compare, heap, 0);
      }
      return item;
    }
    function heapify(compare, array) {
      var n = array.length, l = n >> 1, i = l;
      while (--i >= 0)
        siftUp(compare, array, i);
    }
    function consume(compare, heap) {
      var l = heap.length, i = 0;
      var array = new Array(l);
      while (i < l)
        array[i++] = pop(compare, heap);
      return array;
    }
    function nsmallest(compare, n, iterable) {
      if (arguments.length === 2) {
        iterable = n;
        n = compare;
        compare = DEFAULT_COMPARATOR;
      }
      var reverseCompare = reverseComparator(compare);
      var i, l, v;
      var min = Infinity;
      var result;
      if (n === 1) {
        if (iterables.isArrayLike(iterable)) {
          for (i = 0, l = iterable.length; i < l; i++) {
            v = iterable[i];
            if (min === Infinity || compare(v, min) < 0)
              min = v;
          }
          result = new iterable.constructor(1);
          result[0] = min;
          return result;
        }
        forEach(iterable, function(value) {
          if (min === Infinity || compare(value, min) < 0)
            min = value;
        });
        return [min];
      }
      if (iterables.isArrayLike(iterable)) {
        if (n >= iterable.length)
          return iterable.slice().sort(compare);
        result = iterable.slice(0, n);
        heapify(reverseCompare, result);
        for (i = n, l = iterable.length; i < l; i++)
          if (reverseCompare(iterable[i], result[0]) > 0)
            replace(reverseCompare, result, iterable[i]);
        return result.sort(compare);
      }
      var size = iterables.guessLength(iterable);
      if (size !== null && size < n)
        n = size;
      result = new Array(n);
      i = 0;
      forEach(iterable, function(value) {
        if (i < n) {
          result[i] = value;
        } else {
          if (i === n)
            heapify(reverseCompare, result);
          if (reverseCompare(value, result[0]) > 0)
            replace(reverseCompare, result, value);
        }
        i++;
      });
      if (result.length > i)
        result.length = i;
      return result.sort(compare);
    }
    function nlargest(compare, n, iterable) {
      if (arguments.length === 2) {
        iterable = n;
        n = compare;
        compare = DEFAULT_COMPARATOR;
      }
      var reverseCompare = reverseComparator(compare);
      var i, l, v;
      var max = -Infinity;
      var result;
      if (n === 1) {
        if (iterables.isArrayLike(iterable)) {
          for (i = 0, l = iterable.length; i < l; i++) {
            v = iterable[i];
            if (max === -Infinity || compare(v, max) > 0)
              max = v;
          }
          result = new iterable.constructor(1);
          result[0] = max;
          return result;
        }
        forEach(iterable, function(value) {
          if (max === -Infinity || compare(value, max) > 0)
            max = value;
        });
        return [max];
      }
      if (iterables.isArrayLike(iterable)) {
        if (n >= iterable.length)
          return iterable.slice().sort(reverseCompare);
        result = iterable.slice(0, n);
        heapify(compare, result);
        for (i = n, l = iterable.length; i < l; i++)
          if (compare(iterable[i], result[0]) > 0)
            replace(compare, result, iterable[i]);
        return result.sort(reverseCompare);
      }
      var size = iterables.guessLength(iterable);
      if (size !== null && size < n)
        n = size;
      result = new Array(n);
      i = 0;
      forEach(iterable, function(value) {
        if (i < n) {
          result[i] = value;
        } else {
          if (i === n)
            heapify(compare, result);
          if (compare(value, result[0]) > 0)
            replace(compare, result, value);
        }
        i++;
      });
      if (result.length > i)
        result.length = i;
      return result.sort(reverseCompare);
    }
    function Heap(comparator) {
      this.clear();
      this.comparator = comparator || DEFAULT_COMPARATOR;
      if (typeof this.comparator !== "function")
        throw new Error("mnemonist/Heap.constructor: given comparator should be a function.");
    }
    Heap.prototype.clear = function() {
      this.items = [];
      this.size = 0;
    };
    Heap.prototype.push = function(item) {
      push(this.comparator, this.items, item);
      return ++this.size;
    };
    Heap.prototype.peek = function() {
      return this.items[0];
    };
    Heap.prototype.pop = function() {
      if (this.size !== 0)
        this.size--;
      return pop(this.comparator, this.items);
    };
    Heap.prototype.replace = function(item) {
      return replace(this.comparator, this.items, item);
    };
    Heap.prototype.pushpop = function(item) {
      return pushpop(this.comparator, this.items, item);
    };
    Heap.prototype.consume = function() {
      this.size = 0;
      return consume(this.comparator, this.items);
    };
    Heap.prototype.toArray = function() {
      return consume(this.comparator, this.items.slice());
    };
    Heap.prototype.inspect = function() {
      var proxy = this.toArray();
      Object.defineProperty(proxy, "constructor", {
        value: Heap,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      Heap.prototype[Symbol.for("nodejs.util.inspect.custom")] = Heap.prototype.inspect;
    function MaxHeap(comparator) {
      this.clear();
      this.comparator = comparator || DEFAULT_COMPARATOR;
      if (typeof this.comparator !== "function")
        throw new Error("mnemonist/MaxHeap.constructor: given comparator should be a function.");
      this.comparator = reverseComparator(this.comparator);
    }
    MaxHeap.prototype = Heap.prototype;
    Heap.from = function(iterable, comparator) {
      var heap = new Heap(comparator);
      var items;
      if (iterables.isArrayLike(iterable))
        items = iterable.slice();
      else
        items = iterables.toArray(iterable);
      heapify(heap.comparator, items);
      heap.items = items;
      heap.size = items.length;
      return heap;
    };
    MaxHeap.from = function(iterable, comparator) {
      var heap = new MaxHeap(comparator);
      var items;
      if (iterables.isArrayLike(iterable))
        items = iterable.slice();
      else
        items = iterables.toArray(iterable);
      heapify(heap.comparator, items);
      heap.items = items;
      heap.size = items.length;
      return heap;
    };
    Heap.siftUp = siftUp;
    Heap.siftDown = siftDown;
    Heap.push = push;
    Heap.pop = pop;
    Heap.replace = replace;
    Heap.pushpop = pushpop;
    Heap.heapify = heapify;
    Heap.consume = consume;
    Heap.nsmallest = nsmallest;
    Heap.nlargest = nlargest;
    Heap.MinHeap = Heap;
    Heap.MaxHeap = MaxHeap;
    module.exports = Heap;
  }
});

// node_modules/graphology-utils/getters.js
var require_getters = __commonJS({
  "node_modules/graphology-utils/getters.js"(exports) {
    function coerceWeight(value) {
      if (typeof value !== "number" || isNaN(value)) return 1;
      return value;
    }
    function createNodeValueGetter(nameOrFunction, defaultValue) {
      var getter = {};
      var coerceToDefault = function(v) {
        if (typeof v === "undefined") return defaultValue;
        return v;
      };
      if (typeof defaultValue === "function") coerceToDefault = defaultValue;
      var get = function(attributes) {
        return coerceToDefault(attributes[nameOrFunction]);
      };
      var returnDefault = function() {
        return coerceToDefault(void 0);
      };
      if (typeof nameOrFunction === "string") {
        getter.fromAttributes = get;
        getter.fromGraph = function(graph, node) {
          return get(graph.getNodeAttributes(node));
        };
        getter.fromEntry = function(node, attributes) {
          return get(attributes);
        };
      } else if (typeof nameOrFunction === "function") {
        getter.fromAttributes = function() {
          throw new Error(
            "graphology-utils/getters/createNodeValueGetter: irrelevant usage."
          );
        };
        getter.fromGraph = function(graph, node) {
          return coerceToDefault(
            nameOrFunction(node, graph.getNodeAttributes(node))
          );
        };
        getter.fromEntry = function(node, attributes) {
          return coerceToDefault(nameOrFunction(node, attributes));
        };
      } else {
        getter.fromAttributes = returnDefault;
        getter.fromGraph = returnDefault;
        getter.fromEntry = returnDefault;
      }
      return getter;
    }
    function createEdgeValueGetter(nameOrFunction, defaultValue) {
      var getter = {};
      var coerceToDefault = function(v) {
        if (typeof v === "undefined") return defaultValue;
        return v;
      };
      if (typeof defaultValue === "function") coerceToDefault = defaultValue;
      var get = function(attributes) {
        return coerceToDefault(attributes[nameOrFunction]);
      };
      var returnDefault = function() {
        return coerceToDefault(void 0);
      };
      if (typeof nameOrFunction === "string") {
        getter.fromAttributes = get;
        getter.fromGraph = function(graph, edge) {
          return get(graph.getEdgeAttributes(edge));
        };
        getter.fromEntry = function(edge, attributes) {
          return get(attributes);
        };
        getter.fromPartialEntry = getter.fromEntry;
        getter.fromMinimalEntry = getter.fromEntry;
      } else if (typeof nameOrFunction === "function") {
        getter.fromAttributes = function() {
          throw new Error(
            "graphology-utils/getters/createEdgeValueGetter: irrelevant usage."
          );
        };
        getter.fromGraph = function(graph, edge) {
          var extremities = graph.extremities(edge);
          return coerceToDefault(
            nameOrFunction(
              edge,
              graph.getEdgeAttributes(edge),
              extremities[0],
              extremities[1],
              graph.getNodeAttributes(extremities[0]),
              graph.getNodeAttributes(extremities[1]),
              graph.isUndirected(edge)
            )
          );
        };
        getter.fromEntry = function(e, a, s, t, sa, ta, u) {
          return coerceToDefault(nameOrFunction(e, a, s, t, sa, ta, u));
        };
        getter.fromPartialEntry = function(e, a, s, t) {
          return coerceToDefault(nameOrFunction(e, a, s, t));
        };
        getter.fromMinimalEntry = function(e, a) {
          return coerceToDefault(nameOrFunction(e, a));
        };
      } else {
        getter.fromAttributes = returnDefault;
        getter.fromGraph = returnDefault;
        getter.fromEntry = returnDefault;
        getter.fromMinimalEntry = returnDefault;
      }
      return getter;
    }
    exports.createNodeValueGetter = createNodeValueGetter;
    exports.createEdgeValueGetter = createEdgeValueGetter;
    exports.createEdgeWeightGetter = function(name) {
      return createEdgeValueGetter(name, coerceWeight);
    };
  }
});

// node_modules/graphology-indices/neighborhood.js
var require_neighborhood = __commonJS({
  "node_modules/graphology-indices/neighborhood.js"(exports) {
    var typed = require_typed_arrays();
    var createEdgeWeightGetter = require_getters().createEdgeWeightGetter;
    function upperBoundPerMethod(method, graph) {
      if (method === "outbound" || method === "inbound")
        return graph.directedSize + graph.undirectedSize * 2;
      if (method === "in" || method === "out" || method === "directed")
        return graph.directedSize;
      return graph.undirectedSize * 2;
    }
    function NeighborhoodIndex(graph, method) {
      method = method || "outbound";
      var getNeighbors = graph[method + "Neighbors"].bind(graph);
      var upperBound = upperBoundPerMethod(method, graph);
      var NeighborhoodPointerArray = typed.getPointerArray(upperBound);
      var NodesPointerArray = typed.getPointerArray(graph.order);
      this.graph = graph;
      this.neighborhood = new NodesPointerArray(upperBound);
      this.starts = new NeighborhoodPointerArray(graph.order + 1);
      this.nodes = graph.nodes();
      var ids = {};
      var i, l, j, m, node, neighbors;
      var n = 0;
      for (i = 0, l = graph.order; i < l; i++) ids[this.nodes[i]] = i;
      for (i = 0, l = graph.order; i < l; i++) {
        node = this.nodes[i];
        neighbors = getNeighbors(node);
        this.starts[i] = n;
        for (j = 0, m = neighbors.length; j < m; j++)
          this.neighborhood[n++] = ids[neighbors[j]];
      }
      this.starts[i] = upperBound;
    }
    NeighborhoodIndex.prototype.bounds = function(i) {
      return [this.starts[i], this.starts[i + 1]];
    };
    NeighborhoodIndex.prototype.project = function() {
      var self = this;
      var projection = {};
      self.nodes.forEach(function(node, i) {
        projection[node] = Array.from(
          self.neighborhood.slice(self.starts[i], self.starts[i + 1])
        ).map(function(j) {
          return self.nodes[j];
        });
      });
      return projection;
    };
    NeighborhoodIndex.prototype.collect = function(results) {
      var i, l;
      var o = {};
      for (i = 0, l = results.length; i < l; i++) o[this.nodes[i]] = results[i];
      return o;
    };
    NeighborhoodIndex.prototype.assign = function(prop, results) {
      var i = 0;
      this.graph.updateEachNodeAttributes(
        function(_, attr) {
          attr[prop] = results[i++];
          return attr;
        },
        { attributes: [prop] }
      );
    };
    exports.NeighborhoodIndex = NeighborhoodIndex;
    function WeightedNeighborhoodIndex(graph, getEdgeWeight, method) {
      method = method || "outbound";
      var getEdges = graph[method + "Edges"].bind(graph);
      var upperBound = upperBoundPerMethod(method, graph);
      var NeighborhoodPointerArray = typed.getPointerArray(upperBound);
      var NodesPointerArray = typed.getPointerArray(graph.order);
      var weightGetter = createEdgeWeightGetter(getEdgeWeight).fromMinimalEntry;
      this.graph = graph;
      this.neighborhood = new NodesPointerArray(upperBound);
      this.weights = new Float64Array(upperBound);
      this.outDegrees = new Float64Array(graph.order);
      this.starts = new NeighborhoodPointerArray(graph.order + 1);
      this.nodes = graph.nodes();
      var ids = {};
      var i, l, j, m, node, neighbor, edges, edge, weight;
      var n = 0;
      for (i = 0, l = graph.order; i < l; i++) ids[this.nodes[i]] = i;
      for (i = 0, l = graph.order; i < l; i++) {
        node = this.nodes[i];
        edges = getEdges(node);
        this.starts[i] = n;
        for (j = 0, m = edges.length; j < m; j++) {
          edge = edges[j];
          neighbor = graph.opposite(node, edge);
          weight = weightGetter(edge, graph.getEdgeAttributes(edge));
          this.neighborhood[n] = ids[neighbor];
          this.weights[n++] = weight;
          this.outDegrees[i] += weight;
        }
      }
      this.starts[i] = upperBound;
    }
    WeightedNeighborhoodIndex.prototype.bounds = NeighborhoodIndex.prototype.bounds;
    WeightedNeighborhoodIndex.prototype.project = NeighborhoodIndex.prototype.project;
    WeightedNeighborhoodIndex.prototype.collect = NeighborhoodIndex.prototype.collect;
    WeightedNeighborhoodIndex.prototype.assign = NeighborhoodIndex.prototype.assign;
    exports.WeightedNeighborhoodIndex = WeightedNeighborhoodIndex;
  }
});

// node_modules/graphology-shortest-path/indexed-brandes.js
var require_indexed_brandes = __commonJS({
  "node_modules/graphology-shortest-path/indexed-brandes.js"(exports) {
    var FixedDeque = require_fixed_deque();
    var FixedStack = require_fixed_stack();
    var Heap = require_heap();
    var typed = require_typed_arrays();
    var neighborhoodIndices = require_neighborhood();
    var NeighborhoodIndex = neighborhoodIndices.NeighborhoodIndex;
    var WeightedNeighborhoodIndex = neighborhoodIndices.WeightedNeighborhoodIndex;
    exports.createUnweightedIndexedBrandes = function createUnweightedIndexedBrandes(graph) {
      var neighborhoodIndex = new NeighborhoodIndex(graph);
      var neighborhood = neighborhoodIndex.neighborhood, starts = neighborhoodIndex.starts;
      var order = graph.order;
      var S = new FixedStack(typed.getPointerArray(order), order), sigma = new Uint32Array(order), P = new Array(order), D = new Int32Array(order);
      var Q = new FixedDeque(Uint32Array, order);
      var brandes = function(sourceIndex) {
        var Dv, sigmav, start, stop, j, v, w;
        for (v = 0; v < order; v++) {
          P[v] = [];
          sigma[v] = 0;
          D[v] = -1;
        }
        sigma[sourceIndex] = 1;
        D[sourceIndex] = 0;
        Q.push(sourceIndex);
        while (Q.size !== 0) {
          v = Q.shift();
          S.push(v);
          Dv = D[v];
          sigmav = sigma[v];
          start = starts[v];
          stop = starts[v + 1];
          for (j = start; j < stop; j++) {
            w = neighborhood[j];
            if (D[w] === -1) {
              Q.push(w);
              D[w] = Dv + 1;
            }
            if (D[w] === Dv + 1) {
              sigma[w] += sigmav;
              P[w].push(v);
            }
          }
        }
        return [S, P, sigma];
      };
      brandes.index = neighborhoodIndex;
      return brandes;
    };
    function BRANDES_DIJKSTRA_HEAP_COMPARATOR(a, b) {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
      if (a[2] > b[2]) return 1;
      if (a[2] < b[2]) return -1;
      if (a[3] > b[3]) return 1;
      if (a[3] < b[3]) return -1;
      return 0;
    }
    exports.createDijkstraIndexedBrandes = function createDijkstraIndexedBrandes(graph, getEdgeWeight) {
      var neighborhoodIndex = new WeightedNeighborhoodIndex(
        graph,
        getEdgeWeight || "weight"
      );
      var neighborhood = neighborhoodIndex.neighborhood, weights = neighborhoodIndex.weights, starts = neighborhoodIndex.starts;
      var order = graph.order;
      var S = new FixedStack(typed.getPointerArray(order), order), sigma = new Uint32Array(order), P = new Array(order), D = new Float64Array(order), seen = new Float64Array(order);
      var Q = new Heap(BRANDES_DIJKSTRA_HEAP_COMPARATOR);
      var brandes = function(sourceIndex) {
        var start, stop, item, dist, pred, cost, j, v, w;
        var count = 0;
        for (v = 0; v < order; v++) {
          P[v] = [];
          sigma[v] = 0;
          D[v] = -1;
          seen[v] = -1;
        }
        sigma[sourceIndex] = 1;
        seen[sourceIndex] = 0;
        Q.push([0, count++, sourceIndex, sourceIndex]);
        while (Q.size !== 0) {
          item = Q.pop();
          dist = item[0];
          pred = item[2];
          v = item[3];
          if (D[v] !== -1) continue;
          S.push(v);
          D[v] = dist;
          sigma[v] += sigma[pred];
          start = starts[v];
          stop = starts[v + 1];
          for (j = start; j < stop; j++) {
            w = neighborhood[j];
            cost = dist + weights[j];
            if (D[w] === -1 && (seen[w] === -1 || cost < seen[w])) {
              seen[w] = cost;
              Q.push([cost, count++, v, w]);
              sigma[w] = 0;
              P[w] = [v];
            } else if (cost === seen[w]) {
              sigma[w] += sigma[v];
              P[w].push(v);
            }
          }
        }
        return [S, P, sigma];
      };
      brandes.index = neighborhoodIndex;
      return brandes;
    };
  }
});

// node_modules/graphology-utils/defaults.js
var require_defaults = __commonJS({
  "node_modules/graphology-utils/defaults.js"(exports, module) {
    function isLeaf(o) {
      return !o || typeof o !== "object" || typeof o === "function" || Array.isArray(o) || o instanceof Set || o instanceof Map || o instanceof RegExp || o instanceof Date;
    }
    function resolveDefaults(target, defaults) {
      target = target || {};
      var output = {};
      for (var k in defaults) {
        var existing = target[k];
        var def = defaults[k];
        if (!isLeaf(def)) {
          output[k] = resolveDefaults(existing, def);
          continue;
        }
        if (existing === void 0) {
          output[k] = def;
        } else {
          output[k] = existing;
        }
      }
      return output;
    }
    module.exports = resolveDefaults;
  }
});

// node_modules/graphology-metrics/centrality/betweenness.js
var require_betweenness = __commonJS({
  "node_modules/graphology-metrics/centrality/betweenness.js"(exports, module) {
    var isGraph = require_is_graph();
    var lib = require_indexed_brandes();
    var resolveDefaults = require_defaults();
    var createUnweightedIndexedBrandes = lib.createUnweightedIndexedBrandes;
    var createDijkstraIndexedBrandes = lib.createDijkstraIndexedBrandes;
    var DEFAULTS = {
      nodeCentralityAttribute: "betweennessCentrality",
      getEdgeWeight: "weight",
      normalized: true
    };
    function abstractBetweennessCentrality(assign, graph, options) {
      if (!isGraph(graph))
        throw new Error(
          "graphology-centrality/beetweenness-centrality: the given graph is not a valid graphology instance."
        );
      options = resolveDefaults(options, DEFAULTS);
      var outputName = options.nodeCentralityAttribute;
      var normalized = options.normalized;
      var brandes = options.getEdgeWeight ? createDijkstraIndexedBrandes(graph, options.getEdgeWeight) : createUnweightedIndexedBrandes(graph);
      var N = graph.order;
      var result, S, P, sigma, coefficient, i, j, m, v, w;
      var delta = new Float64Array(N);
      var centralities = new Float64Array(N);
      for (i = 0; i < N; i++) {
        result = brandes(i);
        S = result[0];
        P = result[1];
        sigma = result[2];
        j = S.size;
        while (j--) delta[S.items[S.size - j]] = 0;
        while (S.size !== 0) {
          w = S.pop();
          coefficient = (1 + delta[w]) / sigma[w];
          for (j = 0, m = P[w].length; j < m; j++) {
            v = P[w][j];
            delta[v] += sigma[v] * coefficient;
          }
          if (w !== i) centralities[w] += delta[w];
        }
      }
      var scale = null;
      if (normalized) scale = N <= 2 ? null : 1 / ((N - 1) * (N - 2));
      else scale = graph.type === "undirected" ? 0.5 : null;
      if (scale !== null) {
        for (i = 0; i < N; i++) centralities[i] *= scale;
      }
      if (assign) return brandes.index.assign(outputName, centralities);
      return brandes.index.collect(centralities);
    }
    var betweennessCentrality = abstractBetweennessCentrality.bind(null, false);
    betweennessCentrality.assign = abstractBetweennessCentrality.bind(null, true);
    module.exports = betweennessCentrality;
  }
});

// node_modules/graphology-metrics/centrality/edge-betweenness.js
var require_edge_betweenness = __commonJS({
  "node_modules/graphology-metrics/centrality/edge-betweenness.js"(exports, module) {
    var isGraph = require_is_graph();
    var lib = require_indexed_brandes();
    var resolveDefaults = require_defaults();
    var createUnweightedIndexedBrandes = lib.createUnweightedIndexedBrandes;
    var createDijkstraIndexedBrandes = lib.createDijkstraIndexedBrandes;
    var DEFAULTS = {
      edgeCentralityAttribute: "betweennessCentrality",
      getEdgeWeight: "weight",
      normalized: true
    };
    function abstractEdgeBetweennessCentrality(assign, graph, options) {
      if (!isGraph(graph)) {
        throw new Error(
          "graphology-centrality/edge-beetweenness-centrality: the given graph is not a valid graphology instance."
        );
      }
      options = resolveDefaults(options, DEFAULTS);
      var outputName = options.edgeCentralityAttribute;
      var normalized = options.normalized;
      var brandes = options.getEdgeWeight ? createDijkstraIndexedBrandes(graph, options.getEdgeWeight) : createUnweightedIndexedBrandes(graph);
      var order = graph.order;
      var result, S, P, sigma, coefficient, i, j, m, v, c, w, wn;
      var delta = new Float64Array(order);
      var edgeCentralities = {};
      graph.forEachEdge(function(edge) {
        edgeCentralities[edge] = 0;
      });
      var nodes = brandes.index.nodes;
      for (i = 0; i < order; i++) {
        result = brandes(i);
        S = result[0];
        P = result[1];
        sigma = result[2];
        j = S.size;
        while (j--) delta[S.items[S.size - j]] = 0;
        while (S.size !== 0) {
          w = S.pop();
          coefficient = (1 + delta[w]) / sigma[w];
          wn = nodes[w];
          for (j = 0, m = P[w].length; j < m; j++) {
            v = P[w][j];
            c = sigma[v] * coefficient;
            var vw = graph.edge(nodes[v], wn);
            edgeCentralities[vw] += c;
            delta[v] += c;
          }
        }
      }
      var scale = null;
      if (normalized) scale = order <= 1 ? null : 1 / (order * (order - 1));
      else scale = graph.type === "undirected" ? 0.5 : null;
      if (scale !== null) {
        graph.forEachEdge(function(edge) {
          edgeCentralities[edge] *= scale;
        });
      }
      if (assign) {
        return graph.updateEachEdgeAttributes(function(edge, attr) {
          attr[outputName] = edgeCentralities[edge];
          return attr;
        });
      }
      return edgeCentralities;
    }
    var edgeBetweennessCentrality = abstractEdgeBetweennessCentrality.bind(
      null,
      false
    );
    edgeBetweennessCentrality.assign = abstractEdgeBetweennessCentrality.bind(
      null,
      true
    );
    module.exports = edgeBetweennessCentrality;
  }
});

// node_modules/mnemonist/sparse-set.js
var require_sparse_set = __commonJS({
  "node_modules/mnemonist/sparse-set.js"(exports, module) {
    var Iterator = require_iterator();
    var getPointerArray = require_typed_arrays().getPointerArray;
    function SparseSet(length) {
      var ByteArray = getPointerArray(length);
      this.size = 0;
      this.length = length;
      this.dense = new ByteArray(length);
      this.sparse = new ByteArray(length);
    }
    SparseSet.prototype.clear = function() {
      this.size = 0;
    };
    SparseSet.prototype.has = function(member) {
      var index = this.sparse[member];
      return index < this.size && this.dense[index] === member;
    };
    SparseSet.prototype.add = function(member) {
      var index = this.sparse[member];
      if (index < this.size && this.dense[index] === member)
        return this;
      this.dense[this.size] = member;
      this.sparse[member] = this.size;
      this.size++;
      return this;
    };
    SparseSet.prototype.delete = function(member) {
      var index = this.sparse[member];
      if (index >= this.size || this.dense[index] !== member)
        return false;
      index = this.dense[this.size - 1];
      this.dense[this.sparse[member]] = index;
      this.sparse[index] = this.sparse[member];
      this.size--;
      return true;
    };
    SparseSet.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var item;
      for (var i = 0; i < this.size; i++) {
        item = this.dense[i];
        callback.call(scope, item, item);
      }
    };
    SparseSet.prototype.values = function() {
      var size = this.size, dense = this.dense, i = 0;
      return new Iterator(function() {
        if (i < size) {
          var item = dense[i];
          i++;
          return {
            value: item
          };
        }
        return {
          done: true
        };
      });
    };
    if (typeof Symbol !== "undefined")
      SparseSet.prototype[Symbol.iterator] = SparseSet.prototype.values;
    SparseSet.prototype.inspect = function() {
      var proxy = /* @__PURE__ */ new Set();
      for (var i = 0; i < this.size; i++)
        proxy.add(this.dense[i]);
      Object.defineProperty(proxy, "constructor", {
        value: SparseSet,
        enumerable: false
      });
      proxy.length = this.length;
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      SparseSet.prototype[Symbol.for("nodejs.util.inspect.custom")] = SparseSet.prototype.inspect;
    module.exports = SparseSet;
  }
});

// node_modules/graphology-metrics/centrality/closeness.js
var require_closeness = __commonJS({
  "node_modules/graphology-metrics/centrality/closeness.js"(exports, module) {
    var isGraph = require_is_graph();
    var resolveDefaults = require_defaults();
    var FixedDeque = require_fixed_deque();
    var SparseSet = require_sparse_set();
    var NeighborhoodIndex = require_neighborhood().NeighborhoodIndex;
    var DEFAULTS = {
      nodeCentralityAttribute: "closenessCentrality",
      wassermanFaust: false
    };
    function IndexedBFS(graph) {
      this.index = new NeighborhoodIndex(graph, "inbound");
      this.queue = new FixedDeque(Array, graph.order);
      this.seen = new SparseSet(graph.order);
    }
    IndexedBFS.prototype.fromNode = function(i) {
      var index = this.index;
      var queue = this.queue;
      var seen = this.seen;
      seen.clear();
      queue.clear();
      seen.add(i);
      queue.push([i, 0]);
      var item, n, d, j, l, neighbor;
      var total = 0;
      var count = 0;
      while (queue.size !== 0) {
        item = queue.shift();
        n = item[0];
        d = item[1];
        if (d !== 0) {
          total += d;
          count += 1;
        }
        l = index.starts[n + 1];
        for (j = index.starts[n]; j < l; j++) {
          neighbor = index.neighborhood[j];
          if (seen.has(neighbor)) continue;
          seen.add(neighbor);
          queue.push([neighbor, d + 1]);
        }
      }
      return [count, total];
    };
    function abstractClosenessCentrality(assign, graph, options) {
      if (!isGraph(graph))
        throw new Error(
          "graphology-metrics/centrality/closeness: the given graph is not a valid graphology instance."
        );
      options = resolveDefaults(options, DEFAULTS);
      var wassermanFaust = options.wassermanFaust;
      var bfs = new IndexedBFS(graph);
      var N = graph.order;
      var i, result, count, total, closeness;
      var mapping = new Float64Array(N);
      for (i = 0; i < N; i++) {
        result = bfs.fromNode(i);
        count = result[0];
        total = result[1];
        closeness = 0;
        if (total > 0 && N > 1) {
          closeness = count / total;
          if (wassermanFaust) {
            closeness *= count / (N - 1);
          }
        }
        mapping[i] = closeness;
      }
      if (assign) {
        return bfs.index.assign(options.nodeCentralityAttribute, mapping);
      }
      return bfs.index.collect(mapping);
    }
    var closenessCentrality = abstractClosenessCentrality.bind(null, false);
    closenessCentrality.assign = abstractClosenessCentrality.bind(null, true);
    module.exports = closenessCentrality;
  }
});

// node_modules/graphology-metrics/centrality/eigenvector.js
var require_eigenvector = __commonJS({
  "node_modules/graphology-metrics/centrality/eigenvector.js"(exports, module) {
    var isGraph = require_is_graph();
    var resolveDefaults = require_defaults();
    var WeightedNeighborhoodIndex = require_neighborhood().WeightedNeighborhoodIndex;
    var DEFAULTS = {
      nodeCentralityAttribute: "eigenvectorCentrality",
      getEdgeWeight: "weight",
      maxIterations: 100,
      tolerance: 1e-6
    };
    function safeVariadicHypot(x) {
      var max = 0;
      var s = 0;
      for (var i = 0, l = x.length; i < l; i++) {
        var n = Math.abs(x[i]);
        if (n > max) {
          s *= max / n * (max / n);
          max = n;
        }
        s += n === 0 && max === 0 ? 0 : n / max * (n / max);
      }
      return max === Infinity ? 1 : max * Math.sqrt(s);
    }
    function abstractEigenvectorCentrality(assign, graph, options) {
      if (!isGraph(graph))
        throw new Error(
          "graphology-metrics/centrality/eigenvector: the given graph is not a valid graphology instance."
        );
      options = resolveDefaults(options, DEFAULTS);
      var maxIterations = options.maxIterations;
      var tolerance = options.tolerance;
      var N = graph.order;
      var index = new WeightedNeighborhoodIndex(graph, options.getEdgeWeight);
      var i, j, l, w;
      var x = new Float64Array(graph.order);
      for (i = 0; i < N; i++) {
        x[i] = 1 / N;
      }
      var iteration = 0;
      var error = 0;
      var neighbor, xLast, norm;
      var converged = false;
      while (iteration < maxIterations) {
        xLast = x;
        x = new Float64Array(xLast);
        for (i = 0; i < N; i++) {
          l = index.starts[i + 1];
          for (j = index.starts[i]; j < l; j++) {
            neighbor = index.neighborhood[j];
            w = index.weights[j];
            x[neighbor] += xLast[i] * w;
          }
        }
        norm = safeVariadicHypot(x);
        for (i = 0; i < N; i++) {
          x[i] /= norm;
        }
        error = 0;
        for (i = 0; i < N; i++) {
          error += Math.abs(x[i] - xLast[i]);
        }
        if (error < N * tolerance) {
          converged = true;
          break;
        }
        iteration++;
      }
      if (!converged)
        throw Error(
          "graphology-metrics/centrality/eigenvector: failed to converge."
        );
      if (assign) {
        index.assign(options.nodeCentralityAttribute, x);
        return;
      }
      return index.collect(x);
    }
    var eigenvectorCentrality = abstractEigenvectorCentrality.bind(null, false);
    eigenvectorCentrality.assign = abstractEigenvectorCentrality.bind(null, true);
    module.exports = eigenvectorCentrality;
  }
});

// node_modules/graphology-metrics/centrality/hits.js
var require_hits = __commonJS({
  "node_modules/graphology-metrics/centrality/hits.js"(exports, module) {
    var resolveDefaults = require_defaults();
    var isGraph = require_is_graph();
    var createEdgeWeightGetter = require_getters().createEdgeWeightGetter;
    var DEFAULTS = {
      nodeAuthorityAttribute: "authority",
      nodeHubAttribute: "hub",
      getEdgeWeight: "weight",
      maxIterations: 100,
      normalize: true,
      tolerance: 1e-8
    };
    function dict(keys, value) {
      var o = /* @__PURE__ */ Object.create(null);
      var i, l;
      for (i = 0, l = keys.length; i < l; i++) o[keys[i]] = value;
      return o;
    }
    function sum(o) {
      var nb = 0;
      for (var k in o) nb += o[k];
      return nb;
    }
    function hits(assign, graph, options) {
      if (!isGraph(graph))
        throw new Error(
          "graphology-hits: the given graph is not a valid graphology instance."
        );
      if (graph.multi)
        throw new Error(
          "graphology-hits: the HITS algorithm does not work with MultiGraphs."
        );
      options = resolveDefaults(options, DEFAULTS);
      var getEdgeWeight = createEdgeWeightGetter(options.getEdgeWeight).fromEntry;
      var order = graph.order;
      var nodes = graph.nodes();
      var edges;
      var hubs = dict(nodes, 1 / order);
      var weights = {};
      var converged = false;
      var lastHubs;
      var authorities;
      var node, neighbor, edge, iteration, maxAuthority, maxHub, error, S, i, j, m;
      graph.forEachEdge(function(e, a, s, t, sa, ta, u) {
        weights[e] = getEdgeWeight(e, a, s, t, sa, ta, u);
      });
      for (iteration = 0; iteration < options.maxIterations; iteration++) {
        lastHubs = hubs;
        hubs = dict(nodes, 0);
        authorities = dict(nodes, 0);
        maxHub = 0;
        maxAuthority = 0;
        for (i = 0; i < order; i++) {
          node = nodes[i];
          edges = graph.outboundEdges(node);
          for (j = 0, m = edges.length; j < m; j++) {
            edge = edges[j];
            neighbor = graph.opposite(node, edge);
            authorities[neighbor] += lastHubs[node] * weights[edge];
            if (authorities[neighbor] > maxAuthority)
              maxAuthority = authorities[neighbor];
          }
        }
        for (i = 0; i < order; i++) {
          node = nodes[i];
          edges = graph.outboundEdges(node);
          for (j = 0, m = edges.length; j < m; j++) {
            edge = edges[j];
            neighbor = graph.opposite(node, edge);
            hubs[node] += authorities[neighbor] * weights[edge];
            if (hubs[neighbor] > maxHub) maxHub = hubs[neighbor];
          }
        }
        S = 1 / maxHub;
        for (node in hubs) hubs[node] *= S;
        S = 1 / maxAuthority;
        for (node in authorities) authorities[node] *= S;
        error = 0;
        for (node in hubs) error += Math.abs(hubs[node] - lastHubs[node]);
        if (error < options.tolerance) {
          converged = true;
          break;
        }
      }
      if (!converged)
        throw Error("graphology-metrics/centrality/hits: failed to converge.");
      if (options.normalize) {
        S = 1 / sum(authorities);
        for (node in authorities) authorities[node] *= S;
        S = 1 / sum(hubs);
        for (node in hubs) hubs[node] *= S;
      }
      if (assign) {
        graph.updateEachNodeAttributes(
          function(n, attr) {
            attr[options.nodeAuthorityAttribute] = authorities[n];
            attr[options.nodeHubAttribute] = hubs[n];
            return attr;
          },
          {
            attributes: [options.nodeAuthorityAttribute, options.nodeHubAttribute]
          }
        );
        return;
      }
      return { hubs, authorities };
    }
    var main = hits.bind(null, false);
    main.assign = hits.bind(null, true);
    module.exports = main;
  }
});

// node_modules/graphology-metrics/centrality/pagerank.js
var require_pagerank = __commonJS({
  "node_modules/graphology-metrics/centrality/pagerank.js"(exports, module) {
    var isGraph = require_is_graph();
    var resolveDefaults = require_defaults();
    var WeightedNeighborhoodIndex = require_neighborhood().WeightedNeighborhoodIndex;
    var DEFAULTS = {
      nodePagerankAttribute: "pagerank",
      getEdgeWeight: "weight",
      alpha: 0.85,
      maxIterations: 100,
      tolerance: 1e-6
    };
    function abstractPagerank(assign, graph, options) {
      if (!isGraph(graph))
        throw new Error(
          "graphology-metrics/centrality/pagerank: the given graph is not a valid graphology instance."
        );
      options = resolveDefaults(options, DEFAULTS);
      var alpha = options.alpha;
      var maxIterations = options.maxIterations;
      var tolerance = options.tolerance;
      var pagerankAttribute = options.nodePagerankAttribute;
      var N = graph.order;
      var p = 1 / N;
      var index = new WeightedNeighborhoodIndex(graph, options.getEdgeWeight);
      var i, j, l, d;
      var x = new Float64Array(graph.order);
      var normalizedEdgeWeights = new Float64Array(index.weights.length);
      var danglingNodes = [];
      for (i = 0; i < N; i++) {
        x[i] = p;
        l = index.starts[i + 1];
        d = index.outDegrees[i];
        if (d === 0) danglingNodes.push(i);
        for (j = index.starts[i]; j < l; j++) {
          normalizedEdgeWeights[j] = index.weights[j] / d;
        }
      }
      var iteration = 0;
      var error = 0;
      var dangleSum, neighbor, xLast;
      var converged = false;
      while (iteration < maxIterations) {
        xLast = x;
        x = new Float64Array(graph.order);
        dangleSum = 0;
        for (i = 0, l = danglingNodes.length; i < l; i++)
          dangleSum += xLast[danglingNodes[i]];
        dangleSum *= alpha;
        for (i = 0; i < N; i++) {
          l = index.starts[i + 1];
          for (j = index.starts[i]; j < l; j++) {
            neighbor = index.neighborhood[j];
            x[neighbor] += alpha * xLast[i] * normalizedEdgeWeights[j];
          }
          x[i] += dangleSum * p + (1 - alpha) * p;
        }
        error = 0;
        for (i = 0; i < N; i++) {
          error += Math.abs(x[i] - xLast[i]);
        }
        if (error < N * tolerance) {
          converged = true;
          break;
        }
        iteration++;
      }
      if (!converged)
        throw Error("graphology-metrics/centrality/pagerank: failed to converge.");
      if (assign) {
        index.assign(pagerankAttribute, x);
        return;
      }
      return index.collect(x);
    }
    var pagerank = abstractPagerank.bind(null, false);
    pagerank.assign = abstractPagerank.bind(null, true);
    module.exports = pagerank;
  }
});

// node_modules/graphology-metrics/centrality/index.js
var require_centrality = __commonJS({
  "node_modules/graphology-metrics/centrality/index.js"(exports) {
    var degree = require_degree();
    exports.betweenness = require_betweenness();
    exports.edgeBetweenness = require_edge_betweenness();
    exports.closeness = require_closeness();
    exports.eigenvector = require_eigenvector();
    exports.hits = require_hits();
    exports.pagerank = require_pagerank();
    exports.degree = degree.degreeCentrality;
    exports.inDegree = degree.inDegreeCentrality;
    exports.outDegree = degree.outDegreeCentrality;
  }
});
export default require_centrality();
//# sourceMappingURL=graphology-metrics_centrality.js.map
