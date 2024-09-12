function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0px';
    } else {
        sidebar.style.width = '250px';
    }
}

function searchPosts() {
    const input = document.getElementById('searchInput').value;
    alert("Searching for: " + input);
}

function viewBlog() {
    document.getElementById('postsSection').style.display = 'none'; // Hide Posts Section
    document.getElementById('viewBlogSection').style.display = 'block'; // Show Blog Section
}

function showPostDetails() {
    viewBlog();
}

function backToPosts() {
    document.getElementById('viewBlogSection').style.display = 'none'; // Hide Blog Section
    document.getElementById('postsSection').style.display = 'block'; // Show Posts Section
}
