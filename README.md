# Fast React Pizza

A modern pizza ordering web application built with React, Redux Toolkit, and React Router, styled using Tailwind CSS.

## Demo

https://fast-react-pizza-pied-chi.vercel.app/

## Features

- Browse a menu of delicious pizzas
- Add, update, and remove pizzas from your cart
- Place orders with priority option
- Search for existing orders by order number
- Responsive and accessible UI

## Tech Stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/fast-react-pizza.git
cd fast-react-pizza
```

2. Install dependencies:

```
npm install
```

Running the App
Start the development server:

```
npm run dev
```

Open http://localhost:5173 in your browser.

Building for Production

```
npm run build
```

Preview Production Build

```
npm run preview
```

Project Structure

```
src/
  features/
    cart/         # Cart logic and components
    menu/         # Menu logic and components
    order/        # Order logic and components
    user/         # User logic and components
  services/       # API service modules
  ui/             # Shared UI components
  utils/          # Utility functions
  [store.js](http://_vscodecontentref_/0)        # Redux store setup
  [App.jsx](http://_vscodecontentref_/1)         # Main app and routing
  [main.jsx](http://_vscodecontentref_/2)        # Entry point
```
