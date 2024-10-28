// import { populateProfile } from "./profile.js";
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
            imgSrc1: "https://resource1.xescorts.com/?id=fbf8ac1e8d30155584903adbb9487dd0232ae42ce03a9e6245145dd50d5f4c703f71591d40f7faedf5d3e2b70a849c4ec962c858a861eab7cbf2310ed4f268522b62ae93511ae364ceb8024dd426f7e080b6029e392c15f2fbca29207506eddc1d002b2ce2cc124a68cd0bd8563ab730a360bb4079642f46d8c85d74a7324cf9",
            imgSrc2: "https://resource3.xescorts.com/?id=fbf8ac1e8d30155584903adbb9487dd0232ae42ce03a9e6245145dd50d5f4c709846c1e92fc90e7fdaaebcef1424440de541d666131f29484be263a6fd74d763d20ca202d9e3a8c745de0c3f0af667888a6f91526234e691c781223dfe413a6a6c58b48d2d90a536a3d5dabc6f3b4edfc5e785c5627e106784a894f741b4e75f",
            imgSrc3: "https://resource4.xescorts.com/?id=fbf8ac1e8d30155584903adbb9487dd0232ae42ce03a9e6245145dd50d5f4c701d4ba91df900491df580894e126ccc2d4f2257351faf6d2875badb44628ebf7f85f25c5abedf663a1b53c03355f0bbf28df3baa3098d9dc842bf323747e3a792595c06e2ed7566876205d97414ad949a32f8ab5db47d6af2e3d5a3f156d21c77",
            description: "I create a welcoming environment that makes you feel at ease.",
            phoneNumber: "YOUR_PHONE_NUMBER",
            username: "YOUR_USERNAME",
            Location: {
                State: "Maharashtra",
                City: "Mumbai"
            },
            service1:"Blow job",
            service2:"Sex Video Call",
            service3:"Companionship",
            service4:"Cum on Face",
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
            service1:"Live Cum",
            service2:"Twerking",
            service3:"Anul sex",
            service4:"Cum on Face",
            Age: "29",
            imgSrc1:"https://resource2.xescorts.com/fbf8ac1e8d30155584903adbb9487dd0f1db554eaf2e1fcf3741ac4e7e8c04f0be6bf158bb065b5b7f482e03b82915fc3c09f5fc31d9627b8fc3f8fc9ed2996775e903ba43f8b7e48b7d3da80ee20e3d7032b5d29b7202c320135c1bbd3bddc3",
            imgSrc2:"https://resource1.xescorts.com/fbf8ac1e8d30155584903adbb9487dd0f1db554eaf2e1fcf3741ac4e7e8c04f023dbce1f104ed10f281c50d93865c61bd60ca667af680a602c5e88e83dadce1a0ccc90bbedb8bbdcd5bd06f901d13fcb92427de5f71355bdd1c5f4c4f9ef3608",
            imgSrc3:"https://resource2.xescorts.com/fbf8ac1e8d30155584903adbb9487dd072ca960c4d4635313ba560ca5938cfdddb1f5415342addfb200bcfb846a3bedb0f3dd6d7e33a535d498f695582826326e4ccb3be170c16680bba63c72f37c002cd0e77ae17b57ec6605f1793f6a92d5c8783d4b85d87107b4d81f20994964503",
           
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
            imgSrc1:"https://resource9.xescorts.com/fbf8ac1e8d30155584903adbb9487dd0f1db554eaf2e1fcf3741ac4e7e8c04f02ce6f18b5129446ab62d754ecd1314c03a54ff270561d68f0f1b2df201a70e77d14148f9454707bc8aabe25b5902547dc6afb0c4039e06966b660ac14dcab18f",
            imgSrc2:"https://resource4.xescorts.com/fbf8ac1e8d30155584903adbb9487dd0f1db554eaf2e1fcf3741ac4e7e8c04f0ea6f1def4d30a0c33bf55995643f673722cfbe0e833fa6873c617ec3489878f3a03c21caf36ad6d3b9c99b0c3814ed191c716e764906cd53debe7e3a32b9aa87",
            imgSrc3:"https://resource0.xescorts.com/fbf8ac1e8d30155584903adbb9487dd0f1db554eaf2e1fcf3741ac4e7e8c04f0b024a22f29810e9fb982b4ec700c39c9b26266d24bfec9049a03b5c2096542d1945b08ecd8d44e29f8d567fbff01d8f6edbc048007c87e5780925fa0012ec92c",
            Age: "20",
            service1:"Hand job",
            service2:"Sex Video Call",
            service3:"Twerking",
            service4:"Cum on Face",
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
            Age: "22",
            service1:"Blow job",
            service2:"Sex Video Call",
            service3:"Twerking Naked",
            service4:"Cum on Face",
            imgSrc1: "https://resource1.xescorts.com/?id=fbf8ac1e8d30155584903adbb9487dd0232ae42ce03a9e6245145dd50d5f4c703f71591d40f7faedf5d3e2b70a849c4ec962c858a861eab7cbf2310ed4f268522b62ae93511ae364ceb8024dd426f7e080b6029e392c15f2fbca29207506eddc1d002b2ce2cc124a68cd0bd8563ab730a360bb4079642f46d8c85d74a7324cf9",
            imgSrc2: "https://resource3.xescorts.com/?id=fbf8ac1e8d30155584903adbb9487dd0232ae42ce03a9e6245145dd50d5f4c709846c1e92fc90e7fdaaebcef1424440de541d666131f29484be263a6fd74d763d20ca202d9e3a8c745de0c3f0af667888a6f91526234e691c781223dfe413a6a6c58b48d2d90a536a3d5dabc6f3b4edfc5e785c5627e106784a894f741b4e75f",
            imgSrc3: "https://resource4.xescorts.com/?id=fbf8ac1e8d30155584903adbb9487dd0232ae42ce03a9e6245145dd50d5f4c701d4ba91df900491df580894e126ccc2d4f2257351faf6d2875badb44628ebf7f85f25c5abedf663a1b53c03355f0bbf28df3baa3098d9dc842bf323747e3a792595c06e2ed7566876205d97414ad949a32f8ab5db47d6af2e3d5a3f156d21c77",
        },
        // Additional members can be added here
    ];

    // Save the teamMembers object in local storage
