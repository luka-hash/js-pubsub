// Copyright © 2025 Luka Ivanović; MIT licence

import PubSub from "./pubsub";

const alert = new PubSub();

const unsubscribe = alert.subscribe((user) => {
  console.log(`User '${user}' joined.`);
});

alert.publish("Luke");
alert.publish("Leia");

unsubscribe();
