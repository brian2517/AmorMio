/* ============================================================
   CONFIGURACIÓN — edita solo esta sección
   ============================================================ */
const CONFIG = {
  apodo: "Mi princesa",

  // Música (YouTube). Para cambiar una canción, copia el código que va después de "watch?v=" en el enlace del video.
  musica: [
    { id: "SWNaC628sd4", artista: "Manuel Lizarazo", titulo: "Ladrona" },
    { id: "hE8BLXk_5pc", artista: "Morat", titulo: "Mi Suerte" },
    { id: "ntdwWKaGaPQ", artista: "Jósean Log", titulo: "Beso" },
    { id: "WqLBq9Maz7c", artista: "Morat", titulo: "Primeras Veces" },
    { id: "SmF4wY7U7QE", artista: "Leo Rizzi", titulo: "Amapolas" },
    { id: "QCnXrfd40k0", artista: "Manuel Medrano", titulo: "Una y Otra Vez" },
    { id: "pqJBXjzBr_U", artista: "Morat", titulo: "Yo Más Te Adoro" },
    { id: "BERCMdeS7uw", artista: "Morat", titulo: "Cuánto Me Duele" },
    { id: "UKbhDRxm3Vc", artista: "Paulina Rubio y Morat", titulo: "Mi Nuevo Vicio" },
    { id: "1oeD2m2UQAI", artista: "Morat y Juanes", titulo: "Besos En Guerra" },
    { id: "TYrcdhots80", artista: "Morat", titulo: "A Dónde Vamos" },
    { id: "_gm5piKnrS4", artista: "Morat", titulo: "Cómo Te Atreves" }
  ],
  volumen: 70,

  // Una sorpresa por día. tipo: estrella, globos, avion, tarjeta (corazón con mensaje) o galaxia.
  sorpresas: [
    { fecha: "2026-10-06", tipo: "estrella", titulo: "Estrella fugaz",
      guia: "Hola, soy Pompón. Una estrella fugaz va a cruzar el cielo. ¡Atrápala con un toque!",
      mensaje: "Pedí un deseo por los dos: celebrar contigo este cumpleaños y muchísimos más. Ahora pide el tuyo." },
    { fecha: "2026-10-07", tipo: "globos", titulo: "Globos de frases",
      guia: "Cada globo guarda una frase para ti. ¡Revienta los 8!",
      frases: [
        "Me encanta cómo me miras cuando crees que no me doy cuenta.",
        "Eres mi lugar seguro.",
        "Tu risa me cambia el día, siempre.",
        "Contigo hasta lo simple se vuelve especial.",
        "Gracias por quererme bonito.",
        "Eres mi persona favorita en el mundo.",
        "Admiro lo fuerte y lo dulce que eres.",
        "Cada día te elijo otra vez."
      ],
      mensaje: "Ocho frases y todavía me quedan mil. Mañana te espera otra sorpresa." },
    { fecha: "2026-10-08", tipo: "avion", titulo: "Vuelo del amor",
      guia: "Guía el avioncito con el dedo y visita las 5 nubes. Cada una es un lugar al que quiero llevarte.",
      destinos: [
        { corto: "Un picnic", largo: "un picnic al atardecer, solo tú y yo" },
        { corto: "El mar", largo: "ver el mar juntos y quedarnos hasta que salgan las estrellas" },
        { corto: "Un concierto", largo: "un concierto de Morat para cantar a todo pulmón" },
        { corto: "Una cena", largo: "una cena bonita con velas y sin afán" },
        { corto: "Un viaje", largo: "un viaje a donde tú quieras, con la maleta llena de planes" }
      ],
      mensaje: "Ya tenemos la ruta. Lo que falta es vivirla juntos." },
    { fecha: "2026-10-09", tipo: "puzzle", titulo: "Rompecabezas",
      guia: "Arma tu foto: toca una pieza y luego otra para cambiarlas de lugar.",
      foto: "Esa mirada que me desarma",
      mensaje: "Así como esta foto, contigo todo encaja. Faltan 5 días." },
    { fecha: "2026-10-10", tipo: "memoria", titulo: "Memoria de parejas",
      guia: "Encuentra los 6 pares. Toca dos cartas para voltearlas.",
      mensaje: "Encontraste todos los pares... y yo encontré el mío en ti." },
    { fecha: "2026-10-11", tipo: "rasca", titulo: "Rasca y descubre",
      guia: "Raspa la tarjeta con el dedo para ver qué hay escondido.",
      premio: { titulo: "Vale por", texto: "Una cita sorpresa planeada por mí, el día que tú elijas." },
      mensaje: "Guárdalo bien: lo puedes cobrar cuando quieras." },
    { fecha: "2026-10-12", tipo: "sobres", titulo: "Ábrelo cuando…",
      guia: "Tres sobres para tres momentos. Abre el que necesites hoy; los otros quedan guardados aquí.",
      cartas: [
        { para: "estés triste", texto: "Si hoy estás triste, quiero que sepas que no estás sola. Respira, abrázate fuerte y piensa que yo estoy pensando en ti. Todo pasa, y yo me quedo. Eres más fuerte de lo que crees, y te amo también en tus días grises." },
        { para: "me extrañes", texto: "Si me extrañas, cierra los ojos y acuérdate de nuestro último abrazo. Seguro yo también te estoy extrañando. Escríbeme, llámame o pon una canción de Morat: ahí estoy yo, cantándote al oído." },
        { para: "necesites una sonrisa", texto: "Dato comprobado por mí: cada vez que sonríes, el mundo se pone más bonito. Ahora imagina que te estoy haciendo cosquillas... ¿ya sonreíste? Misión cumplida, mi princesa." }
      ],
      mensaje: "Estos sobres siempre van a estar aquí para cuando los necesites." },
    { fecha: "2026-10-13", tipo: "constelacion", titulo: "Constelación",
      guia: "Toca las estrellas en orden (o pasa el dedo por ellas) para dibujar una constelación.",
      mensaje: "Mañana es tu día, mi princesa. Duerme bonito, que te espera algo muy especial." },
    { fecha: "2026-10-14", tipo: "galaxia", titulo: "Tu cumpleaños",
      guia: "", mensaje: "" }
  ],
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
// Vista previa de un día: agrega #dia1 ... #dia9 al final del enlace
const mdia = location.hash.match(/^#dia(\d)$/);
if (mdia && CONFIG.sorpresas[+mdia[1] - 1]) offset = new Date(CONFIG.sorpresas[+mdia[1] - 1].fecha + "T12:00:00") - new Date();

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
  $("until").hidden = hoy;
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
  // Un corazón dorado por cada sorpresa completada
  dorados = SPOTS.map(([x, y], i) => {
    const u = document.createElementNS(NS, "use");
    u.setAttribute("href", "#corazon");
    u.setAttribute("x", (150 + x * 108 - 14).toFixed(1));
    u.setAttribute("y", (132 - y * 86 - 13).toFixed(1));
    u.setAttribute("width", "28");
    u.setAttribute("height", "26");
    u.setAttribute("fill", "#f2bd3f");
    u.setAttribute("stroke", "#ffffff");
    u.setAttribute("stroke-width", "5");
    u.setAttribute("class", "leaf gold-heart");
    u.style.display = "none";
    canopy.appendChild(u);
    return u;
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
  $("mpTitle").textContent = CONFIG.musica[mus.i].artista + " · " + CONFIG.musica[mus.i].titulo;
  [...$("mpList").children].forEach((li, k) => li.firstChild.setAttribute("aria-current", k === mus.i ? "true" : "false"));
}
function armarLista() {
  CONFIG.musica.forEach((c, k) => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = (k + 1) + ". " + c.titulo + " · " + c.artista;
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
  setTimeout(entrar, 1100);
});

/* Si ella pone uno de los videos de Recuerdos, la música se pausa y luego vuelve */
document.addEventListener("play", (e) => {
  if (e.target.tagName === "VIDEO" && mus.sonando) { mus.pausadaPorVideo = true; pausarMusica(); }
}, true);
["pause", "ended"].forEach((ev) => document.addEventListener(ev, (e) => {
  if (e.target.tagName === "VIDEO" && mus.pausadaPorVideo) { mus.pausadaPorVideo = false; tocarMusica(); }
}, true));


/* ---------- Sorpresas diarias ---------- */
const SPOTS = [[-0.6, 0.5], [0.6, 0.5], [0, 0.78], [-0.92, 0.1], [0.92, 0.1], [-0.38, -0.3], [0.38, -0.3], [0, -0.68], [0, 0.12]];
const DIAS_CORTOS = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const DIAS_LARGOS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const ICONOS = {
  hecho: '<svg viewBox="0 0 100 92" aria-hidden="true"><use href="#corazon" fill="#f2bd3f"/></svg>',
  abierta: '<svg viewBox="-6 -6 112 104" aria-hidden="true"><use href="#corazon" fill="none" stroke="#c9567f" stroke-width="8"/></svg>',
  bloqueada: '<svg viewBox="0 0 24 24" fill="none" stroke="#86758b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>'
};
const vistaPrevia = !!mdia;
let dorados = [];
let hechos = new Set();
try { hechos = new Set(JSON.parse(localStorage.getItem("amormio.hechos") || "[]")); } catch (e) { hechos = new Set(); }
let diaPintado = "";

function guardarHechos() {
  if (vistaPrevia) return; // las vistas previas no guardan progreso
  try { localStorage.setItem("amormio.hechos", JSON.stringify([...hechos])); } catch (e) {}
}
function hoyStr() { const n = ahora(); return n.getFullYear() + "-" + pad(n.getMonth() + 1) + "-" + pad(n.getDate()); }
function fechaDe(f) { return new Date(f + "T12:00:00"); }
function nombreFecha(f) { const d = fechaDe(f); return DIAS_LARGOS[d.getDay()] + " " + d.getDate() + " de " + MESES[d.getMonth()]; }

function pintarSorpresas() {
  diaPintado = hoyStr();
  const lista = CONFIG.sorpresas;
  const grid = $("daysGrid");
  grid.textContent = "";
  lista.forEach((s, i) => {
    const abierta = s.fecha <= diaPintado;
    const hecho = hechos.has(i);
    const esHoyS = s.fecha === diaPintado;
    const d = fechaDe(s.fecha);
    const b = document.createElement("button");
    b.type = "button";
    b.className = "day" + (hecho ? " done" : "") + (esHoyS ? " today" : "") + (!abierta ? " locked" : "");
    b.disabled = !abierta;
    const estado = hecho ? "Lista" : !abierta ? "Bloqueada" : esHoyS ? "Hoy" : "Pendiente";
    b.innerHTML = '<span class="d-num"></span><span class="d-date"></span><span class="d-name"></span><span class="d-ico"></span><span class="d-state"></span>';
    b.querySelector(".d-num").textContent = i + 1;
    b.querySelector(".d-date").textContent = DIAS_CORTOS[d.getDay()] + " " + d.getDate();
    b.querySelector(".d-name").textContent = abierta ? s.titulo : "Sorpresa";
    b.querySelector(".d-ico").innerHTML = hecho ? ICONOS.hecho : abierta ? ICONOS.abierta : ICONOS.bloqueada;
    b.querySelector(".d-state").textContent = estado;
    b.setAttribute("aria-label", "Sorpresa " + (i + 1) + ", " + nombreFecha(s.fecha) + ": " + (abierta ? s.titulo + ". " : "") + estado);
    b.addEventListener("click", () => abrirSorpresa(i));
    grid.appendChild(b);
  });
  const iHoy = lista.findIndex((s) => s.fecha === diaPintado);
  let sub;
  if (hechos.size >= lista.length) sub = "Completaste las 9. El árbol quedó lleno de corazones dorados.";
  else if (iHoy >= 0) sub = hechos.has(iHoy) ? "Ya abriste la de hoy. Mañana llega otra." : "Hoy toca: " + lista[iHoy].titulo + ".";
  else if (diaPintado < lista[0].fecha) sub = "Empiezan el " + nombreFecha(lista[0].fecha) + ".";
  else sub = "Puedes abrir las que te falten.";
  $("sorpSub").textContent = sub + " Cada una que completes le pone un corazón dorado a tu árbol.";
  $("goldCount").innerHTML = ICONOS.hecho;
  $("goldCount").append(" " + hechos.size + " de " + lista.length + " corazones dorados");
}
function pintarDorados() {
  dorados.forEach((u, i) => { u.style.display = hechos.has(i) ? "" : "none"; });
}
function marcarHecho(i) {
  if (hechos.has(i)) return;
  hechos.add(i);
  guardarHechos();
  pintarSorpresas();
  pintarDorados();
}

/* Escenario */
const escena_ = { i: -1, limpiar: null };
function abrirSorpresa(i) {
  const s = CONFIG.sorpresas[i];
  if (!s || s.fecha > hoyStr()) return;
  if (s.tipo === "galaxia") { marcarHecho(i); abrirGalaxia(); return; }
  escena_.i = i;
  const st = $("stage");
  st.dataset.tipo = s.tipo;
  st.hidden = false;
  document.body.style.overflow = "hidden";
  $("stKicker").textContent = "Sorpresa " + (i + 1) + " de " + CONFIG.sorpresas.length + " · " + nombreFecha(s.fecha);
  $("stTitle").textContent = s.titulo;
  $("stSay").textContent = s.guia || "";
  $("stPhrase").textContent = "";
  $("stMsg").textContent = "";
  $("stDone").hidden = true;
  $("stDone").textContent = hechos.has(i) ? "Volver a la página" : "Guardar mi corazón dorado";
  const arena = $("stArena");
  arena.textContent = "";
  requestAnimationFrame(() => {
    const juego = JUEGOS[s.tipo] || JUEGOS.tarjeta;
    escena_.limpiar = juego(arena, s, i) || null;
  });
  $("stClose").focus();
}
function cerrarSorpresa() {
  if (escena_.limpiar) escena_.limpiar();
  escena_.limpiar = null;
  $("stage").hidden = true;
  $("stArena").textContent = "";
  document.body.style.overflow = "";
}
function frase(t) {
  const el = $("stPhrase");
  el.textContent = t;
  el.classList.remove("swap"); void el.offsetWidth; el.classList.add("swap");
}
function terminar(texto) {
  const m = $("stMsg");
  m.textContent = texto;
  m.classList.remove("show"); void m.offsetWidth; m.classList.add("show");
  $("stDone").hidden = false;
  $("stDone").focus();
  if (!reduce) lanzarConfeti();
}
function centroDe(el) { const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }
$("stClose").addEventListener("click", cerrarSorpresa);
$("stDone").addEventListener("click", () => { marcarHecho(escena_.i); cerrarSorpresa(); });
addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("stage").hidden) cerrarSorpresa(); });

