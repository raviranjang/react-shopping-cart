export function addToCart(item) {
  return {
      type: 'ADD',
      item: item
  };
}

export function removeFromCart(item) {
  return {
      type: 'REMOVE',
      item: item
  };
}

export function addMore(item) {
  return {
    type: 'INCREMENT',
    item: item
  };
}

export function remove(item) {
  return {
    type: 'DECREMENT',
    item: item
  };
}
