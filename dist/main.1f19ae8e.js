// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OrbitControls = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(OrbitControls, _EventDispatcher);

  var _super = _createSuper(OrbitControls);

  function OrbitControls(object, domElement) {
    var _this;

    _classCallCheck(this, OrbitControls);

    _this = _super.call(this);
    if (domElement === undefined) console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.');
    if (domElement === document) console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
    _this.object = object;
    _this.domElement = domElement; // Set to false to disable this control

    _this.enabled = true; // "target" sets the location of focus, where the object orbits around

    _this.target = new Vector3(); // How far you can dolly in and out ( PerspectiveCamera only )

    _this.minDistance = 0;
    _this.maxDistance = Infinity; // How far you can zoom in and out ( OrthographicCamera only )

    _this.minZoom = 0;
    _this.maxZoom = Infinity; // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.

    _this.minPolarAngle = 0; // radians

    _this.maxPolarAngle = Math.PI; // radians
    // How far you can orbit horizontally, upper and lower limits.
    // If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )

    _this.minAzimuthAngle = -Infinity; // radians

    _this.maxAzimuthAngle = Infinity; // radians
    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop

    _this.enableDamping = false;
    _this.dampingFactor = 0.05; // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
    // Set to false to disable zooming

    _this.enableZoom = true;
    _this.zoomSpeed = 1.0; // Set to false to disable rotating

    _this.enableRotate = true;
    _this.rotateSpeed = 1.0; // Set to false to disable panning

    _this.enablePan = true;
    _this.panSpeed = 1.0;
    _this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up

    _this.keyPanSpeed = 7.0; // pixels moved per arrow key push
    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop

    _this.autoRotate = false;
    _this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60
    // The four arrow keys

    _this.keys = {
      LEFT: 'ArrowLeft',
      UP: 'ArrowUp',
      RIGHT: 'ArrowRight',
      BOTTOM: 'ArrowDown'
    }; // Mouse buttons

    _this.mouseButtons = {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN
    }; // Touch fingers

    _this.touches = {
      ONE: TOUCH.ROTATE,
      TWO: TOUCH.DOLLY_PAN
    }; // for reset

    _this.target0 = _this.target.clone();
    _this.position0 = _this.object.position.clone();
    _this.zoom0 = _this.object.zoom; // the target DOM element for key events

    _this._domElementKeyEvents = null; //
    // public methods
    //

    _this.getPolarAngle = function () {
      return spherical.phi;
    };

    _this.getAzimuthalAngle = function () {
      return spherical.theta;
    };

    _this.listenToKeyEvents = function (domElement) {
      domElement.addEventListener('keydown', onKeyDown);
      this._domElementKeyEvents = domElement;
    };

    _this.saveState = function () {
      scope.target0.copy(scope.target);
      scope.position0.copy(scope.object.position);
      scope.zoom0 = scope.object.zoom;
    };

    _this.reset = function () {
      scope.target.copy(scope.target0);
      scope.object.position.copy(scope.position0);
      scope.object.zoom = scope.zoom0;
      scope.object.updateProjectionMatrix();
      scope.dispatchEvent(_changeEvent);
      scope.update();
      state = STATE.NONE;
    }; // this method is exposed, but perhaps it would be better if we can make it private...


    _this.update = function () {
      var offset = new Vector3(); // so camera.up is the orbit axis

      var quat = new Quaternion().setFromUnitVectors(object.up, new Vector3(0, 1, 0));
      var quatInverse = quat.clone().invert();
      var lastPosition = new Vector3();
      var lastQuaternion = new Quaternion();
      var twoPI = 2 * Math.PI;
      return function update() {
        var position = scope.object.position;
        offset.copy(position).sub(scope.target); // rotate offset to "y-axis-is-up" space

        offset.applyQuaternion(quat); // angle from z-axis around y-axis

        spherical.setFromVector3(offset);

        if (scope.autoRotate && state === STATE.NONE) {
          rotateLeft(getAutoRotationAngle());
        }

        if (scope.enableDamping) {
          spherical.theta += sphericalDelta.theta * scope.dampingFactor;
          spherical.phi += sphericalDelta.phi * scope.dampingFactor;
        } else {
          spherical.theta += sphericalDelta.theta;
          spherical.phi += sphericalDelta.phi;
        } // restrict theta to be between desired limits


        var min = scope.minAzimuthAngle;
        var max = scope.maxAzimuthAngle;

        if (isFinite(min) && isFinite(max)) {
          if (min < -Math.PI) min += twoPI;else if (min > Math.PI) min -= twoPI;
          if (max < -Math.PI) max += twoPI;else if (max > Math.PI) max -= twoPI;

          if (min <= max) {
            spherical.theta = Math.max(min, Math.min(max, spherical.theta));
          } else {
            spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
          }
        } // restrict phi to be between desired limits


        spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
        spherical.makeSafe();
        spherical.radius *= scale; // restrict radius to be between desired limits

        spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius)); // move target to panned location

        if (scope.enableDamping === true) {
          scope.target.addScaledVector(panOffset, scope.dampingFactor);
        } else {
          scope.target.add(panOffset);
        }

        offset.setFromSpherical(spherical); // rotate offset back to "camera-up-vector-is-up" space

        offset.applyQuaternion(quatInverse);
        position.copy(scope.target).add(offset);
        scope.object.lookAt(scope.target);

        if (scope.enableDamping === true) {
          sphericalDelta.theta *= 1 - scope.dampingFactor;
          sphericalDelta.phi *= 1 - scope.dampingFactor;
          panOffset.multiplyScalar(1 - scope.dampingFactor);
        } else {
          sphericalDelta.set(0, 0, 0);
          panOffset.set(0, 0, 0);
        }

        scale = 1; // update condition is:
        // min(camera displacement, camera rotation in radians)^2 > EPS
        // using small-angle approximation cos(x/2) = 1 - x^2 / 8

        if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
          scope.dispatchEvent(_changeEvent);
          lastPosition.copy(scope.object.position);
          lastQuaternion.copy(scope.object.quaternion);
          zoomChanged = false;
          return true;
        }

        return false;
      };
    }();

    _this.dispose = function () {
      scope.domElement.removeEventListener('contextmenu', onContextMenu);
      scope.domElement.removeEventListener('pointerdown', onPointerDown);
      scope.domElement.removeEventListener('wheel', onMouseWheel);
      scope.domElement.removeEventListener('touchstart', onTouchStart);
      scope.domElement.removeEventListener('touchend', onTouchEnd);
      scope.domElement.removeEventListener('touchmove', onTouchMove);
      scope.domElement.ownerDocument.removeEventListener('pointermove', onPointerMove);
      scope.domElement.ownerDocument.removeEventListener('pointerup', onPointerUp);

      if (scope._domElementKeyEvents !== null) {
        scope._domElementKeyEvents.removeEventListener('keydown', onKeyDown);
      } //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

    }; //
    // internals
    //


    var scope = _assertThisInitialized(_this);

    var STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    var state = STATE.NONE;
    var EPS = 0.000001; // current position in spherical coordinates

    var spherical = new Spherical();
    var sphericalDelta = new Spherical();
    var scale = 1;
    var panOffset = new Vector3();
    var zoomChanged = false;
    var rotateStart = new Vector2();
    var rotateEnd = new Vector2();
    var rotateDelta = new Vector2();
    var panStart = new Vector2();
    var panEnd = new Vector2();
    var panDelta = new Vector2();
    var dollyStart = new Vector2();
    var dollyEnd = new Vector2();
    var dollyDelta = new Vector2();

    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }

    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }

    function rotateLeft(angle) {
      sphericalDelta.theta -= angle;
    }

    function rotateUp(angle) {
      sphericalDelta.phi -= angle;
    }

    var panLeft = function () {
      var v = new Vector3();
      return function panLeft(distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix

        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    }();

    var panUp = function () {
      var v = new Vector3();
      return function panUp(distance, objectMatrix) {
        if (scope.screenSpacePanning === true) {
          v.setFromMatrixColumn(objectMatrix, 1);
        } else {
          v.setFromMatrixColumn(objectMatrix, 0);
          v.crossVectors(scope.object.up, v);
        }

        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    }(); // deltaX and deltaY are in pixels; right and down are positive


    var pan = function () {
      var offset = new Vector3();
      return function pan(deltaX, deltaY) {
        var element = scope.domElement;

        if (scope.object.isPerspectiveCamera) {
          // perspective
          var position = scope.object.position;
          offset.copy(position).sub(scope.target);
          var targetDistance = offset.length(); // half of the fov is center to top of screen

          targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0); // we use only clientHeight here so aspect ratio does not distort speed

          panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
          panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
        } else if (scope.object.isOrthographicCamera) {
          // orthographic
          panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
          panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
        } else {
          // camera neither orthographic nor perspective
          console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
          scope.enablePan = false;
        }
      };
    }();

    function dollyOut(dollyScale) {
      if (scope.object.isPerspectiveCamera) {
        scale /= dollyScale;
      } else if (scope.object.isOrthographicCamera) {
        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
        scope.enableZoom = false;
      }
    }

    function dollyIn(dollyScale) {
      if (scope.object.isPerspectiveCamera) {
        scale *= dollyScale;
      } else if (scope.object.isOrthographicCamera) {
        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
        scope.enableZoom = false;
      }
    } //
    // event callbacks - update the object state
    //


    function handleMouseDownRotate(event) {
      rotateStart.set(event.clientX, event.clientY);
    }

    function handleMouseDownDolly(event) {
      dollyStart.set(event.clientX, event.clientY);
    }

    function handleMouseDownPan(event) {
      panStart.set(event.clientX, event.clientY);
    }

    function handleMouseMoveRotate(event) {
      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      var element = scope.domElement;
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      rotateStart.copy(rotateEnd);
      scope.update();
    }

    function handleMouseMoveDolly(event) {
      dollyEnd.set(event.clientX, event.clientY);
      dollyDelta.subVectors(dollyEnd, dollyStart);

      if (dollyDelta.y > 0) {
        dollyOut(getZoomScale());
      } else if (dollyDelta.y < 0) {
        dollyIn(getZoomScale());
      }

      dollyStart.copy(dollyEnd);
      scope.update();
    }

    function handleMouseMovePan(event) {
      panEnd.set(event.clientX, event.clientY);
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
      scope.update();
    }

    function handleMouseUp()
    /*event*/
    {// no-op
    }

    function handleMouseWheel(event) {
      if (event.deltaY < 0) {
        dollyIn(getZoomScale());
      } else if (event.deltaY > 0) {
        dollyOut(getZoomScale());
      }

      scope.update();
    }

    function handleKeyDown(event) {
      var needsUpdate = false;

      switch (event.code) {
        case scope.keys.UP:
          pan(0, scope.keyPanSpeed);
          needsUpdate = true;
          break;

        case scope.keys.BOTTOM:
          pan(0, -scope.keyPanSpeed);
          needsUpdate = true;
          break;

        case scope.keys.LEFT:
          pan(scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;

        case scope.keys.RIGHT:
          pan(-scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
      }

      if (needsUpdate) {
        // prevent the browser from scrolling on cursor keys
        event.preventDefault();
        scope.update();
      }
    }

    function handleTouchStartRotate(event) {
      if (event.touches.length == 1) {
        rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
      } else {
        var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
        var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
        rotateStart.set(x, y);
      }
    }

    function handleTouchStartPan(event) {
      if (event.touches.length == 1) {
        panStart.set(event.touches[0].pageX, event.touches[0].pageY);
      } else {
        var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
        var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
        panStart.set(x, y);
      }
    }

    function handleTouchStartDolly(event) {
      var dx = event.touches[0].pageX - event.touches[1].pageX;
      var dy = event.touches[0].pageY - event.touches[1].pageY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }

    function handleTouchStartDollyPan(event) {
      if (scope.enableZoom) handleTouchStartDolly(event);
      if (scope.enablePan) handleTouchStartPan(event);
    }

    function handleTouchStartDollyRotate(event) {
      if (scope.enableZoom) handleTouchStartDolly(event);
      if (scope.enableRotate) handleTouchStartRotate(event);
    }

    function handleTouchMoveRotate(event) {
      if (event.touches.length == 1) {
        rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
      } else {
        var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
        var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
        rotateEnd.set(x, y);
      }

      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      var element = scope.domElement;
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      rotateStart.copy(rotateEnd);
    }

    function handleTouchMovePan(event) {
      if (event.touches.length == 1) {
        panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
      } else {
        var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
        var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
        panEnd.set(x, y);
      }

      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
    }

    function handleTouchMoveDolly(event) {
      var dx = event.touches[0].pageX - event.touches[1].pageX;
      var dy = event.touches[0].pageY - event.touches[1].pageY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      dollyEnd.set(0, distance);
      dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
      dollyOut(dollyDelta.y);
      dollyStart.copy(dollyEnd);
    }

    function handleTouchMoveDollyPan(event) {
      if (scope.enableZoom) handleTouchMoveDolly(event);
      if (scope.enablePan) handleTouchMovePan(event);
    }

    function handleTouchMoveDollyRotate(event) {
      if (scope.enableZoom) handleTouchMoveDolly(event);
      if (scope.enableRotate) handleTouchMoveRotate(event);
    }

    function handleTouchEnd()
    /*event*/
    {// no-op
    } //
    // event handlers - FSM: listen for events and reset state
    //


    function onPointerDown(event) {
      if (scope.enabled === false) return;

      switch (event.pointerType) {
        case 'mouse':
        case 'pen':
          onMouseDown(event);
          break;
        // TODO touch
      }
    }

    function onPointerMove(event) {
      if (scope.enabled === false) return;

      switch (event.pointerType) {
        case 'mouse':
        case 'pen':
          onMouseMove(event);
          break;
        // TODO touch
      }
    }

    function onPointerUp(event) {
      switch (event.pointerType) {
        case 'mouse':
        case 'pen':
          onMouseUp(event);
          break;
        // TODO touch
      }
    }

    function onMouseDown(event) {
      // Prevent the browser from scrolling.
      event.preventDefault(); // Manually set the focus since calling preventDefault above
      // prevents the browser from setting it automatically.

      scope.domElement.focus ? scope.domElement.focus() : window.focus();
      var mouseAction;

      switch (event.button) {
        case 0:
          mouseAction = scope.mouseButtons.LEFT;
          break;

        case 1:
          mouseAction = scope.mouseButtons.MIDDLE;
          break;

        case 2:
          mouseAction = scope.mouseButtons.RIGHT;
          break;

        default:
          mouseAction = -1;
      }

      switch (mouseAction) {
        case MOUSE.DOLLY:
          if (scope.enableZoom === false) return;
          handleMouseDownDolly(event);
          state = STATE.DOLLY;
          break;

        case MOUSE.ROTATE:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enablePan === false) return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          } else {
            if (scope.enableRotate === false) return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          }

          break;

        case MOUSE.PAN:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enableRotate === false) return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          } else {
            if (scope.enablePan === false) return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          }

          break;

        default:
          state = STATE.NONE;
      }

      if (state !== STATE.NONE) {
        scope.domElement.ownerDocument.addEventListener('pointermove', onPointerMove);
        scope.domElement.ownerDocument.addEventListener('pointerup', onPointerUp);
        scope.dispatchEvent(_startEvent);
      }
    }

    function onMouseMove(event) {
      if (scope.enabled === false) return;
      event.preventDefault();

      switch (state) {
        case STATE.ROTATE:
          if (scope.enableRotate === false) return;
          handleMouseMoveRotate(event);
          break;

        case STATE.DOLLY:
          if (scope.enableZoom === false) return;
          handleMouseMoveDolly(event);
          break;

        case STATE.PAN:
          if (scope.enablePan === false) return;
          handleMouseMovePan(event);
          break;
      }
    }

    function onMouseUp(event) {
      scope.domElement.ownerDocument.removeEventListener('pointermove', onPointerMove);
      scope.domElement.ownerDocument.removeEventListener('pointerup', onPointerUp);
      if (scope.enabled === false) return;
      handleMouseUp(event);
      scope.dispatchEvent(_endEvent);
      state = STATE.NONE;
    }

    function onMouseWheel(event) {
      if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
      event.preventDefault();
      scope.dispatchEvent(_startEvent);
      handleMouseWheel(event);
      scope.dispatchEvent(_endEvent);
    }

    function onKeyDown(event) {
      if (scope.enabled === false || scope.enablePan === false) return;
      handleKeyDown(event);
    }

    function onTouchStart(event) {
      if (scope.enabled === false) return;
      event.preventDefault(); // prevent scrolling

      switch (event.touches.length) {
        case 1:
          switch (scope.touches.ONE) {
            case TOUCH.ROTATE:
              if (scope.enableRotate === false) return;
              handleTouchStartRotate(event);
              state = STATE.TOUCH_ROTATE;
              break;

            case TOUCH.PAN:
              if (scope.enablePan === false) return;
              handleTouchStartPan(event);
              state = STATE.TOUCH_PAN;
              break;

            default:
              state = STATE.NONE;
          }

          break;

        case 2:
          switch (scope.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (scope.enableZoom === false && scope.enablePan === false) return;
              handleTouchStartDollyPan(event);
              state = STATE.TOUCH_DOLLY_PAN;
              break;

            case TOUCH.DOLLY_ROTATE:
              if (scope.enableZoom === false && scope.enableRotate === false) return;
              handleTouchStartDollyRotate(event);
              state = STATE.TOUCH_DOLLY_ROTATE;
              break;

            default:
              state = STATE.NONE;
          }

          break;

        default:
          state = STATE.NONE;
      }

      if (state !== STATE.NONE) {
        scope.dispatchEvent(_startEvent);
      }
    }

    function onTouchMove(event) {
      if (scope.enabled === false) return;
      event.preventDefault(); // prevent scrolling

      switch (state) {
        case STATE.TOUCH_ROTATE:
          if (scope.enableRotate === false) return;
          handleTouchMoveRotate(event);
          scope.update();
          break;

        case STATE.TOUCH_PAN:
          if (scope.enablePan === false) return;
          handleTouchMovePan(event);
          scope.update();
          break;

        case STATE.TOUCH_DOLLY_PAN:
          if (scope.enableZoom === false && scope.enablePan === false) return;
          handleTouchMoveDollyPan(event);
          scope.update();
          break;

        case STATE.TOUCH_DOLLY_ROTATE:
          if (scope.enableZoom === false && scope.enableRotate === false) return;
          handleTouchMoveDollyRotate(event);
          scope.update();
          break;

        default:
          state = STATE.NONE;
      }
    }

    function onTouchEnd(event) {
      if (scope.enabled === false) return;
      handleTouchEnd(event);
      scope.dispatchEvent(_endEvent);
      state = STATE.NONE;
    }

    function onContextMenu(event) {
      if (scope.enabled === false) return;
      event.preventDefault();
    } //


    scope.domElement.addEventListener('contextmenu', onContextMenu);
    scope.domElement.addEventListener('pointerdown', onPointerDown);
    scope.domElement.addEventListener('wheel', onMouseWheel, {
      passive: false
    });
    scope.domElement.addEventListener('touchstart', onTouchStart, {
      passive: false
    });
    scope.domElement.addEventListener('touchend', onTouchEnd);
    scope.domElement.addEventListener('touchmove', onTouchMove, {
      passive: false
    }); // force an update at start

    _this.update();

    return _this;
  }

  return OrbitControls;
}(EventDispatcher);

