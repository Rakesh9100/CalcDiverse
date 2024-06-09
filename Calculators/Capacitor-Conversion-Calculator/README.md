# <p align="center">Capacitor Conversion Calculator</p>

## Description :-

This tool is designed to help users convert capacitor values between different units: picofarads (pF), nanofarads (nF), microfarads (µF), and farads (F). The tool also includes a capacitance conversion chart for quick reference.

## Tech Stacks :-

- HTML
- CSS
- JavaScript

## Features :-

-   **Input Fields**: Enter values in any of the four units (pF, nF, µF, F) to see the equivalent values in the other units.
-   **Auto-Conversion**: As you type a value in one unit, the equivalent values in the other units are automatically calculated and displayed.
-   **Capacitance Conversion Chart**: A table showing common capacitance values and their equivalents in pF, nF, µF, and their corresponding code.

## How to Use :-

1.  **Open the Tool**: Load the HTML file in a web browser.
2.  **Enter a Value**: Input a value in any of the four units (Picofarad, Nanofarad, Microfarad, or Farad).
    -   The corresponding fields will update automatically to show the converted values.
3.  **Refer to the Chart**: Use the capacitance conversion chart to find common values and their equivalents.

## Input Fields :-

-   **Picofarad (pF)**: Enter the value in picofarads.
-   **Nanofarad (nF)**: Enter the value in nanofarads.
-   **Microfarad (µF)**: Enter the value in microfarads.
-   **Farad (F)**: Enter the value in farads.
-   **Code**: Refer to the chart for the code.

## Conversion Logic :-

When you enter a value in one of the input fields, the following conversions occur:

-   **Picofarads (pF)**:
    -   Nanofarads (nF) = Picofarads / 1000
    -   Microfarads (µF) = Picofarads / 1,000,000
    -   Farads (F) = Picofarads / 1,000,000,000,000
-   **Nanofarads (nF)**:
    -   Picofarads (pF) = Nanofarads * 1000
    -   Microfarads (µF) = Nanofarads / 1000
    -   Farads (F) = Nanofarads / 1,000,000
-   **Microfarads (µF)**:
    -   Picofarads (pF) = Microfarads * 1,000,000
    -   Nanofarads (nF) = Microfarads * 1000
    -   Farads (F) = Microfarads / 1000
-   **Farads (F)**:
    -   Picofarads (pF) = Farads * 1,000,000,000,000
    -   Nanofarads (nF) = Farads * 1,000,000,000
    -   Microfarads (µF) = Farads * 1,000,000

## Screenshots :-

![image](https://github.com/Rakesh9100/CalcDiverse/assets/73993775/7a1bad38-68b0-4be3-b5a2-088cc38b7bac)
