# <p align="center">Clothing Size Calculator</p>

## Description :-

Inter-converts the clothing sizes for men/women from one country to another. Also displays the common international size, and also the exact measurements for each size.

## Tech Stacks :-

- HTML for rendering the front-end.
- CSS for Styling.
- `size_mapping.json` containing the dataset of our calculator
- Vanilla JavaScript (JS) for rendering the logic.
    - `script.js` manages the json data extraction and also the conversion logic.
    - `domManager.js` as it's name suggests, is responsible for the management of DOM, displaying results, updating select options, etc.

## How It Works :-

- Select men/women from the toggle button.
- Enter the size of the clothing in your known region.
- Select your known region and the unknown region to which you want to convert to from the drop-downs.
- Click the `⭐️ Convert ⭐️` button to convert your clothing size.

## Implementation :-

- Uses a hand-crafted json file `size_mapping.json` which contains all the conversions for clothing sizes for both men and women from various sources.
- One can find the logic for the conversions and for validity checking of input size for each clothing size in the `script.js` file.

## Screenshots :-

![image](https://github.com/Rakesh9100/CalcDiverse/assets/73993775/046aac09-0136-440e-9c3d-78331c9c66a0)
