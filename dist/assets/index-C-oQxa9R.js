(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const l=[{id:"elly",number:"01",title:"Little Elly",kicker:"Website · Education",year:"2026",role:"Web design & front-end",client:"The Chalk Story",type:"Live product site",span:"wide",cover:"/work/work-elly.png",images:["/work/work-elly.png","/work/work-elly-centres.png"],palette:["#F6EFE4","#F2B441","#E8A07A","#2C241C"],tools:["Figma","React","UX writing","Design systems"],summary:"A warm, parent-first preschool website — centres, programmes, and admissions without the usual school-site clutter.",story:"This is the website I created during my internship at The Chalk Story. Little Elly needed to feel like a classroom at golden hour: safe, cheerful, and easy for a parent who is already late.",challenge:"Preschool sites often shout. Too many colours, too many CTAs, no path for a parent who just wants a centre nearby and a visit slot. The brand is H.A.P.P.Y. — the site had to prove that in the first scroll.",approach:"I designed a cream, sunlit interface with a calm hierarchy: one promise, four programmes, a centre finder, then proof. Cards for Toddler through UKG are tactile, not noisy. Enquiry is always present, never desperate.",outcome:"A parent-facing site that feels like the brand — curious, kind, and ready. Built as a real product surface, not a brochure."},{id:"maison",number:"02",title:"Maison",kicker:"Website · Commerce",year:"2025",role:"Product design & full-stack",client:"Personal",type:"E-commerce",span:"tall",cover:"/work/work-maison.png",images:["/work/work-maison.png","/work/work-maison-product.png"],palette:["#1A1714","#EDE6DA","#C4A574","#8C4A2F"],tools:["React","Node.js","MongoDB","JWT","Visual design"],summary:"A quiet-luxury shop — editorial photography, a frictionless bag, and an admin that actually respects inventory.",story:"This is the website I created as a full-stack commerce study. I wanted shopping to feel like flipping through a lookbook, not filling a form.",challenge:"Most student e-commerce looks like a Bootstrap theme with products glued on. I wanted pace, space, and trust — plus the unglamorous work: auth, cart persistence, and a real admin.",approach:"Oversized type, camel and ivory, one hero look. Product pages are slow on purpose. Behind it: MERN, JWT, CRUD for catalogue, reviews, and a persistent cart.",outcome:"A shoppable site with a designed storefront and a working back office. Live on Vercel."},{id:"atelier",number:"03",title:"Atelier AI",kicker:"App · Fashion tech",year:"2025",role:"Product design & ML interface",client:"Personal",type:"Web app",span:"square",cover:"/work/work-atelier.png",images:["/work/work-atelier.png","/work/work-atelier-look.png"],palette:["#F3E7DC","#D9A39A","#2B2420","#F7F1EA"],tools:["React","Flask","PyTorch","ResNet50","Firebase"],summary:"Upload a closet. Get a look. An AI stylist that feels like a magazine, not a lab notebook.",story:"This is the product I created for people who open their wardrobe and freeze. The model does the matching. The interface does the reassuring.",challenge:"Computer vision demos usually look like dashboards. Fashion is tactile. The UI had to make embeddings feel like advice from a friend with excellent taste.",approach:"Wardrobe as a grid of cloth, not files. Recommendations arrive as styled looks with mood tags. Firebase handles identity; ResNet50 reads the garments.",outcome:"A responsive styling agent with auth, image intake, and recommendations that feel editorial."},{id:"nura",number:"04",title:"Nura",kicker:"App · Wellness",year:"2025",role:"App design · UX",client:"Concept",type:"Mobile app",span:"tall",cover:"/work/work-nura.png",images:["/work/work-nura.png","/work/work-nura-breathe.png"],palette:["#6B7F6A","#E7E0D4","#C45C3E","#2A2E28"],tools:["Figma","Interaction design","Prototyping"],summary:"A wellness app that refuses to shout. Breath, ritual, sleep — in sage, sand, and one quiet circle.",story:"This is the app I designed for evenings that already have enough notifications. Nura is a room, not a feed.",challenge:"Wellness apps often gamify anxiety. I wanted something you could open with one thumb and feel your shoulders drop.",approach:"Three surfaces: a home that greets you, a ritual calendar with soft pills, a sleep player with slow gradients. Type is large. Motion is glacial. No red badges.",outcome:"A high-fidelity mobile system and prototype — app design as atmosphere."},{id:"bloom",number:"05",title:"Bloom & Grain",kicker:"Website · Hospitality",year:"2026",role:"Brand & web design",client:"Concept",type:"Restaurant site",span:"wide",cover:"/work/work-bloom.png",images:["/work/work-bloom.png","/work/work-bloom-reserve.png"],palette:["#E8DDD0","#9A3F18","#2C241C","#C4A574"],tools:["Art direction","UI design","UX","Copy"],summary:"A bistro site that tastes like sourdough and candlelight — menu, story, and a reservation that takes ten seconds.",story:"This is the website I created as a hospitality study. I wanted a restaurant site that photographs like a table, not a template.",challenge:"Food sites either drown in stock photos or hide the menu. Guests need three things: what it feels like, what they can eat, and whether tonight is free.",approach:"Full-bleed bread and ceramic. A short menu in serif. Reservations as a calm calendar, not a plugin that looks like 2014.",outcome:"A complete brand-and-web story for a fictional Pune bistro — paced, edible, bookable."},{id:"chalk",number:"06",title:"Chalk",kicker:"Product · CRM",year:"2026",role:"Product design & backend",client:"The Chalk Story",type:"Internal tool",span:"square",cover:"/work/work-chalk.png",images:["/work/work-chalk.png","/work/work-chalk-analytics.png"],palette:["#F7F5F1","#C45C26","#3D3A36","#A3B18A"],tools:["Node.js","PostgreSQL","MongoDB","UX for ops","n8n"],summary:"A modular CRM for school teams — pipelines, parents, and less hunting through spreadsheets.",story:"This is the product I helped create in production: a CRM so operations could stop living in tabs. Design here meant reducing cognitive load for people who are already busy.",challenge:"Internal tools get the leftover pixels. Staff were tracing parent conversations across chat, sheets, and memory. Latency and clutter were the same problem.",approach:"A light, terracotta-accented workspace: kanban for admissions, charts that answer one question, notes attached to people. Queries tuned for 10k+ records. Workflows automated with n8n.",outcome:"Faster retrieval, fewer manual hours, and a system that looks like someone cared about the people using it."}],$={Design:["UI systems","UX flows","Figma","Visual design","Prototyping","Design-to-dev"],Web:["HTML / CSS","JavaScript","React","Tailwind","Responsive layout","Motion"],Apps:["Mobile UI","Interaction","Firebase","Flask","REST APIs","Auth"],Craft:["Node.js","PostgreSQL","MongoDB","Git","Docker","Vercel"]},C=[{when:"Feb 2026 — Jul 2026",where:"The Chalk Story",title:"Software Developer",text:"Built production web applications and internal tools — parent-facing websites, a modular CRM, and scalable infrastructure. Full-stack development with React, Node.js, PostgreSQL, and deployment on DigitalOcean."},{when:"Aug 2022 — Jul 2026",where:"MIT World Peace University",title:"B.Tech, Computer Science",text:"Full-stack development, algorithms, and system design. Built web applications, APIs, and learned to bridge design thinking with engineering execution."}],T={elly:`
    <div class="pv pv-elly">
      <header class="pv-nav">
        <div class="pv-brand">
          <span class="pv-bird"></span>
          Little Elly
        </div>
        <nav>Programmes · Centres · Admissions</nav>
        <button type="button" class="pv-btn">Enquire</button>
      </header>
      <div class="pv-hero">
        <div>
          <p class="pv-kicker">Cheerful. Nurturing. Ready.</p>
          <h3>A H.A.P.P.Y start to school</h3>
          <p>Where curious minds grow wings — Toddler to UKG.</p>
        </div>
        <div class="pv-oval">Classroom light</div>
      </div>
      <div class="pv-row">
        <article><b>Toddler</b><span>1.5–2.5 yrs</span></article>
        <article><b>Nursery</b><span>2.5–3.5 yrs</span></article>
        <article><b>LKG</b><span>3.5–4.5 yrs</span></article>
        <article><b>UKG</b><span>4.5–5.5 yrs</span></article>
      </div>
    </div>
  `,maison:`
    <div class="pv pv-maison">
      <header class="pv-nav">
        <div class="pv-brand">MAISON</div>
        <nav>Shop · Collections · Journal</nav>
        <span>Bag (2)</span>
      </header>
      <div class="pv-hero maison-hero">
        <p class="pv-kicker">Autumn atelier</p>
        <h3>Quiet luxury<br>for every season</h3>
        <button type="button" class="pv-btn ghost">Shop the look</button>
      </div>
      <div class="pv-row products">
        <article><div class="swatch camel"></div><b>Studio Coat</b><span>₹28,400</span></article>
        <article><div class="swatch ivory"></div><b>Silk Scarf</b><span>₹6,200</span></article>
        <article><div class="swatch clay"></div><b>Day Bag</b><span>₹18,900</span></article>
      </div>
    </div>
  `,atelier:`
    <div class="pv pv-atelier">
      <header class="pv-nav">
        <div class="pv-brand">Atelier AI</div>
        <nav>Wardrobe · Looks · Profile</nav>
      </header>
      <div class="pv-split">
        <div>
          <p class="pv-kicker">Your closet, restyled</p>
          <h3>Four pieces.<br>One Saturday.</h3>
          <div class="closet">
            <i></i><i></i><i></i><i></i>
          </div>
        </div>
        <aside class="look-card">
          <div class="look-photo"></div>
          <p><b>Weekend</b> · Warm neutrals</p>
          <span>92% match</span>
        </aside>
      </div>
    </div>
  `,nura:`
    <div class="pv pv-nura">
      <div class="phone">
        <div class="notch"></div>
        <p class="time">21:14</p>
        <p class="greet">Good evening, Mira</p>
        <div class="breath">
          <span></span>
          <b>Breathe</b>
        </div>
        <div class="pills">
          <em>Sleep</em><em>Ritual</em><em>Walk</em>
        </div>
      </div>
    </div>
  `,bloom:`
    <div class="pv pv-bloom">
      <header class="pv-nav">
        <div class="pv-brand">Bloom & Grain</div>
        <nav>Menu · Story · Hours</nav>
        <button type="button" class="pv-btn">Reserve</button>
      </header>
      <div class="pv-hero bloom-hero">
        <p class="pv-kicker">Koregaon Park · Dinner</p>
        <h3>Bread, fire,<br>and slow evenings</h3>
      </div>
      <ul class="menu">
        <li><span>Sourdough & cultured butter</span><span>240</span></li>
        <li><span>Charred corn, chilli, lime</span><span>420</span></li>
        <li><span>Slow lamb, grain, yoghurt</span><span>890</span></li>
      </ul>
    </div>
  `,chalk:`
    <div class="pv pv-chalk">
      <aside>
        <b>Chalk</b>
        <p>Pipeline</p>
        <p>Centres</p>
        <p>Parents</p>
      </aside>
      <div class="board">
        <header>
          <h3>Admissions</h3>
          <span>This week · 48 leads</span>
        </header>
        <div class="cols">
          <section>
            <small>New</small>
            <article>Mira K. · Baner</article>
            <article>Arjun S. · Kalyani Nagar</article>
          </section>
          <section>
            <small>Visit booked</small>
            <article>Aanya P. · Aundh</article>
          </section>
          <section>
            <small>Enrolled</small>
            <article>Kabir M. · Kharadi</article>
          </section>
        </div>
      </div>
    </div>
  `},E="https://script.google.com/macros/s/AKfycbwjGZw-tRqek0dG5Neeqtb556likD7wRzg2ychzlbxPuKe7oI3j1ThtuvF2j_kjDpJY/exec",n=(e,t=document)=>t.querySelector(e),L=(e,t=document)=>[...t.querySelectorAll(e)],S=n("[data-work-grid]"),P=n("[data-skills]"),x=n("[data-path]"),c=n("[data-case]"),g=n("[data-case-body]"),d=n(".cursor"),F=n(".progress"),y=n("[data-loader]"),I=n("[data-loader-bar]");n("[data-year]").textContent=new Date().getFullYear();const M=n("[data-clock]"),b=()=>{const e=new Date().toLocaleTimeString("en-IN",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit"});M.textContent=`Pune · ${e}`};b();setInterval(b,3e4);S.innerHTML=l.map(e=>`
    <button class="card ${e.span==="wide"?"wide":""}" data-open="${e.id}" type="button">
      <img src="${e.cover}" alt="${e.title} website preview" />
      <span class="num">${e.number}</span>
      <div class="veil">
        <h3>${e.title}</h3>
        <p class="kicker">${e.kicker}</p>
        <p class="hint">Open the work →</p>
      </div>
    </button>
  `).join("");P.innerHTML=Object.entries($).map(([e,t])=>`
    <div>
      <h4>${e}</h4>
      <ul>${t.map(s=>`<li>${s}</li>`).join("")}</ul>
    </div>
  `).join("");x.innerHTML=C.map(e=>`
    <li>
      <p class="when">${e.when}</p>
      <div>
        <h3>${e.title}</h3>
        <p class="where">${e.where}</p>
        <p>${e.text}</p>
      </div>
    </li>
  `).join("");const m=e=>{var o;const t=l.find(i=>i.id===e);if(!t)return;const s=l.findIndex(i=>i.id===e),r=l[(s+1)%l.length],a=t.url?t.url.replace(/^https?:\/\//,"").replace(/\/$/,""):`${t.id}.studio`;g.innerHTML=`
    <p class="case-meta">
      <span>${t.number}</span>
      <span>${t.year}</span>
      <span>${t.role}</span>
      <span>${t.client}</span>
    </p>
    <h1>${t.title}</h1>
    <p class="story">${t.story}</p>
    <div class="browser">
      <div class="browser-bar">
        <span class="dots"><i></i><i></i><i></i></span>
        <span class="url">${a}</span>
      </div>
      <img src="${t.cover}" alt="${t.title} — the website I created" />
    </div>
    <h2 class="chapter">This is the ${/app/i.test(t.type)&&!/web/i.test(t.type)?"app":"website"} I created.</h2>
    <p class="story">${t.summary}</p>
    <div class="browser">
      <div class="browser-bar">
        <span class="dots"><i></i><i></i><i></i></span>
        <span class="url">live preview · ${t.title.toLowerCase()}</span>
      </div>
      <div class="live">${T[t.id]}</div>
    </div>
    <div class="split">
      <div>
        <h3>The brief</h3>
        <p>${t.challenge}</p>
      </div>
      <div>
        <h3>The making</h3>
        <p>${t.approach}</p>
      </div>
    </div>
    <div class="gallery">
      ${t.images.map(i=>`<img src="${i}" alt="${t.title} screen" />`).join("")}
    </div>
    <p>${t.outcome}</p>
    <div class="swatches">
      ${t.palette.map(i=>`<i style="background:${i}" title="${i}"></i>`).join("")}
    </div>
    <div class="tools">
      ${t.tools.map(i=>`<span>${i}</span>`).join("")}
    </div>
    ${t.url?`<p><a class="text-link" href="${t.url}" target="_blank" rel="noreferrer">Visit the live site</a></p>`:""}
    <button class="case-next" type="button" data-open="${r.id}">
      <span>
        <small>Next piece</small><br />
        <strong>${r.title}</strong>
      </span>
      <span>→</span>
    </button>
  `,c.hidden=!1,document.body.classList.add("case-open"),(o=document.querySelector("main"))==null||o.setAttribute("aria-hidden","true"),c.scrollTop=0,history.pushState({case:e},"",`#work/${e}`)},v=()=>{var e;c.hidden=!0,document.body.classList.remove("case-open"),(e=document.querySelector("main"))==null||e.removeAttribute("aria-hidden"),g.innerHTML="",location.hash.startsWith("#work/")&&history.pushState({},"","#work")};document.addEventListener("click",e=>{const t=e.target.closest("[data-open]");t&&(e.preventDefault(),m(t.dataset.open)),e.target.closest("[data-close]")&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!c.hidden&&v()});window.addEventListener("popstate",()=>{const e=location.hash.match(/^#work\/([\w-]+)/);e?m(e[1]):v()});if(location.hash.startsWith("#work/")){const e=location.hash.split("/")[1];m(e)}const u="a, button, input, textarea, label";document.addEventListener("mouseover",e=>{e.target.closest(u)&&d.classList.add("hover")});document.addEventListener("mouseout",e=>{var t,s;e.target.closest(u)&&!((s=(t=e.relatedTarget)==null?void 0:t.closest)!=null&&s.call(t,u))&&d.classList.remove("hover")});let w=0,k=0,p=0,h=0;window.addEventListener("mousemove",e=>{w=e.clientX,k=e.clientY,L(".magnetic").forEach(s=>{const r=s.getBoundingClientRect(),a=e.clientX-(r.left+r.width/2),o=e.clientY-(r.top+r.height/2),i=Math.hypot(a,o)<120;s.style.transform=i?`translate(${a*.18}px, ${o*.18}px)`:""});const t=n(".fan");if(t){const s=(e.clientX/window.innerWidth-.5)*12,r=(e.clientY/window.innerHeight-.5)*12;t.style.transform=`translate(${s}px, ${r}px)`}});const f=()=>{p+=(w-p)*.18,h+=(k-h)*.18,d.style.left=`${p}px`,d.style.top=`${h}px`,requestAnimationFrame(f)};f();window.addEventListener("scroll",()=>{const e=document.documentElement.scrollHeight-window.innerHeight;F.style.width=`${e>0?window.scrollY/e*100:0}%`});n("[data-form]").addEventListener("submit",async e=>{e.preventDefault();const t=n("[data-form-status]"),s=e.target,r=s.querySelector("button[type='submit']"),a={name:s.name.value.trim(),email:s.email.value.trim(),message:s.message.value.trim()};r.disabled=!0,t.hidden=!1,t.textContent="Sending…";try{await fetch(E,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(a)}),t.textContent="Sent. Will get back to you.",s.reset()}catch{t.textContent="Could not send. Email me at shreyamorti@gmail.com."}finally{r.disabled=!1}});const D=performance.now(),A=e=>{const t=Math.min(1,(e-D)/1100);I.style.width=`${t*100}%`,t<1?requestAnimationFrame(A):y.classList.add("out")};requestAnimationFrame(A);setTimeout(()=>y.classList.add("out"),1600);