/* Al entrar: abre sola la sorpresa del día si todavía no la ha visto */
function entrar() {
  const i = CONFIG.sorpresas.findIndex((s) => s.fecha === hoyStr());
  if (i < 0 || hechos.has(i)) return;
  abrirSorpresa(i);
}
setInterval(() => { if (hoyStr() !== diaPintado) pintarSorpresas(); }, 30000);

const JUEGOS = {};

/* Día 1: estrella fugaz */
JUEGOS.estrella = (arena, s) => {
  for (let k = 0; k < 46; k++) {
    const d = document.createElement("span");
    d.className = "sky-dot";
    d.style.left = Math.random() * 100 + "%";
    d.style.top = Math.random() * 100 + "%";
    d.style.animationDelay = Math.random() * 3 + "s";
    arena.appendChild(d);
  }
  const est = document.createElement("button");
  est.type = "button";
  est.className = "shoot";
  est.setAttribute("aria-label", "Atrapar la estrella fugaz");
  est.innerHTML = '<svg viewBox="0 0 120 40" aria-hidden="true"><defs><linearGradient id="gEstela" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ffffff" stop-opacity="0"/><stop offset="1" stop-color="#ffffff" stop-opacity="0.95"/></linearGradient></defs><path d="M0 20 L92 15.5 L92 24.5 Z" fill="url(#gEstela)"/><polygon points="100,6 103.3,15.5 113.3,15.7 105.3,21.7 108.2,31.3 100,25.6 91.8,31.3 94.7,21.7 86.7,15.7 96.7,15.5" fill="#fff1b8" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  arena.appendChild(est);
  let raf = 0, atrapada = false, ciclo = -1, y0 = 0;
  const t0 = performance.now(), dur = 3600, pausa = 900;
  function paso(now) {
    if (atrapada) return;
    const w = arena.clientWidth, h = arena.clientHeight;
    const c = Math.floor((now - t0) / (dur + pausa));
    if (c !== ciclo) { ciclo = c; y0 = h * (0.08 + Math.random() * 0.4); }
    const p = ((now - t0) % (dur + pausa)) / dur;
    if (p > 1) { est.style.visibility = "hidden"; }
    else {
      est.style.visibility = "visible";
      const x = -160 + p * (w + 320);
      const y = y0 + p * Math.min(w * 0.35, h * 0.45);
      est.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) rotate(14deg)";
    }
    raf = requestAnimationFrame(paso);
  }
  if (reduce) est.style.transform = "translate(" + (arena.clientWidth / 2 - 65) + "px," + (arena.clientHeight * 0.3) + "px) rotate(14deg)";
  else raf = requestAnimationFrame(paso);
  est.addEventListener("click", () => {
    if (atrapada) return;
    atrapada = true;
    cancelAnimationFrame(raf);
    const [x, y] = centroDe(est);
    explotar(x, y);
    est.disabled = true;
    est.style.opacity = "0";
    $("stSay").textContent = "¡La atrapaste! Cierra los ojos y pide un deseo.";
    frase("Ya pasó una estrella, mi princesa.");
    terminar(s.mensaje);
  });
  return () => cancelAnimationFrame(raf);
};

