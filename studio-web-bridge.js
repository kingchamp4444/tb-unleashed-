// Detect current game suite and active tab
const GAME_CONTEXT = window.location.pathname.includes('madden') ? 'MADDEN' : 'CFB';

function initStadiumBridge() {
  const isStadiumEditor = window.location.href.includes('/stadium') || 
                          document.querySelector('[data-testid="stadium-tab"]');

  if (!isStadiumEditor) return;

  console.log(`[Stadium Bridge] Initialized for ${GAME_CONTEXT}`);

  // Madden and CFB share stadium surface parameters
  const stadiumConfig = {
    game: GAME_CONTEXT,
    supportsProHash: GAME_CONTEXT === 'MADDEN',
    hashMarks: GAME_CONTEXT === 'MADDEN' ? 'NFL' : 'NCAA',
    surfaceTypes: ['Turf', 'Grass', 'Custom Turf']
  };

  // Inject custom presets listener into window
  window.postMessage({ type: "STADIUM_BRIDGE_READY", config: stadiumConfig }, "*");
}

// Observe DOM updates for dynamic tab changes inside single-page app
const observer = new MutationObserver(() => initStadiumBridge());
observer.observe(document.body, { childList: true, subtree: true });
initStadiumBridge();
