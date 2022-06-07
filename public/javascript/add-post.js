async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;

    const reponse = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            //grab title and post url from form, and send with post request
            //will also need userID - which we will get from session and send in post-routes
            title,
            post_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (reponse.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);