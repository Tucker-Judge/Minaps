// scripts are currently rendered after page load

document.addEventListener('keydown', function(e) {
        console.log('working')
        const currentScroll = window.scrollY;
        
        // slightly less than one full page down
        const scrollIncrement = window.innerHeight - 25;

        const newScroll = currentScroll + scrollIncrement;
    if (e.key === '\\'){
        e.preventDefault();
        window.scrollTo({
            top: newScroll,
            behavior: 'smooth'
        })
    }
})

