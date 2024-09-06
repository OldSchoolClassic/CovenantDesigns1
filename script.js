const letterToRgb = {
    'A': ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"],
    'B': ["rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)"],
    'C': ["rgb(192, 192, 192)", "rgb(128, 128, 128)", "rgb(128, 0, 0)"],
    'D': ["rgb(128, 128, 0)", "rgb(128, 0, 128)", "rgb(0, 128, 128)"],
    'E': ["rgb(0, 0, 128)", "rgb(255, 165, 0)", "rgb(165, 42, 42)"],
    'F': ["rgb(139, 69, 19)", "rgb(46, 139, 87)", "rgb(210, 180, 140)"],
    'G': ["rgb(173, 255, 47)", "rgb(50, 205, 50)", "rgb(60, 179, 113)"],
    'H': ["rgb(34, 139, 34)", "rgb(107, 142, 35)", "rgb(189, 183, 107)"],
    'I': ["rgb(238, 232, 170)", "rgb(250, 250, 210)", "rgb(127, 255, 0)"],
    'J': ["rgb(255, 215, 0)", "rgb(139, 0, 139)", "rgb(72, 61, 139)"],
    'K': ["rgb(47, 79, 79)", "rgb(0, 206, 209)", "rgb(148, 0, 211)"],
    'L': ["rgb(255, 20, 147)", "rgb(255, 69, 0)", "rgb(218, 112, 214)"],
    'M': ["rgb(238, 233, 233)", "rgb(152, 251, 152)", "rgb(175, 238, 238)"],
    'N': ["rgb(219, 112, 147)", "rgb(255, 239, 213)", "rgb(255, 218, 185)"],
    'O': ["rgb(205, 133, 63)", "rgb(255, 192, 203)", "rgb(221, 160, 221)"],
    'P': ["rgb(176, 224, 230)", "rgb(128, 0, 32)", "rgb(255, 0, 255)"],
    'Q': ["rgb(102, 51, 153)", "rgb(255, 160, 122)", "rgb(233, 150, 122)"],
    'R': ["rgb(250, 128, 114)", "rgb(255, 99, 71)", "rgb(255, 69, 0)"],
    'S': ["rgb(255, 215, 0)", "rgb(255, 165, 0)", "rgb(255, 140, 0)"],
    'T': ["rgb(255, 127, 80)", "rgb(255, 105, 180)", "rgb(255, 106, 106)"],
    'U': ["rgb(255, 69, 0)", "rgb(255, 99, 71)", "rgb(255, 127, 36)"],
    'V': ["rgb(255, 114, 86)", "rgb(255, 99, 71)", "rgb(255, 218, 185)"],
    'W': ["rgb(255, 228, 225)", "rgb(255, 228, 181)", "rgb(255, 222, 173)"],
    'X': ["rgb(255, 218, 185)", "rgb(255, 192, 203)", "rgb(255, 182, 193)"],
    'Y': ["rgb(255, 160, 122)", "rgb(255, 127, 80)", "rgb(255, 69, 0)"],
    'Z': ["rgb(255, 99, 71)", "rgb(255, 215, 0)", "rgb(255, 165, 0)"]
};

