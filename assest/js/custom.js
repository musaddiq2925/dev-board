
function handleButton(id) {

    const button = document.getElementById(id);

    button.addEventListener('click', function () {

        const task = document.getElementById('num-drecriment');
        const taskNumber = parseInt(task.innerText);
        task.innerText = taskNumber - 1;

        const point = document.getElementById('num-increment');
        const pointNumber = parseInt(point.innerText);
        point.innerText = pointNumber + 1;

        const sideContainer = document.getElementById('right-side');
        const commentEl = document.createElement('p');
        commentEl.innerText = 'This is a comment';
        commentEl.classList.add('comment');
        sideContainer.appendChild(commentEl);

        const clearAll = document.getElementById('clear-all');
        clearAll.addEventListener('click', function () {
            sideContainer.innerHTML = '';
        });

        // Button disable
        button.disabled = true;

        // Alert
        alert('Button Clicked');
    });
}

handleButton('btn-now');
handleButton('btn-now1');
handleButton('btn-now2');

// body  color
const button = document.getElementById('main-btn-now');

const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lavender'];

let index = 0;

button.addEventListener('click', function () {

    document.body.style.backgroundColor = colors[index];

    index++;

    if (index === colors.length) {
        index = 0;
    }

});