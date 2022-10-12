const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store triggered event
    window.deferredPrompt = event;

    // Remove hidden class from button
    butInstall.classList.toggle('hidden', false);
});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if(!promptEvent) {
        return;
    }
    // Show prompt
    promptEvent.prompt();

    // Reset deferred prompt 
    window.deferredPrompt = null;
    butInstall.classList.toggle('hiddne', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear the prompt
    window.deferredPrompt = null;
});