/* Día 2: globos de frases */
JUEGOS.globos = (arena, s) => {
  const n = s.frases.length;
  const lugares = s.frases.map((_, k) => k).sort(() => Math.random() - 0.5);
  let vivos = n, raf = 0, ult = performance.now();
  const w0 = arena.clientWidth, h0 = arena.clientHeight;
  const gl = s.frases.map((f, k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "balloon";
    b.setAttribute("aria-label", "Reventar globo " + (k + 1));
    b.innerHTML = '<svg viewBox="0 0 60 130" aria-hidden="true"><use href="#globo" fill="url(#' + (k % 2 ? "gGloboAzul" : "gGloboRosa") + ')"/></svg>';
    const o = {
      el: b, f, vivo: true,
      x: 6 + (lugares[k] / Math.max(1, n - 1)) * Math.max(40, w0 - 70),
      y: reduce ? 20 + (k % 2) * 140 : h0 * 0.15 + (k / n) * h0 * 1.15,
      v: 36 + Math.random() * 30,
      fase: Math.random() * 6
    };
    b.addEventListener("click", () => reventar(o));
    arena.appendChild(b);
    return o;
  });
  function pintar(t) {
    gl.forEach((o) => {
      if (!o.vivo) return;
      const dx = reduce ? 0 : Math.sin(t * 1.3 + o.fase) * 12;
      o.el.style.transform = "translate(" + (o.x + dx).toFixed(1) + "px," + o.y.toFixed(1) + "px)";
    });
  }
  function paso(now) {
    const dt = Math.min(0.05, (now - ult) / 1000);
    ult = now;
    const h = arena.clientHeight;
    gl.forEach((o) => {
      if (!o.vivo) return;
      o.y -= o.v * dt;
      if (o.y < -150) o.y = h + 20;
    });
    pintar(now / 1000);
    raf = requestAnimationFrame(paso);
  }
  function reventar(o) {
    if (!o.vivo) return;
    o.vivo = false;
    const [x, y] = centroDe(o.el);
    explotar(x, y - 20);
    o.el.remove();
    vivos--;
    frase(o.f);
    $("stSay").textContent = vivos ? "¡Bien! Quedan " + vivos + (vivos === 1 ? " globo." : " globos.") : "¡Los reventaste todos!";
    if (!vivos) { cancelAnimationFrame(raf); terminar(s.mensaje); }
  }
  pintar(0);
  if (!reduce) raf = requestAnimationFrame(paso);
  return () => cancelAnimationFrame(raf);
};

