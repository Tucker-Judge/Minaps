
let historyNumber = '0'; // Default to '0'
let isModifierPressed = false;
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        // If a numeric key is pressed, concatenate it to historyNumber
        // If historyNumber is '0', replace it, else concatenate
        historyNumber = historyNumber === '0' ? event.key : historyNumber + event.key;
    } else if (event.metaKey || event.ctrlKey) {
        // If Cmd or Ctrl is pressed, set the modifier flag
        isModifierPressed = true;

        // Additional functionality for duplicating a tab
        if (event.key === 'd' || event.key === 'D') {
            for (let i = 0; i < parseInt(historyNumber); i++) {
                window.open(window.location.href, '_blank');
            }
        }
    } else if (historyNumber && isModifierPressed) {
        // Handle browser history navigation
        for (let i = 0; i < parseInt(historyNumber); i++) {
            if (event.key === ';') {
                // Go back in history
                history.go(-1);
            } else if (event.key === 'p') {
                // Go forward in history
                history.go(1);
            }
        }

        // Reset historyNumber to '0' and isModifierPressed
        historyNumber = '0';
        isModifierPressed = false;
    } else if (event.key === "\\") {
        const currentScroll = window.pageYOffset;
  
        // slightly less than one full page
        const scrollIncrement = window.innerHeight - 25; // Subtract 100px, adjust as needed
        const newScroll = currentScroll + scrollIncrement;
  
        window.scrollTo({
          top: newScroll,
          behavior: 'smooth'
        });
    } 
    else {
        // Reset to default for other keys
        historyNumber = '0';
        isModifierPressed = false;
    }
});

// go back in history to specific title or page?