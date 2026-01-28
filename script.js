// DOM Elements
const messageInput = document.getElementById('message');
const key1Input = document.getElementById('key1');
const rollingKey1Input = document.getElementById('rolling-key1');
const rollingKey2Input = document.getElementById('rolling-key2');
const encodeRadio = document.getElementById('encode');
const decodeRadio = document.getElementById('decode');
const processBtn = document.getElementById('process-btn');
const resetBtn = document.getElementById('reset-btn');
const resultBox = document.getElementById('result');
const basicTab = document.getElementById('basic-tab');
const rollingTab = document.getElementById('rolling-tab');
const basicInputs = document.getElementById('basic-cipher-inputs');
const rollingInputs = document.getElementById('rolling-cipher-inputs');

// Cipher type state
let isRollingCipher = false;

// Event Listeners
basicTab.addEventListener('click', () => {
    basicTab.classList.add('active');
    rollingTab.classList.remove('active');
    basicInputs.style.display = 'block';
    rollingInputs.style.display = 'none';
    isRollingCipher = false;
});

rollingTab.addEventListener('click', () => {
    rollingTab.classList.add('active');
    basicTab.classList.remove('active');
    basicInputs.style.display = 'none';
    rollingInputs.style.display = 'block';
    isRollingCipher = true;
});

processBtn.addEventListener('click', processMessage);
resetBtn.addEventListener('click', resetForm);

// Process the message based on selected options
function processMessage() {
    const message = messageInput.value.trim();
    const operation = encodeRadio.checked ? 'encode' : 'decode';
    
    if (!message) {
        resultBox.textContent = 'Please enter a message to process.';
        resultBox.style.color = '#ff6b6b';
        return;
    }
    
    let result;
    
    if (isRollingCipher) {
        const key1 = parseInt(rollingKey1Input.value) || 3;
        const key2 = parseInt(rollingKey2Input.value) || 2;
        
        if (key1 < 1 || key1 > 25) {
            resultBox.textContent = 'Key 1 must be between 1 and 25.';
            resultBox.style.color = '#ff6b6b';
            return;
        }
        
        if (key2 < 1 || key2 > 10) {
            resultBox.textContent = 'Key 2 must be between 1 and 10.';
            resultBox.style.color = '#ff6b6b';
            return;
        }
        
        result = operation === 'encode' 
            ? encodeRollingCipher(message, key1, key2)
            : decodeRollingCipher(message, key1, key2);
            
        resultBox.innerHTML = `<strong>Rolling Cipher ${operation === 'encode' ? 'Encoded' : 'Decoded'} Message:</strong>\n${result}\n\n<small>Keys used: Base Shift = ${key1}, Increment = ${key2}</small>`;
    } else {
        const key = parseInt(key1Input.value) || 3;
        
        if (key < 1 || key > 25) {
            resultBox.textContent = 'Key must be between 1 and 25.';
            resultBox.style.color = '#ff6b6b';
            return;
        }
        
        result = operation === 'encode' 
            ? encodeCaesarCipher(message, key)
            : decodeCaesarCipher(message, key);
            
        resultBox.innerHTML = `<strong>Caesar Cipher ${operation === 'encode' ? 'Encoded' : 'Decoded'} Message:</strong>\n${result}\n\n<small>Key used: ${key}</small>`;
    }
    
    resultBox.style.color = '#e6e6e6';
}

// Basic Caesar cipher encoding
function encodeCaesarCipher(text, key) {
    return processCaesarCipher(text, key, 'encode');
}

// Basic Caesar cipher decoding
function decodeCaesarCipher(text, key) {
    return processCaesarCipher(text, key, 'decode');
}

// Process Caesar cipher with direction
function processCaesarCipher(text, key, direction) {
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (char.match(/[a-z]/i)) {
            const isUpperCase = char === char.toUpperCase();
            const charCode = char.charCodeAt(0);
            const base = isUpperCase ? 65 : 97;
            
            // Calculate shifted code
            let shiftedCode;
            if (direction === 'encode') {
                shiftedCode = (charCode - base + key) % 26 + base;
            } else {
                shiftedCode = (charCode - base - key + 26) % 26 + base;
            }
            
            result += String.fromCharCode(shiftedCode);
        } else {
            // Non-alphabetic characters remain unchanged
            result += char;
        }
    }
    
    return result;
}

// Rolling cipher encoding
function encodeRollingCipher(text, key1, key2) {
    return processRollingCipher(text, key1, key2, 'encode');
}

// Rolling cipher decoding
function decodeRollingCipher(text, key1, key2) {
    return processRollingCipher(text, key1, key2, 'decode');
}

// Process rolling cipher with direction
function processRollingCipher(text, key1, key2, direction) {
    let result = '';
    let letterCount = 0; // Count only letters for shift calculation
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (char.match(/[a-z]/i)) {
            const isUpperCase = char === char.toUpperCase();
            const charCode = char.charCodeAt(0);
            const base = isUpperCase ? 65 : 97;
            
            // Calculate shift for this letter: key1 + (letterCount * key2) mod 26
            const shift = (key1 + (letterCount * key2)) % 26;
            letterCount++;
            
            // Calculate shifted code
            let shiftedCode;
            if (direction === 'encode') {
                shiftedCode = (charCode - base + shift) % 26 + base;
            } else {
                shiftedCode = (charCode - base - shift + 26) % 26 + base;
            }
            
            result += String.fromCharCode(shiftedCode);
        } else {
            // Non-alphabetic characters remain unchanged
            result += char;
        }
    }
    
    return result;
}

// Reset form to default values
function resetForm() {
    messageInput.value = 'Hello, World! This is a secret message.';
    key1Input.value = 3;
    rollingKey1Input.value = 3;
    rollingKey2Input.value = 2;
    encodeRadio.checked = true;
    
    // Reset to basic cipher
    basicTab.click();
    
    resultBox.textContent = 'Your encoded or decoded message will appear here...';
    resultBox.style.color = '#e6e6e6';
}

// Initialize with an example
window.addEventListener('DOMContentLoaded', () => {
    // Process an initial example
    setTimeout(processMessage, 500);
});
