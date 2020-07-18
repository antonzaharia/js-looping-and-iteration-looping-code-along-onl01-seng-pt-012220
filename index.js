function writeCards(giftsArray, eventName) {
  for (let i = 0; i < giftsArray.length; i++){
    giftsArray.splice(i, 1, `Thank you, ${giftsArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return giftsArray;
}
