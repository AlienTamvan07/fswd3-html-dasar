let todoName = document.getElementById('todo-name');
let btnSimpan = document.getElementById('btn-simpan');
let todoContainer = document.querySelector('.list-group');

// Mengambil nilai todoHTML dari local storage saat halaman direfresh
if (localStorage.getItem('todoHTML')) {
    todoContainer.innerHTML = localStorage.getItem('todoHTML');
    addEventListeners();
}

btnSimpan.addEventListener('click', function()  {
    if (todoName.value == '') {
        alert ('masukkan listnya sayang!');
    } else {
        let todoHTML = `
                    <li class="list-group-item d-flex justify-content-between">
                    <div>
                        <input class="form-check-input me-1" type="checkbox">
                        <span>${todoName.value}</span>
                    </div>
                    <button class="badge border-0 bg-danger btn-hapus">X</button>
                    </li>
                    `;
        todoContainer.insertAdjacentHTML('beforeend', todoHTML);
        todoName.value ='';
        todoName.focus();
        
        addEventListeners();

        // Menyimpan nilai todoHTML ke dalam local storage setiap kali terjadi perubahan pada tampilan list
        localStorage.setItem('todoHTML', todoContainer.innerHTML);
    }
})

// Fungsi untuk menambahkan event listener pada setiap checkbox dan button hapus
function addEventListeners() {
    let checkTodo = document.querySelectorAll('.form-check-input');
    for (let i = 0; i < checkTodo.length; i++) {
        const input = checkTodo[i];
        input.addEventListener('change', function(){
            let todoSpan = input.nextElementSibling;
            todoSpan.classList.toggle('text-decoration-line-through');
            
        })
    }
    let btnHapus = document.querySelectorAll('.btn-hapus');
    for (let x = 0; x < btnHapus.length; x++) {
        const hapus = btnHapus[x];
        hapus.addEventListener('click', function(){
            this.parentElement.remove();

            // Menyimpan nilai todoHTML ke dalam local storage setiap kali terjadi perubahan pada tampilan list
            localStorage.setItem('todoHTML', todoContainer.innerHTML);
        })
        
    }
}
