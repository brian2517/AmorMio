/* ============================================================
   CONFIGURACIÓN — edita solo esta sección
   ============================================================ */
const CONFIG = {
  apodo: "Mi princesa",

  // Música (YouTube). Para cambiar una canción, copia el código que va después de "watch?v=" en el enlace del video.
  musica: [
    { id: "pqJBXjzBr_U", titulo: "Yo Más Te Adoro" },
    { id: "BERCMdeS7uw", titulo: "Cuánto Me Duele" },
    { id: "UKbhDRxm3Vc", titulo: "Mi Nuevo Vicio (con Paulina Rubio)" },
    { id: "1oeD2m2UQAI", titulo: "Besos En Guerra (con Juanes)" },
    { id: "TYrcdhots80", titulo: "A Dónde Vamos" },
    { id: "_gm5piKnrS4", titulo: "Cómo Te Atreves" }
  ],
  volumen: 70,
  tituloGalaxia: "Tatiana, eres mi universo",
  palabrasGalaxia: ["Te amo", "Mi princesa", "Mi pilar", "Infinito", "Mi vida", "Mi cielo", "Gracias", "Siempre"],
  mes: 10,
  dia: 14,

  // La carta se puede leer desde esta fecha (año-mes-día)
  cartaDesde: "2026-10-14",

  // Carta final (cada elemento es un párrafo)
  carta: {
    saludo: "Querida Tatiana:",
    parrafos: [
      "Hoy cumples años y quiero que este día te recuerde lo importante que eres para mí.",
      "Estos últimos meses has sido un amor incondicional. Has estado a mi lado en los días buenos y también en los que no lo fueron tanto, sin pedir nada a cambio, con paciencia, con ternura y con esa sonrisa que me arregla cualquier día.",
      "Contigo he vivido experiencias que guardo como tesoros. Momentos sencillos que se volvieron mis favoritos solo porque estabas tú. Te has convertido en mi pilar: cuando me tambaleo, tú me sostienes, y cuando dudo, tú crees en mí.",
      "Gracias por quedarte, por entenderme, por cuidarme y por enseñarme lo bonito que es querer y ser querido de verdad. Gracias por cada abrazo, cada palabra y cada detalle que haces sin darte cuenta.",
      "Quiero que nunca lo olvides: te amo, te admiro y agradezco cada día que la vida te puso en mi camino. Todo lo que viene, quiero vivirlo contigo."
    ],
    cierre: "Feliz cumpleaños, mi princesa. Con todo mi amor,",
    firma: "Brian"
  },

  // Mensaje del día según los días que faltan (1 = mañana es el cumpleaños)
  mensajesDiarios: {
    9: "Empieza la cuenta regresiva. Cada día que pasa estoy más emocionado por tu cumpleaños.",
    8: "Hoy me acordé de lo mucho que me gusta verte sonreír.",
    7: "Una semana para tu día. Ya tengo sorpresas pensadas.",
    6: "Tu forma de ser hace que todo se sienta más fácil y más bonito.",
    5: "Cinco días. Ya casi puedo ver tu cara cuando abras tu regalo.",
    4: "Gracias por cada momento que hemos compartido.",
    3: "Tres días. Prepárate, porque este cumple va a ser inolvidable.",
    2: "Pasado mañana es tu día y ya no puedo esconder la emoción.",
    1: "Mañana es tu cumpleaños. Duerme bonito, que te espera algo especial."
  },
  mensajePorDefecto: "Cada día que pasa estamos más cerca de celebrarte como te mereces.",

  // Frases que salen al tocar la cuenta regresiva
  frases: [
    "Si tuviera que elegir otra vez, te elegiría en todas las versiones de mi vida.",
    "Contigo aprendí que el hogar no es un lugar, es una persona.",
    "Tu risa es mi canción favorita y nunca me canso de ponerla en repetición.",
    "Eres mi casualidad más bonita y mi decisión más segura.",
    "No necesito un cielo lleno de estrellas si te tengo a ti mirándome.",
    "Cuando dices mi nombre, todo el ruido del mundo se apaga.",
    "Me gustas en rosa, en azul, despeinada, dormida y de todas las formas posibles.",
    "Gracias por quedarte, por entenderme y por hacerme mejor persona.",
    "Mi lugar favorito del mundo es justo a tu lado.",
    "Has sido mi pilar estos meses, y yo quiero ser el tuyo siempre.",
    "Amor, cielo, vida: ninguna palabra alcanza, pero todas son para ti.",
    "Que nunca te falten motivos para sonreír, y si te faltan, aquí estoy yo."
  ],

  // Poemas escritos para ella. Usa \n para saltar de línea.
  poemas: [
    { titulo: "Atardecer", texto: "Si el cielo se pinta de rosa\ny se viste de azul al caer,\nes porque aprendió de tus ojos\ncómo se debe querer." },
    { titulo: "Catorce de octubre", texto: "Un catorce de octubre\nel mundo se puso a brillar,\nnació la sonrisa más linda\nque me iba a enamorar." },
    { titulo: "Contigo", texto: "Contigo los días son cortos,\nlas noches no quieren terminar,\ny cada vez que te miro\nme vuelvo a enamorar." },
    { titulo: "Promesa", texto: "No te prometo un camino sin piedras,\nte prometo tomarte la mano,\nreír contigo en los días buenos\ny abrazarte en los días malos." }
  ],

  // Línea de tiempo de Recuerdos: capítulos con sus fotos { src, texto }
  historia: [
  {
    "titulo": "Donde todo empezó",
    "texto": "La niña de sonrisa traviesa que ya prometía robarse corazones.",
    "fotos": [
      {
        "src": "fotos/historia01.jpg",
        "texto": "Diciembre de 2008, con sombrero y todo"
      },
      {
        "src": "fotos/historia02.jpg",
        "texto": "Esa sonrisa ya era peligrosa"
      },
      {
        "src": "fotos/historia03.jpg",
        "texto": "Navidad de 2008, reina del tronco"
      },
      {
        "src": "fotos/historia04.jpg",
        "texto": "Gorritos tejidos y piquitos"
      }
    ]
  },
  {
    "titulo": "Creciendo",
    "texto": "Viajes, aventuras y una personalidad que ya brillaba.",
    "fotos": [
      {
        "src": "fotos/historia05.jpg",
        "texto": "Mirando el mar desde lo alto"
      },
      {
        "src": "fotos/historia06.jpg",
        "texto": "Paseo de vestido blanco"
      },
      {
        "src": "fotos/historia07.jpg",
        "texto": "Con su mamá, época de brackets"
      },
      {
        "src": "fotos/historia08.jpg",
        "texto": "Orgullo de traje típico"
      }
    ]
  },
  {
    "titulo": "Floreciendo",
    "texto": "Cada vez más linda, más segura y más tú.",
    "fotos": [
      {
        "src": "fotos/historia09.jpg",
        "texto": "Modo panda activado"
      },
      {
        "src": "fotos/historia10.jpg",
        "texto": "Encaje y sonrisa"
      },
      {
        "src": "fotos/historia11.jpg",
        "texto": "Luz de tarde"
      },
      {
        "src": "fotos/historia12.jpg",
        "texto": "Caminos del campo"
      },
      {
        "src": "fotos/historia13.jpg",
        "texto": "Lista para despegar"
      }
    ]
  },
  {
    "titulo": "Hoy, mi princesa",
    "texto": "La mujer increíble que tengo la suerte de amar.",
    "fotos": [
      {
        "src": "fotos/foto2.jpg",
        "texto": "Volando alto, como siempre"
      },
      {
        "src": "fotos/foto3.jpg",
        "texto": "Esa mirada que me desarma"
      },
      {
        "src": "fotos/foto4.jpg",
        "texto": "Mil caras y todas me encantan"
      },
      {
        "src": "fotos/foto5.jpg",
        "texto": "Suave como tu forma de querer"
      },
      {
        "src": "fotos/foto1.jpg",
        "texto": "Tú brillando en cualquier lugar"
      },
      {
        "src": "fotos/foto6.jpg",
        "texto": "Ese beso es para mí"
      },
      {
        "src": "fotos/foto7.jpg",
        "texto": "Tu estilo, tu esencia"
      },
      {
        "src": "fotos/foto8.jpg",
        "texto": "Mi persona favorita"
      }
    ]
  }
],

  // Videos: súbelos a una carpeta "videos" y agrégalos así:
  // { src: "videos/1.mp4", texto: "Nuestro primer viaje" }
  videos: []
};

