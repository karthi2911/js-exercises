const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
const fetchlist = document.getElementById('fetchList');
const popup = document.getElementById('popupContent');

fetch(fetchURL)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
    data.forEach(e => {
      let li = document.createElement('li');
      li = fetchlist.appendChild(li);
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let btn = document.createElement('button');
      li.appendChild(h2);
      li.appendChild(p);
      li.appendChild(btn);
      h2.innerHTML = e.title
      p.innerHTML = e.body
      btn.innerHTML = "View Details"
      btn.setAttribute('userID',`${e.userId}`)
      btn.setAttribute('data-target','modal1')
      btn.setAttribute('class', 'modal-trigger btn-large waves-effect waves-light teal darken-3')
      btn.addEventListener('click', detailClick);
    });
  })
  .catch(err => {
    console.log(err)
})

function detailClick() {
  popupContent.innerHTML = "";
  let data = {}
  let userID = this.getAttribute('userID');
  if(localStorage.getItem(userID)) {
    console.log(JSON.parse(localStorage.getItem(userID)));
    data = JSON.parse(localStorage.getItem(userID))
    template(data);
  } else {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(popResponse => {
      popResponse.json()
      .then(popupdata => {
        console.log(popupdata)
        localStorage.setItem(userID, JSON.stringify(popupdata));
        template(popupdata);
      })
    })
    .catch(err => {
      console.log(err)
    }) 
  }
}
function template(data) {
  console.log(data);
  let userHeading = document.createElement('H4');
  userHeading.innerHTML = 'Popup Details'; userHeading = popup.appendChild(userHeading);
  // Name
  let name = document.createElement('p'); name = popup.appendChild(name);
  name.innerHTML = `<strong>Name:</strong> ${data.name}`;

  // User Name
  let username = document.createElement('p'); username = popup.appendChild(username);
  username.innerHTML = `<strong>UserName:</strong> ${data.username}`;

  // Email
  let email = document.createElement('p'); email = popup.appendChild(email);
  email.innerHTML = `<strong>Email:</strong> ${data.email}`;

  // Address
  let address = document.createElement('p'); address = popup.appendChild(address);
  address.innerHTML = `<strong>Address:</strong> ${data.address.city}, ${data.address.street}, ${data.address.zipcode}`;

  // Company Name
  let company = document.createElement('p'); company = popup.appendChild(company);
  company.innerHTML = `<strong>Company:</strong> ${data.company.name}`;

  // Phone
  let phone = document.createElement('p'); phone = popup.appendChild(phone);
  phone.innerHTML = `<strong>Phone:</strong> ${data.phone}`;

  // Website
  let website = document.createElement('p'); website = popup.appendChild(website);
  website.innerHTML = `<strong>Website:</strong> ${data.website}`;
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});