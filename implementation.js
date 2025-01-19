// JavaScript to handle the click event for toggling the dropdown
document.querySelector('.dropbtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor link behavior
  const dropdown = this.closest('.dropdown');
  dropdown.classList.toggle('active');
});