console.log('hello');
console.log(dat);
var raycaster = new THREE.Raycaster();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);

function generatePlane() {
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height, world.plane.widthSegments, world.plane.heightSegments); // vertices position randomization

  var array = planeMesh.geometry.attributes.position.array;
  var randomValues = [];

  for (var i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
      var x = array[i];
      var y = array[i + 1];
      var z = array[i + 2];
      array[i] = x + (Math.random() - 0.5) * 3;
      array[i + 1] = y + (Math.random() - 0.5) * 3;
      array[i + 2] = z + Math.random() * 3;
    }

    randomValues.push(Math.random() * Math.PI * 2);
  }

  planeMesh.geometry.attributes.position.randomValues = randomValues;
  planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array; // color attribute addition

  var colors = [];

  for (var _i = 0; _i < planeMesh.geometry.attributes.position.count; _i++) {
    colors.push(0, 0.19, 0.4);
  }

  planeMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
}

var gui = new dat.GUI();
var world = {
  plane: {
    width: 400,
    height: 400,
    widthSegments: 50,
    heightSegments: 50
  }
};
gui.add(world.plane, 'width', 1, 500).onChange(generatePlane);
gui.add(world.plane, 'height', 1, 500).onChange(generatePlane);
gui.add(world.plane, 'widthSegments', 1, 100).onChange(generatePlane);
gui.add(world.plane, 'heightSegments', 1, 100).onChange(generatePlane);
document.body.appendChild(renderer.domElement);
var controls = new OrbitControls(camera, renderer.domElement);
console.log(controls, 'now'); // const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({color: 0x00FF00})
// const mesh = new THREE.Mesh(boxGeometry, material)
// scene.add(mesh)

