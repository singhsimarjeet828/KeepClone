const addbutton = document.querySelector('#add');
 const updateLSData = () => {
      const textareaData = document.querySelectorAll('textarea');
     const notes =[];
     console.log(textareaData);
    textareaData.foreach((note) =>{
         return notes.push(note.value);
        
        })

    


         localStorage.setItem('notes', JSON.stringify(notes));
        
 }

const addnewnote = (text ='') =>{

    const note = document.createElement('div')
 note.classList.add('note')

 const htmlData =   `    
 <div class="operation">
     <button class="edit"><i class="fas fa-edit"></i></button>
     <button class="delete"><i class="fas fa-trash-alt"></i></button>
 </div>

 <div class="main ${text ? "" :"hidden" }
  "></div>
 <textarea class="${text ? "hidden":""}"></textarea>`;

note.insertAdjacentHTML('afterbegin',htmlData);
// console.log(note);

const editbutton = note.querySelector('.edit')
const delbutton = note.querySelector('.delete')
const maindiv= note.querySelector('.main')
const textarea = note.querySelector('textarea')
 

delbutton.addEventListener('click',() => {
    note.remove()
    updateLSData();
});

textarea.value = text;
maindiv.innerHTML=text;

    editbutton.addEventListener('click',() =>{
        maindiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    }) 

textarea.addEventListener('change', (event) =>{
    const value = event.target.value
    maindiv.innerHTML=value
    updateLSData();

})



document.body.appendChild(note)

}
const notes =JSON.parse(localStorage.getItem("note"));
if(notes){
    notes.foreach((note) => addnewnote(note)
    )}
addbutton.addEventListener("click",() => addnewnote() );