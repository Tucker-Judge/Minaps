An open source web extension suite

Under the Apache License -- All code is free to use in commercial or personal endeavors

___________________________________________________________________Important Information:

Default Behavior For Script Injection Is Upon Page Load

All Permissions are listed below for perusal.
"activeTab", "tabs", "scripting", "history"

Permissions for History and Tabs coincide with beta support for vim like modifiers on actions. Currently this includes going back in history n times. Further consideration is necessary for the direction of this feature. Until it's complete implementation removal of these permissions is up to the user.



___________________________________________________________________
How to Install:

lorem ipsum dolor sit amet, consectetur adipiscing

___________________________________________________________________
Getting Started:

There are several custom keybindings available for a heightened user experience. Their purposes are for speed and comfort. 

Operators:

    \ PageDown

Lengthy Web Pages can be read more simply by using the \ operator as the acting page down. Changing the operator to something more user friendly for yourself is encouraged. It is not meant to overtake the original page down behavior but rather add a smoother experience to reading longer pages.
___________________________________________________________________
Acting Purpose of Scripts:

    Default:
        KeyBinding for new page down operator
    
    Youtube-AutoSkip:
        Prevents All YT Ads

        Currently is supported using cookies. This can lead to a break in functionality by Googles staging of banning Third party cookies. More complete solutions are being looked into.
        Furthermore, testing on this feature can be slow due to the nature of waiting for ads currently out of scope. One small feature, that is unskippable ads in the middle of the video, are rare and currently supported in beta mode. Incidentally, this is with cookies as a solution to reload the page and go to the previous point in the video.
        
        These implementations do not stop or alter Youtube server requests and therefore are not subject to Youtube's recent policy changes on ad-blockers.

        Ethically, No one spends money on the ad you have skipped. Further reading on YouTube ad behavior can be found here. no link right now.

    ChatGpt-not_maintained:
        Working as of Jan 29 2023
        ~:
            Allows users to place a marker on the page to scroll back to that location later. Helpful when given many interesting points to interact with.
        `:
            Allows users to go to their marker
        ArrowDown: 
            Navigates to Absolute Bottom of Scroll Container. There is also a clickable arrow that does the same thing natively provided.

    
            


