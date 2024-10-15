// Function to get URL parameters
export function populateProfile() {
 function getQueryParams() {
  const params = {};
  window.location.search.substring(1).split("&").forEach(param => {
          const [key, value] = param.split("=");
          params[decodeURIComponent(key)] = decodeURIComponent(value);
  });
  return params;
}

// Retrieve the teamMembers object from local storage
const loadedMembers = JSON.parse(localStorage.getItem('teamMembers'));

const params = getQueryParams();
// Find the member object based on the URL parameters
const member = loadedMembers.find(m => m.name === params.name);

// Populate profile with data from URL

document.getElementById('profile-img1').src = member.imgSrc;
document.getElementById('profile-img2').src = member.imgSrc1;
document.getElementById('profile-img3').src = member.imgSrc2;
document.getElementById('profile-img4').src = member.imgSrc3;
document.getElementById('service1').innerText = member.service1;
document.getElementById('service2').innerText = member.service2;
document.getElementById('service3').innerText = member.service3;
document.getElementById('service4').innerText = member.service4;
document.getElementById('profile-name').innerText = member.name;
document.getElementById('profile-description').innerText = member.description;
document.getElementById('profile-age').innerText = member.Age;
document.getElementById('profile-state').innerText = member.Location.State;
document.getElementById('profile-city').innerText =member.Location.City;
document.getElementById('whatsapp-link').href = `https://wa.me/${member.phoneNumber}`;
document.getElementById('call-link').href = `tel:+${member.phoneNumber}`;
document.getElementById('telegram-link').href = `https://t.me/${member.username}`;

}




