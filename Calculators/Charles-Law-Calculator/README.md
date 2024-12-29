# Charles' Law Calculator

## Overview

This project is a web-based calculator that implements **Charles' Law**:

\[(V_1 / T_1) = (V_2 / T_2)\]

It allows users to calculate:

- Final Volume \( V_2 \)
- Final Temperature \( T_2 \)

The calculator dynamically updates based on user inputs and provides instant results.

## Features

- **Dynamic Formula Display**: The formula for Charles' Law is displayed on the website for reference.
- **Real-Time Results**: Automatically calculates the missing value when valid inputs are provided.
- **Responsive Design**: The calculator works seamlessly across devices.
- **Error Handling**: Guides the user with error messages for invalid or incomplete inputs.

## Project Structure

```
charles-law-calculator/
├── index.html       # HTML structure of the calculator
├── style.css        # Styling for the calculator
├── script.js        # JavaScript functionality for calculations
├── README.md        # Project documentation
└── assets/
    └── background.jpg  # Background image for the calculator
```

## Setup and Usage

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd charles-law-calculator
```

### 3. Open the Application

Open `index.html` in any modern web browser to use the calculator.

## How to Use

1. Enter known values for \( V_1 \), \( T_1 \), and one of \( V_2 \) or \( T_2 \).
2. Click the "Calculate" button to get the result.
3. The missing value will be calculated using the formula:
   \[(V_1 / T_1) = (V_2 / T_2)\]
4. Clear inputs or refresh the page to reset the calculator.

## Example Calculations

### Case 1: Calculate Final Volume (\( V_2 \))

- **Input**:
  - Initial Volume (\( V_1 \)): `2 L`
  - Initial Temperature (\( T_1 \)): `300 K`
  - Final Temperature (\( T_2 \)): `450 K`
- **Output**:
  - \( V_2 = (2 × 450) / 300 = 3 L\)

### Case 2: Calculate Final Temperature (\( T_2 \))

- **Input**:
  - Initial Volume (\( V_1 \)): `2 L`
  - Initial Temperature (\( T_1 \)): `300 K`
  - Final Volume (\( V_2 \)): `4 L`
- **Output**:
  - \( T_2 = (4 × 300) / 2 = 600 K\)

## Technologies Used

- **HTML**: For the calculator structure.
- **CSS**: For styling and responsive design.
- **JavaScript**: For implementing Charles' Law functionality.

## License

This project is open-source and available under the MIT License.