/* Día 3: vuelo del amor */
JUEGOS.avion = (arena, s) => {
  const pos = [[20, 22], [78, 18], [48, 48], [22, 76], [78, 72]];
  let vistos = 0, raf = 0;
  const nubes = s.destinos.map((d, k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cloud-btn";
    b.style.left = pos[k % pos.length][0] + "%";
    b.style.top = pos[k % pos.length][1] + "%";
    b.setAttribute("aria-label", "Volar a la nube " + (k + 1));
    b.innerHTML = '<svg viewBox="0 0 200 100" aria-hidden="true"><use href="#nube" fill="url(#gNubeAzul)"/></svg><span></span>';
    b.querySelector("span").textContent = d.corto;
    b.addEventListener("click", () => { meta[0] = pos[k % pos.length][0] / 100 * arena.clientWidth; meta[1] = pos[k % pos.length][1] / 100 * arena.clientHeight; });
    arena.appendChild(b);
    return { el: b, d, k, visto: false };
  });
  const av = document.createElement("div");
  av.className = "plane";
  av.innerHTML = '<svg viewBox="0 0 64 44" aria-hidden="true"><path d="M60 22 L6 5 L20 22 L6 39 Z" fill="#ffffff" stroke="#3f7fb0" stroke-width="2.4" stroke-linejoin="round"/><path d="M60 22 L20 22 L13 30" fill="none" stroke="#8ec3ea" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  arena.appendChild(av);
  const p = [arena.clientWidth * 0.5, arena.clientHeight * 0.9];
  const meta = [p[0], p[1] - 40];
  let ang = -Math.PI / 2;
  function mover(e) {
    const r = arena.getBoundingClientRect();
    meta[0] = e.clientX - r.left;
    meta[1] = e.clientY - r.top;
  }
  arena.addEventListener("pointerdown", mover);
  arena.addEventListener("pointermove", mover);
  function visitar(n) {
    n.visto = true;
    n.el.classList.add("visited");
    vistos++;
    const [x, y] = centroDe(n.el);
    explotar(x, y);
    frase("Quiero llevarte a " + n.d.largo + ".");
    $("stSay").textContent = vistos < nubes.length ? "¡Llegaste! Te faltan " + (nubes.length - vistos) + "." : "¡Visitaste todas las nubes!";
    if (vistos === nubes.length) terminar(s.mensaje);
  }
  function paso() {
    const w = arena.clientWidth, h = arena.clientHeight;
    const k = reduce ? 1 : 0.08;
    const dx = meta[0] - p[0], dy = meta[1] - p[1];
    p[0] += dx * k; p[1] += dy * k;
    if (Math.hypot(dx, dy) > 4) {
      const objetivoAng = Math.atan2(dy, dx);
      let dif = objetivoAng - ang;
      while (dif > Math.PI) dif -= Math.PI * 2;
      while (dif < -Math.PI) dif += Math.PI * 2;
      ang += dif * (reduce ? 1 : 0.15);
    }
    av.style.transform = "translate(" + (p[0] - 29).toFixed(1) + "px," + (p[1] - 20).toFixed(1) + "px) rotate(" + ang.toFixed(3) + "rad)";
    nubes.forEach((n) => {
      if (n.visto) return;
      const cx = pos[n.k % pos.length][0] / 100 * w, cy = pos[n.k % pos.length][1] / 100 * h;
      if (Math.hypot(p[0] - cx, p[1] - cy) < 50) visitar(n);
    });
    raf = requestAnimationFrame(paso);
  }
  raf = requestAnimationFrame(paso);
  return () => cancelAnimationFrame(raf);
};


