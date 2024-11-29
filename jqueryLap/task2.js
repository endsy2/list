$(document).ready(function () {
    // Fetch shoe data from the server
    $.ajax({
        url: "http://localhost:3000/shoes", // Endpoint for fetching shoe data
        type: "GET",
        success: function (response) {
            console.log("Shoe data fetched:", response);

            response.forEach(function (shoe) {
                const row = `
            <tr>
              <td>${shoe.id}</td>
              <td><img src="${shoe.pic}" alt="${shoe.name}" style="width: 50px; height: auto;" /></td>
              <td>${shoe.code}</td>
              <td>${shoe.name}</td>
              <td>$${shoe.price.toFixed(2)}</td>
              <td>${shoe.quantity}</td>
            </tr>`;
                $("tbody").append(row);
            });
        },
        error: function (error) {
            console.error("Error fetching shoe data:", error);
        },
    });
});
