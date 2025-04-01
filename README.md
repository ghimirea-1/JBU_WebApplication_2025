https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor


# JBU_WebApplication_2025
events planner and organizer

### **Step 1: Explain Work Division Simply**  
Tell Miriam:  
- "I'll handle the **backend** (database, system logic, and Club Events module)."  
- "You handle the **frontend** (UI design, Party Events module, and documentation)."  
- "We’ll both connect the frontend and backend, test, and refine everything together."  

### **Step 2: Work Plan for Each Preview Day**  

#### **Preview 1 – February 18 (Basic Setup & UI)**  
✅ Set up project structure (folder organization, frameworks, tools)  
✅ Create a simple UI layout (buttons, forms, navigation)  
✅ Plan database structure and event details  

If your project is built using **HTML, CSS, and JavaScript**, it will look like a structured and interactive event planning dashboard. Here's a basic breakdown of how it could be designed:

---

### **📌 Project Layout in HTML/CSS/JS**
#### **1️⃣ Home Page (Dashboard)**
- A **navigation bar** with links to different event categories (Party Events, Club Events, Settings).
- A **welcome section** introducing the event manager.
- Buttons to create, edit, or view events.

#### **2️⃣ Event Creation Page (For Both Party & Club Events)**
- **Form with input fields**:
  - Event Name
  - Event Type (Dropdown: Birthday, Farewell, Club Event, etc.)
  - Date Picker
  - Expense & Funding Fields
  - Venue Selection
  - Duration Slider
- **Submit Button** to save event details (can be stored in localStorage or a database).

#### **3️⃣ Event List Page**
- A **table or card-based layout** displaying upcoming and past events.
- **Filters** to sort by date, type, or budget.
- **Edit/Delete options** for each event.

#### **4️⃣ Event Details Page**
- Clicking on an event opens a detailed **view with all event information**.
- Option to **edit details** or **mark the event as completed**.

#### **5️⃣ Responsiveness & Styling**
- Use **CSS for styling** (modern, clean UI with good colors and typography).
- Make it **mobile-friendly** using flexbox or grid.
- Add **animations** (hover effects, transitions for a smooth UI).

#### **6️⃣ JavaScript for Interactivity**
- **Form validation** before submission.
- **Dynamic UI updates** when adding/editing events.
- **Storage** (localStorage, Firebase, or a simple database).
- **Event countdown/timer feature** for upcoming events.

---

### **📌 Example Code Snippet (Basic Event Form)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Manager</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Create an Event</h2>
    <form id="eventForm">
        <label>Event Name:</label>
        <input type="text" id="eventName" required>

        <label>Event Type:</label>
        <select id="eventType">
            <option value="party">Party</option>
            <option value="club">Club Event</option>
        </select>

        <label>Date:</label>
        <input type="date" id="eventDate" required>

        <label>Expenses:</label>
        <input type="number" id="eventExpenses" required>

        <label>Venue:</label>
        <input type="text" id="eventVenue" required>

        <button type="submit">Create Event</button>
    </form>

    <script src="script.js"></script>
</body>
</html>
```

---


#### **Preview 2 – March 18 (Core Features Working)**  
✅ Backend should handle event creation, storage, and retrieval  
✅ Frontend should display events and let users add details  
✅ Connect frontend and backend for basic functionality  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Organizer</title>
    <link rel="stylesheet" href="style1.css">
</head>
<body>
    <div>
        <h2>Event Organizer</h2>
        <form id="eForm">
            <label for="eName">Event Name:</label>
            <input type="text" id="eName" required>

            <label for="eType">Event Type:</label>
            <select id="eType">
                <option value="club">Club Event</option>
                <option value="other event">Other Event</option>
            </select>

            <label for="eDate">Date:</label>
            <input type="date" id="eDate" required>

            <label for="eTime">Time:</label>
            <input type="time" id="eTime" required>

            <label for="eExpenses">Expenses:</label>
            <input type="number" id="eExpenses" required>

            <label for="eLocation">Location:</label>
            <input type="text" id="eLocation" required>

            <label for="eDescription">Event Description:</label>
            <textarea id="eDescription" rows="4" placeholder="Describe your event..."></textarea>

            <label for="eOrganizer">Organizer Name:</label>
            <input type="text" id="eOrganizer" required>

            <label for="eGuestList">Upload Guest List (Optional):</label>
            <input type="file" id="eGuestList" accept=".csv">

            <button type="submit">Create Event</button>
        </form>
    </div>

    <div id="eventSummary" style="display:none;">
        <h3>Event Summary</h3>
        <p><strong>Event Name:</strong> <span id="summaryEName"></span></p>
        <p><strong>Event Type:</strong> <span id="summaryEType"></span></p>
        <p><strong>Date:</strong> <span id="summaryEDate"></span></p>
        <p><strong>Time:</strong> <span id="summaryETime"></span></p>
        <p><strong>Expenses:</strong> <span id="summaryEExpenses"></span></p>
        <p><strong>Venue:</strong> <span id="summaryEVenue"></span></p>
        <p><strong>Description:</strong> <span id="summaryEDescription"></span></p>
        <p><strong>Organizer:</strong> <span id="summaryEOrganizer"></span></p>
        <p><strong>Guest List:</strong> <span id="summaryEGuestList"></span></p>
    </div>

    <script src="json.js"></script>
    <script>
        document.getElementById('eForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form from submitting

            // Get values from form inputs
            const eventName = document.getElementById('eName').value;
            const eventType = document.getElementById('eType').value;
            const eventDate = document.getElementById('eDate').value;
            const eventTime = document.getElementById('eTime').value;
            const eventExpenses = document.getElementById('eExpenses').value;
            const eventVenue = document.getElementById('eVenue').value;
            const eventDescription = document.getElementById('eDescription').value;
            const eventOrganizer = document.getElementById('eOrganizer').value;
            const guestListFile = document.getElementById('eGuestList').files[0];

            // Optional: Process guest list file (if needed)
            let guestList = guestListFile ? guestListFile.name : "No guest list uploaded";

            // Display event summary
            document.getElementById('summaryEName').textContent = eventName;
            document.getElementById('summaryEType').textContent = eventType;
            document.getElementById('summaryEDate').textContent = eventDate;
            document.getElementById('summaryETime').textContent = eventTime;
            document.getElementById('summaryEExpenses').textContent = `$${eventExpenses}`;
            document.getElementById('summaryEVenue').textContent = eventVenue;
            document.getElementById('summaryEDescription').textContent = eventDescription;
            document.getElementById('summaryEOrganizer').textContent = eventOrganizer;
            document.getElementById('summaryEGuestList').textContent = guestList;

            // Hide the form and show the summary
            document.getElementById('eForm').style.display = 'none';
            document.getElementById('eventSummary').style.display = 'block';
        });
    </script>
</body>
</html>


#### **Preview 3 – April 29 (Final Version Ready)**  
✅ Complete debugging, improve UI, and optimize features  
✅ Add extra features (if time allows)  
✅ Final testing and polish everything for presentation  

### **Final Presentation – May 5 (Backup Time)**  
- Use this as a buffer if anything needs last-minute fixes  

### **Step 3: Divide the Work Each Week**  
- Work together on setup in **Week 1**  
- Assign specific coding tasks weekly, so neither of you gets overloaded  
- Hold quick check-ins (e.g., twice a week) to stay on track

Addition:
- length of till when the event is
- send invitaiton
