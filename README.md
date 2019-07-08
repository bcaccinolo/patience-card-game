# Patience card game

![Patience game](https://raw.githubusercontent.com/bcaccinolo/patience-card-game/master/screenshot.png)

## Running in dev

```
npm run watch
```
This is the live reload

```
npm run web
```
launch the server on 3000

## Running the tests

For all tests
```
./node_modules/mocha/bin/mocha --require babel-register --recursive
```

For one test
```
./node_modules/mocha/bin/mocha --require babel-register test/engine/game.spec.js
```

To isolate just ONE test
```
it.only("test",...)
```

## 3. Install dependencies (optionally you could install [yarn](https://yarnpkg.com/)):

Navigate to the cloned repo’s directory.

Run:

```npm install```

or if you choose yarn, just run ```yarn```

## 4. Run the development server:

Run:

```npm run dev```


## Build for deployment:

Run:

```npm run deploy```

This will optimize and minimize the compiled bundle.