function fotoPorTexto(t) {
  for (const c of CONFIG.historia) for (const f of c.fotos) if (f.texto === t) return f.src;
  return CONFIG.historia[CONFIG.historia.length - 1].fotos[0].src;
}
function centro(arena) {
  const c = document.createElement("div");
  c.className = "game-center";
  arena.appendChild(c);
  return c;
}

/* Día 4: rompecabezas */
JUEGOS.puzzle = (arena, s) => {
  const src = fotoPorTexto(s.foto);
  const w = arena.clientWidth, h = arena.clientHeight;
  const size = Math.round(Math.max(200, Math.min(w - 32, h - 80, 380)));
  const c = centro(arena);
  const ref = document.createElement("div");
  ref.className = "puzzle-ref-wrap";
  ref.innerHTML = '<img class="puzzle-ref" alt=""><span>Así debe quedar</span>';
  ref.querySelector("img").src = src;
  const tablero = document.createElement("div");
  tablero.className = "puzzle";
  tablero.style.width = tablero.style.height = size + "px";
  let orden = [...Array(9).keys()];
  do { orden.sort(() => Math.random() - 0.5); } while (orden.filter((v, k) => v === k).length > 2);
  let sel = -1, listo = false;
  const piezas = [];
  for (let k = 0; k < 9; k++) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "tile";
    b.style.backgroundImage = 'url("' + src + '")';
    b.addEventListener("click", () => tocar(k));
    tablero.appendChild(b);
    piezas.push(b);
  }
  function pintar() {
    piezas.forEach((b, k) => {
      const v = orden[k];
      b.style.backgroundPosition = (v % 3) * 50 + "% " + Math.floor(v / 3) * 50 + "%";
      b.classList.toggle("sel", k === sel);
      b.setAttribute("aria-label", "Pieza " + (k + 1) + (v === k ? ", en su lugar" : ""));
    });
  }
  function tocar(k) {
    if (listo) return;
    if (sel < 0) { sel = k; pintar(); return; }
    if (sel !== k) [orden[sel], orden[k]] = [orden[k], orden[sel]];
    sel = -1;
    pintar();
    const bien = orden.filter((v, i) => v === i).length;
    $("stSay").textContent = bien === 9 ? "¡Lo armaste!" : bien + " de 9 piezas en su lugar. Sigue así.";
    if (bien === 9) {
      listo = true;
      tablero.classList.add("solved");
      const [x, y] = centroDe(tablero);
      explotar(x, y);
      frase("Todo encaja contigo.");
      terminar(s.mensaje);
    }
  }
  c.append(ref, tablero);
  pintar();
};

