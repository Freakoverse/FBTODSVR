function incrementValue(button) {
  // Find the input field associated with the clicked button
  const inputField = button.parentNode.querySelector('.BodyTrackersPartInput');

  // Increment the value by 1 and update the input field
  inputField.value = parseInt(inputField.value, 10) + 1;
}

function decrementValue(button) {
  // Find the input field associated with the clicked button
  const inputField = button.parentNode.querySelector('.BodyTrackersPartInput');

  // Ensure the value doesn't go below 0
  if (parseInt(inputField.value, 10) > 0) {
    // Decrement the value by 1 and update the input field
    inputField.value = parseInt(inputField.value, 10) - 1;
  }
}