/* ============================================================
   LÓGICA
   ============================================================ */
const $ = (id) => document.getElementById(id);
const pad = (n) => String(n).padStart(2, "0");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const HEART = '<svg viewBox="0 0 100 92"><use href="#corazon" fill="currentColor"/></svg>';
let offset = 0; // pruebas: offset = new Date("2026-10-14T10:00") - new Date()
const ahora = () => new Date(Date.now() + offset);

function objetivo(now) {
  const y = now.getFullYear();
  const fin = new Date(y, CONFIG.mes - 1, CONFIG.dia + 1);
  return now >= fin ? new Date(y + 1, CONFIG.mes - 1, CONFIG.dia) : new Date(y, CONFIG.mes - 1, CONFIG.dia);
}
const esHoy = (n) => n.getMonth() === CONFIG.mes - 1 && n.getDate() === CONFIG.dia;

/* ---------- Corazones de fondo ---------- */
(function () {
  const box = $("floatLayer");
  const colores = ["#f6b8cc", "#bfe0f7", "#f9d3e1", "#a9d2f2"];
  for (let i = 0; i < 16; i++) {
    const h = document.createElement("span");
    h.className = "float-heart";
    h.innerHTML = HEART;
    const size = 12 + Math.random() * 18;
    h.style.width = size + "px";
    h.style.left = Math.random() * 100 + "%";
    h.style.setProperty("--y", Math.round(Math.random() * 100));
    h.style.color = colores[i % colores.length];
    h.style.animationDuration = 12 + Math.random() * 12 + "s";
    h.style.animationDelay = Math.random() * 12 + "s";
    box.appendChild(h);
  }
})();

