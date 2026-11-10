const postForm = document.getElementById('postForm');
postForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const postData = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
        image: document.getElementById('image').value
    };
    console.log("Post attempt:", postData);
});