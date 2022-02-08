// async function test() {
//   return "haslo";
// }
// console.log(test());

//   return "hello"
// };
// abc().then((y) => {
//   console.log(y);
// });
// abc().catch((error) => {
//   console.log(error);
// });
// "use strict";

test = async () => {
  console.log("1: Message");
  console.log("2: Message");
  await console.log("3: Message");
  console.log("4: Message");
};

test();
console.log("5: Message");
