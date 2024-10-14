
/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){
  /* FlexSlider */
  $('.flexslider').flexslider({
      animation: "fade",
      directionNav: false
  });

  $(".rotate").textrotator();

  new WOW().init();

  loadGoogleMap();
});




    const citiesByState = {
        "Andaman & Nicobar Islands": ["Port Blair"],
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
        "Arunachal Pradesh": ["Itanagar", "Naharlagun"],
        "Assam": ["Guwahati", "Dibrugarh", "Silchar"],
        "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
        "Chandigarh": ["Chandigarh"],
        "Chhattisgarh": ["Raipur", "Bilaspur", "Durg"],
        "Dadra & Nagar Haveli": ["Silvassa"],
        "Daman & Diu": ["Daman", "Diu"],
        "Delhi": ["New Delhi", "Delhi"],
        "Goa": ["Panaji", "Margao", "Mapusa"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
        "Haryana": ["Gurgaon", "Faridabad", "Panipat"],
        "Himachal Pradesh": ["Shimla", "Dharamshala", "Manali"],
        "Jammu & Kashmir": ["Srinagar", "Jammu", "Leh"],
        "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
        "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
        "Lakshadweep": ["Kavaratti"],
        "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
        "Manipur": ["Imphal"],
        "Meghalaya": ["Shillong"],
        "Mizoram": ["Aizawl"],
        "Nagaland": ["Kohima", "Dimapur"],
        "Odisha": ["Bhubaneswar", "Cuttack"],
        "Puducherry": ["Puducherry"],
        "Punjab": ["Chandigarh", "Amritsar", "Ludhiana"],
        "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur"],
        "Sikkim": ["Gangtok"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
        "Telangana": ["Hyderabad", "Warangal"],
        "Tripura": ["Agartala"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
        "Uttarakhand": ["Dehradun", "Nainital"],
        "West Bengal": ["Kolkata", "Siliguri", "Durgapur"]
    };

    const teamMembers = [
        {
            name: "Tracy",
            imgSrc: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "I create a welcoming environment that makes you feel at ease.",
            phoneNumber: "YOUR_PHONE_NUMBER",
            username: "YOUR_USERNAME",
            Location: {
                State: "Maharashtra",
                City: "Mumbai"
            },
            Age: "25"
        },
        {
            name: "Meera",
            imgSrc: "https://images.pexels.com/photos/1484990/pexels-photo-1484990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "I enjoy expressing my creativity in web cam through various themes.",
            phoneNumber: "YOUR_PHONE_NUMBER",
            username: "YOUR_USERNAME",
            Location: {
                State: "Karnataka",
                City: "Bengaluru"
            },
            Age: "29"
        },
        {
            name: "Saanvi",
            imgSrc: "https://images.pexels.com/photos/16499147/pexels-photo-16499147/free-photo-of-indian-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "I am not shy in front of the camera, love exploring new hobbies.",
            phoneNumber: "YOUR_PHONE_NUMBER",
            username: "YOUR_USERNAME",
            Location: {
                State: "Punjab",
                City: "Amritsar"
            },
            Age: "20"
        },
        {
            name: "Aanya",
            imgSrc: "https://images.pexels.com/photos/13079571/pexels-photo-13079571.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "I love to connect with my viewers, sharing stories and laughter.",
            phoneNumber: "YOUR_PHONE_NUMBER",
            username: "YOUR_USERNAME",
            Location: {
                State: "Tamil Nadu",
                City: "Chennai"
            },
            Age: "22"
        },
        // Additional members can be added here
    ];

    function populateCities() {
        const stateSelect = document.getElementById('state');
        const citySelect = document.getElementById('city');
        const selectedState = stateSelect.value;

        // Clear previous city options
        citySelect.innerHTML = '<option value="">City</option>';

        if (selectedState && citiesByState[selectedState]) {
            citiesByState[selectedState].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    }

    function searchGirls() {
        const state = document.getElementById('state').value;
        const city = document.getElementById('city').value;
        const resultsDiv = document.getElementById('results');

        // Clear previous results
        resultsDiv.innerHTML = '';

        // Filter team members based on selected state and city or show all if none selected
        const filteredMembers = teamMembers.filter(member => {
            const matchesState = state ? member.Location.State === state : true;
            const matchesCity = city ? member.Location.City === city : true;
            return matchesState && matchesCity;
        });

        // Display filtered results
        if (filteredMembers.length > 0) {
            filteredMembers.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.innerHTML = `
                
        <div class="col-3 mx-auto d-flex justify-content-center align-items-center">
            <img src="${member.imgSrc}" class="rounded float-start img-fluid profile-pic" alt="${member.name}">
        </div>
        <div class="col-8 mx-auto">
            <h5>${member.name}</h5>
            <p>${member.description}</p>
                   <div class="col-sm-12 d-flex justify-content-center mb-1">
                   <div class="col-sm-4 me-1">
                      <button class="btn btn-light col-sm-12 rounded ">
                        <span class="text-dark text-center">Age:${member.Age}</span>
                      </button>
                   </div>
                    <div class="col-sm-6">
                       <button class="btn btn-light  rounded ">
                        <span class="text-dark text-center">State:${member.Location.State}</span>
                      </button>
                   </div>
                    	
                     
                       <div class="col-sm-6 ms-1">
                           <button class="btn btn-light  rounded ">
                        <span class="text-dark text-center">City:${member.Location.City}</span>
                            </button>
                       </div>
                       
            </div>
            <div class="col-sm-12 d-flex justify-content-center">
                <a href="https://wa.me/${member.phoneNumber}" class="text-decoration-none" target="_blank">
                    <i class="bi bi-whatsapp whatsapp-icon text-success" aria-hidden="true"> Whatsapp</i>
                </a>
                <a href="tel:+${member.phoneNumber}" class="text-decoration-none ms-4" target="_blank">
                    <i class="bi bi-telephone-fill text-danger" aria-hidden="true"> Call</i>
                </a>
                <a href="https://t.me/${member.username}" class="text-decoration-none ms-4" target="_blank">
                    <i class="bi bi-telegram text-primary" aria-hidden="true"> Telegram</i>
                </a>
            </div>
        </div>
    `;
                resultsDiv.appendChild(memberDiv);
            });
        } else {
            resultsDiv.innerHTML = '<p>No results found.</p>';
        }
    }


const teamContainer = document.getElementById('results');

teamMembers.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.className = 'row wow fadeInLeft team_description mt-3 mx-1';
    memberDiv.setAttribute('data-wow-delay', '2000');

    memberDiv.innerHTML = `
        <div class="col-3 mx-auto d-flex justify-content-center align-items-center">
            <img src="${member.imgSrc}" class="rounded float-start img-fluid profile-pic" alt="${member.name}">
        </div>
        <div class="col-8 mx-auto">
            <h5>${member.name}</h5>
            <p>${member.description}</p>
                   <div class="col-sm-12  d-flex justify-content-center  my-2">
                    	<button class="btn btn-light   btn-sm btn-md-md rounded me-1">
                        <span class="text-dark text-center">Age:${member.Age}</span>
                      </button>
                      <button class="btn btn-light  btn-sm  btn-md-md  rounded me-1">
                        <span class="text-dark text-center">State:${member.Location.State}</span>
                      </button>
                        <button class="btn btn-light btn-sm  btn-md-md  rounded ">
                        <span class="text-dark text-center">City:${member.Location.City}</span>
                      </button>
            </div>
            <div class="col-sm-12 d-flex justify-content-center">
                <a href="https://wa.me/${member.phoneNumber}" class="text-decoration-none" target="_blank">
                    <i class="bi bi-whatsapp whatsapp-icon text-success" aria-hidden="true"> Whatsapp</i>
                </a>
                <a href="tel:+${member.phoneNumber}" class="text-decoration-none ms-4" target="_blank">
                    <i class="bi bi-telephone-fill text-danger" aria-hidden="true"> Call</i>
                </a>
                <a href="https://t.me/${member.username}" class="text-decoration-none ms-4" target="_blank">
                    <i class="bi bi-telegram text-primary" aria-hidden="true"> Telegram</i>
                </a>
            </div>
        </div>
    `;

    teamContainer.appendChild(memberDiv);
});
