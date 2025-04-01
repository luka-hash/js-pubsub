# pubsub

## Installation

Copy `pubsub.js` file to your project directory or the content of the said file somewhere in your project.

## Usage

Create an instance of the `PubSub` class:

```javascript
const alert = new PubSub();
```

Consumers can subscribe using the `subscribe` method that takes a callback function as an argument and returns a function that can be used to unsubscribe.

```javascript
const unsubscribe = alert.subscribe((message) => {
  console.log('Received alert:', message);
});
```

Producers can publish (messages) using the `publish` method.

```javascript
alert.publish('very important message');
// > Received alert: very important message
```

And finally, using the `unsubscribe` function returned by the `subscribe` method, consumers can unsubscribe.

```javascript
unsubscribe();
```

## Licence

This project is licensed under the terms of the MIT licence. See the [LICENCE](./LICENCE) file for details.
