# User Information Form

This is a simple React application that allows users to input their name, email, and age through a form. The submitted data is displayed in a list below the form. The application demonstrates the use of React state management, event handling, and conditional rendering.

## Features

- Users can fill out a form with their **name**, **email**, and **age**.
- Submitted data is displayed as a list of user information.
- Responsive design with a clean and user-friendly interface.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **JavaScript (ES6)**: For implementing logic and state management.

## Topics Covered in React.js

React Components
JSX (JavaScript XML)
State Management with useState
Event Handling
Conditional Rendering
Forms and Input Handling
Lists and Keys

## Getting Started

### Prerequisites

To run this application locally, you need:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Sagar610/Personal-Info-React-CURD.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Folder Structure

```
src/
├── App.css      # Styles for the application
├── App.js       # Main component with form and user list logic
├── index.js     # Entry point of the React app
```

## How It Works

1. **Form Input**:
   - Users can enter their name, email, and age in the form fields.
   - Form data is managed using React's `useState` hook.

2. **Form Submission**:
   - On submission, the data is added to a user list if all fields are filled out.
   - The form fields are reset after successful submission.

3. **User List**:
   - Submitted data is displayed as a list of users below the form.
   - If no users are added, a default message is displayed.

## Future Enhancements

- Add functionality to edit or delete user entries.
- Integrate with a backend API to store data persistently.
- Add form validation for email and age fields.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

- **sagar gondaliya** - [Your GitHub Profile](https://github.com/sagar610)

