const addBtn = document.querySelector('.add');
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes){
    notes.forEach(note => {
        addNewNote(note);
    })
}

addBtn.addEventListener('click', ()=>{
    addNewNote();
})




function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    document.body.appendChild(note);
    note.innerHTML= `
    <div class="notes">
        <div class="header">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? "": "hidden"}" id="main"></div>
        <textarea id="textArea" class= "${text ? "hidden" : ""}"}></textarea>
    </div>
    
    `;


    const notes = note.querySelector('.notes');

    const headerEl = note.querySelector('.header');
    const editBtn = headerEl.querySelector('.edit');
    const deleteBtn = headerEl.querySelector('.delete');


    const main = note.querySelector('#main');
    const textArea = note.querySelector('#textArea');

    textArea.value = text;
    main.innerHTML = marked(text);



    editBtn.addEventListener('click', ()=>{
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        
    })

    deleteBtn.addEventListener('click', ()=>{
        note.remove();
        updateLS();
        
    })

    textArea.addEventListener('input',(e)=>{
        const {value} = e.target;
        main.innerHTML = marked(value);

        updateLS();
    })



}


function updateLS(){
    const notesText = document.querySelectorAll('textarea');
    console.log(notesText[0]);
    const notes =[];

    notesText.forEach(note =>{
        notes.push(note.value);
    })

    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
}









