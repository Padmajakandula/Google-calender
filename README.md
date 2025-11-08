# Google-calender
**Installed packages:**
React (Vite)
Tailwind CSS
Day.js (date management)
Static JSON Events
 **Features**
=> Displays current month and year in a clean grid layout
=> Navigate between previous and next months
=> Highlights today’s date visually
=> Loads static event data from events.json
=> Shows events on their corresponding dates
=> Opens modal with event details when clicked
=> Color-coded events with overlapping event handling
=> Responsive layout and smooth UX

**Project Structure**
calendar/
├── public/
│   └── events.json
├── src/
│   ├── App.jsx
│   ├── Calendar.jsx
│   ├── EventModal.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

**Installation & Setup**
 Clone the repository
git clone https://github.com/<your-username>/calendar-app.git
cd calendar-app

Install dependencies
npm install
Run the development server
npm run dev


Then visit 👉 http://localhost:5173

 Example Event Data (public/events.json)
[
  {
    "id": 1,
    "title": "Team Standup",
    "date": "2025-11-07",
    "time": "09:00",
    "durationMinutes": 30,
    "color": "#60A5FA"
  },
  {
    "id": 2,
    "title": "Client Call",
    "date": "2025-11-07",
    "time": "09:15",
    "durationMinutes": 45,
    "color": "#F472B6"
  }
]

Key Components
File	Description
App.jsx	Root layout and title wrapper
Calendar.jsx	Month grid, navigation, and event rendering
EventModal.jsx	Popup modal for viewing event details
events.json	Static data source for events

Future Enhancements:
 Add “Create New Event” form
 Store user events in localStorage
 Display overlapping events side-by-side
 Add weekly/day view modes
 Deploy on Netlify or Vercel



