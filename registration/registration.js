// import { successTemplate, participantTemplate } from './Templates.js';

// document.addEventListener("DOMContentLoaded", function () {
//     let participantCount = 1;

//     const addButton = document.getElementById("add");
//     addButton.addEventListener("click", function () {
//         participantCount++;
//         const newParticipantHTML = participantTemplate(participantCount);
//         addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
//     });

//     const form = document.querySelector('form');
//     form.addEventListener('submit', submitForm);

//     function submitForm(event) {
//         event.preventDefault();

//         // Calculate total fees
//         const total = totalFees();

//         // Get adult name
//         const adultName = document.getElementById('adult_name').value.trim();

//         // Hide form and show summary
//         const formElement = document.querySelector('form');
//         const summaryElement = document.getElementById('summary');
//         formElement.style.display = 'none';
//         summaryElement.style.display = 'block';

//         // Prepare summary message
//         const summaryInfo = {
//             adultName: adultName,
//             participantCount: participantCount,
//             totalFees: total.toFixed(2)  // Ensure total is formatted to 2 decimal places
//         };

//         const summaryMessage = successTemplate(summaryInfo);
//         summaryElement.innerHTML = summaryMessage;
//     }

//     function totalFees() {
//         let feeElements = document.querySelectorAll("[id^=fee]");
//         let total = 0;
//         feeElements.forEach(function (element) {
//             if (element.value.trim() !== '') {
//                 total += parseFloat(element.value);
//             }
//         });
//         return total;
//     }
// });

// registration.js

import { successTemplate, participantTemplate } from './Templates.js';

document.addEventListener("DOMContentLoaded", function () {
    let participantCount = 1;

    const addButton = document.getElementById("add");
    addButton.addEventListener("click", function () {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', submitForm);

    function submitForm(event) {
        event.preventDefault();

        // Calculate total fees
        const total = totalFees();

        // Get adult name
        const adultName = document.getElementById('adult_name').value.trim();

        // Hide form and show summary
        const formElement = document.querySelector('form');
        const summaryElement = document.getElementById('summary');
        formElement.style.display = 'none';
        summaryElement.style.display = 'block';

        // Prepare summary message
        const summaryInfo = {
            adultName: adultName,
            participantCount: participantCount,
            totalFees: total.toFixed(2)  // Ensure total is formatted to 2 decimal places
        };

        const summaryMessage = successTemplate(summaryInfo);
        summaryElement.innerHTML = summaryMessage;

        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Use 'smooth' for smooth scrolling
    }

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        let total = 0;
        feeElements.forEach(function (element) {
            if (element.value.trim() !== '') {
                total += parseFloat(element.value);
            }
        });
        return total;
    }
});
