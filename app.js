const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
} // реализация перестакивания через цикл For...OF


/**function activeEventPlaceholder () {
    placeholders.forEach((placeholder) => {
        placeholder.addEventListener('dragover', dragover)
        placeholder.addEventListener('dragenter', dragenter)
        placeholder.addEventListener('dragleave', dragleave)
        placeholder.addEventListener('drop', dragdrop)
})
} 
Реализация через метод перебора массива с вызовом функции
activeEventPlaceholder() **/

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(()=>{
        event.target.classList.add('hide'), 0
    }) // Колбэк функция, которая убирает перестаскиваемый элемент с плейсхолдера
    
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide')
    
}


function dragover(event) {
    // console.log('drag over')
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
    // console.log('drag enter')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    // console.log('drag leave')
    
}

function dragdrop(event) {
    // console.log('drag drop')
    event.target.classList.remove('hovered')
    event.target.append(item)
}