/* ---------- Cuenta regresiva ---------- */
const previos = {};
function setNum(id, v) { const t = pad(v); if (previos[id] !== t) { $(id).textContent = t; previos[id] = t; } }
let fiesta = null;

function actualizar() {
  const now = ahora();
  const hoy = esHoy(now);
  if (hoy !== fiesta) { fiesta = hoy; aplicarModo(hoy); }
  if (hoy) { ["d", "h", "m", "s"].forEach((id) => setNum(id, 0)); return; }
  const meta = objetivo(now);
  const t = Math.max(0, Math.floor((meta - now) / 1000));
  setNum("d", Math.floor(t / 86400));
  setNum("h", Math.floor((t % 86400) / 3600));
  setNum("m", Math.floor((t % 3600) / 60));
  setNum("s", t % 60);
  const diasCal = Math.round((new Date(meta.getFullYear(), meta.getMonth(), meta.getDate()) - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 86400000);
  $("daily").textContent = CONFIG.mensajesDiarios[diasCal] || CONFIG.mensajePorDefecto;
}
function aplicarModo(hoy) {
  $("kicker").textContent = hoy ? "Hoy es 14 de octubre" : "Cuenta regresiva para tu día";
  $("heroTitle").textContent = hoy ? "¡Feliz cumpleaños!" : "Falta muy poquito para celebrarte";
  $("tapText").textContent = hoy ? "Abre tu sorpresa de cumpleaños" : "Tócame, tengo algo para ti";
  $("dailyBox").hidden = hoy;
  if (hoy) { lanzarConfeti(); setTimeout(lanzarConfeti, 1600); }
}

/* ---------- Frases y poemas ---------- */
let mazo = [], pos = 0;
function barajar() {
  mazo = CONFIG.frases.map((t) => ({ tipo: "Frase para ti", texto: t }))
    .concat(CONFIG.poemas.map((p) => ({ tipo: "Poema · " + p.titulo, texto: p.texto })));
  for (let i = mazo.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [mazo[i], mazo[j]] = [mazo[j], mazo[i]]; }
  pos = 0;
}
function pintarNota() {
  const it = mazo[pos];
  $("noteType").textContent = it.tipo;
  const el = $("noteText");
  el.textContent = it.texto;
  el.classList.remove("swap"); void el.offsetWidth; el.classList.add("swap");
  $("noteCount").textContent = (pos + 1) + " de " + mazo.length;
}
$("countdown").addEventListener("click", (e) => {
  if (fiesta) { abrirGalaxia(); return; }
  barajar(); pintarNota();
  $("overlay").hidden = false;
  explotar(e.clientX || innerWidth / 2, e.clientY || innerHeight / 2);
  $("btnNext").focus();
});
$("btnNext").addEventListener("click", (e) => {
  pos = (pos + 1) % mazo.length; pintarNota();
  const r = e.currentTarget.getBoundingClientRect();
  explotar(r.left + r.width / 2, r.top);
});
function cerrarNota() { $("overlay").hidden = true; $("countdown").focus(); }
$("btnClose").addEventListener("click", cerrarNota);
$("overlay").addEventListener("click", (e) => { if (e.target === $("overlay")) cerrarNota(); });

function explotar(x, y) {
  if (reduce) return;
  const colores = ["#c9567f", "#3f7fb0", "#f6b8cc", "#a9d2f2"];
  for (let i = 0; i < 14; i++) {
    const s = document.createElement("span");
    s.className = "burst";
    s.innerHTML = HEART;
    const ang = (Math.PI * 2 * i) / 14, dist = 60 + Math.random() * 70;
    s.style.left = x + "px"; s.style.top = y + "px";
    s.style.color = colores[i % colores.length];
    s.style.setProperty("--dx", Math.cos(ang) * dist + "px");
    s.style.setProperty("--dy", Math.sin(ang) * dist + "px");
    s.style.setProperty("--rot", (Math.random() * 60 - 30) + "deg");
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 950);
  }
}

