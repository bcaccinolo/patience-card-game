/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function () {
    function Card(value, color) {
        var visible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, Card);

        this.value = value;
        this.color = color;
        this.visible = visible;
        this.next = null;
        this.stack = null;
    }

    _createClass(Card, [{
        key: 'disp',
        value: function disp() {
            console.log(this.toString());
        }
    }, {
        key: 'easyDisp',
        value: function easyDisp() {
            var str = '';

            if (this.visible !== true) {
                str = 'X';
            }
            str += this.value;
            str += this.color[0].toUpperCase();
            return "'" + str + "'";
        }
    }, {
        key: 'toString',
        value: function toString() {
            if (this.visible) {
                return '[ ' + this.value + ' ' + this.color.slice(0, 4) + ']';
            } else {
                return '[X ' + this.value + ' ' + this.color.slice(0, 4) + ']';
            }
        }
    }, {
        key: 'hasView',
        value: function hasView() {
            return this.view !== undefined;
        }
    }, {
        key: 'isAce',
        value: function isAce(color) {
            return this.value === 1 && this.color === color;
        }
    }, {
        key: 'follows',
        value: function follows(card) {
            return this.followsValue(card) && this.hasSameColor(card);
        }
    }, {
        key: 'followsWithOppositeColor',
        value: function followsWithOppositeColor(card) {
            return this.followsValue(card) && this.hasOppositeColor(card);
        }
    }, {
        key: 'followsValue',
        value: function followsValue(card) {
            return this.value === card.value + 1;
        }
    }, {
        key: 'hasSameColor',
        value: function hasSameColor(card) {
            return this.color === card.color;
        }
    }, {
        key: 'hasOppositeColor',
        value: function hasOppositeColor(card) {
            return this.realColor() !== card.realColor();
        }
    }, {
        key: 'realColor',
        value: function realColor() {
            if (this.color === 'heart' || this.color === 'diamond') {
                return 'red';
            } else {
                return 'black';
            }
        }
    }, {
        key: 'topCardsCount',
        value: function topCardsCount() {
            if (this.next === null) {
                return 1;
            } else {
                return 1 + this.next.topCardsCount();
            }
        }
    }, {
        key: 'getIndexPosition',
        value: function getIndexPosition() {
            return [this.stack.getIndexPosition(), this.stack.cards.indexOf(this)];
        }
    }], [{
        key: 'easyBuild',
        value: function easyBuild(str) {
            var visible = true;
            var color = void 0,
                value = void 0;

            // visibility
            if (str[0] === 'X') {
                visible = false;
                str = str.slice(1, 5);
            }

            // color
            color = this.getColorFromInitial(str[str.length - 1]);
            str = str.slice(0, str.length - 1);

            // value
            value = Number(str);

            return new Card(value, color, visible);
        }
    }, {
        key: 'getColorFromInitial',
        value: function getColorFromInitial(initial) {
            switch (initial) {
                case 'H':
                    return 'heart';
                case 'D':
                    return 'diamond';
                case 'S':
                    return 'spade';
                case 'C':
                    return 'club';
                default:
                    throw 'Unrecognized inital';
            }
        }
    }]);

    return Card;
}();

exports.default = Card;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card = __webpack_require__(0);

var _card2 = _interopRequireDefault(_card);

var _card_zero = __webpack_require__(10);

