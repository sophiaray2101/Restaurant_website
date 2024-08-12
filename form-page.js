document.querySelectorAll('.form-check-input').forEach(checkbox => {
    checkbox.addEventListener('change', updateSelected);
});

function updateSelected(){
    const output = document.getElementById('selected-output');
    output.innerHTML = '';
    const selectedNum = document.querySelectorAll('.form-check-input:checked')

    if(selectedNum.length === 0){
        let item = document.createElement('div');
        item.textContent = 'Nothing is selected';
        output.appendChild(item);
    }
    else{
        selectedNum.forEach(checkbox =>{
            let row = checkbox.closest('.row');
            let text = row.querySelector('.form-pick-items').textContent;

            let item = document.createElement('div');
            item.textContent = text;
            output.appendChild(item);
        });
    }
}