/* ---------- Recuerdos ---------- */
const todas = [];
function cargarRecuerdos() {
  CONFIG.historia.forEach((cap, ci) => {
    const art = document.createElement("article");
    art.className = "chapter";
    const head = document.createElement("div");
    head.className = "chapter-head";
    head.innerHTML = '<span class="chapter-num">' + pad(ci + 1) + '</span><div><h3></h3><p></p></div>';
    head.querySelector("h3").textContent = cap.titulo;
    head.querySelector("p").textContent = cap.texto;
    const grid = document.createElement("div");
    grid.className = "polaroids";
    cap.fotos.forEach((f) => {
      const idx = todas.push(f) - 1;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "polaroid";
      b.setAttribute("aria-label", "Ver foto: " + f.texto);
      b.innerHTML = '<i class="tape" aria-hidden="true"></i>';
      const img = document.createElement("img");
      img.src = f.src; img.alt = f.texto; img.loading = "lazy";
      const cap2 = document.createElement("span");
      cap2.textContent = f.texto;
      b.append(img, cap2);
      b.addEventListener("click", () => abrirFoto(idx));
      grid.appendChild(b);
    });
    art.append(head, grid);
    $("timeline").appendChild(art);
  });

  if (CONFIG.videos.length) {
    $("videosBlock").hidden = false;
    CONFIG.videos.forEach((v) => {
      const fig = document.createElement("figure");
      fig.className = "video-card";
      const vid = document.createElement("video");
      vid.src = v.src; vid.controls = true; vid.playsInline = true; vid.preload = "metadata";
      const c = document.createElement("figcaption");
      c.textContent = v.texto || "";
      fig.append(vid, c);
      $("videos").appendChild(fig);
    });
  }
}
let fotoActual = 0;
function abrirFoto(i) {
  fotoActual = (i + todas.length) % todas.length;
  const f = todas[fotoActual];
  $("lbImg").src = f.src; $("lbImg").alt = f.texto; $("lbText").textContent = f.texto;
  $("lightbox").hidden = false;
}
function cerrarFoto() { $("lightbox").hidden = true; }
$("lbPrev").addEventListener("click", () => abrirFoto(fotoActual - 1));
$("lbNext").addEventListener("click", () => abrirFoto(fotoActual + 1));
$("lbClose").addEventListener("click", cerrarFoto);
$("lightbox").addEventListener("click", (e) => { if (e.target === $("lightbox")) cerrarFoto(); });
addEventListener("keydown", (e) => {
  if (e.key === "Escape") { cerrarFoto(); if (!$("overlay").hidden) cerrarNota(); if (!$("galaxy").hidden) cerrarGalaxia(); }
  if (!$("lightbox").hidden && e.key === "ArrowRight") abrirFoto(fotoActual + 1);
  if (!$("lightbox").hidden && e.key === "ArrowLeft") abrirFoto(fotoActual - 1);
});

/* ---------- Carta ---------- */
const verCarta = location.hash === "#vercarta"; // vista previa solo para ti
let cartaLista = false;
function cartaDisponible() { return verCarta || ahora() >= new Date(CONFIG.cartaDesde + "T00:00:00"); }
function revisarCarta() {
  if (cartaLista) return;
  if (cartaDisponible()) {
    cartaLista = true;
    cargarCarta();
    $("cartaSellada").hidden = true;
    $("cartaAbierta").hidden = false;
    necesita = true;
    return;
  }
  const t = Math.max(0, Math.floor((new Date(CONFIG.cartaDesde + "T00:00:00") - ahora()) / 1000));
  const d = Math.floor(t / 86400);
  $("cartaFalta").textContent = "Se abre en " + (d ? d + (d === 1 ? " día, " : " días, ") : "") +
    pad(Math.floor((t % 86400) / 3600)) + ":" + pad(Math.floor((t % 3600) / 60)) + ":" + pad(t % 60);
}
function cargarCarta() {
  $("cartaSaludo").textContent = CONFIG.carta.saludo;
  CONFIG.carta.parrafos.forEach((t) => { const p = document.createElement("p"); p.textContent = t; $("cartaCuerpo").appendChild(p); });
  $("cartaCierre").textContent = CONFIG.carta.cierre;
  $("cartaFirma").textContent = CONFIG.carta.firma;
}


