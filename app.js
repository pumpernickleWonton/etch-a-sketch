const container = document.querySelector('.container');

const button = document.getElementById('reset-button');

function createGrid(){
    let size = prompt("What size grid would you like? Please enter a number between 1-100");
    if(size >= 1 && size <= 100){
        for(var x = 0; x < size; x++){
            const row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);
            for(var y = 0; y < size; y++) {
                const column = document.createElement('div');
                column.classList.add('column');
                row.appendChild(column);
                column.addEventListener('mouseover', () => {
                    column.classList.add('filled');
                })
            }
        }
    }
    else {
        alert('Please enter a valid number betweem 1-100');
    }
}

button.addEventListener('click', () => {
    container.innerHTML = "";
    createGrid();
});

createGrid();
