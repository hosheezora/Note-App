window.addEventListener('load', ()=>{

  const addButton = document.querySelector('.add');
  const container = document.querySelector('.container');
  const main = document.querySelector('.main');
  
  
  addButton.addEventListener('click', function (e){
    e.preventDefault();

    //add
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    const noteBoxDiv = document.createElement('div');
    noteBoxDiv.classList.add('note-box');

    const toolDiv = document.createElement('div');
    toolDiv.classList.add('tool');

    main.appendChild(noteDiv);

    noteDiv.appendChild(noteBoxDiv);

    // tool
    noteBoxDiv.appendChild(toolDiv);

    const editButton = document.createElement('i');
    editButton.setAttribute('class', 'fa-solid fa-pencil');
    
    const saveButton = document.createElement('i');
    saveButton.setAttribute('class', 'fa-solid fa-floppy-disk');

    const delButton = document.createElement('i');
    delButton.setAttribute('class', 'fa-solid fa-trash');

    
    toolDiv.appendChild(saveButton);
    toolDiv.appendChild(delButton);

    const textNoteDiv = document.createElement('div');
    textNoteDiv.classList.add('text-note')

    noteBoxDiv.appendChild(textNoteDiv);

    const textArea = document.createElement('textarea');
    textArea.classList.add('text-input');

    textNoteDiv.appendChild(textArea);

    
  let isEdit = false;


  saveButton.addEventListener('click', (e) => {
      if (!isEdit) {
        
        const notValue = textArea.value;
        textArea.setAttribute('readonly', 'readonly');
        textArea.style.fontSize = '16px';
        textArea.style.border = 'none';
        
        
        
        
        saveButton.classList.remove('fa-solid', 'fa-floppy-disk');
        saveButton.classList.add('fa-solid', 'fa-pencil');
        
        isEdit = true;
        
      } else {
        
        textArea.removeAttribute('readonly');
        textArea.style.fontSize = '14px';
        textArea.style.border = '1px solid black';
        

        saveButton.classList.remove('fa-solid', 'fa-pencil');
        saveButton.classList.add('fa-solid', 'fa-floppy-disk');

        isEdit = false;
      }
    });

  //remove

  delButton.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
  })

  })
})