/* ---------- Árbol de corazones ---------- */
function crearArbol() {
  const NS = "http://www.w3.org/2000/svg";
  const canopy = $("canopy"), ground = $("ground");
  const colores = ["#f6b8cc", "#f08fb1", "#c9567f", "#bfe0f7", "#8ec3ea", "#fde3ec", "#e7779f", "#a9d2f2"];
  const dentro = (x, y) => Math.pow(x * x + y * y - 1, 3) - x * x * y * y * y <= 0;
  const hojas = [];
  let intentos = 0;
  while (hojas.length < 170 && intentos < 6000) {
    intentos++;
    const x = Math.random() * 2.4 - 1.2, y = Math.random() * 2.3 - 1.0;
    if (dentro(x, y)) hojas.push([x, y]);
  }
  hojas.sort((a, b) => b[1] - a[1]);
  hojas.forEach(([x, y], i) => {
    const size = 13 + Math.random() * 13;
    const u = document.createElementNS(NS, "use");
    u.setAttribute("href", "#corazon");
    u.setAttribute("x", (150 + x * 108 - size / 2).toFixed(1));
    u.setAttribute("y", (132 - y * 86 - size / 2).toFixed(1));
    u.setAttribute("width", size.toFixed(1));
    u.setAttribute("height", (size * 0.92).toFixed(1));
    u.setAttribute("fill", colores[i % colores.length]);
    u.setAttribute("class", "leaf");
    u.setAttribute("transform", "rotate(" + (Math.random() * 50 - 25).toFixed(0) + " " + (150 + x * 108).toFixed(1) + " " + (132 - y * 86).toFixed(1) + ")");
    u.style.animationDelay = (i * 0.008).toFixed(3) + "s";
    canopy.appendChild(u);
  });
  for (let i = 0; i < 16; i++) {
    const size = 7 + Math.random() * 7;
    const u = document.createElementNS(NS, "use");
    u.setAttribute("href", "#corazon");
    u.setAttribute("x", (40 + Math.random() * 220).toFixed(1));
    u.setAttribute("y", (309 + Math.random() * 12 - size / 2).toFixed(1));
    u.setAttribute("width", size.toFixed(1));
    u.setAttribute("height", (size * 0.92).toFixed(1));
    u.setAttribute("fill", colores[(i * 3) % colores.length]);
    ground.appendChild(u);
  }
  if (reduce) return;
  const stage = $("treeStage");
  for (let i = 0; i < 10; i++) {
    const f = document.createElement("span");
    f.className = "fall";
    f.innerHTML = HEART;
    f.style.color = colores[(i * 2) % colores.length];
    f.style.left = (18 + Math.random() * 64) + "%";
    f.style.width = (10 + Math.random() * 8) + "px";
    f.style.setProperty("--sx", (Math.random() * 40 - 20) + "px");
    f.style.setProperty("--dy", (stage.offsetWidth * 0.62) + "px");
    f.style.animationDuration = (5 + Math.random() * 5) + "s";
    f.style.animationDelay = (Math.random() * 6) + "s";
    stage.appendChild(f);
  }
}

