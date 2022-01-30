let missing = document.querySelector('button');
missing.addEventListener('click',inputMsg);

function inputMsg(){
    let name = prompt('enter roll no');
    missing.textContent = 'roll no = ' + name; 
}