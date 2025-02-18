# JBU_WebApplication_2025
events planner and organizer

### Step 1: Explain Work Division Simply
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
