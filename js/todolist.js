let todoName = document.getElementById('todo-name');
let btnSimpan = document.getElementById('btn-simpan');
let todoContainer = document.querySelector('.list-group');

// Mengambil nilai todoHTML dari API saat halaman direfresh
async function fetchTodo() {
  try {
    const response = await fetch('https://crudcrud.com/961c5d695d714afcb09c14c04d68d663/todo');
    const data = await response.json();
    if (data.length > 0) {
      todoContainer.innerHTML = '';
      data.forEach((item) => {
        let todoHTML = `
          <li class="list-group-item d-flex justify-content-between">
            <div>
              <input class="form-check-input me-1" type="checkbox">
              <span>${item.name}</span>
            </div>
            <button class="badge border-0 bg-danger btn-hapus" data-id="${item._id}">X</button>
          </li>
        `;
        todoContainer.insertAdjacentHTML('beforeend', todoHTML);
      });
      addEventListeners();
    }
  } catch (error) {
    console.log(error);
  }
}

fetchTodo();

btnSimpan.addEventListener('click', async function () {
  if (todoName.value == '') {
    alert('Masukkan listnya sayang!');
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
    todoName.value = '';
    todoName.focus();

    addEventListeners();

    // Menyimpan nilai todoHTML ke dalam API setiap kali terjadi perubahan pada tampilan list
    try {
      const response = await fetch('https://crudcrud.com/api/961c5d695d714afcb09c14c04d68d663/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: todoName.value }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
});

// Fungsi untuk menambahkan event listener pada setiap checkbox dan button hapus
function addEventListeners() {
  let checkTodo = document.querySelectorAll('.form-check-input');
  for (let i = 0; i < checkTodo.length; i++) {
    const input = checkTodo[i];
    input.addEventListener('change', async function () {
      let todoSpan = input.nextElementSibling;
      todoSpan.classList.toggle('text-decoration-line-through');

      // Mengubah status todo pada API ketika checkbox diubah
      try {
        const id = input.parentElement.nextElementSibling.dataset.id;
        const response = await fetch(`https://crudcrud.com/api/961c5d695d714afcb09c14c04d68d663/todo/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ completed: input.checked }),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    });
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