/* ---------- Galaxia sorpresa ---------- */
const gal = { abierta: false, parts: [], orbs: [], t0: 0, frase: -1 };
function prepararGalaxia() {
  $("gTitle").textContent = CONFIG.tituloGalaxia;
  const fotos = [];
  CONFIG.historia.slice().reverse().forEach((c) => c.fotos.forEach((f) => fotos.push(f)));
  const elegidas = fotos.slice(0, 10);
  elegidas.forEach((f, i) => {
    const img = document.createElement("img");
    img.className = "orb orb-photo";
    img.src = f.src; img.alt = "";
    $("orbit").appendChild(img);
    gal.orbs.push({ el: img, tipo: "foto", a: (i / elegidas.length) * Math.PI * 2 });
  });
  CONFIG.palabrasGalaxia.forEach((w, i) => {
    const sp = document.createElement("span");
    sp.className = "orb orb-word" + (i % 2 ? " blue" : "");
    sp.textContent = w;
    $("orbit").appendChild(sp);
    gal.orbs.push({ el: sp, tipo: "palabra", a: (i / CONFIG.palabrasGalaxia.length) * Math.PI * 2 + 0.3 });
  });
}
function crearParticulas(w, h) {
  const n = w < 600 ? 900 : 1700;
  const R = Math.max(w, h) * 0.62;
  const colores = ["#f6b8cc", "#bfe0f7", "#ffffff", "#f08fb1", "#8ec3ea", "#fde3ec"];
  gal.parts = [];
  for (let i = 0; i < n; i++) {
    const r = Math.pow(Math.random(), 0.7) * R + 30;
    const brazo = i % 3;
    gal.parts.push({
      r, a: brazo * (Math.PI * 2 / 3) + r * 0.012 + (Math.random() - 0.5) * 0.6,
      s: Math.random() * 1.8 + 0.4, c: colores[i % colores.length], o: 0.35 + Math.random() * 0.65
    });
  }
}
function abrirGalaxia() {
  const c = $("galaxyCanvas");
  $("galaxy").hidden = false;
  document.body.style.overflow = "hidden";
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  c.width = innerWidth * dpr; c.height = innerHeight * dpr;
  c.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
  crearParticulas(innerWidth, innerHeight);
  otraFraseGalaxia();
  gal.abierta = true;
  gal.t0 = performance.now();
  requestAnimationFrame(pasoGalaxia);
  lanzarConfeti();
  $("gHeart").focus();
}
function cerrarGalaxia() {
  gal.abierta = false;
  $("galaxy").hidden = true;
  document.body.style.overflow = "";
  $("countdown").focus();
}
function otraFraseGalaxia() {
  const todasFrases = CONFIG.frases.concat(CONFIG.poemas.map((p) => p.texto));
  let i;
  do { i = Math.floor(Math.random() * todasFrases.length); } while (i === gal.frase && todasFrases.length > 1);
  gal.frase = i;
  const q = $("gQuote");
  q.textContent = todasFrases[i];
  q.classList.remove("swap"); void q.offsetWidth; q.classList.add("swap");
}
function pasoGalaxia(now) {
  if (!gal.abierta) return;
  const w = innerWidth, h = innerHeight, cx = w / 2, cy = h / 2;
  const t = reduce ? 0 : (now - gal.t0) / 1000;
  const ctx2 = $("galaxyCanvas").getContext("2d");
  ctx2.clearRect(0, 0, w, h);
  const brillo = ctx2.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.35);
  brillo.addColorStop(0, "rgba(253, 227, 236, 0.55)");
  brillo.addColorStop(0.4, "rgba(246, 184, 204, 0.18)");
  brillo.addColorStop(1, "rgba(20, 17, 41, 0)");
  ctx2.fillStyle = brillo;
  ctx2.fillRect(0, 0, w, h);
  const tilt = 0.42;
  gal.parts.forEach((p) => {
    const a = p.a + t * (18 / (p.r + 60));
    const x = cx + Math.cos(a) * p.r;
    const y = cy + Math.sin(a) * p.r * tilt;
    if (x < -5 || x > w + 5 || y < -5 || y > h + 5) return;
    ctx2.globalAlpha = p.o * (0.75 + 0.25 * Math.sin(t * 2 + p.r));
    ctx2.fillStyle = p.c;
    ctx2.beginPath();
    ctx2.arc(x, y, p.s, 0, Math.PI * 2);
    ctx2.fill();
  });
  ctx2.globalAlpha = 1;
  const base = Math.min(w, h * 1.4);
  const ph = w < 600 ? 58 : 84;
  gal.orbs.forEach((o) => {
    const foto = o.tipo === "foto";
    const rx = foto ? base * 0.42 : base * 0.27;
    const ry = rx * (foto ? 0.5 : 0.45);
    const a = o.a + t * (foto ? 0.22 : -0.3);
    const prof = (Math.sin(a) + 1) / 2;
    const esc = 0.6 + prof * 0.55;
    const x = cx + Math.cos(a) * rx;
    const y = cy + Math.sin(a) * ry;
    const ancho = foto ? ph : o.el.offsetWidth;
    const alto = foto ? ph : o.el.offsetHeight;
    if (foto) o.el.style.setProperty("--ph", ph + "px");
    o.el.style.transform = "translate(" + (x - ancho / 2).toFixed(1) + "px," + (y - alto / 2).toFixed(1) + "px) scale(" + esc.toFixed(3) + ")";
    o.el.style.zIndex = prof > 0.5 ? 3 : 1;
    o.el.style.opacity = (0.45 + prof * 0.55).toFixed(2);
  });
  $("gHeart").style.zIndex = 2;
  requestAnimationFrame(pasoGalaxia);
}
$("gHeart").addEventListener("click", (e) => { otraFraseGalaxia(); const r = e.currentTarget.getBoundingClientRect(); explotar(r.left + r.width / 2, r.top + r.height / 2); });
$("gClose").addEventListener("click", cerrarGalaxia);


/* ---------- Música (YouTube) ---------- */
const PLAY_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';
const PAUSE_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
const mus = { player: null, listo: false, quiere: false, i: 0, sonando: false, fallos: 0, pausadaPorVideo: false };

