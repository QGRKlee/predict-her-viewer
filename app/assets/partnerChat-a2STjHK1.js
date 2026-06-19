import{g as y,a as f}from"./index-Ccy4Bg3X.js";import"./astro-CKYIcK6G.js";import"./three-Bv1OsDGp.js";const w=30,E=["Where is she today?","How can I show up with high EQ today?","What's the one thing that would help her most today?"];let p=!1,r={messages:[],usage:{used:0,cap:7},sending:!1,paywallVisible:!1};async function I(){if(p){await d();return}p=!0,C(),k(),await d()}function C(){const t=document.getElementById("partner-chat-content");if(!t)return;t.innerHTML=`
    <div class="partner-chat-root">
      <div class="partner-chat-chip-row" id="partner-chat-chip-row"></div>

      <div class="partner-chat-history" id="partner-chat-history">
        <div class="partner-chat-empty" id="partner-chat-empty">
          <div class="partner-chat-empty-glyph">✦</div>
          <div class="partner-chat-empty-headline">Ask anything.</div>
          <div class="partner-chat-empty-body">
            Why she may be quieter today. What to plan this weekend. How to apologize when you've messed up. This chat uses the cycle context she chooses to share.
          </div>
        </div>
      </div>

      <div class="partner-chat-input-zone" id="partner-chat-input-zone">
        <div class="partner-chat-input-row" id="partner-chat-input-row">
          <input
            type="text"
            id="partner-chat-input"
            class="partner-chat-input"
            placeholder="Ask Her about her…"
            autocomplete="off"
            maxlength="1200"
          />
          <button id="partner-chat-send-btn" class="partner-chat-send-btn" type="button" aria-label="Send">→</button>
        </div>
        <div class="partner-chat-usage" id="partner-chat-usage">— of 7 today</div>
      </div>
    </div>
  `;const e=document.getElementById("partner-chat-input"),a=document.getElementById("partner-chat-send-btn");a==null||a.addEventListener("click",()=>l()),e==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),l())})}async function d(){try{const t=await y();if(!(t!=null&&t.access_token))return;const e=await fetch(f("/api/partner/chat/history?limit="+w),{headers:{Authorization:`Bearer ${t.access_token}`}});if(!e.ok)return;const a=await e.json();r.messages=Array.isArray(a.messages)?a.messages:[],r.usage=a.usage||r.usage,T(),m(),u()}catch(t){console.warn("[partnerChat] history fetch failed:",t.message)}}function k(){const t=document.getElementById("partner-chat-chip-row");if(!t)return;const e=E;t.innerHTML=e.map(a=>`<button class="partner-chat-chip" type="button" data-chip="${g(a)}">${g(a)}</button>`).join(""),t.querySelectorAll(".partner-chat-chip").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.chip;b(n)})})}function T(){const t=document.getElementById("partner-chat-history"),e=document.getElementById("partner-chat-empty");if(t){if(!r.messages.length){e&&(e.style.display=""),t.querySelectorAll(".partner-chat-bubble").forEach(a=>a.remove());return}e&&(e.style.display="none"),t.querySelectorAll(".partner-chat-bubble").forEach(a=>a.remove());for(const a of r.messages)t.appendChild(h(a.role,a.content,a.repair_mode));t.scrollTop=t.scrollHeight}}function h(t,e,a){const n=document.createElement("div");if(n.className=`partner-chat-bubble partner-chat-bubble-${t==="assistant"?"her":"me"}${a?" partner-chat-bubble-repair":""}`,a&&t==="assistant"){const c=document.createElement("div");c.className="partner-chat-repair-badge",c.textContent="Repair script",n.appendChild(c)}return(t==="assistant"?B(e):String(e||"")).split(`
`).forEach((c,v)=>{v>0&&n.appendChild(document.createElement("br")),n.appendChild(document.createTextNode(c))}),n}function B(t){return String(t||"").replace(/```[\s\S]*?```/g,e=>e.replace(/```[a-z]*\n?/gi,"").replace(/```/g,"")).replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*\n]+)\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/_([^_\n]+)_/g,"$1").replace(/^\s{0,3}#{1,6}\s+/gm,"").replace(/^\s{0,3}[-*]\s+/gm,"").replace(/\n{3,}/g,`

`).trim()}function S(t){const e=document.getElementById("partner-chat-history"),a=document.getElementById("partner-chat-empty");a&&(a.style.display="none"),e==null||e.appendChild(h("user",t,!1)),e&&(e.scrollTop=e.scrollHeight)}function _(){const t=document.getElementById("partner-chat-history");if(!t)return null;const e=document.createElement("div");return e.className="partner-chat-bubble partner-chat-bubble-her partner-chat-typing",e.innerHTML="<span>✦</span><span>✦</span><span>✦</span>",t.appendChild(e),t.scrollTop=t.scrollHeight,e}function o(t,e){const a=document.getElementById("partner-chat-history");a==null||a.appendChild(h("assistant",t,e)),a&&(a.scrollTop=a.scrollHeight)}function m(){const t=document.getElementById("partner-chat-usage");if(!t)return;const{used:e,cap:a,unlimited:n}=r.usage;if(n){t.textContent="Unlimited",t.style.color="var(--gold-light)";return}const s=Math.max(0,a-e);t.textContent=`${e} of ${a} today`,t.style.color=s<=2?"rgba(238, 213, 154, 0.8)":"rgba(232, 224, 212, 0.4)"}function u(){const{used:t,cap:e,unlimited:a}=r.usage,n=!a&&t>=e,s=document.getElementById("partner-chat-input-zone");s&&(n&&!r.paywallVisible?H(s):!n&&r.paywallVisible&&A(s))}function H(t){var e;r.paywallVisible=!0,t.innerHTML=`
    <div class="partner-chat-paywall">
      <div class="partner-chat-paywall-title">You've used today's free chats.</div>
      <div class="partner-chat-paywall-body">
        Unlock unlimited messages plus deeper repair scripts for $2.99/month.
      </div>
      <button class="partner-chat-paywall-btn" id="partner-chat-paywall-btn">Unlock unlimited</button>
      <div class="partner-chat-paywall-reset">Free chats reset at midnight.</div>
    </div>
  `,(e=document.getElementById("partner-chat-paywall-btn"))==null||e.addEventListener("click",L)}function A(t){r.paywallVisible=!1,t.innerHTML=`
    <div class="partner-chat-input-row" id="partner-chat-input-row">
      <input type="text" id="partner-chat-input" class="partner-chat-input" placeholder="Ask Her about her…" autocomplete="off" maxlength="1200" />
      <button id="partner-chat-send-btn" class="partner-chat-send-btn" type="button" aria-label="Send">→</button>
    </div>
    <div class="partner-chat-usage" id="partner-chat-usage">— of 7 today</div>
  `;const e=document.getElementById("partner-chat-input"),a=document.getElementById("partner-chat-send-btn");a==null||a.addEventListener("click",()=>l()),e==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),l())}),m()}async function L(){alert("Upgrade is rolling out soon. You'll be among the first to get it.")}function l(){const t=document.getElementById("partner-chat-input");if(!t)return;const e=t.value.trim();e&&(t.value="",b(e))}async function b(t){if(r.sending||!t||!t.trim())return;r.sending=!0,S(t);const e=_();try{const a=await y();if(!(a!=null&&a.access_token)){e==null||e.remove(),alert("Please sign in to chat."),r.sending=!1;return}const n=await fetch(f("/api/partner/chat"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a.access_token}`},body:JSON.stringify({message:t})});if(e==null||e.remove(),n.status===402){const i=await n.json().catch(()=>({}));r.usage={used:i.used||r.usage.used,cap:i.cap||r.usage.cap,unlimited:!1},u(),r.sending=!1;return}if(n.status===403){const i=await n.json().catch(()=>({}));if((i==null?void 0:i.error)==="no_active_pairing"){o("Your partner connection has ended. Reloading…",!1),setTimeout(()=>window.location.reload(),1200),r.sending=!1;return}}if(!n.ok){o("Couldn't reach the AI right now. Try again in a moment.",!1),r.sending=!1;return}const s=await n.json();o(s.reply,!!s.repairMode),r.usage=s.usage||r.usage,m(),u(),d().catch(()=>{})}catch(a){e==null||e.remove(),o("Something went wrong. Try again.",!1),console.warn("[partnerChat] send failed:",a.message)}finally{r.sending=!1}}async function x(t){const e=document.querySelector('[data-tab="partner-chat"]');e==null||e.click(),await new Promise(n=>setTimeout(n,50)),p||await I();const a=document.getElementById("partner-chat-input");a&&(a.value=t||"",a.focus())}function g(t){return String(t||"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}export{I as initPartnerChatTab,x as navigateToPartnerChatWithPrompt};
