# Integration Calculator

A focused web-based calculator specifically designed for mathematical integration calculations. Built with vanilla JavaScript, HTML, and CSS.

## Features

### 1. Integration Types
- **Single Integration**
  - Definite integral calculation
  - Support for various mathematical functions
  - Numerical integration using trapezoidal rule

- **Double Integration**
  - Two-dimensional integration
  - Rectangle method implementation
  - Support for multivariable functions

- **Triple Integration**
  - Three-dimensional integration
  - Volume calculations
  - Support for complex spatial functions

### 2. Additional Tools
- **Examples Tab**
  - Sample integration problems
  - Step-by-step solutions
  - Common function examples

- **Methods Tab**
  - Integration method explanations
  - Numerical integration techniques
  - Algorithm descriptions

- **Common Integrals**
  - Standard integral formulas
  - Integration rules
  - Quick reference guide

### 3. User Interface
- Clean, modern design
- Tab-based navigation
- Responsive layout
- Card-based components
- Gradient styling
- Mobile-friendly design

### 4. Technical Features
- Input validation
- Error handling
- Keyboard shortcuts (Ctrl+Enter)
- Local storage for calculation history
- Tooltips for user guidance
- Example functions
- Loading states

## Usage

### Integration Calculator
1. Select integration type (Single/Double/Triple)
2. Enter the function using JavaScript math syntax
3. Specify the limits of integration
4. Click "Calculate Integral" or press Ctrl+Enter

Example functions:
```javascript
x * x             // x squared
Math.sin(x)       // sine function
Math.exp(x)       // exponential function
x * y             // double integral
x * y * z         // triple integral
Math.sin(x) * y   // multivariable function
```

## Technical Details

### File Structure
```
integration-calculator/
├── index.html    // Contains HTML, CSS, and JavaScript
└── README.md
```

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Mathematical Functions
The calculator supports various JavaScript Math object functions:
- `Math.sin()`, `Math.cos()`, `Math.tan()`
- `Math.exp()`, `Math.log()`
- `Math.pow()`, `Math.sqrt()`
- Basic arithmetic operations (+, -, *, /)

## Security Features
- Input validation for all numerical entries
- Function validation to prevent harmful code execution
- Sanitized function evaluation
- Error handling for invalid inputs

## Performance Considerations
- Efficient numerical integration algorithms
- Responsive design optimizations
- Minimal dependencies
- Local storage management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add some NewFeature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Uses trapezoidal rule for numerical integration
- Pure JavaScript implementation
- Modern UI design principles

## Future Enhancements
- Additional integration methods
- Graph visualization
- Step-by-step solution display
- More example problems
- Advanced formula editor
- Multiple language support
- Dark theme option
- PDF export of results

## Support
For support, please open an issue in the repository or contact the maintainers.

## Authors
- Saksham Jain
- Contributors welcome

---
Made with ❤️ for calculus enthusiasts