# SocialHub App Documentation

## Overview
SocialHub is a web application that allows users to create accounts, log in, view profiles, and interact with posts on the home page. Users can like and comment on posts shared by others.

## Features
1. **Authentication**: Includes login and signup pages.
2. **User Profile**: Displays user-specific information.
3. **Home Page**: Contains posts where users can add likes and comments.

## Technologies Used
- **React Router**: For routing between different pages.
- **SCSS**: For styling the components.
- **Context API**: For managing global state.
- **Private Routes**: For securing authenticated pages.
- **Material UI**: For pre-designed UI components.

---

## Project Structure
```
/src
  |-- components
      |-- Auth
          |-- Login.jsx
          |-- Signup.jsx
      |-- Home
          |-- Posts.jsx
          |-- PostItem.jsx
      |-- Profile
          |-- UserProfile.jsx
  |-- contexts
      |-- AuthContext.jsx
  |-- routes
      |-- PrivateRoute.jsx
  |-- styles
      |-- main.scss
  |-- App.jsx
  |-- index.js
```

---

## Pages

### Login Page
- **Route**: `/login`
- **Description**: Allows users to log in to their accounts.
- **Features**:
  - Input fields for email and password.
  - Login button.

### Signup Page
- **Route**: `/signup`
- **Description**: Allows new users to register.
- **Features**:
  - Input fields for name, email, password, and confirm password.
  - Signup button.

### Home Page
- **Route**: `/`
- **Description**: Displays all posts.
- **Features**:
  - Users can like and comment on posts.
  - Posts are fetched from a mock backend or API.

### User Profile
- **Route**: `/profile`
- **Description**: Displays user-specific information like name, email, and posts created by the user.

---

## Global State Management
### AuthContext
Manages user authentication and provides:
- `isAuthenticated`: Boolean indicating if the user is logged in.
- `login()`: Function to log in a user.
- `logout()`: Function to log out a user.
- `user`: Object containing user details.

```





---

## Setting Up the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd socialhub
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

---

## Future Enhancements
1. Add pagination for posts on the home page.
2. Enable editing and deleting posts.
3. Implement user avatars.
4. Integrate with a real backend using Node.js and MongoDB.

---

Project Live : https://social-media-app-theta-ashy.vercel.app/

