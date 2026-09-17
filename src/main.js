import "./style.css";
import { path, projects, skills } from "./data.js";
import { previews } from "./previews.js";

// Paste the Google Apps Script web app URL here after you deploy it.
const SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwjGZw-tRqek0dG5Neeqtb556likD7wRzg2ychzlbxPuKe7oI3j1ThtuvF2j_kjDpJY/exec";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const grid = $("[data-work-grid]");
const skillsEl = $("[data-skills]");
const pathEl = $("[data-path]");
const caseEl = $("[data-case]");
const caseBody = $("[data-case-body]");
const cursor = $(".cursor");
const progress = $(".progress");
const loader = $("[data-loader]");
const bar = $("[data-loader-bar]");

$("[data-year]").textContent = new Date().getFullYear();

const clock = $("[data-clock]");
const tickClock = () => {
  const now = new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
  });
  clock.textContent = `Pune · ${now}`;
};
tickClock();
setInterval(tickClock, 30000);

grid.innerHTML = projects
  .map(
    (p) => `
    <button class="card ${p.span === "wide" ? "wide" : ""}" data-open="${p.id}" type="button">
      <img src="${p.cover}" alt="${p.title} website preview" />
      <span class="num">${p.number}</span>
      <div class="veil">
        <h3>${p.title}</h3>
        <p class="kicker">${p.kicker}</p>
        <p class="hint">Open the work →</p>
      </div>
    </button>
  `,
  )
  .join("");

skillsEl.innerHTML = Object.entries(skills)
  .map(
    ([group, items]) => `
    <div>
      <h4>${group}</h4>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `,
  )
  .join("");

pathEl.innerHTML = path
  .map(
    (item) => `
    <li>
      <p class="when">${item.when}</p>
      <div>
        <h3>${item.title}</h3>
        <p class="where">${item.where}</p>
        <p>${item.text}</p>
      </div>
    </li>
  `,
  )
  .join("");

const openCase = (id) => {
  const project = projects.find((p) => p.id === id);
  if (!project) return;
  const index = projects.findIndex((p) => p.id === id);
  const next = projects[(index + 1) % projects.length];
  const urlLabel = project.url ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : `${project.id}.studio`;

  caseBody.innerHTML = `
    <p class="case-meta">
      <span>${project.number}</span>
      <span>${project.year}</span>
      <span>${project.role}</span>
      <span>${project.client}</span>
    </p>
    <h1>${project.title}</h1>
    <p class="story">${project.story}</p>
    <div class="browser">
      <div class="browser-bar">
        <span class="dots"><i></i><i></i><i></i></span>
        <span class="url">${urlLabel}</span>
      </div>
      <img src="${project.cover}" alt="${project.title} — the website I created" />
    </div>
    <h2 class="chapter">This is the ${/app/i.test(project.type) && !/web/i.test(project.type) ? "app" : "website"} I created.</h2>
    <p class="story">${project.summary}</p>
    <div class="browser">
      <div class="browser-bar">
        <span class="dots"><i></i><i></i><i></i></span>
        <span class="url">live preview · ${project.title.toLowerCase()}</span>
      </div>
      <div class="live">${previews[project.id]}</div>
    </div>
    <div class="split">
      <div>
        <h3>The brief</h3>
        <p>${project.challenge}</p>
      </div>
      <div>
        <h3>The making</h3>
        <p>${project.approach}</p>
      </div>
    </div>
    <div class="gallery">
      ${project.images.map((src) => `<img src="${src}" alt="${project.title} screen" />`).join("")}
    </div>
    <p>${project.outcome}</p>
    <div class="swatches">
      ${project.palette.map((c) => `<i style="background:${c}" title="${c}"></i>`).join("")}
    </div>
    <div class="tools">
      ${project.tools.map((t) => `<span>${t}</span>`).join("")}
    </div>
    ${
      project.url
        ? `<p><a class="text-link" href="${project.url}" target="_blank" rel="noreferrer">Visit the live site</a></p>`
        : ""
    }
    <button class="case-next" type="button" data-open="${next.id}">
      <span>
        <small>Next piece</small><br />
        <strong>${next.title}</strong>
      </span>
      <span>→</span>
    </button>
  `;

  caseEl.hidden = false;
  document.body.classList.add("case-open");
  document.querySelector("main")?.setAttribute("aria-hidden", "true");
  caseEl.scrollTop = 0;
  history.pushState({ case: id }, "", `#work/${id}`);
};

const closeCase = () => {
  caseEl.hidden = true;
  document.body.classList.remove("case-open");
  document.querySelector("main")?.removeAttribute("aria-hidden");
  caseBody.innerHTML = "";
  if (location.hash.startsWith("#work/")) {
    history.pushState({}, "", "#work");
  }
};

document.addEventListener("click", (e) => {
  const open = e.target.closest("[data-open]");
  if (open) {
    e.preventDefault();
    openCase(open.dataset.open);
  }
  if (e.target.closest("[data-close]")) closeCase();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !caseEl.hidden) closeCase();
});

window.addEventListener("popstate", () => {
  const match = location.hash.match(/^#work\/([\w-]+)/);
  if (match) openCase(match[1]);
  else closeCase();
});

if (location.hash.startsWith("#work/")) {
  const id = location.hash.split("/")[1];
  openCase(id);
}

const hoverSel = "a, button, input, textarea, label";
document.addEventListener("mouseover", (e) => {
  if (e.target.closest(hoverSel)) cursor.classList.add("hover");
});
document.addEventListener("mouseout", (e) => {
  if (e.target.closest(hoverSel) && !e.relatedTarget?.closest?.(hoverSel)) {
    cursor.classList.remove("hover");
  }
});

let mx = 0;
let my = 0;
let cx = 0;
let cy = 0;
window.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  $$(".magnetic").forEach((btn) => {
    const r = btn.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const near = Math.hypot(dx, dy) < 120;
    btn.style.transform = near ? `translate(${dx * 0.18}px, ${dy * 0.18}px)` : "";
  });
  const fan = $(".fan");
  if (fan) {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    fan.style.transform = `translate(${x}px, ${y}px)`;
  }
});

const loop = () => {
  cx += (mx - cx) * 0.18;
  cy += (my - cy) * 0.18;
  cursor.style.left = `${cx}px`;
  cursor.style.top = `${cy}px`;
  requestAnimationFrame(loop);
};
loop();

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
});

$("[data-form]").addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = $("[data-form-status]");
  const form = e.target;
  const submit = form.querySelector("button[type='submit']");
  const payload = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  if (!SHEET_WEBAPP_URL) {
    status.hidden = false;
    status.textContent = "The sheet is not connected yet. Add the web app URL in src/main.js.";
    return;
  }

  submit.disabled = true;
  status.hidden = false;
  status.textContent = "Sending…";

  try {
    await fetch(SHEET_WEBAPP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    status.textContent = "Sent. Will get back to you.";
    form.reset();
  } catch {
    status.textContent = "Could not send. Email me at shreyamorti@gmail.com.";
  } finally {
    submit.disabled = false;
  }
});

const start = performance.now();
const load = (now) => {
  const t = Math.min(1, (now - start) / 1100);
  bar.style.width = `${t * 100}%`;
  if (t < 1) requestAnimationFrame(load);
  else loader.classList.add("out");
};
requestAnimationFrame(load);
setTimeout(() => loader.classList.add("out"), 1600);
