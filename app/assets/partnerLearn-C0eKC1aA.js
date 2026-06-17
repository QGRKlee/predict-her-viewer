import{g as x,a as w}from"./index-e9z-167c.js";import{a as g,P as u,b as B,c as b}from"./partnerContent-wuGPuOLt.js";import"./astro-CKYIcK6G.js";import"./three-Bv1OsDGp.js";const f=["menstrual","follicular","ovulatory","luteal"];let p=null,y=!1,o=null;async function M(){if(y){await m(),$();return}y=!0,S(),await m(),$()}function S(){const e=document.getElementById("partner-learn-content");e&&(e.innerHTML=`
    <div class="partner-forecast-root">
      <div class="partner-forecast-header">
        <div class="partner-forecast-label">Learn her cycle</div>
        <div class="partner-forecast-day" id="partner-learn-day">—</div>
      </div>

      <div class="partner-forecast-bar-wrap">
        <div class="partner-forecast-bar" id="partner-learn-bar"></div>
        <div class="partner-forecast-marker" id="partner-learn-marker">
          <div class="partner-forecast-marker-dot"></div>
        </div>
      </div>

      <div class="partner-forecast-tiles" id="partner-learn-tiles"></div>

      <div class="bottom-spacer"></div>
    </div>
  `)}async function m(){try{const e=await x();if(!(e!=null&&e.access_token)){p=null;return}const t=await fetch(w("/api/partner/today"),{headers:{Authorization:`Bearer ${e.access_token}`}});if(!t.ok){p=null;return}p=await t.json()}catch(e){console.warn("[partnerLearn] state fetch failed:",e.message),p=null}}function $(){if(!p){H();return}const{cycleDay:e,phase:t,cycleLength:s,hasPeriodHistory:r,womanName:n}=p,a=b(s||28);o||(o=f.includes(t)?t:"menstrual");const i=document.getElementById("partner-learn-day");i&&(r?i.innerHTML=`
        <span class="partner-forecast-day-num">Day ${e}</span>
        <span class="partner-forecast-day-phase">${c(u[t]||u.cycle)}</span>
      `:(i.textContent=`${n||"She"} hasn't logged her cycle yet`,i.style.fontSize="15px")),E(a,t,e,r),L(a,e,r),h(t,a,e)}function E(e,t,s,r){const n=document.getElementById("partner-learn-bar");n&&(n.innerHTML=f.map(a=>{const i=e[a],l=i.days;return`
      <div
        class="partner-forecast-bar-segment ${a===t&&r?"is-current":""}"
        style="flex-grow: ${l}; background: ${g[a]};"
        data-phase="${a}"
        title="${u[a]} · Days ${i.start}-${i.end}"
      ></div>
    `}).join(""))}function L(e,t,s){const r=document.getElementById("partner-learn-marker");if(!r)return;if(!s||!t||t<1){r.style.display="none";return}r.style.display="";const n=e.total,a=Math.min(100,Math.max(0,(t-.5)/n*100));r.style.left=`${a}%`}function h(e,t,s){const r=document.getElementById("partner-learn-tiles");r&&(r.innerHTML=f.map(n=>{const a=B[n];if(!a)return"";const i=t[n],l=n===e,d=n===o,k=A(n,e,s,i,t);return`
      <div class="partner-phase-tile ${l?"is-current":""} ${d?"is-expanded":"is-collapsed"}" data-phase="${n}">
        <button class="partner-phase-tile-header" type="button" data-phase-toggle="${n}">
          <div class="partner-phase-tile-dot" style="background: ${g[n]};"></div>
          <div class="partner-phase-tile-titlebox">
            <div class="partner-phase-tile-title">${u[n]}</div>
            <div class="partner-phase-tile-range">Days ${i.start}–${i.end}${l?" · she's here now":""}</div>
          </div>
          <div class="partner-phase-tile-chevron">${d?"▾":"▸"}</div>
        </button>

        <div class="partner-phase-tile-body">
          <div class="partner-phase-tile-section">
            <div class="partner-phase-tile-section-label">What's happening</div>
            <div class="partner-phase-tile-section-body">${c(a.summary)}</div>
          </div>

          <div class="partner-phase-tile-section">
            <div class="partner-phase-tile-section-label">What she's likely experiencing</div>
            <div class="partner-phase-tile-section-body">${c(a.experience)}</div>
          </div>

          <div class="partner-phase-tile-section">
            <div class="partner-phase-tile-section-label do">Do</div>
            <ul class="partner-phase-tile-list partner-phase-tile-list-do">
              ${a.dos.map(v=>`<li>${c(v)}</li>`).join("")}
            </ul>
          </div>

          <div class="partner-phase-tile-section">
            <div class="partner-phase-tile-section-label avoid">Avoid</div>
            <ul class="partner-phase-tile-list partner-phase-tile-list-avoid">
              ${a.avoids.map(v=>`<li>${c(v)}</li>`).join("")}
            </ul>
          </div>

          <div class="partner-phase-tile-timing">${c(k)}</div>
        </div>
      </div>
    `}).join(""),r.querySelectorAll("[data-phase-toggle]").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.phaseToggle;o=o===a?null:a,o||(o=e),h(e,t,s)})}))}function A(e,t,s,r,n){if(!s||s<1)return"Once she logs her cycle, you'll see exactly where this phase falls relative to today.";if(e===t){const l=s-r.start+1,d=r.end-s;return d<0?"This phase is wrapping up.":d===0?`Day ${l} of ${r.days} — this phase ends today.`:`Day ${l} of ${r.days} — about ${d} more day${d===1?"":"s"} in this phase.`}if(r.start>s){const l=r.start-s;return`Begins in ${l} day${l===1?"":"s"}.`}const a=s-r.end;if(a===0)return"Just ended.";if(a<0)return"";const i=n.total-s+r.start;return`Last phase. Ended ${a} day${a===1?"":"s"} ago. Returns in ${i} days.`}function H(){const e=document.getElementById("partner-learn-day");e&&(e.textContent="Cycle data unavailable",e.style.fontSize="15px");const t=b(28);o||(o="menstrual"),E(t,null,null,!1);const s=document.getElementById("partner-learn-marker");s&&(s.style.display="none"),h(null,t,null)}function c(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}export{M as initPartnerLearnTab};
