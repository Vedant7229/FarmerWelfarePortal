document.addEventListener("DOMContentLoaded", () => {
    // Scheme data for Gujarat and Rajasthan
    const schemes = {
        gujarat: [
            { id: 1, name: "Mukhyamantri Kisan Sahay Yojana", description: "Financial assistance to farmers in case of crop loss due to natural calamities.", documentation: "The Mukhyamantri Kisan Scheme provides targeted support to farmers through financial aid, subsidies, and technical assistance. It aims to improve agricultural productivity, enhance income, and offer solutions for crop insurance and farm inputs. The scheme focuses on empowering farmers and promoting sustainable and efficient farming practices." },
            { id: 2, name: "Kisan Parivahan Yojana", description: "Subsidy for purchasing transport vehicles for agricultural produce.", documentation: "Aadhaar, Vehicle purchase invoice, Bank details" },
            { id: 3, name: "Irrigation Water Supply Scheme", description: "Providing subsidized irrigation water supply to farmers.", documentation: "Aadhaarxxxxxx, Land records, Irrigation equipment purchase details" },
            { id: 4, name: "Solar Pump Scheme", description: "Subsidy for installing solar pumps to irrigate farmlands.", documentation: "Aadhaar, Solar pump purchase details, Land records" },
            { id: 5, name: "Crop Insurance Scheme", description: "Insurance coverage for various crops cultivated by farmers.", documentation: "Aadhaar, Crop details, Bank details" },
            { id: 6, name: "Organic Farming Subsidy", description: "Financial assistance for organic farming initiatives.", documentation: "Aadhaar, Land records, Organic farming certificate" },
            { id: 7, name: "Horticulture Development Scheme", description: "Support for developing horticulture projects.", documentation: "Aadhaar, Land records, Horticulture project plan" },
            { id: 8, name: "Dairy Development Scheme", description: "Subsidy for dairy farming and milk production.", documentation: "Aadhaar, Land records, Dairy farm details" },
            { id: 9, name: "Agro Processing Units Scheme", description: "Support for setting up agro processing units.", documentation: "Aadhaar, Land records, Project plan" },
            { id: 10, name: "Farm Mechanization Scheme", description: "Subsidy for purchasing farm machinery and equipment.", documentation: "Aadhaar, Machinery purchase details, Land records" }
        ],
        rajasthan: [
            { id: 1, name: "Raj Kisan Yojana", description: "Subsidy for farm mechanization to increase productivity.", documentation: "Aadhaar, Machinery purchase details, Land records" },
            { id: 2, name: "Pradhan Mantri Fasal Bima Yojana", description: "Crop insurance scheme to protect against crop loss.", documentation: "Aadhaar, Crop details, Bank details" },
            { id: 3, name: "Soil Health Card Scheme", description: "Providing soil health cards to farmers to improve soil quality.", documentation: "Aadhaar, Land records, Soil test report" },
            { id: 4, name: "Solar Energy Subsidy Scheme", description: "Subsidy for solar power systems for farming operations.", documentation: "Aadhaar, Solar system purchase details, Land records" },
            { id: 5, name: "Drip Irrigation Scheme", description: "Subsidy for installing drip irrigation systems.", documentation: "Aadhaar, Drip irrigation purchase details, Land records" },
            { id: 6, name: "Livestock Insurance Scheme", description: "Insurance coverage for livestock against natural calamities.", documentation: "Aadhaar, Livestock details, Insurance premium receipt" },
            { id: 7, name: "Agricultural Equipment Subsidy", description: "Subsidy for purchasing advanced agricultural equipment.", documentation: "Aadhaar, Equipment purchase details, Land records" },
            { id: 8, name: "Horticulture Promotion Scheme", description: "Support for promoting horticulture farming in Rajasthan.", documentation: "Aadhaar, Land records, Horticulture project plan" },
            { id: 9, name: "Rainwater Harvesting Scheme", description: "Financial assistance for installing rainwater harvesting systems.", documentation: "Aadhaar, System purchase details, Land records" },
            { id: 10, name: "Farm Pond Scheme", description: "Support for constructing farm ponds to store rainwater.", documentation: "Aadhaar, Pond construction plan, Land records" }
        ]
    };


    // DOM elements
    const stateSelector = document.getElementById("state-selector");
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");
    const schemeList = document.getElementById("scheme-list");
    const detailsContent = document.getElementById("details-content");

    // Language-related DOM elements
    const languageSelect = document.getElementById("language-select");
    const mainTitle = document.querySelector("h1");  // Farmer Welfare Portal title
    const heroHeading = document.querySelector(".hero-content h2");
    const heroDescription = document.querySelector(".hero-content p");
    const schemesTitle = document.querySelector(".schemes h2");
    const contactTitle = document.querySelector(".footer h2");
    const contactEmail = document.querySelector(".footer p");

    const translations = {
        en: {
            mainTitle: "Farmer Welfare Portal",
            heroHeading: "Empowering Farmers",
            heroDescription: "Explore comprehensive welfare schemes for sustainable farming.",
            schemesTitle: "Government Schemes",
            contactTitle: "Contact Us",
            contactEmail: "Email: xxx@gmail.com",
        },
        hi: {
            mainTitle: "किसान कल्याण पोर्टल",
            heroHeading: "किसानों को सशक्त बनाना",
            heroDescription: "सतत कृषि के लिए व्यापक कल्याण योजनाओं का अन्वेषण करें।",
            schemesTitle: "सरकारी योजनाएँ",
            contactTitle: "संपर्क करें",
            contactEmail: "ईमेल: xxx@gmail.com",
        },
        gu: {
            mainTitle: "ખેડૂત કલ્યાણ પોર્ટલ",
            heroHeading: "ખેડૂતોને સશક્ત બનાવવાં",
            heroDescription: "સ્થિર કૃષિ માટે વ્યાપક કલ્યાણ યોજનાઓ શોધો.",
            schemesTitle: "સરકારી યોજનાઓ",
            contactTitle: "અમારો સંપર્ક કરો",
            contactEmail: "ઈમેલ: xxx@gmail.com",
        }
    };

    // Function to switch languages
    function switchLanguage(lang) {
        const translation = translations[lang];
        mainTitle.textContent = translation.mainTitle;
        heroHeading.textContent = translation.heroHeading;
        heroDescription.textContent = translation.heroDescription;
        schemesTitle.textContent = translation.schemesTitle;
        contactTitle.textContent = translation.contactTitle;
        contactEmail.textContent = translation.contactEmail;
    }

    // Listen for language selection changes
    languageSelect.addEventListener("change", (e) => {
        switchLanguage(e.target.value);
    });

    // Function to display schemes based on the selected state
    function displaySchemes(state) {
        schemeList.innerHTML = ""; // Clear previous schemes
        const selectedSchemes = schemes[state];

        selectedSchemes.forEach(scheme => {
            const schemeItem = document.createElement("div");
            schemeItem.className = "scheme-item";
            schemeItem.dataset.id = scheme.id;
            schemeItem.innerHTML = `
                <h3>${scheme.name}</h3>
                <p>${scheme.description}</p>
                <button class="view-details-btn">View Details</button>
            `;
            schemeList.appendChild(schemeItem);

            // Handle scheme details view button
            schemeItem.querySelector(".view-details-btn").addEventListener("click", () => {
                displaySchemeDetails(scheme);
            });
        });
    }

    // Function to display scheme details
    function displaySchemeDetails(scheme) {
        detailsContent.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <p><strong>Important D:</strong> ${scheme.documentation}</p>
            <button class="close-btn">Close</button>
        `;
        detailsContent.classList.add("active");

        // Close button functionality
        document.querySelector(".close-btn").addEventListener("click", () => {
            detailsContent.classList.remove("active");
        });
    }
    

    // Listen for state selection changes
    stateSelector.addEventListener("change", (e) => {
        displaySchemes(e.target.value);
    });

    // Initial display of schemes for Gujarat
    displaySchemes("gujarat");

    
});
document.addEventListener("DOMContentLoaded", () => {
    // Scheme data for Gujarat and Rajasthan
    const schemes = {
        gujarat: [
            { id: 1, name: "Mukhyamantri Kisan Sahay Yojana", description: "Financial assistance to farmers in case of crop loss due to natural calamities.", documentation: "The Mukhyamantri Kisan Scheme provides targeted support to farmers through financial aid, subsidies, and technical assistance. It aims to improve agricultural productivity, enhance income, and offer solutions for crop insurance and farm inputs. The scheme focuses on empowering farmers and promoting sustainable and efficient farming practices. List of some reuired documents - Aadhaar, Land records, Bank details" },
            { id: 2, name: "Kisan Parivahan Yojana", description: "Subsidy for purchasing transport vehicles for agricultural produce.", documentation: "The Kisan Parivahan Scheme supports farmers by providing subsidies for the purchase of transportation vehicles. Aimed at improving rural connectivity, it helps farmers transport their produce efficiently to markets, reducing post-harvest losses and boosting income. The scheme promotes better access to markets and reduces transportation costs. List of some reuired documents - Aadhaar, Vehicle purchase invoice, Bank details" },
            { id: 3, name: "Irrigation Water Supply Scheme", description: "Providing subsidized irrigation water supply to farmers.", documentation: ", Land records, Irrigation equipment purchase details" },
            { id: 4, name: "Solar Pump Scheme", description: "Subsidy for installing solar pumps to irrigate farmlands.", documentation: "The Solar Pump Scheme provides subsidies to farmers for installing solar-powered irrigation pumps. This initiative reduces dependency on conventional electricity, lowers operational costs, and supports sustainable farming practices. By harnessing solar energy, farmers can improve water access and enhance crop productivity while reducing environmental impact.List of some reuired documents - Aadhaar, Solar pump purchase details, Land records" },
            { id: 5, name: "Crop Insurance Scheme", description: "Insurance coverage for various crops cultivated by farmers.", documentation: "The Crop Insurance Scheme offers financial protection to farmers against crop loss due to natural calamities, pests, and diseases. It provides compensation based on the extent of damage, ensuring farmers can recover and continue farming. The scheme aims to stabilize income and encourage agricultural resilience.List of some reuired documents - Aadhaar, Crop details, Bank details" },
            { id: 6, name: "Organic Farming Subsidy", description: "Financial assistance for organic farming initiatives.", documentation: "The Organic Farming Subsidy offers financial assistance to farmers transitioning to organic farming practices. It supports costs related to organic inputs, certification, and training. The scheme aims to promote sustainable agriculture, enhance soil health, and increase market access for organic produce, improving environmental and economic outcomes. List of some reuired documents - Aadhaar, Land records, Organic farming certificate" },
            { id: 7, name: "Horticulture Development Scheme", description: "Support for developing horticulture projects.", documentation: "The Horticulture Development Scheme offers support for the cultivation of fruits, vegetables, and flowers. It provides financial aid for infrastructure, inputs, and technology adoption. The scheme aims to boost production, improve quality, and enhance market access, promoting sustainable practices and increasing farmers' income in the horticulture sector.List of some reuired documents - Aadhaar, Land records, Horticulture project plan" },
            { id: 8, name: "Dairy Development Scheme", description: "Subsidy for dairy farming and milk production.", documentation: "The Agro Processing Unit scheme supports the development of processing facilities for agricultural produce. It offers financial assistance, technology, and infrastructure to enhance value addition, reduce waste, and improve farmer incomes. Objectives include boosting productivity, creating jobs, and strengthening the supply chain in the agribusiness sector.List of some reuired documents - Aadhaar, Land records, Dairy farm details" },
            { id: 9, name: "Agro Processing Units Scheme", description: "Support for setting up agro processing units.", documentation: "The Farm Mechanization Scheme provides financial aid for purchasing modern farming equipment. It aims to enhance agricultural productivity, reduce manual labor, and improve efficiency. By subsidizing machinery costs, the scheme supports farmers in adopting advanced technology, leading to better crop yields and sustainable farming practices.List of some reuired documents - Aadhaar, Land records, Project plan" },
            { id: 10, name: "Farm Mechanization Scheme", description: "Subsidy for purchasing farm machinery and equipment.", documentation: "The Farm Mechanization Scheme provides financial aid for purchasing modern farming equipment. It aims to enhance agricultural productivity, reduce manual labor, and improve efficiency. By subsidizing machinery costs, the scheme supports farmers in adopting advanced technology, leading to better crop yields and sustainable farming practices.List of some reuired documents - Aadhaar, Machinery purchase details, Land records" }
 
        ],
        rajasthan: [
            { id: 1, name: "Raj Kisan Yojana", description: "Subsidy for farm mechanization to increase productivity.", documentation: "Aadhaar, Machinery purchase details, Land records" },
            { id: 2, name: "Pradhan Mantri Fasal Bima Yojana", description: "Crop insurance scheme to protect against crop loss.", documentation: "Aadhaar, Crop details, Bank details" },
            { id: 3, name: "Soil Health Card Scheme", description: "Providing soil health cards to farmers to improve soil quality.", documentation: "Aadhaar, Land records, Soil test report" },
            { id: 4, name: "Solar Energy Subsidy Scheme", description: "Subsidy for solar power systems for farming operations.", documentation: "Aadhaar, Solar system purchase details, Land records" },
            { id: 5, name: "Drip Irrigation Scheme", description: "Subsidy for installing drip irrigation systems.", documentation: "Aadhaar, Drip irrigation purchase details, Land records" },
            { id: 6, name: "Livestock Insurance Scheme", description: "Insurance coverage for livestock against natural calamities.", documentation: "Aadhaar, Livestock details, Insurance premium receipt" },
            { id: 7, name: "Agricultural Equipment Subsidy", description: "Subsidy for purchasing advanced agricultural equipment.", documentation: "Aadhaar, Equipment purchase details, Land records" },
            { id: 8, name: "Horticulture Promotion Scheme", description: "Support for promoting horticulture farming in Rajasthan.", documentation: "Aadhaar, Land records, Horticulture project plan" },
            { id: 9, name: "Rainwater Harvesting Scheme", description: "Financial assistance for installing rainwater harvesting systems.", documentation: "Aadhaar, System purchase details, Land records" },
            { id: 10, name: "Farm Pond Scheme", description: "Support for constructing farm ponds to store rainwater.", documentation: "Aadhaar, Pond construction plan, Land records" }
 
        ]
    };

    // DOM elements
    const stateSelector = document.getElementById("state-selector");
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");
    const voiceSearchButton = document.getElementById("voice-search-btn");
    const schemeList = document.getElementById("scheme-list");
    const detailsContent = document.getElementById("details-content");

    // Language-related DOM elements
    const languageSelect = document.getElementById("language-select");
    const mainTitle = document.querySelector("h1");  // Farmer Welfare Portal title
    const heroHeading = document.querySelector(".hero-content h2");
    const heroDescription = document.querySelector(".hero-content p");
    const schemesTitle = document.querySelector(".schemes h2");
    const contactTitle = document.querySelector(".footer h2");
    const contactEmail = document.querySelector(".footer p");

    const translations = {
        en: {
            mainTitle: "Farmer Welfare Portal",
            heroHeading: "Empowering Farmers",
            heroDescription: "Explore comprehensive welfare schemes for sustainable farming.",
            schemesTitle: "Government Schemes",
            contactTitle: "Contact Us",
            contactEmail: "Email: xxx@gmail.com",
        },
        hi: {
            mainTitle: "किसान कल्याण पोर्टल",
            heroHeading: "किसानों को सशक्त बनाना",
            heroDescription: "सतत कृषि के लिए व्यापक कल्याण योजनाओं का अन्वेषण करें।",
            schemesTitle: "सरकारी योजनाएँ",
            contactTitle: "संपर्क करें",
            contactEmail: "ईमेल: xxx@gmail.com",
        },
        gu: {
            mainTitle: "ખેડૂત કલ્યાણ પોર્ટલ",
            heroHeading: "ખેડૂતોને સશક્ત બનાવવાં",
            heroDescription: "સ્થિર કૃષિ માટે વ્યાપક કલ્યાણ યોજનાઓ શોધો.",
            schemesTitle: "સરકારી યોજનાઓ",
            contactTitle: "અમારો સંપર્ક કરો",
            contactEmail: "ઈમેલ: xxx@gmail.com",
        }
    };

    // Function to switch languages
    function switchLanguage(lang) {
        const translation = translations[lang];
        mainTitle.textContent = translation.mainTitle;
        heroHeading.textContent = translation.heroHeading;
        heroDescription.textContent = translation.heroDescription;
        schemesTitle.textContent = translation.schemesTitle;
        contactTitle.textContent = translation.contactTitle;
        contactEmail.textContent = translation.contactEmail;
    }

    // Listen for language selection changes
    languageSelect.addEventListener("change", (e) => {
        switchLanguage(e.target.value);
    });

    // Function to display schemes based on the selected state
    function displaySchemes(state) {
        schemeList.innerHTML = ""; // Clear previous schemes
        const selectedSchemes = schemes[state];

        selectedSchemes.forEach(scheme => {
            const schemeItem = document.createElement("div");
            schemeItem.className = "scheme-item";
            schemeItem.dataset.id = scheme.id;
            schemeItem.innerHTML = `
                <h3>${scheme.name}</h3>
                <p>${scheme.description}</p>
                <button class="view-details-btn">View Details</button>
            `;
            schemeList.appendChild(schemeItem);

            // Handle scheme details view button
            schemeItem.querySelector(".view-details-btn").addEventListener("click", () => {
                displaySchemeDetails(scheme);
            });
        });
    }

    // Function to display scheme details
    function displaySchemeDetails(scheme) {
        detailsContent.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <p><strong>Important Details:</strong> ${scheme.documentation}</p>
            <button class="close-btn">Close</button>
        `;
        detailsContent.classList.add("active");

        
        // Close button functionality
        document.querySelector(".close-btn").addEventListener("click", () => {
            detailsContent.classList.remove("active");
        });
    }

    // Voice search functionality
    function startVoiceRecognition() {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US'; // You can change the language code here

        recognition.onstart = function() {
            console.log("Voice recognition started.");
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            searchInput.value = transcript; // Populate the search input with recognized text
            performSearch(transcript); // Trigger the search
        };

        recognition.onerror = function(event) {
            console.error("Voice recognition error", event.error);
        };

        recognition.start();
    }

    voiceSearchButton.addEventListener("click", () => {
        startVoiceRecognition();
    });

    // Function to perform search
    function performSearch(query) {
        const state = stateSelector.value;
        const selectedSchemes = schemes[state];

        // Filter schemes by query
        const filteredSchemes = selectedSchemes.filter(scheme =>
            scheme.name.toLowerCase().includes(query.toLowerCase()) ||
            scheme.description.toLowerCase().includes(query.toLowerCase())
        );

        // Display filtered schemes
        schemeList.innerHTML = "";
        filteredSchemes.forEach(scheme => {
            const schemeItem = document.createElement("div");
            schemeItem.className = "scheme-item";
            schemeItem.innerHTML = `
                <h3>${scheme.name}</h3>
                <p>${scheme.description}</p>
                <button class="view-details-btn">View Details</button>
            `;
            schemeList.appendChild(schemeItem);

            schemeItem.querySelector(".view-details-btn").addEventListener("click", () => {
                displaySchemeDetails(scheme);
            });
        });
    }

    // Listen for state selection changes
    stateSelector.addEventListener("change", (e) => {
        displaySchemes(e.target.value);
    });

    // Search button functionality
    searchButton.addEventListener("click", () => {
        const query = searchInput.value;
        performSearch(query);
    });

    // Initial display of schemes for Gujarat
    displaySchemes("gujarat");
});