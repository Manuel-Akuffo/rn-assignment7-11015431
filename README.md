## README

# E-Commerce App

This e-commerce application is built using React Native for the frontend and integrates with a backend API for product data. The app supports product browsing, detailed product views, and cart functionality.

## Features

- **Product Browsing:** Users can browse products in a grid format.
- **Product Details:** Users can view detailed information about each product.
- **Cart Management:** Users can add products to the cart and view their cart.

## Design Choices

### Frontend

- **React Native:** Chosen for its ability to build cross-platform mobile applications using JavaScript and React.
- **Navigation:** React Navigation is used for screen navigation, providing stack and drawer navigators for a seamless user experience.
- **State Management:** Context API is used to manage the cart state, providing a simple and efficient way to pass the cart data throughout the app.

### Backend

- **API Integration:** The app fetches product data from a public API (`https://fakestoreapi.com/products`). This approach allows for dynamic data retrieval and easy updates without modifying the app code.

## Implementation Details

### HomeScreen Component

The `HomeScreen` component fetches the list of products from the API and displays them in a grid using `FlatList`. The component uses the `useEffect` hook to fetch the data when the component mounts.

### Cart Context

The `CartContext` provides a global state for the cart, allowing components to access and modify the cart data.

### Navigation Setup

The app uses React Navigation to handle screen transitions. The navigation structure is defined in `App.js`.

## Data Storage

Currently, the app uses local state management for storing cart data. This is suitable for small applications or prototypes. For a production application, consider using a more robust solution like Redux or integrating with a backend database to persist user data across sessions.

### Future Improvements

- **Persistent Storage:** Implement persistent storage for cart data using AsyncStorage or integrating with a backend database.
- **Authentication:** Add user authentication to save user preferences and cart items across different devices.
- **Enhanced UI/UX:** Improve the user interface and user experience with additional features like filters, sorting, and search functionality.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository.
2. Install the dependencies with `npm install` or `yarn install`.
3. Start the development server with `expo start`.
4. Use the Expo app on your mobile device to scan the QR code and view the app.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License.
