const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {

  // Store triggered event
  window.deferredPrompt = event;

  // Remove hidden class from button
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {

  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Reset deferred prompt, can only be used once
  window.deferredPrompt = null;
  
  butInstall.classList.toggle("hiddne", true);
});

window.addEventListener("appinstalled", (event) => {
  // Clear the prompt
  window.deferredPrompt = null;
});
