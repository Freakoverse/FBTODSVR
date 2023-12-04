// Function to open the modal and disable scrolling
function openModal() {
  var modal = document.getElementById('ModalMain');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Disable scrolling
}

// Function to close the modal and enable scrolling
function closeModal() {
  var modal = document.getElementById('ModalMain');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling
}

// Event listener to open the modal when the "Preview Info" button is clicked
document.getElementById('previewInfo').addEventListener('click', openModal);

// Event listener to close the modal when the "Close Modal" button is clicked
document.getElementById('closeModal').addEventListener('click', closeModal);
