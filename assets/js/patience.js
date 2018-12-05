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

            console.log('make view clickable for the card ' + view.card.easyDisp());
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
            console.log('setting board postion');

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
            console.log('set playing position');
            this.x = 50 + (stackIndex - 5) * 90;
            this.y = 150 + cardIndex * 30;
        }
    }, {
        key: 'setColorStackPosition',
        value: function setColorStackPosition(stackIndex, cardIndex) {
            console.log('set color position');
            this.anchor.set(0);
            this.removeAllListeners();

            this.x = 290 + (stackIndex - 1) * 90;
            this.y = 20;
        }
    }, {
        key: 'setDeckStackPosition',
        value: function setDeckStackPosition() {
            this.x = 100;
            this.y = 17;
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
                console.log('click and click ^^&&&&&&&&&&&&&&&&&&&&&&&&&&&&');

                if (card.next === null) {
                    console.log('we can return the card');

                    cardView.makeVisible();
                }
            }
        }
    }, {
        key: 'onDeckClick',
        value: function onDeckClick(event) {
            event.stopPropagation();

            console.log('click on the deck card');

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
            game.disp();
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
                console.log('back');
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

            console.log('on drag start ' + event.currentTarget.card.easyDisp() + '*************************************************');

            card.possibleCollisions = game.collisionCardsFor(card);

            console.log(card.possibleCollisions);

            cardView.data = event.data;
            cardView.dragging = true;

            cardView.updateDragSettingsAndNext();
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd(event) {
            event.stopPropagation();

            console.log('on drag end ' + event.currentTarget.card.easyDisp() + '*************************************************');

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

                console.log('on drag move ' + event.currentTarget.card.easyDisp() + '*************************************************');

                var cardCollision = false;
                card.possibleCollisions.forEach(function (card2) {
                    if (cardView.hitTestRectangle(cardView, card2.view)) {
                        console.log('shock with ' + card2.toString());
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
                console.log('moveCards ' + res);
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
            var texture = this.board.backTexture;
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

game.deck.cards = [];
game.deck.easyBuild(['X3S', 'X5H']);
game.stacks[0].easyBuild([]);

// game.playingStacks[0].easyBuild(['1S'])
// game.playingStacks[1].easyBuild(['1H', '2S'])
// game.playingStacks[2].easyBuild(['1D'])
// game.playingStacks[3].easyBuild(['2D'])
// game.playingStacks[4].easyBuild(['X6C', 'X13H', 'X2C', 'X7D', '5S'])
// game.playingStacks[5].easyBuild(['X6H', 'X10H', 'X13S', 'X11S', 'X1C', 'X12H'])
// game.playingStacks[6].easyBuild(['X8C', 'X9S', 'X12H', 'X11C', 'X12C', 'X4S', '13C'])

game.disp();

console.log('****************');

game.easyDisp();
var pixi = PIXI;

var app = new pixi.Application(1000, 600, { backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

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
                    if (sourceStack.empty() === false) {
                        return true;
                    }
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
                console.log('** move not possible **');
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
            view.x = 3;
            view.y = 3;
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
            var texture = this.board.backTexture;
            var view = new this.pixi.Sprite(texture);
            view.card = card;
            card.view = view;

            view.tint = 0x00FFFF; // tinting for fun and visibilty

            view.x = 10;
            view.y = 10;

            return view;
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

            game.disp();
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
            var texturePath = './images/cards/' + card.color + '-1.png';
            return this.pixi.Texture.fromImage(texturePath);
        }
    }]);

    return CardZeroColorFactory;
}(_card_zero_factory2.default);

exports.default = CardZeroColorFactory;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjU5ZTM3NDI0OThkZDg3NDM1NjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvc3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2FyZF92aWV3X2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2FyZF92aWV3X3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2FyZF96ZXJvX2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2RlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jYXJkX3plcm9fZGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3N0YWNrX3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jYXJkX3plcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9jb2xvcl9zdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2NhcmRfemVyb19jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2RlY2tfc3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGVja19mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2NhcmRfemVyb19kZWNrX2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2FyZF96ZXJvX2NvbG9yX2ZhY3RvcnkuanMiXSwibmFtZXMiOlsiQ2FyZCIsInZhbHVlIiwiY29sb3IiLCJ2aXNpYmxlIiwibmV4dCIsInN0YWNrIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwic3RyIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInZpZXciLCJ1bmRlZmluZWQiLCJjYXJkIiwiZm9sbG93c1ZhbHVlIiwiaGFzU2FtZUNvbG9yIiwiaGFzT3Bwb3NpdGVDb2xvciIsInJlYWxDb2xvciIsInRvcENhcmRzQ291bnQiLCJnZXRJbmRleFBvc2l0aW9uIiwiY2FyZHMiLCJpbmRleE9mIiwiZ2V0Q29sb3JGcm9tSW5pdGlhbCIsImxlbmd0aCIsIk51bWJlciIsImluaXRpYWwiLCJTdGFjayIsImdhbWUiLCJjYXJkWmVybyIsInB1c2giLCJsYXN0VHdvIiwibGFzdCIsInF1YW50aXR5Iiwic3BsaWNlIiwibGFzdENhcmQiLCJsYXN0T25lIiwiZm9yRWFjaCIsIm1hcCIsImFycmF5RWFzeURpc3AiLCJlbXB0eSIsImluZGV4IiwicmVzIiwidmlzaWJsZUNhcmRzIiwiZm91bmROb25WaXNpYmxlQ2FyZCIsImMiLCJyZXZlcnNlIiwic3RhY2tzIiwibGlzdCIsImVsZW1lbnQiLCJlYXN5QnVpbGQiLCJlYXN5RGlzcCIsImpvaW4iLCJDYXJkVmlld0ZhY3RvcnkiLCJwaXhpIiwiYm9hcmQiLCJjcmVhdGVCYXNpY1ZpZXciLCJtYWtlVmlld0RyYWdnYWJsZSIsImFzc2lnbk1ldGhvZHMiLCJzZXRDYXJkVGV4dHVyZSIsInNldEJvYXJkUG9zaXRpb24iLCJmcm9udFRleHR1cmUiLCJnZXRUZXh0dXJlIiwiYmFja1RleHR1cmUiLCJTcHJpdGUiLCJ0ZXh0dXJlUGF0aCIsIlRleHR1cmUiLCJmcm9tSW1hZ2UiLCJpbnRlcmFjdGl2ZSIsImJ1dHRvbk1vZGUiLCJhbmNob3IiLCJzZXQiLCJvbiIsIm9uQ2xpY2siLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsIm9uRHJhZ01vdmUiLCJhZGRDb2xsaXNpb25Qcm9wZXJ0aWVzIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwib25EZWNrQ2xpY2siLCJzcHJpdGUiLCJneCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiZ2V0R2xvYmFsUG9zaXRpb24iLCJ4IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImd5IiwieSIsImNlbnRlclgiLCJ3aWR0aCIsImNlbnRlclkiLCJoZWlnaHQiLCJoYWxmV2lkdGgiLCJoYWxmSGVpZ2h0IiwieEFuY2hvck9mZnNldCIsInlBbmNob3JPZmZzZXQiLCJjaXJjdWxhciIsInJhZGl1cyIsIl9idW1wUHJvcGVydGllc0FkZGVkIiwiQ2FyZFZpZXdTZXJ2aWNlIiwiaGl0VGVzdFJlY3RhbmdsZSIsImJpbmQiLCJzZXRQbGF5aW5nU3RhY2tQb3NpdGlvbiIsInNldENvbG9yU3RhY2tQb3NpdGlvbiIsInNldERlY2tTdGFja1Bvc2l0aW9uIiwidmFsaWRhdGVEcmFnIiwiY2FsY3VsYXRlRGVsdGEiLCJtYWtlVmlzaWJsZSIsIm1ha2VOb3RWaXNpYmxlIiwibW92ZVRvcFppbmRleCIsInVwZGF0ZUJvYXJkUG9zaXRpb25BbmROZXh0IiwidXBkYXRlRHJhZ1NldHRpbmdzQW5kTmV4dCIsInNldEJvYXJkUG9zaXRpb25BbmROZXh0Iiwic3RhY2tJbmRleCIsImNhcmRJbmRleCIsImRlbHRhWCIsImRlbHRhWSIsIm5ld1Bvc2l0aW9uIiwiY29udGFpbmVyIiwicGFyZW50Iiwic2l6ZSIsImNoaWxkcmVuIiwic2V0Q2hpbGRJbmRleCIsImV2ZW50IiwiY2FyZFZpZXciLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGVjayIsImRlY2tTdGFjayIsInBvcE9uZSIsImNhcmRGYWN0b3J5IiwiZGlzcERlY2tBbmREZWNrU3RhY2siLCJkaXNwIiwic2V0VGV4dHVyZSIsInBvc3NpYmxlQ29sbGlzaW9ucyIsImNvbGxpc2lvbkNhcmRzRm9yIiwiZGF0YSIsImRyYWdnaW5nIiwiYWxwaGEiLCJjYXJkQ29sbGlzaW9uIiwiY2FyZDIiLCJvblRvcE9mIiwiZ2V0TG9jYWxQb3NpdGlvbiIsInN0YWNrMiIsInNvdXJjZUluZGV4IiwiZGVzdGluYXRpb25JbmRleCIsIm1vdmVDYXJkcyIsInIxIiwicjIiLCJnbG9iYWwiLCJoaXQiLCJjb21iaW5lZEhhbGZXaWR0aHMiLCJjb21iaW5lZEhhbGZIZWlnaHRzIiwidngiLCJ2eSIsIk1hdGgiLCJhYnMiLCJDYXJkWmVyb0ZhY3RvcnkiLCJ0ZXh0dXJlIiwidGludCIsImRpc3RyaWJ1dGUiLCJQSVhJIiwiYXBwIiwiQXBwbGljYXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVNwcml0ZUNhcmRzWmVyb0NvbG9yIiwiZGlzcEFsbFN0YWNrcyIsIkdhbWUiLCJwcmVwYXJlU3RhY2tzIiwiY29sb3JTdGFja3MiLCJwbGF5aW5nU3RhY2tzIiwicG9wIiwidG9wQ2FyZCIsImNvbXBsZXRlIiwiaXNEZWNrU3RhY2siLCJmcm9tRGVja1N0YWNrSXNNb3ZlUG9zc2libGUiLCJpc1BsYXlpbmdTdGFjayIsImZyb21QbGF5aW5nU3RhY2tJc01vdmVQb3NzaWJsZSIsInNvdXJjZVN0YWNrIiwiZGVzdGluYXRpb25TdGFjayIsImNhcmRzVG9Nb3ZlIiwidG9wU3RhY2tDYXJkIiwiaXNDb2xvclN0YWNrIiwiZm9sbG93cyIsImZvbGxvd3NXaXRoT3Bwb3NpdGVDb2xvciIsImlzQWNlIiwiaXNNb3ZlUG9zc2libGUiLCJ0b3BDYXJkcyIsInBsYXlpbmdUb3BDYXJkc0ZvciIsImNvbmNhdCIsImNvbG9yVG9wQ2FyZHMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJjb21tb25TdGFja3NEaXNwIiwicGxheWluZ1N0YWNrRGlzcCIsImkiLCJmdWxsIiwibGluZSIsIkRlY2siLCJnZW5lcmF0ZUNhcmRzIiwic2h1ZmZsZSIsImNvbG9ycyIsInNvcnQiLCJhIiwiYiIsInJhbmRvbSIsIkNhcmREZWNrWmVybyIsIlN0YWNrU2VydmljZSIsInN0YWNrVHlwZSIsIkNhcmRaZXJvIiwiQ29sb3JTdGFjayIsImNvbXBhcmF0b3IiLCJpbml0dmFsdWUiLCJhcnIiLCJDYXJkWmVyb0NvbG9yIiwiY29sb3JTdGFjayIsIkRlY2tTdGFjayIsIkJvYXJkIiwic2V0QmFja1RleHR1cmUiLCJkZWNrRmFjdG9yeSIsImNhcmRaZXJvRGVjayIsImNyZWF0ZVNwcml0ZUNhcmRaZXJvRGVjayIsImRlY2tWaWV3IiwiY3JlYXRlVG9wQ2FyZFZpZXciLCJzdGFnZSIsImFkZENoaWxkIiwiZGlzcFN0YWNrIiwiY3JlYXRlU3ByaXRlQ2FyZHNaZXJvIiwiY3JlYXRlU3ByaXRlQ2FyZHMiLCJoYXNWaWV3IiwiZmFjdG9yeSIsImNyZWF0ZVZpZXciLCJkZWNrQ2FyZFplcm9GYWN0b3J5IiwiemVyb0ZhY3RvcnkiLCJEZWNrRmFjdG9yeSIsIm1ha2VDbGlja2FibGVGb3JEZWNrIiwic2V0RGVja1Bvc2l0aW9uIiwiQ2FyZFplcm9EZWNrRmFjdG9yeSIsIm1ha2VDbGlja2FibGUiLCJyZXdpbmREZWNrIiwibW92ZUNhcmRzQmFja09uRGVjayIsIkNhcmRaZXJvQ29sb3JGYWN0b3J5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzVEcUJBLEk7QUFDakIsa0JBQVlDLEtBQVosRUFBbUJDLEtBQW5CLEVBQTBDO0FBQUEsWUFBaEJDLE9BQWdCLHVFQUFOLElBQU07O0FBQUE7O0FBQ3RDLGFBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGFB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Ozs7Ozs7Ozs7Ozs7Ozs7QUNEckI7Ozs7Ozs7Ozs7OztJQUVxQkksb0I7Ozs7Ozs7Ozs7O21DQUNOek8sSSxFQUFNMkIsSyxFQUFPO0FBQ3BCLGdCQUFJN0IsT0FBTyxLQUFLNEMsZUFBTCxDQUFxQjFDLElBQXJCLEVBQTJCMkIsS0FBM0IsQ0FBWDtBQUNBLGlCQUFLb0Msc0JBQUwsQ0FBNEJqRSxJQUE1QjtBQUNBLG1CQUFPQSxJQUFQO0FBQ0g7Ozt3Q0FFZUUsSSxFQUFNMkIsSyxFQUFPO0FBQ3pCLGdCQUFJd0gsVUFBVSxLQUFLbkcsVUFBTCxDQUFnQmhELElBQWhCLENBQWQ7QUFDQSxnQkFBSUYsT0FBTyxJQUFJLEtBQUswQyxJQUFMLENBQVVVLE1BQWQsQ0FBcUJpRyxPQUFyQixDQUFYO0FBQ0FySixpQkFBS3NKLElBQUwsR0FBWSxRQUFaLENBSHlCLENBR0o7QUFDckJ0SixpQkFBS0UsSUFBTCxHQUFZQSxJQUFaO0FBQ0FBLGlCQUFLRixJQUFMLEdBQVlBLElBQVo7O0FBRUFBLGlCQUFLMEUsQ0FBTCxHQUFTLE1BQU03QyxRQUFRLEVBQXZCO0FBQ0E3QixpQkFBSzhFLENBQUwsR0FBUyxFQUFUOztBQUVBLG1CQUFPOUUsSUFBUDtBQUNIOzs7bUNBRVVFLEksRUFBTTtBQUNiLGdCQUFJbUQsY0FBYywyQkFBMkJuRCxLQUFLWixLQUFoQyxHQUF3QyxRQUExRDtBQUNBLG1CQUFPLEtBQUtvRCxJQUFMLENBQVVZLE9BQVYsQ0FBa0JDLFNBQWxCLENBQTRCRixXQUE1QixDQUFQO0FBQ0g7Ozs7OztrQkF2QmdCc0wsb0IiLCJmaWxlIjoiLi9hc3NldHMvanMvcGF0aWVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmNTllMzc0MjQ5OGRkODc0MzU2OCIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIGNvbG9yLCB2aXNpYmxlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbFxuICAgICAgICB0aGlzLnN0YWNrID0gbnVsbFxuICAgIH1cblxuICAgIGRpc3AoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9TdHJpbmcoKSlcbiAgICB9XG5cbiAgICBlYXN5RGlzcCgpIHtcbiAgICAgICAgbGV0IHN0ciA9ICcnXG5cbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RyID0gJ1gnXG4gICAgICAgIH1cbiAgICAgICAgc3RyICs9IHRoaXMudmFsdWVcbiAgICAgICAgc3RyICs9IHRoaXMuY29sb3JbMF0udG9VcHBlckNhc2UoKVxuICAgICAgICByZXR1cm4gXCInXCIgKyBzdHIgKyBcIidcIlxuICAgIH1cblxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoJ1sgJyArIHRoaXMudmFsdWUgKyAnICcgKyB0aGlzLmNvbG9yLnNsaWNlKDAsNCkgKyAnXScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKCdbWCAnICsgdGhpcy52YWx1ZSArICcgJyArIHRoaXMuY29sb3Iuc2xpY2UoMCw0KSArICddJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc1ZpZXcoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy52aWV3ICE9PSB1bmRlZmluZWQpXG4gICAgfVxuXG4gICAgaXNBY2UoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlID09PSAxKSAmJiAodGhpcy5jb2xvciA9PT0gY29sb3IpXG4gICAgfVxuXG4gICAgZm9sbG93cyhjYXJkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvbGxvd3NWYWx1ZShjYXJkKSAmJiB0aGlzLmhhc1NhbWVDb2xvcihjYXJkKVxuICAgIH1cblxuICAgIGZvbGxvd3NXaXRoT3Bwb3NpdGVDb2xvcihjYXJkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvbGxvd3NWYWx1ZShjYXJkKSAmJiB0aGlzLmhhc09wcG9zaXRlQ29sb3IoY2FyZClcbiAgICB9XG5cbiAgICBmb2xsb3dzVmFsdWUoY2FyZCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gKGNhcmQudmFsdWUgKyAxKVxuICAgIH1cblxuICAgIGhhc1NhbWVDb2xvcihjYXJkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yID09PSBjYXJkLmNvbG9yXG4gICAgfVxuXG4gICAgaGFzT3Bwb3NpdGVDb2xvcihjYXJkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWxDb2xvcigpICE9PSBjYXJkLnJlYWxDb2xvcigpXG4gICAgfVxuXG4gICAgcmVhbENvbG9yKCkge1xuICAgICAgICBpZiAoKHRoaXMuY29sb3IgPT09ICdoZWFydCcpIHx8ICh0aGlzLmNvbG9yID09PSAnZGlhbW9uZCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlZCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnYmxhY2snXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b3BDYXJkc0NvdW50KCkge1xuICAgICAgICBpZiAodGhpcy5uZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDEgKyB0aGlzLm5leHQudG9wQ2FyZHNDb3VudCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJbmRleFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMuc3RhY2suZ2V0SW5kZXhQb3NpdGlvbigpLCB0aGlzLnN0YWNrLmNhcmRzLmluZGV4T2YodGhpcyldXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc3lCdWlsZChzdHIpIHtcbiAgICAgICAgbGV0IHZpc2libGUgPSB0cnVlXG4gICAgICAgIGxldCBjb2xvciwgdmFsdWVcblxuICAgICAgICAvLyB2aXNpYmlsaXR5XG4gICAgICAgIGlmIChzdHJbMF0gPT09ICdYJykge1xuICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlXG4gICAgICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMSwgNSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbG9yXG4gICAgICAgIGNvbG9yID0gdGhpcy5nZXRDb2xvckZyb21Jbml0aWFsKHN0cltzdHIubGVuZ3RoIC0gMV0pXG4gICAgICAgIHN0ciA9IHN0ci5zbGljZSgwLCBzdHIubGVuZ3RoIC0gMSlcblxuICAgICAgICAvLyB2YWx1ZVxuICAgICAgICB2YWx1ZSA9IE51bWJlcihzdHIpXG5cbiAgICAgICAgcmV0dXJuIG5ldyBDYXJkKHZhbHVlLCBjb2xvciwgdmlzaWJsZSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29sb3JGcm9tSW5pdGlhbChpbml0aWFsKSB7XG4gICAgICAgIHN3aXRjaCAoaW5pdGlhbCkge1xuICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgIHJldHVybiAnaGVhcnQnXG4gICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgcmV0dXJuICdkaWFtb25kJ1xuICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIHJldHVybiAnc3BhZGUnXG4gICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgcmV0dXJuICdjbHViJ1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgJ1VucmVjb2duaXplZCBpbml0YWwnXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2NhcmQuanMiLCJpbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnXG5pbXBvcnQgQ2FyZFplcm8gZnJvbSAnLi9jYXJkX3plcm8nXG5cbi8vIFRoaXMgaXMgYSBzdGFjayBvZiBjYXJkc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2sge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICAgICAgdGhpcy5jYXJkWmVybyA9IG5ldyBDYXJkWmVybyh0aGlzKVxuICAgIH1cblxuICAgIHB1c2goY2FyZCkge1xuICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZClcbiAgICAgICAgY2FyZC5zdGFjayA9IHRoaXNcblxuICAgICAgICBsZXQgbGFzdFR3byA9IHRoaXMubGFzdCgyKVxuICAgICAgICBpZiAobGFzdFR3byAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGFzdFR3b1swXS5uZXh0ID0gbGFzdFR3b1sxXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9wKHN0YWNrLCBxdWFudGl0eSA9IDEpIHtcbiAgICAgICAgbGV0IGNhcmRzID0gdGhpcy5jYXJkcy5zcGxpY2UodGhpcy5jYXJkcy5sZW5ndGggLSBxdWFudGl0eSwgcXVhbnRpdHkpXG4gICAgICAgIGxldCBsYXN0Q2FyZCA9IHRoaXMubGFzdE9uZSgpXG4gICAgICAgIGlmIChsYXN0Q2FyZCkge1xuICAgICAgICAgICAgbGFzdENhcmQubmV4dCA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goY2FyZClcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGRpc3AoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9TdHJpbmcoKSlcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHMubWFwKChjYXJkKSA9PiB7IHJldHVybiBjYXJkLnRvU3RyaW5nKCkgfSlcbiAgICB9XG5cbiAgICBlYXN5RGlzcCgpIHtcbiAgICAgICAgbGV0IGNhcmRzID0gdGhpcy5jYXJkc1xuICAgICAgICByZXR1cm4gU3RhY2suYXJyYXlFYXN5RGlzcChjYXJkcylcbiAgICB9XG5cbiAgICBzdGF0aWMgYXJyYXlFYXN5RGlzcChjYXJkcykge1xuICAgICAgICBsZXQgbGlzdCA9IGNhcmRzLm1hcCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhcmQuZWFzeURpc3AoKVxuICAgICAgICB9KVxuICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3Quam9pbignLCAnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0KHF1YW50aXR5ID0gMSkge1xuICAgICAgICBpZiAodGhpcy5lbXB0eSgpKSB7IHJldHVybiBudWxsIH1cbiAgICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoIDwgcXVhbnRpdHkpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgICAgIGxldCBjYXJkcyA9IFtdXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gcXVhbnRpdHk7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgY2FyZHMucHVzaCh0aGlzLmNhcmRzW3RoaXMuY2FyZHMubGVuZ3RoIC0gaW5kZXhdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJkc1xuICAgIH1cblxuICAgIGxhc3RPbmUoKSB7XG4gICAgICAgIGxldCByZXMgPSB0aGlzLmxhc3QoKVxuICAgICAgICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3QoKVswXVxuICAgIH1cblxuICAgIGVtcHR5KCkge1xuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIHRydWUgfSBlbHNlIHsgcmV0dXJuIGZhbHNlIH1cbiAgICB9XG5cbiAgICB2aXNpYmxlQ2FyZHNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZUNhcmRzKCkubGVuZ3RoXG4gICAgfVxuXG4gICAgdmlzaWJsZUNhcmRzKCkge1xuICAgICAgICBpZiAodGhpcy5lbXB0eSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuY2FyZHMubGVuZ3RoIC0gMVxuICAgICAgICBsZXQgY2FyZHMgPSBbXVxuICAgICAgICBsZXQgZm91bmROb25WaXNpYmxlQ2FyZCA9IGZhbHNlXG4gICAgICAgIHdoaWxlIChmb3VuZE5vblZpc2libGVDYXJkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5jYXJkc1tpbmRleF1cbiAgICAgICAgICAgIGlmIChjLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYXJkcy5wdXNoKGMpXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpbmRleCAtIDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZHMucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgZm91bmROb25WaXNpYmxlQ2FyZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FyZHNcbiAgICB9XG5cbiAgICBnZXRJbmRleFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLnN0YWNrcy5pbmRleE9mKHRoaXMpXG4gICAgfVxuXG4gICAgZWFzeUJ1aWxkKGxpc3QpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnB1c2goQ2FyZC5lYXN5QnVpbGQoZWxlbWVudCkpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9zdGFjay5qcyIsImltcG9ydCBDYXJkVmlld1NlcnZpY2UgZnJvbSAnLi9jYXJkX3ZpZXdfc2VydmljZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFZpZXdGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihwaXhpLCBib2FyZCkge1xuICAgICAgICB0aGlzLnBpeGkgPSBwaXhpXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZFxuICAgIH1cblxuICAgIGNyZWF0ZVZpZXcoY2FyZCkge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMuY3JlYXRlQmFzaWNWaWV3KGNhcmQpXG4gICAgICAgIHRoaXMubWFrZVZpZXdEcmFnZ2FibGUodmlldylcblxuICAgICAgICBDYXJkVmlld1NlcnZpY2UuYXNzaWduTWV0aG9kcyh2aWV3KVxuXG4gICAgICAgIHZpZXcuc2V0Q2FyZFRleHR1cmUoKVxuICAgICAgICB2aWV3LnNldEJvYXJkUG9zaXRpb24oKVxuICAgIH1cblxuICAgIGNyZWF0ZUJhc2ljVmlldyhjYXJkKSB7XG4gICAgICAgIGxldCB2aWV3XG4gICAgICAgIGxldCBmcm9udFRleHR1cmUgPSB0aGlzLmdldFRleHR1cmUoY2FyZClcbiAgICAgICAgbGV0IGJhY2tUZXh0dXJlID0gdGhpcy5ib2FyZC5iYWNrVGV4dHVyZVxuXG4gICAgICAgIGlmIChjYXJkLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHZpZXcgPSBuZXcgdGhpcy5waXhpLlNwcml0ZShmcm9udFRleHR1cmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3ID0gbmV3IHRoaXMucGl4aS5TcHJpdGUoYmFja1RleHR1cmUpXG4gICAgICAgIH1cblxuICAgICAgICB2aWV3LmZyb250VGV4dHVyZSA9IGZyb250VGV4dHVyZVxuICAgICAgICB2aWV3LmJhY2tUZXh0dXJlID0gYmFja1RleHR1cmVcblxuICAgICAgICB2aWV3LmNhcmQgPSBjYXJkXG4gICAgICAgIGNhcmQudmlldyA9IHZpZXdcblxuICAgICAgICByZXR1cm4gdmlld1xuICAgIH1cblxuICAgIGdldFRleHR1cmUoY2FyZCkge1xuICAgICAgICBsZXQgdGV4dHVyZVBhdGggPSAnLi9hc3NldHMvaW1hZ2VzL2NhcmRzLycgKyBjYXJkLmNvbG9yICsgJy0nICsgY2FyZC52YWx1ZSArICcucG5nJ1xuICAgICAgICByZXR1cm4gdGhpcy5waXhpLlRleHR1cmUuZnJvbUltYWdlKHRleHR1cmVQYXRoKVxuICAgIH1cblxuICAgIG1ha2VWaWV3RHJhZ2dhYmxlKHZpZXcpIHtcbiAgICAgICAgdmlldy5pbnRlcmFjdGl2ZSA9IHRydWUgLy8gdGhpcyB3aWxsIGFsbG93IGl0IHRvIHJlc3BvbmQgdG8gbW91c2UgYW5kIHRvdWNoIGV2ZW50c1xuICAgICAgICB2aWV3LmJ1dHRvbk1vZGUgPSB0cnVlIC8vIHRoaXMgYnV0dG9uIG1vZGUgd2lsbCBtZWFuIHRoZSBoYW5kIGN1cnNvciBhcHBlYXJzIHdoZW4geW91IHJvbGwgb3ZlclxuICAgICAgICB2aWV3LmFuY2hvci5zZXQoMC41LCAwLjIpXG5cbiAgICAgICAgdmlldy5vbignY2xpY2snLCBDYXJkVmlld1NlcnZpY2Uub25DbGljaylcbiAgICAgICAgLm9uKCdwb2ludGVyZG93bicsIENhcmRWaWV3U2VydmljZS5vbkRyYWdTdGFydClcbiAgICAgICAgLm9uKCdwb2ludGVydXAnLCBDYXJkVmlld1NlcnZpY2Uub25EcmFnRW5kKVxuICAgICAgICAub24oJ3BvaW50ZXJtb3ZlJywgQ2FyZFZpZXdTZXJ2aWNlLm9uRHJhZ01vdmUpXG4gICAgICAgIC5vbigncG9pbnRlcnVwb3V0c2lkZScsIENhcmRWaWV3U2VydmljZS5vbkRyYWdFbmQpXG5cbiAgICAgICAgdGhpcy5hZGRDb2xsaXNpb25Qcm9wZXJ0aWVzKHZpZXcpXG4gICAgfVxuXG4gICAgbWFrZUNsaWNrYWJsZUZvckRlY2sodmlldykge1xuICAgICAgICB2aWV3LmludGVyYWN0aXZlID0gdHJ1ZSAvLyB0aGlzIHdpbGwgYWxsb3cgaXQgdG8gcmVzcG9uZCB0byBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzXG4gICAgICAgIHZpZXcuYnV0dG9uTW9kZSA9IHRydWUgLy8gdGhpcyBidXR0b24gbW9kZSB3aWxsIG1lYW4gdGhlIGhhbmQgY3Vyc29yIGFwcGVhcnMgd2hlbiB5b3Ugcm9sbCBvdmVyXG5cbiAgICAgICAgY29uc29sZS5sb2coJ21ha2UgdmlldyBjbGlja2FibGUgZm9yIHRoZSBjYXJkICcgKyB2aWV3LmNhcmQuZWFzeURpc3AoKSlcbiAgICAgICAgdmlldy5yZW1vdmVBbGxMaXN0ZW5lcnMoKVxuICAgICAgICB2aWV3Lm9uKCdjbGljaycsIENhcmRWaWV3U2VydmljZS5vbkRlY2tDbGljaylcbiAgICB9XG5cbiAgICAvLyBgYWRkQ29sbGlzaW9uUHJvcGVydGllc2AgYWRkcyBleHRyYSBwcm9wZXJ0aWVzIHRvIHNwcml0ZXMgdG8gaGVscFxuICAgIC8vIHNpbXBsaWZ5IHRoZSBjb2xsaXNpb24gY29kZS4gSXQgd29uJ3QgYWRkIHRoZXNlIHByb3BlcnRpZXMgaWYgdGhleVxuICAgIC8vIGFscmVhZHkgZXhpc3Qgb24gdGhlIHNwcml0ZS4gQWZ0ZXIgdGhlc2UgcHJvcGVydGllcyBoYXZlIGJlZW5cbiAgICAvLyBhZGRlZCwgdGhpcyBtZXRob2RzIGFkZHMgYSBCb29sZWFuIHByb3BlcnR5IHRvIHRoZSBzcHJpdGUgY2FsbGVkIGBfYnVtcFByb3BlcnRpZXNBZGRlZGBcbiAgICAvLyBhbmQgc2V0cyBpdCB0byBgdHJ1ZWAgdG8gZmxhZyB0aGF0IHRoZSBzcHJpdGUgaGFzIHRoZXNlXG4gICAgLy8gbmV3IHByb3BlcnRpZXNcbiAgICBhZGRDb2xsaXNpb25Qcm9wZXJ0aWVzKHNwcml0ZSkge1xuICAgICAgICAvLyBBZGQgcHJvcGVydGllcyB0byBQaXhpIHNwcml0ZXNcbiAgICAgICAgLy8gaWYgKHRoaXMucmVuZGVyZXIgPT09IFwicGl4aVwiKSB7XG5cbiAgICAgICAgaWYgKHNwcml0ZS5neCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ByaXRlLCBcImd4XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiBzcHJpdGUuZ2V0R2xvYmFsUG9zaXRpb24oKS54IH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ByaXRlLmd5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwiZ3lcIiwge1xuICAgICAgICAgICAgICAgIGdldCgpe3JldHVybiBzcHJpdGUuZ2V0R2xvYmFsUG9zaXRpb24oKS55fSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ByaXRlLmNlbnRlclggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJjZW50ZXJYXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKXtyZXR1cm4gc3ByaXRlLnggKyBzcHJpdGUud2lkdGggLyAyfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ByaXRlLmNlbnRlclkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJjZW50ZXJZXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKXtyZXR1cm4gc3ByaXRlLnkgKyBzcHJpdGUuaGVpZ2h0IC8gMn0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5oYWxmV2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJoYWxmV2lkdGhcIiwge1xuICAgICAgICAgICAgICAgIGdldCgpe3JldHVybiBzcHJpdGUud2lkdGggLyAyfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ByaXRlLmhhbGZIZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJoYWxmSGVpZ2h0XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKXtyZXR1cm4gc3ByaXRlLmhlaWdodCAvIDJ9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcHJpdGUueEFuY2hvck9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ByaXRlLCBcInhBbmNob3JPZmZzZXRcIiwge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcml0ZS5hbmNob3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwcml0ZS53aWR0aCAqIHNwcml0ZS5hbmNob3IueFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS55QW5jaG9yT2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwieUFuY2hvck9mZnNldFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ByaXRlLmFuY2hvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ByaXRlLmhlaWdodCAqIHNwcml0ZS5hbmNob3IueVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5jaXJjdWxhciAmJiBzcHJpdGUucmFkaXVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwicmFkaXVzXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiBzcHJpdGUud2lkdGggLyAyfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGEgQm9vbGVhbiBgX2J1bXBQcm9wZXJ0aWVzQWRkZWRgIHByb3BlcnR5IHRvIHRoZSBzcHJpdGUgdG8gZmxhZyBpdFxuICAgICAgICAvLyBhcyBoYXZpbmcgdGhlc2UgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgc3ByaXRlLl9idW1wUHJvcGVydGllc0FkZGVkID0gdHJ1ZVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L2NhcmRfdmlld19mYWN0b3J5LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkVmlld1NlcnZpY2Uge1xuICAgIHN0YXRpYyBhc3NpZ25NZXRob2RzKHZpZXcpIHtcbiAgICAgICAgdmlldy5oaXRUZXN0UmVjdGFuZ2xlID0gdGhpcy5oaXRUZXN0UmVjdGFuZ2xlXG5cbiAgICAgICAgdmlldy5zZXRCb2FyZFBvc2l0aW9uID0gdGhpcy5zZXRCb2FyZFBvc2l0aW9uLmJpbmQodmlldylcbiAgICAgICAgdmlldy5zZXRQbGF5aW5nU3RhY2tQb3NpdGlvbiA9IHRoaXMuc2V0UGxheWluZ1N0YWNrUG9zaXRpb24uYmluZCh2aWV3KVxuICAgICAgICB2aWV3LnNldENvbG9yU3RhY2tQb3NpdGlvbiA9IHRoaXMuc2V0Q29sb3JTdGFja1Bvc2l0aW9uLmJpbmQodmlldylcbiAgICAgICAgdmlldy5zZXREZWNrU3RhY2tQb3NpdGlvbiA9IHRoaXMuc2V0RGVja1N0YWNrUG9zaXRpb24uYmluZCh2aWV3KVxuXG4gICAgICAgIHZpZXcudmFsaWRhdGVEcmFnID0gdGhpcy52YWxpZGF0ZURyYWcuYmluZCh2aWV3KVxuICAgICAgICB2aWV3LmNhbGN1bGF0ZURlbHRhID0gdGhpcy5jYWxjdWxhdGVEZWx0YS5iaW5kKHZpZXcpXG4gICAgICAgIHZpZXcubWFrZVZpc2libGUgPSB0aGlzLm1ha2VWaXNpYmxlLmJpbmQodmlldylcbiAgICAgICAgdmlldy5tYWtlTm90VmlzaWJsZSA9IHRoaXMubWFrZU5vdFZpc2libGUuYmluZCh2aWV3KVxuICAgICAgICB2aWV3LnNldENhcmRUZXh0dXJlID0gdGhpcy5zZXRDYXJkVGV4dHVyZS5iaW5kKHZpZXcpXG4gICAgICAgIHZpZXcubW92ZVRvcFppbmRleCA9IHRoaXMubW92ZVRvcFppbmRleC5iaW5kKHZpZXcpXG5cbiAgICAgICAgdmlldy51cGRhdGVCb2FyZFBvc2l0aW9uQW5kTmV4dCA9IHRoaXMudXBkYXRlQm9hcmRQb3NpdGlvbkFuZE5leHQuYmluZCh2aWV3KVxuICAgICAgICB2aWV3LnVwZGF0ZURyYWdTZXR0aW5nc0FuZE5leHQgPSB0aGlzLnVwZGF0ZURyYWdTZXR0aW5nc0FuZE5leHQuYmluZCh2aWV3KVxuICAgICAgICB2aWV3LnNldEJvYXJkUG9zaXRpb25BbmROZXh0ID0gdGhpcy5zZXRCb2FyZFBvc2l0aW9uQW5kTmV4dC5iaW5kKHZpZXcpXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEJvYXJkUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIGJvYXJkIHBvc3Rpb24nKVxuXG4gICAgICAgIGNvbnN0IFtzdGFja0luZGV4LCBjYXJkSW5kZXhdID0gdGhpcy5jYXJkLmdldEluZGV4UG9zaXRpb24oKVxuICAgICAgICBpZiAoc3RhY2tJbmRleCA+PSA1KSB7XG4gICAgICAgICAgICB0aGlzLnNldFBsYXlpbmdTdGFja1Bvc2l0aW9uKHN0YWNrSW5kZXgsIGNhcmRJbmRleClcbiAgICAgICAgfSBlbHNlIGlmIChzdGFja0luZGV4ID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JTdGFja1Bvc2l0aW9uKHN0YWNrSW5kZXgsIGNhcmRJbmRleClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGVja1N0YWNrUG9zaXRpb24oKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHNldFBsYXlpbmdTdGFja1Bvc2l0aW9uKHN0YWNrSW5kZXgsIGNhcmRJbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0IHBsYXlpbmcgcG9zaXRpb24nKVxuICAgICAgICB0aGlzLnggPSA1MCArIChzdGFja0luZGV4IC0gNSkgKiA5MFxuICAgICAgICB0aGlzLnkgPSAxNTAgKyBjYXJkSW5kZXggKiAzMFxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRDb2xvclN0YWNrUG9zaXRpb24oc3RhY2tJbmRleCwgY2FyZEluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXQgY29sb3IgcG9zaXRpb24nKVxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMClcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKVxuXG4gICAgICAgIHRoaXMueCA9IDI5MCArIChzdGFja0luZGV4IC0gMSkgKiA5MFxuICAgICAgICB0aGlzLnkgPSAyMFxuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZWNrU3RhY2tQb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy54ID0gMTAwXG4gICAgICAgIHRoaXMueSA9IDE3XG4gICAgfVxuXG4gICAgc3RhdGljIHNldEJvYXJkUG9zaXRpb25BbmROZXh0KCkge1xuICAgICAgICB0aGlzLnNldEJvYXJkUG9zaXRpb24oKVxuXG4gICAgICAgIGlmICh0aGlzLmNhcmQubmV4dCkge1xuICAgICAgICAgICAgdGhpcy5jYXJkLm5leHQudmlldy5zZXRCb2FyZFBvc2l0aW9uQW5kTmV4dCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlQm9hcmRQb3NpdGlvbkFuZE5leHQoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgZGVsdGFYXG4gICAgICAgIHRoaXMueSA9IHRoaXMueSArIGRlbHRhWVxuXG4gICAgICAgIGlmICh0aGlzLmNhcmQubmV4dCkge1xuICAgICAgICAgICAgdGhpcy5jYXJkLm5leHQudmlldy51cGRhdGVCb2FyZFBvc2l0aW9uQW5kTmV4dChkZWx0YVgsIGRlbHRhWSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjYWxjdWxhdGVEZWx0YShuZXdQb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gW25ld1Bvc2l0aW9uLnggLSB0aGlzLngsIG5ld1Bvc2l0aW9uLnkgLSB0aGlzLnldXG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZURyYWdTZXR0aW5nc0FuZE5leHQoKSB7XG4gICAgICAgIHRoaXMubW92ZVRvcFppbmRleCgpXG5cbiAgICAgICAgaWYgKHRoaXMuY2FyZC5uZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNhcmQubmV4dC52aWV3LnVwZGF0ZURyYWdTZXR0aW5nc0FuZE5leHQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG1vdmVUb3BaaW5kZXgoKSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLnBhcmVudFxuICAgICAgICBsZXQgc2l6ZSA9IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgY29udGFpbmVyLnNldENoaWxkSW5kZXgodGhpcywgc2l6ZSAtIDEpXG4gICAgfVxuXG4gICAgc3RhdGljIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgbGV0IGNhcmRWaWV3ID0gdGhpc1xuICAgICAgICBsZXQgY2FyZCA9IGNhcmRWaWV3LmNhcmRcblxuICAgICAgICBpZiAoY2FyZC52aXNpYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBhbmQgY2xpY2sgXl4mJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJylcblxuICAgICAgICAgICAgaWYgKGNhcmQubmV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZSBjYW4gcmV0dXJuIHRoZSBjYXJkJylcblxuICAgICAgICAgICAgICAgIGNhcmRWaWV3Lm1ha2VWaXNpYmxlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBvbkRlY2tDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBvbiB0aGUgZGVjayBjYXJkJylcblxuICAgICAgICBsZXQgY2FyZFZpZXcgPSBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgICAgIGxldCBjYXJkID0gY2FyZFZpZXcuY2FyZFxuICAgICAgICBsZXQgZGVjayA9IGNhcmQuZGVja1xuICAgICAgICBsZXQgZGVja1N0YWNrID0gY2FyZC5kZWNrU3RhY2tcbiAgICAgICAgbGV0IGdhbWUgPSBkZWNrLmdhbWVcblxuICAgICAgICBkZWNrLnBvcE9uZShkZWNrU3RhY2spXG4gICAgICAgIGNhcmRWaWV3Lm1vdmVUb3BaaW5kZXgoKVxuICAgICAgICBjYXJkVmlldy5tYWtlVmlzaWJsZSgpXG4gICAgICAgIGNhcmRWaWV3LnNldERlY2tTdGFja1Bvc2l0aW9uKClcblxuICAgICAgICBjYXJkVmlldy5yZW1vdmVBbGxMaXN0ZW5lcnMoKVxuICAgICAgICBnYW1lLmJvYXJkLmNhcmRGYWN0b3J5Lm1ha2VWaWV3RHJhZ2dhYmxlKGNhcmRWaWV3KVxuXG4gICAgICAgIGlmIChkZWNrLmVtcHR5KCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBnYW1lLmJvYXJkLmRpc3BEZWNrQW5kRGVja1N0YWNrKClcbiAgICAgICAgfVxuICAgICAgICBnYW1lLmRpc3AoKVxuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlVmlzaWJsZSgpIHtcbiAgICAgICAgdGhpcy5jYXJkLnZpc2libGUgPSB0cnVlXG4gICAgICAgIHRoaXMuc2V0Q2FyZFRleHR1cmUoKVxuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlTm90VmlzaWJsZSgpIHtcbiAgICAgICAgdGhpcy5jYXJkLnZpc2libGUgPSBmYWxzZVxuICAgICAgICB0aGlzLnNldENhcmRUZXh0dXJlKClcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Q2FyZFRleHR1cmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhcmQudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRUZXh0dXJlKHRoaXMuZnJvbnRUZXh0dXJlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JhY2snKVxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0dXJlKHRoaXMuYmFja1RleHR1cmUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgb25EcmFnU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICBsZXQgY2FyZFZpZXcgPSB0aGlzXG4gICAgICAgIGxldCBjYXJkID0gY2FyZFZpZXcuY2FyZFxuICAgICAgICBsZXQgZ2FtZSA9IGNhcmQuc3RhY2suZ2FtZVxuXG4gICAgICAgIGlmIChjYXJkLnZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBkcmFnIHN0YXJ0ICcgKyBldmVudC5jdXJyZW50VGFyZ2V0LmNhcmQuZWFzeURpc3AoKSArICcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqJylcblxuICAgICAgICBjYXJkLnBvc3NpYmxlQ29sbGlzaW9ucyA9IGdhbWUuY29sbGlzaW9uQ2FyZHNGb3IoY2FyZClcblxuICAgICAgICBjb25zb2xlLmxvZyhjYXJkLnBvc3NpYmxlQ29sbGlzaW9ucylcblxuICAgICAgICBjYXJkVmlldy5kYXRhID0gZXZlbnQuZGF0YVxuICAgICAgICBjYXJkVmlldy5kcmFnZ2luZyA9IHRydWVcblxuICAgICAgICBjYXJkVmlldy51cGRhdGVEcmFnU2V0dGluZ3NBbmROZXh0KClcbiAgICB9XG5cbiAgICBzdGF0aWMgb25EcmFnRW5kKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgY29uc29sZS5sb2coJ29uIGRyYWcgZW5kICcgKyBldmVudC5jdXJyZW50VGFyZ2V0LmNhcmQuZWFzeURpc3AoKSArICcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqJylcblxuICAgICAgICBpZiAodGhpcy5kcmFnZ2luZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNhcmRWaWV3ID0gdGhpc1xuICAgICAgICBjYXJkVmlldy5kcmFnZ2luZyA9IGZhbHNlXG4gICAgICAgIGNhcmRWaWV3LmFscGhhID0gMVxuICAgICAgICBjYXJkVmlldy5kYXRhID0gbnVsbFxuXG4gICAgICAgIGNhcmRWaWV3LnZhbGlkYXRlRHJhZygpXG4gICAgICAgIGNhcmRWaWV3LnNldEJvYXJkUG9zaXRpb25BbmROZXh0KClcbiAgICB9XG5cbiAgICBzdGF0aWMgb25EcmFnTW92ZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgbGV0IGNhcmRWaWV3ID0gdGhpc1xuICAgICAgICAgICAgbGV0IGNhcmQgPSBjYXJkVmlldy5jYXJkXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbiBkcmFnIG1vdmUgJyArIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2FyZC5lYXN5RGlzcCgpICsgJyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionKVxuXG4gICAgICAgICAgICBsZXQgY2FyZENvbGxpc2lvbiA9IGZhbHNlXG4gICAgICAgICAgICBjYXJkLnBvc3NpYmxlQ29sbGlzaW9ucy5mb3JFYWNoKChjYXJkMikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYXJkVmlldy5oaXRUZXN0UmVjdGFuZ2xlKGNhcmRWaWV3LCBjYXJkMi52aWV3KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvY2sgd2l0aCAnICsgY2FyZDIudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5vblRvcE9mID0gY2FyZDJcbiAgICAgICAgICAgICAgICAgICAgY2FyZENvbGxpc2lvbiA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGNhcmRDb2xsaXNpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY2FyZC5vblRvcE9mID0gbnVsbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBjYXJkVmlldy5kYXRhLmdldExvY2FsUG9zaXRpb24oY2FyZFZpZXcucGFyZW50KVxuICAgICAgICAgICAgbGV0IFtkZWx0YVgsIGRlbHRhWV0gPSBjYXJkVmlldy5jYWxjdWxhdGVEZWx0YShuZXdQb3NpdGlvbilcbiAgICAgICAgICAgIGNhcmRWaWV3LnVwZGF0ZUJvYXJkUG9zaXRpb25BbmROZXh0KGRlbHRhWCwgZGVsdGFZKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlRHJhZygpIHtcbiAgICAgICAgbGV0IGNhcmQgPSB0aGlzLmNhcmRcbiAgICAgICAgbGV0IHN0YWNrID0gY2FyZC5zdGFja1xuICAgICAgICBsZXQgZ2FtZSA9IHN0YWNrLmdhbWVcblxuICAgICAgICBpZiAoY2FyZC5vblRvcE9mKSB7XG4gICAgICAgICAgICBsZXQgc3RhY2syID0gY2FyZC5vblRvcE9mLnN0YWNrXG4gICAgICAgICAgICBsZXQgc291cmNlSW5kZXggPSBnYW1lLnN0YWNrcy5pbmRleE9mKHN0YWNrKVxuICAgICAgICAgICAgbGV0IGRlc3RpbmF0aW9uSW5kZXggPSBnYW1lLnN0YWNrcy5pbmRleE9mKHN0YWNrMilcbiAgICAgICAgICAgIGxldCByZXMgPSBnYW1lLm1vdmVDYXJkcyhzb3VyY2VJbmRleCwgZGVzdGluYXRpb25JbmRleCwgY2FyZC50b3BDYXJkc0NvdW50KCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbW92ZUNhcmRzICcgKyByZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaGl0VGVzdFJlY3RhbmdsZShyMSwgcjIsIGdsb2JhbCA9IGZhbHNlKSB7XG4gICAgICAgIC8vIEFkZCBjb2xsaXNpb24gcHJvcGVydGllc1xuICAgICAgICBpZiAoIXIxLl9idW1wUHJvcGVydGllc0FkZGVkKSB0aGlzLmFkZENvbGxpc2lvblByb3BlcnRpZXMocjEpXG4gICAgICAgIGlmICghcjIuX2J1bXBQcm9wZXJ0aWVzQWRkZWQpIHRoaXMuYWRkQ29sbGlzaW9uUHJvcGVydGllcyhyMilcblxuICAgICAgICBsZXQgaGl0LCBjb21iaW5lZEhhbGZXaWR0aHMsIGNvbWJpbmVkSGFsZkhlaWdodHMsIHZ4LCB2eVxuXG4gICAgICAgIC8vIEEgdmFyaWFibGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlcmUncyBhIGNvbGxpc2lvblxuICAgICAgICBoaXQgPSBmYWxzZVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgdmVjdG9yXG4gICAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgICAgIHZ4ID0gKHIxLmd4ICsgTWF0aC5hYnMocjEuaGFsZldpZHRoKSAtIHIxLnhBbmNob3JPZmZzZXQpIC0gKHIyLmd4ICsgTWF0aC5hYnMocjIuaGFsZldpZHRoKSAtIHIyLnhBbmNob3JPZmZzZXQpO1xuICAgICAgICAgICAgdnkgPSAocjEuZ3kgKyBNYXRoLmFicyhyMS5oYWxmSGVpZ2h0KSAtIHIxLnlBbmNob3JPZmZzZXQpIC0gKHIyLmd5ICsgTWF0aC5hYnMocjIuaGFsZkhlaWdodCkgLSByMi55QW5jaG9yT2Zmc2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZ4ID0gKHIxLnggKyBNYXRoLmFicyhyMS5oYWxmV2lkdGgpIC0gcjEueEFuY2hvck9mZnNldCkgLSAocjIueCArIE1hdGguYWJzKHIyLmhhbGZXaWR0aCkgLSByMi54QW5jaG9yT2Zmc2V0KTtcbiAgICAgICAgICAgIHZ5ID0gKHIxLnkgKyBNYXRoLmFicyhyMS5oYWxmSGVpZ2h0KSAtIHIxLnlBbmNob3JPZmZzZXQpIC0gKHIyLnkgKyBNYXRoLmFicyhyMi5oYWxmSGVpZ2h0KSAtIHIyLnlBbmNob3JPZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlndXJlIG91dCB0aGUgY29tYmluZWQgaGFsZi13aWR0aHMgYW5kIGhhbGYtaGVpZ2h0c1xuICAgICAgICBjb21iaW5lZEhhbGZXaWR0aHMgPSBNYXRoLmFicyhyMS5oYWxmV2lkdGgpICsgTWF0aC5hYnMocjIuaGFsZldpZHRoKTtcbiAgICAgICAgY29tYmluZWRIYWxmSGVpZ2h0cyA9IE1hdGguYWJzKHIxLmhhbGZIZWlnaHQpICsgTWF0aC5hYnMocjIuaGFsZkhlaWdodCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGEgY29sbGlzaW9uIG9uIHRoZSB4IGF4aXNcbiAgICAgICAgaWYgKE1hdGguYWJzKHZ4KSA8IGNvbWJpbmVkSGFsZldpZHRocykge1xuXG4gICAgICAgICAgICAvLyBBIGNvbGxpc2lvbiBtaWdodCBiZSBvY2N1cmluZy4gQ2hlY2sgZm9yIGEgY29sbGlzaW9uIG9uIHRoZSB5IGF4aXNcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh2eSkgPCBjb21iaW5lZEhhbGZIZWlnaHRzKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGVyZSdzIGRlZmluaXRlbHkgYSBjb2xsaXNpb24gaGFwcGVuaW5nXG4gICAgICAgICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGVyZSdzIG5vIGNvbGxpc2lvbiBvbiB0aGUgeSBheGlzXG4gICAgICAgICAgICAgICAgaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIFRoZXJlJ3Mgbm8gY29sbGlzaW9uIG9uIHRoZSB4IGF4aXNcbiAgICAgICAgICAgIGhpdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYGhpdGAgd2lsbCBiZSBlaXRoZXIgYHRydWVgIG9yIGBmYWxzZWBcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9jYXJkX3ZpZXdfc2VydmljZS5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFplcm9GYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihwaXhpLCBib2FyZCkge1xuICAgICAgICB0aGlzLnBpeGkgPSBwaXhpXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZFxuICAgIH1cblxuICAgIGNyZWF0ZVZpZXcoY2FyZCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUJhc2ljVmlldyhjYXJkKVxuICAgIH1cblxuICAgIGNyZWF0ZUJhc2ljVmlldyhjYXJkKSB7XG4gICAgICAgIGxldCB0ZXh0dXJlID0gdGhpcy5ib2FyZC5iYWNrVGV4dHVyZVxuICAgICAgICBsZXQgdmlldyA9IG5ldyB0aGlzLnBpeGkuU3ByaXRlKHRleHR1cmUpXG4gICAgICAgIHZpZXcuY2FyZCA9IGNhcmRcbiAgICAgICAgY2FyZC52aWV3ID0gdmlld1xuXG4gICAgICAgIHZpZXcudGludCA9IDB4MDBGRkZGIC8vIHRpbnRpbmcgZm9yIGZ1biBhbmQgdmlzaWJpbHR5XG5cbiAgICAgICAgdmlldy54ID0gNTAgKyAoY2FyZC5zdGFjay5nZXRJbmRleFBvc2l0aW9uKCkgLSA1KSAqIDkwXG4gICAgICAgIHZpZXcueSA9IDEyMFxuXG4gICAgICAgIHRoaXMubWFrZVZpZXdEcmFnZ2FibGUodmlldylcblxuICAgICAgICByZXR1cm4gdmlld1xuICAgIH1cblxuICAgIG1ha2VWaWV3RHJhZ2dhYmxlKHZpZXcpIHtcbiAgICAgICAgdmlldy5hbmNob3Iuc2V0KDAuNSwgMC4yKVxuICAgICAgICB2aWV3LmludGVyYWN0aXZlID0gdHJ1ZSAvLyB0aGlzIHdpbGwgYWxsb3cgaXQgdG8gcmVzcG9uZCB0byBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzXG5cbiAgICAgICAgdGhpcy5hZGRDb2xsaXNpb25Qcm9wZXJ0aWVzKHZpZXcpXG4gICAgfVxuXG4gICAgLy8gYGFkZENvbGxpc2lvblByb3BlcnRpZXNgIGFkZHMgZXh0cmEgcHJvcGVydGllcyB0byBzcHJpdGVzIHRvIGhlbHBcbiAgICAvLyBzaW1wbGlmeSB0aGUgY29sbGlzaW9uIGNvZGUuIEl0IHdvbid0IGFkZCB0aGVzZSBwcm9wZXJ0aWVzIGlmIHRoZXlcbiAgICAvLyBhbHJlYWR5IGV4aXN0IG9uIHRoZSBzcHJpdGUuIEFmdGVyIHRoZXNlIHByb3BlcnRpZXMgaGF2ZSBiZWVuXG4gICAgLy8gYWRkZWQsIHRoaXMgbWV0aG9kcyBhZGRzIGEgQm9vbGVhbiBwcm9wZXJ0eSB0byB0aGUgc3ByaXRlIGNhbGxlZCBgX2J1bXBQcm9wZXJ0aWVzQWRkZWRgXG4gICAgLy8gYW5kIHNldHMgaXQgdG8gYHRydWVgIHRvIGZsYWcgdGhhdCB0aGUgc3ByaXRlIGhhcyB0aGVzZVxuICAgIC8vIG5ldyBwcm9wZXJ0aWVzXG4gICAgYWRkQ29sbGlzaW9uUHJvcGVydGllcyhzcHJpdGUpIHtcbiAgICAgICAgLy8gQWRkIHByb3BlcnRpZXMgdG8gUGl4aSBzcHJpdGVzXG4gICAgICAgIC8vIGlmICh0aGlzLnJlbmRlcmVyID09PSBcInBpeGlcIikge1xuXG4gICAgICAgIGlmIChzcHJpdGUuZ3ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJneFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gc3ByaXRlLmdldEdsb2JhbFBvc2l0aW9uKCkueCB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5neSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ByaXRlLCBcImd5XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKXtyZXR1cm4gc3ByaXRlLmdldEdsb2JhbFBvc2l0aW9uKCkueX0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5jZW50ZXJYID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwiY2VudGVyWFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCl7cmV0dXJuIHNwcml0ZS54ICsgc3ByaXRlLndpZHRoIC8gMn0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5jZW50ZXJZID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwiY2VudGVyWVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCl7cmV0dXJuIHNwcml0ZS55ICsgc3ByaXRlLmhlaWdodCAvIDJ9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcHJpdGUuaGFsZldpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwiaGFsZldpZHRoXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKXtyZXR1cm4gc3ByaXRlLndpZHRoIC8gMn0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwcml0ZS5oYWxmSGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzcHJpdGUsIFwiaGFsZkhlaWdodFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCl7cmV0dXJuIHNwcml0ZS5oZWlnaHQgLyAyfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ByaXRlLnhBbmNob3JPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwcml0ZSwgXCJ4QW5jaG9yT2Zmc2V0XCIsIHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJpdGUuYW5jaG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzcHJpdGUud2lkdGggKiBzcHJpdGUuYW5jaG9yLnhcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcHJpdGUueUFuY2hvck9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ByaXRlLCBcInlBbmNob3JPZmZzZXRcIiwge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcml0ZS5hbmNob3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwcml0ZS5oZWlnaHQgKiBzcHJpdGUuYW5jaG9yLnlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcHJpdGUuY2lyY3VsYXIgJiYgc3ByaXRlLnJhZGl1cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ByaXRlLCBcInJhZGl1c1wiLCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gc3ByaXRlLndpZHRoIC8gMn0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBhIEJvb2xlYW4gYF9idW1wUHJvcGVydGllc0FkZGVkYCBwcm9wZXJ0eSB0byB0aGUgc3ByaXRlIHRvIGZsYWcgaXRcbiAgICAgICAgLy8gYXMgaGF2aW5nIHRoZXNlIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgIHNwcml0ZS5fYnVtcFByb3BlcnRpZXNBZGRlZCA9IHRydWVcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9jYXJkX3plcm9fZmFjdG9yeS5qcyIsImltcG9ydCBHYW1lIGZyb20gJy4vZW5naW5lL2dhbWUnXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi92aWV3L2JvYXJkJ1xuXG5sZXQgZ2FtZSA9IG5ldyBHYW1lKClcbmdhbWUuZGlzdHJpYnV0ZSgpXG5cbmdhbWUuZGVjay5jYXJkcyA9IFtdXG5nYW1lLmRlY2suZWFzeUJ1aWxkKFsnWDNTJywgJ1g1SCddKVxuZ2FtZS5zdGFja3NbMF0uZWFzeUJ1aWxkKFtdKVxuXG4vLyBnYW1lLnBsYXlpbmdTdGFja3NbMF0uZWFzeUJ1aWxkKFsnMVMnXSlcbi8vIGdhbWUucGxheWluZ1N0YWNrc1sxXS5lYXN5QnVpbGQoWycxSCcsICcyUyddKVxuLy8gZ2FtZS5wbGF5aW5nU3RhY2tzWzJdLmVhc3lCdWlsZChbJzFEJ10pXG4vLyBnYW1lLnBsYXlpbmdTdGFja3NbM10uZWFzeUJ1aWxkKFsnMkQnXSlcbi8vIGdhbWUucGxheWluZ1N0YWNrc1s0XS5lYXN5QnVpbGQoWydYNkMnLCAnWDEzSCcsICdYMkMnLCAnWDdEJywgJzVTJ10pXG4vLyBnYW1lLnBsYXlpbmdTdGFja3NbNV0uZWFzeUJ1aWxkKFsnWDZIJywgJ1gxMEgnLCAnWDEzUycsICdYMTFTJywgJ1gxQycsICdYMTJIJ10pXG4vLyBnYW1lLnBsYXlpbmdTdGFja3NbNl0uZWFzeUJ1aWxkKFsnWDhDJywgJ1g5UycsICdYMTJIJywgJ1gxMUMnLCAnWDEyQycsICdYNFMnLCAnMTNDJ10pXG5cbmdhbWUuZGlzcCgpXG5cbmNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqJylcblxuZ2FtZS5lYXN5RGlzcCgpXG5jb25zdCBwaXhpID0gUElYSVxuXG5sZXQgYXBwID0gbmV3IHBpeGkuQXBwbGljYXRpb24oMTAwMCwgNjAwLCB7YmFja2dyb3VuZENvbG9yOiAweDEwOTliYn0pXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC52aWV3KVxuXG5sZXQgYm9hcmQgPSBuZXcgQm9hcmQoZ2FtZSwgcGl4aSwgYXBwKVxuXG5ib2FyZC5jcmVhdGVTcHJpdGVDYXJkc1plcm9Db2xvcigpXG5ib2FyZC5kaXNwQWxsU3RhY2tzKClcbmJvYXJkLmRpc3BEZWNrQW5kRGVja1N0YWNrKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBEZWNrIGZyb20gJy4vZGVjaydcbmltcG9ydCBTdGFja1NlcnZpY2UgZnJvbSAnLi9zdGFja19zZXJ2aWNlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZWNrID0gbmV3IERlY2sodGhpcylcbiAgICAgICAgdGhpcy5zdGFja3MgPSBTdGFja1NlcnZpY2UucHJlcGFyZVN0YWNrcyh0aGlzKVxuICAgICAgICB0aGlzLmRlY2tTdGFjayA9IHRoaXMuc3RhY2tzWzBdXG4gICAgICAgIHRoaXMuY29sb3JTdGFja3MgPSB0aGlzLnN0YWNrcy5zbGljZSgxLCA1KVxuICAgICAgICB0aGlzLnBsYXlpbmdTdGFja3MgPSB0aGlzLnN0YWNrcy5zbGljZSg1LCAxMilcbiAgICB9XG5cbiAgICBkaXN0cmlidXRlKCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdTdGFja3MuZm9yRWFjaCgoc3RhY2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlY2sucG9wKHN0YWNrLCBpbmRleCArIDEsIGZhbHNlKVxuICAgICAgICAgICAgbGV0IHRvcENhcmQgPSBzdGFjay5sYXN0KClbMF1cbiAgICAgICAgICAgIHRvcENhcmQudmlzaWJsZSA9IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zdGFja3NbMV0uY29tcGxldGUoKSAmJlxuICAgICAgICB0aGlzLnN0YWNrc1syXS5jb21wbGV0ZSgpICYmXG4gICAgICAgIHRoaXMuc3RhY2tzWzNdLmNvbXBsZXRlKCkgJiZcbiAgICAgICAgdGhpcy5zdGFja3NbNF0uY29tcGxldGUoKVxuICAgIH1cblxuICAgIGlzTW92ZVBvc3NpYmxlKHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkluZGV4LCBxdWFudGl0eSA9IDEpIHtcbiAgICAgICAgaWYgKHF1YW50aXR5ID09PSAwKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgICAgICAgaWYgKFN0YWNrU2VydmljZS5pc0RlY2tTdGFjayhzb3VyY2VJbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21EZWNrU3RhY2tJc01vdmVQb3NzaWJsZShzb3VyY2VJbmRleCwgZGVzdGluYXRpb25JbmRleCwgcXVhbnRpdHkpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU3RhY2tTZXJ2aWNlLmlzUGxheWluZ1N0YWNrKHNvdXJjZUluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVBsYXlpbmdTdGFja0lzTW92ZVBvc3NpYmxlKHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkluZGV4LCBxdWFudGl0eSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHNvdXJjZUluZGV4IGlzIENvbG9yU3RhY2tcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZnJvbURlY2tTdGFja0lzTW92ZVBvc3NpYmxlKHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkluZGV4LCBxdWFudGl0eSA9IDEpIHtcbiAgICAgICAgbGV0IHNvdXJjZVN0YWNrID0gdGhpcy5zdGFja3Nbc291cmNlSW5kZXhdXG4gICAgICAgIGxldCBkZXN0aW5hdGlvblN0YWNrID0gdGhpcy5zdGFja3NbZGVzdGluYXRpb25JbmRleF1cbiAgICAgICAgbGV0IGNhcmRzVG9Nb3ZlID0gc291cmNlU3RhY2subGFzdChxdWFudGl0eSlcbiAgICAgICAgbGV0IHRvcFN0YWNrQ2FyZCA9IGRlc3RpbmF0aW9uU3RhY2subGFzdCgpXG5cbiAgICAgICAgaWYgKHF1YW50aXR5ID4gMSkgeyByZXR1cm4gZmFsc2UgfVxuXG4gICAgICAgIGlmIChTdGFja1NlcnZpY2UuaXNDb2xvclN0YWNrKGRlc3RpbmF0aW9uSW5kZXgpKSB7XG4gICAgICAgICAgICBsZXQgY2FyZCA9IGNhcmRzVG9Nb3ZlWzBdXG5cbiAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvblN0YWNrLmVtcHR5KCkpIHtcblxuICAgICAgICAgICAgICAgIGlmIChjYXJkLnZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkLmNvbG9yID09PSBkZXN0aW5hdGlvblN0YWNrLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyZC5mb2xsb3dzKHRvcFN0YWNrQ2FyZFswXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTdGFja1NlcnZpY2UuaXNQbGF5aW5nU3RhY2soZGVzdGluYXRpb25JbmRleCkpIHtcblxuICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uU3RhY2suZW1wdHkoKSkge1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2VTdGFjay5lbXB0eSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRvcFN0YWNrQ2FyZFswXS5mb2xsb3dzV2l0aE9wcG9zaXRlQ29sb3IoY2FyZHNUb01vdmVbMF0pID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBmcm9tUGxheWluZ1N0YWNrSXNNb3ZlUG9zc2libGUoc291cmNlSW5kZXgsIGRlc3RpbmF0aW9uSW5kZXgsIHF1YW50aXR5ID0gMSkge1xuICAgICAgICBsZXQgc291cmNlU3RhY2sgPSB0aGlzLnN0YWNrc1tzb3VyY2VJbmRleF1cbiAgICAgICAgbGV0IGRlc3RpbmF0aW9uU3RhY2sgPSB0aGlzLnN0YWNrc1tkZXN0aW5hdGlvbkluZGV4XVxuICAgICAgICBsZXQgY2FyZHNUb01vdmUgPSBzb3VyY2VTdGFjay5sYXN0KHF1YW50aXR5KVxuICAgICAgICBsZXQgdG9wU3RhY2tDYXJkID0gZGVzdGluYXRpb25TdGFjay5sYXN0KClcblxuICAgICAgICBpZiAoU3RhY2tTZXJ2aWNlLmlzQ29sb3JTdGFjayhkZXN0aW5hdGlvbkluZGV4KSkge1xuICAgICAgICAgICAgaWYgKHF1YW50aXR5ICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVzdGluYXRpb25TdGFjay5lbXB0eSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmRzVG9Nb3ZlWzBdLmlzQWNlKGRlc3RpbmF0aW9uU3RhY2suY29sb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FyZHNUb01vdmVbMF0uZm9sbG93cyh0b3BTdGFja0NhcmRbMF0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU3RhY2tTZXJ2aWNlLmlzUGxheWluZ1N0YWNrKGRlc3RpbmF0aW9uSW5kZXgpKSB7XG4gICAgICAgICAgICBpZiAoZGVzdGluYXRpb25TdGFjay5lbXB0eSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gaXQncyBhIGtpbmdcbiAgICAgICAgICAgICAgICBpZiAoY2FyZHNUb01vdmVbMF0udmFsdWUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvcFN0YWNrQ2FyZFswXS5mb2xsb3dzV2l0aE9wcG9zaXRlQ29sb3IoY2FyZHNUb01vdmVbMF0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBtb3ZlQ2FyZHMoc291cmNlSW5kZXgsIGRlc3RpbmF0aW9uSW5kZXgsIHF1YW50aXR5ID0gMSkge1xuICAgICAgICBpZiAodGhpcy5pc01vdmVQb3NzaWJsZShzb3VyY2VJbmRleCwgZGVzdGluYXRpb25JbmRleCwgcXVhbnRpdHkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyoqIG1vdmUgbm90IHBvc3NpYmxlICoqJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFja3Nbc291cmNlSW5kZXhdLnBvcCh0aGlzLnN0YWNrc1tkZXN0aW5hdGlvbkluZGV4XSwgcXVhbnRpdHkpXG4gICAgfVxuXG4gICAgcG9wRGVjaygpIHtcbiAgICAgICAgdGhpcy5kZWNrLnBvcE9uZSh0aGlzLmRlY2tTdGFjaylcbiAgICB9XG5cbiAgICBjb2xsaXNpb25DYXJkc0ZvcihjYXJkKSB7XG4gICAgICAgIGxldCB0b3BDYXJkcyA9IHRoaXMucGxheWluZ1RvcENhcmRzRm9yKGNhcmQpLmNvbmNhdCh0aGlzLmNvbG9yVG9wQ2FyZHMoKSlcblxuICAgICAgICBsZXQgY2FyZHMgPSB0b3BDYXJkcy5yZWR1Y2UoKHJlc3VsdCwgY2FyZCkgPT4ge1xuICAgICAgICAgICAgaWYgKChjYXJkID09PSB1bmRlZmluZWQpIHx8IChjYXJkID09PSBudWxsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoY2FyZC52YWx1ZSA9PT0gMCkgfHwgKGNhcmQudmlzaWJsZSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjYXJkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9LCBbXSlcblxuICAgICAgICByZXR1cm4gY2FyZHNcbiAgICB9XG5cbiAgICBwbGF5aW5nVG9wQ2FyZHNGb3IoY2FyZCkge1xuICAgICAgICBsZXQgc3RhY2tzID0gdGhpcy5wbGF5aW5nU3RhY2tzXG5cbiAgICAgICAgbGV0IHRvcENhcmRzID0gc3RhY2tzLm1hcCgoc3RhY2spID0+IHtcbiAgICAgICAgICAgIGlmIChzdGFjayA9PT0gY2FyZC5zdGFjaykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YWNrLmVtcHR5KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhY2suY2FyZFplcm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdGFjay5sYXN0T25lKClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRvcENhcmRzXG4gICAgfVxuXG4gICAgY29sb3JUb3BDYXJkcygpIHtcbiAgICAgICAgbGV0IHN0YWNrcyA9IHRoaXMuY29sb3JTdGFja3NcblxuICAgICAgICBsZXQgdG9wQ2FyZHMgPSBzdGFja3MubWFwKChzdGFjaykgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YWNrLmVtcHR5KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhY2suY2FyZFplcm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdGFjay5sYXN0T25lKClcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdG9wQ2FyZHNcbiAgICB9XG5cbiAgICBkaXNwKCkge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5jb21tb25TdGFja3NEaXNwKClcbiAgICAgICAgc3RyID0gc3RyICsgdGhpcy5wbGF5aW5nU3RhY2tEaXNwKClcbiAgICAgICAgLy8gc3RyID0gc3RyICsgdGhpcy5iZXR0ZXJQbGF5aW5nU3RhY2tEaXNwKClcbiAgICAgICAgY29uc29sZS5sb2coc3RyKVxuICAgIH1cblxuICAgIGVhc3lEaXNwKCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdTdGFja3MuZm9yRWFjaCgoc3RhY2spID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YWNrLmVhc3lEaXNwKCkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tbW9uU3RhY2tzRGlzcCgpIHtcbiAgICAgICAgcmV0dXJuICdEZWNrOiAnICsgdGhpcy5kZWNrLnRvU3RyaW5nKCkgKyAnXFxuJyArXG4gICAgICAgICdbMF0gRGVjayBTdGFjazogJyArIHRoaXMuZGVja1N0YWNrLnRvU3RyaW5nKCkgKyAnXFxuJyArXG4gICAgICAgICdbMV0gRGlhbW9uZCBTdGFjazogJyArIHRoaXMuc3RhY2tzWzFdLnRvU3RyaW5nKCkgKyAnXFxuJyArXG4gICAgICAgICdbMl0gSGVhcnQgU3RhY2s6ICcgKyB0aGlzLnN0YWNrc1syXS50b1N0cmluZygpICsgJ1xcbicgK1xuICAgICAgICAnWzNdIFNwYWRlIFN0YWNrOiAnICsgdGhpcy5zdGFja3NbM10udG9TdHJpbmcoKSArICdcXG4nICtcbiAgICAgICAgJ1s0XSBDbHViIFN0YWNrOiAnICsgdGhpcy5zdGFja3NbNF0udG9TdHJpbmcoKSArICdcXG5cXG4nXG4gICAgfVxuXG4gICAgcGxheWluZ1N0YWNrRGlzcCgpIHtcbiAgICAgICAgbGV0IHN0ciA9ICcnXG4gICAgICAgIC8vIHBsYXlpbmdTdGFja3MgOiBpbmRleCA1IC0+IDExXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBpICsgNVxuICAgICAgICAgICAgc3RyID0gc3RyICsgJ1snICsgaW5kZXggKyAnXSA6ICcgKyB0aGlzLnN0YWNrc1tpbmRleF0udG9TdHJpbmcoKSArICdcXG4nXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0clxuICAgIH1cblxuICAgIGJldHRlclBsYXlpbmdTdGFja0Rpc3AoKSB7XG4gICAgICAgIGxldCBmdWxsID0gMFxuICAgICAgICBsZXQgaW5kZXggPSAwXG4gICAgICAgIGxldCBzdHIgPSAnJ1xuICAgICAgICB3aGlsZSAoZnVsbCA8IDcpIHtcbiAgICAgICAgICAgIGZ1bGwgPSAwXG4gICAgICAgICAgICBsZXQgbGluZSA9IHRoaXMucGxheWluZ1N0YWNrcy5tYXAoKHN0YWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YWNrLmNhcmRzW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bGwrK1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1xcdCAnXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YWNrLmNhcmRzW2luZGV4XS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc3RyID0gc3RyICsgbGluZS5qb2luKCcgXFx0ICcpICsgJ1xcbidcbiAgICAgICAgICAgIGluZGV4KytcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLmpzIiwiaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuaW1wb3J0IENhcmREZWNrWmVybyBmcm9tICcuL2NhcmRfemVyb19kZWNrJ1xuXG4vLyB0aGlzIGlzIHRoZSBkZWNrIHdpdGggYWxsIHRoZSByZXR1cm5lZCBjYXJkc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjayB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXVxuICAgICAgICB0aGlzLmNhcmRaZXJvID0gbmV3IENhcmREZWNrWmVybyh0aGlzKVxuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYXJkcygpXG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpXG4gICAgfVxuXG4gICAgZWFzeUJ1aWxkKGxpc3QpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goQ2FyZC5lYXN5QnVpbGQoZWxlbWVudCkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDYXJkcygpIHtcbiAgICAgICAgbGV0IGNvbG9ycyA9IFsnaGVhcnQnLCAnZGlhbW9uZCcsICdzcGFkZScsICdjbHViJ11cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IDE0OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb2xvcnMuZm9yRWFjaCgoY29sb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2FyZCA9IG5ldyBDYXJkKGluZGV4LCBjb2xvciwgZmFsc2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2h1ZmZsZSgpIHtcbiAgICAgICAgdGhpcy5jYXJkcy5zb3J0KChhLCBiKSA9PiB7IHJldHVybiAwLjUgLSBNYXRoLnJhbmRvbSgpIH0pXG4gICAgfVxuXG4gICAgcG9wT25lKHN0YWNrLCB2aXNpYmxlID0gdHJ1ZSkge1xuICAgICAgICBsZXQgY2FyZCA9IHRoaXMuY2FyZHMucG9wKClcbiAgICAgICAgY2FyZC52aXNpYmxlID0gdmlzaWJsZVxuICAgICAgICBzdGFjay5wdXNoKGNhcmQpXG4gICAgfVxuXG4gICAgcG9wKHN0YWNrLCBxdWFudGl0eSA9IDEsIHZpc2libGUgPSB0cnVlKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBxdWFudGl0eTsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5wb3BPbmUoc3RhY2ssIHZpc2libGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoKGNhcmQpIHtcbiAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpXG4gICAgICAgIGNhcmQuZGVjayA9IHRoaXNcbiAgICAgICAgY2FyZC5uZXh0ID0gbnVsbCAvLyBvbiBuwrRhIHBhcyBiZXNvaW4gZHUgY29uY2VwdCBkZSBuZXh0IGRhbnMgbGUgRGVja1xuICAgIH1cblxuICAgIGxhc3QocXVhbnRpdHkgPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmVtcHR5KCkpIHsgcmV0dXJuIG51bGwgfVxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPCBxdWFudGl0eSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICAgICAgbGV0IGNhcmRzID0gW11cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSBxdWFudGl0eTsgaW5kZXggPiAwOyBpbmRleC0tKSB7XG4gICAgICAgICAgICBjYXJkcy5wdXNoKHRoaXMuY2FyZHNbdGhpcy5jYXJkcy5sZW5ndGggLSBpbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMSkgeyByZXR1cm4gY2FyZHNbMF0gfVxuICAgICAgICByZXR1cm4gY2FyZHNcbiAgICB9XG5cbiAgICBsYXN0T25lKCkge1xuICAgICAgICBsZXQgcmVzID0gdGhpcy5sYXN0KClcbiAgICAgICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0KClbMF1cbiAgICB9XG5cbiAgICBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNhcmRzLmxlbmd0aCA9PT0gMClcbiAgICB9XG5cbiAgICBkaXNwKCkge1xuICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHsgY2FyZC5kaXNwKCkgfSlcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHMubWFwKChjYXJkKSA9PiB7IHJldHVybiBjYXJkLnRvU3RyaW5nKCkgfSkuam9pbigpXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9kZWNrLmpzIiwiaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkRGVja1plcm8gZXh0ZW5kcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihkZWNrKSB7XG4gICAgICAgIHN1cGVyKDAsIG51bGwsIGZhbHNlKVxuICAgICAgICB0aGlzLmRlY2sgPSBkZWNrXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAoJ1sgMCBjYXJkIG9mIGRlY2sgc3RhY2tdJylcbiAgICB9XG5cbiAgICBlYXN5RGlzcCgpIHtcbiAgICAgICAgcmV0dXJuIFwiJzBbRGVja10nXCJcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9jYXJkX3plcm9fZGVjay5qcyIsImltcG9ydCBTdGFjayBmcm9tICcuL3N0YWNrJ1xuaW1wb3J0IENvbG9yU3RhY2sgZnJvbSAnLi9jb2xvcl9zdGFjaydcbmltcG9ydCBEZWNrU3RhY2sgZnJvbSAnLi9kZWNrX3N0YWNrJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFja1NlcnZpY2Uge1xuICAgIHN0YXRpYyBwcmVwYXJlU3RhY2tzKGdhbWUpIHtcbiAgICAgICAgbGV0IHN0YWNrcyA9IFtdXG5cbiAgICAgICAgLy8gZGVja1N0YWNrIDogaW5kZXggMFxuICAgICAgICBzdGFja3MucHVzaChuZXcgRGVja1N0YWNrKGdhbWUpKVxuXG4gICAgICAgIC8vIGRpYW1vbmRTdGFjayA6IGluZGV4IDFcbiAgICAgICAgc3RhY2tzLnB1c2gobmV3IENvbG9yU3RhY2soZ2FtZSwgJ2RpYW1vbmQnKSlcbiAgICAgICAgLy8gaGVhcnRTdGFjayA6IGluZGV4IDJcbiAgICAgICAgc3RhY2tzLnB1c2gobmV3IENvbG9yU3RhY2soZ2FtZSwgJ2hlYXJ0JykpXG4gICAgICAgIC8vIHNwYWRlU3RhY2sgOiBpbmRleCAzXG4gICAgICAgIHN0YWNrcy5wdXNoKG5ldyBDb2xvclN0YWNrKGdhbWUsICdzcGFkZScpKVxuICAgICAgICAvLyBjbHViU3RhY2sgOiBpbmRleCA0XG4gICAgICAgIHN0YWNrcy5wdXNoKG5ldyBDb2xvclN0YWNrKGdhbWUsICdjbHViJykpXG5cbiAgICAgICAgLy8gcGxheWluZ1N0YWNrcyA6IGluZGV4IDUgLT4gMTFcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IDc7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHN0YWNrcy5wdXNoKG5ldyBTdGFjayhnYW1lKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFja3NcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNDb2xvclN0YWNrKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrVHlwZShpbmRleCkgPT09ICdjb2xvclN0YWNrJ1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1BsYXlpbmdTdGFjayhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1R5cGUoaW5kZXgpID09PSAncGxheWluZ1N0YWNrJ1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0RlY2tTdGFjayhpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1R5cGUoaW5kZXgpID09PSAnZGVja1N0YWNrJ1xuICAgIH1cblxuICAgIHN0YXRpYyBzdGFja1R5cGUoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IDUpIHtcbiAgICAgICAgICAgIHJldHVybiAncGxheWluZ1N0YWNrJ1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID49IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAnY29sb3JTdGFjaydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnZGVja1N0YWNrJ1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9zdGFja19zZXJ2aWNlLmpzIiwiaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkWmVybyBleHRlbmRzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKHN0YWNrKSB7XG4gICAgICAgIHN1cGVyKDAsIG51bGwsIGZhbHNlKVxuICAgICAgICB0aGlzLnN0YWNrID0gc3RhY2tcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICgnWyAwY2FyZHMgb2Ygc3RhY2snICsgdGhpcy5zdGFjay5nZXRJbmRleFBvc2l0aW9uKCkgKyAnXScpXG4gICAgfVxuXG4gICAgZWFzeURpc3AoKSB7XG4gICAgICAgIHJldHVybiBcIicwW1wiICsgdGhpcy5zdGFjay5nZXRJbmRleFBvc2l0aW9uKCkgKyBcIl0nXCJcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9jYXJkX3plcm8uanMiLCJpbXBvcnQgU3RhY2sgZnJvbSAnLi9zdGFjaydcbmltcG9ydCBDYXJkWmVyb0NvbG9yIGZyb20gJy4vY2FyZF96ZXJvX2NvbG9yJ1xuXG4vLyB0aGlzIGlzIHRoZSBzdGFjayB5b3UgaGF2ZSB0byBmaWxlIGluIG9yZGVyIHRvIHdpbiB0aGUgZ2FtZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBjb2xvcikge1xuICAgICAgICBzdXBlcihnYW1lKVxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICAgICAgdGhpcy5jYXJkWmVybyA9IG5ldyBDYXJkWmVyb0NvbG9yKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGxldCBjb21wYXJhdG9yID0gKGluaXR2YWx1ZSwgY2FyZCwgaW5kZXgsIGFycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluaXR2YWx1ZSAmJiAoY2FyZC52YWx1ZSA9PT0gaW5kZXggKyAxKSAmJiAoY2FyZC5jb2xvciA9PT0gdGhpcy5jb2xvcilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkcy5yZWR1Y2UoY29tcGFyYXRvciwgdHJ1ZSkgJiYgKHRoaXMuY2FyZHMubGVuZ3RoID09PSAxMylcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2NvbG9yX3N0YWNrLmpzIiwiaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkWmVyb0NvbG9yIGV4dGVuZHMgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IoY29sb3JTdGFjaykge1xuICAgICAgICBzdXBlcigwLCBjb2xvclN0YWNrLmNvbG9yLCBmYWxzZSlcbiAgICAgICAgdGhpcy5zdGFjayA9IGNvbG9yU3RhY2tcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yU3RhY2suY29sb3JcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICgnWzAgY2FyZCAnICsgdGhpcy5jb2xvciArICddJylcbiAgICB9XG5cbiAgICBlYXN5RGlzcCgpIHtcbiAgICAgICAgcmV0dXJuIFwiJzBbXCIgKyB0aGlzLmNvbG9yWzBdLnRvVXBwZXJDYXNlKCkgKyBcIl0nXCJcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9jYXJkX3plcm9fY29sb3IuanMiLCJpbXBvcnQgU3RhY2sgZnJvbSAnLi9zdGFjaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVja1N0YWNrIGV4dGVuZHMgU3RhY2sge1xuXG4gICAgbW92ZUNhcmRzQmFja09uRGVjaygpIHtcbiAgICAgICAgbGV0IGRlY2sgPSB0aGlzLmdhbWUuZGVja1xuICAgICAgICB0aGlzLmNhcmRzLnJldmVyc2UoKS5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBjYXJkLnZpc2libGUgPSBmYWxzZVxuICAgICAgICAgICAgZGVjay5wdXNoKGNhcmQpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZGVja19zdGFjay5qcyIsIlxuaW1wb3J0IERlY2tGYWN0b3J5IGZyb20gJy4vZGVja19mYWN0b3J5J1xuaW1wb3J0IENhcmRWaWV3RmFjdG9yeSBmcm9tICcuL2NhcmRfdmlld19mYWN0b3J5J1xuaW1wb3J0IENhcmRaZXJvRmFjdG9yeSBmcm9tICcuL2NhcmRfemVyb19mYWN0b3J5J1xuaW1wb3J0IENhcmRaZXJvRGVja0ZhY3RvcnkgZnJvbSAnLi9jYXJkX3plcm9fZGVja19mYWN0b3J5J1xuaW1wb3J0IENhcmRaZXJvQ29sb3JGYWN0b3J5IGZyb20gJy4vY2FyZF96ZXJvX2NvbG9yX2ZhY3RvcnknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBwaXhpLCBhcHApIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxuICAgICAgICB0aGlzLmdhbWUuYm9hcmQgPSB0aGlzXG4gICAgICAgIHRoaXMucGl4aSA9IHBpeGlcbiAgICAgICAgdGhpcy5hcHAgPSBhcHBcbiAgICAgICAgdGhpcy5zZXRCYWNrVGV4dHVyZSgpXG4gICAgICAgIHRoaXMuZGVja0ZhY3RvcnkgPSBuZXcgRGVja0ZhY3RvcnkodGhpcy5waXhpLCB0aGlzKVxuICAgICAgICB0aGlzLmNhcmRGYWN0b3J5ID0gbmV3IENhcmRWaWV3RmFjdG9yeSh0aGlzLnBpeGksIHRoaXMpXG4gICAgfVxuXG4gICAgc2V0QmFja1RleHR1cmUoKSB7XG4gICAgICAgIGxldCB0ZXh0dXJlUGF0aCA9ICcuL2Fzc2V0cy9pbWFnZXMvY2FyZHMvYmFjay5wbmcnXG4gICAgICAgIHRoaXMuYmFja1RleHR1cmUgPSB0aGlzLnBpeGkuVGV4dHVyZS5mcm9tSW1hZ2UodGV4dHVyZVBhdGgpXG4gICAgfVxuXG4gICAgZGlzcERlY2tBbmREZWNrU3RhY2soKSB7XG4gICAgICAgIGxldCBjYXJkWmVyb0RlY2sgPSB0aGlzLmNyZWF0ZVNwcml0ZUNhcmRaZXJvRGVjaygpXG5cbiAgICAgICAgbGV0IGRlY2tWaWV3ID0gdGhpcy5kZWNrRmFjdG9yeS5jcmVhdGVUb3BDYXJkVmlldygpXG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKGRlY2tWaWV3KVxuICAgIH1cblxuICAgIGRpc3BBbGxTdGFja3MoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BTdGFjayhpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcFN0YWNrKHN0YWNrSW5kZXgpIHtcbiAgICAgICAgbGV0IHN0YWNrID0gdGhpcy5nYW1lLnN0YWNrc1tzdGFja0luZGV4ICsgNV1cblxuICAgICAgICB0aGlzLmNyZWF0ZVNwcml0ZUNhcmRzWmVybyhzdGFjaylcbiAgICAgICAgdGhpcy5jcmVhdGVTcHJpdGVDYXJkcyhzdGFjaylcbiAgICB9XG5cbiAgICBjcmVhdGVTcHJpdGVDYXJkc1plcm9Db2xvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lLnN0YWNrcy5zbGljZSgxLCA1KS5mb3JFYWNoKChzdGFjaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGFjay5jYXJkWmVyby5oYXNWaWV3KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZhY3RvcnkgPSBuZXcgQ2FyZFplcm9Db2xvckZhY3RvcnkodGhpcy5waXhpLCB0aGlzKVxuICAgICAgICAgICAgbGV0IHZpZXcgPSBmYWN0b3J5LmNyZWF0ZVZpZXcoc3RhY2suY2FyZFplcm8sIGluZGV4KVxuICAgICAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodmlldylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjcmVhdGVTcHJpdGVDYXJkWmVyb0RlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGVjay5jYXJkWmVyby5oYXNWaWV3KCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldCBkZWNrQ2FyZFplcm9GYWN0b3J5ID0gbmV3IENhcmRaZXJvRGVja0ZhY3RvcnkodGhpcy5waXhpLCB0aGlzKVxuICAgICAgICBkZWNrQ2FyZFplcm9GYWN0b3J5LmNyZWF0ZVZpZXcoKVxuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLmdhbWUuZGVjay5jYXJkWmVyby52aWV3KVxuICAgIH1cblxuICAgIGNyZWF0ZVNwcml0ZUNhcmRzWmVybyhzdGFjaykge1xuICAgICAgICBsZXQgemVyb0ZhY3RvcnkgPSBuZXcgQ2FyZFplcm9GYWN0b3J5KHRoaXMucGl4aSwgdGhpcylcbiAgICAgICAgemVyb0ZhY3RvcnkuY3JlYXRlVmlldyhzdGFjay5jYXJkWmVybylcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQoc3RhY2suY2FyZFplcm8udmlldylcbiAgICB9XG5cbiAgICBjcmVhdGVTcHJpdGVDYXJkcyhzdGFjaykge1xuICAgICAgICBzdGFjay5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhcmRGYWN0b3J5LmNyZWF0ZVZpZXcoY2FyZClcbiAgICAgICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKGNhcmQudmlldylcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9ib2FyZC5qcyIsImltcG9ydCBDYXJkVmlld0ZhY3RvcnkgZnJvbSAnLi9jYXJkX3ZpZXdfZmFjdG9yeSdcbmltcG9ydCBDYXJkVmlld1NlcnZpY2UgZnJvbSAnLi9jYXJkX3ZpZXdfc2VydmljZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVja0ZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHBpeGksIGJvYXJkKSB7XG4gICAgICAgIHRoaXMucGl4aSA9IHBpeGlcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkXG4gICAgICAgIHRoaXMuZ2FtZSA9IHRoaXMuYm9hcmQuZ2FtZVxuICAgICAgICB0aGlzLmRlY2sgPSB0aGlzLmdhbWUuZGVja1xuICAgICAgICB0aGlzLmRlY2tTdGFjayA9IHRoaXMuZ2FtZS5kZWNrU3RhY2tcbiAgICB9XG5cbiAgICBjcmVhdGVUb3BDYXJkVmlldygpIHtcbiAgICAgICAgbGV0IGNhcmQgPSB0aGlzLmRlY2subGFzdCgpXG4gICAgICAgIGlmIChjYXJkID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhcmQuaGFzVmlldygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5jYXJkRmFjdG9yeS5jcmVhdGVCYXNpY1ZpZXcoY2FyZClcbiAgICAgICAgICAgIENhcmRWaWV3U2VydmljZS5hc3NpZ25NZXRob2RzKGNhcmQudmlldylcbiAgICAgICAgICAgIGNhcmQuZGVjayA9IHRoaXMuZGVja1xuICAgICAgICAgICAgY2FyZC5kZWNrU3RhY2sgPSB0aGlzLmRlY2tTdGFja1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib2FyZC5jYXJkRmFjdG9yeS5tYWtlQ2xpY2thYmxlRm9yRGVjayhjYXJkLnZpZXcpXG4gICAgICAgIHRoaXMubWFrZVZpc2libGUoY2FyZC52aWV3KVxuICAgICAgICB0aGlzLnNldERlY2tQb3NpdGlvbihjYXJkLnZpZXcpXG5cbiAgICAgICAgcmV0dXJuIGNhcmQudmlld1xuICAgIH1cblxuICAgIHNldERlY2tQb3NpdGlvbih2aWV3KSB7XG4gICAgICAgIHZpZXcuYW5jaG9yLnNldCgwKVxuICAgICAgICB2aWV3LnggPSAzXG4gICAgICAgIHZpZXcueSA9IDNcbiAgICB9XG5cbiAgICBtYWtlVmlzaWJsZSh2aWV3KSB7XG4gICAgICAgIHZpZXcudmlzaWJsZSA9IHRydWVcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9kZWNrX2ZhY3RvcnkuanMiLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRaZXJvRGVja0ZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHBpeGksIGJvYXJkKSB7XG4gICAgICAgIHRoaXMucGl4aSA9IHBpeGlcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkXG4gICAgICAgIHRoaXMuY2FyZCA9IHRoaXMuYm9hcmQuZ2FtZS5kZWNrLmNhcmRaZXJvXG4gICAgfVxuXG4gICAgY3JlYXRlVmlldygpIHtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLmNyZWF0ZUJhc2ljVmlldygpXG4gICAgICAgIHRoaXMubWFrZUNsaWNrYWJsZSgpXG4gICAgICAgIHJldHVybiB2aWV3XG4gICAgfVxuXG4gICAgY3JlYXRlQmFzaWNWaWV3KCkge1xuICAgICAgICBsZXQgY2FyZCA9IHRoaXMuY2FyZFxuICAgICAgICBsZXQgdGV4dHVyZSA9IHRoaXMuYm9hcmQuYmFja1RleHR1cmVcbiAgICAgICAgbGV0IHZpZXcgPSBuZXcgdGhpcy5waXhpLlNwcml0ZSh0ZXh0dXJlKVxuICAgICAgICB2aWV3LmNhcmQgPSBjYXJkXG4gICAgICAgIGNhcmQudmlldyA9IHZpZXdcblxuICAgICAgICB2aWV3LnRpbnQgPSAweDAwRkZGRiAvLyB0aW50aW5nIGZvciBmdW4gYW5kIHZpc2liaWx0eVxuXG4gICAgICAgIHZpZXcueCA9IDEwXG4gICAgICAgIHZpZXcueSA9IDEwXG5cbiAgICAgICAgcmV0dXJuIHZpZXdcbiAgICB9XG5cbiAgICBtYWtlQ2xpY2thYmxlKCkge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMuY2FyZC52aWV3XG4gICAgICAgIHZpZXcuaW50ZXJhY3RpdmUgPSB0cnVlIC8vIHRoaXMgd2lsbCBhbGxvdyBpdCB0byByZXNwb25kIHRvIG1vdXNlIGFuZCB0b3VjaCBldmVudHNcbiAgICAgICAgdmlldy5idXR0b25Nb2RlID0gdHJ1ZVxuICAgICAgICB2aWV3Lm9uKCdjbGljaycsIHRoaXMucmV3aW5kRGVjaylcbiAgICB9XG5cbiAgICByZXdpbmREZWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgbGV0IHZpZXcgPSBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgICAgIGxldCBjYXJkID0gdmlldy5jYXJkXG4gICAgICAgIGxldCBkZWNrID0gY2FyZC5kZWNrXG4gICAgICAgIGxldCBnYW1lID0gZGVjay5nYW1lXG4gICAgICAgIGxldCBkZWNrU3RhY2sgPSBnYW1lLmRlY2tTdGFja1xuXG4gICAgICAgIGRlY2tTdGFjay5tb3ZlQ2FyZHNCYWNrT25EZWNrKClcblxuICAgICAgICBkZWNrLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIGNhcmQudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgICAgICBjYXJkLnZpZXcudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgICAgICBjYXJkLnZpZXcuc2V0VGV4dHVyZShjYXJkLnZpZXcuYmFja1RleHR1cmUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGRlY2tWaWV3ID0gZ2FtZS5ib2FyZC5kZWNrRmFjdG9yeS5jcmVhdGVUb3BDYXJkVmlldygpXG4gICAgICAgIGdhbWUuYm9hcmQuYXBwLnN0YWdlLmFkZENoaWxkKGRlY2tWaWV3KVxuXG4gICAgICAgIGdhbWUuZGlzcCgpXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvY2FyZF96ZXJvX2RlY2tfZmFjdG9yeS5qcyIsImltcG9ydCBDYXJkWmVyb0ZhY3RvcnkgZnJvbSAnLi9jYXJkX3plcm9fZmFjdG9yeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFplcm9Db2xvckZhY3RvcnkgZXh0ZW5kcyBDYXJkWmVyb0ZhY3Rvcnkge1xuICAgIGNyZWF0ZVZpZXcoY2FyZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLmNyZWF0ZUJhc2ljVmlldyhjYXJkLCBpbmRleClcbiAgICAgICAgdGhpcy5hZGRDb2xsaXNpb25Qcm9wZXJ0aWVzKHZpZXcpXG4gICAgICAgIHJldHVybiB2aWV3XG4gICAgfVxuXG4gICAgY3JlYXRlQmFzaWNWaWV3KGNhcmQsIGluZGV4KSB7XG4gICAgICAgIGxldCB0ZXh0dXJlID0gdGhpcy5nZXRUZXh0dXJlKGNhcmQpXG4gICAgICAgIGxldCB2aWV3ID0gbmV3IHRoaXMucGl4aS5TcHJpdGUodGV4dHVyZSlcbiAgICAgICAgdmlldy50aW50ID0gMHgwMEZGRkYgLy8gdGludGluZyBmb3IgZnVuIGFuZCB2aXNpYmlsdHlcbiAgICAgICAgdmlldy5jYXJkID0gY2FyZFxuICAgICAgICBjYXJkLnZpZXcgPSB2aWV3XG5cbiAgICAgICAgdmlldy54ID0gMjkwICsgaW5kZXggKiA5MFxuICAgICAgICB2aWV3LnkgPSAxMFxuXG4gICAgICAgIHJldHVybiB2aWV3XG4gICAgfVxuXG4gICAgZ2V0VGV4dHVyZShjYXJkKSB7XG4gICAgICAgIGxldCB0ZXh0dXJlUGF0aCA9ICcuL2Fzc2V0cy9pbWFnZXMvY2FyZHMvJyArIGNhcmQuY29sb3IgKyAnLTEucG5nJ1xuICAgICAgICByZXR1cm4gdGhpcy5waXhpLlRleHR1cmUuZnJvbUltYWdlKHRleHR1cmVQYXRoKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L2NhcmRfemVyb19jb2xvcl9mYWN0b3J5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==