const rgbToLetter = {
    "rgb(255, 0, 0)rgb(0, 255, 0)rgb(0, 0, 255)": "A",
    "rgb(255, 255, 0)rgb(255, 0, 255)rgb(0, 255, 255)": "B",
    "rgb(192, 192, 192)rgb(128, 128, 128)rgb(128, 0, 0)": "C",
    "rgb(128, 128, 0)rgb(128, 0, 128)rgb(0, 128, 128)": "D",
    "rgb(0, 0, 128)rgb(255, 165, 0)rgb(165, 42, 42)": "E",
    "rgb(139, 69, 19)rgb(46, 139, 87)rgb(210, 180, 140)": "F",
    "rgb(173, 255, 47)rgb(50, 205, 50)rgb(60, 179, 113)": "G",
    "rgb(34, 139, 34)rgb(107, 142, 35)rgb(189, 183, 107)": "H",
    "rgb(238, 232, 170)rgb(250, 250, 210)rgb(127, 255, 0)": "I",
    "rgb(255, 215, 0)rgb(139, 0, 139)rgb(72, 61, 139)": "J",
    "rgb(47, 79, 79)rgb(0, 206, 209)rgb(148, 0, 211)": "K",
    "rgb(255, 20, 147)rgb(255, 69, 0)rgb(218, 112, 214)": "L",
    "rgb(238, 233, 233)rgb(152, 251, 152)rgb(175, 238, 238)": "M",
    "rgb(219, 112, 147)rgb(255, 239, 213)rgb(255, 218, 185)": "N",
    "rgb(205, 133, 63)rgb(255, 192, 203)rgb(221, 160, 221)": "O",
    "rgb(176, 224, 230)rgb(128, 0, 32)rgb(255, 0, 255)": "P",
    "rgb(102, 51, 153)rgb(255, 160, 122)rgb(233, 150, 122)": "Q",
    "rgb(250, 128, 114)rgb(255, 99, 71)rgb(255, 69, 0)": "R",
    "rgb(255, 215, 0)rgb(255, 165, 0)rgb(255, 140, 0)": "S",
    "rgb(255, 127, 80)rgb(255, 105, 180)rgb(255, 106, 106)": "T",
    "rgb(255, 69, 0)rgb(255, 99, 71)rgb(255, 127, 36)": "U",
    "rgb(255, 114, 86)rgb(255, 99, 71)rgb(255, 218, 185)": "V",
    "rgb(255, 228, 225)rgb(255, 228, 181)rgb(255, 222, 173)": "W",
    "rgb(255, 218, 185)rgb(255, 192, 203)rgb(255, 182, 193)": "X",
    "rgb(255, 160, 122)rgb(255, 127, 80)rgb(255, 69, 0)": "Y",
    "rgb(255, 99, 71)rgb(255, 215, 0)rgb(255, 165, 0)": "Z"
};

const letterToHex = {
    'A': ["#FF0000", "#00FF00", "#0000FF"],
    'B': ["#FFFF00", "#FF00FF", "#00FFFF"],
    'C': ["#C0C0C0", "#808080", "#800000"],
    'D': ["#808000", "#800080", "#008080"],
    'E': ["#000080", "#FFA500", "#A52A2A"],
    'F': ["#8B4513", "#2E8B57", "#D2B48C"],
    'G': ["#ADFF2F", "#32CD32", "#3CB371"],
    'H': ["#228B22", "#6B8E23", "#BDB76B"],
    'I': ["#EEE8AA", "#FAFAD2", "#7FFF00"],
    'J': ["#FFD700", "#8B008B", "#483D8B"],
    'K': ["#2F4F4F", "#00CED1", "#9400D3"],
    'L': ["#FF1493", "#FF4500", "#DA70D6"],
    'M': ["#EEE9E9", "#98FB98", "#AFEEEE"],
    'N': ["#DB7093", "#FFEFD5", "#FFDAB9"],
    'O': ["#CD853F", "#FFC0CB", "#DDA0DD"],
    'P': ["#B0E0E6", "#800020", "#FF00FF"],
    'Q': ["#663399", "#FFA07A", "#E9967A"],
    'R': ["#FA8072", "#FF6347", "#FF4500"],
    'S': ["#FFD700", "#FFA500", "#FF8C00"],
    'T': ["#FF7F50", "#FF69B4", "#FF6A6A"],
    'U': ["#FF4500", "#FF6347", "#FF7F24"],
    'V': ["#FF7256", "#FF6347", "#FFDAB9"],
    'W': ["#FFE4E1", "#FFE4B5", "#FFDEAD"],
    'X': ["#FFDAB9", "#FFC0CB", "#FFB6C1"],
    'Y': ["#FFA07A", "#FF7F50", "#FF4500"],
    'Z': ["#FF6347", "#FFD700", "#FFA500"]
};

