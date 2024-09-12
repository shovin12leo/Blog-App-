// Preview Image Before Upload
function previewImage(event) {
    const profileImage = document.getElementById('profileImage');
    profileImage.src = URL.createObjectURL(event.target.files[0]);
}

// Form Submission Handling
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form values
    const displayName = document.getElementById('displayName').value;
    const bio = document.getElementById('bio').value;
    const email = document.getElementById('email').value;
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Simulate form submission (you would replace this with an actual API call)
    alert('Profile updated successfully!');
});
