# Caesar Cipher Web App

A modern, interactive web application for encoding and decoding messages using the classic Caesar cipher and its enhanced rolling cipher extension.


## 🌟 Features

### Basic Caesar Cipher
- **Fixed Shift Encryption**: Each letter in the message is shifted by the same key value
- **Key Range**: Supports shift keys from 1-25
- **Bidirectional**: Both encoding and decoding capabilities
- **Preserves Formatting**: Spaces, punctuation, and numbers remain unchanged

### Rolling Cipher Extension
- **Dynamic Shift**: The shift value changes for each letter based on position
- **Formula**: `Shift = Key1 + (letterPosition × Key2) mod 26`
- **Enhanced Security**: Makes frequency analysis attacks much more difficult
- **Two Keys**: Base shift (1-25) and increment (1-10)

### User Interface
- **Modern Dark Theme**: Sleek, comfortable design with gradient accents
- **Tab Navigation**: Easy switching between cipher types
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Preview**: Instant results as you process messages
- **Icon Support**: Font Awesome icons for better visual feedback

## 🚀 Live Demo

View the live application: [Caesar Cipher App](https://anballem.github.io/caesar-cipher-app)

## 📁 Project Structure

```
caesar-cipher-app/
├── index.html      # Main HTML structure
├── script.js       # Cipher logic and event handlers
├── styles.css      # Modern dark-themed styling
└── README.md       # Project documentation
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Flexbox, Grid, Gradients, and CSS Variables
- **JavaScript (ES6+)**: Modern syntax with arrow functions and DOM manipulation
- **Font Awesome 6.4**: Icon library for UI elements

## 💻 Usage

### Basic Caesar Cipher

1. Select "Basic Caesar Cipher" tab
2. Enter your message in the text area
3. Set the shift key (1-25)
4. Choose "Encode Message" or "Decode Message"
5. Click "Process Message"
6. View the result in the output box

**Example:**
- Message: `Hello, World!`
- Key: `3`
- Encoded: `Khoor, Zruog!`

### Rolling Cipher Extension

1. Select "Rolling Cipher (Extension)" tab
2. Enter your message
3. Set the base shift key (1-25) and increment key (1-10)
4. Choose operation (Encode/Decode)
5. Click "Process Message"

**Example:**
- Message: `Hello`
- Base Key: `3`, Increment: `2`
- Letter shifts: 3, 5, 7, 9, 11
- Encoded: `Jqwtz`

## 🔒 How It Works

### Basic Caesar Cipher

The Caesar cipher is one of the oldest and simplest encryption techniques. Each letter is replaced by another letter a fixed number of positions down the alphabet:

```
Plain:  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Key=3:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
```

### Rolling Cipher Extension

The rolling cipher enhances security by varying the shift for each character:

```
Shift(n) = (Key1 + (n × Key2)) mod 26

Where:
- n = letter position (starting from 0)
- Key1 = base shift value
- Key2 = increment value
```

This makes the cipher resistant to frequency analysis attacks since each occurrence of the same letter encrypts to different values.

## ⚙️ Installation

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/anballem/caesar-cipher-app.git
```

2. Navigate to the project directory:
```bash
cd caesar-cipher-app
```

3. Open `index.html` in your web browser

### GitHub Pages Deployment

The app is pre-configured for GitHub Pages deployment. To deploy:

1. Push to a GitHub repository
2. Go to Repository Settings → Pages
3. Select the main branch as source
4. Click Save

## 📝 API Reference

### Core Functions

| Function | Description | Parameters |
|----------|-------------|------------|
| `encodeCaesarCipher(text, key)` | Encode using basic Caesar | `text: string`, `key: number` |
| `decodeCaesarCipher(text, key)` | Decode using basic Caesar | `text: string`, `key: number` |
| `encodeRollingCipher(text, key1, key2)` | Encode using rolling cipher | `text: string`, `key1: number`, `key2: number` |
| `decodeRollingCipher(text, key1, key2)` | Decode using rolling cipher | `text: string`, `key1: number`, `key2: number` |

### Configuration

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| `key` | number | 1-25 | 3 | Basic Caesar shift value |
| `key1` | number | 1-25 | 3 | Rolling cipher base shift |
| `key2` | number | 1-10 | 2 | Rolling cipher increment |

## 🎨 Customization

### Theme Colors

Modify these CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4361ee;    /* Main accent color */
    --secondary-color: #4cc9f0;  /* Secondary accent */
    --background-dark: #1a1a2e;  /* Background gradient start */
    --background-light: #16213e; /* Background gradient end */
}
```

### Adding New Cipher Types

1. Add new cipher option in `index.html`
2. Create encode/decode functions in `script.js`
3. Add corresponding styles in `styles.css`

## 🧪 Testing

### Manual Testing Checklist

- [ ] Encode message with basic Caesar cipher
- [ ] Decode message with basic Caesar cipher
- [ ] Encode message with rolling cipher
- [ ] Decode message with rolling cipher
- [ ] Test edge cases (empty input, special characters)
- [ ] Verify key validation (out of range)
- [ ] Test responsive layout on mobile

### Automated Tests (Future Enhancement)

```javascript
// Example test case
test('Basic Caesar encoding', () => {
    expect(encodeCaesarCipher('ABC', 1)).toBe('BCD');
    expect(encodeCaesarCipher('XYZ', 3)).toBe('ABC');
});
```

## 📚 Historical Context

The Caesar cipher is named after Julius Caesar, who used it in his private correspondence. It represents one of the earliest known examples of substitution cipher encryption, dating back to approximately 58 BC.


**Made with ❤️ by [anballem](https://github.com/anballem)**