localStorage.setItem('teamMembers', JSON.stringify(teamMembers));

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










// const teamContainer = document.getElementById('results');
const resultsDiv = document.getElementById('results');
const originalMembers = [...teamMembers]; // Store the original list

// Function to display all members

function displayAllMembers() {
    resultsDiv.innerHTML = ''; // Clear previous results
    originalMembers.forEach(member => {
        const memberDiv = createMemberDiv(member); // Create member div
        resultsDiv.appendChild(memberDiv);
    });
}

// Function to create member div
function createMemberDiv(member) {
    const memberDiv = document.createElement('div');
    memberDiv.className = 'row wow fadeInLeft team_description mt-3 mx-1';
    memberDiv.setAttribute('data-wow-delay', '2000');

    memberDiv.innerHTML = `
    <a href="profile.html?name=${encodeURIComponent(member.name)}&imgSrc=${encodeURIComponent(member.imgSrc)}&description=${encodeURIComponent(member.description)}&age=${encodeURIComponent(member.Age)}&state=${encodeURIComponent(member.Location.State)}&city=${encodeURIComponent(member.Location.City)}&phoneNumber=${encodeURIComponent(member.phoneNumber)}&username=${encodeURIComponent(member.username)}" class="row mx-1 text-decoration-none">
        <div class="col-md-3 col-sm-8 mx-auto d-flex justify-content-center align-items-center">
            <img src="${member.imgSrc}" class="rounded float-start img-fluid profile-pic" alt="${member.name}">
        </div>
        <div class="col-sm-8 col-md-3 mx-auto">
            <h5>${member.name}</h5>
            <div class="col-sm-12 d-flex justify-content-center my-2">
                <button class="btn btn-light btn-sm btn-md-md rounded me-1">
                    <span class="text-dark text-center">Age: ${member.Age}</span>
                </button>
            </div>
            <div class="col-sm-12 d-flex justify-content-center my-2">
                <button class="btn btn-light  rounded me-1">
                    <span class="text-dark text-center">State: ${member.Location.State}</span>
                </button>
                <button class="btn btn-light  rounded">
                    <span class="text-dark text-center">City: ${member.Location.City}</span>
                </button>
            </div>
        </div>
    </a>
`;
    return memberDiv;
}

// Search function



function searchGirls() {
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const resultsDiv = document.getElementById('results');

    // Clear previous results
    resultsDiv.innerHTML = '';

    // Filter team members based on selected state and city
    const filteredMembers = originalMembers.filter(member => {
        const matchesState = state ? member.Location.State === state : true;
        const matchesCity = city ? member.Location.City === city : true;
        return matchesState && matchesCity;
    });

    // Display filtered results or show all members if none found
    if (filteredMembers.length > 0) {
        filteredMembers.forEach(member => {
            const memberDiv = createMemberDiv(member);
            resultsDiv.appendChild(memberDiv);
        });
    } else {
        resultsDiv.innerHTML = '<h2 class="text-danger">No results found!!</h2>';
    }

    // Add back button
    const backButton = document.createElement('button');
    backButton.className = 'btn btn-secondary mt-3';
    backButton.innerText = 'Back to All Members';
    backButton.onclick = displayAllMembers;
    resultsDiv.appendChild(backButton);

      // Scroll to the results section
      const resultsSection = document.getElementById('team');
      resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Initial display of all members
displayAllMembers();


function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split("&").forEach(param => {
            const [key, value] = param.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return params;
}

