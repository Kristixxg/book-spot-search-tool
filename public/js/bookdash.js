const commentHandler = async (event) => {
    event.preventDefault();
    const images = document.querySelector("img");
    const newId = images.id
    console.log(newId)
    const text = await document.querySelector('#reviewText').value.trim();
    if (text) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({review: text,}),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            document.location.reload();
            console.log('SUCCESSFUL')
        } else {
            alert('Unable to post')
        };
    }

};

const reviewBox = document.querySelector('#reviewBox');
const saveBtn = document.querySelector('#saveBtn');
   
function showReview() {
    reviewBox.classList.remove('hidden')
}

saveBtn.addEventListener('click', showReview)

document
  .querySelector('#reviewBtn')
  .addEventListener('submit', commentHandler);