/* Día 5: memoria de parejas */
JUEGOS.memoria = (arena, s) => {
  const base = CONFIG.historia[CONFIG.historia.length - 1].fotos.slice(0, 6);
  const mazo = base.concat(base).map((f, k) => ({ f, id: k % base.length })).sort(() => Math.random() - 0.5);
  const w = arena.clientWidth, h = arena.clientHeight;
  const cols = w >= 560 ? 4 : 3, filas = Math.ceil(mazo.length / cols), gap = 8;
  const cw = Math.floor(Math.max(60, Math.min((w - 24 - gap * (cols - 1)) / cols, (h - 16 - gap * (filas - 1)) / filas / 1.25, 130)));
  const c = centro(arena);
  const grid = document.createElement("div");
  grid.className = "mgrid";
  grid.style.gridTemplateColumns = "repeat(" + cols + ", " + cw + "px)";
  let abiertas = [], pares = 0, bloqueo = false;
  mazo.forEach((m, k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "mcard";
    b.style.width = cw + "px";
    b.style.height = Math.round(cw * 1.25) + "px";
    b.setAttribute("aria-label", "Carta " + (k + 1));
    b.innerHTML = '<span class="mc-in"><span class="mc-face mc-back"><svg viewBox="0 0 100 92" aria-hidden="true"><use href="#corazon" fill="#ffffff"/></svg></span><span class="mc-face mc-front"><img alt=""></span></span>';
    b.querySelector("img").src = m.f.src;
    m.el = b;
    b.addEventListener("click", () => voltear(m));
    grid.appendChild(b);
  });
  function voltear(m) {
    if (bloqueo || m.el.classList.contains("flip")) return;
    m.el.classList.add("flip");
    m.el.setAttribute("aria-label", m.f.texto);
    abiertas.push(m);
    if (abiertas.length < 2) return;
    const [a, b] = abiertas;
    abiertas = [];
    if (a.id === b.id) {
      pares++;
      a.el.classList.add("match"); b.el.classList.add("match");
      const [x, y] = centroDe(b.el);
      explotar(x, y);
      frase(a.f.texto);
      $("stSay").textContent = pares < base.length ? "¡Pareja encontrada! Van " + pares + " de " + base.length + "." : "¡Las encontraste todas!";
      if (pares === base.length) terminar(s.mensaje);
    } else {
      bloqueo = true;
      setTimeout(() => {
        a.el.classList.remove("flip"); b.el.classList.remove("flip");
        a.el.setAttribute("aria-label", "Carta"); b.el.setAttribute("aria-label", "Carta");
        bloqueo = false;
      }, 850);
    }
  }
  c.appendChild(grid);
};

