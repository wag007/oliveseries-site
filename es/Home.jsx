function Home({ onAbout }) {
  const { TileGrid, ColorTile, ObjectTile, LinkTile, PhotoTile, PageHeader, FactRow, Statement, NewsletterBar, SiteFooter, NavBar } = window.OliveDesignSystem_d726ce;
  return (
    <div style={{ width: "100%", maxWidth: 1280, minHeight: 4457, margin: "0 auto", background: "var(--surface-page)", display: "flex", flexDirection: "column", alignItems: "center", padding: "22px 10px 20px", boxSizing: "border-box" }}>
      <NavBar items={[{ label: "Acerca de", onClick: (e) => { e.preventDefault(); onAbout(); } }, { label: "Cómo llegar", href: "#directions" }, { label: "EN", href: "/" }]} />
      <PageHeader title="Olive" tagline="Charlas en bares" handle="@oliveseries" />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "stretch" }}>
        <FactRow items={[
          { label: "Qué:", value: "una charla en un bar" },
          { label: "Cuándo:", value: "14 SEPT 20:00" },
          { label: "Dónde:", value: "Calle de la Reina 16,  Madrid" },
        ]} />
        <TileGrid id="directions" style={{ paddingBottom: 112 }}>
          <PhotoTile className="tile" src="/assets/photo-crowd.jpg" alt="Un bar lleno escuchando una charla" />
          <ObjectTile className="tile" src="/assets/cutout-01.png" color="var(--olive-ink)" title="Cartel" meta="26 de septiembre" />
          <LinkTile className="tile" href="https://maps.google.com">Enlace a Google Maps</LinkTile>
          <ObjectTile className="tile" src="/assets/cutout-02.png" color="var(--olive-navy)" fit="cover" title="Programa" meta="26 de octubre" />
          <ColorTile className="tile" color="var(--olive-fog)">Charlas</ColorTile>
          <PhotoTile className="tile" src="/assets/photo-tile-06.png" alt="Interior de un bar" />
          <ColorTile className="tile" color="var(--olive-cream)">Ciencia</ColorTile>
          <ObjectTile className="tile" src="/assets/cutout-03.png" color="var(--olive-oxblood)" title="Cassette" meta="26 de noviembre" />
          <ColorTile className="tile" color="var(--olive-sage)">Filosofía</ColorTile>
          <LinkTile className="tile" src="/assets/photo-tile-10.jpg">Síguenos en Substack</LinkTile>
          <ColorTile className="tile" color="var(--olive-clay)">Historia</ColorTile>
          <LinkTile className="tile" href="https://instagram.com">Ver Instagram</LinkTile>
          <ColorTile className="tile" color="var(--olive-cream)">Arte</ColorTile>
          <ObjectTile className="tile" src="/assets/photo-cosmos.jpg" fit="cover" color="var(--olive-blush)" textColor="var(--olive-black)" title="Entradas" meta="26 de diciembre" />
        </TileGrid>
        <Statement>Olive es una hora de enseñanza real, en el lugar donde la gente ya está: un bar, una caña, un profesor con algo que decir.</Statement>
      </main>
      <div style={{ display: "flex", flexDirection: "column", gap: 43, alignItems: "center", alignSelf: "stretch", maxWidth: "var(--page-max)", padding: "88px 30px", boxSizing: "border-box" }}>
        <NewsletterBar href="#subscribe">Apúntate a nuestra newsletter</NewsletterBar>
        <div role="img" aria-label="Público en una charla de Olive" style={{ height: 386, alignSelf: "stretch", overflow: "hidden", background: "url(/assets/photo-cta.jpg) center / cover no-repeat" }} />
        <SiteFooter kicker="Charlas en bares" title="Olive" legal="Olive© 2026 Todos los derechos reservados" handle="@oliveseries" />
      </div>
    </div>
  );
}
Object.assign(window, { Home });