camera.position.z = 50;
var planeGeometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height, world.plane.widthSegments, world.plane.heightSegments);
var planeMaterial = new THREE.MeshPhongMaterial({
  // color: 0xff0000,
  side: THREE.DoubleSide,
  flatShading: THREE.FlatShading,
  vertexColors: true
});
var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);
generatePlane();
var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, -1, 1);
scene.add(light);
var backlight = new THREE.DirectionalLight(0xffffff, 1);
backlight.position.set(0, 0, -1);
scene.add(backlight);
var mouse = {
  x: undefined,
  y: undefined
};
var frame = 0;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  raycaster.setFromCamera(mouse, camera);
  frame += 0.01;
  var _planeMesh$geometry$a = planeMesh.geometry.attributes.position,
      array = _planeMesh$geometry$a.array,
      originalPosition = _planeMesh$geometry$a.originalPosition,
      randomValues = _planeMesh$geometry$a.randomValues;

  for (var i = 0; i < array.length; i += 3) {
    // x
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01; // y

    array[i + 1] = originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.001;
  }

  planeMesh.geometry.attributes.position.needsUpdate = true;
  var intersects = raycaster.intersectObject(planeMesh);

  if (intersects.length > 0) {
    var color = intersects[0].object.geometry.attributes.color; // vertices 1

    color.setX(intersects[0].face.a, 0.1);
    color.setY(intersects[0].face.b, 0.5);
    color.setZ(intersects[0].face.b, 1); // vertices 2

    color.setX(intersects[0].face.c, 0.1);
    color.setY(intersects[0].face.c, 0.5);
    color.setZ(intersects[0].face.c, 1); // vertices 3

    color.setX(intersects[0].face.c, 0.1);
    color.setY(intersects[0].face.c, 0.5);
    color.setZ(intersects[0].face.c, 1);
    color.needsUpdate = true; // changes back to original color

    var initialColor = {
      r: 0,
      g: 0.19,
      b: 0.4
    };
    var hoverColor = {
      r: 0.1,
      g: 0.5,
      b: 1
    };
    gsap.to(hoverColor, {
      r: initialColor.r,
      g: initialColor.g,
      b: initialColor.b,
      duration: 1,
      onUpdate: function onUpdate() {
        // vertices 1
        color.setX(intersects[0].face.a, hoverColor.r);
        color.setY(intersects[0].face.a, hoverColor.g);
        color.setZ(intersects[0].face.a, hoverColor.b); // vertices 2

        color.setX(intersects[0].face.b, hoverColor.r);
        color.setY(intersects[0].face.b, hoverColor.g);
        color.setZ(intersects[0].face.b, hoverColor.b); // vertices 3

        color.setX(intersects[0].face.c, hoverColor.r);
        color.setY(intersects[0].face.c, hoverColor.g);
        color.setZ(intersects[0].face.c, hoverColor.b);
        color.needsUpdate = true;
      }
    });
  } // mesh.rotation.x += 0.01
  // mesh.rotation.y += 0.01
  // planeMesh.rotation.x += 0.01

}

renderer.render(scene, camera);
animate();
addEventListener('mousemove', function (event) {
  mouse.x = event.clientX / innerWidth * 2 - 1;
  mouse.y = -(event.clientY / innerHeight) * 2 + 1;
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53646" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map