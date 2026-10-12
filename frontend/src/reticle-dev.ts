// Dev-only. Imported automatically by @reticlehq/vite-plugin, so you do not need to import it.
// Self-guards on import.meta.env.DEV, so it is a no-op in a production build.
import { registerCapabilities } from '@reticlehq/react';

if (import.meta.env.DEV) {
  registerCapabilities({
    // ── testids ───────────────────────────────────────────────────────────────────────────────────
    // Key elements in the Generate Timetable → View Timetable flow.
    testids: [
      'generate-timetable-btn',       // The main Generate button (GenerateTimetable.jsx)
      'clear-timetable-btn',          // The Clear Saved Entries button (GenerateTimetable.jsx)
      'generation-success-banner',    // GA metrics panel shown on success (GenerateTimetable.jsx)
      'generation-error-banner',      // Error/diagnostics panel shown on failure (GenerateTimetable.jsx)
      'timetable-section-selector',   // The section/faculty/room combobox (ViewTimetable.jsx)
      'timetable-grid',               // The weekly grid <table> (ViewTimetable.jsx)
    ],

    signals: [],

    // ── stores ────────────────────────────────────────────────────────────────────────────────────
    // Both pages use plain React useState, so state is pushed via useReticleStore() on every render.
    // The store names here must match the first argument passed to useReticleStore() in each page.
    //
    // generateTimetable — registered in GenerateTimetable.jsx:
    //   { generating, resultStatus, generatedCount, initialFitness, optimizedFitness,
    //     improvementPercent, generations, diagnostics, message, isReady,
    //     validationPassed, validationTotal }
    //
    // viewTimetable — registered in ViewTimetable.jsx:
    //   { viewType, selectedId, loading, fetchingEntries, entryCount, workingDays,
    //     entries, entryDays, sectionIds }
    stores: [
      'generateTimetable',
      'viewTimetable',
    ],
  });
}
