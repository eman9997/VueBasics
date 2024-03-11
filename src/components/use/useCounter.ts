// this composible function is used to increment and decrement the counter need to make sure to export so other vue components can use it

import { ref } from "vue";

// If you want to use the same counter in multiple components you need to use the ref outside the function
// Replace me with the count inside the function
// const count = ref(0);

export function useCounter() {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value--;
  };
  return { count, increment, decrement };
}