function pintarMusica() {
  $("music").classList.toggle("playing", mus.sonando);
  $("mpPlay").innerHTML = mus.sonando ? PAUSE_ICON : PLAY_ICON;
  $("mpPlay").setAttribute("aria-label", mus.sonando ? "Pausar" : "Reproducir");
  $("mpTitle").textContent = "Morat · " + CONFIG.musica[mus.i].titulo;
  [...$("mpList").children].forEach((li, k) => li.firstChild.setAttribute("aria-current", k === mus.i ? "true" : "false"));
}
function armarLista() {
  CONFIG.musica.forEach((c, k) => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = (k + 1) + ". " + c.titulo;
    b.addEventListener("click", () => cancion(k, true));
    li.appendChild(b);
    $("mpList").appendChild(li);
  });
  pintarMusica();
}
function cancion(k, tocar) {
  mus.i = (k + CONFIG.musica.length) % CONFIG.musica.length;
  pintarMusica();
  if (!mus.listo) { mus.quiere = tocar; return; }
  if (tocar) mus.player.loadVideoById(CONFIG.musica[mus.i].id);
  else mus.player.cueVideoById(CONFIG.musica[mus.i].id);
}
function tocarMusica() {
  mus.quiere = true;
  if (mus.listo) mus.player.playVideo();
}
function pausarMusica() {
  mus.quiere = false;
  if (mus.listo) mus.player.pauseVideo();
}
function cargarYouTube() {
  window.onYouTubeIframeAPIReady = () => {
    mus.player = new YT.Player("ytPlayer", {
      width: "100%",
      height: "200",
      videoId: CONFIG.musica[0].id,
      playerVars: { playsinline: 1, rel: 0, modestbranding: 1 },
      events: {
        onReady: () => {
          mus.listo = true;
          mus.player.setVolume(CONFIG.volumen);
          if (mus.quiere) mus.player.playVideo();
        },
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.PLAYING) { mus.sonando = true; mus.fallos = 0; }
          else if (e.data === YT.PlayerState.PAUSED) mus.sonando = false;
          else if (e.data === YT.PlayerState.ENDED) { mus.sonando = false; cancion(mus.i + 1, true); }
          pintarMusica();
        },
        onError: () => {
          // Si un video no se deja reproducir fuera de YouTube, salta al siguiente
          if (++mus.fallos < CONFIG.musica.length) cancion(mus.i + 1, true);
        }
      }
    });
  };
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  tag.onerror = sinMusica;
  document.head.appendChild(tag);
  setTimeout(() => { if (!mus.listo && !window.YT) sinMusica(); }, 6000);
}
function sinMusica() {
  if (mus.listo) return;
  $("ytPlayer").innerHTML = '<div class="mp-off">La música se escucha en la página publicada en GitHub. Aquí, en la vista previa, no se puede cargar YouTube.</div>';
}
$("discBtn").addEventListener("click", () => {
  const abierto = $("music").classList.toggle("open");
  $("discBtn").setAttribute("aria-expanded", abierto ? "true" : "false");
});
$("mpPlay").addEventListener("click", () => (mus.sonando ? pausarMusica() : tocarMusica()));
$("mpPrev").addEventListener("click", () => cancion(mus.i - 1, true));
$("mpNext").addEventListener("click", () => cancion(mus.i + 1, true));
document.addEventListener("click", (e) => {
  if ($("music").classList.contains("open") && !$("music").contains(e.target)) {
    $("music").classList.remove("open");
    $("discBtn").setAttribute("aria-expanded", "false");
  }
});

/* Bienvenida: el primer toque abre la página y arranca la música */
$("wEnter").addEventListener("click", () => {
  tocarMusica();
  $("welcome").classList.add("out");
  setTimeout(() => { $("welcome").hidden = true; }, 750);
  $("countdown").focus({ preventScroll: true });
});

/* Si ella pone uno de los videos de Recuerdos, la música se pausa y luego vuelve */
document.addEventListener("play", (e) => {
  if (e.target.tagName === "VIDEO" && mus.sonando) { mus.pausadaPorVideo = true; pausarMusica(); }
}, true);
["pause", "ended"].forEach((ev) => document.addEventListener(ev, (e) => {
  if (e.target.tagName === "VIDEO" && mus.pausadaPorVideo) { mus.pausadaPorVideo = false; tocarMusica(); }
}, true));

/* ---------- Motor 3D del scroll ---------- */
const capas = [...document.querySelectorAll(".px")];
const navLinks = [...document.querySelectorAll(".nav a")];
const secciones = ["inicio", "recuerdos", "carta"].map((id) => $(id));
let polaroids = [];
let necesita = true;