var _card_zero2 = _interopRequireDefault(_card_zero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This is a stack of cards
var Stack = function () {
    function Stack(game) {
        _classCallCheck(this, Stack);

        this.cards = [];
        this.game = game;
        this.cardZero = new _card_zero2.default(this);
    }

    _createClass(Stack, [{
        key: 'push',
        value: function push(card) {
            this.cards.push(card);
            card.stack = this;

            var lastTwo = this.last(2);
            if (lastTwo !== null) {
                lastTwo[0].next = lastTwo[1];
            }
        }
    }, {
        key: 'pop',
        value: function pop(stack) {
            var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var cards = this.cards.splice(this.cards.length - quantity, quantity);
            var lastCard = this.lastOne();
            if (lastCard) {
                lastCard.next = null;
            }

            cards.forEach(function (card) {
                stack.push(card);
            });

            return true;
        }
    }, {
        key: 'disp',
        value: function disp() {
            console.log(this.toString());
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.cards.map(function (card) {
                return card.toString();
            });
        }
    }, {
        key: 'easyDisp',
        value: function easyDisp() {
            var cards = this.cards;
            return Stack.arrayEasyDisp(cards);
        }
    }, {
        key: 'last',
        value: function last() {
            var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            if (this.empty()) {
                return null;
            }
            if (this.cards.length < quantity) {
                return null;
            }

            var cards = [];
            for (var index = quantity; index > 0; index--) {
                cards.push(this.cards[this.cards.length - index]);
            }
            return cards;
        }
    }, {
        key: 'lastOne',
        value: function lastOne() {
            var res = this.last();
            if (res === null) {
                return null;
            }
            return this.last()[0];
        }
    }, {
        key: 'empty',
        value: function empty() {
            if (this.cards.length === 0) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'visibleCardsCount',
        value: function visibleCardsCount() {
            return this.visibleCards().length;
        }
    }, {
        key: 'visibleCards',
        value: function visibleCards() {
            if (this.empty()) {
                return [];
            }

            var index = this.cards.length - 1;
            var cards = [];
            var foundNonVisibleCard = false;
            while (foundNonVisibleCard === false) {
                if (index < 0) {
                    break;
                }

                var c = this.cards[index];
                if (c.visible) {
                    cards.push(c);
                    index = index - 1;
                } else {
                    cards.reverse();
                    foundNonVisibleCard = true;
                }
            }
            return cards;
        }
    }, {
        key: 'getIndexPosition',
        value: function getIndexPosition() {
            return this.game.stacks.indexOf(this);
        }
    }, {
        key: 'easyBuild',
        value: function easyBuild(list) {
            var _this = this;

            this.cards = [];
            list.forEach(function (element) {
                _this.push(_card2.default.easyBuild(element));
            });
        }
    }], [{
        key: 'arrayEasyDisp',
        value: function arrayEasyDisp(cards) {
            var list = cards.map(function (card) {
                return card.easyDisp();
            });
            if (list) {
                return list.join(', ');
            } else {
                return '';
            }
        }
    }]);

    return Stack;
}();

exports.default = Stack;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card_view_service = __webpack_require__(3);

var _card_view_service2 = _interopRequireDefault(_card_view_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardViewFactory = function () {
    function CardViewFactory(pixi, board) {
        _classCallCheck(this, CardViewFactory);

        this.pixi = pixi;
        this.board = board;
    }

    _createClass(CardViewFactory, [{
        key: 'createView',
        value: function createView(card) {
            var view = this.createBasicView(card);
            this.makeViewDraggable(view);

            _card_view_service2.default.assignMethods(view);

            view.setCardTexture();
            view.setBoardPosition();
        }
    }, {
        key: 'createBasicView',
        value: function createBasicView(card) {
            var view = void 0;
            var frontTexture = this.getTexture(card);
            var backTexture = this.board.backTexture;

            if (card.visible === true) {
                view = new this.pixi.Sprite(frontTexture);
            } else {
                view = new this.pixi.Sprite(backTexture);
            }

            view.frontTexture = frontTexture;
            view.backTexture = backTexture;

            view.card = card;
            card.view = view;

            return view;
        }
    }, {
        key: 'getTexture',
        value: function getTexture(card) {
            var texturePath = './images/cards/' + card.color + '-' + card.value + '.png';
            return this.pixi.Texture.fromImage(texturePath);
        }
    }, {
        key: 'makeViewDraggable',
        value: function makeViewDraggable(view) {
            view.interactive = true; // this will allow it to respond to mouse and touch events
            view.buttonMode = true; // this button mode will mean the hand cursor appears when you roll over
            view.anchor.set(0.5, 0.2);

            view.on('click', _card_view_service2.default.onClick).on('pointerdown', _card_view_service2.default.onDragStart).on('pointerup', _card_view_service2.default.onDragEnd).on('pointermove', _card_view_service2.default.onDragMove).on('pointerupoutside', _card_view_service2.default.onDragEnd);

            this.addCollisionProperties(view);
        }
    }, {
        key: 'makeClickableForDeck',
        value: function makeClickableForDeck(view) {
            view.interactive = true; // this will allow it to respond to mouse and touch events
            view.buttonMode = true; // this button mode will mean the hand cursor appears when you roll over

            view.removeAllListeners();
            view.on('click', _card_view_service2.default.onDeckClick);
        }

        // `addCollisionProperties` adds extra properties to sprites to help
        // simplify the collision code. It won't add these properties if they
        // already exist on the sprite. After these properties have been
        // added, this methods adds a Boolean property to the sprite called `_bumpPropertiesAdded`
        // and sets it to `true` to flag that the sprite has these
        // new properties

    }, {
        key: 'addCollisionProperties',
        value: function addCollisionProperties(sprite) {
            // Add properties to Pixi sprites
            // if (this.renderer === "pixi") {

            if (sprite.gx === undefined) {
                Object.defineProperty(sprite, "gx", {
                    get: function get() {
                        return sprite.getGlobalPosition().x;
                    },

                    enumerable: true,
                    configurable: true
                });
            }

            if (sprite.gy === undefined) {
                Object.defineProperty(sprite, "gy", {
                    get: function get() {
                        return sprite.getGlobalPosition().y;
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.centerX === undefined) {
                Object.defineProperty(sprite, "centerX", {
                    get: function get() {
                        return sprite.x + sprite.width / 2;
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.centerY === undefined) {
                Object.defineProperty(sprite, "centerY", {
                    get: function get() {
                        return sprite.y + sprite.height / 2;
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.halfWidth === undefined) {
                Object.defineProperty(sprite, "halfWidth", {
                    get: function get() {
                        return sprite.width / 2;
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.halfHeight === undefined) {
                Object.defineProperty(sprite, "halfHeight", {
                    get: function get() {
                        return sprite.height / 2;
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.xAnchorOffset === undefined) {
                Object.defineProperty(sprite, "xAnchorOffset", {
                    get: function get() {
                        if (sprite.anchor !== undefined) {
                            return sprite.width * sprite.anchor.x;
                        } else {
                            return 0;
                        }
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.yAnchorOffset === undefined) {
                Object.defineProperty(sprite, "yAnchorOffset", {
                    get: function get() {
                        if (sprite.anchor !== undefined) {
                            return sprite.height * sprite.anchor.y;
                        } else {
                            return 0;
                        }
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.circular && sprite.radius === undefined) {
                Object.defineProperty(sprite, "radius", {
                    get: function get() {
                        return sprite.width / 2;
                    },

                    enumerable: true, configurable: true
                });
            }

            // Add a Boolean `_bumpPropertiesAdded` property to the sprite to flag it
            // as having these new properties
            sprite._bumpPropertiesAdded = true;
        }
    }]);

    return CardViewFactory;
}();

exports.default = CardViewFactory;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardViewService = function () {
    function CardViewService() {
        _classCallCheck(this, CardViewService);
    }

    _createClass(CardViewService, null, [{
        key: 'assignMethods',
        value: function assignMethods(view) {
            view.hitTestRectangle = this.hitTestRectangle;

            view.setBoardPosition = this.setBoardPosition.bind(view);
            view.setPlayingStackPosition = this.setPlayingStackPosition.bind(view);
            view.setColorStackPosition = this.setColorStackPosition.bind(view);
            view.setDeckStackPosition = this.setDeckStackPosition.bind(view);

            view.validateDrag = this.validateDrag.bind(view);
            view.calculateDelta = this.calculateDelta.bind(view);
            view.makeVisible = this.makeVisible.bind(view);
            view.makeNotVisible = this.makeNotVisible.bind(view);
            view.setCardTexture = this.setCardTexture.bind(view);
            view.moveTopZindex = this.moveTopZindex.bind(view);

            view.updateBoardPositionAndNext = this.updateBoardPositionAndNext.bind(view);
            view.updateDragSettingsAndNext = this.updateDragSettingsAndNext.bind(view);
            view.setBoardPositionAndNext = this.setBoardPositionAndNext.bind(view);
        }
    }, {
        key: 'setBoardPosition',
        value: function setBoardPosition() {
            var _card$getIndexPositio = this.card.getIndexPosition(),
                _card$getIndexPositio2 = _slicedToArray(_card$getIndexPositio, 2),
                stackIndex = _card$getIndexPositio2[0],
                cardIndex = _card$getIndexPositio2[1];

            if (stackIndex >= 5) {
                this.setPlayingStackPosition(stackIndex, cardIndex);
            } else if (stackIndex >= 1) {
                this.setColorStackPosition(stackIndex, cardIndex);
            } else {
                this.setDeckStackPosition();
            }
        }
    }, {
        key: 'setPlayingStackPosition',
        value: function setPlayingStackPosition(stackIndex, cardIndex) {
            this.x = 50 + (stackIndex - 5) * 90;
            this.y = 120 + cardIndex * 30;
        }
    }, {
        key: 'setColorStackPosition',
        value: function setColorStackPosition(stackIndex, cardIndex) {
            this.anchor.set(0);
            this.removeAllListeners();

            this.x = 290 + (stackIndex - 1) * 90;
            this.y = 10;
        }
    }, {
        key: 'setDeckStackPosition',
        value: function setDeckStackPosition() {
            this.x = 120;
            this.y = 27;
        }
    }, {
        key: 'setBoardPositionAndNext',
        value: function setBoardPositionAndNext() {
            this.setBoardPosition();

            if (this.card.next) {
                this.card.next.view.setBoardPositionAndNext();
            }
        }
    }, {
        key: 'updateBoardPositionAndNext',
        value: function updateBoardPositionAndNext(deltaX, deltaY) {
            this.x = this.x + deltaX;
            this.y = this.y + deltaY;

            if (this.card.next) {
                this.card.next.view.updateBoardPositionAndNext(deltaX, deltaY);
            }
        }
    }, {
        key: 'calculateDelta',
        value: function calculateDelta(newPosition) {
            return [newPosition.x - this.x, newPosition.y - this.y];
        }
    }, {
        key: 'updateDragSettingsAndNext',
        value: function updateDragSettingsAndNext() {
            this.moveTopZindex();

            if (this.card.next) {
                this.card.next.view.updateDragSettingsAndNext();
            }
        }
    }, {
        key: 'moveTopZindex',
        value: function moveTopZindex() {
            var container = this.parent;
            var size = container.children.length;
            container.setChildIndex(this, size - 1);
        }
    }, {
        key: 'onClick',
        value: function onClick(event) {
            var cardView = this;
            var card = cardView.card;

            if (card.visible === false) {
                event.stopPropagation();

                if (card.next === null) {
                    cardView.makeVisible();
                }
            }
        }
    }, {
        key: 'onDeckClick',
        value: function onDeckClick(event) {
            event.stopPropagation();

            var cardView = event.currentTarget;
            var card = cardView.card;
            var deck = card.deck;
            var deckStack = card.deckStack;
            var game = deck.game;

            deck.popOne(deckStack);
            cardView.moveTopZindex();
            cardView.makeVisible();
            cardView.setDeckStackPosition();

            cardView.removeAllListeners();
            game.board.cardFactory.makeViewDraggable(cardView);

            if (deck.empty() === false) {
                game.board.dispDeckAndDeckStack();
            }
        }
    }, {
        key: 'makeVisible',
        value: function makeVisible() {
            this.card.visible = true;
            this.setCardTexture();
        }
    }, {
        key: 'makeNotVisible',
        value: function makeNotVisible() {
            this.card.visible = false;
            this.setCardTexture();
        }
    }, {
        key: 'setCardTexture',
        value: function setCardTexture() {
            if (this.card.visible === true) {
                this.setTexture(this.frontTexture);
            } else {
                this.setTexture(this.backTexture);
            }
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(event) {
            event.stopPropagation();

            var cardView = this;
            var card = cardView.card;
            var game = card.stack.game;

            if (card.visible === false) {
                return;
            }

            card.possibleCollisions = game.collisionCardsFor(card);

            cardView.data = event.data;
            cardView.dragging = true;

            cardView.updateDragSettingsAndNext();
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd(event) {
            event.stopPropagation();

            if (this.dragging === false) {
                return;
            }

            var cardView = this;
            cardView.dragging = false;
            cardView.alpha = 1;
            cardView.data = null;

            cardView.validateDrag();
            cardView.setBoardPositionAndNext();
        }
    }, {
        key: 'onDragMove',
        value: function onDragMove(event) {
            if (this.dragging) {
                event.stopPropagation();

                var cardView = this;
                var card = cardView.card;

                var cardCollision = false;
                card.possibleCollisions.forEach(function (card2) {
                    if (cardView.hitTestRectangle(cardView, card2.view)) {
                        // console.log('shock with ' + card2.toString())
                        card.onTopOf = card2;
                        cardCollision = true;
                    }
                });
                if (cardCollision === false) {
                    card.onTopOf = null;
                }

                var newPosition = cardView.data.getLocalPosition(cardView.parent);

                var _cardView$calculateDe = cardView.calculateDelta(newPosition),
                    _cardView$calculateDe2 = _slicedToArray(_cardView$calculateDe, 2),
                    deltaX = _cardView$calculateDe2[0],
                    deltaY = _cardView$calculateDe2[1];

                cardView.updateBoardPositionAndNext(deltaX, deltaY);
            }
        }
    }, {
        key: 'validateDrag',
        value: function validateDrag() {
            var card = this.card;
            var stack = card.stack;
            var game = stack.game;

            if (card.onTopOf) {
                var stack2 = card.onTopOf.stack;
                var sourceIndex = game.stacks.indexOf(stack);
                var destinationIndex = game.stacks.indexOf(stack2);
                var res = game.moveCards(sourceIndex, destinationIndex, card.topCardsCount());
                // console.log('moveCards ' + res)
                if (game.complete()) {
                    console.log('The game is complete! Congratulations!');
                }
            }
        }
    }, {
        key: 'hitTestRectangle',
        value: function hitTestRectangle(r1, r2) {
            var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            // Add collision properties
            if (!r1._bumpPropertiesAdded) this.addCollisionProperties(r1);
            if (!r2._bumpPropertiesAdded) this.addCollisionProperties(r2);

            var hit = void 0,
                combinedHalfWidths = void 0,
                combinedHalfHeights = void 0,
                vx = void 0,
                vy = void 0;

            // A variable to determine whether there's a collision
            hit = false;

            // Calculate the distance vector
            if (global) {
                vx = r1.gx + Math.abs(r1.halfWidth) - r1.xAnchorOffset - (r2.gx + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
                vy = r1.gy + Math.abs(r1.halfHeight) - r1.yAnchorOffset - (r2.gy + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
            } else {
                vx = r1.x + Math.abs(r1.halfWidth) - r1.xAnchorOffset - (r2.x + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
                vy = r1.y + Math.abs(r1.halfHeight) - r1.yAnchorOffset - (r2.y + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
            }

            // Figure out the combined half-widths and half-heights
            combinedHalfWidths = Math.abs(r1.halfWidth) + Math.abs(r2.halfWidth);
            combinedHalfHeights = Math.abs(r1.halfHeight) + Math.abs(r2.halfHeight);

            // Check for a collision on the x axis
            if (Math.abs(vx) < combinedHalfWidths) {

                // A collision might be occuring. Check for a collision on the y axis
                if (Math.abs(vy) < combinedHalfHeights) {

                    // There's definitely a collision happening
                    hit = true;
                } else {

                    // There's no collision on the y axis
                    hit = false;
                }
            } else {

                // There's no collision on the x axis
                hit = false;
            }

            // `hit` will be either `true` or `false`
            return hit;
        }
    }]);

    return CardViewService;
}();

exports.default = CardViewService;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardZeroFactory = function () {
    function CardZeroFactory(pixi, board) {
        _classCallCheck(this, CardZeroFactory);

        this.pixi = pixi;
        this.board = board;
    }

    _createClass(CardZeroFactory, [{
        key: "createView",
        value: function createView(card) {
            this.createBasicView(card);
        }
    }, {
        key: "createBasicView",
        value: function createBasicView(card) {
            var texture = this.getTexture();
            var view = new this.pixi.Sprite(texture);
            view.card = card;
            card.view = view;

            view.tint = 0x00FFFF; // tinting for fun and visibilty

            view.x = 50 + (card.stack.getIndexPosition() - 5) * 90;
            view.y = 120;

            this.makeViewDraggable(view);

            return view;
        }
    }, {
        key: "getTexture",
        value: function getTexture() {
            var texturePath = './images/cards/card-zero.png';
            return this.pixi.Texture.fromImage(texturePath);
        }
    }, {
        key: "makeViewDraggable",
        value: function makeViewDraggable(view) {
            view.anchor.set(0.5, 0.2);
            view.interactive = true; // this will allow it to respond to mouse and touch events

            this.addCollisionProperties(view);
        }

        // `addCollisionProperties` adds extra properties to sprites to help
        // simplify the collision code. It won't add these properties if they
        // already exist on the sprite. After these properties have been
        // added, this methods adds a Boolean property to the sprite called `_bumpPropertiesAdded`
        // and sets it to `true` to flag that the sprite has these
        // new properties

    }, {
        key: "addCollisionProperties",
        value: function addCollisionProperties(sprite) {
            // Add properties to Pixi sprites
            // if (this.renderer === "pixi") {

            if (sprite.gx === undefined) {
                Object.defineProperty(sprite, "gx", {
                    get: function get() {
                        return sprite.getGlobalPosition().x;
                    },

                    enumerable: true,
                    configurable: true
                });
            }

            if (sprite.gy === undefined) {
                Object.defineProperty(sprite, "gy", {
                    get: function get() {
                        return sprite.getGlobalPosition().y;
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.centerX === undefined) {
                Object.defineProperty(sprite, "centerX", {
                    get: function get() {
                        return sprite.x + sprite.width / 2;
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.centerY === undefined) {
                Object.defineProperty(sprite, "centerY", {
                    get: function get() {
                        return sprite.y + sprite.height / 2;
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.halfWidth === undefined) {
                Object.defineProperty(sprite, "halfWidth", {
                    get: function get() {
                        return sprite.width / 2;
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.halfHeight === undefined) {
                Object.defineProperty(sprite, "halfHeight", {
                    get: function get() {
                        return sprite.height / 2;
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.xAnchorOffset === undefined) {
                Object.defineProperty(sprite, "xAnchorOffset", {
                    get: function get() {
                        if (sprite.anchor !== undefined) {
                            return sprite.width * sprite.anchor.x;
                        } else {
                            return 0;
                        }
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.yAnchorOffset === undefined) {
                Object.defineProperty(sprite, "yAnchorOffset", {
                    get: function get() {
                        if (sprite.anchor !== undefined) {
                            return sprite.height * sprite.anchor.y;
                        } else {
                            return 0;
                        }
                    },

                    enumerable: true, configurable: true
                });
            }

            if (sprite.circular && sprite.radius === undefined) {
                Object.defineProperty(sprite, "radius", {
                    get: function get() {
                        return sprite.width / 2;
                    },

                    enumerable: true, configurable: true
                });
            }

            // Add a Boolean `_bumpPropertiesAdded` property to the sprite to flag it
            // as having these new properties
            sprite._bumpPropertiesAdded = true;
        }
    }]);

    return CardZeroFactory;
}();

exports.default = CardZeroFactory;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(6);

var _game2 = _interopRequireDefault(_game);

var _board = __webpack_require__(14);

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _game2.default();
game.distribute();

// game.deck.cards = []
// game.deck.easyBuild(['X3S', 'X12H', 'X1D', 'X13S'])
// game.stacks[0].easyBuild([])

// game.playingStacks[0].easyBuild([])
// game.playingStacks[1].easyBuild([])
// game.playingStacks[2].easyBuild([])
// game.playingStacks[3].easyBuild(['2D'])
// game.playingStacks[4].easyBuild(['X6C', 'X13H', 'X2C', 'X7D', '5S'])
// game.playingStacks[5].easyBuild(['X6H', 'X10H', 'X13S', 'X11S', 'X1C', 'X12H'])
// game.playingStacks[6].easyBuild(['X8C', 'X9S', 'X12H', 'X11C', 'X12C', 'X4S', '13C'])

// game.colorStacks[0].easyBuild(['1D', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', '11D', '12D', '13D'])
// game.colorStacks[1].easyBuild(['1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H'])
// game.colorStacks[2].easyBuild(['1S', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', '11S', '12S', '13S'])
// game.colorStacks[3].easyBuild(['1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', '11C', '12C', '13C'])

// game.disp()

var pixi = PIXI;

var app = new pixi.Application(640, 600, { backgroundColor: 0x008400 });
document.getElementById('patience').appendChild(app.view);

var board = new _board2.default(game, pixi, app);

board.createSpriteCardsZeroColor();
board.dispAllStacks();
board.dispDeckAndDeckStack();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deck = __webpack_require__(7);

var _deck2 = _interopRequireDefault(_deck);

var _stack_service = __webpack_require__(9);

var _stack_service2 = _interopRequireDefault(_stack_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.deck = new _deck2.default(this);
        this.stacks = _stack_service2.default.prepareStacks(this);
        this.deckStack = this.stacks[0];
        this.colorStacks = this.stacks.slice(1, 5);
        this.playingStacks = this.stacks.slice(5, 12);
    }

    _createClass(Game, [{
        key: 'distribute',
        value: function distribute() {
            var _this = this;

            this.playingStacks.forEach(function (stack, index) {
                _this.deck.pop(stack, index + 1, false);
                var topCard = stack.last()[0];
                topCard.visible = true;
            });
        }
    }, {
        key: 'complete',
        value: function complete() {
            this.stacks[1].complete() && this.stacks[2].complete() && this.stacks[3].complete() && this.stacks[4].complete();
        }
    }, {
        key: 'isMovePossible',
        value: function isMovePossible(sourceIndex, destinationIndex) {
            var quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            if (quantity === 0) {
                return false;
            }

            if (_stack_service2.default.isDeckStack(sourceIndex)) {
                return this.fromDeckStackIsMovePossible(sourceIndex, destinationIndex, quantity);
            }

            if (_stack_service2.default.isPlayingStack(sourceIndex)) {
                return this.fromPlayingStackIsMovePossible(sourceIndex, destinationIndex, quantity);
            }

            // if sourceIndex is ColorStack
            return false;
        }
    }, {
        key: 'fromDeckStackIsMovePossible',
        value: function fromDeckStackIsMovePossible(sourceIndex, destinationIndex) {
            var quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            var sourceStack = this.stacks[sourceIndex];
            var destinationStack = this.stacks[destinationIndex];
            var cardsToMove = sourceStack.last(quantity);
            var topStackCard = destinationStack.last();

            if (quantity > 1) {
                return false;
            }

            if (_stack_service2.default.isColorStack(destinationIndex)) {
                var card = cardsToMove[0];

                if (destinationStack.empty()) {

                    if (card.value === 1) {
                        if (card.color === destinationStack.color) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    return card.follows(topStackCard[0]);
                }
            }

            if (_stack_service2.default.isPlayingStack(destinationIndex)) {

                if (destinationStack.empty()) {
                    // it's a king
                    if (cardsToMove[0].value === 13) {
                        return true;
                    }
                    return false;
                }

                if (topStackCard[0].followsWithOppositeColor(cardsToMove[0]) === true) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'fromPlayingStackIsMovePossible',
        value: function fromPlayingStackIsMovePossible(sourceIndex, destinationIndex) {
            var quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            var sourceStack = this.stacks[sourceIndex];
            var destinationStack = this.stacks[destinationIndex];
            var cardsToMove = sourceStack.last(quantity);
            var topStackCard = destinationStack.last();

            if (_stack_service2.default.isColorStack(destinationIndex)) {
                if (quantity !== 1) {
                    return false;
                }
                if (destinationStack.empty()) {
                    return cardsToMove[0].isAce(destinationStack.color);
                }
                return cardsToMove[0].follows(topStackCard[0]);
            }

            if (_stack_service2.default.isPlayingStack(destinationIndex)) {
                if (destinationStack.empty()) {
                    // it's a king
                    if (cardsToMove[0].value === 13) {
                        return true;
                    }
                    return false;
                }
                return topStackCard[0].followsWithOppositeColor(cardsToMove[0]);
            }

            return false;
        }
    }, {
        key: 'moveCards',
        value: function moveCards(sourceIndex, destinationIndex) {
            var quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            if (this.isMovePossible(sourceIndex, destinationIndex, quantity) === false) {
                // console.log('** move not possible **');
                return false;
            }
            return this.stacks[sourceIndex].pop(this.stacks[destinationIndex], quantity);
        }
    }, {
        key: 'popDeck',
        value: function popDeck() {
            this.deck.popOne(this.deckStack);
        }
    }, {
        key: 'collisionCardsFor',
        value: function collisionCardsFor(card) {
            var topCards = this.playingTopCardsFor(card).concat(this.colorTopCards());

            var cards = topCards.reduce(function (result, card) {
                if (card === undefined || card === null) {
                    return result;
                }
                if (card.value === 0 || card.visible === true) {
                    result.push(card);
                }
                return result;
            }, []);

            return cards;
        }
    }, {
        key: 'playingTopCardsFor',
        value: function playingTopCardsFor(card) {
            var stacks = this.playingStacks;

            var topCards = stacks.map(function (stack) {
                if (stack === card.stack) {
                    return;
                }
                if (stack.empty()) {
                    return stack.cardZero;
                }
                return stack.lastOne();
            });
            return topCards;
        }
    }, {
        key: 'colorTopCards',
        value: function colorTopCards() {
            var stacks = this.colorStacks;

            var topCards = stacks.map(function (stack) {
                if (stack.empty()) {
                    return stack.cardZero;
                }
                return stack.lastOne();
            });

            return topCards;
        }
    }, {
        key: 'disp',
        value: function disp() {
            var str = this.commonStacksDisp();
            str = str + this.playingStackDisp();
            // str = str + this.betterPlayingStackDisp()
            console.log(str);
        }
    }, {
        key: 'easyDisp',
        value: function easyDisp() {
            this.playingStacks.forEach(function (stack) {
                console.log(stack.easyDisp());
            });
        }
    }, {
        key: 'commonStacksDisp',
        value: function commonStacksDisp() {
            return 'Deck: ' + this.deck.toString() + '\n' + '[0] Deck Stack: ' + this.deckStack.toString() + '\n' + '[1] Diamond Stack: ' + this.stacks[1].toString() + '\n' + '[2] Heart Stack: ' + this.stacks[2].toString() + '\n' + '[3] Spade Stack: ' + this.stacks[3].toString() + '\n' + '[4] Club Stack: ' + this.stacks[4].toString() + '\n\n';
        }
    }, {
        key: 'playingStackDisp',
        value: function playingStackDisp() {
            var str = '';
            // playingStacks : index 5 -> 11
            for (var i = 0; i < 7; i++) {
                var index = i + 5;
                str = str + '[' + index + '] : ' + this.stacks[index].toString() + '\n';
            }
            return str;
        }
    }, {
        key: 'betterPlayingStackDisp',
        value: function betterPlayingStackDisp() {
            var full = 0;
            var index = 0;
            var str = '';
            while (full < 7) {
                full = 0;
                var line = this.playingStacks.map(function (stack) {
                    if (stack.cards[index] === undefined) {
                        full++;
                        return '\t ';
                    } else {
                        return stack.cards[index].toString();
                    }
                });

                str = str + line.join(' \t ') + '\n';
                index++;
            }
            return str;
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card = __webpack_require__(0);

var _card2 = _interopRequireDefault(_card);

var _card_zero_deck = __webpack_require__(8);

var _card_zero_deck2 = _interopRequireDefault(_card_zero_deck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// this is the deck with all the returned cards
var Deck = function () {
    function Deck(game) {
        _classCallCheck(this, Deck);

        this.game = game;
        this.cards = [];
        this.cardZero = new _card_zero_deck2.default(this);

        this.generateCards();
        this.shuffle();
    }

    _createClass(Deck, [{
        key: 'easyBuild',
        value: function easyBuild(list) {
            var _this = this;

            this.cards = [];
            list.forEach(function (element) {
                _this.cards.push(_card2.default.easyBuild(element));
            });
        }
    }, {
        key: 'generateCards',
        value: function generateCards() {
            var _this2 = this;

            var colors = ['heart', 'diamond', 'spade', 'club'];

            var _loop = function _loop(index) {
                colors.forEach(function (color) {
                    var card = new _card2.default(index, color, false);
                    _this2.cards.push(card);
                });
            };

            for (var index = 1; index < 14; index++) {
                _loop(index);
            }
        }
    }, {
        key: 'shuffle',
        value: function shuffle() {
            this.cards.sort(function (a, b) {
                return 0.5 - Math.random();
            });
        }
    }, {
        key: 'popOne',
        value: function popOne(stack) {
            var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var card = this.cards.pop();
            card.visible = visible;
            stack.push(card);
        }
    }, {
        key: 'pop',
        value: function pop(stack) {
            var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var visible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            for (var index = 0; index < quantity; index++) {
                this.popOne(stack, visible);
            }
        }
    }, {
        key: 'push',
        value: function push(card) {
            this.cards.push(card);
            card.deck = this;
            card.next = null; // on n´a pas besoin du concept de next dans le Deck
        }
    }, {
        key: 'last',
        value: function last() {
            var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            if (this.empty()) {
                return null;
            }
            if (this.cards.length < quantity) {
                return null;
            }

            var cards = [];
            for (var index = quantity; index > 0; index--) {
                cards.push(this.cards[this.cards.length - index]);
            }
            if (cards.length === 1) {
                return cards[0];
            }
            return cards;
        }
    }, {
        key: 'lastOne',
        value: function lastOne() {
            var res = this.last();
            if (res === null) {
                return null;
            }
            return this.last()[0];
        }
    }, {
        key: 'empty',
        value: function empty() {
            return this.cards.length === 0;
        }
    }, {
        key: 'disp',
        value: function disp() {
            this.cards.forEach(function (card) {
                card.disp();
            });
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.cards.map(function (card) {
                return card.toString();
            }).join();
        }
    }]);

    return Deck;
}();

exports.default = Deck;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card = __webpack_require__(0);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardDeckZero = function (_Card) {
    _inherits(CardDeckZero, _Card);

    function CardDeckZero(deck) {
        _classCallCheck(this, CardDeckZero);

        var _this = _possibleConstructorReturn(this, (CardDeckZero.__proto__ || Object.getPrototypeOf(CardDeckZero)).call(this, 0, null, false));

        _this.deck = deck;
        return _this;
    }

    _createClass(CardDeckZero, [{
        key: 'toString',
        value: function toString() {
            return '[ 0 card of deck stack]';
        }
    }, {
        key: 'easyDisp',
        value: function easyDisp() {
            return "'0[Deck]'";
        }
    }]);

    return CardDeckZero;
}(_card2.default);

exports.default = CardDeckZero;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stack = __webpack_require__(1);

var _stack2 = _interopRequireDefault(_stack);

var _color_stack = __webpack_require__(11);

var _color_stack2 = _interopRequireDefault(_color_stack);

var _deck_stack = __webpack_require__(13);

var _deck_stack2 = _interopRequireDefault(_deck_stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StackService = function () {
    function StackService() {
        _classCallCheck(this, StackService);
    }

    _createClass(StackService, null, [{
        key: 'prepareStacks',
        value: function prepareStacks(game) {
            var stacks = [];

            // deckStack : index 0
            stacks.push(new _deck_stack2.default(game));

            // diamondStack : index 1
            stacks.push(new _color_stack2.default(game, 'diamond'));
            // heartStack : index 2
            stacks.push(new _color_stack2.default(game, 'heart'));
            // spadeStack : index 3
            stacks.push(new _color_stack2.default(game, 'spade'));
            // clubStack : index 4
            stacks.push(new _color_stack2.default(game, 'club'));

            // playingStacks : index 5 -> 11
            for (var index = 0; index < 7; index++) {
                stacks.push(new _stack2.default(game));
            }

            return stacks;
        }
    }, {
        key: 'isColorStack',
        value: function isColorStack(index) {
            return this.stackType(index) === 'colorStack';
        }
    }, {
        key: 'isPlayingStack',
        value: function isPlayingStack(index) {
            return this.stackType(index) === 'playingStack';
        }
    }, {
        key: 'isDeckStack',
        value: function isDeckStack(index) {
            return this.stackType(index) === 'deckStack';
        }
    }, {
        key: 'stackType',
        value: function stackType(index) {
            if (index >= 5) {
                return 'playingStack';
            } else if (index >= 1) {
                return 'colorStack';
            } else {
                return 'deckStack';
            }
        }
    }]);

    return StackService;
}();

exports.default = StackService;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card = __webpack_require__(0);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardZero = function (_Card) {
    _inherits(CardZero, _Card);

    function CardZero(stack) {
        _classCallCheck(this, CardZero);

        var _this = _possibleConstructorReturn(this, (CardZero.__proto__ || Object.getPrototypeOf(CardZero)).call(this, 0, null, false));

        _this.stack = stack;
        return _this;
    }

    _createClass(CardZero, [{
        key: 'toString',
        value: function toString() {
            return '[ 0cards of stack' + this.stack.getIndexPosition() + ']';
        }
    }, {
        key: 'easyDisp',
        value: function easyDisp() {
            return "'0[" + this.stack.getIndexPosition() + "]'";
        }
    }]);

    return CardZero;
}(_card2.default);

exports.default = CardZero;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stack = __webpack_require__(1);

var _stack2 = _interopRequireDefault(_stack);

var _card_zero_color = __webpack_require__(12);

var _card_zero_color2 = _interopRequireDefault(_card_zero_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// this is the stack you have to file in order to win the game
var ColorStack = function (_Stack) {
    _inherits(ColorStack, _Stack);

    function ColorStack(game, color) {
        _classCallCheck(this, ColorStack);

        var _this = _possibleConstructorReturn(this, (ColorStack.__proto__ || Object.getPrototypeOf(ColorStack)).call(this, game));

        _this.color = color;
        _this.cardZero = new _card_zero_color2.default(_this);
        return _this;
    }

    _createClass(ColorStack, [{
        key: 'complete',
        value: function complete() {
            var _this2 = this;

            var comparator = function comparator(initvalue, card, index, arr) {
                return initvalue && card.value === index + 1 && card.color === _this2.color;
            };
            return this.cards.reduce(comparator, true) && this.cards.length === 13;
        }
    }]);

    return ColorStack;
}(_stack2.default);

exports.default = ColorStack;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card = __webpack_require__(0);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardZeroColor = function (_Card) {
    _inherits(CardZeroColor, _Card);

    function CardZeroColor(colorStack) {
        _classCallCheck(this, CardZeroColor);

        var _this = _possibleConstructorReturn(this, (CardZeroColor.__proto__ || Object.getPrototypeOf(CardZeroColor)).call(this, 0, colorStack.color, false));

        _this.stack = colorStack;
        _this.color = colorStack.color;
        return _this;
    }

    _createClass(CardZeroColor, [{
        key: 'toString',
        value: function toString() {
            return '[0 card ' + this.color + ']';
        }
    }, {
        key: 'easyDisp',
        value: function easyDisp() {
            return "'0[" + this.color[0].toUpperCase() + "]'";
        }
    }]);

    return CardZeroColor;
}(_card2.default);

exports.default = CardZeroColor;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stack = __webpack_require__(1);

var _stack2 = _interopRequireDefault(_stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeckStack = function (_Stack) {
    _inherits(DeckStack, _Stack);

    function DeckStack() {
        _classCallCheck(this, DeckStack);

        return _possibleConstructorReturn(this, (DeckStack.__proto__ || Object.getPrototypeOf(DeckStack)).apply(this, arguments));
    }

    _createClass(DeckStack, [{
        key: 'moveCardsBackOnDeck',
        value: function moveCardsBackOnDeck() {
            var deck = this.game.deck;
            this.cards.reverse().forEach(function (card) {
                card.visible = false;
                deck.push(card);
            });
            this.cards = [];
        }
    }]);

    return DeckStack;
}(_stack2.default);

exports.default = DeckStack;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deck_factory = __webpack_require__(15);

var _deck_factory2 = _interopRequireDefault(_deck_factory);

var _card_view_factory = __webpack_require__(2);

var _card_view_factory2 = _interopRequireDefault(_card_view_factory);

var _card_zero_factory = __webpack_require__(4);

var _card_zero_factory2 = _interopRequireDefault(_card_zero_factory);

var _card_zero_deck_factory = __webpack_require__(16);

var _card_zero_deck_factory2 = _interopRequireDefault(_card_zero_deck_factory);

var _card_zero_color_factory = __webpack_require__(17);

var _card_zero_color_factory2 = _interopRequireDefault(_card_zero_color_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
    function Board(game, pixi, app) {
        _classCallCheck(this, Board);

        this.game = game;
        this.game.board = this;
        this.pixi = pixi;
        this.app = app;
        this.setBackTexture();
        this.deckFactory = new _deck_factory2.default(this.pixi, this);
        this.cardFactory = new _card_view_factory2.default(this.pixi, this);
    }

    _createClass(Board, [{
        key: 'setBackTexture',
        value: function setBackTexture() {
            var texturePath = './images/cards/back.png';
            this.backTexture = this.pixi.Texture.fromImage(texturePath);
        }
    }, {
        key: 'dispDeckAndDeckStack',
        value: function dispDeckAndDeckStack() {
            var cardZeroDeck = this.createSpriteCardZeroDeck();

            var deckView = this.deckFactory.createTopCardView();
            this.app.stage.addChild(deckView);
        }
    }, {
        key: 'dispAllStacks',
        value: function dispAllStacks() {
            for (var i = 0; i < 7; i++) {
                this.dispStack(i);
            }
        }
    }, {
        key: 'dispStack',
        value: function dispStack(stackIndex) {
            var stack = this.game.stacks[stackIndex + 5];

            this.createSpriteCardsZero(stack);
            this.createSpriteCards(stack);
        }
    }, {
        key: 'createSpriteCardsZeroColor',
        value: function createSpriteCardsZeroColor() {
            var _this = this;

            this.game.stacks.slice(1, 5).forEach(function (stack, index) {
                if (stack.cardZero.hasView()) {
                    return;
                }

                var factory = new _card_zero_color_factory2.default(_this.pixi, _this);
                var view = factory.createView(stack.cardZero, index);
                _this.app.stage.addChild(view);
            });
        }
    }, {
        key: 'createSpriteCardZeroDeck',
        value: function createSpriteCardZeroDeck() {
            if (this.game.deck.cardZero.hasView()) {
                return;
            }
            var deckCardZeroFactory = new _card_zero_deck_factory2.default(this.pixi, this);
            deckCardZeroFactory.createView();
            this.app.stage.addChild(this.game.deck.cardZero.view);
        }
    }, {
        key: 'createSpriteCardsZero',
        value: function createSpriteCardsZero(stack) {
            var zeroFactory = new _card_zero_factory2.default(this.pixi, this);
            zeroFactory.createView(stack.cardZero);
            this.app.stage.addChild(stack.cardZero.view);
        }
    }, {
        key: 'createSpriteCards',
        value: function createSpriteCards(stack) {
            var _this2 = this;

            stack.cards.forEach(function (card) {
                _this2.cardFactory.createView(card);
                _this2.app.stage.addChild(card.view);
            });
        }
    }]);

    return Board;
}();

exports.default = Board;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card_view_factory = __webpack_require__(2);

var _card_view_factory2 = _interopRequireDefault(_card_view_factory);

var _card_view_service = __webpack_require__(3);

var _card_view_service2 = _interopRequireDefault(_card_view_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeckFactory = function () {
    function DeckFactory(pixi, board) {
        _classCallCheck(this, DeckFactory);

        this.pixi = pixi;
        this.board = board;
        this.game = this.board.game;
        this.deck = this.game.deck;
        this.deckStack = this.game.deckStack;
    }

    _createClass(DeckFactory, [{
        key: 'createTopCardView',
        value: function createTopCardView() {
            var card = this.deck.last();
            if (card === null) {
                return null;
            }

            if (card.hasView() === false) {
                this.board.cardFactory.createBasicView(card);
                _card_view_service2.default.assignMethods(card.view);
                card.deck = this.deck;
                card.deckStack = this.deckStack;
            }

            this.board.cardFactory.makeClickableForDeck(card.view);
            this.makeVisible(card.view);
            this.setDeckPosition(card.view);

            return card.view;
        }
    }, {
        key: 'setDeckPosition',
        value: function setDeckPosition(view) {
            view.anchor.set(0);
            view.x = 20;
            view.y = 10;
        }
    }, {
        key: 'makeVisible',
        value: function makeVisible(view) {
            view.visible = true;
        }
    }]);

    return DeckFactory;
}();

exports.default = DeckFactory;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardZeroDeckFactory = function () {
    function CardZeroDeckFactory(pixi, board) {
        _classCallCheck(this, CardZeroDeckFactory);

        this.pixi = pixi;
        this.board = board;
        this.card = this.board.game.deck.cardZero;
    }

    _createClass(CardZeroDeckFactory, [{
        key: 'createView',
        value: function createView() {
            var view = this.createBasicView();
            this.makeClickable();
            return view;
        }
    }, {
        key: 'createBasicView',
        value: function createBasicView() {
            var card = this.card;
            var texture = this.getTexture();
            var view = new this.pixi.Sprite(texture);
            view.card = card;
            card.view = view;

            view.tint = 0x00FFFF; // tinting for fun and visibilty

            view.x = 20;
            view.y = 10;

            return view;
        }
    }, {
        key: 'getTexture',
        value: function getTexture() {
            var texturePath = './images/cards/card-zero.png';
            return this.pixi.Texture.fromImage(texturePath);
        }
    }, {
        key: 'makeClickable',
        value: function makeClickable() {
            var view = this.card.view;
            view.interactive = true; // this will allow it to respond to mouse and touch events
            view.buttonMode = true;
            view.on('click', this.rewindDeck);
        }
    }, {
        key: 'rewindDeck',
        value: function rewindDeck(event) {
            event.stopPropagation();

            var view = event.currentTarget;
            var card = view.card;
            var deck = card.deck;
            var game = deck.game;
            var deckStack = game.deckStack;

            deckStack.moveCardsBackOnDeck();

            deck.cards.forEach(function (card) {
                card.visible = false;
                card.view.visible = false;
                card.view.setTexture(card.view.backTexture);
            });

            var deckView = game.board.deckFactory.createTopCardView();
            game.board.app.stage.addChild(deckView);
        }
    }]);

    return CardZeroDeckFactory;
}();

exports.default = CardZeroDeckFactory;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card_zero_factory = __webpack_require__(4);

var _card_zero_factory2 = _interopRequireDefault(_card_zero_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardZeroColorFactory = function (_CardZeroFactory) {
    _inherits(CardZeroColorFactory, _CardZeroFactory);

    function CardZeroColorFactory() {
        _classCallCheck(this, CardZeroColorFactory);

        return _possibleConstructorReturn(this, (CardZeroColorFactory.__proto__ || Object.getPrototypeOf(CardZeroColorFactory)).apply(this, arguments));
    }

    _createClass(CardZeroColorFactory, [{
        key: 'createView',
        value: function createView(card, index) {
            var view = this.createBasicView(card, index);
            this.addCollisionProperties(view);
            return view;
        }
    }, {
        key: 'createBasicView',
        value: function createBasicView(card, index) {
            var texture = this.getTexture(card);
            var view = new this.pixi.Sprite(texture);
            view.tint = 0x00FFFF; // tinting for fun and visibilty
            view.card = card;
            card.view = view;

            view.x = 290 + index * 90;
            view.y = 10;

            return view;
        }
    }, {
        key: 'getTexture',
        value: function getTexture(card) {
            var texturePath = './images/cards/card-zero-' + card.color + '.png';
            return this.pixi.Texture.fromImage(texturePath);
        }
    }]);

    return CardZeroColorFactory;
}(_card_zero_factory2.default);

exports.default = CardZeroColorFactory;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzgzOTdmODY3NWQ1Njg2NWM2YzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvc3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2FyZF92aWV3X2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2FyZF92aWV3X3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2FyZF96ZXJvX2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2RlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jYXJkX3plcm9fZGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3N0YWNrX3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jYXJkX3plcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jb2xvcl9zdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2NhcmRfemVyb19jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2RlY2tfc3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGVja19mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2NhcmRfemVyb19kZWNrX2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2FyZF96ZXJvX2NvbG9yX2ZhY3RvcnkuanMiXSwibmFtZXMiOlsiQ2FyZCIsInZhbHVlIiwiY29sb3IiLCJ2aXNpYmxlIiwibmV4dCIsInN0YWNrIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwic3RyIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInZpZXciLCJ1bmRlZmluZWQiLCJjYXJkIiwiZm9sbG93c1ZhbHVlIiwiaGFzU2FtZUNvbG9yIiwiaGFzT3Bwb3NpdGVDb2xvciIsInJlYWxDb2xvciIsInRvcENhcmRzQ291bnQiLCJnZXRJbmRleFBvc2l0aW9uIiwiY2FyZHMiLCJpbmRleE9mIiwiZ2V0Q29sb3JGcm9tSW5pdGlhbCIsImxlbmd0aCIsIk51bWJlciIsImluaXRpYWwiLCJTdGFjayIsImdhbWUiLCJjYXJkWmVybyIsInB1c2giLCJsYXN0VHdvIiwibGFzdCIsInF1YW50aXR5Iiwic3BsaWNlIiwibGFzdENhcmQiLCJsYXN0T25lIiwiZm9yRWFjaCIsIm1hcCIsImFycmF5RWFzeURpc3AiLCJlbXB0eSIsImluZGV4IiwicmVzIiwidmlzaWJsZUNhcmRzIiwiZm91bmROb25WaXNpYmxlQ2FyZCIsImMiLCJyZXZlcnNlIiwic3RhY2tzIiwibGlzdCIsImVsZW1lbnQiLCJlYXN5QnVpbGQiLCJlYXN5RGlzcCIsImpvaW4iLCJDYXJkVmlld0ZhY3RvcnkiLCJwaXhpIiwiYm9hcmQiLCJjcmVhdGVCYXNpY1ZpZXciLCJtYWtlVmlld0RyYWdnYWJsZSIsImFzc2lnbk1ldGhvZHMiLCJzZXRDYXJkVGV4dHVyZSIsInNldEJvYXJkUG9zaXRpb24iLCJmcm9udFRleHR1cmUiLCJnZXRUZXh0dXJlIiwiYmFja1RleHR1cmUiLCJTcHJpdGUiLCJ0ZXh0dXJlUGF0aCIsIlRleHR1cmUiLCJmcm9tSW1hZ2UiLCJpbnRlcmFjdGl2ZSIsImJ1dHRvbk1vZGUiLCJhbmNob3IiLCJzZXQiLCJvbiIsIm9uQ2xpY2siLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsIm9uRHJhZ01vdmUiLCJhZGRDb2xsaXNpb25Qcm9wZXJ0aWVzIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwib25EZWNrQ2xpY2siLCJzcHJpdGUiLCJneCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiZ2V0R2xvYmFsUG9zaXRpb24iLCJ4IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImd5IiwieSIsImNlbnRlclgiLCJ3aWR0aCIsImNlbnRlclkiLCJoZWlnaHQiLCJoYWxmV2lkdGgiLCJoYWxmSGVpZ2h0IiwieEFuY2hvck9mZnNldCIsInlBbmNob3JPZmZzZXQiLCJjaXJjdWxhciIsInJhZGl1cyIsIl9idW1wUHJvcGVydGllc0FkZGVkIiwiQ2FyZFZpZXdTZXJ2aWNlIiwiaGl0VGVzdFJlY3RhbmdsZSIsImJpbmQiLCJzZXRQbGF5aW5nU3RhY2tQb3NpdGlvbiIsInNldENvbG9yU3RhY2tQb3NpdGlvbiIsInNldERlY2tTdGFja1Bvc2l0aW9uIiwidmFsaWRhdGVEcmFnIiwiY2FsY3VsYXRlRGVsdGEiLCJtYWtlVmlzaWJsZSIsIm1ha2VOb3RWaXNpYmxlIiwibW92ZVRvcFppbmRleCIsInVwZGF0ZUJvYXJkUG9zaXRpb25BbmROZXh0IiwidXBkYXRlRHJhZ1NldHRpbmdzQW5kTmV4dCIsInNldEJvYXJkUG9zaXRpb25BbmROZXh0Iiwic3RhY2tJbmRleCIsImNhcmRJbmRleCIsImRlbHRhWCIsImRlbHRhWSIsIm5ld1Bvc2l0aW9uIiwiY29udGFpbmVyIiwicGFyZW50Iiwic2l6ZSIsImNoaWxkcmVuIiwic2V0Q2hpbGRJbmRleCIsImV2ZW50IiwiY2FyZFZpZXciLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGVjayIsImRlY2tTdGFjayIsInBvcE9uZSIsImNhcmRGYWN0b3J5IiwiZGlzcERlY2tBbmREZWNrU3RhY2siLCJzZXRUZXh0dXJlIiwicG9zc2libGVDb2xsaXNpb25zIiwiY29sbGlzaW9uQ2FyZHNGb3IiLCJkYXRhIiwiZHJhZ2dpbmciLCJhbHBoYSIsImNhcmRDb2xsaXNpb24iLCJjYXJkMiIsIm9uVG9wT2YiLCJnZXRMb2NhbFBvc2l0aW9uIiwic3RhY2syIiwic291cmNlSW5kZXgiLCJkZXN0aW5hdGlvbkluZGV4IiwibW92ZUNhcmRzIiwiY29tcGxldGUiLCJyMSIsInIyIiwiZ2xvYmFsIiwiaGl0IiwiY29tYmluZWRIYWxmV2lkdGhzIiwiY29tYmluZWRIYWxmSGVpZ2h0cyIsInZ4IiwidnkiLCJNYXRoIiwiYWJzIiwiQ2FyZFplcm9GYWN0b3J5IiwidGV4dHVyZSIsInRpbnQiLCJkaXN0cmlidXRlIiwiUElYSSIsImFwcCIsIkFwcGxpY2F0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlU3ByaXRlQ2FyZHNaZXJvQ29sb3IiLCJkaXNwQWxsU3RhY2tzIiwiR2FtZSIsInByZXBhcmVTdGFja3MiLCJjb2xvclN0YWNrcyIsInBsYXlpbmdTdGFja3MiLCJwb3AiLCJ0b3BDYXJkIiwiaXNEZWNrU3RhY2siLCJmcm9tRGVja1N0YWNrSXNNb3ZlUG9zc2libGUiLCJpc1BsYXlpbmdTdGFjayIsImZyb21QbGF5aW5nU3RhY2tJc01vdmVQb3NzaWJsZSIsInNvdXJjZVN0YWNrIiwiZGVzdGluYXRpb25TdGFjayIsImNhcmRzVG9Nb3ZlIiwidG9wU3RhY2tDYXJkIiwiaXNDb2xvclN0YWNrIiwiZm9sbG93cyIsImZvbGxvd3NXaXRoT3Bwb3NpdGVDb2xvciIsImlzQWNlIiwiaXNNb3ZlUG9zc2libGUiLCJ0b3BDYXJkcyIsInBsYXlpbmdUb3BDYXJkc0ZvciIsImNvbmNhdCIsImNvbG9yVG9wQ2FyZHMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJjb21tb25TdGFja3NEaXNwIiwicGxheWluZ1N0YWNrRGlzcCIsImkiLCJmdWxsIiwibGluZSIsIkRlY2siLCJnZW5lcmF0ZUNhcmRzIiwic2h1ZmZsZSIsImNvbG9ycyIsInNvcnQiLCJhIiwiYiIsInJhbmRvbSIsImRpc3AiLCJDYXJkRGVja1plcm8iLCJTdGFja1NlcnZpY2UiLCJzdGFja1R5cGUiLCJDYXJkWmVybyIsIkNvbG9yU3RhY2siLCJjb21wYXJhdG9yIiwiaW5pdHZhbHVlIiwiYXJyIiwiQ2FyZFplcm9Db2xvciIsImNvbG9yU3RhY2siLCJEZWNrU3RhY2siLCJCb2FyZCIsInNldEJhY2tUZXh0dXJlIiwiZGVja0ZhY3RvcnkiLCJjYXJkWmVyb0RlY2siLCJjcmVhdGVTcHJpdGVDYXJkWmVyb0RlY2siLCJkZWNrVmlldyIsImNyZWF0ZVRvcENhcmRWaWV3Iiwic3RhZ2UiLCJhZGRDaGlsZCIsImRpc3BTdGFjayIsImNyZWF0ZVNwcml0ZUNhcmRzWmVybyIsImNyZWF0ZVNwcml0ZUNhcmRzIiwiaGFzVmlldyIsImZhY3RvcnkiLCJjcmVhdGVWaWV3IiwiZGVja0NhcmRaZXJvRmFjdG9yeSIsInplcm9GYWN0b3J5IiwiRGVja0ZhY3RvcnkiLCJtYWtlQ2xpY2thYmxlRm9yRGVjayIsInNldERlY2tQb3NpdGlvbiIsIkNhcmRaZXJvRGVja0ZhY3RvcnkiLCJtYWtlQ2xpY2thYmxlIiwicmV3aW5kRGVjayIsIm1vdmVDYXJkc0JhY2tPbkRlY2siLCJDYXJkWmVyb0NvbG9yRmFjdG9yeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM1RHFCQSxJO0FBQ2pCLGtCQUFZQyxLQUFaLEVBQW1CQyxLQUFuQixFQUEwQztBQUFBLFlBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUFBOztBQUN0QyxhQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxhQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0g7Ozs7K0JBRU07QUFDSEMsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxRQUFMLEVBQVo7QUFDSDs7O21DQUVVO0FBQ1AsZ0JBQUlDLE1BQU0sRUFBVjs7QUFFQSxnQkFBSSxLQUFLTixPQUFMLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3ZCTSxzQkFBTSxHQUFOO0FBQ0g7QUFDREEsbUJBQU8sS0FBS1IsS0FBWjtBQUNBUSxtQkFBTyxLQUFLUCxLQUFMLENBQVcsQ0FBWCxFQUFjUSxXQUFkLEVBQVA7QUFDQSxtQkFBTyxNQUFNRCxHQUFOLEdBQVksR0FBbkI7QUFDSDs7O21DQUdVO0FBQ1AsZ0JBQUksS0FBS04sT0FBVCxFQUFrQjtBQUNkLHVCQUFRLE9BQU8sS0FBS0YsS0FBWixHQUFvQixHQUFwQixHQUEwQixLQUFLQyxLQUFMLENBQVdTLEtBQVgsQ0FBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsQ0FBMUIsR0FBa0QsR0FBMUQ7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFBUSxRQUFRLEtBQUtWLEtBQWIsR0FBcUIsR0FBckIsR0FBMkIsS0FBS0MsS0FBTCxDQUFXUyxLQUFYLENBQWlCLENBQWpCLEVBQW1CLENBQW5CLENBQTNCLEdBQW1ELEdBQTNEO0FBQ0g7QUFDSjs7O2tDQUVTO0FBQ04sbUJBQVEsS0FBS0MsSUFBTCxLQUFjQyxTQUF0QjtBQUNIOzs7OEJBRUtYLEssRUFBTztBQUNULG1CQUFRLEtBQUtELEtBQUwsS0FBZSxDQUFoQixJQUF1QixLQUFLQyxLQUFMLEtBQWVBLEtBQTdDO0FBQ0g7OztnQ0FFT1ksSSxFQUFNO0FBQ1YsbUJBQU8sS0FBS0MsWUFBTCxDQUFrQkQsSUFBbEIsS0FBMkIsS0FBS0UsWUFBTCxDQUFrQkYsSUFBbEIsQ0FBbEM7QUFDSDs7O2lEQUV3QkEsSSxFQUFNO0FBQzNCLG1CQUFPLEtBQUtDLFlBQUwsQ0FBa0JELElBQWxCLEtBQTJCLEtBQUtHLGdCQUFMLENBQXNCSCxJQUF0QixDQUFsQztBQUNIOzs7cUNBRVlBLEksRUFBTTtBQUNmLG1CQUFPLEtBQUtiLEtBQUwsS0FBZ0JhLEtBQUtiLEtBQUwsR0FBYSxDQUFwQztBQUNIOzs7cUNBRVlhLEksRUFBTTtBQUNmLG1CQUFPLEtBQUtaLEtBQUwsS0FBZVksS0FBS1osS0FBM0I7QUFDSDs7O3lDQUVnQlksSSxFQUFNO0FBQ25CLG1CQUFPLEtBQUtJLFNBQUwsT0FBcUJKLEtBQUtJLFNBQUwsRUFBNUI7QUFDSDs7O29DQUVXO0FBQ1IsZ0JBQUssS0FBS2hCLEtBQUwsS0FBZSxPQUFoQixJQUE2QixLQUFLQSxLQUFMLEtBQWUsU0FBaEQsRUFBNEQ7QUFDeEQsdUJBQU8sS0FBUDtBQUNILGFBRkQsTUFFTztBQUNILHVCQUFPLE9BQVA7QUFDSDtBQUNKOzs7d0NBRWU7QUFDWixnQkFBSSxLQUFLRSxJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDcEIsdUJBQU8sQ0FBUDtBQUNILGFBRkQsTUFFTztBQUNILHVCQUFPLElBQUksS0FBS0EsSUFBTCxDQUFVZSxhQUFWLEVBQVg7QUFDSDtBQUNKOzs7MkNBRWtCO0FBQ2YsbUJBQU8sQ0FBQyxLQUFLZCxLQUFMLENBQVdlLGdCQUFYLEVBQUQsRUFBZ0MsS0FBS2YsS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQkMsT0FBakIsQ0FBeUIsSUFBekIsQ0FBaEMsQ0FBUDtBQUNIOzs7a0NBRWdCYixHLEVBQUs7QUFDbEIsZ0JBQUlOLFVBQVUsSUFBZDtBQUNBLGdCQUFJRCxjQUFKO0FBQUEsZ0JBQVdELGNBQVg7O0FBRUE7QUFDQSxnQkFBSVEsSUFBSSxDQUFKLE1BQVcsR0FBZixFQUFvQjtBQUNoQk4sMEJBQVUsS0FBVjtBQUNBTSxzQkFBTUEsSUFBSUUsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQU47QUFDSDs7QUFFRDtBQUNBVCxvQkFBUSxLQUFLcUIsbUJBQUwsQ0FBeUJkLElBQUlBLElBQUllLE1BQUosR0FBYSxDQUFqQixDQUF6QixDQUFSO0FBQ0FmLGtCQUFNQSxJQUFJRSxLQUFKLENBQVUsQ0FBVixFQUFhRixJQUFJZSxNQUFKLEdBQWEsQ0FBMUIsQ0FBTjs7QUFFQTtBQUNBdkIsb0JBQVF3QixPQUFPaEIsR0FBUCxDQUFSOztBQUVBLG1CQUFPLElBQUlULElBQUosQ0FBU0MsS0FBVCxFQUFnQkMsS0FBaEIsRUFBdUJDLE9BQXZCLENBQVA7QUFDSDs7OzRDQUUwQnVCLE8sRUFBUztBQUNoQyxvQkFBUUEsT0FBUjtBQUNBLHFCQUFLLEdBQUw7QUFDSSwyQkFBTyxPQUFQO0FBQ0oscUJBQUssR0FBTDtBQUNJLDJCQUFPLFNBQVA7QUFDSixxQkFBSyxHQUFMO0FBQ0ksMkJBQU8sT0FBUDtBQUNKLHFCQUFLLEdBQUw7QUFDSSwyQkFBTyxNQUFQO0FBQ0o7QUFDSSwwQkFBTSxxQkFBTjtBQVZKO0FBWUg7Ozs7OztrQkFsSGdCMUIsSTs7Ozs7Ozs7Ozs7Ozs7O0FDRHJCOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7SUFDcUIyQixLO0FBQ2pCLG1CQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBS1AsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLTyxJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLHdCQUFhLElBQWIsQ0FBaEI7QUFDSDs7Ozs2QkFFSWYsSSxFQUFNO0FBQ1AsaUJBQUtPLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQmhCLElBQWhCO0FBQ0FBLGlCQUFLVCxLQUFMLEdBQWEsSUFBYjs7QUFFQSxnQkFBSTBCLFVBQVUsS0FBS0MsSUFBTCxDQUFVLENBQVYsQ0FBZDtBQUNBLGdCQUFJRCxZQUFZLElBQWhCLEVBQXNCO0FBQ2xCQSx3QkFBUSxDQUFSLEVBQVczQixJQUFYLEdBQWtCMkIsUUFBUSxDQUFSLENBQWxCO0FBQ0g7QUFDSjs7OzRCQUVHMUIsSyxFQUFxQjtBQUFBLGdCQUFkNEIsUUFBYyx1RUFBSCxDQUFHOztBQUNyQixnQkFBSVosUUFBUSxLQUFLQSxLQUFMLENBQVdhLE1BQVgsQ0FBa0IsS0FBS2IsS0FBTCxDQUFXRyxNQUFYLEdBQW9CUyxRQUF0QyxFQUFnREEsUUFBaEQsQ0FBWjtBQUNBLGdCQUFJRSxXQUFXLEtBQUtDLE9BQUwsRUFBZjtBQUNBLGdCQUFJRCxRQUFKLEVBQWM7QUFDVkEseUJBQVMvQixJQUFULEdBQWdCLElBQWhCO0FBQ0g7O0FBRURpQixrQkFBTWdCLE9BQU4sQ0FBYyxVQUFDdkIsSUFBRCxFQUFVO0FBQ3BCVCxzQkFBTXlCLElBQU4sQ0FBV2hCLElBQVg7QUFDSCxhQUZEOztBQUlBLG1CQUFPLElBQVA7QUFDSDs7OytCQUVNO0FBQ0hSLG9CQUFRQyxHQUFSLENBQVksS0FBS0MsUUFBTCxFQUFaO0FBQ0g7OzttQ0FFVTtBQUNQLG1CQUFPLEtBQUthLEtBQUwsQ0FBV2lCLEdBQVgsQ0FBZSxVQUFDeEIsSUFBRCxFQUFVO0FBQUUsdUJBQU9BLEtBQUtOLFFBQUwsRUFBUDtBQUF3QixhQUFuRCxDQUFQO0FBQ0g7OzttQ0FFVTtBQUNQLGdCQUFJYSxRQUFRLEtBQUtBLEtBQWpCO0FBQ0EsbUJBQU9NLE1BQU1ZLGFBQU4sQ0FBb0JsQixLQUFwQixDQUFQO0FBQ0g7OzsrQkFha0I7QUFBQSxnQkFBZFksUUFBYyx1RUFBSCxDQUFHOztBQUNmLGdCQUFJLEtBQUtPLEtBQUwsRUFBSixFQUFrQjtBQUFFLHVCQUFPLElBQVA7QUFBYTtBQUNqQyxnQkFBSSxLQUFLbkIsS0FBTCxDQUFXRyxNQUFYLEdBQW9CUyxRQUF4QixFQUFrQztBQUFFLHVCQUFPLElBQVA7QUFBYTs7QUFFakQsZ0JBQUlaLFFBQVEsRUFBWjtBQUNBLGlCQUFLLElBQUlvQixRQUFRUixRQUFqQixFQUEyQlEsUUFBUSxDQUFuQyxFQUFzQ0EsT0FBdEMsRUFBK0M7QUFDM0NwQixzQkFBTVMsSUFBTixDQUFXLEtBQUtULEtBQUwsQ0FBVyxLQUFLQSxLQUFMLENBQVdHLE1BQVgsR0FBb0JpQixLQUEvQixDQUFYO0FBQ0g7QUFDRCxtQkFBT3BCLEtBQVA7QUFDSDs7O2tDQUVTO0FBQ04sZ0JBQUlxQixNQUFNLEtBQUtWLElBQUwsRUFBVjtBQUNBLGdCQUFJVSxRQUFRLElBQVosRUFBa0I7QUFDZCx1QkFBTyxJQUFQO0FBQ0g7QUFDRCxtQkFBTyxLQUFLVixJQUFMLEdBQVksQ0FBWixDQUFQO0FBQ0g7OztnQ0FFTztBQUNKLGdCQUFJLEtBQUtYLEtBQUwsQ0FBV0csTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUFFLHVCQUFPLElBQVA7QUFBYSxhQUE1QyxNQUFrRDtBQUFFLHVCQUFPLEtBQVA7QUFBYztBQUNyRTs7OzRDQUVtQjtBQUNoQixtQkFBTyxLQUFLbUIsWUFBTCxHQUFvQm5CLE1BQTNCO0FBQ0g7Ozt1Q0FFYztBQUNYLGdCQUFJLEtBQUtnQixLQUFMLEVBQUosRUFBa0I7QUFDZCx1QkFBTyxFQUFQO0FBQ0g7O0FBRUQsZ0JBQUlDLFFBQVEsS0FBS3BCLEtBQUwsQ0FBV0csTUFBWCxHQUFvQixDQUFoQztBQUNBLGdCQUFJSCxRQUFRLEVBQVo7QUFDQSxnQkFBSXVCLHNCQUFzQixLQUExQjtBQUNBLG1CQUFPQSx3QkFBd0IsS0FBL0IsRUFBc0M7QUFDbEMsb0JBQUlILFFBQVEsQ0FBWixFQUFlO0FBQ1g7QUFDSDs7QUFFRCxvQkFBSUksSUFBSSxLQUFLeEIsS0FBTCxDQUFXb0IsS0FBWCxDQUFSO0FBQ0Esb0JBQUlJLEVBQUUxQyxPQUFOLEVBQWU7QUFDWGtCLDBCQUFNUyxJQUFOLENBQVdlLENBQVg7QUFDQUosNEJBQVFBLFFBQVEsQ0FBaEI7QUFDSCxpQkFIRCxNQUdPO0FBQ0hwQiwwQkFBTXlCLE9BQU47QUFDQUYsMENBQXNCLElBQXRCO0FBQ0g7QUFDSjtBQUNELG1CQUFPdkIsS0FBUDtBQUNIOzs7MkNBRWtCO0FBQ2YsbUJBQU8sS0FBS08sSUFBTCxDQUFVbUIsTUFBVixDQUFpQnpCLE9BQWpCLENBQXlCLElBQXpCLENBQVA7QUFDSDs7O2tDQUVTMEIsSSxFQUFNO0FBQUE7O0FBQ1osaUJBQUszQixLQUFMLEdBQWEsRUFBYjtBQUNBMkIsaUJBQUtYLE9BQUwsQ0FBYSxVQUFDWSxPQUFELEVBQWE7QUFDdEIsc0JBQUtuQixJQUFMLENBQVUsZUFBS29CLFNBQUwsQ0FBZUQsT0FBZixDQUFWO0FBQ0gsYUFGRDtBQUdIOzs7c0NBeEVvQjVCLEssRUFBTztBQUN4QixnQkFBSTJCLE9BQU8zQixNQUFNaUIsR0FBTixDQUFVLFVBQUN4QixJQUFELEVBQVU7QUFDM0IsdUJBQU9BLEtBQUtxQyxRQUFMLEVBQVA7QUFDSCxhQUZVLENBQVg7QUFHQSxnQkFBSUgsSUFBSixFQUFVO0FBQ04sdUJBQU9BLEtBQUtJLElBQUwsQ0FBVSxJQUFWLENBQVA7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFBTyxFQUFQO0FBQ0g7QUFDSjs7Ozs7O2tCQXJEZ0J6QixLOzs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7Ozs7O0lBRXFCMEIsZTtBQUNqQiw2QkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDckIsYUFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7Ozs7bUNBRVV6QyxJLEVBQU07QUFDYixnQkFBSUYsT0FBTyxLQUFLNEMsZUFBTCxDQUFxQjFDLElBQXJCLENBQVg7QUFDQSxpQkFBSzJDLGlCQUFMLENBQXVCN0MsSUFBdkI7O0FBRUEsd0NBQWdCOEMsYUFBaEIsQ0FBOEI5QyxJQUE5Qjs7QUFFQUEsaUJBQUsrQyxjQUFMO0FBQ0EvQyxpQkFBS2dELGdCQUFMO0FBQ0g7Ozt3Q0FFZTlDLEksRUFBTTtBQUNsQixnQkFBSUYsYUFBSjtBQUNBLGdCQUFJaUQsZUFBZSxLQUFLQyxVQUFMLENBQWdCaEQsSUFBaEIsQ0FBbkI7QUFDQSxnQkFBSWlELGNBQWMsS0FBS1IsS0FBTCxDQUFXUSxXQUE3Qjs7QUFFQSxnQkFBSWpELEtBQUtYLE9BQUwsS0FBaUIsSUFBckIsRUFBMkI7QUFDdkJTLHVCQUFPLElBQUksS0FBSzBDLElBQUwsQ0FBVVUsTUFBZCxDQUFxQkgsWUFBckIsQ0FBUDtBQUNILGFBRkQsTUFFTztBQUNIakQsdUJBQU8sSUFBSSxLQUFLMEMsSUFBTCxDQUFVVSxNQUFkLENBQXFCRCxXQUFyQixDQUFQO0FBQ0g7O0FBRURuRCxpQkFBS2lELFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0FqRCxpQkFBS21ELFdBQUwsR0FBbUJBLFdBQW5COztBQUVBbkQsaUJBQUtFLElBQUwsR0FBWUEsSUFBWjtBQUNBQSxpQkFBS0YsSUFBTCxHQUFZQSxJQUFaOztBQUVBLG1CQUFPQSxJQUFQO0FBQ0g7OzttQ0FFVUUsSSxFQUFNO0FBQ2IsZ0JBQUltRCxjQUFjLG9CQUFvQm5ELEtBQUtaLEtBQXpCLEdBQWlDLEdBQWpDLEdBQXVDWSxLQUFLYixLQUE1QyxHQUFvRCxNQUF0RTtBQUNBLG1CQUFPLEtBQUtxRCxJQUFMLENBQVVZLE9BQVYsQ0FBa0JDLFNBQWxCLENBQTRCRixXQUE1QixDQUFQO0FBQ0g7OzswQ0FFaUJyRCxJLEVBQU07QUFDcEJBLGlCQUFLd0QsV0FBTCxHQUFtQixJQUFuQixDQURvQixDQUNJO0FBQ3hCeEQsaUJBQUt5RCxVQUFMLEdBQWtCLElBQWxCLENBRm9CLENBRUc7QUFDdkJ6RCxpQkFBSzBELE1BQUwsQ0FBWUMsR0FBWixDQUFnQixHQUFoQixFQUFxQixHQUFyQjs7QUFFQTNELGlCQUFLNEQsRUFBTCxDQUFRLE9BQVIsRUFBaUIsNEJBQWdCQyxPQUFqQyxFQUNDRCxFQURELENBQ0ksYUFESixFQUNtQiw0QkFBZ0JFLFdBRG5DLEVBRUNGLEVBRkQsQ0FFSSxXQUZKLEVBRWlCLDRCQUFnQkcsU0FGakMsRUFHQ0gsRUFIRCxDQUdJLGFBSEosRUFHbUIsNEJBQWdCSSxVQUhuQyxFQUlDSixFQUpELENBSUksa0JBSkosRUFJd0IsNEJBQWdCRyxTQUp4Qzs7QUFNQSxpQkFBS0Usc0JBQUwsQ0FBNEJqRSxJQUE1QjtBQUNIOzs7NkNBRW9CQSxJLEVBQU07QUFDdkJBLGlCQUFLd0QsV0FBTCxHQUFtQixJQUFuQixDQUR1QixDQUNDO0FBQ3hCeEQsaUJBQUt5RCxVQUFMLEdBQWtCLElBQWxCLENBRnVCLENBRUE7O0FBRXZCekQsaUJBQUtrRSxrQkFBTDtBQUNBbEUsaUJBQUs0RCxFQUFMLENBQVEsT0FBUixFQUFpQiw0QkFBZ0JPLFdBQWpDO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OytDQUN1QkMsTSxFQUFRO0FBQzNCO0FBQ0E7O0FBRUEsZ0JBQUlBLE9BQU9DLEVBQVAsS0FBY3BFLFNBQWxCLEVBQTZCO0FBQ3pCcUUsdUJBQU9DLGNBQVAsQ0FBc0JILE1BQXRCLEVBQThCLElBQTlCLEVBQW9DO0FBQ2hDSSx1QkFEZ0MsaUJBQzFCO0FBQUUsK0JBQU9KLE9BQU9LLGlCQUFQLEdBQTJCQyxDQUFsQztBQUFxQyxxQkFEYjs7QUFFaENDLGdDQUFZLElBRm9CO0FBR2hDQyxrQ0FBYztBQUhrQixpQkFBcEM7QUFLSDs7QUFFRCxnQkFBSVIsT0FBT1MsRUFBUCxLQUFjNUUsU0FBbEIsRUFBNkI7QUFDekJxRSx1QkFBT0MsY0FBUCxDQUFzQkgsTUFBdEIsRUFBOEIsSUFBOUIsRUFBb0M7QUFDaENJLHVCQURnQyxpQkFDM0I7QUFBQywrQkFBT0osT0FBT0ssaUJBQVAsR0FBMkJLLENBQWxDO0FBQW9DLHFCQURWOztBQUVoQ0gsZ0NBQVksSUFGb0IsRUFFZEMsY0FBYztBQUZBLGlCQUFwQztBQUlIOztBQUVELGdCQUFJUixPQUFPVyxPQUFQLEtBQW1COUUsU0FBdkIsRUFBa0M7QUFDOUJxRSx1QkFBT0MsY0FBUCxDQUFzQkgsTUFBdEIsRUFBOEIsU0FBOUIsRUFBeUM7QUFDckNJLHVCQURxQyxpQkFDaEM7QUFBQywrQkFBT0osT0FBT00sQ0FBUCxHQUFXTixPQUFPWSxLQUFQLEdBQWUsQ0FBakM7QUFBbUMscUJBREo7O0FBRXJDTCxnQ0FBWSxJQUZ5QixFQUVuQkMsY0FBYztBQUZLLGlCQUF6QztBQUlIOztBQUVELGdCQUFJUixPQUFPYSxPQUFQLEtBQW1CaEYsU0FBdkIsRUFBa0M7QUFDOUJxRSx1QkFBT0MsY0FBUCxDQUFzQkgsTUFBdEIsRUFBOEIsU0FBOUIsRUFBeUM7QUFDckNJLHVCQURxQyxpQkFDaEM7QUFBQywrQkFBT0osT0FBT1UsQ0FBUCxHQUFXVixPQUFPYyxNQUFQLEdBQWdCLENBQWxDO0FBQW9DLHFCQURMOztBQUVyQ1AsZ0NBQVksSUFGeUIsRUFFbkJDLGNBQWM7QUFGSyxpQkFBekM7QUFJSDs7QUFFRCxnQkFBSVIsT0FBT2UsU0FBUCxLQUFxQmxGLFNBQXpCLEVBQW9DO0FBQ2hDcUUsdUJBQU9DLGNBQVAsQ0FBc0JILE1BQXRCLEVBQThCLFdBQTlCLEVBQTJDO0FBQ3ZDSSx1QkFEdUMsaUJBQ2xDO0FBQUMsK0JBQU9KLE9BQU9ZLEtBQVAsR0FBZSxDQUF0QjtBQUF3QixxQkFEUzs7QUFFdkNMLGdDQUFZLElBRjJCLEVBRXJCQyxjQUFjO0FBRk8saUJBQTNDO0FBSUg7O0FBRUQsZ0JBQUlSLE9BQU9nQixVQUFQLEtBQXNCbkYsU0FBMUIsRUFBcUM7QUFDakNxRSx1QkFBT0MsY0FBUCxDQUFzQkgsTUFBdEIsRUFBOEIsWUFBOUIsRUFBNEM7QUFDeENJLHVCQUR3QyxpQkFDbkM7QUFBQywrQkFBT0osT0FBT2MsTUFBUCxHQUFnQixDQUF2QjtBQUF5QixxQkFEUzs7QUFFeENQLGdDQUFZLElBRjRCLEVBRXRCQyxjQUFjO0FBRlEsaUJBQTVDO0FBSUg7O0FBRUQsZ0JBQUlSLE9BQU9pQixhQUFQLEtBQXlCcEYsU0FBN0IsRUFBd0M7QUFDcENxRSx1QkFBT0MsY0FBUCxDQUFzQkgsTUFBdEIsRUFBOEIsZUFBOUIsRUFBK0M7QUFDM0NJLHVCQUQyQyxpQkFDckM7QUFDRiw0QkFBSUosT0FBT1YsTUFBUCxLQUFrQnpELFNBQXRCLEVBQWlDO0FBQzdCLG1DQUFPbUUsT0FBT1ksS0FBUCxHQUFlWixPQUFPVixNQUFQLENBQWNnQixDQUFwQztBQUNILHlCQUZELE1BRU87QUFDSCxtQ0FBTyxDQUFQO0FBQ0g7QUFDSixxQkFQMEM7O0FBUTNDQyxnQ0FBWSxJQVIrQixFQVF6QkMsY0FBYztBQVJXLGlCQUEvQztBQVVIOztBQUVELGdCQUFJUixPQUFPa0IsYUFBUCxLQUF5QnJGLFNBQTdCLEVBQXdDO0FBQ3BDcUUsdUJBQU9DLGNBQVAsQ0FBc0JILE1BQXRCLEVBQThCLGVBQTlCLEVBQStDO0FBQzNDSSx1QkFEMkMsaUJBQ3JDO0FBQ0YsNEJBQUlKLE9BQU9WLE1BQVAsS0FBa0J6RCxTQUF0QixFQUFpQztBQUM3QixtQ0FBT21FLE9BQU9jLE1BQVAsR0FBZ0JkLE9BQU9WLE1BQVAsQ0FBY29CLENBQXJDO0FBQ0gseUJBRkQsTUFFTztBQUNILG1DQUFPLENBQVA7QUFDSDtBQUNKLHFCQVAwQzs7QUFRM0NILGdDQUFZLElBUitCLEVBUXpCQyxjQUFjO0FBUlcsaUJBQS9DO0FBVUg7O0FBRUQsZ0JBQUlSLE9BQU9tQixRQUFQLElBQW1CbkIsT0FBT29CLE1BQVAsS0FBa0J2RixTQUF6QyxFQUFvRDtBQUNoRHFFLHVCQUFPQyxjQUFQLENBQXNCSCxNQUF0QixFQUE4QixRQUE5QixFQUF3QztBQUNwQ0ksdUJBRG9DLGlCQUM5QjtBQUFFLCtCQUFPSixPQUFPWSxLQUFQLEdBQWUsQ0FBdEI7QUFBd0IscUJBREk7O0FBRXBDTCxnQ0FBWSxJQUZ3QixFQUVsQkMsY0FBYztBQUZJLGlCQUF4QztBQUlIOztBQUVEO0FBQ0E7QUFDQVIsbUJBQU9xQixvQkFBUCxHQUE4QixJQUE5QjtBQUNIOzs7Ozs7a0JBeEpnQmhELGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNEQWlELGU7Ozs7Ozs7c0NBQ0kxRixJLEVBQU07QUFDdkJBLGlCQUFLMkYsZ0JBQUwsR0FBd0IsS0FBS0EsZ0JBQTdCOztBQUVBM0YsaUJBQUtnRCxnQkFBTCxHQUF3QixLQUFLQSxnQkFBTCxDQUFzQjRDLElBQXRCLENBQTJCNUYsSUFBM0IsQ0FBeEI7QUFDQUEsaUJBQUs2Rix1QkFBTCxHQUErQixLQUFLQSx1QkFBTCxDQUE2QkQsSUFBN0IsQ0FBa0M1RixJQUFsQyxDQUEvQjtBQUNBQSxpQkFBSzhGLHFCQUFMLEdBQTZCLEtBQUtBLHFCQUFMLENBQTJCRixJQUEzQixDQUFnQzVGLElBQWhDLENBQTdCO0FBQ0FBLGlCQUFLK0Ysb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJILElBQTFCLENBQStCNUYsSUFBL0IsQ0FBNUI7O0FBRUFBLGlCQUFLZ0csWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCSixJQUFsQixDQUF1QjVGLElBQXZCLENBQXBCO0FBQ0FBLGlCQUFLaUcsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CTCxJQUFwQixDQUF5QjVGLElBQXpCLENBQXRCO0FBQ0FBLGlCQUFLa0csV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCTixJQUFqQixDQUFzQjVGLElBQXRCLENBQW5CO0FBQ0FBLGlCQUFLbUcsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CUCxJQUFwQixDQUF5QjVGLElBQXpCLENBQXRCO0FBQ0FBLGlCQUFLK0MsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CNkMsSUFBcEIsQ0FBeUI1RixJQUF6QixDQUF0QjtBQUNBQSxpQkFBS29HLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQlIsSUFBbkIsQ0FBd0I1RixJQUF4QixDQUFyQjs7QUFFQUEsaUJBQUtxRywwQkFBTCxHQUFrQyxLQUFLQSwwQkFBTCxDQUFnQ1QsSUFBaEMsQ0FBcUM1RixJQUFyQyxDQUFsQztBQUNBQSxpQkFBS3NHLHlCQUFMLEdBQWlDLEtBQUtBLHlCQUFMLENBQStCVixJQUEvQixDQUFvQzVGLElBQXBDLENBQWpDO0FBQ0FBLGlCQUFLdUcsdUJBQUwsR0FBK0IsS0FBS0EsdUJBQUwsQ0FBNkJYLElBQTdCLENBQWtDNUYsSUFBbEMsQ0FBL0I7QUFDSDs7OzJDQUV5QjtBQUFBLHdDQUNVLEtBQUtFLElBQUwsQ0FBVU0sZ0JBQVYsRUFEVjtBQUFBO0FBQUEsZ0JBQ2ZnRyxVQURlO0FBQUEsZ0JBQ0hDLFNBREc7O0FBRXRCLGdCQUFJRCxjQUFjLENBQWxCLEVBQXFCO0FBQ2pCLHFCQUFLWCx1QkFBTCxDQUE2QlcsVUFBN0IsRUFBeUNDLFNBQXpDO0FBQ0gsYUFGRCxNQUVPLElBQUlELGNBQWMsQ0FBbEIsRUFBcUI7QUFDeEIscUJBQUtWLHFCQUFMLENBQTJCVSxVQUEzQixFQUF1Q0MsU0FBdkM7QUFDSCxhQUZNLE1BRUE7QUFDSCxxQkFBS1Ysb0JBQUw7QUFDSDtBQUNKOzs7Z0RBRThCUyxVLEVBQVlDLFMsRUFBVztBQUNsRCxpQkFBSy9CLENBQUwsR0FBUyxLQUFLLENBQUM4QixhQUFhLENBQWQsSUFBbUIsRUFBakM7QUFDQSxpQkFBSzFCLENBQUwsR0FBUyxNQUFNMkIsWUFBWSxFQUEzQjtBQUNIOzs7OENBRTRCRCxVLEVBQVlDLFMsRUFBVztBQUNoRCxpQkFBSy9DLE1BQUwsQ0FBWUMsR0FBWixDQUFnQixDQUFoQjtBQUNBLGlCQUFLTyxrQkFBTDs7QUFFQSxpQkFBS1EsQ0FBTCxHQUFTLE1BQU0sQ0FBQzhCLGFBQWEsQ0FBZCxJQUFtQixFQUFsQztBQUNBLGlCQUFLMUIsQ0FBTCxHQUFTLEVBQVQ7QUFDSDs7OytDQUU2QjtBQUMxQixpQkFBS0osQ0FBTCxHQUFTLEdBQVQ7QUFDQSxpQkFBS0ksQ0FBTCxHQUFTLEVBQVQ7QUFDSDs7O2tEQUVnQztBQUM3QixpQkFBSzlCLGdCQUFMOztBQUVBLGdCQUFJLEtBQUs5QyxJQUFMLENBQVVWLElBQWQsRUFBb0I7QUFDaEIscUJBQUtVLElBQUwsQ0FBVVYsSUFBVixDQUFlUSxJQUFmLENBQW9CdUcsdUJBQXBCO0FBQ0g7QUFDSjs7O21EQUVpQ0csTSxFQUFRQyxNLEVBQVE7QUFDOUMsaUJBQUtqQyxDQUFMLEdBQVMsS0FBS0EsQ0FBTCxHQUFTZ0MsTUFBbEI7QUFDQSxpQkFBSzVCLENBQUwsR0FBUyxLQUFLQSxDQUFMLEdBQVM2QixNQUFsQjs7QUFFQSxnQkFBSSxLQUFLekcsSUFBTCxDQUFVVixJQUFkLEVBQW9CO0FBQ2hCLHFCQUFLVSxJQUFMLENBQVVWLElBQVYsQ0FBZVEsSUFBZixDQUFvQnFHLDBCQUFwQixDQUErQ0ssTUFBL0MsRUFBdURDLE1BQXZEO0FBQ0g7QUFDSjs7O3VDQUVxQkMsVyxFQUFhO0FBQy9CLG1CQUFPLENBQUNBLFlBQVlsQyxDQUFaLEdBQWdCLEtBQUtBLENBQXRCLEVBQXlCa0MsWUFBWTlCLENBQVosR0FBZ0IsS0FBS0EsQ0FBOUMsQ0FBUDtBQUNIOzs7b0RBRWtDO0FBQy9CLGlCQUFLc0IsYUFBTDs7QUFFQSxnQkFBSSxLQUFLbEcsSUFBTCxDQUFVVixJQUFkLEVBQW9CO0FBQ2hCLHFCQUFLVSxJQUFMLENBQVVWLElBQVYsQ0FBZVEsSUFBZixDQUFvQnNHLHlCQUFwQjtBQUNIO0FBQ0o7Ozt3Q0FFc0I7QUFDbkIsZ0JBQUlPLFlBQVksS0FBS0MsTUFBckI7QUFDQSxnQkFBSUMsT0FBT0YsVUFBVUcsUUFBVixDQUFtQnBHLE1BQTlCO0FBQ0FpRyxzQkFBVUksYUFBVixDQUF3QixJQUF4QixFQUE4QkYsT0FBTyxDQUFyQztBQUNIOzs7Z0NBRWNHLEssRUFBTztBQUNsQixnQkFBSUMsV0FBVyxJQUFmO0FBQ0EsZ0JBQUlqSCxPQUFPaUgsU0FBU2pILElBQXBCOztBQUVBLGdCQUFJQSxLQUFLWCxPQUFMLEtBQWlCLEtBQXJCLEVBQTRCO0FBQ3hCMkgsc0JBQU1FLGVBQU47O0FBRUEsb0JBQUlsSCxLQUFLVixJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDcEIySCw2QkFBU2pCLFdBQVQ7QUFDSDtBQUNKO0FBQ0o7OztvQ0FFa0JnQixLLEVBQU87QUFDdEJBLGtCQUFNRSxlQUFOOztBQUVBLGdCQUFJRCxXQUFXRCxNQUFNRyxhQUFyQjtBQUNBLGdCQUFJbkgsT0FBT2lILFNBQVNqSCxJQUFwQjtBQUNBLGdCQUFJb0gsT0FBT3BILEtBQUtvSCxJQUFoQjtBQUNBLGdCQUFJQyxZQUFZckgsS0FBS3FILFNBQXJCO0FBQ0EsZ0JBQUl2RyxPQUFPc0csS0FBS3RHLElBQWhCOztBQUVBc0csaUJBQUtFLE1BQUwsQ0FBWUQsU0FBWjtBQUNBSixxQkFBU2YsYUFBVDtBQUNBZSxxQkFBU2pCLFdBQVQ7QUFDQWlCLHFCQUFTcEIsb0JBQVQ7O0FBRUFvQixxQkFBU2pELGtCQUFUO0FBQ0FsRCxpQkFBSzJCLEtBQUwsQ0FBVzhFLFdBQVgsQ0FBdUI1RSxpQkFBdkIsQ0FBeUNzRSxRQUF6Qzs7QUFFQSxnQkFBSUcsS0FBSzFGLEtBQUwsT0FBaUIsS0FBckIsRUFBNEI7QUFDeEJaLHFCQUFLMkIsS0FBTCxDQUFXK0Usb0JBQVg7QUFDSDtBQUNKOzs7c0NBRW9CO0FBQ2pCLGlCQUFLeEgsSUFBTCxDQUFVWCxPQUFWLEdBQW9CLElBQXBCO0FBQ0EsaUJBQUt3RCxjQUFMO0FBQ0g7Ozt5Q0FFdUI7QUFDcEIsaUJBQUs3QyxJQUFMLENBQVVYLE9BQVYsR0FBb0IsS0FBcEI7QUFDQSxpQkFBS3dELGNBQUw7QUFDSDs7O3lDQUV1QjtBQUNwQixnQkFBSSxLQUFLN0MsSUFBTCxDQUFVWCxPQUFWLEtBQXNCLElBQTFCLEVBQWdDO0FBQzVCLHFCQUFLb0ksVUFBTCxDQUFnQixLQUFLMUUsWUFBckI7QUFDSCxhQUZELE1BRU87QUFDSCxxQkFBSzBFLFVBQUwsQ0FBZ0IsS0FBS3hFLFdBQXJCO0FBQ0g7QUFDSjs7O29DQUVrQitELEssRUFBTztBQUN0QkEsa0JBQU1FLGVBQU47O0FBRUEsZ0JBQUlELFdBQVcsSUFBZjtBQUNBLGdCQUFJakgsT0FBT2lILFNBQVNqSCxJQUFwQjtBQUNBLGdCQUFJYyxPQUFPZCxLQUFLVCxLQUFMLENBQVd1QixJQUF0Qjs7QUFFQSxnQkFBSWQsS0FBS1gsT0FBTCxLQUFpQixLQUFyQixFQUE0QjtBQUN4QjtBQUNIOztBQUVEVyxpQkFBSzBILGtCQUFMLEdBQTBCNUcsS0FBSzZHLGlCQUFMLENBQXVCM0gsSUFBdkIsQ0FBMUI7O0FBRUFpSCxxQkFBU1csSUFBVCxHQUFnQlosTUFBTVksSUFBdEI7QUFDQVgscUJBQVNZLFFBQVQsR0FBb0IsSUFBcEI7O0FBRUFaLHFCQUFTYix5QkFBVDtBQUNIOzs7a0NBRWdCWSxLLEVBQU87QUFDcEJBLGtCQUFNRSxlQUFOOztBQUVBLGdCQUFJLEtBQUtXLFFBQUwsS0FBa0IsS0FBdEIsRUFBNkI7QUFDekI7QUFDSDs7QUFFRCxnQkFBSVosV0FBVyxJQUFmO0FBQ0FBLHFCQUFTWSxRQUFULEdBQW9CLEtBQXBCO0FBQ0FaLHFCQUFTYSxLQUFULEdBQWlCLENBQWpCO0FBQ0FiLHFCQUFTVyxJQUFULEdBQWdCLElBQWhCOztBQUVBWCxxQkFBU25CLFlBQVQ7QUFDQW1CLHFCQUFTWix1QkFBVDtBQUNIOzs7bUNBRWlCVyxLLEVBQU87QUFDckIsZ0JBQUksS0FBS2EsUUFBVCxFQUFtQjtBQUNmYixzQkFBTUUsZUFBTjs7QUFFQSxvQkFBSUQsV0FBVyxJQUFmO0FBQ0Esb0JBQUlqSCxPQUFPaUgsU0FBU2pILElBQXBCOztBQUVBLG9CQUFJK0gsZ0JBQWdCLEtBQXBCO0FBQ0EvSCxxQkFBSzBILGtCQUFMLENBQXdCbkcsT0FBeEIsQ0FBZ0MsVUFBQ3lHLEtBQUQsRUFBVztBQUN2Qyx3QkFBSWYsU0FBU3hCLGdCQUFULENBQTBCd0IsUUFBMUIsRUFBb0NlLE1BQU1sSSxJQUExQyxDQUFKLEVBQXFEO0FBQ2pEO0FBQ0FFLDZCQUFLaUksT0FBTCxHQUFlRCxLQUFmO0FBQ0FELHdDQUFnQixJQUFoQjtBQUNIO0FBQ0osaUJBTkQ7QUFPQSxvQkFBSUEsa0JBQWtCLEtBQXRCLEVBQTZCO0FBQ3pCL0gseUJBQUtpSSxPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUVELG9CQUFJdkIsY0FBY08sU0FBU1csSUFBVCxDQUFjTSxnQkFBZCxDQUErQmpCLFNBQVNMLE1BQXhDLENBQWxCOztBQWxCZSw0Q0FtQlFLLFNBQVNsQixjQUFULENBQXdCVyxXQUF4QixDQW5CUjtBQUFBO0FBQUEsb0JBbUJWRixNQW5CVTtBQUFBLG9CQW1CRkMsTUFuQkU7O0FBb0JmUSx5QkFBU2QsMEJBQVQsQ0FBb0NLLE1BQXBDLEVBQTRDQyxNQUE1QztBQUNIO0FBQ0o7Ozt1Q0FFcUI7QUFDbEIsZ0JBQUl6RyxPQUFPLEtBQUtBLElBQWhCO0FBQ0EsZ0JBQUlULFFBQVFTLEtBQUtULEtBQWpCO0FBQ0EsZ0JBQUl1QixPQUFPdkIsTUFBTXVCLElBQWpCOztBQUVBLGdCQUFJZCxLQUFLaUksT0FBVCxFQUFrQjtBQUNkLG9CQUFJRSxTQUFTbkksS0FBS2lJLE9BQUwsQ0FBYTFJLEtBQTFCO0FBQ0Esb0JBQUk2SSxjQUFjdEgsS0FBS21CLE1BQUwsQ0FBWXpCLE9BQVosQ0FBb0JqQixLQUFwQixDQUFsQjtBQUNBLG9CQUFJOEksbUJBQW1CdkgsS0FBS21CLE1BQUwsQ0FBWXpCLE9BQVosQ0FBb0IySCxNQUFwQixDQUF2QjtBQUNBLG9CQUFJdkcsTUFBTWQsS0FBS3dILFNBQUwsQ0FBZUYsV0FBZixFQUE0QkMsZ0JBQTVCLEVBQThDckksS0FBS0ssYUFBTCxFQUE5QyxDQUFWO0FBQ0E7QUFDQSxvQkFBSVMsS0FBS3lILFFBQUwsRUFBSixFQUFxQjtBQUNqQi9JLDRCQUFRQyxHQUFSLENBQVksd0NBQVo7QUFDSDtBQUNKO0FBQ0o7Ozt5Q0FFdUIrSSxFLEVBQUlDLEUsRUFBb0I7QUFBQSxnQkFBaEJDLE1BQWdCLHVFQUFQLEtBQU87O0FBQzVDO0FBQ0EsZ0JBQUksQ0FBQ0YsR0FBR2pELG9CQUFSLEVBQThCLEtBQUt4QixzQkFBTCxDQUE0QnlFLEVBQTVCO0FBQzlCLGdCQUFJLENBQUNDLEdBQUdsRCxvQkFBUixFQUE4QixLQUFLeEIsc0JBQUwsQ0FBNEIwRSxFQUE1Qjs7QUFFOUIsZ0JBQUlFLFlBQUo7QUFBQSxnQkFBU0MsMkJBQVQ7QUFBQSxnQkFBNkJDLDRCQUE3QjtBQUFBLGdCQUFrREMsV0FBbEQ7QUFBQSxnQkFBc0RDLFdBQXREOztBQUVBO0FBQ0FKLGtCQUFNLEtBQU47O0FBRUE7QUFDQSxnQkFBSUQsTUFBSixFQUFZO0FBQ1JJLHFCQUFNTixHQUFHckUsRUFBSCxHQUFRNkUsS0FBS0MsR0FBTCxDQUFTVCxHQUFHdkQsU0FBWixDQUFSLEdBQWlDdUQsR0FBR3JELGFBQXJDLElBQXVEc0QsR0FBR3RFLEVBQUgsR0FBUTZFLEtBQUtDLEdBQUwsQ0FBU1IsR0FBR3hELFNBQVosQ0FBUixHQUFpQ3dELEdBQUd0RCxhQUEzRixDQUFMO0FBQ0E0RCxxQkFBTVAsR0FBRzdELEVBQUgsR0FBUXFFLEtBQUtDLEdBQUwsQ0FBU1QsR0FBR3RELFVBQVosQ0FBUixHQUFrQ3NELEdBQUdwRCxhQUF0QyxJQUF3RHFELEdBQUc5RCxFQUFILEdBQVFxRSxLQUFLQyxHQUFMLENBQVNSLEdBQUd2RCxVQUFaLENBQVIsR0FBa0N1RCxHQUFHckQsYUFBN0YsQ0FBTDtBQUNILGFBSEQsTUFHTztBQUNIMEQscUJBQU1OLEdBQUdoRSxDQUFILEdBQU93RSxLQUFLQyxHQUFMLENBQVNULEdBQUd2RCxTQUFaLENBQVAsR0FBZ0N1RCxHQUFHckQsYUFBcEMsSUFBc0RzRCxHQUFHakUsQ0FBSCxHQUFPd0UsS0FBS0MsR0FBTCxDQUFTUixHQUFHeEQsU0FBWixDQUFQLEdBQWdDd0QsR0FBR3RELGFBQXpGLENBQUw7QUFDQTRELHFCQUFNUCxHQUFHNUQsQ0FBSCxHQUFPb0UsS0FBS0MsR0FBTCxDQUFTVCxHQUFHdEQsVUFBWixDQUFQLEdBQWlDc0QsR0FBR3BELGFBQXJDLElBQXVEcUQsR0FBRzdELENBQUgsR0FBT29FLEtBQUtDLEdBQUwsQ0FBU1IsR0FBR3ZELFVBQVosQ0FBUCxHQUFpQ3VELEdBQUdyRCxhQUEzRixDQUFMO0FBQ0g7O0FBRUQ7QUFDQXdELGlDQUFxQkksS0FBS0MsR0FBTCxDQUFTVCxHQUFHdkQsU0FBWixJQUF5QitELEtBQUtDLEdBQUwsQ0FBU1IsR0FBR3hELFNBQVosQ0FBOUM7QUFDQTRELGtDQUFzQkcsS0FBS0MsR0FBTCxDQUFTVCxHQUFHdEQsVUFBWixJQUEwQjhELEtBQUtDLEdBQUwsQ0FBU1IsR0FBR3ZELFVBQVosQ0FBaEQ7O0FBRUE7QUFDQSxnQkFBSThELEtBQUtDLEdBQUwsQ0FBU0gsRUFBVCxJQUFlRixrQkFBbkIsRUFBdUM7O0FBRW5DO0FBQ0Esb0JBQUlJLEtBQUtDLEdBQUwsQ0FBU0YsRUFBVCxJQUFlRixtQkFBbkIsRUFBd0M7O0FBRXBDO0FBQ0FGLDBCQUFNLElBQU47QUFDSCxpQkFKRCxNQUlPOztBQUVIO0FBQ0FBLDBCQUFNLEtBQU47QUFDSDtBQUNKLGFBWkQsTUFZTzs7QUFFSDtBQUNBQSxzQkFBTSxLQUFOO0FBQ0g7O0FBRUQ7QUFDQSxtQkFBT0EsR0FBUDtBQUNIOzs7Ozs7a0JBblFnQm5ELGU7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEwRCxlO0FBQ2pCLDZCQUFZMUcsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDckIsYUFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7Ozs7bUNBRVV6QyxJLEVBQU07QUFDYixpQkFBSzBDLGVBQUwsQ0FBcUIxQyxJQUFyQjtBQUNIOzs7d0NBRWVBLEksRUFBTTtBQUNsQixnQkFBSW1KLFVBQVUsS0FBS25HLFVBQUwsRUFBZDtBQUNBLGdCQUFJbEQsT0FBTyxJQUFJLEtBQUswQyxJQUFMLENBQVVVLE1BQWQsQ0FBcUJpRyxPQUFyQixDQUFYO0FBQ0FySixpQkFBS0UsSUFBTCxHQUFZQSxJQUFaO0FBQ0FBLGlCQUFLRixJQUFMLEdBQVlBLElBQVo7O0FBRUFBLGlCQUFLc0osSUFBTCxHQUFZLFFBQVosQ0FOa0IsQ0FNRzs7QUFFckJ0SixpQkFBSzBFLENBQUwsR0FBUyxLQUFLLENBQUN4RSxLQUFLVCxLQUFMLENBQVdlLGdCQUFYLEtBQWdDLENBQWpDLElBQXNDLEVBQXBEO0FBQ0FSLGlCQUFLOEUsQ0FBTCxHQUFTLEdBQVQ7O0FBRUEsaUJBQUtqQyxpQkFBTCxDQUF1QjdDLElBQXZCOztBQUVBLG1CQUFPQSxJQUFQO0FBQ0g7OztxQ0FFWTtBQUNULGdCQUFJcUQsY0FBYyw4QkFBbEI7QUFDQSxtQkFBTyxLQUFLWCxJQUFMLENBQVVZLE9BQVYsQ0FBa0JDLFNBQWxCLENBQTRCRixXQUE1QixDQUFQO0FBQ0g7OzswQ0FFaUJyRCxJLEVBQU07QUFDcEJBLGlCQUFLMEQsTUFBTCxDQUFZQyxHQUFaLENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EzRCxpQkFBS3dELFdBQUwsR0FBbUIsSUFBbkIsQ0FGb0IsQ0FFSTs7QUFFeEIsaUJBQUtTLHNCQUFMLENBQTRCakUsSUFBNUI7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7K0NBQ3VCb0UsTSxFQUFRO0FBQzNCO0FBQ0E7O0FBRUEsZ0JBQUlBLE9BQU9DLEVBQVAsS0FBY3BFLFNBQWxCLEVBQTZCO0FBQ3pCcUUsdUJBQU9DLGNBQVAsQ0FBc0JILE1BQXRCLEVBQThCLElBQTlCLEVBQW9DO0FBQ2hDSSx1QkFEZ0MsaUJBQzFCO0FBQUUsK0JBQU9KLE9BQU9LLGlCQUFQLEdBQTJCQyxDQUFsQztBQUFxQyxxQkFEYjs7QUFFaENDLGdDQUFZLElBRm9CO0FBR2hDQyxrQ0FBYztBQUhrQixpQkFBcEM7QUFLSDs7QUFFRCxnQkFBSVIsT0FBT1MsRUFBUCxLQUFjNUUsU0FBbEIsRUFBNkI7QUFDekJxRSx1QkFBT0MsY0FBUCxDQUFzQkgsTUFBdEIsRUFBOEIsSUFBOUIsRUFBb0M7QUFDaENJLHVCQURnQyxpQkFDM0I7QUFBQywrQkFBT0osT0FBT0ssaUJBQVAsR0FBMkJLLENBQWxDO0FBQW9DLHFCQURWOztBQUVoQ0gsZ0NBQVksSUFGb0IsRUFFZEMsY0FBYztBQUZBLGlCQUFwQztBQUlIOztBQUVELGdCQUFJUixPQUFPVyxPQUFQLEtBQW1COUUsU0FBdkIsRUFBa0M7QUFDOUJxRSx1QkFBT0MsY0FBUCxDQUFzQkgsTUFBdEIsRUFBOEIsU0FBOUIsRUFBeUM7QUFDckNJLHVCQURxQyxpQkFDaEM7QUFBQywrQkFBT0osT0FBT00sQ0FBUCxHQUFXTixPQUFPWSxLQUFQLEdBQWUsQ0FBakM7QUFBbUMscUJBREo7O0FBRXJDTCxnQ0FBWSxJQUZ5QixFQUVuQkMsY0FBYztBQUZLLGlCQUF6QztBQUlIOztBQUVELGdCQUFJUixPQUFPYSxPQUFQLEtBQW1CaEYsU0FBdkIsRUFBa0M7QUFDOUJxRSx1QkFBT0MsY0FBUCxDQUFzQkgsTUFBdEIsRUFBOEIsU0FBOUIsRUFBeUM7QUFDckNJLHVCQURxQyxpQkFDaEM7QUFBQywrQkFBT0osT0FBT1UsQ0FBUCxHQUFXVixPQUFPYyxNQUFQLEdBQWdCLENBQWxDO0FBQW9DLHFCQURMOztBQUVyQ1AsZ0NBQVksSUFGeUIsRUFFbkJDLGNBQWM7QUFGSyxpQkFBekM7QUFJSDs7QUFFRCxnQkFBSVIsT0FBT2UsU0FBUCxLQUFxQmxGLFNBQXpCLEVBQW9DO0FBQ2hDcUUsdUJBQU9DLGNBQVAsQ0FBc0JILE1BQXRCLEVBQThCLFdBQTlCLEVBQTJDO0FBQ3ZDSSx1QkFEdUMsaUJBQ2xDO0FBQUMsK0JBQU9KLE9BQU9ZLEtBQVAsR0FBZSxDQUF0QjtBQUF3QixxQkFEUzs7QUFFdkNMLGdDQUFZLElBRjJCLEVBRXJCQyxjQUFjO0FBRk8saUJBQTNDO0FBSUg7O0FBRUQsZ0JBQUlSLE9BQU9nQixVQUFQLEtBQXNCbkYsU0FBMUIsRUFBcUM7QUFDakNxRSx1QkFBT0MsY0FBUCxDQUFzQkgsTUFBdEIsRUFBOEIsWUFBOUIsRUFBNEM7QUFDeENJLHVCQUR3QyxpQkFDbkM7QUFBQywrQkFBT0osT0FBT2MsTUFBUCxHQUFnQixDQUF2QjtBQUF5QixxQkFEUzs7QUFFeENQLGdDQUFZLElBRjRCLEVBRXRCQyxjQUFjO0FBRlEsaUJBQTVDO0FBSUg7O0FBRUQsZ0JBQUlSLE9BQU9pQixhQUFQLEtBQXlCcEYsU0FBN0IsRUFBd0M7QUFDcENxRSx1QkFBT0MsY0FBUCxDQUFzQkgsTUFBdEIsRUFBOEIsZUFBOUIsRUFBK0M7QUFDM0NJLHVCQUQyQyxpQkFDckM7QUFDRiw0QkFBSUosT0FBT1YsTUFBUCxLQUFrQnpELFNBQXRCLEVBQWlDO0FBQzdCLG1DQUFPbUUsT0FBT1ksS0FBUCxHQUFlWixPQUFPVixNQUFQLENBQWNnQixDQUFwQztBQUNILHlCQUZELE1BRU87QUFDSCxtQ0FBTyxDQUFQO0FBQ0g7QUFDSixxQkFQMEM7O0FBUTNDQyxnQ0FBWSxJQVIrQixFQVF6QkMsY0FBYztBQVJXLGlCQUEvQztBQVVIOztBQUVELGdCQUFJUixPQUFPa0IsYUFBUCxLQUF5QnJGLFNBQTdCLEVBQXdDO0FBQ3BDcUUsdUJBQU9DLGNBQVAsQ0FBc0JILE1BQXRCLEVBQThCLGVBQTlCLEVBQStDO0FBQzNDSSx1QkFEMkMsaUJBQ3JDO0FBQ0YsNEJBQUlKLE9BQU9WLE1BQVAsS0FBa0J6RCxTQUF0QixFQUFpQztBQUM3QixtQ0FBT21FLE9BQU9jLE1BQVAsR0FBZ0JkLE9BQU9WLE1BQVAsQ0FBY29CLENBQXJDO0FBQ0gseUJBRkQsTUFFTztBQUNILG1DQUFPLENBQVA7QUFDSDtBQUNKLHFCQVAwQzs7QUFRM0NILGdDQUFZLElBUitCLEVBUXpCQyxjQUFjO0FBUlcsaUJBQS9DO0FBVUg7O0FBRUQsZ0JBQUlSLE9BQU9tQixRQUFQLElBQW1CbkIsT0FBT29CLE1BQVAsS0FBa0J2RixTQUF6QyxFQUFvRDtBQUNoRHFFLHVCQUFPQyxjQUFQLENBQXNCSCxNQUF0QixFQUE4QixRQUE5QixFQUF3QztBQUNwQ0ksdUJBRG9DLGlCQUM5QjtBQUFFLCtCQUFPSixPQUFPWSxLQUFQLEdBQWUsQ0FBdEI7QUFBd0IscUJBREk7O0FBRXBDTCxnQ0FBWSxJQUZ3QixFQUVsQkMsY0FBYztBQUZJLGlCQUF4QztBQUlIOztBQUVEO0FBQ0E7QUFDQVIsbUJBQU9xQixvQkFBUCxHQUE4QixJQUE5QjtBQUNIOzs7Ozs7a0JBL0hnQjJELGU7Ozs7Ozs7OztBQ0RyQjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJcEksT0FBTyxvQkFBWDtBQUNBQSxLQUFLdUksVUFBTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBTTdHLE9BQU84RyxJQUFiOztBQUVBLElBQUlDLE1BQU0sSUFBSS9HLEtBQUtnSCxXQUFULENBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEVBQUNDLGlCQUFpQixRQUFsQixFQUEvQixDQUFWO0FBQ0FDLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFdBQXBDLENBQWdETCxJQUFJekosSUFBcEQ7O0FBRUEsSUFBSTJDLFFBQVEsb0JBQVUzQixJQUFWLEVBQWdCMEIsSUFBaEIsRUFBc0IrRyxHQUF0QixDQUFaOztBQUVBOUcsTUFBTW9ILDBCQUFOO0FBQ0FwSCxNQUFNcUgsYUFBTjtBQUNBckgsTUFBTStFLG9CQUFOLEc7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTs7OztBQUNBOzs7Ozs7OztJQUVxQnVDLEk7QUFDakIsb0JBQWM7QUFBQTs7QUFDVixhQUFLM0MsSUFBTCxHQUFZLG1CQUFTLElBQVQsQ0FBWjtBQUNBLGFBQUtuRixNQUFMLEdBQWMsd0JBQWErSCxhQUFiLENBQTJCLElBQTNCLENBQWQ7QUFDQSxhQUFLM0MsU0FBTCxHQUFpQixLQUFLcEYsTUFBTCxDQUFZLENBQVosQ0FBakI7QUFDQSxhQUFLZ0ksV0FBTCxHQUFtQixLQUFLaEksTUFBTCxDQUFZcEMsS0FBWixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFuQjtBQUNBLGFBQUtxSyxhQUFMLEdBQXFCLEtBQUtqSSxNQUFMLENBQVlwQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCLEVBQXJCLENBQXJCO0FBQ0g7Ozs7cUNBRVk7QUFBQTs7QUFDVCxpQkFBS3FLLGFBQUwsQ0FBbUIzSSxPQUFuQixDQUEyQixVQUFDaEMsS0FBRCxFQUFRb0MsS0FBUixFQUFrQjtBQUN6QyxzQkFBS3lGLElBQUwsQ0FBVStDLEdBQVYsQ0FBYzVLLEtBQWQsRUFBcUJvQyxRQUFRLENBQTdCLEVBQWdDLEtBQWhDO0FBQ0Esb0JBQUl5SSxVQUFVN0ssTUFBTTJCLElBQU4sR0FBYSxDQUFiLENBQWQ7QUFDQWtKLHdCQUFRL0ssT0FBUixHQUFrQixJQUFsQjtBQUNILGFBSkQ7QUFLSDs7O21DQUVVO0FBQ1AsaUJBQUs0QyxNQUFMLENBQVksQ0FBWixFQUFlc0csUUFBZixNQUNBLEtBQUt0RyxNQUFMLENBQVksQ0FBWixFQUFlc0csUUFBZixFQURBLElBRUEsS0FBS3RHLE1BQUwsQ0FBWSxDQUFaLEVBQWVzRyxRQUFmLEVBRkEsSUFHQSxLQUFLdEcsTUFBTCxDQUFZLENBQVosRUFBZXNHLFFBQWYsRUFIQTtBQUlIOzs7dUNBRWNILFcsRUFBYUMsZ0IsRUFBZ0M7QUFBQSxnQkFBZGxILFFBQWMsdUVBQUgsQ0FBRzs7QUFDeEQsZ0JBQUlBLGFBQWEsQ0FBakIsRUFBb0I7QUFBRSx1QkFBTyxLQUFQO0FBQWM7O0FBRXBDLGdCQUFJLHdCQUFha0osV0FBYixDQUF5QmpDLFdBQXpCLENBQUosRUFBMkM7QUFDdkMsdUJBQU8sS0FBS2tDLDJCQUFMLENBQWlDbEMsV0FBakMsRUFBOENDLGdCQUE5QyxFQUFnRWxILFFBQWhFLENBQVA7QUFDSDs7QUFFRCxnQkFBSSx3QkFBYW9KLGNBQWIsQ0FBNEJuQyxXQUE1QixDQUFKLEVBQThDO0FBQzFDLHVCQUFPLEtBQUtvQyw4QkFBTCxDQUFvQ3BDLFdBQXBDLEVBQWlEQyxnQkFBakQsRUFBbUVsSCxRQUFuRSxDQUFQO0FBQ0g7O0FBRUQ7QUFDQSxtQkFBTyxLQUFQO0FBQ0g7OztvREFFMkJpSCxXLEVBQWFDLGdCLEVBQWdDO0FBQUEsZ0JBQWRsSCxRQUFjLHVFQUFILENBQUc7O0FBQ3JFLGdCQUFJc0osY0FBYyxLQUFLeEksTUFBTCxDQUFZbUcsV0FBWixDQUFsQjtBQUNBLGdCQUFJc0MsbUJBQW1CLEtBQUt6SSxNQUFMLENBQVlvRyxnQkFBWixDQUF2QjtBQUNBLGdCQUFJc0MsY0FBY0YsWUFBWXZKLElBQVosQ0FBaUJDLFFBQWpCLENBQWxCO0FBQ0EsZ0JBQUl5SixlQUFlRixpQkFBaUJ4SixJQUFqQixFQUFuQjs7QUFFQSxnQkFBSUMsV0FBVyxDQUFmLEVBQWtCO0FBQUUsdUJBQU8sS0FBUDtBQUFjOztBQUVsQyxnQkFBSSx3QkFBYTBKLFlBQWIsQ0FBMEJ4QyxnQkFBMUIsQ0FBSixFQUFpRDtBQUM3QyxvQkFBSXJJLE9BQU8ySyxZQUFZLENBQVosQ0FBWDs7QUFFQSxvQkFBSUQsaUJBQWlCaEosS0FBakIsRUFBSixFQUE4Qjs7QUFFMUIsd0JBQUkxQixLQUFLYixLQUFMLEtBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsNEJBQUlhLEtBQUtaLEtBQUwsS0FBZXNMLGlCQUFpQnRMLEtBQXBDLEVBQTJDO0FBQ3ZDLG1DQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0QsMkJBQU8sS0FBUDtBQUNILGlCQVJELE1BUU87QUFDSCwyQkFBT1ksS0FBSzhLLE9BQUwsQ0FBYUYsYUFBYSxDQUFiLENBQWIsQ0FBUDtBQUNIO0FBQ0o7O0FBRUQsZ0JBQUksd0JBQWFMLGNBQWIsQ0FBNEJsQyxnQkFBNUIsQ0FBSixFQUFtRDs7QUFFL0Msb0JBQUlxQyxpQkFBaUJoSixLQUFqQixFQUFKLEVBQThCO0FBQ3pCO0FBQ0Esd0JBQUlpSixZQUFZLENBQVosRUFBZXhMLEtBQWYsS0FBeUIsRUFBN0IsRUFBaUM7QUFDOUIsK0JBQU8sSUFBUDtBQUNIO0FBQ0QsMkJBQU8sS0FBUDtBQUNIOztBQUVELG9CQUFJeUwsYUFBYSxDQUFiLEVBQWdCRyx3QkFBaEIsQ0FBeUNKLFlBQVksQ0FBWixDQUF6QyxNQUE2RCxJQUFqRSxFQUF1RTtBQUNuRSwyQkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNELG1CQUFPLEtBQVA7QUFDSDs7O3VEQUU4QnZDLFcsRUFBYUMsZ0IsRUFBZ0M7QUFBQSxnQkFBZGxILFFBQWMsdUVBQUgsQ0FBRzs7QUFDeEUsZ0JBQUlzSixjQUFjLEtBQUt4SSxNQUFMLENBQVltRyxXQUFaLENBQWxCO0FBQ0EsZ0JBQUlzQyxtQkFBbUIsS0FBS3pJLE1BQUwsQ0FBWW9HLGdCQUFaLENBQXZCO0FBQ0EsZ0JBQUlzQyxjQUFjRixZQUFZdkosSUFBWixDQUFpQkMsUUFBakIsQ0FBbEI7QUFDQSxnQkFBSXlKLGVBQWVGLGlCQUFpQnhKLElBQWpCLEVBQW5COztBQUVBLGdCQUFJLHdCQUFhMkosWUFBYixDQUEwQnhDLGdCQUExQixDQUFKLEVBQWlEO0FBQzdDLG9CQUFJbEgsYUFBYSxDQUFqQixFQUFvQjtBQUNoQiwyQkFBTyxLQUFQO0FBQ0g7QUFDRCxvQkFBSXVKLGlCQUFpQmhKLEtBQWpCLEVBQUosRUFBOEI7QUFDMUIsMkJBQU9pSixZQUFZLENBQVosRUFBZUssS0FBZixDQUFxQk4saUJBQWlCdEwsS0FBdEMsQ0FBUDtBQUNIO0FBQ0QsdUJBQU91TCxZQUFZLENBQVosRUFBZUcsT0FBZixDQUF1QkYsYUFBYSxDQUFiLENBQXZCLENBQVA7QUFDSDs7QUFFRCxnQkFBSSx3QkFBYUwsY0FBYixDQUE0QmxDLGdCQUE1QixDQUFKLEVBQW1EO0FBQy9DLG9CQUFJcUMsaUJBQWlCaEosS0FBakIsRUFBSixFQUE4QjtBQUMxQjtBQUNBLHdCQUFJaUosWUFBWSxDQUFaLEVBQWV4TCxLQUFmLEtBQXlCLEVBQTdCLEVBQWlDO0FBQzdCLCtCQUFPLElBQVA7QUFDSDtBQUNELDJCQUFPLEtBQVA7QUFDSDtBQUNELHVCQUFPeUwsYUFBYSxDQUFiLEVBQWdCRyx3QkFBaEIsQ0FBeUNKLFlBQVksQ0FBWixDQUF6QyxDQUFQO0FBQ0g7O0FBRUQsbUJBQU8sS0FBUDtBQUNIOzs7a0NBRVN2QyxXLEVBQWFDLGdCLEVBQWdDO0FBQUEsZ0JBQWRsSCxRQUFjLHVFQUFILENBQUc7O0FBQ25ELGdCQUFJLEtBQUs4SixjQUFMLENBQW9CN0MsV0FBcEIsRUFBaUNDLGdCQUFqQyxFQUFtRGxILFFBQW5ELE1BQWlFLEtBQXJFLEVBQTRFO0FBQ3hFO0FBQ0EsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsbUJBQU8sS0FBS2MsTUFBTCxDQUFZbUcsV0FBWixFQUF5QitCLEdBQXpCLENBQTZCLEtBQUtsSSxNQUFMLENBQVlvRyxnQkFBWixDQUE3QixFQUE0RGxILFFBQTVELENBQVA7QUFDSDs7O2tDQUVTO0FBQ04saUJBQUtpRyxJQUFMLENBQVVFLE1BQVYsQ0FBaUIsS0FBS0QsU0FBdEI7QUFDSDs7OzBDQUVpQnJILEksRUFBTTtBQUNwQixnQkFBSWtMLFdBQVcsS0FBS0Msa0JBQUwsQ0FBd0JuTCxJQUF4QixFQUE4Qm9MLE1BQTlCLENBQXFDLEtBQUtDLGFBQUwsRUFBckMsQ0FBZjs7QUFFQSxnQkFBSTlLLFFBQVEySyxTQUFTSSxNQUFULENBQWdCLFVBQUNDLE1BQUQsRUFBU3ZMLElBQVQsRUFBa0I7QUFDMUMsb0JBQUtBLFNBQVNELFNBQVYsSUFBeUJDLFNBQVMsSUFBdEMsRUFBNkM7QUFDekMsMkJBQU91TCxNQUFQO0FBQ0g7QUFDRCxvQkFBS3ZMLEtBQUtiLEtBQUwsS0FBZSxDQUFoQixJQUF1QmEsS0FBS1gsT0FBTCxLQUFpQixJQUE1QyxFQUFtRDtBQUMvQ2tNLDJCQUFPdkssSUFBUCxDQUFZaEIsSUFBWjtBQUNIO0FBQ0QsdUJBQU91TCxNQUFQO0FBQ0gsYUFSVyxFQVFULEVBUlMsQ0FBWjs7QUFVQSxtQkFBT2hMLEtBQVA7QUFDSDs7OzJDQUVrQlAsSSxFQUFNO0FBQ3JCLGdCQUFJaUMsU0FBUyxLQUFLaUksYUFBbEI7O0FBRUEsZ0JBQUlnQixXQUFXakosT0FBT1QsR0FBUCxDQUFXLFVBQUNqQyxLQUFELEVBQVc7QUFDakMsb0JBQUlBLFVBQVVTLEtBQUtULEtBQW5CLEVBQTBCO0FBQ3RCO0FBQ0g7QUFDRCxvQkFBSUEsTUFBTW1DLEtBQU4sRUFBSixFQUFtQjtBQUNmLDJCQUFPbkMsTUFBTXdCLFFBQWI7QUFDSDtBQUNELHVCQUFPeEIsTUFBTStCLE9BQU4sRUFBUDtBQUNILGFBUmMsQ0FBZjtBQVNBLG1CQUFPNEosUUFBUDtBQUNIOzs7d0NBRWU7QUFDWixnQkFBSWpKLFNBQVMsS0FBS2dJLFdBQWxCOztBQUVBLGdCQUFJaUIsV0FBV2pKLE9BQU9ULEdBQVAsQ0FBVyxVQUFDakMsS0FBRCxFQUFXO0FBQ2pDLG9CQUFJQSxNQUFNbUMsS0FBTixFQUFKLEVBQW1CO0FBQ2YsMkJBQU9uQyxNQUFNd0IsUUFBYjtBQUNIO0FBQ0QsdUJBQU94QixNQUFNK0IsT0FBTixFQUFQO0FBQ0gsYUFMYyxDQUFmOztBQU9BLG1CQUFPNEosUUFBUDtBQUNIOzs7K0JBRU07QUFDSCxnQkFBSXZMLE1BQU0sS0FBSzZMLGdCQUFMLEVBQVY7QUFDQTdMLGtCQUFNQSxNQUFNLEtBQUs4TCxnQkFBTCxFQUFaO0FBQ0E7QUFDQWpNLG9CQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDSDs7O21DQUVVO0FBQ1AsaUJBQUt1SyxhQUFMLENBQW1CM0ksT0FBbkIsQ0FBMkIsVUFBQ2hDLEtBQUQsRUFBVztBQUNsQ0Msd0JBQVFDLEdBQVIsQ0FBWUYsTUFBTThDLFFBQU4sRUFBWjtBQUNILGFBRkQ7QUFHSDs7OzJDQUVrQjtBQUNmLG1CQUFPLFdBQVcsS0FBSytFLElBQUwsQ0FBVTFILFFBQVYsRUFBWCxHQUFrQyxJQUFsQyxHQUNQLGtCQURPLEdBQ2MsS0FBSzJILFNBQUwsQ0FBZTNILFFBQWYsRUFEZCxHQUMwQyxJQUQxQyxHQUVQLHFCQUZPLEdBRWlCLEtBQUt1QyxNQUFMLENBQVksQ0FBWixFQUFldkMsUUFBZixFQUZqQixHQUU2QyxJQUY3QyxHQUdQLG1CQUhPLEdBR2UsS0FBS3VDLE1BQUwsQ0FBWSxDQUFaLEVBQWV2QyxRQUFmLEVBSGYsR0FHMkMsSUFIM0MsR0FJUCxtQkFKTyxHQUllLEtBQUt1QyxNQUFMLENBQVksQ0FBWixFQUFldkMsUUFBZixFQUpmLEdBSTJDLElBSjNDLEdBS1Asa0JBTE8sR0FLYyxLQUFLdUMsTUFBTCxDQUFZLENBQVosRUFBZXZDLFFBQWYsRUFMZCxHQUswQyxNQUxqRDtBQU1IOzs7MkNBRWtCO0FBQ2YsZ0JBQUlDLE1BQU0sRUFBVjtBQUNBO0FBQ0EsaUJBQUssSUFBSStMLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDeEIsb0JBQUkvSixRQUFRK0osSUFBSSxDQUFoQjtBQUNBL0wsc0JBQU1BLE1BQU0sR0FBTixHQUFZZ0MsS0FBWixHQUFvQixNQUFwQixHQUE2QixLQUFLTSxNQUFMLENBQVlOLEtBQVosRUFBbUJqQyxRQUFuQixFQUE3QixHQUE2RCxJQUFuRTtBQUNIO0FBQ0QsbUJBQU9DLEdBQVA7QUFDSDs7O2lEQUV3QjtBQUNyQixnQkFBSWdNLE9BQU8sQ0FBWDtBQUNBLGdCQUFJaEssUUFBUSxDQUFaO0FBQ0EsZ0JBQUloQyxNQUFNLEVBQVY7QUFDQSxtQkFBT2dNLE9BQU8sQ0FBZCxFQUFpQjtBQUNiQSx1QkFBTyxDQUFQO0FBQ0Esb0JBQUlDLE9BQU8sS0FBSzFCLGFBQUwsQ0FBbUIxSSxHQUFuQixDQUF1QixVQUFDakMsS0FBRCxFQUFXO0FBQ3pDLHdCQUFJQSxNQUFNZ0IsS0FBTixDQUFZb0IsS0FBWixNQUF1QjVCLFNBQTNCLEVBQXNDO0FBQ2xDNEw7QUFDQSwrQkFBTyxLQUFQO0FBQ0gscUJBSEQsTUFHTztBQUNILCtCQUFPcE0sTUFBTWdCLEtBQU4sQ0FBWW9CLEtBQVosRUFBbUJqQyxRQUFuQixFQUFQO0FBQ0g7QUFDSixpQkFQVSxDQUFYOztBQVNBQyxzQkFBTUEsTUFBTWlNLEtBQUt0SixJQUFMLENBQVUsTUFBVixDQUFOLEdBQTBCLElBQWhDO0FBQ0FYO0FBQ0g7QUFDRCxtQkFBT2hDLEdBQVA7QUFDSDs7Ozs7O2tCQXpOZ0JvSyxJOzs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTtJQUNxQjhCLEk7QUFDakIsa0JBQVkvSyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS1AsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLUSxRQUFMLEdBQWdCLDZCQUFpQixJQUFqQixDQUFoQjs7QUFFQSxhQUFLK0ssYUFBTDtBQUNBLGFBQUtDLE9BQUw7QUFDSDs7OztrQ0FFUzdKLEksRUFBTTtBQUFBOztBQUNaLGlCQUFLM0IsS0FBTCxHQUFhLEVBQWI7QUFDQTJCLGlCQUFLWCxPQUFMLENBQWEsVUFBQ1ksT0FBRCxFQUFhO0FBQ3RCLHNCQUFLNUIsS0FBTCxDQUFXUyxJQUFYLENBQWdCLGVBQUtvQixTQUFMLENBQWVELE9BQWYsQ0FBaEI7QUFDSCxhQUZEO0FBR0g7Ozt3Q0FFZTtBQUFBOztBQUNaLGdCQUFJNkosU0FBUyxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLE9BQXJCLEVBQThCLE1BQTlCLENBQWI7O0FBRFksdUNBRUhySyxLQUZHO0FBR1JxSyx1QkFBT3pLLE9BQVAsQ0FBZSxVQUFDbkMsS0FBRCxFQUFXO0FBQ3RCLHdCQUFJWSxPQUFPLG1CQUFTMkIsS0FBVCxFQUFnQnZDLEtBQWhCLEVBQXVCLEtBQXZCLENBQVg7QUFDQSwyQkFBS21CLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQmhCLElBQWhCO0FBQ0gsaUJBSEQ7QUFIUTs7QUFFWixpQkFBSyxJQUFJMkIsUUFBUSxDQUFqQixFQUFvQkEsUUFBUSxFQUE1QixFQUFnQ0EsT0FBaEMsRUFBeUM7QUFBQSxzQkFBaENBLEtBQWdDO0FBS3hDO0FBQ0o7OztrQ0FFUztBQUNOLGlCQUFLcEIsS0FBTCxDQUFXMEwsSUFBWCxDQUFnQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUFFLHVCQUFPLE1BQU1uRCxLQUFLb0QsTUFBTCxFQUFiO0FBQTRCLGFBQXhEO0FBQ0g7OzsrQkFFTTdNLEssRUFBdUI7QUFBQSxnQkFBaEJGLE9BQWdCLHVFQUFOLElBQU07O0FBQzFCLGdCQUFJVyxPQUFPLEtBQUtPLEtBQUwsQ0FBVzRKLEdBQVgsRUFBWDtBQUNBbkssaUJBQUtYLE9BQUwsR0FBZUEsT0FBZjtBQUNBRSxrQkFBTXlCLElBQU4sQ0FBV2hCLElBQVg7QUFDSDs7OzRCQUVHVCxLLEVBQXFDO0FBQUEsZ0JBQTlCNEIsUUFBOEIsdUVBQW5CLENBQW1CO0FBQUEsZ0JBQWhCOUIsT0FBZ0IsdUVBQU4sSUFBTTs7QUFDckMsaUJBQUssSUFBSXNDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFSLFFBQTVCLEVBQXNDUSxPQUF0QyxFQUErQztBQUMzQyxxQkFBSzJGLE1BQUwsQ0FBWS9ILEtBQVosRUFBbUJGLE9BQW5CO0FBQ0g7QUFDSjs7OzZCQUVJVyxJLEVBQU07QUFDUCxpQkFBS08sS0FBTCxDQUFXUyxJQUFYLENBQWdCaEIsSUFBaEI7QUFDQUEsaUJBQUtvSCxJQUFMLEdBQVksSUFBWjtBQUNBcEgsaUJBQUtWLElBQUwsR0FBWSxJQUFaLENBSE8sQ0FHVTtBQUNwQjs7OytCQUVrQjtBQUFBLGdCQUFkNkIsUUFBYyx1RUFBSCxDQUFHOztBQUNmLGdCQUFJLEtBQUtPLEtBQUwsRUFBSixFQUFrQjtBQUFFLHVCQUFPLElBQVA7QUFBYTtBQUNqQyxnQkFBSSxLQUFLbkIsS0FBTCxDQUFXRyxNQUFYLEdBQW9CUyxRQUF4QixFQUFrQztBQUFFLHVCQUFPLElBQVA7QUFBYTs7QUFFakQsZ0JBQUlaLFFBQVEsRUFBWjtBQUNBLGlCQUFLLElBQUlvQixRQUFRUixRQUFqQixFQUEyQlEsUUFBUSxDQUFuQyxFQUFzQ0EsT0FBdEMsRUFBK0M7QUFDM0NwQixzQkFBTVMsSUFBTixDQUFXLEtBQUtULEtBQUwsQ0FBVyxLQUFLQSxLQUFMLENBQVdHLE1BQVgsR0FBb0JpQixLQUEvQixDQUFYO0FBQ0g7QUFDRCxnQkFBSXBCLE1BQU1HLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFBRSx1QkFBT0gsTUFBTSxDQUFOLENBQVA7QUFBaUI7QUFDM0MsbUJBQU9BLEtBQVA7QUFDSDs7O2tDQUVTO0FBQ04sZ0JBQUlxQixNQUFNLEtBQUtWLElBQUwsRUFBVjtBQUNBLGdCQUFJVSxRQUFRLElBQVosRUFBa0I7QUFDZCx1QkFBTyxJQUFQO0FBQ0g7QUFDRCxtQkFBTyxLQUFLVixJQUFMLEdBQVksQ0FBWixDQUFQO0FBQ0g7OztnQ0FFTztBQUNKLG1CQUFRLEtBQUtYLEtBQUwsQ0FBV0csTUFBWCxLQUFzQixDQUE5QjtBQUNIOzs7K0JBRU07QUFDSCxpQkFBS0gsS0FBTCxDQUFXZ0IsT0FBWCxDQUFtQixVQUFDdkIsSUFBRCxFQUFVO0FBQUVBLHFCQUFLcU0sSUFBTDtBQUFhLGFBQTVDO0FBQ0g7OzttQ0FFVTtBQUNQLG1CQUFPLEtBQUs5TCxLQUFMLENBQVdpQixHQUFYLENBQWUsVUFBQ3hCLElBQUQsRUFBVTtBQUFFLHVCQUFPQSxLQUFLTixRQUFMLEVBQVA7QUFBd0IsYUFBbkQsRUFBcUQ0QyxJQUFyRCxFQUFQO0FBQ0g7Ozs7OztrQkEvRWdCdUosSTs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7Ozs7Ozs7Ozs7SUFFcUJTLFk7OztBQUNqQiwwQkFBWWxGLElBQVosRUFBa0I7QUFBQTs7QUFBQSxnSUFDUixDQURRLEVBQ0wsSUFESyxFQUNDLEtBREQ7O0FBRWQsY0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBRmM7QUFHakI7Ozs7bUNBRVU7QUFDUCxtQkFBUSx5QkFBUjtBQUNIOzs7bUNBRVU7QUFDUCxtQkFBTyxXQUFQO0FBQ0g7Ozs7OztrQkFaZ0JrRixZOzs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVxQkMsWTs7Ozs7OztzQ0FDSXpMLEksRUFBTTtBQUN2QixnQkFBSW1CLFNBQVMsRUFBYjs7QUFFQTtBQUNBQSxtQkFBT2pCLElBQVAsQ0FBWSx5QkFBY0YsSUFBZCxDQUFaOztBQUVBO0FBQ0FtQixtQkFBT2pCLElBQVAsQ0FBWSwwQkFBZUYsSUFBZixFQUFxQixTQUFyQixDQUFaO0FBQ0E7QUFDQW1CLG1CQUFPakIsSUFBUCxDQUFZLDBCQUFlRixJQUFmLEVBQXFCLE9BQXJCLENBQVo7QUFDQTtBQUNBbUIsbUJBQU9qQixJQUFQLENBQVksMEJBQWVGLElBQWYsRUFBcUIsT0FBckIsQ0FBWjtBQUNBO0FBQ0FtQixtQkFBT2pCLElBQVAsQ0FBWSwwQkFBZUYsSUFBZixFQUFxQixNQUFyQixDQUFaOztBQUVBO0FBQ0EsaUJBQUssSUFBSWEsUUFBUSxDQUFqQixFQUFvQkEsUUFBUSxDQUE1QixFQUErQkEsT0FBL0IsRUFBd0M7QUFDcENNLHVCQUFPakIsSUFBUCxDQUFZLG9CQUFVRixJQUFWLENBQVo7QUFDSDs7QUFFRCxtQkFBT21CLE1BQVA7QUFDSDs7O3FDQUVtQk4sSyxFQUFPO0FBQ3ZCLG1CQUFPLEtBQUs2SyxTQUFMLENBQWU3SyxLQUFmLE1BQTBCLFlBQWpDO0FBQ0g7Ozt1Q0FFcUJBLEssRUFBTztBQUN6QixtQkFBTyxLQUFLNkssU0FBTCxDQUFlN0ssS0FBZixNQUEwQixjQUFqQztBQUNIOzs7b0NBRWtCQSxLLEVBQU87QUFDdEIsbUJBQU8sS0FBSzZLLFNBQUwsQ0FBZTdLLEtBQWYsTUFBMEIsV0FBakM7QUFDSDs7O2tDQUVnQkEsSyxFQUFPO0FBQ3BCLGdCQUFJQSxTQUFTLENBQWIsRUFBZ0I7QUFDWix1QkFBTyxjQUFQO0FBQ0gsYUFGRCxNQUVPLElBQUlBLFNBQVMsQ0FBYixFQUFnQjtBQUNuQix1QkFBTyxZQUFQO0FBQ0gsYUFGTSxNQUVBO0FBQ0gsdUJBQU8sV0FBUDtBQUNIO0FBQ0o7Ozs7OztrQkE1Q2dCNEssWTs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7Ozs7Ozs7Ozs7SUFFcUJFLFE7OztBQUNqQixzQkFBWWxOLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDVCxDQURTLEVBQ04sSUFETSxFQUNBLEtBREE7O0FBRWYsY0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBRmU7QUFHbEI7Ozs7bUNBRVU7QUFDUCxtQkFBUSxzQkFBc0IsS0FBS0EsS0FBTCxDQUFXZSxnQkFBWCxFQUF0QixHQUFzRCxHQUE5RDtBQUNIOzs7bUNBRVU7QUFDUCxtQkFBTyxRQUFRLEtBQUtmLEtBQUwsQ0FBV2UsZ0JBQVgsRUFBUixHQUF3QyxJQUEvQztBQUNIOzs7Ozs7a0JBWmdCbU0sUTs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0lBQ3FCQyxVOzs7QUFDakIsd0JBQVk1TCxJQUFaLEVBQWtCMUIsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQSw0SEFDZjBCLElBRGU7O0FBRXJCLGNBQUsxQixLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLMkIsUUFBTCxHQUFnQixvQ0FBaEI7QUFIcUI7QUFJeEI7Ozs7bUNBRVU7QUFBQTs7QUFDUCxnQkFBSTRMLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxTQUFELEVBQVk1TSxJQUFaLEVBQWtCMkIsS0FBbEIsRUFBeUJrTCxHQUF6QixFQUFpQztBQUM5Qyx1QkFBT0QsYUFBYzVNLEtBQUtiLEtBQUwsS0FBZXdDLFFBQVEsQ0FBckMsSUFBNEMzQixLQUFLWixLQUFMLEtBQWUsT0FBS0EsS0FBdkU7QUFDSCxhQUZEO0FBR0EsbUJBQU8sS0FBS21CLEtBQUwsQ0FBVytLLE1BQVgsQ0FBa0JxQixVQUFsQixFQUE4QixJQUE5QixLQUF3QyxLQUFLcE0sS0FBTCxDQUFXRyxNQUFYLEtBQXNCLEVBQXJFO0FBQ0g7Ozs7OztrQkFaZ0JnTSxVOzs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7Ozs7Ozs7OztJQUVxQkksYTs7O0FBQ2pCLDJCQUFZQyxVQUFaLEVBQXdCO0FBQUE7O0FBQUEsa0lBQ2QsQ0FEYyxFQUNYQSxXQUFXM04sS0FEQSxFQUNPLEtBRFA7O0FBRXBCLGNBQUtHLEtBQUwsR0FBYXdOLFVBQWI7QUFDQSxjQUFLM04sS0FBTCxHQUFhMk4sV0FBVzNOLEtBQXhCO0FBSG9CO0FBSXZCOzs7O21DQUVVO0FBQ1AsbUJBQVEsYUFBYSxLQUFLQSxLQUFsQixHQUEwQixHQUFsQztBQUNIOzs7bUNBRVU7QUFDUCxtQkFBTyxRQUFRLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLEVBQWNRLFdBQWQsRUFBUixHQUFzQyxJQUE3QztBQUNIOzs7Ozs7a0JBYmdCa04sYTs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7SUFFcUJFLFM7Ozs7Ozs7Ozs7OzhDQUVLO0FBQ2xCLGdCQUFJNUYsT0FBTyxLQUFLdEcsSUFBTCxDQUFVc0csSUFBckI7QUFDQSxpQkFBSzdHLEtBQUwsQ0FBV3lCLE9BQVgsR0FBcUJULE9BQXJCLENBQTZCLFVBQUN2QixJQUFELEVBQVU7QUFDbkNBLHFCQUFLWCxPQUFMLEdBQWUsS0FBZjtBQUNBK0gscUJBQUtwRyxJQUFMLENBQVVoQixJQUFWO0FBQ0gsYUFIRDtBQUlBLGlCQUFLTyxLQUFMLEdBQWEsRUFBYjtBQUNIOzs7Ozs7a0JBVGdCeU0sUzs7Ozs7Ozs7Ozs7Ozs7O0FDRHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQyxLO0FBQ2pCLG1CQUFZbk0sSUFBWixFQUFrQjBCLElBQWxCLEVBQXdCK0csR0FBeEIsRUFBNkI7QUFBQTs7QUFDekIsYUFBS3pJLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtBLElBQUwsQ0FBVTJCLEtBQVYsR0FBa0IsSUFBbEI7QUFDQSxhQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFLK0csR0FBTCxHQUFXQSxHQUFYO0FBQ0EsYUFBSzJELGNBQUw7QUFDQSxhQUFLQyxXQUFMLEdBQW1CLDJCQUFnQixLQUFLM0ssSUFBckIsRUFBMkIsSUFBM0IsQ0FBbkI7QUFDQSxhQUFLK0UsV0FBTCxHQUFtQixnQ0FBb0IsS0FBSy9FLElBQXpCLEVBQStCLElBQS9CLENBQW5CO0FBQ0g7Ozs7eUNBRWdCO0FBQ2IsZ0JBQUlXLGNBQWMseUJBQWxCO0FBQ0EsaUJBQUtGLFdBQUwsR0FBbUIsS0FBS1QsSUFBTCxDQUFVWSxPQUFWLENBQWtCQyxTQUFsQixDQUE0QkYsV0FBNUIsQ0FBbkI7QUFDSDs7OytDQUVzQjtBQUNuQixnQkFBSWlLLGVBQWUsS0FBS0Msd0JBQUwsRUFBbkI7O0FBRUEsZ0JBQUlDLFdBQVcsS0FBS0gsV0FBTCxDQUFpQkksaUJBQWpCLEVBQWY7QUFDQSxpQkFBS2hFLEdBQUwsQ0FBU2lFLEtBQVQsQ0FBZUMsUUFBZixDQUF3QkgsUUFBeEI7QUFDSDs7O3dDQUVlO0FBQ1osaUJBQUssSUFBSTVCLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDeEIscUJBQUtnQyxTQUFMLENBQWVoQyxDQUFmO0FBQ0g7QUFDSjs7O2tDQUVTcEYsVSxFQUFZO0FBQ2xCLGdCQUFJL0csUUFBUSxLQUFLdUIsSUFBTCxDQUFVbUIsTUFBVixDQUFpQnFFLGFBQWEsQ0FBOUIsQ0FBWjs7QUFFQSxpQkFBS3FILHFCQUFMLENBQTJCcE8sS0FBM0I7QUFDQSxpQkFBS3FPLGlCQUFMLENBQXVCck8sS0FBdkI7QUFDSDs7O3FEQUU0QjtBQUFBOztBQUN6QixpQkFBS3VCLElBQUwsQ0FBVW1CLE1BQVYsQ0FBaUJwQyxLQUFqQixDQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QjBCLE9BQTdCLENBQXFDLFVBQUNoQyxLQUFELEVBQVFvQyxLQUFSLEVBQWtCO0FBQ25ELG9CQUFJcEMsTUFBTXdCLFFBQU4sQ0FBZThNLE9BQWYsRUFBSixFQUE4QjtBQUMxQjtBQUNIOztBQUVELG9CQUFJQyxVQUFVLHNDQUF5QixNQUFLdEwsSUFBOUIsUUFBZDtBQUNBLG9CQUFJMUMsT0FBT2dPLFFBQVFDLFVBQVIsQ0FBbUJ4TyxNQUFNd0IsUUFBekIsRUFBbUNZLEtBQW5DLENBQVg7QUFDQSxzQkFBSzRILEdBQUwsQ0FBU2lFLEtBQVQsQ0FBZUMsUUFBZixDQUF3QjNOLElBQXhCO0FBQ0gsYUFSRDtBQVNIOzs7bURBRTBCO0FBQ3ZCLGdCQUFJLEtBQUtnQixJQUFMLENBQVVzRyxJQUFWLENBQWVyRyxRQUFmLENBQXdCOE0sT0FBeEIsRUFBSixFQUF1QztBQUNuQztBQUNIO0FBQ0QsZ0JBQUlHLHNCQUFzQixxQ0FBd0IsS0FBS3hMLElBQTdCLEVBQW1DLElBQW5DLENBQTFCO0FBQ0F3TCxnQ0FBb0JELFVBQXBCO0FBQ0EsaUJBQUt4RSxHQUFMLENBQVNpRSxLQUFULENBQWVDLFFBQWYsQ0FBd0IsS0FBSzNNLElBQUwsQ0FBVXNHLElBQVYsQ0FBZXJHLFFBQWYsQ0FBd0JqQixJQUFoRDtBQUNIOzs7OENBRXFCUCxLLEVBQU87QUFDekIsZ0JBQUkwTyxjQUFjLGdDQUFvQixLQUFLekwsSUFBekIsRUFBK0IsSUFBL0IsQ0FBbEI7QUFDQXlMLHdCQUFZRixVQUFaLENBQXVCeE8sTUFBTXdCLFFBQTdCO0FBQ0EsaUJBQUt3SSxHQUFMLENBQVNpRSxLQUFULENBQWVDLFFBQWYsQ0FBd0JsTyxNQUFNd0IsUUFBTixDQUFlakIsSUFBdkM7QUFDSDs7OzBDQUVpQlAsSyxFQUFPO0FBQUE7O0FBQ3JCQSxrQkFBTWdCLEtBQU4sQ0FBWWdCLE9BQVosQ0FBb0IsVUFBQ3ZCLElBQUQsRUFBVTtBQUMxQix1QkFBS3VILFdBQUwsQ0FBaUJ3RyxVQUFqQixDQUE0Qi9OLElBQTVCO0FBQ0EsdUJBQUt1SixHQUFMLENBQVNpRSxLQUFULENBQWVDLFFBQWYsQ0FBd0J6TixLQUFLRixJQUE3QjtBQUNILGFBSEQ7QUFJSDs7Ozs7O2tCQXBFZ0JtTixLOzs7Ozs7Ozs7Ozs7Ozs7QUNQckI7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJpQixXO0FBQ2pCLHlCQUFZMUwsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDckIsYUFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsYUFBSzNCLElBQUwsR0FBWSxLQUFLMkIsS0FBTCxDQUFXM0IsSUFBdkI7QUFDQSxhQUFLc0csSUFBTCxHQUFZLEtBQUt0RyxJQUFMLENBQVVzRyxJQUF0QjtBQUNBLGFBQUtDLFNBQUwsR0FBaUIsS0FBS3ZHLElBQUwsQ0FBVXVHLFNBQTNCO0FBQ0g7Ozs7NENBRW1CO0FBQ2hCLGdCQUFJckgsT0FBTyxLQUFLb0gsSUFBTCxDQUFVbEcsSUFBVixFQUFYO0FBQ0EsZ0JBQUlsQixTQUFTLElBQWIsRUFBbUI7QUFDZix1QkFBTyxJQUFQO0FBQ0g7O0FBRUQsZ0JBQUlBLEtBQUs2TixPQUFMLE9BQW1CLEtBQXZCLEVBQThCO0FBQzFCLHFCQUFLcEwsS0FBTCxDQUFXOEUsV0FBWCxDQUF1QjdFLGVBQXZCLENBQXVDMUMsSUFBdkM7QUFDQSw0Q0FBZ0I0QyxhQUFoQixDQUE4QjVDLEtBQUtGLElBQW5DO0FBQ0FFLHFCQUFLb0gsSUFBTCxHQUFZLEtBQUtBLElBQWpCO0FBQ0FwSCxxQkFBS3FILFNBQUwsR0FBaUIsS0FBS0EsU0FBdEI7QUFDSDs7QUFFRCxpQkFBSzVFLEtBQUwsQ0FBVzhFLFdBQVgsQ0FBdUI0RyxvQkFBdkIsQ0FBNENuTyxLQUFLRixJQUFqRDtBQUNBLGlCQUFLa0csV0FBTCxDQUFpQmhHLEtBQUtGLElBQXRCO0FBQ0EsaUJBQUtzTyxlQUFMLENBQXFCcE8sS0FBS0YsSUFBMUI7O0FBRUEsbUJBQU9FLEtBQUtGLElBQVo7QUFDSDs7O3dDQUVlQSxJLEVBQU07QUFDbEJBLGlCQUFLMEQsTUFBTCxDQUFZQyxHQUFaLENBQWdCLENBQWhCO0FBQ0EzRCxpQkFBSzBFLENBQUwsR0FBUyxFQUFUO0FBQ0ExRSxpQkFBSzhFLENBQUwsR0FBUyxFQUFUO0FBQ0g7OztvQ0FFVzlFLEksRUFBTTtBQUNkQSxpQkFBS1QsT0FBTCxHQUFlLElBQWY7QUFDSDs7Ozs7O2tCQXJDZ0I2TyxXOzs7Ozs7Ozs7Ozs7Ozs7OztJQ0ZBRyxtQjtBQUNqQixpQ0FBWTdMLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3JCLGFBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQUt6QyxJQUFMLEdBQVksS0FBS3lDLEtBQUwsQ0FBVzNCLElBQVgsQ0FBZ0JzRyxJQUFoQixDQUFxQnJHLFFBQWpDO0FBQ0g7Ozs7cUNBRVk7QUFDVCxnQkFBSWpCLE9BQU8sS0FBSzRDLGVBQUwsRUFBWDtBQUNBLGlCQUFLNEwsYUFBTDtBQUNBLG1CQUFPeE8sSUFBUDtBQUNIOzs7MENBRWlCO0FBQ2QsZ0JBQUlFLE9BQU8sS0FBS0EsSUFBaEI7QUFDQSxnQkFBSW1KLFVBQVUsS0FBS25HLFVBQUwsRUFBZDtBQUNBLGdCQUFJbEQsT0FBTyxJQUFJLEtBQUswQyxJQUFMLENBQVVVLE1BQWQsQ0FBcUJpRyxPQUFyQixDQUFYO0FBQ0FySixpQkFBS0UsSUFBTCxHQUFZQSxJQUFaO0FBQ0FBLGlCQUFLRixJQUFMLEdBQVlBLElBQVo7O0FBRUFBLGlCQUFLc0osSUFBTCxHQUFZLFFBQVosQ0FQYyxDQU9POztBQUVyQnRKLGlCQUFLMEUsQ0FBTCxHQUFTLEVBQVQ7QUFDQTFFLGlCQUFLOEUsQ0FBTCxHQUFTLEVBQVQ7O0FBRUEsbUJBQU85RSxJQUFQO0FBQ0g7OztxQ0FFWTtBQUNULGdCQUFJcUQsY0FBYyw4QkFBbEI7QUFDQSxtQkFBTyxLQUFLWCxJQUFMLENBQVVZLE9BQVYsQ0FBa0JDLFNBQWxCLENBQTRCRixXQUE1QixDQUFQO0FBQ0g7Ozt3Q0FFZTtBQUNaLGdCQUFJckQsT0FBTyxLQUFLRSxJQUFMLENBQVVGLElBQXJCO0FBQ0FBLGlCQUFLd0QsV0FBTCxHQUFtQixJQUFuQixDQUZZLENBRVk7QUFDeEJ4RCxpQkFBS3lELFVBQUwsR0FBa0IsSUFBbEI7QUFDQXpELGlCQUFLNEQsRUFBTCxDQUFRLE9BQVIsRUFBaUIsS0FBSzZLLFVBQXRCO0FBQ0g7OzttQ0FFVXZILEssRUFBTztBQUNkQSxrQkFBTUUsZUFBTjs7QUFFQSxnQkFBSXBILE9BQU9rSCxNQUFNRyxhQUFqQjtBQUNBLGdCQUFJbkgsT0FBT0YsS0FBS0UsSUFBaEI7QUFDQSxnQkFBSW9ILE9BQU9wSCxLQUFLb0gsSUFBaEI7QUFDQSxnQkFBSXRHLE9BQU9zRyxLQUFLdEcsSUFBaEI7QUFDQSxnQkFBSXVHLFlBQVl2RyxLQUFLdUcsU0FBckI7O0FBRUFBLHNCQUFVbUgsbUJBQVY7O0FBRUFwSCxpQkFBSzdHLEtBQUwsQ0FBV2dCLE9BQVgsQ0FBbUIsVUFBQ3ZCLElBQUQsRUFBVTtBQUN6QkEscUJBQUtYLE9BQUwsR0FBZSxLQUFmO0FBQ0FXLHFCQUFLRixJQUFMLENBQVVULE9BQVYsR0FBb0IsS0FBcEI7QUFDQVcscUJBQUtGLElBQUwsQ0FBVTJILFVBQVYsQ0FBcUJ6SCxLQUFLRixJQUFMLENBQVVtRCxXQUEvQjtBQUNILGFBSkQ7O0FBTUEsZ0JBQUlxSyxXQUFXeE0sS0FBSzJCLEtBQUwsQ0FBVzBLLFdBQVgsQ0FBdUJJLGlCQUF2QixFQUFmO0FBQ0F6TSxpQkFBSzJCLEtBQUwsQ0FBVzhHLEdBQVgsQ0FBZWlFLEtBQWYsQ0FBcUJDLFFBQXJCLENBQThCSCxRQUE5QjtBQUNIOzs7Ozs7a0JBM0RnQmUsbUI7Ozs7Ozs7Ozs7Ozs7OztBQ0RyQjs7Ozs7Ozs7Ozs7O0lBRXFCSSxvQjs7Ozs7Ozs7Ozs7bUNBQ056TyxJLEVBQU0yQixLLEVBQU87QUFDcEIsZ0JBQUk3QixPQUFPLEtBQUs0QyxlQUFMLENBQXFCMUMsSUFBckIsRUFBMkIyQixLQUEzQixDQUFYO0FBQ0EsaUJBQUtvQyxzQkFBTCxDQUE0QmpFLElBQTVCO0FBQ0EsbUJBQU9BLElBQVA7QUFDSDs7O3dDQUVlRSxJLEVBQU0yQixLLEVBQU87QUFDekIsZ0JBQUl3SCxVQUFVLEtBQUtuRyxVQUFMLENBQWdCaEQsSUFBaEIsQ0FBZDtBQUNBLGdCQUFJRixPQUFPLElBQUksS0FBSzBDLElBQUwsQ0FBVVUsTUFBZCxDQUFxQmlHLE9BQXJCLENBQVg7QUFDQXJKLGlCQUFLc0osSUFBTCxHQUFZLFFBQVosQ0FIeUIsQ0FHSjtBQUNyQnRKLGlCQUFLRSxJQUFMLEdBQVlBLElBQVo7QUFDQUEsaUJBQUtGLElBQUwsR0FBWUEsSUFBWjs7QUFFQUEsaUJBQUswRSxDQUFMLEdBQVMsTUFBTTdDLFFBQVEsRUFBdkI7QUFDQTdCLGlCQUFLOEUsQ0FBTCxHQUFTLEVBQVQ7O0FBRUEsbUJBQU85RSxJQUFQO0FBQ0g7OzttQ0FFVUUsSSxFQUFNO0FBQ2IsZ0JBQUltRCxjQUFjLDhCQUE4Qm5ELEtBQUtaLEtBQW5DLEdBQTJDLE1BQTdEO0FBQ0EsbUJBQU8sS0FBS29ELElBQUwsQ0FBVVksT0FBVixDQUFrQkMsU0FBbEIsQ0FBNEJGLFdBQTVCLENBQVA7QUFDSDs7Ozs7O2tCQXZCZ0JzTCxvQiIsImZpbGUiOiJwdWJsaWMvanMvcGF0aWVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3ODM5N2Y4Njc1ZDU2ODY1YzZjOCIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIGNvbG9yLCB2aXNpYmxlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbFxuICAgICAgICB0aGlzLnN0YWNrID0gbnVsbFxuICAgIH1cblxuICAgIGRpc3AoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9TdHJpbmcoKSlcbiAgICB9XG5cbiAgICBlYXN5RGlzcCgpIHtcbiAgICAgICAgbGV0IHN0ciA9ICcnXG5cbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RyID0gJ1gnXG4gICAgICAgIH1cbiAgICAgICAgc3RyICs9IHRoaXMudmFsdWVcbiAgICAgICAgc3RyICs9IHRoaXMuY29sb3JbMF0udG9VcHBlckNhc2UoKVxuICAgICAgICByZXR1cm4gXCInXCIgKyBzdHIgKyBcIidcIlxuICAgIH1cblxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoJ1sgJyArIHRoaXMudmFsdWUgKyAnICcgKyB0aGlzLmNvbG9yLnNsaWNlKDAsNCkgKyAnXScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKCdbWCAnICsgdGhpcy52YWx1ZSArICcgJyArIHRoaXMuY29sb3Iuc2xpY2UoMCw0KSArICddJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc1ZpZXcoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy52aWV3ICE9PSB1bmRlZmluZWQpXG4gICAgfVxuXG4gICAgaXNBY2UoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlID09PSAxKSAmJiAodGhpcy5jb2xvciA9PT0gY29sb3IpXG4gICAgfVxuXG4gICAgZm9sbG93cyhjYXJkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvbGxvd3NWYWx1ZShjYXJkKSAmJiB0aGlzLmhhc1NhbWVDb2xvcihjYXJkKVxuICAgIH1cblxuICAgIGZvbGxvd3NXaXRoT3Bwb3NpdGVDb2xvcihjYXJkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvbGxvd3NWYWx1ZShjYXJkKSAmJiB0aGlzLmhhc09wcG9zaXRlQ29sb3IoY2FyZClcbiAgICB9XG5cbiAgICBmb2xsb3dzVmFsdWUoY2FyZCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gKGNhcmQudmFsdWUgKyAxKVxuICAgIH1cblxuICAgIGhhc1NhbWVDb2xvcihjYXJkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yID09PSBjYXJkLmNvbG9yXG4gICAgfVxuXG4gICAgaGFzT3Bwb3NpdGVDb2xvcihjYXJkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWxDb2xvcigpICE9PSBjYXJkLnJlYWxDb2xvcigpXG4gICAgfVxuXG4gICAgcmVhbENvbG9yKCkge1xuICAgICAgICBpZiAoKHRoaXMuY29sb3IgPT09ICdoZWFydCcpIHx8ICh0aGlzLmNvbG9yID09PSAnZGlhbW9uZCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlZCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnYmxhY2snXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b3BDYXJkc0NvdW50KCkge1xuICAgICAgICBpZiAodGhpcy5uZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDEgKyB0aGlzLm5leHQudG9wQ2FyZHNDb3VudCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJbmRleFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMuc3RhY2suZ2V0SW5kZXhQb3NpdGlvbigpLCB0aGlzLnN0YWNrLmNhcmRzLmluZGV4T2YodGhpcyldXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc3lCdWlsZChzdHIpIHtcbiAgICAgICAgbGV0IHZpc2libGUgPSB0cnVlXG4gICAgICAgIGxldCBjb2xvciwgdmFsdWVcblxuICAgICAgICAvLyB2aXNpYmlsaXR5XG4gICAgICAgIGlmIChzdHJbMF0gPT09ICdYJykge1xuICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlXG4gICAgICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMSwgNSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbG9yXG4gICAgICAgIGNvbG9yID0gdGhpcy5nZXRDb2xvckZyb21Jbml0aWFsKHN0cltzdHIubGVuZ3RoIC0gMV0pXG4gICAgICAgIHN0ciA9IHN0ci5zbGljZSgwLCBzdHIubGVuZ3RoIC0gMSlcblxuICAgICAgICAvLyB2YWx1ZVxuICAgICAgICB2YWx1ZSA9IE51bWJlcihzdHIpXG5cbiAgICAgICAgcmV0dXJuIG5ldyBDYXJkKHZhbHVlLCBjb2xvciwgdmlzaWJsZSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29sb3JGcm9tSW5pdGlhbChpbml0aWFsKSB7XG4gICAgICAgIHN3aXRjaCAoaW5pdGlhbCkge1xuICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgIHJldHVybiAnaGVhcnQnXG4gICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgcmV0dXJuICdkaWFtb25kJ1xuICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIHJldHVybiAnc3BhZGUnXG4gICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgcmV0dXJuICdjbHViJ1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgJ1VucmVjb2duaXplZCBpbml0YWwnXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2NhcmQuanMiLCJpbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnXG5pbXBvcnQgQ2FyZFplcm8gZnJvbSAnLi9jYXJkX3plcm8nXG5cbi8vIFRoaXMgaXMgYSBzdGFjayBvZiBjYXJkc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2sge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICAgICAgdGhpcy5jYXJkWmVybyA9IG5ldyBDYXJkWmVybyh0aGlzKVxuICAgIH1cblxuICAgIHB1c2goY2FyZCkge1xuICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZClcbiAgICAgICAgY2FyZC5zdGFjayA9IHRoaXNcblxuICAgICAgICBsZXQgbGFzdFR3byA9IHRoaXMubGFzdCgyKVxuICAgICAgICBpZiAobGFzdFR3byAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGFzdFR3b1swXS5uZXh0ID0gbGFzdFR3b1sxXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9wKHN0YWNrLCBxdWFudGl0eSA9IDEpIHtcbiAgICAgICAgbGV0IGNhcmRzID0gdGhpcy5jYXJkcy5zcGxpY2UodGhpcy5jYXJkcy5sZW5ndGggLSBxdWFudGl0eSwgcXVhbnRpdHkpXG4gICAgICAgIGxldCBsYXN0Q2FyZCA9IHRoaXMubGFzdE9uZSgpXG4gICAgICAgIGlmIChsYXN0Q2FyZCkge1xuICAgICAgICAgICAgbGFzdENhcmQubmV4dCA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goY2FyZClcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGRpc3AoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9TdHJpbmcoKSlcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHMubWFwKChjYXJkKSA9PiB7IHJldHVybiBjYXJkLnRvU3RyaW5nKCkgfSlcbiAgICB9XG5cbiAgICBlYXN5RGlzcCgpIHtcbiAgICAgICAgbGV0IGNhcmRzID0gdGhpcy5jYXJkc1xuICAgICAgICByZXR1cm4gU3RhY2suYXJyYXlFYXN5RGlzcChjYXJkcylcbiAgICB9XG5cbiAgICBzdGF0aWMgYXJyYXlFYXN5RGlzcChjYXJkcykge1xuICAgICAgICBsZXQgbGlzdCA9IGNhcmRzLm1hcCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhcmQuZWFzeURpc3AoKVxuICAgICAgICB9KVxuICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3Quam9pbignLCAnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0KHF1YW50aXR5ID0gMSkge1xuICAgICAgICBpZiAodGhpcy5lbXB0eSgpKSB7IHJldHVybiBudWxsIH1cbiAgICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoIDwgcXVhbnRpdHkpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgICAgIGxldCBjYXJkcyA9IFtdXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gcXVhbnRpdHk7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgY2FyZHMucHVzaCh0aGlzLmNhcmRzW3RoaXMuY2FyZHMubGVuZ3RoIC0gaW5kZXhdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJkc1xuICAgIH1cblxuICAgIGxhc3RPbmUoKSB7XG4gICAgICAgIGxldCByZXMgPSB0aGlzLmxhc3QoKVxuICAgICAgICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3QoKVswXVxuICAgIH1cblxuICAgIGVtcHR5KCkge1xuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIHRydWUgfSBlbHNlIHsgcmV0dXJuIGZhbHNlIH1cbiAgICB9XG5cbiAgICB2aXNpYmxlQ2FyZHNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZUNhcmRzKCkubGVuZ3RoXG4gICAgfVxuXG4gICAgdmlzaWJsZUNhcmRzKCkge1xuICAgICAgICBpZiAodGhpcy5lbXB0eSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuY2FyZHMubGVuZ3RoIC0gMVxuICAgICAgICBsZXQgY2FyZHMgPSBbXVxuICAgICAgICBsZXQgZm91bmROb25WaXNpYmxlQ2FyZCA9IGZhbHNlXG4gICAgICAgIHdoaWxlIChmb3VuZE5vblZpc2libGVDYXJkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jYXJkc1tpbmRleF1cbiAgICAgICAgICAgIGlmIChjLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYXJkcy5wdXNoKGMpXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpbmRleCAtIDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZHMucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgZm91bmROb25WaXNpYmxlQ2FyZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FyZHNcbiAgICB9XG5cbiAgICBnZXRJbmRleFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLnN0YWNrcy5pbmRleE9mKHRoaXMpXG4gICAgfVxuXG4gICAgZWFzeUJ1aWxkKGxpc3QpIHtcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wdXNoKENhcmQuZWFzeUJ1aWxkKGVsZW1lbnQpKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvc3RhY2suanMiLCJpbXBvcnQgQ2FyZFZpZXdTZXJ2aWNlIGZyb20gJy4vY2FyZF92aWV3X3NlcnZpY2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRWaWV3RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IocGl4aSwgYm9hcmQpIHtcbiAgICAgICAgdGhpcy5waXhpID0gcGl4aVxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmRcbiAgICB9XG5cbiAgICBjcmVhdGVWaWV3KGNhcmQpIHtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLmNyZWF0ZUJhc2ljVmlldyhjYXJkKVxuICAgICAgICB0aGlzLm1ha2VWaWV3RHJhZ2dhYmxlKHZpZXcpXG5cbiAgICAgICAgQ2FyZFZpZXdTZXJ2aWNlLmFzc2lnbk1ldGhvZHModmlldylcblxuICAgICAgICB2aWV3LnNldENhcmRUZXh0dXJlKClcbiAgICAgICAgdmlldy5zZXRCb2FyZFBvc2l0aW9uKClcbiAgICB9XG5cbiAgICBjcmVhdGVCYXNpY1ZpZXcoY2FyZCkge1xuICAgICAgICBsZXQgdmlld1xuICAgICAgICBsZXQgZnJvbnRUZXh0dXJlID0gdGhpcy5nZXRUZXh0dXJlKGNhcmQpXG4gICAgICAgIGxldCBiYWNrVGV4dHVyZSA9IHRoaXMuYm9hcmQuYmFja1RleHR1cmVcblxuICAgICAgICBpZiAoY2FyZC52aXNpYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB2aWV3ID0gbmV3IHRoaXMucGl4aS5TcHJpdGUoZnJvbnRUZXh0dXJlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlldyA9IG5ldyB0aGlzLnBpeGkuU3ByaXRlKGJhY2tUZXh0dXJlKVxuICAgICAgICB9XG5cbiAgICAgICAgdmlldy5mcm9udFRleHR1cmUgPSBmcm9udFRleHR1cmVcbiAgICAgICAgdmlldy5iYWNrVGV4dHVyZSA9IGJhY2tUZXh0dXJlXG5cbiAgICAgICAgdmlldy5jYXJkID0gY2FyZFxuICAgICAgICBjYXJkLnZpZXcgPSB2aWV3XG5cbiAgICAgICAgcmV0dXJuIHZpZXdcbiAgICB9XG5cbiAgICBnZXRUZXh0dXJlKGNhcmQpIHtcbiAgICAgICAgbGV0IHRleHR1cmVQYXRoID0gJy4vaW1hZ2VzL2NhcmRzLycgKyBjYXJkLmNvbG9yICsgJy0nICsgY2FyZC52YWx1ZSArICcucG5nJ1xuICAgICAgICByZXR1cm4gdGhpcy5waXhpLlRleHR1cmUuZnJvbUltYWdlKHRleHR1cmVQYXRoKVxuICAgIH1cblxuICAgIG1ha2VWaWV3RHJhZ2dhYmxlKHZpZXcpIHtcbiAgICAgICAgdmlldy5pbnRlcmFjdGl2ZSA9IHRydWUgLy8gdGhpcyB3aWxsIGFsbG93IGl0IHRvIHJlc3BvbmQgdG8gbW91c2UgYW5kIHRvdWNoIGV2ZW50c1xuICAgICAgICB2aWV3LmJ1dHRvbk1vZGUgPSB0cnVlIC8vIHRoaXMgYnV0dG9uIG1vZGUgd2lsbCBtZWFuIHRoZSBoYW5kIGN1cnNvciBhcHBlYXJzIHdoZW4geW91IHJvbGwgb3ZlclxuICAgICAgICB2aWV3LmFuY2hvci5zZXQoMC41LCAwLjIpXG5cbiAgICAgICAgdmlldy5vbignY2xpY2snLCBDYXJkVmlld1NlcnZpY2Uub25DbGljaylcbiAgICAgICAgLm9uKCdwb2ludGVyZG93bicsIENhcmRWaWV3U2VydmljZS5vbkRyYWdTdGFydClcbiAgICAgICAgLm9uKCdwb2ludGVydXAnLCBDYXJkVmlld1NlcnZpY2Uub25EcmFnRW5kKVxuICAgICAgICAub24oJ3BvaW50ZXJtb3ZlJywgQ2FyZFZpZXdTZXJ2aWNlLm9uRHJhZ01vdmUpXG4gICAgICAgIC5vbigncG9pbnRlcnVwb3V0c2lkZScsIENhcmRWaWV3U2VydmljZS5vbkRyYWdFbmQpXG5cbiAgICAgICAgdGhpcy5hZGRDb2xsaXNpb25Qcm9wZXJ0aWVzKHZpZXcpXG4gICAgfVxuXG4gICAgbWFrZUNsaWNrYWJsZUZvckRlY2sodmlldykge1xuICAgICAgICB2aWV3LmludGVyYWN0aXZlID0gdHJ1ZSAvLyB0aGlzIHdpbGwgYWxsb3cgaXQgdG8gcmVzcG9uZCB0byBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzXG4gICAgICAgIHZpZXcuYnV0dG9uTW9kZSA9IHRydWUgLy8gdGhpcyBidXR0b24gbW9kZSB3aWxsIG1lYW4gdGhlIGhhbmQgY3Vyc29yIGFwcGVhcnMgd2hlbiB5b3Ugcm9sbCBvdmVyXG5cbiAgICAgICAgdmlldy5yZW1vdmVBbGxMaXN0ZW5lcnMoKVxuICAgICAgICB2aWV3Lm9uKCdjbGljaycsIENhcmRWaWV3U2VydmljZS5vbkRlY2tDbGljaylcbiAgICB9XG5cbiAgICAvLyBgYWRkQ29sbGlzaW9uUHJvcGVydGllc2AgYWRkcyBleHRyYSBwcm9wZXJ0aWVzIHRvIHNwcml0ZXMgdG8gaGVscFxuICAgIC8vIHNpbXBsaWZ5IHRoZSBjb2xsaXNpb24gY29kZS4gSXQgd29uJ3QgYWRkIHRoZXNlIHByb3BlcnRpZXMgaWYgdGhleVxuICAgIC8vIGFscmVhZHkgZXhpc3Qgb24gdGhlIHNwcml0ZS4gQWZ0ZXIgdGhlc2UgcHJvcGVydGllcyBoYXZlIGJlZW5cbiAgICAvLyBhZGRlZCwgdGhpcyBtZXRob2RzIGFkZHMgYSBCb29sZWFuIHByb3BlcnR5IHRvIHRoZSBzcHJpdGUgY2FsbGVkIGBfYnVtcFByb3BlcnRpZXNBZGRlZGBcbiAgICAvLyBhbmQgc2V0cyBpdCB0byBgdHJ1ZWAgdG8gZmxhZyB0aGF0IHRoZSBzcHJpdGUgaGFzIHRoZXNlXG4gICAgLy8gbmV3IHByb3BlcnRpZXNcbiAgICBhZGRDb2xsaXNpb25Qcm9wZXJ0aWVzKHNwcml0ZSkge1xuICAgICAgICAvLyBBZGQgcHJvcGVydGllcyB0byBQaXhpIHNwcml0ZXNcbiAgICAgICAgLy8gaWYgKHRoaXMucmVuZGVyZXIgPT09IFwicGl4aVwiKSB7XG5cbiAgICAgICAgaWYgKHNwcml0ZS5neCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ByaXRlLCBcImd4XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiBzcHJpdGUuZ2V0R2xvYmFsUG9zaXRpb24oKS54IH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ByaXRlLmd5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwiZ3lcIiwge1xuICAgICAgICAgICAgICAgIGdldCgpe3JldHVybiBzcHJpdGUuZ2V0R2xvYmFsUG9zaXRpb24oKS55fSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ByaXRlLmNlbnRlclggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJjZW50ZXJYXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKXtyZXR1cm4gc3ByaXRlLnggKyBzcHJpdGUud2lkdGggLyAyfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ByaXRlLmNlbnRlclkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJjZW50ZXJZXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKXtyZXR1cm4gc3ByaXRlLnkgKyBzcHJpdGUuaGVpZ2h0IC8gMn0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5oYWxmV2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJoYWxmV2lkdGhcIiwge1xuICAgICAgICAgICAgICAgIGdldCgpe3JldHVybiBzcHJpdGUud2lkdGggLyAyfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ByaXRlLmhhbGZIZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJoYWxmSGVpZ2h0XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKXtyZXR1cm4gc3ByaXRlLmhlaWdodCAvIDJ9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcHJpdGUueEFuY2hvck9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ByaXRlLCBcInhBbmNob3JPZmZzZXRcIiwge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcml0ZS5hbmNob3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwcml0ZS53aWR0aCAqIHNwcml0ZS5hbmNob3IueFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS55QW5jaG9yT2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwieUFuY2hvck9mZnNldFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ByaXRlLmFuY2hvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ByaXRlLmhlaWdodCAqIHNwcml0ZS5hbmNob3IueVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5jaXJjdWxhciAmJiBzcHJpdGUucmFkaXVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwicmFkaXVzXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiBzcHJpdGUud2lkdGggLyAyfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGEgQm9vbGVhbiBgX2J1bXBQcm9wZXJ0aWVzQWRkZWRgIHByb3BlcnR5IHRvIHRoZSBzcHJpdGUgdG8gZmxhZyBpdFxuICAgICAgICAvLyBhcyBoYXZpbmcgdGhlc2UgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgc3ByaXRlLl9idW1wUHJvcGVydGllc0FkZGVkID0gdHJ1ZVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L2NhcmRfdmlld19mYWN0b3J5LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkVmlld1NlcnZpY2Uge1xuICAgIHN0YXRpYyBhc3NpZ25NZXRob2RzKHZpZXcpIHtcbiAgICAgICAgdmlldy5oaXRUZXN0UmVjdGFuZ2xlID0gdGhpcy5oaXRUZXN0UmVjdGFuZ2xlXG5cbiAgICAgICAgdmlldy5zZXRCb2FyZFBvc2l0aW9uID0gdGhpcy5zZXRCb2FyZFBvc2l0aW9uLmJpbmQodmlldylcbiAgICAgICAgdmlldy5zZXRQbGF5aW5nU3RhY2tQb3NpdGlvbiA9IHRoaXMuc2V0UGxheWluZ1N0YWNrUG9zaXRpb24uYmluZCh2aWV3KVxuICAgICAgICB2aWV3LnNldENvbG9yU3RhY2tQb3NpdGlvbiA9IHRoaXMuc2V0Q29sb3JTdGFja1Bvc2l0aW9uLmJpbmQodmlldylcbiAgICAgICAgdmlldy5zZXREZWNrU3RhY2tQb3NpdGlvbiA9IHRoaXMuc2V0RGVja1N0YWNrUG9zaXRpb24uYmluZCh2aWV3KVxuXG4gICAgICAgIHZpZXcudmFsaWRhdGVEcmFnID0gdGhpcy52YWxpZGF0ZURyYWcuYmluZCh2aWV3KVxuICAgICAgICB2aWV3LmNhbGN1bGF0ZURlbHRhID0gdGhpcy5jYWxjdWxhdGVEZWx0YS5iaW5kKHZpZXcpXG4gICAgICAgIHZpZXcubWFrZVZpc2libGUgPSB0aGlzLm1ha2VWaXNpYmxlLmJpbmQodmlldylcbiAgICAgICAgdmlldy5tYWtlTm90VmlzaWJsZSA9IHRoaXMubWFrZU5vdFZpc2libGUuYmluZCh2aWV3KVxuICAgICAgICB2aWV3LnNldENhcmRUZXh0dXJlID0gdGhpcy5zZXRDYXJkVGV4dHVyZS5iaW5kKHZpZXcpXG4gICAgICAgIHZpZXcubW92ZVRvcFppbmRleCA9IHRoaXMubW92ZVRvcFppbmRleC5iaW5kKHZpZXcpXG5cbiAgICAgICAgdmlldy51cGRhdGVCb2FyZFBvc2l0aW9uQW5kTmV4dCA9IHRoaXMudXBkYXRlQm9hcmRQb3NpdGlvbkFuZE5leHQuYmluZCh2aWV3KVxuICAgICAgICB2aWV3LnVwZGF0ZURyYWdTZXR0aW5nc0FuZE5leHQgPSB0aGlzLnVwZGF0ZURyYWdTZXR0aW5nc0FuZE5leHQuYmluZCh2aWV3KVxuICAgICAgICB2aWV3LnNldEJvYXJkUG9zaXRpb25BbmROZXh0ID0gdGhpcy5zZXRCb2FyZFBvc2l0aW9uQW5kTmV4dC5iaW5kKHZpZXcpXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEJvYXJkUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IFtzdGFja0luZGV4LCBjYXJkSW5kZXhdID0gdGhpcy5jYXJkLmdldEluZGV4UG9zaXRpb24oKVxuICAgICAgICBpZiAoc3RhY2tJbmRleCA+PSA1KSB7XG4gICAgICAgICAgICB0aGlzLnNldFBsYXlpbmdTdGFja1Bvc2l0aW9uKHN0YWNrSW5kZXgsIGNhcmRJbmRleClcbiAgICAgICAgfSBlbHNlIGlmIChzdGFja0luZGV4ID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JTdGFja1Bvc2l0aW9uKHN0YWNrSW5kZXgsIGNhcmRJbmRleClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGVja1N0YWNrUG9zaXRpb24oKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHNldFBsYXlpbmdTdGFja1Bvc2l0aW9uKHN0YWNrSW5kZXgsIGNhcmRJbmRleCkge1xuICAgICAgICB0aGlzLnggPSA1MCArIChzdGFja0luZGV4IC0gNSkgKiA5MFxuICAgICAgICB0aGlzLnkgPSAxMjAgKyBjYXJkSW5kZXggKiAzMFxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRDb2xvclN0YWNrUG9zaXRpb24oc3RhY2tJbmRleCwgY2FyZEluZGV4KSB7XG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwKVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpXG5cbiAgICAgICAgdGhpcy54ID0gMjkwICsgKHN0YWNrSW5kZXggLSAxKSAqIDkwXG4gICAgICAgIHRoaXMueSA9IDEwXG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlY2tTdGFja1Bvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLnggPSAxMjBcbiAgICAgICAgdGhpcy55ID0gMjdcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Qm9hcmRQb3NpdGlvbkFuZE5leHQoKSB7XG4gICAgICAgIHRoaXMuc2V0Qm9hcmRQb3NpdGlvbigpXG5cbiAgICAgICAgaWYgKHRoaXMuY2FyZC5uZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNhcmQubmV4dC52aWV3LnNldEJvYXJkUG9zaXRpb25BbmROZXh0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVCb2FyZFBvc2l0aW9uQW5kTmV4dChkZWx0YVgsIGRlbHRhWSkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnggKyBkZWx0YVhcbiAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgZGVsdGFZXG5cbiAgICAgICAgaWYgKHRoaXMuY2FyZC5uZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNhcmQubmV4dC52aWV3LnVwZGF0ZUJvYXJkUG9zaXRpb25BbmROZXh0KGRlbHRhWCwgZGVsdGFZKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNhbGN1bGF0ZURlbHRhKG5ld1Bvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBbbmV3UG9zaXRpb24ueCAtIHRoaXMueCwgbmV3UG9zaXRpb24ueSAtIHRoaXMueV1cbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlRHJhZ1NldHRpbmdzQW5kTmV4dCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlVG9wWmluZGV4KClcblxuICAgICAgICBpZiAodGhpcy5jYXJkLm5leHQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZC5uZXh0LnZpZXcudXBkYXRlRHJhZ1NldHRpbmdzQW5kTmV4dCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbW92ZVRvcFppbmRleCgpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMucGFyZW50XG4gICAgICAgIGxldCBzaXplID0gY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aFxuICAgICAgICBjb250YWluZXIuc2V0Q2hpbGRJbmRleCh0aGlzLCBzaXplIC0gMSlcbiAgICB9XG5cbiAgICBzdGF0aWMgb25DbGljayhldmVudCkge1xuICAgICAgICBsZXQgY2FyZFZpZXcgPSB0aGlzXG4gICAgICAgIGxldCBjYXJkID0gY2FyZFZpZXcuY2FyZFxuXG4gICAgICAgIGlmIChjYXJkLnZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICBpZiAoY2FyZC5uZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2FyZFZpZXcubWFrZVZpc2libGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG9uRGVja0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgbGV0IGNhcmRWaWV3ID0gZXZlbnQuY3VycmVudFRhcmdldFxuICAgICAgICBsZXQgY2FyZCA9IGNhcmRWaWV3LmNhcmRcbiAgICAgICAgbGV0IGRlY2sgPSBjYXJkLmRlY2tcbiAgICAgICAgbGV0IGRlY2tTdGFjayA9IGNhcmQuZGVja1N0YWNrXG4gICAgICAgIGxldCBnYW1lID0gZGVjay5nYW1lXG5cbiAgICAgICAgZGVjay5wb3BPbmUoZGVja1N0YWNrKVxuICAgICAgICBjYXJkVmlldy5tb3ZlVG9wWmluZGV4KClcbiAgICAgICAgY2FyZFZpZXcubWFrZVZpc2libGUoKVxuICAgICAgICBjYXJkVmlldy5zZXREZWNrU3RhY2tQb3NpdGlvbigpXG5cbiAgICAgICAgY2FyZFZpZXcucmVtb3ZlQWxsTGlzdGVuZXJzKClcbiAgICAgICAgZ2FtZS5ib2FyZC5jYXJkRmFjdG9yeS5tYWtlVmlld0RyYWdnYWJsZShjYXJkVmlldylcblxuICAgICAgICBpZiAoZGVjay5lbXB0eSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZ2FtZS5ib2FyZC5kaXNwRGVja0FuZERlY2tTdGFjaygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZVZpc2libGUoKSB7XG4gICAgICAgIHRoaXMuY2FyZC52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB0aGlzLnNldENhcmRUZXh0dXJlKClcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZU5vdFZpc2libGUoKSB7XG4gICAgICAgIHRoaXMuY2FyZC52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgdGhpcy5zZXRDYXJkVGV4dHVyZSgpXG4gICAgfVxuXG4gICAgc3RhdGljIHNldENhcmRUZXh0dXJlKCkge1xuICAgICAgICBpZiAodGhpcy5jYXJkLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dHVyZSh0aGlzLmZyb250VGV4dHVyZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dHVyZSh0aGlzLmJhY2tUZXh0dXJlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG9uRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgbGV0IGNhcmRWaWV3ID0gdGhpc1xuICAgICAgICBsZXQgY2FyZCA9IGNhcmRWaWV3LmNhcmRcbiAgICAgICAgbGV0IGdhbWUgPSBjYXJkLnN0YWNrLmdhbWVcblxuICAgICAgICBpZiAoY2FyZC52aXNpYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjYXJkLnBvc3NpYmxlQ29sbGlzaW9ucyA9IGdhbWUuY29sbGlzaW9uQ2FyZHNGb3IoY2FyZClcblxuICAgICAgICBjYXJkVmlldy5kYXRhID0gZXZlbnQuZGF0YVxuICAgICAgICBjYXJkVmlldy5kcmFnZ2luZyA9IHRydWVcblxuICAgICAgICBjYXJkVmlldy51cGRhdGVEcmFnU2V0dGluZ3NBbmROZXh0KClcbiAgICB9XG5cbiAgICBzdGF0aWMgb25EcmFnRW5kKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYXJkVmlldyA9IHRoaXNcbiAgICAgICAgY2FyZFZpZXcuZHJhZ2dpbmcgPSBmYWxzZVxuICAgICAgICBjYXJkVmlldy5hbHBoYSA9IDFcbiAgICAgICAgY2FyZFZpZXcuZGF0YSA9IG51bGxcblxuICAgICAgICBjYXJkVmlldy52YWxpZGF0ZURyYWcoKVxuICAgICAgICBjYXJkVmlldy5zZXRCb2FyZFBvc2l0aW9uQW5kTmV4dCgpXG4gICAgfVxuXG4gICAgc3RhdGljIG9uRHJhZ01vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgIGxldCBjYXJkVmlldyA9IHRoaXNcbiAgICAgICAgICAgIGxldCBjYXJkID0gY2FyZFZpZXcuY2FyZFxuXG4gICAgICAgICAgICBsZXQgY2FyZENvbGxpc2lvbiA9IGZhbHNlXG4gICAgICAgICAgICBjYXJkLnBvc3NpYmxlQ29sbGlzaW9ucy5mb3JFYWNoKChjYXJkMikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYXJkVmlldy5oaXRUZXN0UmVjdGFuZ2xlKGNhcmRWaWV3LCBjYXJkMi52aWV3KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2hvY2sgd2l0aCAnICsgY2FyZDIudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5vblRvcE9mID0gY2FyZDJcbiAgICAgICAgICAgICAgICAgICAgY2FyZENvbGxpc2lvbiA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGNhcmRDb2xsaXNpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY2FyZC5vblRvcE9mID0gbnVsbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBjYXJkVmlldy5kYXRhLmdldExvY2FsUG9zaXRpb24oY2FyZFZpZXcucGFyZW50KVxuICAgICAgICAgICAgbGV0IFtkZWx0YVgsIGRlbHRhWV0gPSBjYXJkVmlldy5jYWxjdWxhdGVEZWx0YShuZXdQb3NpdGlvbilcbiAgICAgICAgICAgIGNhcmRWaWV3LnVwZGF0ZUJvYXJkUG9zaXRpb25BbmROZXh0KGRlbHRhWCwgZGVsdGFZKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlRHJhZygpIHtcbiAgICAgICAgbGV0IGNhcmQgPSB0aGlzLmNhcmRcbiAgICAgICAgbGV0IHN0YWNrID0gY2FyZC5zdGFja1xuICAgICAgICBsZXQgZ2FtZSA9IHN0YWNrLmdhbWVcblxuICAgICAgICBpZiAoY2FyZC5vblRvcE9mKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2syID0gY2FyZC5vblRvcE9mLnN0YWNrXG4gICAgICAgICAgICBsZXQgc291cmNlSW5kZXggPSBnYW1lLnN0YWNrcy5pbmRleE9mKHN0YWNrKVxuICAgICAgICAgICAgbGV0IGRlc3RpbmF0aW9uSW5kZXggPSBnYW1lLnN0YWNrcy5pbmRleE9mKHN0YWNrMilcbiAgICAgICAgICAgIGxldCByZXMgPSBnYW1lLm1vdmVDYXJkcyhzb3VyY2VJbmRleCwgZGVzdGluYXRpb25JbmRleCwgY2FyZC50b3BDYXJkc0NvdW50KCkpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbW92ZUNhcmRzICcgKyByZXMpXG4gICAgICAgICAgICBpZiAoZ2FtZS5jb21wbGV0ZSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZSBnYW1lIGlzIGNvbXBsZXRlISBDb25ncmF0dWxhdGlvbnMhJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBoaXRUZXN0UmVjdGFuZ2xlKHIxLCByMiwgZ2xvYmFsID0gZmFsc2UpIHtcbiAgICAgICAgLy8gQWRkIGNvbGxpc2lvbiBwcm9wZXJ0aWVzXG4gICAgICAgIGlmICghcjEuX2J1bXBQcm9wZXJ0aWVzQWRkZWQpIHRoaXMuYWRkQ29sbGlzaW9uUHJvcGVydGllcyhyMSlcbiAgICAgICAgaWYgKCFyMi5fYnVtcFByb3BlcnRpZXNBZGRlZCkgdGhpcy5hZGRDb2xsaXNpb25Qcm9wZXJ0aWVzKHIyKVxuXG4gICAgICAgIGxldCBoaXQsIGNvbWJpbmVkSGFsZldpZHRocywgY29tYmluZWRIYWxmSGVpZ2h0cywgdngsIHZ5XG5cbiAgICAgICAgLy8gQSB2YXJpYWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciB0aGVyZSdzIGEgY29sbGlzaW9uXG4gICAgICAgIGhpdCA9IGZhbHNlXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSB2ZWN0b3JcbiAgICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICAgICAgdnggPSAocjEuZ3ggKyBNYXRoLmFicyhyMS5oYWxmV2lkdGgpIC0gcjEueEFuY2hvck9mZnNldCkgLSAocjIuZ3ggKyBNYXRoLmFicyhyMi5oYWxmV2lkdGgpIC0gcjIueEFuY2hvck9mZnNldCk7XG4gICAgICAgICAgICB2eSA9IChyMS5neSArIE1hdGguYWJzKHIxLmhhbGZIZWlnaHQpIC0gcjEueUFuY2hvck9mZnNldCkgLSAocjIuZ3kgKyBNYXRoLmFicyhyMi5oYWxmSGVpZ2h0KSAtIHIyLnlBbmNob3JPZmZzZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdnggPSAocjEueCArIE1hdGguYWJzKHIxLmhhbGZXaWR0aCkgLSByMS54QW5jaG9yT2Zmc2V0KSAtIChyMi54ICsgTWF0aC5hYnMocjIuaGFsZldpZHRoKSAtIHIyLnhBbmNob3JPZmZzZXQpO1xuICAgICAgICAgICAgdnkgPSAocjEueSArIE1hdGguYWJzKHIxLmhhbGZIZWlnaHQpIC0gcjEueUFuY2hvck9mZnNldCkgLSAocjIueSArIE1hdGguYWJzKHIyLmhhbGZIZWlnaHQpIC0gcjIueUFuY2hvck9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaWd1cmUgb3V0IHRoZSBjb21iaW5lZCBoYWxmLXdpZHRocyBhbmQgaGFsZi1oZWlnaHRzXG4gICAgICAgIGNvbWJpbmVkSGFsZldpZHRocyA9IE1hdGguYWJzKHIxLmhhbGZXaWR0aCkgKyBNYXRoLmFicyhyMi5oYWxmV2lkdGgpO1xuICAgICAgICBjb21iaW5lZEhhbGZIZWlnaHRzID0gTWF0aC5hYnMocjEuaGFsZkhlaWdodCkgKyBNYXRoLmFicyhyMi5oYWxmSGVpZ2h0KTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgYSBjb2xsaXNpb24gb24gdGhlIHggYXhpc1xuICAgICAgICBpZiAoTWF0aC5hYnModngpIDwgY29tYmluZWRIYWxmV2lkdGhzKSB7XG5cbiAgICAgICAgICAgIC8vIEEgY29sbGlzaW9uIG1pZ2h0IGJlIG9jY3VyaW5nLiBDaGVjayBmb3IgYSBjb2xsaXNpb24gb24gdGhlIHkgYXhpc1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZ5KSA8IGNvbWJpbmVkSGFsZkhlaWdodHMpIHtcblxuICAgICAgICAgICAgICAgIC8vIFRoZXJlJ3MgZGVmaW5pdGVseSBhIGNvbGxpc2lvbiBoYXBwZW5pbmdcbiAgICAgICAgICAgICAgICBoaXQgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gVGhlcmUncyBubyBjb2xsaXNpb24gb24gdGhlIHkgYXhpc1xuICAgICAgICAgICAgICAgIGhpdCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIFRoZXJlJ3Mgbm8gY29sbGlzaW9uIG9uIHRoZSB4IGF4aXNcbiAgICAgICAgICAgIGhpdCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBgaGl0YCB3aWxsIGJlIGVpdGhlciBgdHJ1ZWAgb3IgYGZhbHNlYFxuICAgICAgICByZXR1cm4gaGl0O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L2NhcmRfdmlld19zZXJ2aWNlLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkWmVyb0ZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHBpeGksIGJvYXJkKSB7XG4gICAgICAgIHRoaXMucGl4aSA9IHBpeGlcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkXG4gICAgfVxuXG4gICAgY3JlYXRlVmlldyhjYXJkKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQmFzaWNWaWV3KGNhcmQpXG4gICAgfVxuXG4gICAgY3JlYXRlQmFzaWNWaWV3KGNhcmQpIHtcbiAgICAgICAgbGV0IHRleHR1cmUgPSB0aGlzLmdldFRleHR1cmUoKVxuICAgICAgICBsZXQgdmlldyA9IG5ldyB0aGlzLnBpeGkuU3ByaXRlKHRleHR1cmUpXG4gICAgICAgIHZpZXcuY2FyZCA9IGNhcmRcbiAgICAgICAgY2FyZC52aWV3ID0gdmlld1xuXG4gICAgICAgIHZpZXcudGludCA9IDB4MDBGRkZGIC8vIHRpbnRpbmcgZm9yIGZ1biBhbmQgdmlzaWJpbHR5XG5cbiAgICAgICAgdmlldy54ID0gNTAgKyAoY2FyZC5zdGFjay5nZXRJbmRleFBvc2l0aW9uKCkgLSA1KSAqIDkwXG4gICAgICAgIHZpZXcueSA9IDEyMFxuXG4gICAgICAgIHRoaXMubWFrZVZpZXdEcmFnZ2FibGUodmlldylcblxuICAgICAgICByZXR1cm4gdmlld1xuICAgIH1cblxuICAgIGdldFRleHR1cmUoKSB7XG4gICAgICAgIGxldCB0ZXh0dXJlUGF0aCA9ICcuL2ltYWdlcy9jYXJkcy9jYXJkLXplcm8ucG5nJ1xuICAgICAgICByZXR1cm4gdGhpcy5waXhpLlRleHR1cmUuZnJvbUltYWdlKHRleHR1cmVQYXRoKVxuICAgIH1cblxuICAgIG1ha2VWaWV3RHJhZ2dhYmxlKHZpZXcpIHtcbiAgICAgICAgdmlldy5hbmNob3Iuc2V0KDAuNSwgMC4yKVxuICAgICAgICB2aWV3LmludGVyYWN0aXZlID0gdHJ1ZSAvLyB0aGlzIHdpbGwgYWxsb3cgaXQgdG8gcmVzcG9uZCB0byBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzXG5cbiAgICAgICAgdGhpcy5hZGRDb2xsaXNpb25Qcm9wZXJ0aWVzKHZpZXcpXG4gICAgfVxuXG4gICAgLy8gYGFkZENvbGxpc2lvblByb3BlcnRpZXNgIGFkZHMgZXh0cmEgcHJvcGVydGllcyB0byBzcHJpdGVzIHRvIGhlbHBcbiAgICAvLyBzaW1wbGlmeSB0aGUgY29sbGlzaW9uIGNvZGUuIEl0IHdvbid0IGFkZCB0aGVzZSBwcm9wZXJ0aWVzIGlmIHRoZXlcbiAgICAvLyBhbHJlYWR5IGV4aXN0IG9uIHRoZSBzcHJpdGUuIEFmdGVyIHRoZXNlIHByb3BlcnRpZXMgaGF2ZSBiZWVuXG4gICAgLy8gYWRkZWQsIHRoaXMgbWV0aG9kcyBhZGRzIGEgQm9vbGVhbiBwcm9wZXJ0eSB0byB0aGUgc3ByaXRlIGNhbGxlZCBgX2J1bXBQcm9wZXJ0aWVzQWRkZWRgXG4gICAgLy8gYW5kIHNldHMgaXQgdG8gYHRydWVgIHRvIGZsYWcgdGhhdCB0aGUgc3ByaXRlIGhhcyB0aGVzZVxuICAgIC8vIG5ldyBwcm9wZXJ0aWVzXG4gICAgYWRkQ29sbGlzaW9uUHJvcGVydGllcyhzcHJpdGUpIHtcbiAgICAgICAgLy8gQWRkIHByb3BlcnRpZXMgdG8gUGl4aSBzcHJpdGVzXG4gICAgICAgIC8vIGlmICh0aGlzLnJlbmRlcmVyID09PSBcInBpeGlcIikge1xuXG4gICAgICAgIGlmIChzcHJpdGUuZ3ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJneFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gc3ByaXRlLmdldEdsb2JhbFBvc2l0aW9uKCkueCB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5neSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ByaXRlLCBcImd5XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKXtyZXR1cm4gc3ByaXRlLmdldEdsb2JhbFBvc2l0aW9uKCkueX0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5jZW50ZXJYID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwiY2VudGVyWFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCl7cmV0dXJuIHNwcml0ZS54ICsgc3ByaXRlLndpZHRoIC8gMn0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5jZW50ZXJZID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwiY2VudGVyWVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCl7cmV0dXJuIHNwcml0ZS55ICsgc3ByaXRlLmhlaWdodCAvIDJ9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcHJpdGUuaGFsZldpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwiaGFsZldpZHRoXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKXtyZXR1cm4gc3ByaXRlLndpZHRoIC8gMn0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5oYWxmSGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwiaGFsZkhlaWdodFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCl7cmV0dXJuIHNwcml0ZS5oZWlnaHQgLyAyfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ByaXRlLnhBbmNob3JPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJ4QW5jaG9yT2Zmc2V0XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJpdGUuYW5jaG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzcHJpdGUud2lkdGggKiBzcHJpdGUuYW5jaG9yLnhcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcHJpdGUueUFuY2hvck9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ByaXRlLCBcInlBbmNob3JPZmZzZXRcIiwge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcml0ZS5hbmNob3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwcml0ZS5oZWlnaHQgKiBzcHJpdGUuYW5jaG9yLnlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcHJpdGUuY2lyY3VsYXIgJiYgc3ByaXRlLnJhZGl1cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ByaXRlLCBcInJhZGl1c1wiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gc3ByaXRlLndpZHRoIC8gMn0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBhIEJvb2xlYW4gYF9idW1wUHJvcGVydGllc0FkZGVkYCBwcm9wZXJ0eSB0byB0aGUgc3ByaXRlIHRvIGZsYWcgaXRcbiAgICAgICAgLy8gYXMgaGF2aW5nIHRoZXNlIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgIHNwcml0ZS5fYnVtcFByb3BlcnRpZXNBZGRlZCA9IHRydWVcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9jYXJkX3plcm9fZmFjdG9yeS5qcyIsImltcG9ydCBHYW1lIGZyb20gJy4vZW5naW5lL2dhbWUnXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi92aWV3L2JvYXJkJ1xuXG5sZXQgZ2FtZSA9IG5ldyBHYW1lKClcbmdhbWUuZGlzdHJpYnV0ZSgpXG5cbi8vIGdhbWUuZGVjay5jYXJkcyA9IFtdXG4vLyBnYW1lLmRlY2suZWFzeUJ1aWxkKFsnWDNTJywgJ1gxMkgnLCAnWDFEJywgJ1gxM1MnXSlcbi8vIGdhbWUuc3RhY2tzWzBdLmVhc3lCdWlsZChbXSlcblxuLy8gZ2FtZS5wbGF5aW5nU3RhY2tzWzBdLmVhc3lCdWlsZChbXSlcbi8vIGdhbWUucGxheWluZ1N0YWNrc1sxXS5lYXN5QnVpbGQoW10pXG4vLyBnYW1lLnBsYXlpbmdTdGFja3NbMl0uZWFzeUJ1aWxkKFtdKVxuLy8gZ2FtZS5wbGF5aW5nU3RhY2tzWzNdLmVhc3lCdWlsZChbJzJEJ10pXG4vLyBnYW1lLnBsYXlpbmdTdGFja3NbNF0uZWFzeUJ1aWxkKFsnWDZDJywgJ1gxM0gnLCAnWDJDJywgJ1g3RCcsICc1UyddKVxuLy8gZ2FtZS5wbGF5aW5nU3RhY2tzWzVdLmVhc3lCdWlsZChbJ1g2SCcsICdYMTBIJywgJ1gxM1MnLCAnWDExUycsICdYMUMnLCAnWDEySCddKVxuLy8gZ2FtZS5wbGF5aW5nU3RhY2tzWzZdLmVhc3lCdWlsZChbJ1g4QycsICdYOVMnLCAnWDEySCcsICdYMTFDJywgJ1gxMkMnLCAnWDRTJywgJzEzQyddKVxuXG4vLyBnYW1lLmNvbG9yU3RhY2tzWzBdLmVhc3lCdWlsZChbJzFEJywgJzJEJywgJzNEJywgJzREJywgJzVEJywgJzZEJywgJzdEJywgJzhEJywgJzlEJywgJzEwRCcsICcxMUQnLCAnMTJEJywgJzEzRCddKVxuLy8gZ2FtZS5jb2xvclN0YWNrc1sxXS5lYXN5QnVpbGQoWycxSCcsICcySCcsICczSCcsICc0SCcsICc1SCcsICc2SCcsICc3SCcsICc4SCcsICc5SCcsICcxMEgnLCAnMTFIJywgJzEySCcsICcxM0gnXSlcbi8vIGdhbWUuY29sb3JTdGFja3NbMl0uZWFzeUJ1aWxkKFsnMVMnLCAnMlMnLCAnM1MnLCAnNFMnLCAnNVMnLCAnNlMnLCAnN1MnLCAnOFMnLCAnOVMnLCAnMTBTJywgJzExUycsICcxMlMnLCAnMTNTJ10pXG4vLyBnYW1lLmNvbG9yU3RhY2tzWzNdLmVhc3lCdWlsZChbJzFDJywgJzJDJywgJzNDJywgJzRDJywgJzVDJywgJzZDJywgJzdDJywgJzhDJywgJzlDJywgJzEwQycsICcxMUMnLCAnMTJDJywgJzEzQyddKVxuXG4vLyBnYW1lLmRpc3AoKVxuXG5jb25zdCBwaXhpID0gUElYSVxuXG5sZXQgYXBwID0gbmV3IHBpeGkuQXBwbGljYXRpb24oNjQwLCA2MDAsIHtiYWNrZ3JvdW5kQ29sb3I6IDB4MDA4NDAwfSlcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXRpZW5jZScpLmFwcGVuZENoaWxkKGFwcC52aWV3KVxuXG5sZXQgYm9hcmQgPSBuZXcgQm9hcmQoZ2FtZSwgcGl4aSwgYXBwKVxuXG5ib2FyZC5jcmVhdGVTcHJpdGVDYXJkc1plcm9Db2xvcigpXG5ib2FyZC5kaXNwQWxsU3RhY2tzKClcbmJvYXJkLmRpc3BEZWNrQW5kRGVja1N0YWNrKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBEZWNrIGZyb20gJy4vZGVjaydcbmltcG9ydCBTdGFja1NlcnZpY2UgZnJvbSAnLi9zdGFja19zZXJ2aWNlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZWNrID0gbmV3IERlY2sodGhpcylcbiAgICAgICAgdGhpcy5zdGFja3MgPSBTdGFja1NlcnZpY2UucHJlcGFyZVN0YWNrcyh0aGlzKVxuICAgICAgICB0aGlzLmRlY2tTdGFjayA9IHRoaXMuc3RhY2tzWzBdXG4gICAgICAgIHRoaXMuY29sb3JTdGFja3MgPSB0aGlzLnN0YWNrcy5zbGljZSgxLCA1KVxuICAgICAgICB0aGlzLnBsYXlpbmdTdGFja3MgPSB0aGlzLnN0YWNrcy5zbGljZSg1LCAxMilcbiAgICB9XG5cbiAgICBkaXN0cmlidXRlKCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdTdGFja3MuZm9yRWFjaCgoc3RhY2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlY2sucG9wKHN0YWNrLCBpbmRleCArIDEsIGZhbHNlKVxuICAgICAgICAgICAgbGV0IHRvcENhcmQgPSBzdGFjay5sYXN0KClbMF1cbiAgICAgICAgICAgIHRvcENhcmQudmlzaWJsZSA9IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zdGFja3NbMV0uY29tcGxldGUoKSAmJlxuICAgICAgICB0aGlzLnN0YWNrc1syXS5jb21wbGV0ZSgpICYmXG4gICAgICAgIHRoaXMuc3RhY2tzWzNdLmNvbXBsZXRlKCkgJiZcbiAgICAgICAgdGhpcy5zdGFja3NbNF0uY29tcGxldGUoKVxuICAgIH1cblxuICAgIGlzTW92ZVBvc3NpYmxlKHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkluZGV4LCBxdWFudGl0eSA9IDEpIHtcbiAgICAgICAgaWYgKHF1YW50aXR5ID09PSAwKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgICAgICAgaWYgKFN0YWNrU2VydmljZS5pc0RlY2tTdGFjayhzb3VyY2VJbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21EZWNrU3RhY2tJc01vdmVQb3NzaWJsZShzb3VyY2VJbmRleCwgZGVzdGluYXRpb25JbmRleCwgcXVhbnRpdHkpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU3RhY2tTZXJ2aWNlLmlzUGxheWluZ1N0YWNrKHNvdXJjZUluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVBsYXlpbmdTdGFja0lzTW92ZVBvc3NpYmxlKHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkluZGV4LCBxdWFudGl0eSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHNvdXJjZUluZGV4IGlzIENvbG9yU3RhY2tcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZnJvbURlY2tTdGFja0lzTW92ZVBvc3NpYmxlKHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkluZGV4LCBxdWFudGl0eSA9IDEpIHtcbiAgICAgICAgbGV0IHNvdXJjZVN0YWNrID0gdGhpcy5zdGFja3Nbc291cmNlSW5kZXhdXG4gICAgICAgIGxldCBkZXN0aW5hdGlvblN0YWNrID0gdGhpcy5zdGFja3NbZGVzdGluYXRpb25JbmRleF1cbiAgICAgICAgbGV0IGNhcmRzVG9Nb3ZlID0gc291cmNlU3RhY2subGFzdChxdWFudGl0eSlcbiAgICAgICAgbGV0IHRvcFN0YWNrQ2FyZCA9IGRlc3RpbmF0aW9uU3RhY2subGFzdCgpXG5cbiAgICAgICAgaWYgKHF1YW50aXR5ID4gMSkgeyByZXR1cm4gZmFsc2UgfVxuXG4gICAgICAgIGlmIChTdGFja1NlcnZpY2UuaXNDb2xvclN0YWNrKGRlc3RpbmF0aW9uSW5kZXgpKSB7XG4gICAgICAgICAgICBsZXQgY2FyZCA9IGNhcmRzVG9Nb3ZlWzBdXG5cbiAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvblN0YWNrLmVtcHR5KCkpIHtcblxuICAgICAgICAgICAgICAgIGlmIChjYXJkLnZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkLmNvbG9yID09PSBkZXN0aW5hdGlvblN0YWNrLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyZC5mb2xsb3dzKHRvcFN0YWNrQ2FyZFswXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTdGFja1NlcnZpY2UuaXNQbGF5aW5nU3RhY2soZGVzdGluYXRpb25JbmRleCkpIHtcblxuICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uU3RhY2suZW1wdHkoKSkge1xuICAgICAgICAgICAgICAgICAvLyBpdCdzIGEga2luZ1xuICAgICAgICAgICAgICAgICBpZiAoY2FyZHNUb01vdmVbMF0udmFsdWUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9wU3RhY2tDYXJkWzBdLmZvbGxvd3NXaXRoT3Bwb3NpdGVDb2xvcihjYXJkc1RvTW92ZVswXSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGZyb21QbGF5aW5nU3RhY2tJc01vdmVQb3NzaWJsZShzb3VyY2VJbmRleCwgZGVzdGluYXRpb25JbmRleCwgcXVhbnRpdHkgPSAxKSB7XG4gICAgICAgIGxldCBzb3VyY2VTdGFjayA9IHRoaXMuc3RhY2tzW3NvdXJjZUluZGV4XVxuICAgICAgICBsZXQgZGVzdGluYXRpb25TdGFjayA9IHRoaXMuc3RhY2tzW2Rlc3RpbmF0aW9uSW5kZXhdXG4gICAgICAgIGxldCBjYXJkc1RvTW92ZSA9IHNvdXJjZVN0YWNrLmxhc3QocXVhbnRpdHkpXG4gICAgICAgIGxldCB0b3BTdGFja0NhcmQgPSBkZXN0aW5hdGlvblN0YWNrLmxhc3QoKVxuXG4gICAgICAgIGlmIChTdGFja1NlcnZpY2UuaXNDb2xvclN0YWNrKGRlc3RpbmF0aW9uSW5kZXgpKSB7XG4gICAgICAgICAgICBpZiAocXVhbnRpdHkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvblN0YWNrLmVtcHR5KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyZHNUb01vdmVbMF0uaXNBY2UoZGVzdGluYXRpb25TdGFjay5jb2xvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYXJkc1RvTW92ZVswXS5mb2xsb3dzKHRvcFN0YWNrQ2FyZFswXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTdGFja1NlcnZpY2UuaXNQbGF5aW5nU3RhY2soZGVzdGluYXRpb25JbmRleCkpIHtcbiAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvblN0YWNrLmVtcHR5KCkpIHtcbiAgICAgICAgICAgICAgICAvLyBpdCdzIGEga2luZ1xuICAgICAgICAgICAgICAgIGlmIChjYXJkc1RvTW92ZVswXS52YWx1ZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG9wU3RhY2tDYXJkWzBdLmZvbGxvd3NXaXRoT3Bwb3NpdGVDb2xvcihjYXJkc1RvTW92ZVswXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIG1vdmVDYXJkcyhzb3VyY2VJbmRleCwgZGVzdGluYXRpb25JbmRleCwgcXVhbnRpdHkgPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW92ZVBvc3NpYmxlKHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkluZGV4LCBxdWFudGl0eSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnKiogbW92ZSBub3QgcG9zc2libGUgKionKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrc1tzb3VyY2VJbmRleF0ucG9wKHRoaXMuc3RhY2tzW2Rlc3RpbmF0aW9uSW5kZXhdLCBxdWFudGl0eSlcbiAgICB9XG5cbiAgICBwb3BEZWNrKCkge1xuICAgICAgICB0aGlzLmRlY2sucG9wT25lKHRoaXMuZGVja1N0YWNrKVxuICAgIH1cblxuICAgIGNvbGxpc2lvbkNhcmRzRm9yKGNhcmQpIHtcbiAgICAgICAgbGV0IHRvcENhcmRzID0gdGhpcy5wbGF5aW5nVG9wQ2FyZHNGb3IoY2FyZCkuY29uY2F0KHRoaXMuY29sb3JUb3BDYXJkcygpKVxuXG4gICAgICAgIGxldCBjYXJkcyA9IHRvcENhcmRzLnJlZHVjZSgocmVzdWx0LCBjYXJkKSA9PiB7XG4gICAgICAgICAgICBpZiAoKGNhcmQgPT09IHVuZGVmaW5lZCkgfHwgKGNhcmQgPT09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChjYXJkLnZhbHVlID09PSAwKSB8fCAoY2FyZC52aXNpYmxlID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNhcmQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH0sIFtdKVxuXG4gICAgICAgIHJldHVybiBjYXJkc1xuICAgIH1cblxuICAgIHBsYXlpbmdUb3BDYXJkc0ZvcihjYXJkKSB7XG4gICAgICAgIGxldCBzdGFja3MgPSB0aGlzLnBsYXlpbmdTdGFja3NcblxuICAgICAgICBsZXQgdG9wQ2FyZHMgPSBzdGFja3MubWFwKChzdGFjaykgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YWNrID09PSBjYXJkLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhY2suZW1wdHkoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGFjay5jYXJkWmVyb1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YWNrLmxhc3RPbmUoKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdG9wQ2FyZHNcbiAgICB9XG5cbiAgICBjb2xvclRvcENhcmRzKCkge1xuICAgICAgICBsZXQgc3RhY2tzID0gdGhpcy5jb2xvclN0YWNrc1xuXG4gICAgICAgIGxldCB0b3BDYXJkcyA9IHN0YWNrcy5tYXAoKHN0YWNrKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhY2suZW1wdHkoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGFjay5jYXJkWmVyb1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YWNrLmxhc3RPbmUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB0b3BDYXJkc1xuICAgIH1cblxuICAgIGRpc3AoKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLmNvbW1vblN0YWNrc0Rpc3AoKVxuICAgICAgICBzdHIgPSBzdHIgKyB0aGlzLnBsYXlpbmdTdGFja0Rpc3AoKVxuICAgICAgICAvLyBzdHIgPSBzdHIgKyB0aGlzLmJldHRlclBsYXlpbmdTdGFja0Rpc3AoKVxuICAgICAgICBjb25zb2xlLmxvZyhzdHIpXG4gICAgfVxuXG4gICAgZWFzeURpc3AoKSB7XG4gICAgICAgIHRoaXMucGxheWluZ1N0YWNrcy5mb3JFYWNoKChzdGFjaykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhY2suZWFzeURpc3AoKSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21tb25TdGFja3NEaXNwKCkge1xuICAgICAgICByZXR1cm4gJ0RlY2s6ICcgKyB0aGlzLmRlY2sudG9TdHJpbmcoKSArICdcXG4nICtcbiAgICAgICAgJ1swXSBEZWNrIFN0YWNrOiAnICsgdGhpcy5kZWNrU3RhY2sudG9TdHJpbmcoKSArICdcXG4nICtcbiAgICAgICAgJ1sxXSBEaWFtb25kIFN0YWNrOiAnICsgdGhpcy5zdGFja3NbMV0udG9TdHJpbmcoKSArICdcXG4nICtcbiAgICAgICAgJ1syXSBIZWFydCBTdGFjazogJyArIHRoaXMuc3RhY2tzWzJdLnRvU3RyaW5nKCkgKyAnXFxuJyArXG4gICAgICAgICdbM10gU3BhZGUgU3RhY2s6ICcgKyB0aGlzLnN0YWNrc1szXS50b1N0cmluZygpICsgJ1xcbicgK1xuICAgICAgICAnWzRdIENsdWIgU3RhY2s6ICcgKyB0aGlzLnN0YWNrc1s0XS50b1N0cmluZygpICsgJ1xcblxcbidcbiAgICB9XG5cbiAgICBwbGF5aW5nU3RhY2tEaXNwKCkge1xuICAgICAgICBsZXQgc3RyID0gJydcbiAgICAgICAgLy8gcGxheWluZ1N0YWNrcyA6IGluZGV4IDUgLT4gMTFcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGkgKyA1XG4gICAgICAgICAgICBzdHIgPSBzdHIgKyAnWycgKyBpbmRleCArICddIDogJyArIHRoaXMuc3RhY2tzW2luZGV4XS50b1N0cmluZygpICsgJ1xcbidcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyXG4gICAgfVxuXG4gICAgYmV0dGVyUGxheWluZ1N0YWNrRGlzcCgpIHtcbiAgICAgICAgbGV0IGZ1bGwgPSAwXG4gICAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgICAgbGV0IHN0ciA9ICcnXG4gICAgICAgIHdoaWxlIChmdWxsIDwgNykge1xuICAgICAgICAgICAgZnVsbCA9IDBcbiAgICAgICAgICAgIGxldCBsaW5lID0gdGhpcy5wbGF5aW5nU3RhY2tzLm1hcCgoc3RhY2spID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhY2suY2FyZHNbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVsbCsrXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnXFx0ICdcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhY2suY2FyZHNbaW5kZXhdLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzdHIgPSBzdHIgKyBsaW5lLmpvaW4oJyBcXHQgJykgKyAnXFxuJ1xuICAgICAgICAgICAgaW5kZXgrK1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUuanMiLCJpbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnXG5pbXBvcnQgQ2FyZERlY2taZXJvIGZyb20gJy4vY2FyZF96ZXJvX2RlY2snXG5cbi8vIHRoaXMgaXMgdGhlIGRlY2sgd2l0aCBhbGwgdGhlIHJldHVybmVkIGNhcmRzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNrIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdXG4gICAgICAgIHRoaXMuY2FyZFplcm8gPSBuZXcgQ2FyZERlY2taZXJvKHRoaXMpXG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhcmRzKClcbiAgICAgICAgdGhpcy5zaHVmZmxlKClcbiAgICB9XG5cbiAgICBlYXN5QnVpbGQobGlzdCkge1xuICAgICAgICB0aGlzLmNhcmRzID0gW11cbiAgICAgICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goQ2FyZC5lYXN5QnVpbGQoZWxlbWVudCkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDYXJkcygpIHtcbiAgICAgICAgbGV0IGNvbG9ycyA9IFsnaGVhcnQnLCAnZGlhbW9uZCcsICdzcGFkZScsICdjbHViJ11cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IDE0OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb2xvcnMuZm9yRWFjaCgoY29sb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2FyZCA9IG5ldyBDYXJkKGluZGV4LCBjb2xvciwgZmFsc2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2h1ZmZsZSgpIHtcbiAgICAgICAgdGhpcy5jYXJkcy5zb3J0KChhLCBiKSA9PiB7IHJldHVybiAwLjUgLSBNYXRoLnJhbmRvbSgpIH0pXG4gICAgfVxuXG4gICAgcG9wT25lKHN0YWNrLCB2aXNpYmxlID0gdHJ1ZSkge1xuICAgICAgICBsZXQgY2FyZCA9IHRoaXMuY2FyZHMucG9wKClcbiAgICAgICAgY2FyZC52aXNpYmxlID0gdmlzaWJsZVxuICAgICAgICBzdGFjay5wdXNoKGNhcmQpXG4gICAgfVxuXG4gICAgcG9wKHN0YWNrLCBxdWFudGl0eSA9IDEsIHZpc2libGUgPSB0cnVlKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBxdWFudGl0eTsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5wb3BPbmUoc3RhY2ssIHZpc2libGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoKGNhcmQpIHtcbiAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpXG4gICAgICAgIGNhcmQuZGVjayA9IHRoaXNcbiAgICAgICAgY2FyZC5uZXh0ID0gbnVsbCAvLyBvbiBuwrRhIHBhcyBiZXNvaW4gZHUgY29uY2VwdCBkZSBuZXh0IGRhbnMgbGUgRGVja1xuICAgIH1cblxuICAgIGxhc3QocXVhbnRpdHkgPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmVtcHR5KCkpIHsgcmV0dXJuIG51bGwgfVxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPCBxdWFudGl0eSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICAgICAgbGV0IGNhcmRzID0gW11cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSBxdWFudGl0eTsgaW5kZXggPiAwOyBpbmRleC0tKSB7XG4gICAgICAgICAgICBjYXJkcy5wdXNoKHRoaXMuY2FyZHNbdGhpcy5jYXJkcy5sZW5ndGggLSBpbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMSkgeyByZXR1cm4gY2FyZHNbMF0gfVxuICAgICAgICByZXR1cm4gY2FyZHNcbiAgICB9XG5cbiAgICBsYXN0T25lKCkge1xuICAgICAgICBsZXQgcmVzID0gdGhpcy5sYXN0KClcbiAgICAgICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0KClbMF1cbiAgICB9XG5cbiAgICBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNhcmRzLmxlbmd0aCA9PT0gMClcbiAgICB9XG5cbiAgICBkaXNwKCkge1xuICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHsgY2FyZC5kaXNwKCkgfSlcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHMubWFwKChjYXJkKSA9PiB7IHJldHVybiBjYXJkLnRvU3RyaW5nKCkgfSkuam9pbigpXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9kZWNrLmpzIiwiaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkRGVja1plcm8gZXh0ZW5kcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihkZWNrKSB7XG4gICAgICAgIHN1cGVyKDAsIG51bGwsIGZhbHNlKVxuICAgICAgICB0aGlzLmRlY2sgPSBkZWNrXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAoJ1sgMCBjYXJkIG9mIGRlY2sgc3RhY2tdJylcbiAgICB9XG5cbiAgICBlYXN5RGlzcCgpIHtcbiAgICAgICAgcmV0dXJuIFwiJzBbRGVja10nXCJcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9jYXJkX3plcm9fZGVjay5qcyIsImltcG9ydCBTdGFjayBmcm9tICcuL3N0YWNrJ1xuaW1wb3J0IENvbG9yU3RhY2sgZnJvbSAnLi9jb2xvcl9zdGFjaydcbmltcG9ydCBEZWNrU3RhY2sgZnJvbSAnLi9kZWNrX3N0YWNrJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFja1NlcnZpY2Uge1xuICAgIHN0YXRpYyBwcmVwYXJlU3RhY2tzKGdhbWUpIHtcbiAgICAgICAgbGV0IHN0YWNrcyA9IFtdXG5cbiAgICAgICAgLy8gZGVja1N0YWNrIDogaW5kZXggMFxuICAgICAgICBzdGFja3MucHVzaChuZXcgRGVja1N0YWNrKGdhbWUpKVxuXG4gICAgICAgIC8vIGRpYW1vbmRTdGFjayA6IGluZGV4IDFcbiAgICAgICAgc3RhY2tzLnB1c2gobmV3IENvbG9yU3RhY2soZ2FtZSwgJ2RpYW1vbmQnKSlcbiAgICAgICAgLy8gaGVhcnRTdGFjayA6IGluZGV4IDJcbiAgICAgICAgc3RhY2tzLnB1c2gobmV3IENvbG9yU3RhY2soZ2FtZSwgJ2hlYXJ0JykpXG4gICAgICAgIC8vIHNwYWRlU3RhY2sgOiBpbmRleCAzXG4gICAgICAgIHN0YWNrcy5wdXNoKG5ldyBDb2xvclN0YWNrKGdhbWUsICdzcGFkZScpKVxuICAgICAgICAvLyBjbHViU3RhY2sgOiBpbmRleCA0XG4gICAgICAgIHN0YWNrcy5wdXNoKG5ldyBDb2xvclN0YWNrKGdhbWUsICdjbHViJykpXG5cbiAgICAgICAgLy8gcGxheWluZ1N0YWNrcyA6IGluZGV4IDUgLT4gMTFcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IDc7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHN0YWNrcy5wdXNoKG5ldyBTdGFjayhnYW1lKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFja3NcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDb2xvclN0YWNrKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrVHlwZShpbmRleCkgPT09ICdjb2xvclN0YWNrJ1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1BsYXlpbmdTdGFjayhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1R5cGUoaW5kZXgpID09PSAncGxheWluZ1N0YWNrJ1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0RlY2tTdGFjayhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1R5cGUoaW5kZXgpID09PSAnZGVja1N0YWNrJ1xuICAgIH1cblxuICAgIHN0YXRpYyBzdGFja1R5cGUoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IDUpIHtcbiAgICAgICAgICAgIHJldHVybiAncGxheWluZ1N0YWNrJ1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID49IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAnY29sb3JTdGFjaydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnZGVja1N0YWNrJ1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9zdGFja19zZXJ2aWNlLmpzIiwiaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkWmVybyBleHRlbmRzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKHN0YWNrKSB7XG4gICAgICAgIHN1cGVyKDAsIG51bGwsIGZhbHNlKVxuICAgICAgICB0aGlzLnN0YWNrID0gc3RhY2tcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICgnWyAwY2FyZHMgb2Ygc3RhY2snICsgdGhpcy5zdGFjay5nZXRJbmRleFBvc2l0aW9uKCkgKyAnXScpXG4gICAgfVxuXG4gICAgZWFzeURpc3AoKSB7XG4gICAgICAgIHJldHVybiBcIicwW1wiICsgdGhpcy5zdGFjay5nZXRJbmRleFBvc2l0aW9uKCkgKyBcIl0nXCJcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9jYXJkX3plcm8uanMiLCJpbXBvcnQgU3RhY2sgZnJvbSAnLi9zdGFjaydcbmltcG9ydCBDYXJkWmVyb0NvbG9yIGZyb20gJy4vY2FyZF96ZXJvX2NvbG9yJ1xuXG4vLyB0aGlzIGlzIHRoZSBzdGFjayB5b3UgaGF2ZSB0byBmaWxlIGluIG9yZGVyIHRvIHdpbiB0aGUgZ2FtZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBjb2xvcikge1xuICAgICAgICBzdXBlcihnYW1lKVxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICAgICAgdGhpcy5jYXJkWmVybyA9IG5ldyBDYXJkWmVyb0NvbG9yKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGxldCBjb21wYXJhdG9yID0gKGluaXR2YWx1ZSwgY2FyZCwgaW5kZXgsIGFycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluaXR2YWx1ZSAmJiAoY2FyZC52YWx1ZSA9PT0gaW5kZXggKyAxKSAmJiAoY2FyZC5jb2xvciA9PT0gdGhpcy5jb2xvcilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkcy5yZWR1Y2UoY29tcGFyYXRvciwgdHJ1ZSkgJiYgKHRoaXMuY2FyZHMubGVuZ3RoID09PSAxMylcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2NvbG9yX3N0YWNrLmpzIiwiaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkWmVyb0NvbG9yIGV4dGVuZHMgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IoY29sb3JTdGFjaykge1xuICAgICAgICBzdXBlcigwLCBjb2xvclN0YWNrLmNvbG9yLCBmYWxzZSlcbiAgICAgICAgdGhpcy5zdGFjayA9IGNvbG9yU3RhY2tcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yU3RhY2suY29sb3JcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICgnWzAgY2FyZCAnICsgdGhpcy5jb2xvciArICddJylcbiAgICB9XG5cbiAgICBlYXN5RGlzcCgpIHtcbiAgICAgICAgcmV0dXJuIFwiJzBbXCIgKyB0aGlzLmNvbG9yWzBdLnRvVXBwZXJDYXNlKCkgKyBcIl0nXCJcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9jYXJkX3plcm9fY29sb3IuanMiLCJpbXBvcnQgU3RhY2sgZnJvbSAnLi9zdGFjaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVja1N0YWNrIGV4dGVuZHMgU3RhY2sge1xuXG4gICAgbW92ZUNhcmRzQmFja09uRGVjaygpIHtcbiAgICAgICAgbGV0IGRlY2sgPSB0aGlzLmdhbWUuZGVja1xuICAgICAgICB0aGlzLmNhcmRzLnJldmVyc2UoKS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBjYXJkLnZpc2libGUgPSBmYWxzZVxuICAgICAgICAgICAgZGVjay5wdXNoKGNhcmQpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZGVja19zdGFjay5qcyIsIlxuaW1wb3J0IERlY2tGYWN0b3J5IGZyb20gJy4vZGVja19mYWN0b3J5J1xuaW1wb3J0IENhcmRWaWV3RmFjdG9yeSBmcm9tICcuL2NhcmRfdmlld19mYWN0b3J5J1xuaW1wb3J0IENhcmRaZXJvRmFjdG9yeSBmcm9tICcuL2NhcmRfemVyb19mYWN0b3J5J1xuaW1wb3J0IENhcmRaZXJvRGVja0ZhY3RvcnkgZnJvbSAnLi9jYXJkX3plcm9fZGVja19mYWN0b3J5J1xuaW1wb3J0IENhcmRaZXJvQ29sb3JGYWN0b3J5IGZyb20gJy4vY2FyZF96ZXJvX2NvbG9yX2ZhY3RvcnknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBwaXhpLCBhcHApIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxuICAgICAgICB0aGlzLmdhbWUuYm9hcmQgPSB0aGlzXG4gICAgICAgIHRoaXMucGl4aSA9IHBpeGlcbiAgICAgICAgdGhpcy5hcHAgPSBhcHBcbiAgICAgICAgdGhpcy5zZXRCYWNrVGV4dHVyZSgpXG4gICAgICAgIHRoaXMuZGVja0ZhY3RvcnkgPSBuZXcgRGVja0ZhY3RvcnkodGhpcy5waXhpLCB0aGlzKVxuICAgICAgICB0aGlzLmNhcmRGYWN0b3J5ID0gbmV3IENhcmRWaWV3RmFjdG9yeSh0aGlzLnBpeGksIHRoaXMpXG4gICAgfVxuXG4gICAgc2V0QmFja1RleHR1cmUoKSB7XG4gICAgICAgIGxldCB0ZXh0dXJlUGF0aCA9ICcuL2ltYWdlcy9jYXJkcy9iYWNrLnBuZydcbiAgICAgICAgdGhpcy5iYWNrVGV4dHVyZSA9IHRoaXMucGl4aS5UZXh0dXJlLmZyb21JbWFnZSh0ZXh0dXJlUGF0aClcbiAgICB9XG5cbiAgICBkaXNwRGVja0FuZERlY2tTdGFjaygpIHtcbiAgICAgICAgbGV0IGNhcmRaZXJvRGVjayA9IHRoaXMuY3JlYXRlU3ByaXRlQ2FyZFplcm9EZWNrKClcblxuICAgICAgICBsZXQgZGVja1ZpZXcgPSB0aGlzLmRlY2tGYWN0b3J5LmNyZWF0ZVRvcENhcmRWaWV3KClcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQoZGVja1ZpZXcpXG4gICAgfVxuXG4gICAgZGlzcEFsbFN0YWNrcygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcFN0YWNrKGkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwU3RhY2soc3RhY2tJbmRleCkge1xuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLmdhbWUuc3RhY2tzW3N0YWNrSW5kZXggKyA1XVxuXG4gICAgICAgIHRoaXMuY3JlYXRlU3ByaXRlQ2FyZHNaZXJvKHN0YWNrKVxuICAgICAgICB0aGlzLmNyZWF0ZVNwcml0ZUNhcmRzKHN0YWNrKVxuICAgIH1cblxuICAgIGNyZWF0ZVNwcml0ZUNhcmRzWmVyb0NvbG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUuc3RhY2tzLnNsaWNlKDEsIDUpLmZvckVhY2goKHN0YWNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YWNrLmNhcmRaZXJvLmhhc1ZpZXcoKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZmFjdG9yeSA9IG5ldyBDYXJkWmVyb0NvbG9yRmFjdG9yeSh0aGlzLnBpeGksIHRoaXMpXG4gICAgICAgICAgICBsZXQgdmlldyA9IGZhY3RvcnkuY3JlYXRlVmlldyhzdGFjay5jYXJkWmVybywgaW5kZXgpXG4gICAgICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh2aWV3KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZVNwcml0ZUNhcmRaZXJvRGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5kZWNrLmNhcmRaZXJvLmhhc1ZpZXcoKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlY2tDYXJkWmVyb0ZhY3RvcnkgPSBuZXcgQ2FyZFplcm9EZWNrRmFjdG9yeSh0aGlzLnBpeGksIHRoaXMpXG4gICAgICAgIGRlY2tDYXJkWmVyb0ZhY3RvcnkuY3JlYXRlVmlldygpXG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuZ2FtZS5kZWNrLmNhcmRaZXJvLnZpZXcpXG4gICAgfVxuXG4gICAgY3JlYXRlU3ByaXRlQ2FyZHNaZXJvKHN0YWNrKSB7XG4gICAgICAgIGxldCB6ZXJvRmFjdG9yeSA9IG5ldyBDYXJkWmVyb0ZhY3RvcnkodGhpcy5waXhpLCB0aGlzKVxuICAgICAgICB6ZXJvRmFjdG9yeS5jcmVhdGVWaWV3KHN0YWNrLmNhcmRaZXJvKVxuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZChzdGFjay5jYXJkWmVyby52aWV3KVxuICAgIH1cblxuICAgIGNyZWF0ZVNwcml0ZUNhcmRzKHN0YWNrKSB7XG4gICAgICAgIHN0YWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FyZEZhY3RvcnkuY3JlYXRlVmlldyhjYXJkKVxuICAgICAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQoY2FyZC52aWV3KVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L2JvYXJkLmpzIiwiaW1wb3J0IENhcmRWaWV3RmFjdG9yeSBmcm9tICcuL2NhcmRfdmlld19mYWN0b3J5J1xuaW1wb3J0IENhcmRWaWV3U2VydmljZSBmcm9tICcuL2NhcmRfdmlld19zZXJ2aWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNrRmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IocGl4aSwgYm9hcmQpIHtcbiAgICAgICAgdGhpcy5waXhpID0gcGl4aVxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmRcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5ib2FyZC5nYW1lXG4gICAgICAgIHRoaXMuZGVjayA9IHRoaXMuZ2FtZS5kZWNrXG4gICAgICAgIHRoaXMuZGVja1N0YWNrID0gdGhpcy5nYW1lLmRlY2tTdGFja1xuICAgIH1cblxuICAgIGNyZWF0ZVRvcENhcmRWaWV3KCkge1xuICAgICAgICBsZXQgY2FyZCA9IHRoaXMuZGVjay5sYXN0KClcbiAgICAgICAgaWYgKGNhcmQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FyZC5oYXNWaWV3KCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmNhcmRGYWN0b3J5LmNyZWF0ZUJhc2ljVmlldyhjYXJkKVxuICAgICAgICAgICAgQ2FyZFZpZXdTZXJ2aWNlLmFzc2lnbk1ldGhvZHMoY2FyZC52aWV3KVxuICAgICAgICAgICAgY2FyZC5kZWNrID0gdGhpcy5kZWNrXG4gICAgICAgICAgICBjYXJkLmRlY2tTdGFjayA9IHRoaXMuZGVja1N0YWNrXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvYXJkLmNhcmRGYWN0b3J5Lm1ha2VDbGlja2FibGVGb3JEZWNrKGNhcmQudmlldylcbiAgICAgICAgdGhpcy5tYWtlVmlzaWJsZShjYXJkLnZpZXcpXG4gICAgICAgIHRoaXMuc2V0RGVja1Bvc2l0aW9uKGNhcmQudmlldylcblxuICAgICAgICByZXR1cm4gY2FyZC52aWV3XG4gICAgfVxuXG4gICAgc2V0RGVja1Bvc2l0aW9uKHZpZXcpIHtcbiAgICAgICAgdmlldy5hbmNob3Iuc2V0KDApXG4gICAgICAgIHZpZXcueCA9IDIwXG4gICAgICAgIHZpZXcueSA9IDEwXG4gICAgfVxuXG4gICAgbWFrZVZpc2libGUodmlldykge1xuICAgICAgICB2aWV3LnZpc2libGUgPSB0cnVlXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvZGVja19mYWN0b3J5LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkWmVyb0RlY2tGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihwaXhpLCBib2FyZCkge1xuICAgICAgICB0aGlzLnBpeGkgPSBwaXhpXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZFxuICAgICAgICB0aGlzLmNhcmQgPSB0aGlzLmJvYXJkLmdhbWUuZGVjay5jYXJkWmVyb1xuICAgIH1cblxuICAgIGNyZWF0ZVZpZXcoKSB7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy5jcmVhdGVCYXNpY1ZpZXcoKVxuICAgICAgICB0aGlzLm1ha2VDbGlja2FibGUoKVxuICAgICAgICByZXR1cm4gdmlld1xuICAgIH1cblxuICAgIGNyZWF0ZUJhc2ljVmlldygpIHtcbiAgICAgICAgbGV0IGNhcmQgPSB0aGlzLmNhcmRcbiAgICAgICAgbGV0IHRleHR1cmUgPSB0aGlzLmdldFRleHR1cmUoKVxuICAgICAgICBsZXQgdmlldyA9IG5ldyB0aGlzLnBpeGkuU3ByaXRlKHRleHR1cmUpXG4gICAgICAgIHZpZXcuY2FyZCA9IGNhcmRcbiAgICAgICAgY2FyZC52aWV3ID0gdmlld1xuXG4gICAgICAgIHZpZXcudGludCA9IDB4MDBGRkZGIC8vIHRpbnRpbmcgZm9yIGZ1biBhbmQgdmlzaWJpbHR5XG5cbiAgICAgICAgdmlldy54ID0gMjBcbiAgICAgICAgdmlldy55ID0gMTBcblxuICAgICAgICByZXR1cm4gdmlld1xuICAgIH1cblxuICAgIGdldFRleHR1cmUoKSB7XG4gICAgICAgIGxldCB0ZXh0dXJlUGF0aCA9ICcuL2ltYWdlcy9jYXJkcy9jYXJkLXplcm8ucG5nJ1xuICAgICAgICByZXR1cm4gdGhpcy5waXhpLlRleHR1cmUuZnJvbUltYWdlKHRleHR1cmVQYXRoKVxuICAgIH1cblxuICAgIG1ha2VDbGlja2FibGUoKSB7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy5jYXJkLnZpZXdcbiAgICAgICAgdmlldy5pbnRlcmFjdGl2ZSA9IHRydWUgLy8gdGhpcyB3aWxsIGFsbG93IGl0IHRvIHJlc3BvbmQgdG8gbW91c2UgYW5kIHRvdWNoIGV2ZW50c1xuICAgICAgICB2aWV3LmJ1dHRvbk1vZGUgPSB0cnVlXG4gICAgICAgIHZpZXcub24oJ2NsaWNrJywgdGhpcy5yZXdpbmREZWNrKVxuICAgIH1cblxuICAgIHJld2luZERlY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICBsZXQgdmlldyA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICAgICAgbGV0IGNhcmQgPSB2aWV3LmNhcmRcbiAgICAgICAgbGV0IGRlY2sgPSBjYXJkLmRlY2tcbiAgICAgICAgbGV0IGdhbWUgPSBkZWNrLmdhbWVcbiAgICAgICAgbGV0IGRlY2tTdGFjayA9IGdhbWUuZGVja1N0YWNrXG5cbiAgICAgICAgZGVja1N0YWNrLm1vdmVDYXJkc0JhY2tPbkRlY2soKVxuXG4gICAgICAgIGRlY2suY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgY2FyZC52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgICAgIGNhcmQudmlldy52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgICAgIGNhcmQudmlldy5zZXRUZXh0dXJlKGNhcmQudmlldy5iYWNrVGV4dHVyZSlcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgZGVja1ZpZXcgPSBnYW1lLmJvYXJkLmRlY2tGYWN0b3J5LmNyZWF0ZVRvcENhcmRWaWV3KClcbiAgICAgICAgZ2FtZS5ib2FyZC5hcHAuc3RhZ2UuYWRkQ2hpbGQoZGVja1ZpZXcpXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvY2FyZF96ZXJvX2RlY2tfZmFjdG9yeS5qcyIsImltcG9ydCBDYXJkWmVyb0ZhY3RvcnkgZnJvbSAnLi9jYXJkX3plcm9fZmFjdG9yeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFplcm9Db2xvckZhY3RvcnkgZXh0ZW5kcyBDYXJkWmVyb0ZhY3Rvcnkge1xuICAgIGNyZWF0ZVZpZXcoY2FyZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLmNyZWF0ZUJhc2ljVmlldyhjYXJkLCBpbmRleClcbiAgICAgICAgdGhpcy5hZGRDb2xsaXNpb25Qcm9wZXJ0aWVzKHZpZXcpXG4gICAgICAgIHJldHVybiB2aWV3XG4gICAgfVxuXG4gICAgY3JlYXRlQmFzaWNWaWV3KGNhcmQsIGluZGV4KSB7XG4gICAgICAgIGxldCB0ZXh0dXJlID0gdGhpcy5nZXRUZXh0dXJlKGNhcmQpXG4gICAgICAgIGxldCB2aWV3ID0gbmV3IHRoaXMucGl4aS5TcHJpdGUodGV4dHVyZSlcbiAgICAgICAgdmlldy50aW50ID0gMHgwMEZGRkYgLy8gdGludGluZyBmb3IgZnVuIGFuZCB2aXNpYmlsdHlcbiAgICAgICAgdmlldy5jYXJkID0gY2FyZFxuICAgICAgICBjYXJkLnZpZXcgPSB2aWV3XG5cbiAgICAgICAgdmlldy54ID0gMjkwICsgaW5kZXggKiA5MFxuICAgICAgICB2aWV3LnkgPSAxMFxuXG4gICAgICAgIHJldHVybiB2aWV3XG4gICAgfVxuXG4gICAgZ2V0VGV4dHVyZShjYXJkKSB7XG4gICAgICAgIGxldCB0ZXh0dXJlUGF0aCA9ICcuL2ltYWdlcy9jYXJkcy9jYXJkLXplcm8tJyArIGNhcmQuY29sb3IgKyAnLnBuZydcbiAgICAgICAgcmV0dXJuIHRoaXMucGl4aS5UZXh0dXJlLmZyb21JbWFnZSh0ZXh0dXJlUGF0aClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9jYXJkX3plcm9fY29sb3JfZmFjdG9yeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=