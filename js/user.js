document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded!');

  // Initialize Materialize components
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});

  // Select elements
  const addUserButton = document.getElementById('add_user_button');
  const modalBack = document.querySelector('.add_user_modal_back');
  const modal = document.querySelector('.add_user_modal');

  if (!addUserButton || !modalBack || !modal) {
      console.error('One or more elements not found!');
      return;
  }

  // Fetch users function
  const fetchUsers = () => {
      console.log('Fetching users...');
      fetch('https://jsonplaceholder.typicode.com/Usre')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(users => {
              console.log('Users:', users);
              const tableBody = document.querySelector('.table');
              const mobileList = document.querySelector('.collapsible');

              if (!tableBody || !mobileList) {
                  console.error('Table or mobile list not found!');
                  return;
              }

              // Clear existing content
              tableBody.innerHTML = '';
              mobileList.innerHTML = '';

              // Generate table rows
              users.forEach(user => {
                  // Desktop view
                  tableBody.innerHTML += `
                      <tr>
                          <td>${user.id}</td>
                          <td>${user.name}</td>
                          <td>${user.username}</td>
                          <td>${user.email}</td>
                          <td>${user.address.city}</td>
                          <td>
                              <i class="material-icons red-text m-l-5 m-r-5">delete_forever</i>
                              <i class="material-icons orange-text m-l-5 m-r-5">edit</i>
                          </td>
                      </tr>`;

                  // Mobile view
                  mobileList.innerHTML += `
                      <li class="User_list_itme">
                          <div class="collapsible-header">
                              <i class="material-icons blue-text User_list_arrow_icon trans-0-2">arrow_drop_down_circle</i>
                              ${user.username}
                          </div>
                          <div class="collapsible-body">
                              <div class="p-all-5">
                                  <span class="f-bold">Username:</span> 
                                  <span>${user.username}</span>
                              </div>
                              <div class="p-all-5">
                                  <span class="f-bold">Email:</span> 
                                  <span>${user.email}</span>
                              </div>
                              <div class="p-all-5">
                                  <span class="f-bold">Address:</span> 
                                  <span>${user.address.city}</span>
                              </div>
                              <div class="p-all-5">
                                  <span class="f-bold">Actions:</span>
                                  <i class="material-icons red-text m-l-5 m-r-5">delete_forever</i>
                                  <i class="material-icons orange-text m-l-5 m-r-5">edit</i>
                              </div>
                          </div>
                      </li>`;
              });
          })
          .catch(error => console.error('Error fetching users:', error));
  };

  // Modal handling
  addUserButton.addEventListener('click', () => {
      console.log('Add User Button Clicked!');
      modal.classList.add('show');
      modalBack.classList.remove('dis-none');
      fetchUsers();
  });

  modalBack.addEventListener('click', () => {
      console.log('Modal Back Clicked!');
      modal.classList.remove('show');
      modalBack.classList.add('dis-none');
  });
});



// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize Materialize
//     M.AutoInit();
    
//     // Elements
//     const addUserButton = document.getElementById('add_user_button');
//     const modal = document.getElementById('add_user_modal');
//     const modalInstance = M.Modal.init(modal, { 
//       onCloseEnd: () => modal.classList.remove('show')
//     });
  
//     // Fetch Users (اصلاح شده)
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await response.json();
        
//         const tableBody = document.querySelector('.table tbody');
//         const mobileList = document.querySelector('.collapsible');
        
//         // Clear existing
//         if(tableBody) tableBody.innerHTML = '';
//         if(mobileList) mobileList.innerHTML = '';
  
//         // Populate data
//         users.forEach(user => {
//           // Desktop Row
//           const tr = document.createElement('tr');
//           tr.innerHTML = `
//             <td>${user.id}</td>
//             <td>${user.name}</td>
//             <td>${user.username}</td>
//             <td>${user.email}</td>
//             <td>${user.address.city}</td>
//             <td>
//               <i class="material-icons red-text">delete_forever</i>
//               <i class="material-icons orange-text">edit</i>
//             </td>
//           `;
//           tableBody.appendChild(tr);
  
//           // Mobile Item
//           const li = document.createElement('li');
//           li.className = 'User_list_itme';
//           li.innerHTML = `
//             <div class="collapsible-header">
//               <i class="material-icons blue-text User_list_arrow_icon">arrow_drop_down_circle</i>
//               ${user.username}
//             </div>
//             <div class="collapsible-body">
//               <!-- محتوای بدنه -->
//             </div>
//           `;
//           mobileList.appendChild(li);
//         });
  
//         // Re-init collapsible
//         M.Collapsible.init(document.querySelectorAll('.collapsible'));
        
//       } catch (error) {
//         console.error('Error:', error);
//         M.toast({html: 'خطا در دریافت داده‌ها!'});
//       }
//     };
  
//     // Event Listeners
//     addUserButton.addEventListener('click', () => {
//       modalInstance.open();
//       fetchUsers();
//     });
//   });