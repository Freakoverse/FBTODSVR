// This function adds a new strap field when the "Add Another Strap" button is clicked
function addStrapField() {
  // Clone the existing strap field
  var strapField = document.querySelector('.BodyTrackersStrapID').cloneNode(true);

  // Clear the value of the cloned input field
  strapField.querySelector('input').value = '0';

  // Append the cloned strap field to the parent container
  document.querySelector('.BodyTrackersStrap').parentNode.appendChild(strapField);
}

// This function removes the last strap field when the "Remove Strap" button is clicked
function removeStrapField() {
    // Get all strap fields
    var strapFields = document.querySelectorAll('.BodyTrackersStrapID');

    // Check if there is more than one strap field
    if (strapFields.length > 1) {
        // Get the last strap field
        var lastStrapField = strapFields[strapFields.length - 1];

        // Remove the last strap field from the parent container
        lastStrapField.parentNode.removeChild(lastStrapField);
    }
}

