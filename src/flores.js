/* Flores Amarillas — interacciones
   - Reinicio del florecimiento (Volver a florecer)
   - Partículas (pétalos flotando)
   - Reproductor: simulación visual (ondas), sin audio embebido
   - Dedicatoria personalizable con persistencia (localStorage)
*/
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Florecimiento / reinicio ---------- */
  const bouquet = $("#bouquet");
  function bloom() {
    bouquet.classList.remove("bloom");
    // Forzar reflow para reiniciar la animación. OJO: en un <svg> (SVGElement)
    // offsetWidth es undefined y NO dispara reflow; getBoundingClientRect() sí.
    bouquet.getBoundingClientRect();
    bouquet.classList.add("bloom");
  }
  $("#reBloomBtn").addEventListener("click", bloom);

  /* ---------- Partículas (pétalos flotando) ---------- */
  const layer = $("#particles");
  if (!reduce) {
    const N = window.innerWidth < 640 ? 12 : 20;
    for (let i = 0; i < N; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      const size = 6 + Math.random() * 12;
      const isSparkle = Math.random() < 0.35;
      p.style.left = Math.random() * 100 + "%";
      p.style.width = (isSparkle ? size * 0.35 : size) + "px";
      p.style.height = (isSparkle ? size * 0.35 : size * 0.7) + "px";
      p.style.background = isSparkle
        ? "radial-gradient(circle, #FDE9A0, rgba(253,233,160,0))"
        : "linear-gradient(180deg,#FBD24E,#EBA400)";
      p.style.borderRadius = isSparkle
        ? "50%"
        : "50% 50% 50% 50% / 60% 60% 40% 40%";
      p.style.setProperty("--drift", Math.random() * 80 - 40 + "px");
      const dur = 12 + Math.random() * 12;
      p.style.animation = `drift ${dur}s linear infinite`;
      p.style.animationDelay = -Math.random() * dur + "s";
      p.style.filter = "blur(.2px)";
      layer.appendChild(p);
    }
  }
})();
