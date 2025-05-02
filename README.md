# E-Commerce Frontend Using React.js and Tailwind CSS

This project is a fully responsive e-commerce frontend built with React.js and styled using Tailwind CSS. It features a dynamic home page, product listing, cart management, and more, providing a smooth shopping experience.

## Features

### 1. Home Page Design (Responsive with Tailwind CSS)

- Attractive, responsive home page inspired by the [Mellow Theme](https://themewagon.github.io/mellow/)
  - **Header**: Includes logo, navigation links, and a cart icon.
  - **Hero Section**: A large, visually appealing section to introduce the site.
  - **Featured Products Section**: Displays selected products in a grid format.
  - **Footer**: Basic footer with links and information.

### 2. Product Listing Page

- Products are fetched from a public dummy API (e.g., [FakeStoreAPI](https://fakestoreapi.com/products)).
- **Product Cards**: Display each product in a responsive grid with:
  - Product Image
  - Title
  - Price
  - "Add to Cart" button

### 3. Mini Cart Component

- When products are added to the cart, a **mini cart dropdown** is shown when the cart icon is clicked.
  - **Mini Cart** displays:
    - List of added products with image, title, quantity, and price.
    - Subtotal of the cart.
    - **View Cart** button to navigate to the full cart page.
    - **Checkout** button (disabled until there are products in the cart).

### 4. Full Cart Page

- Accessible via the "View Cart" button from the mini cart.
- Displays:
  - Product details (image, title, price)
  - Quantity adjusters (+, - buttons)
  - Option to remove items from the cart
  - Order summary (subtotal, shipping, total)
  - **Proceed to Checkout** button.

## Technical Requirements

- **React.js**: App Router preferred for navigation.
- **Tailwind CSS**: For styling and ensuring responsive design.
- **State Management**: Use React hooks (Context API or Zustand recommended).
- **API Integration**: Fetch products from an external API (`https://fakestoreapi.com/products`).
- **Responsive Design**: The app should be fully responsive and optimized for all screen sizes.
- **Error Handling**: Proper error handling for API requests.
- **Loading States**: Show loading indicators during data fetch operations.
- **Clean Code**: Follow best practices for writing clean and maintainable code.

## Bonus Features (Optional)

- **Product Search Functionality**: Allow users to search for products by name.
- **Product Filtering/Sorting**: Implement filters to sort products by categories, price, etc.
- **LocalStorage Persistence**: Persist the cart data to `localStorage` so it's available even after refreshing the page.
- **Animations/Transitions**: Add smooth animations and transitions for a better user experience.
- **Dark Mode Toggle**: Implement a dark mode toggle feature for better accessibility and user preference.

## Setup & Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/kethakishore143/arizon-ecommerce-apk.git
   ```

## Navigate to the project directory

cd arizon-ecommerce-apk

## Install the required dependencies:

npm install

## Run the app in development mode:

npm start

## The app will be available at http://localhost:3000/arizon-ecommerce-apk

## Technologies Used

React.js: For building the user interface.

Tailwind CSS: For responsive, utility-first CSS styling.

Context API For state management.

Axios / Fetch API: For making HTTP requests to fetch product data.
