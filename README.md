# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Todo App

A simple React + Vite + Tailwind CSS Todo application to manage your daily tasks.

## Features

- Add, update, delete, and toggle todos
- Persistent storage using localStorage
- Responsive and modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd todo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoItems.jsx
│   │   └── index.js
│   ├── context/
│   │   ├── todoContext.js
│   │   └── index.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── ...
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

- Edit styles in `App.css` or Tailwind config files.
- Add new features or improve UI as needed.

## License

MIT