const hexToLetter = {
    "#FF0000#00FF00#0000FF": "A",
    "#FFFF00#FF00FF#00FFFF": "B",
    "#C0C0C0#808080#800000": "C",
    "#808000#800080#008080": "D",
    "#000080#FFA500#A52A2A": "E",
    "#8B4513#2E8B57#D2B48C": "F",
    "#ADFF2F#32CD32#3CB371": "G",
    "#228B22#6B8E23#BDB76B": "H",
    "#EEE8AA#FAFAD2#7FFF00": "I",
    "#FFD700#8B008B#483D8B": "J",
    "#2F4F4F#00CED1#9400D3": "K",
    "#FF1493#FF4500#DA70D6": "L",
    "#EEE9E9#98FB98#AFEEEE": "M",
    "#DB7093#FFEFD5#FFDAB9": "N",
    "#CD853F#FFC0CB#DDA0DD": "O",
    "#B0E0E6#800020#FF00FF": "P",
    "#663399#FFA07A#E9967A": "Q",
    "#FA8072#FF6347#FF4500": "R",
    "#FFD700#FFA500#FF8C00": "S",
    "#FF7F50#FF69B4#FF6A6A": "T",
    "#FF4500#FF6347#FF7F24": "U",
    "#FF7256#FF6347#FFDAB9": "V",
    "#FFE4E1#FFE4B5#FFDEAD": "W",
    "#FFDAB9#FFC0CB#FFB6C1": "X",
    "#FFA07A#FF7F50#FF4500": "Y",
    "#FF6347#FFD700#FFA500": "Z"
};

// Save original mappings
const originalLetterToHex = JSON.parse(JSON.stringify(letterToHex));
const originalLetterToRgb = JSON.parse(JSON.stringify(letterToRgb));

function updateDictionaries() {
    for (let key in letterToHex) {
        const hexCodes = letterToHex[key];
        const combinedHex = hexCodes.join('');
        hexToLetter[combinedHex] = key;
        const combinedRgb = letterToRgb[key].join('');
        rgbToLetter[combinedRgb] = key;
    }
}

updateDictionaries();

let currentSeed = null;
let copiedColorSquares = '';

function generateSeed() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

function shuffleArray(array, seed) {
    let currentIndex = array.length, randomIndex;
    let random = function() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280.0;
    };

    const result = [...array];
    while (currentIndex !== 0) {
        randomIndex = Math.floor(random() * currentIndex);
        currentIndex--;
        [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
    }
    return result;
}

function randomizeColors() {
    currentSeed = generateSeed();
    document.getElementById('seedInput').value = currentSeed;
    applySeed(currentSeed);
}

function applySeed(seed) {
    currentSeed = seed;
    const shuffledLetters = shuffleArray(Object.keys(originalLetterToHex), seed);
    const letterToHexCopy = { ...originalLetterToHex };
    const letterToRgbCopy = { ...originalLetterToRgb };

    // Reassign colors based on the shuffled order
    for (let i = 0; i < shuffledLetters.length; i++) {
        const currentLetter = shuffledLetters[i];
        const nextLetter = shuffledLetters[(i + 1) % shuffledLetters.length];
        letterToHex[currentLetter] = letterToHexCopy[nextLetter];
        letterToRgb[currentLetter] = letterToRgbCopy[nextLetter];
    }

    updateDictionaries();
    convertToColors();
}

function applyCustomSeed() {
    const customSeed = parseInt(document.getElementById('customSeedInput').value, 10);
    if (!isNaN(customSeed)) {
        applySeed(customSeed);
    } else {
        alert("Please enter a valid seed.");
    }
}

function decodeColors() {
    const colorDivs = document.querySelectorAll("#pasteArea .colorSquare");
    const rgbValues = [];
    colorDivs.forEach(div => {
        const rgb = getComputedStyle(div).backgroundColor;
        rgbValues.push(rgb);
    });
    if (rgbValues.length % 3 !== 0) {
        console.error("Error: The number of RGB values must be a multiple of 3 for decoding.");
        document.getElementById('colorDecodedMessage').innerText = "Decoding Error: Incorrect number of RGB values.";
        return;
    }
    let message = '';
    for (let i = 0; i < rgbValues.length; i += 3) {
        const combinedRgb = rgbValues[i] + rgbValues[i + 1] + rgbValues[i + 2];
        if (combinedRgb === "rgb(128, 128, 128)rgb(169, 169, 169)rgb(192, 192, 192)") {
            message += ' ';
            continue;
        }
        const letter = rgbToLetter[combinedRgb] || '?';
        message += letter;
    }
    document.getElementById('colorDecodedMessage').innerText = message;
}

