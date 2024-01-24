# INTERNATIONAL CLOTHING SIZE CALCULATOR

Inter-converts the clothing sizes for men/women from one country to another. Also displays the common international size, and also the exact measurements for each size.

## How It Works

- Select men/women from the toggle button.
- Enter the size of the clothing in your known region.
- Select your known region and the unknown region to which you want to convert to from the drop-downs.
- Click the `⭐️ Convert ⭐️` button to convert your clothing size.

## Implementation

- Uses a hand-crafted json file `size_mapping.json` which contains all the conversions for clothing sizes for both men and women from various sources.
- One can find the logic for the conversions and for validity checking of input size for each clothing size in the `script.js` file.

## Techstack Used
- HTML for rendering the front-end.
- CSS for Styling.
- `size_mapping.json` containing the dataset of our calculator
- Vanilla JavaScript (JS) for rendering the logic.
    - `script.js` manages the json data extraction and also the conversion logic.
    - `domManager.js` as it's name suggests, is responsible for the management of DOM, displaying results, updating select options, etc.

## Screenshots

<img width="976" alt="Screenshot 2024-01-16 at 3 12 53 PM" src="https://github.com/SoumyadevSaha/ComputerVision_AI_Mouse/assets/86418216/0bc1db33-f694-4174-96b2-3dbe69e3d43c">
<img width="892" alt="Screenshot 2024-01-16 at 3 14 53 PM" src="https://github.com/SoumyadevSaha/ComputerVision_AI_Mouse/assets/86418216/46794594-980d-48ad-9ea4-589ec13b45f5">
