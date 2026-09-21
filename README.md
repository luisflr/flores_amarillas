# flores_amarillas# 🌷 Flores Amarillas

Tarjeta de regalo digital, interactiva y responsiva, inspirada en la tradición del **21 de septiembre** ("Flores Amarillas"). Un ramo de tulipanes en SVG que florece con una animación escalonada, sobre una estética cálida y primaveral.

> **Demo:** https://TU-SITIO.netlify.app _(reemplaza con tu URL de Netlify)_

---

## ✨ Características

- **Ramo de tulipanes en SVG** con animación de florecimiento: los tallos se dibujan, las hojas se despliegan y cada flor abre pétalo por pétalo de forma secuencial.
- **Botón "Volver a florecer"** que reinicia la animación cuando quieras.
- **Diseño responsivo:** hero de dos columnas en escritorio y tarjeta apilada en móvil.
- **Dedicatoria personalizable** que se guarda en el navegador (`localStorage`) y persiste al recargar.
- **Partículas** (pétalos y destellos) flotando suavemente de fondo.
- **Accesible:** respeta `prefers-reduced-motion` y tiene foco visible por teclado.

---

## 🛠️ Stack

- **HTML5**
- **CSS con [Tailwind CSS v4](https://tailwindcss.com/)** (configuración _CSS-first_ con `@theme`)
- **JavaScript vanilla** (sin frameworks)
- **SVG** dibujado a mano para el ramo

Sin dependencias de runtime: la única herramienta de build es el CLI de Tailwind.

---

## 📁 Estructura

```
.
├─ netlify.toml        # Configuración de despliegue
├─ .gitignore
├─ package.json        # Scripts de build de Tailwind
└─ src/
   ├─ index.html       # Estructura y contenido (SVG inline)
   ├─ input.css        # Tailwind + tema (@theme) + animaciones  ← editas aquí
   ├─ output.css       # CSS compilado por Tailwind              ← NO editar
   ├─ flores.js        # Interacciones (reinicio, partículas, dedicatoria)
   └─ bouquet.svg      # Ramo estático reutilizable (asset)
```

---

## 🚀 Requisitos

- **Node.js 20 o superior** (necesario para Tailwind v4).

---

## 💻 Desarrollo local

```bash
# 1. Instala las dependencias
npm install

# 2. Compila el CSS y quédate observando cambios
npm run dev

# 3. En otra terminal, sirve la carpeta por HTTP
npx serve src
```

Abre la URL que te da `serve` (p. ej. `http://localhost:3000`).

> También puedes abrir `src/index.html` directo con doble clic: como el `output.css` ya viene compilado, funciona sin build. Solo necesitas Node/Tailwind cuando edites clases.

---

## 📦 Build de producción

```bash
npm run build   # genera src/output.css minificado
```

---

## ☁️ Despliegue en Netlify

El repo incluye `netlify.toml`, así que Netlify detecta la configuración automáticamente:

| Ajuste            | Valor           |
| ----------------- | --------------- |
| Build command     | `npm run build` |
| Publish directory | `src`           |
| Base directory    | _(vacío)_       |
| Node version      | `20`            |

Con GitHub conectado, cada `git push` a `main` redespliega el sitio solo.

---

## 🎨 Personalización

- **Colores y tipografías:** bloque `@theme` en `src/input.css`. Cada `--color-*` genera utilidades (`bg-*`, `text-*`, `border-*`) y cada `--font-*` genera `font-*`.
- **Mensaje y dedicatoria:** textos en `#quoteText` y `#complementaryMsg` dentro de `src/index.html`.
- **El ramo:** en el `<svg id="bouquet">`, cada tulipán son dos grupos anidados — el externo (`transform`) posiciona y el interno `.tulip-grow` anima el crecimiento — con 3 `.petal` cuyo ángulo de apertura vive en la variable `--flare`.
- **Ritmo de la animación:** el `animation-delay` inline de cada capa del SVG y las duraciones en el bloque `#bouquet.bloom …` de `input.css`.

---

## ♿ Accesibilidad

Si el sistema del usuario tiene activado _reduce motion_, el ramo se muestra ya florecido y sin animaciones ni partículas. Es intencional.

---

## 📝 Notas

- No se incluye reproductor de música: la canción asociada tiene derechos de autor y alojarla implicaría distribución pública sin licencia. Si quieres audio, usa un _embed_ oficial (YouTube/Spotify) o un archivo con licencia propia.

---

## 📄 Licencia

Código bajo licencia [MIT](LICENSE) — úsalo y modifícalo libremente. La tradición y las referencias culturales pertenecen a sus respectivos autores.
