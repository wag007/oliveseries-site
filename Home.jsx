function Home({ onAbout }) {
  const { TileGrid, ColorTile, ObjectTile, LinkTile, PhotoTile, PageHeader, FactRow, Statement, NewsletterBar, SiteFooter, NavBar } = window.OliveDesignSystem_d726ce;
  return (
    <div style={{ width: "100%", maxWidth: 1280, minHeight: 4457, margin: "0 auto", background: "var(--surface-page)", display: "flex", flexDirection: "column", alignItems: "center", padding: "22px 10px 20px", boxSizing: "border-box" }}>
      <NavBar items={[{ label: "About", onClick: onAbout }, { label: "Directions", href: "#directions" }, { label: "ES", href: "/es/" }]} />
      <PageHeader title="Olive" tagline="A lecture series in bars" handle="@oliveseries" />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "stretch" }}>
        <FactRow items={[
          { label: "What:", value: "a lecture in a bar" },
          { label: "When:", value: "SEPT 14TH 20:00" },
          { label: "Where:", value: "Calle de la Reina 16,  Madrid" },
        ]} />
        <TileGrid id="directions" style={{ paddingBottom: 112 }}>
          <PhotoTile src="/assets/photo-crowd.jpg" alt="A full bar listening to a talk" />
          <ObjectTile src="/assets/cutout-01.png" color="var(--olive-ink)" title="Poster" meta="September 26'" />
          <LinkTile href="https://maps.google.com">Google Maps Link</LinkTile>
          <ObjectTile src="/assets/cutout-02.png" color="var(--olive-navy)" fit="cover" title="Program" meta="October 26'" />
          <ColorTile color="var(--olive-fog)">Talks</ColorTile>
          <PhotoTile src="/assets/photo-tile-06.png" alt="Bar interior" />
          <ColorTile color="var(--olive-cream)">Science</ColorTile>
          <ObjectTile src="/assets/cutout-03.png" color="var(--olive-oxblood)" title="Cassette" meta="November 26'" />
          <ColorTile color="var(--olive-sage)">Philosophy</ColorTile>
          <LinkTile src="/assets/photo-tile-10.jpg">Follow Us on Substack</LinkTile>
          <ColorTile color="var(--olive-clay)">History</ColorTile>
          <LinkTile href="https://instagram.com">Browse the Instagram</LinkTile>
          <ColorTile color="var(--olive-cream)">Art</ColorTile>
          <ObjectTile src="/assets/photo-cosmos.jpg" fit="cover" color="var(--olive-blush)" textColor="var(--olive-black)" title="Tickets" meta="December 26'" />
        </TileGrid>
        <Statement>Olive is an hour of real teaching, held where people already are: a bar, a beer, a professor with something to say.</Statement>
      </main>
      <div style={{ display: "flex", flexDirection: "column", gap: 43, alignItems: "center", alignSelf: "stretch", maxWidth: "var(--page-max)", padding: "88px 30px", boxSizing: "border-box" }}>
        <NewsletterBar href="#subscribe">Sign Up for our Newsletter</NewsletterBar>
        <div role="img" aria-label="Audience at an Olive talk" style={{ height: 386, alignSelf: "stretch", overflow: "hidden", background: "url(/assets/photo-cta.jpg) center / cover no-repeat" }} />
        <SiteFooter kicker="A lecture series in bars" title="Olive" legal="Olive© 2026 All Rights Reserved" handle="@oliveseries" />
      </div>
    </div>
  );
}
Object.assign(window, { Home });
