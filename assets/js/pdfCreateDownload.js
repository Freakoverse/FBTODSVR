document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the Preview Info button
    document.getElementById('previewInfo').addEventListener('click', function () {
        previewInfo();
    });
});

function previewInfo() {
    // Get user input values
    var name = document.getElementById('userInfoName').querySelector('input').value;
    var discord = document.getElementById('userInfoDiscord').querySelector('input').value;
    var email = document.getElementById('userInfoEmail').querySelector('input').value;

    // Get trackers input values
    var normalTrackers = parseInt(document.getElementById('NormalTracker').querySelector('input').value);
    var trackersWithExtension = parseInt(document.getElementById('TrackerWithExtension').querySelector('input').value);

    // Get straps input values
    var strapSizeInputs = document.querySelectorAll('.BodyTrackersStrap input');
    var strapSizes = Array.from(strapSizeInputs).map(input => input.value);

    // Get user note
    var userNote = document.getElementById('UserNote').querySelector('textarea').value;

    // Get shipping details
    var country = document.getElementById('ShippingCountry').querySelector('input').value;
    var city = document.getElementById('ShippingCity').querySelector('input').value;
    var district = document.getElementById('ShippingDistrict').querySelector('input').value;
    var street = document.getElementById('ShippingStreet').querySelector('input').value;
    var building = document.getElementById('ShippingBuilding').querySelector('input').value;
    var phone = document.getElementById('ShippingPhone').querySelector('input').value;

    // Calculate total price
    var totalPrice = calculateTotalPrice(normalTrackers, trackersWithExtension, strapSizes);

    // Build the preview content
    var previewContent = `
        <h2>User Info</h2>
        <p>Name: ${name}</p>
        <p>Discord: ${discord}</p>
        <p>Email: ${email}</p>
        <h2>Trackers</h2>
        <p>Normal Trackers: ${normalTrackers}</p>
        <p>Trackers with Extension: ${trackersWithExtension}</p>
        <h2>Straps</h2>
        ${strapSizes.map((size, index) => `<p>Strap ${index + 1} Size: ${size} CM</p>`).join('')}
        <h2>Note</h2>
        <p>${userNote}</p>
        <h2>Shipping Details</h2>
        <p>Country: ${country}</p>
        <p>City: ${city}</p>
        <p>District: ${district}</p>
        <p>Street: ${street}</p>
        <p>Building: ${building}</p>
        <p>Contact/Phone number: ${phone}</p>
        <h2>Total Price (Shipping Cost Excluded)</h2>
        <p style="font-weight:bold;">$${totalPrice}</p>
    `;

    // Show the modal
    document.getElementById('ModalMain').style.display = 'flex';

    // Display the preview content in the modal
    document.getElementById('previewContent').innerHTML = previewContent;
}

function calculateTotalPrice(normalTrackers, trackersWithExtension, strapSizes) {
    // Calculate the total price based on your criteria
    var priceNormalTrackers = normalTrackers * 35;
    var priceExtensionTrackers = trackersWithExtension * 45;

    // Calculate the maximum number of straps allowed without extra cost
    var maxStrapsWithoutCost = normalTrackers + trackersWithExtension * 2;

    // Calculate the number of excess straps
    var excessStraps = Math.max(strapSizes.length - maxStrapsWithoutCost, 0);

    // Calculate the cost of excess straps
    var priceStraps = excessStraps > 0 ? excessStraps * 10 : 0; // Assuming $10 per strap

    // Calculate the total price including straps
    var totalPrice = priceNormalTrackers + priceExtensionTrackers + priceStraps;

    return totalPrice;
}




function closeModal() {
    // Hide the modal
    document.getElementById('ModalMain').style.display = 'none';
}

function downloadPreview() {
    // Open a new window with the preview content
    var previewWindow = window.open('', '_blank');
    
    // Get the preview div content
    var previewContent = document.getElementById("previewContent").innerHTML;

    // Write the content to the new window
    previewWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Preview</title>
            <style>
                body { color: black; } /* Set font color to black */
            </style>
        </head>
        <body style="background:#232323;color:grey;padding:25px;display:flex;flex-direction:column;width:100%;height:100%;justify-content:center;align-items:center;">
            <div style="padding:25px;width:100%;max-width:500px;border-radius:12px;background:rgba(255,255,255,0.1);box-shadow: 0 0 8px 0 rgb(0,0,0,0.1);">${previewContent}</div>
        </body>
        </html>
    `);

    // Close the document writing in the new window
    previewWindow.document.close();

    // Allow some time for the content to load in the new window
    setTimeout(function () {
        // Trigger the print and save as PDF
        previewWindow.print();
        previewWindow.onafterprint = function () {
            // Close the new window after printing
            previewWindow.close();
        };
    }, 1000); // Adjust the delay if necessary

    // Simulate a click on the print button to trigger automatic download
    setTimeout(function () {
        previewWindow.document.body.innerHTML += '<script>window.print();<\/script>';
    }, 2000); // Adjust the delay if necessary
}
