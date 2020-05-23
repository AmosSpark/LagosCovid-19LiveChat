window.watsonAssistantChatOptions = {
  integrationID: "7a19825c-6187-421c-a762-1c6b1306a22c", // The ID of this integration.
  region: "eu-gb", // The region your integration is hosted in.
  serviceInstanceID: "af2f1267-19d1-411e-b70d-19776210a550", // The ID of your service instance.
  onLoad: function (instance) {
    instance.render();
  },
};

setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});
// ADD MEDIA QUERY SCRIPT
const mediaQuery = () => {
  // If media query matches
  if (x.matches) {
    const chatElementDesktop = document.createElement("div"),
      bg_image = document.querySelector(".bg-image");
    chatElementDesktop.className = "chatElementDesktop";
    // bg_image.innerHTML = chatElementDesktop;
    bg_image.appendChild(chatElementDesktop);
    const element = document.querySelector(".chatElementDesktop");
    window.watsonAssistantChatOptions = {
      integrationID: "7a19825c-6187-421c-a762-1c6b1306a22c", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "af2f1267-19d1-411e-b70d-19776210a550", // The ID of your service instance.

      // Provide the custom element.
      element: element,
      // Hide the close button since we want it always open.
      hideCloseButton: true,
      // Hide the default launcher.
      showLauncher: false,
      // Make the window open by default.
      openChatByDefault: true,

      onLoad: function (instance) {
        instance.render();
      },
    };

    setTimeout(function () {
      const t = document.createElement("script");
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });
  } else {
    return false;
  }
};
const x = window.matchMedia("(min-width: 1200px)");
mediaQuery(x); // Call listener function at run time
x.addListener(mediaQuery); // Attach listener function on state changes
