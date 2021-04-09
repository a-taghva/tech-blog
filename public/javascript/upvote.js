async function upvoteClickHandler(e) {
    e.preventDefault();

    const id = window.location.toString().split('/').pop();

    const res = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (res.ok) {
        document.location.reload();
    } else {
        alert(res.statusText);
    };
};

document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);
