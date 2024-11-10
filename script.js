// Back to Top button functionality
window.onscroll = function() {
    const backToTopBtn = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Search functionality
function searchNGO() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const ngos = document.querySelectorAll(".ngo-item");
    
    ngos.forEach(ngo => {
        const name = ngo.querySelector('h3').textContent.toLowerCase();
        if (name.includes(input)) {
            ngo.style.display = "";
        } else {
            ngo.style.display = "none";
        }
    });
}
function donate(ngoName) {
    let donationUrl;

    // Define donation URLs for each NGO
    switch (ngoName) {
        case 'WWF':
            donationUrl = 'https://www.worldwildlife.org/donate';
            break;
        case 'Greenpeace':
            donationUrl = 'https://www.greenpeace.org/donate';
            break;
        case 'Earthwatch':
            donationUrl = 'https://earthwatch.org/get-involved/donate';
            break;
        case 'Doctors Without Borders':
            donationUrl = 'https://www.doctorswithoutborders.org/donate';
            break;
        case 'American Red Cross':
            donationUrl = 'https://www.redcross.org/donate';
            break;
        case 'Global Health Corps':
            donationUrl = 'https://www.ghcorps.org/donate';
            break;
        case 'Room to Read':
            donationUrl = 'https://www.roomtoread.org/donate';
            break;
        case 'Teach For All':
            donationUrl = 'https://teachforall.org/donate';
            break;
        case 'Pratham':
            donationUrl = 'https://www.pratham.org/donate';
            break;
        default:
            alert("Donation page not available.");
            return;
    }

    // Open the donation URL in a new tab
    window.open(donationUrl, '_blank');
}
// Sample data with additional information about each NGO
const ngoDetails = {
    "WWF": {
        name: "World Wildlife Fund (WWF)",
        info: "The World Wildlife Fund works worldwide to conserve nature and reduce the most pressing threats to the diversity of life on Earth. WWF focuses on areas such as climate, food, forests, oceans, and wildlife."
    },
    "Greenpeace": {
        name: "Greenpeace",
        info: "Greenpeace is a global organization that works to protect the environment by addressing issues such as climate change, deforestation, overfishing, and pollution. They aim to promote peace and sustainability."
    },
    "Earthwatch": {
        name: "Earthwatch",
        info: "Earthwatch brings individuals from all walks of life together to fight for the future of our planet. They conduct scientific research and engage citizens in conserving the environment."
    },
    "Doctors Without Borders": {
        name: "Doctors Without Borders",
        info: "Doctors Without Borders provides medical care in emergency situations around the world, often in conflict zones or areas with severe healthcare needs."
    },
    "American Red Cross": {
        name: "American Red Cross",
        info: "The American Red Cross prevents and alleviates human suffering in the face of emergencies through volunteer service and donations."
    },
    "Global Health Corps": {
        name: "Global Health Corps",
        info: "Global Health Corps mobilizes the next generation of health leaders to work towards health equity around the world."
    },
    "Room to Read": {
        name: "Room to Read",
        info: "Room to Read is dedicated to improving literacy and gender equality in education in low-income communities around the world."
    },
    "Teach For All": {
        name: "Teach For All",
        info: "Teach For All is a global network aiming to provide educational opportunities to children in under-resourced communities."
    },
    "Pratham": {
        name: "Pratham",
        info: "Pratham is focused on improving the quality of education in India, particularly for children from underprivileged backgrounds."
    }
};

// Function to display more information about each NGO
function learnMore(ngoName) {
    const ngo = ngoDetails[ngoName];
    if (ngo) {
        alert(`${ngo.name}\n\n${ngo.info}`);
    } else {
        alert("More information is not available at this time.");
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Filter NGOs by category
function filterCategory(category) {
    const ngos = document.querySelectorAll(".ngo-item");

    ngos.forEach(ngo => {
        if (category === 'all' || ngo.classList.contains(category)) {
            ngo.style.display = "";
        } else {
            ngo.style.display = "none";
        }
    });
}