function decodeHexValues() {
    const hexValues = document.getElementById('pasteArea').innerText.split(' ').filter(Boolean).map(val => val.replace('#', ''));
    let message = '';
    for (let i = 0; i < hexValues.length; i += 3) {
        const combinedHex = "#" + hexValues[i] + "#" + hexValues[i + 1] + "#" + hexValues[i + 2];
        if (combinedHex === "#808080#A9A9A9#C0C0C0") {
            message += ' ';
        } else {
            const letter = hexToLetter[combinedHex] || '?';
            message += letter;
        }
    }
    document.getElementById('colorDecodedMessage').innerText = message;
}

function copyColorSquares() {
    const colorSquares = document.getElementById('output').innerHTML;
    const tempDiv = document.createElement("div");
    tempDiv.style.position = "absolute";
    tempDiv.style.left = "-10000px";
    tempDiv.innerHTML = "&nbsp;" + colorSquares;
    document.body.appendChild(tempDiv);
    const range = document.createRange();
    range.selectNode(tempDiv);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    document.body.removeChild(tempDiv);
    copiedColorSquares = colorSquares;
}

function convertToColors() {
    const word = document.getElementById('wordInput').value.toUpperCase();
    const outputDiv = document.getElementById('output');
    const hexOutputDiv = document.getElementById('hexOutput');
    outputDiv.innerHTML = '';
    hexOutputDiv.innerHTML = '';
    for (let letter of word) {
        if (letter === ' ') {
            const spaceColors = ["#808080", "#A9A9A9", "#C0C0C0"];
            spaceColors.forEach(hex => {
                const div = document.createElement('div');
                div.className = 'colorSquare';
                div.style.backgroundColor = hex;
                outputDiv.appendChild(div);
                const hexSpan = document.createElement('span');
                hexSpan.className = 'hexCode';
                hexSpan.innerText = hex;
                hexOutputDiv.appendChild(hexSpan);
            });
            continue;
        }
        const hexCodes = letterToHex[letter];
        if (hexCodes) {
            hexCodes.forEach(hex => {
                const div = document.createElement('div');
                div.className = 'colorSquare';
                div.style.backgroundColor = hex;
                outputDiv.appendChild(div);
                const hexSpan = document.createElement('span');
                hexSpan.className = 'hexCode';
                hexSpan.innerText = hex;
                hexOutputDiv.appendChild(hexSpan);
            });
        }
    }
}

function copyHexCodesToClipboard() {
    const hexValues = [];
    const colorDivs = document.querySelectorAll(".colorSquare");
    colorDivs.forEach(div => {
        const rgb = getComputedStyle(div).backgroundColor;
        const hex = rgbToHex(rgb);
        if (hex) {
            hexValues.push(hex);
        }
    });
    const textArea = document.createElement("textarea");
    textArea.value = hexValues.join(' ');
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

function rgbToHex(rgb) {
    const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
    return result ? "#" + (1 << 24 | result[1] << 16 | result[2] << 8 | result[3]).toString(16).slice(1).toUpperCase() : null;
}

function pasteCopiedColors() {
    document.getElementById('pasteArea').innerHTML = copiedColorSquares;
}

function pasteHexCodes() {
    navigator.clipboard.readText()
        .then(text => {
            document.getElementById('pasteArea').innerText = text;
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
}

function clearAll() {
    document.getElementById('wordInput').value = '';
    document.getElementById('output').innerHTML = '';
    document.getElementById('pasteArea').innerHTML = '';
    document.getElementById('colorDecodedMessage').innerText = '';
    document.getElementById('hexOutput').innerHTML = '';
    document.getElementById('seedInput').value = '';
    document.getElementById('customSeedInput').value = '';
    currentSeed = null;
    Object.assign(letterToHex, JSON.parse(JSON.stringify(originalLetterToHex))); // Reset to original colors
    Object.assign(letterToRgb, JSON.parse(JSON.stringify(originalLetterToRgb))); // Reset to original colors
    updateDictionaries();
}

function sendColorsEmail() {
    const email = document.getElementById('emailInput').value;
    const subject = "Your Color Encoded Message";
    const body = encodeURIComponent(document.getElementById('hexOutput').innerText);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

function sendColorsText() {
    const phone = document.getElementById('phoneInput').value;
    const body = document.getElementById('hexOutput').innerText;
    const smsLink = `sms:${phone}?body=${encodeURIComponent(body)}`;
    window.location.href = smsLink;
}