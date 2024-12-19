
function newData () {

  fetch('https://randomuser.me/api')
  .then((response) => response.json())
  .then((info) => {
    newInfo = info.results[0];
    return newInfo;
  }).then((newInfo) => update(newInfo))
}


function update(newInfo) {
  // Gender Color change
  if (newInfo.gender === 'female') {
    document.querySelector('body').style.backgroundColor = '#9146FF'
  }else {
    document.querySelector('body').style.backgroundColor = '#33a4d1'
  }
  
  // Update the User Info
  document.getElementById('pfp').src = newInfo.picture.large;
  document.getElementById('name').innerHTML = `<strong>Name: </strong>${newInfo.name.first} ${newInfo.name.last}`;
  document.getElementById('email').innerHTML = `<strong>Email: </strong>${newInfo.email}`;
  document.getElementById('phone').innerHTML = `<strong>Phone: </strong>${newInfo.phone}`;
  document.getElementById('location').innerHTML = `<strong>Location: </strong>${newInfo.location.city}, ${newInfo.location.country}`;
  document.getElementById('age').innerHTML = `<strong>Age: </strong>${newInfo.dob.age}`

}



document.querySelector('button').addEventListener('click', newData);