/* Día 6: rasca y descubre */
JUEGOS.rasca = (arena, s) => {
  const w = arena.clientWidth, h = arena.clientHeight;
  const cw = Math.round(Math.min(w - 32, 360)), ch = Math.round(Math.max(170, Math.min(230, h - 24)));
  const c = centro(arena);
  const box = document.createElement("div");
  box.className = "scratch";
  box.style.width = cw + "px";
  box.style.height = ch + "px";
  box.innerHTML = '<div class="prize"><p class="prize-k"></p><p class="prize-t"></p></div><canvas aria-label="Tarjeta para raspar" role="img"></canvas>';
  box.querySelector(".prize-k").textContent = s.premio.titulo;
  box.querySelector(".prize-t").textContent = s.premio.texto;
  c.appendChild(box);
  const cv = box.querySelector("canvas");
  const dpr = Math.min(devicePixelRatio || 1, 2);
  cv.width = cw * dpr; cv.height = ch * dpr;
  const g = cv.getContext("2d");
  g.scale(dpr, dpr);
  const grad = g.createLinearGradient(0, 0, cw, ch);
  grad.addColorStop(0, "#f6b8cc"); grad.addColorStop(1, "#a9d2f2");
  g.fillStyle = grad;
  g.fillRect(0, 0, cw, ch);
  g.fillStyle = "rgba(255,255,255,0.35)";
  for (let k = 0; k < 40; k++) { g.beginPath(); g.arc(Math.random() * cw, Math.random() * ch, 2 + Math.random() * 3, 0, Math.PI * 2); g.fill(); }
  g.fillStyle = "#ffffff";
  g.font = "700 20px Quicksand, system-ui, sans-serif";
  g.textAlign = "center"; g.textBaseline = "middle";
  g.fillText("Raspa aquí", cw / 2, ch / 2);
  g.globalCompositeOperation = "destination-out";
  g.lineWidth = 38; g.lineCap = "round"; g.lineJoin = "round";
  let rascando = false, ult = null, n = 0, listo = false;
  function punto(e) { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
  function raspar(e) {
    const p = punto(e);
    g.beginPath();
    if (ult) { g.moveTo(ult[0], ult[1]); g.lineTo(p[0], p[1]); g.stroke(); }
    else { g.arc(p[0], p[1], 19, 0, Math.PI * 2); g.fill(); }
    ult = p;
    if (++n % 10 === 0) revisar();
  }
  function revisar() {
    if (listo) return;
    const d = g.getImageData(0, 0, cv.width, cv.height).data;
    let vacio = 0, total = 0;
    for (let k = 3; k < d.length; k += 4 * 16) { total++; if (d[k] < 40) vacio++; }
    if (vacio / total > 0.5) {
      listo = true;
      cv.style.opacity = "0";
      setTimeout(() => cv.remove(), 700);
      const [x, y] = centroDe(box);
      explotar(x, y);
      frase("¡Premio para ti!");
      $("stSay").textContent = "¡Lo descubriste!";
      terminar(s.mensaje);
    }
  }
  cv.addEventListener("pointerdown", (e) => { rascando = true; ult = null; cv.setPointerCapture(e.pointerId); raspar(e); });
  cv.addEventListener("pointermove", (e) => { if (rascando) raspar(e); });
  ["pointerup", "pointercancel"].forEach((ev) => cv.addEventListener(ev, () => { rascando = false; ult = null; revisar(); }));
};

/* Día 7: ábrelo cuando... */
JUEGOS.sobres = (arena, s) => {
  const c = centro(arena);
  const lista = document.createElement("div");
  lista.className = "envs";
  let abierto = false;
  const SOBRE = '<svg viewBox="0 0 240 160" aria-hidden="true"><rect width="240" height="160" rx="16" fill="#f6b8cc"/><path d="M0 14 112 92 0 160Z" fill="#bfe0f7"/><path d="M240 14 128 92 240 160Z" fill="#a9d2f2"/><path d="M0 160 120 80 240 160Z" fill="#fde3ec"/><path d="M8 2h224L120 96Z" fill="#f08fb1"/><use href="#corazon" x="106" y="56" width="28" height="26" fill="#ffffff"/></svg>';
  s.cartas.forEach((carta) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "env";
    b.innerHTML = SOBRE + '<span><small>Ábrelo cuando</small><strong></strong></span>';
    b.querySelector("strong").textContent = "…" + carta.para;
    b.addEventListener("click", () => leer(carta, b));
    lista.appendChild(b);
  });
  c.appendChild(lista);
  function leer(carta, b) {
    b.classList.add("read");
    const card = document.createElement("div");
    card.className = "read-card";
    card.innerHTML = '<p class="read-to"></p><p class="read-text"></p><button class="btn btn-main" type="button">Guardar carta</button>';
    card.querySelector(".read-to").textContent = "Para cuando " + carta.para;
    card.querySelector(".read-text").textContent = carta.texto;
    card.querySelector("button").addEventListener("click", () => {
      card.remove();
      b.focus();
      if (!abierto) { abierto = true; $("stSay").textContent = "Los otros sobres quedan aquí para cuando los necesites."; terminar(s.mensaje); }
    });
    arena.appendChild(card);
    card.querySelector("button").focus();
  }
};

