document.getElementById('signupButton').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'block';
});

document.getElementById('closeOverlay').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'none';
});
