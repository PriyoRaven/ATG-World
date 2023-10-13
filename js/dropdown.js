// Function to toggle dropdown visibility for a specific box
function toggleDropdown(boxNumber) {
    const dropdownButton = document.querySelector(`#dropdown-button${boxNumber}`);
    const dropdownContent = document.querySelector(`#dropdown-content${boxNumber}`);

    dropdownButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent click event from propagating to the document
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// Add event listeners for each box
for (let i = 1; i <= 4; i++) { // Assuming you have two boxes, you can adjust this number as needed
    toggleDropdown(i);
}

// Close the dropdown if the user clicks outside of any box
document.addEventListener("click", function(event) {
    const dropdownContents = document.querySelectorAll("[id^='dropdown-content']");
    dropdownContents.forEach(function (dropdownContent) {
        if (dropdownContent.style.display === "block" && !event.target.matches(`#dropdown-button${dropdownContent.id.slice(-1)}`)) {
            dropdownContent.style.display = "none";
        }
    });
});
