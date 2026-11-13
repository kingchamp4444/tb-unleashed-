window.addEventListener("message", (event) => {
  if (event.data?.type === "APPLY_STADIUM_PRESET") {
    const { turfColor, hashStyle, endzoneLogo } = event.data.payload;
    
    // Core payload target for EA's React input state
    const surfaceInput = document.querySelector('input[name="surfaceColor"]');
    if (surfaceInput) {
      surfaceInput.value = turfColor;
      surfaceInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
});
