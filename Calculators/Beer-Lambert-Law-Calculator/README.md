# Beer-Lambert Law Calculator

## Overview

This project is a web-based calculator that implements the **Beer-Lambert Law**:

\[ A = \varepsilon \cdot c \cdot l \]

It allows users to calculate the absorbance (\( A \)) of a solution based on:

- \( \varepsilon \): Molar Absorptivity (L/mol·cm)
- \( c \): Concentration (mol/L)
- \( l \): Path Length (cm)

## Features

- **Dynamic Formula Display**: The formula is displayed in LaTeX for clarity.
- **Real-Time Results**: Automatically calculates the absorbance when valid inputs are provided.
- **Modern UI**: A responsive design with a stylish dark blue card background.
- **Error Handling**: Ensures all inputs are valid and provides feedback for invalid data.

## Project Structure

```
beer-lambert-law-calculator/
├── index.html       # HTML structure of the calculator
├── style.css        # Styling for the modern UI
├── script.js        # JavaScript functionality for calculations
├── README.md        # Project documentation
└── assets/
    └── background.jpg  # Background image for the UI
```

## Setup and Usage

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd beer-lambert-law-calculator
```

### 3. Open the Application

Open `index.html` in any modern web browser to use the calculator.

## How to Use

1. Enter the values for:
   - Molar Absorptivity (\( \varepsilon \)) in L/mol·cm
   - Concentration (\( c \)) in mol/L
   - Path Length (\( l \)) in cm.
2. Click the **Calculate** button to compute the absorbance (\( A \)).
3. Click the **Clear** button to reset the inputs and results.

### Example Calculation

#### Case:

- \( \varepsilon = 5000 \, \text{L/mol·cm} \)
- \( c = 0.02 \, \text{mol/L} \)
- \( l = 1 \, \text{cm} \)

#### Output:

- Absorbance (\( A \)):
  \[
  A = \varepsilon \cdot c \cdot l = 5000 \cdot 0.02 \cdot 1 = 100
  \]

## Technologies Used

- **HTML**: For the structure of the calculator.
- **CSS**: For styling and creating a modern, responsive UI.
- **JavaScript**: For implementing Beer-Lambert Law functionality.
- **MathJax**: For rendering the formula in LaTeX.

## License

This project is open-source and available under the MIT License.
