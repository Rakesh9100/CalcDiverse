# Moles and Grams Calculator

## Overview

This project is a web-based calculator that allows users to:

- Convert **Moles to Grams**.
- Convert **Grams to Moles**.
- Switch between calculation modes seamlessly.

## Features

- **Dynamic Mode Switching**: Toggle between "Moles to Grams" and "Grams to Moles" calculations.
- **Responsive Design**: User-friendly interface that works on all screen sizes.
- **Real-Time Results**: Instant calculation results based on input values.
- **Background Styling**: Beautiful background image to enhance user experience.

## Project Structure

```
moles-grams-switch-calculator/
├── index.html       # HTML structure of the calculator
├── style.css        # Styling for the calculator
├── script.js        # JavaScript functionality for calculations and toggle
├── README.md        # Project documentation
└── assets/
    └── background.jpg  # Background image for the calculator
```

## Setup and Usage

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Directory**:

   ```bash
   cd moles-grams-switch-calculator
   ```

3. **Open the Application**:
   Open `index.html` in your browser to use the calculator.

## How to Use

1. **Default Mode (Moles to Grams)**:

   - Enter the number of moles and the molar mass.
   - Click the "Calculate" button to get the result.

2. **Switch Mode (Grams to Moles)**:

   - Click the "Switch to Grams to Moles" button.
   - Enter the grams and the molar mass.
   - Click the "Calculate" button to get the result.

3. **Clear Inputs**:
   - Switch modes or refresh the page to clear inputs.

## Example Calculations

### Moles to Grams

- **Input**:
  - Moles: `2`
  - Molar Mass: `18`
- **Output**:
  - `2 moles × 18 g/mol = 36 grams`

### Grams to Moles

- **Input**:
  - Grams: `36`
  - Molar Mass: `18`
- **Output**:
  - `36 grams ÷ 18 g/mol = 2 moles`

## Technologies Used

- **HTML**: For creating the structure.
- **CSS**: For styling the calculator.
- **JavaScript**: For implementing the functionality.

## License

This project is open-source and available under the MIT License.
