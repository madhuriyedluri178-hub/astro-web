// Data for the team members' detailed profiles
const teamData = {
    ceo: {
        name: "N.Vijaya Lakshmi",
        title: "Chief Executive Officer (CEO)",
        role: "Team Leader",
        bio: "As the visionary founder, Ava guides the company's strategic direction, corporate culture, and long-term goals. She is passionate about sustainable technology and future-proofing our business model.",
        image: "vl.jpg", // REPLACE with the actual image path
        details: [
            "Focus: Corporate Strategy, Investor Relations, Vision",
            "Quote:“Our success is measured not just by profit, but by the positive impact we leave on the world.”*"
        ]
    },
    cto: {
        name: "Madhuri Yedluri",
        title: "Chief Technology Officer (CTO)",
        role: "Technical Leader",
        bio: "Ben oversees all technology development and infrastructure, ensuring our products are built on a secure, scalable, and cutting-edge foundation.",
        image: "madh.jpg", // REPLACE with the actual image path
        details: [
            "Focus: R&D, Platform Architecture, IT Security",
            "Quote:“Technology should simplify, not complicate. We build with the user in mind.”"
        ]
    },
    cpo: {
        name: "M.VijayaLakshmi",
        title: "Chief Product Officer (CPO)",
        role: "Communication Leader",
        bio: "Chloe is the bridge between our customers, our technology, and our business goals, driving the product strategy and ensuring a seamless user experience.",   
        image: "vv1.jpg", // REPLACE with the actual image path
        details:  [ 
            "Focus:Product Roadmap, User Experience (UX/UI), Market Analysis",
            "Quote:“The best products solve problems people didn't know they had.”*"
        ]
    },
    cmo: {
        name: "UdayaLakshmi",
        title: "Chief Marketing Officer (CMO)",
        role: "Social Leader",
        bio: "Marcus leads our brand voice, social engagement, and customer acquisition strategies, crafting campaigns that resonate authentically with our target audience.",
        image: "ul.jpg", // REPLACE with the actual image path
        details: [
            "Focus:Brand Management, Digital Marketing, Public Relations",
            "Quote:“Great marketing tells a story; we're here to write a bestseller.”*"
        ]
    },
    cro: {
        name: "Vennela",
        title: "Chief Research Officer (CRO)",
        role: "Research Leader",
        bio: "Dr. Reed directs our innovation lab, focusing on proprietary research and data analysis to keep the company ahead of industry trends and drive intellectual property development.",
        image: "vn.jpg", // REPLACE with the actual image path
        details: [
            "Focus:Scientific Research, Data Analytics, Future Innovations",
            "Quote:“Research is the investment we make in tomorrow's competitive edge.”*"
        ]
    }
};

const modal = document.getElementById("profileModal");
const modalDetails = document.getElementById("modal-details");

// Function to open the modal and load member details
function openModal(memberId) {
    const member = teamData[memberId];
    
    // Check if member data exists
    if (!member) {
        console.error("Member data not found for:", memberId);
        return;
    }

    // Construct the HTML for the detailed profile
    let detailsHTML = `
        <img src="${member.image}" alt="Profile image of ${member.name}">
        <h2>${member.name}</h2>
        <p class="role">${member.role}</p>
        <p class="title" style="color: #007bff; font-size: 1.2em;">**${member.title}**</p>
        <p style="margin-top: 20px;">${member.bio}</p>
        <hr>
        <h4>Key Contributions:</h4>
        <ul>
            ${member.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
    `;

    // Inject the HTML into the modal and display it
    modalDetails.innerHTML = detailsHTML;
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}