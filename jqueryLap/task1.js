$(document).ready(function () {
    // Add button click handler
    $("#submit").click(function (event) {
        event.preventDefault(); // Prevent form submission

        // Fetch input values
        const firstname = $("#firstName-data").val();
        const lastname = $("#lastName-data").val();
        const email = $("#email-data").val();

        // Check if inputs are not empty
        if (firstname && lastname && email) {
            // Create a new row with the input values
            const newRow = `
          <tr>
            <td>${firstname}</td>
            <td>${lastname}</td>
            <td>${email}</td>
          </tr>
        `;
            // Append the new row to the table body
            $("#table-body").append(newRow);

            // Clear the input fields
            $("#firstName-data").val("");
            $("#lastName-data").val("");
            $("#email-data").val("");
        } else {
            alert("Please fill out all fields before adding!");
        }
    });

    // Clear button click handler
    $("#clear").click(function () {
        // Clear input fields
        $("#firstName-data").val("");
        $("#lastName-data").val("");
        $("#email-data").val("");
    });
});