document.getElementById("eForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const eventName = document.getElementById("eName").value.trim();
    const eventType = document.getElementById("eType").value;
    const eventDate = document.getElementById("eDate").value;
    const eventExpenses = document.getElementById("eExpenses").value;
    const eventVenue = document.getElementById("eVenue").value.trim();

    if (eventName === "" || !/[a-zA-Z]/.test(eventName)) {
        alert("Event name is required and must contain alphabet characters.");
        return;
    }

    if (eventDate === "") {
        alert("Event date is required.");
        return;
    }

    const expensesNum = parseFloat(eventExpenses);
    if (eventExpenses === "" || isNaN(expensesNum) || expensesNum <= 0) {
        alert("Please enter valid expenses greater than 0.");
        return;
    }

    if (eventVenue === "" || !/[a-zA-Z]/.test(eventVenue)) {
        alert("Event venue is required and must contain alphabet characters.");
        return;
    }

    const eventData = {
        name: eventName,
        type: eventType,
        date: eventDate,
        expenses: expensesNum,
        venue: eventVenue
    };

    console.log("Event Created:", eventData);

    alert("Event created successfully!");
});
