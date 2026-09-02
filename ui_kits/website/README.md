# Website UI kit

Recreation of the two frames the source file defines:

- **Home** (`Home.jsx`) — `responsive_set / Desktop`, node `0:4`. Nav → hero wordmark → What/When/Where → 14-tile grid → manifesto statement → newsletter bar → full-bleed photo → footer.
- **About overlay** (`About.jsx`) — `overlay / Desktop`, node `4012:865`. Black full-screen panel, 200px close X, three 42px statements.

Interaction: "About" in the nav opens the overlay; the X closes it. "Directions" jumps to the grid.

The design width is 1280px with 10px side padding; content blocks cap at 1500px. Every value here is copied from the .fig — do not re-space it.
