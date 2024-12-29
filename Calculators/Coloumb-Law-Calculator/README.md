# Coulomb's Law Calculator

## Overview

This project is a web-based calculator that implements **Coulomb's Law**:

\[ F = k \frac{q_1 \cdot q_2}{r^2} \]

It allows users to calculate the force between two charges (\( F \)) based on:

- Charge 1 (\( q_1 \))
- Charge 2 (\( q_2 \))
- Distance between the charges (\( r \))

The value of \( k \) (Coulomb's constant) is also displayed:
\[ k = 8.987 \times 10^9 \, \text{N·m}^2/\text{C}^2 \]

## Features

- **Dynamic Formula Display**: The formula and constant are displayed in LaTeX for clarity.
- **Real-Time Results**: Automatically calculates the force when valid inputs are provided.
- **Modern UI**: A responsive design with a stylish dark blue card background.
- **Error Handling**: Ensures inputs are valid and displays appropriate error messages.

## Project Structure

```
coulombs-law-calculator/
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
cd coulombs-law-calculator
```

### 3. Open the Application

Open `index.html` in any modern web browser to use the calculator.

## How to Use

1. Enter the values for:
   - Charge 1 (\( q_1 \)) in Coulombs (C)
   - Charge 2 (\( q_2 \)) in Coulombs (C)
   - Distance (\( r \)) between charges in meters (m).
2. Click the **Calculate** button to compute the force (\( F \)).
3. Click the **Clear** button to reset the inputs and results.

### Example Calculation

#### Case:

- \( q_1 = 2 \, \text{C} \)
- \( q_2 = 3 \, \text{C} \)
- \( r = 0.5 \, \text{m} \)

#### Output:

- Force (\( F \)):
  \[
  F = \frac{k \cdot q_1 \cdot q_2}{r^2} = \frac{8.987 \times 10^9 \cdot 2 \cdot 3}{0.5^2} = 2.157 \times 10^{11} \, \text{N}
  \]

## Technologies Used

- **HTML**: For the structure of the calculator.
- **CSS**: For styling and creating a modern, responsive UI.
- **JavaScript**: For implementing Coulomb's Law functionality.
- **MathJax**: For rendering the formula in LaTeX.

## License

This project is open-source and available under the MIT License.