function escena() {
  const vh = innerHeight;
  const sy = scrollY;

  // Parallax de nubes y globos
  capas.forEach((el) => {
    const r = el.parentElement.getBoundingClientRect();
    const centro = r.top + r.height / 2 - vh / 2;
    el.style.transform = "translate3d(0," + (centro * parseFloat(el.dataset.depth)).toFixed(1) + "px,0)";
  });

  // Árbol: gira suavemente en 3D al bajar
  $("tree3d").style.setProperty("--tr", Math.min(30, sy * 0.05).toFixed(1) + "deg");

  // Cuenta regresiva: los cuadros se inclinan al bajar
  const ux = Math.min(28, sy * 0.06);
  document.querySelectorAll(".unit").forEach((u) => u.style.setProperty("--ux", ux.toFixed(1) + "deg"));

  // Polaroids: giran en 3D según su posición en pantalla
  polaroids.forEach((p, i) => {
    const r = p.getBoundingClientRect();
    if (r.bottom < -100 || r.top > vh + 100) return;
    const prog = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / (vh / 2)));
    p.style.setProperty("--rx", (prog * 22).toFixed(1) + "deg");
    p.style.setProperty("--ry", (prog * (i % 2 ? -14 : 14)).toFixed(1) + "deg");
  });

  // Sobre: la solapa se abre al acercarse a la carta
  const env = $("envelope").getBoundingClientRect();
  const abrir = cartaLista ? Math.max(0, Math.min(1, (vh * 0.85 - env.top) / (vh * 0.45))) : 0;
  $("envelope").style.setProperty("--flap", (abrir * 178).toFixed(1) + "deg");
  const pr = $("paper").getBoundingClientRect();
  const papel = Math.max(0, Math.min(1, (vh - pr.top) / (vh * 0.6)));
  $("paper").style.setProperty("--px", ((1 - papel) * 24).toFixed(1) + "deg");

  // Menú activo
  let activa = "inicio";
  secciones.forEach((s) => { if (s.getBoundingClientRect().top < vh * 0.45) activa = s.id; });
  navLinks.forEach((a) => a.classList.toggle("active", a.dataset.nav === activa));
}

function bucle(t) {
  if (necesita) { escena(); necesita = false; }
  requestAnimationFrame(bucle);
}

/* ---------- Confeti pastel ---------- */
const canvas = $("confetti"), ctx = canvas.getContext("2d");
let piezas = [], animando = false;
function ajustarCanvas() { canvas.width = innerWidth; canvas.height = innerHeight; }
function lanzarConfeti() {
  const colores = ["#f6b8cc", "#bfe0f7", "#c9567f", "#3f7fb0", "#ffffff"];
  for (let i = 0; i < 150; i++) piezas.push({
    x: Math.random() * canvas.width, y: -20 - Math.random() * canvas.height * 0.5,
    w: 6 + Math.random() * 6, h: 8 + Math.random() * 8, vx: -1.5 + Math.random() * 3, vy: 2 + Math.random() * 3.5,
    r: Math.random() * Math.PI, vr: -0.2 + Math.random() * 0.4, c: colores[Math.floor(Math.random() * colores.length)]
  });
  if (!animando) { animando = true; requestAnimationFrame(paso); }
}
function paso() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  piezas.forEach((p) => {
    p.x += p.vx; p.y += p.vy; p.r += p.vr;
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
  });
  piezas = piezas.filter((p) => p.y < canvas.height + 30);
  if (piezas.length) requestAnimationFrame(paso); else { animando = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }
}

/* ---------- Inicio ---------- */
$("heroName").textContent = CONFIG.apodo;
crearArbol();
prepararGalaxia();
armarLista();
cargarYouTube();
cargarRecuerdos();
revisarCarta();
setInterval(revisarCarta, 1000);
polaroids = [...document.querySelectorAll(".polaroid")];
ajustarCanvas();
addEventListener("resize", () => { ajustarCanvas(); necesita = true; });
actualizar();
setInterval(actualizar, 1000);
if (!reduce) {
  addEventListener("scroll", () => { necesita = true; }, { passive: true });
  requestAnimationFrame(bucle);
} else if (cartaLista) {
  $("envelope").style.setProperty("--flap", "178deg");
}
if (verCarta) setTimeout(() => $("carta").scrollIntoView(), 300);
// Vista previa de la sorpresa: abre la página con #galaxia al final del enlace
if (location.hash === "#galaxia") abrirGalaxia();
if (location.hash === "#galaxia" || verCarta) $("welcome").hidden = true;
