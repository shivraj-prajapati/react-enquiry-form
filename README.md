# React Enquiry Form

This project is a simple enquiry form built using React and Bootstrap. The form allows users to enter details such as name, email, phone, and message. Users can submit new entries, edit existing entries, and delete entries as needed. Form validation is implemented to check if the email or phone number already exists in the list. Notifications for successful or failed actions are handled with `react-toastify`.

## Features
- Add new enquiry with details (name, email, phone, message).
- Edit or delete existing entries in a table.
- Prevent duplicate entries based on email or phone number.
- Real-time notifications with `react-toastify`.

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/shivraj-prajapati/react-enquiry-form.git
   ```

2. Navigate to the project directory
   ```bash
   cd react-enquiry-form
   ```

3. Install dependencies
   ```bash
   npm install
   ```

## Usage

1. Start the development server
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Code Explanation

### Key Components
1. **Form Input Fields**:
   - Uses controlled components for form inputs to manage and track form data.

2. **User Data Table**:
   - Dynamically displays a table with entries and provides Edit and Delete actions for each entry.

3. **Notifications**:
   - `react-toastify` is used for real-time notifications to enhance user feedback on actions.

### State Variables

- `formData`: Stores the current form values including `name`, `email`, `phone`, `message`, and `index`.
- `userDatas`: Array storing all enquiry records.

### Key Functions

- **getvalue**: Handles input changes and updates the `formData` state.
- **handleSubmit**: Validates data, prevents duplicate entries, and adds/updates entries in `userDatas`.
- **deleteRow**: Deletes an entry from the table.
- **editRow**: Populates the form with data from a selected entry to allow editing.

## Technologies Used
- React
- Bootstrap
- React Bootstrap Components
- React Toastify

## Author
**Shivraj Prajapati**

Feel free to contribute to this project or report issues if any.
```
