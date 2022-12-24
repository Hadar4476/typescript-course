// HTMLParagraphElement: type by default because of "querySelector"
const paragraph = document.querySelector("p");

// HTMLElement | null: type of some HTML element because of the way of selecting it
const container = document.getElementById("div");

// Can't access property because 'container' is possibly 'null'.
console.log({ containerStyle: container.style });

// 100% will be HTMLInputElement type
const input1 = document.getElementById("input_1") as HTMLInputElement;

// Can access "value" because of type
console.log({ input1Value: input1.value });

// Alternative syntax:
const input2 = <HTMLInputElement>document.getElementById("input_2");

console.log({ input2Value: input2.value });