/* Día 8: constelación */
JUEGOS.constelacion = (arena, s) => {
  for (let k = 0; k < 50; k++) {
    const d = document.createElement("span");
    d.className = "sky-dot";
    d.style.left = Math.random() * 100 + "%";
    d.style.top = Math.random() * 100 + "%";
    d.style.animationDelay = Math.random() * 3 + "s";
    arena.appendChild(d);
  }
  const w = arena.clientWidth, h = arena.clientHeight, N = 12;
  const R = Math.min(w * 0.44, h * 0.44) / 16;
  const cx = w / 2, cy = h / 2 + R;
  const pts = [];
  for (let k = 0; k < N; k++) {
    const t = (Math.PI * 2 * k) / N;
    pts.push([cx + 16 * Math.pow(Math.sin(t), 3) * R, cy - (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * R]);
  }
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "cline");
  svg.setAttribute("viewBox", "0 0 " + w + " " + h);
  const pl = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  svg.appendChild(pl);
  arena.appendChild(svg);
  let sig = 0, arrastrando = false;
  const trazo = [];
  const estrellas = pts.map(([x, y], k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cstar" + (k === 0 ? " next" : "");
    b.style.left = x + "px";
    b.style.top = y + "px";
    b.setAttribute("aria-label", "Estrella " + (k + 1));
    b.innerHTML = "<i></i><b>" + (k + 1) + "</b>";
    b.addEventListener("click", () => tocar(k));
    arena.appendChild(b);
    return b;
  });
  function tocar(k) {
    if (sig >= N) return;
    if (k !== sig) {
      if (k > sig) { const e = estrellas[sig]; e.classList.remove("shake"); void e.offsetWidth; e.classList.add("shake"); }
      return;
    }
    estrellas[k].classList.remove("next");
    estrellas[k].classList.add("lit");
    trazo.push(pts[k][0].toFixed(1) + "," + pts[k][1].toFixed(1));
    sig++;
    if (sig < N) {
      estrellas[sig].classList.add("next");
      $("stSay").textContent = "¡Bien! Sigue con la estrella " + (sig + 1) + ".";
    } else {
      trazo.push(trazo[0]);
      svg.classList.add("done");
      const r = arena.getBoundingClientRect();
      explotar(r.left + cx, r.top + cy);
      $("stSay").textContent = "¡Dibujaste un corazón en el cielo!";
      frase("Este cielo es para ti.");
      terminar(s.mensaje);
    }
    pl.setAttribute("points", trazo.join(" "));
  }
  arena.addEventListener("pointerdown", () => { arrastrando = true; });
  ["pointerup", "pointercancel", "pointerleave"].forEach((ev) => arena.addEventListener(ev, () => { arrastrando = false; }));
  arena.addEventListener("pointermove", (e) => {
    if (!arrastrando || sig >= N) return;
    const r = arena.getBoundingClientRect();
    if (Math.hypot(e.clientX - r.left - pts[sig][0], e.clientY - r.top - pts[sig][1]) < 26) tocar(sig);
  });
};

/* Corazón con mensaje */
JUEGOS.tarjeta = (arena, s) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "big-heart";
  b.setAttribute("aria-label", "Abrir la sorpresa de hoy");
  b.innerHTML = '<svg viewBox="0 0 100 92" aria-hidden="true"><use href="#corazon" fill="url(#gCorazon)"/></svg>';
  b.addEventListener("click", () => {
    const [x, y] = centroDe(b);
    explotar(x, y);
    b.disabled = true;
    frase("Para ti, mi princesa.");
    terminar(s.mensaje);
  });
  arena.appendChild(b);
};

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
pintarSorpresas();
pintarDorados();
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
if (location.hash === "#galaxia" || verCarta || mdia) $("welcome").hidden = true;
if (mdia) setTimeout(entrar, 700);
