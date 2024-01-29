const cookie = window.localStorage.getItem('force-refreshed');
    
// Relevant Parent Node
const targetNode = document.getElementById("movie_player");


document.addEventListener('DOMContentLoaded', async() => { 

    let videoPlayer = targetNode.getElementsByVideo("video")[0];
    const searchClass = "ytp-ad-skip-button-modern";

    if(cookie){
        videoPlayer.currentTime = cookie
    }
    // testing for DOMContentLoaded
    console.log('DOMContentLoaded');
    // YT Skip Button Selector

    // Ad is not skippable
    const willPlayAd = async () => {
        const currVideoTime = targetNode.querySelector(".ytp-time-current");
        const badAdBtn = targetNode.querySelector(".ytp-ad-text.ytp-ad-preview-text-modern");

        // Verify unskippable ad and preventing default behaviour of reloading video at 0 seconds
        const refresh = badAdBtn !== null && badAdBtn.innerText.includes("Video")

        if(refresh && parseInt(currVideoTime) < 1 ){
            window.location.reload();
        } else if(refresh && parseInt(currVideoTime) < 1 ) {
            window.localStorage.setItem(`${getCurrentTime(videoPlayer.currentTime)}`);
            window.location.reload();
        } else {
            console.log("Error on willPlayAd")
        }
    };
    const getCurrentTime = (banned) => {
        // get colon idx
        let colonCheck = banned[1];
        let idx = colonCheck === ":" ? 1 : 2;
        
        const timeInMinutes = "";
        for(let i = 0; i < idx; i++) {
            timeInMinutes.concat(banned[i]);
        }
        
        let seconds = banned[idx+1] + banned[idx+2];

        return ( timeInMinutes.toNumber() * 60 ) + seconds.toNumber()
    }

    // Check for class of video container containing ad signifiers
    async function handleMutation (mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.classList.contains("ad-playing") || target.classList.contains("ad-showing")) {
                    await willPlayAd();
                    const skipBtn = target.querySelector(searchClass)
                    skipBtn !== null ? skipBtn.click() : console.log("bruised but not beaten");
                }
            }
        }
    }


    await willPlayAd();
    targetNode.querySelector(searchClass);

    const observer = new MutationObserver(handleMutation);

    // Configured to observe changes in attributes alone
    observer.observe(targetNode, { attributes: true, attributeFilter: ['class'] });

})

// observer performance test below...

// caching query Selectors?
// can i make my own state function in another file?


// console.time('testTag');document.getElementById('movie_player').getElementsByTagName("video");console.timeEnd('testTag');
// console.time('testTag');document.getElementById('movie_player').querySelector("video");console.timeEnd('testTag');