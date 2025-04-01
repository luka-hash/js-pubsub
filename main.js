import PubSub from "./pubsub";

const userJoinAlert = new PubSub();

const unsubscribe = userJoinAlert.subscribe((user) => {
  console.log(`User '${user}' joined.`);
});

userJoinAlert.publish("Luke");
userJoinAlert.publish("Leia");

unsubscribe();
