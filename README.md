
# Todo List App

A simple, responsive Todo List application built with React that helps you organize daily tasks, track completion, and manage your to-do items in one place.

**Live Demo:** [todo-list-avin.vercel.app](https://todo-list-avin.vercel.app/)

## Features

- **Add Tasks:** Quickly add new tasks to your list.
- **Edit Tasks:** Update existing task details.
- **Delete Tasks:** Remove tasks you no longer need.
- **Mark as Completed:** Toggle tasks between completed and pending.
- **Persistent Storage:** Tasks are saved in browser Local Storage and remain available after refreshing the page.
- **Reusable Components:** Separate components for the task form and individual tasks.
- **Context API:** Share task-management functions across components without passing props through every level.
- **Responsive UI:** Styled with Tailwind CSS for a clean user interface.
- **Fast Development:** Powered by Vite for a fast development and build workflow.

## Tech Stack

- **Frontend:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **State Management:** React Hooks (`useState`, `useEffect`) and Context API
- **Storage:** Browser Local Storage
- **Deployment:** Vercel

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd TodoList
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually:

   ```text
   http://localhost:5173
   ```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs Oxlint on the project |

## Project Structure

```text
TodoList/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Form.jsx
│   │   └── Task.jsx
│   ├── TodoContext/
│   │   └── Todo.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## How It Works

1. Users add tasks through the task form.
2. React state manages the current list of tasks.
3. The Context API makes task operations available to child components.
4. Users can edit, delete, or mark tasks as completed.
5. An effect saves changes to Local Storage so tasks persist across page refreshes.

## Data Storage

This project uses browser Local Storage to persist tasks on the current browser and device.

- No backend database is required.
- Tasks are not automatically synchronized across devices or browsers.
- Clearing the browser's site data may remove saved tasks.

## Deployment

The application is deployed on Vercel.

**Visit the application:** https://todo-list-avin.vercel.app/

To deploy your own version, import the repository into Vercel and configure the project with the following settings:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## Future Improvements

- Add task filters for all, pending, and completed tasks.
- Add due dates and task priorities.
- Add search functionality.
- Add drag-and-drop task organization.
- Add authentication and cloud-based task synchronization.

## Author

**Mohit Kumar**

Computer Science and Engineering Student

- GitHub: [@mohitk0101](https://github.com/mohitk0101)
- Live Project: [Todo List App](https://todo-list-avin.vercel.app/)

---

If you find this project useful, consider giving the repository a ⭐ on GitHub.
