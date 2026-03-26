<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>DiagTerrain — BTP Ingénierie</title>
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#0f1117">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="DiagTerrain">
<link rel="apple-touch-icon" href="icons/icon-192.png">
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/utif@3.1.0/UTIF.js"></script>
<style>
:root{
  --bg:#0f1117;--sf:#1a1d27;--sf2:#22263a;
  --br:rgba(255,255,255,0.07);--br2:rgba(255,255,255,0.14);
  --ac:#f0a500;--ac2:rgba(240,165,0,0.15);
  --tx:#f0ede8;--tx2:#9a97a0;--tx3:#4a485a;
  --red:#e05252;--red2:rgba(224,82,82,0.15);
  --grn:#4caf7d;--grn2:rgba(76,175,125,0.15);
  --blu:#4a9eff;--blu2:rgba(74,158,255,0.15);
  --r:10px;--rl:16px;
  --fn:'DM Sans',system-ui,sans-serif;
  --mo:'JetBrains Mono',monospace;
}
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
body{font-family:var(--fn);background:var(--bg);color:var(--tx);height:100dvh;overflow:hidden;user-select:none}
.scr{display:none;flex-direction:column;height:100dvh}
.scr.on{display:flex}
.hdr{display:flex;align-items:center;gap:10px;padding:13px max(14px,env(safe-area-inset-left,0px)) 11px max(14px,env(safe-area-inset-left,0px));border-bottom:0.5px solid var(--br);background:var(--sf);flex-shrink:0}
.hdr-t{font-size:15px;font-weight:500;flex:1}
.hdr-s{font-size:11px;color:var(--tx2);margin-top:1px}
.ib{width:36px;height:36px;border-radius:8px;border:0.5px solid var(--br2);background:var(--sf2);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0}
.ib:active{opacity:.7}
.ib svg{width:18px;height:18px;stroke:var(--tx2);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.nav{display:flex;border-top:0.5px solid var(--br);background:var(--sf);flex-shrink:0;padding-bottom:env(safe-area-inset-bottom,0px)}
.nb{flex:1;padding:9px 4px 11px;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;border:none;background:none}
.nb svg{width:20px;height:20px;stroke:var(--tx3);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;transition:stroke .12s}
.nb span{font-size:10px;color:var(--tx3);transition:color .12s}
.nb.on svg{stroke:var(--ac)}
.nb.on span{color:var(--ac)}
.fg{display:flex;flex-direction:column;gap:6px}
.fl{font-size:11px;font-weight:500;color:var(--tx2);letter-spacing:.06em;text-transform:uppercase}
.fi{background:var(--sf);border:0.5px solid var(--br2);border-radius:var(--r);padding:11px 13px;color:var(--tx);font-size:16px;font-family:var(--fn);width:100%;outline:none}
.fi:focus{border-color:var(--ac)}
select.fi{cursor:pointer}
select.fi option{background:var(--sf)}
textarea.fi{min-height:80px;resize:none;line-height:1.5}
.fi-sm{background:var(--bg);border:0.5px solid var(--br2);border-radius:8px;padding:8px 10px;color:var(--tx);font-size:16px;font-family:var(--mo);width:100%;outline:none}
.fi-sm:focus{border-color:var(--ac)}
select.fi-sm option{background:var(--sf)}
.btn{background:var(--ac);color:#000;font-weight:600;font-size:15px;border:none;border-radius:var(--rl);padding:15px;cursor:pointer;width:100%}
.btn:active{opacity:.85}
.btn:disabled{opacity:.35;cursor:not-allowed}
.btn-sec{background:var(--sf2);border:0.5px solid var(--br2);color:var(--tx);font-size:14px;font-weight:500;border-radius:var(--r);padding:12px;cursor:pointer;flex:1}
.btn-del{background:var(--red2);border-color:var(--red);color:var(--red)}
.btn-sav{background:var(--ac);border:none;color:#000;font-size:14px;font-weight:600;border-radius:var(--r);padding:12px;cursor:pointer;flex:2}
.upz{background:var(--sf);border:1px dashed var(--br2);border-radius:var(--rl);padding:28px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;cursor:pointer}
.upz.ok{border-style:solid;border-color:var(--ac)}
.upz svg{width:28px;height:28px;stroke:var(--tx3);fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.upz.ok svg{stroke:var(--ac)}
.upz p{font-size:13px;color:var(--tx2);text-align:center;line-height:1.4}
/* MAP */
.map-wrap{flex:1;position:relative;overflow:hidden;background:#0a0a0f;touch-action:none}
#plan-cvs{position:absolute;top:0;left:0;transform-origin:0 0;will-change:transform}
#mklayer{position:absolute;top:0;left:0;overflow:visible;pointer-events:none}
/* TOOLBAR */
.map-tools{position:absolute;bottom:18px;right:14px;display:flex;flex-direction:column;gap:8px}
.mfab{width:52px;height:52px;border-radius:14px;background:var(--ac);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(240,165,0,.3)}
.mfab svg{width:22px;height:22px;stroke:#000;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.mfab-sm{width:40px;height:40px;border-radius:10px;background:var(--sf);border:0.5px solid var(--br2);cursor:pointer;display:flex;align-items:center;justify-content:center}
.mfab-sm svg{width:17px;height:17px;stroke:var(--tx2);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.map-hint{position:absolute;top:10px;left:50%;transform:translateX(-50%);background:rgba(15,17,23,.88);border:0.5px solid var(--br2);border-radius:99px;padding:5px 12px;font-size:11px;color:var(--tx2);white-space:nowrap;backdrop-filter:blur(6px);pointer-events:none;transition:opacity .3s;max-width:90vw;text-align:center}

/* SHEET */
.ov{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:100;display:none;backdrop-filter:blur(2px)}
.ov.on{display:block}
.sheet{position:fixed;bottom:0;left:0;right:0;z-index:101;background:var(--sf);border-radius:20px 20px 0 0;border-top:0.5px solid var(--br2);transform:translateY(100%);transition:transform .28s cubic-bezier(.32,.72,0,1);max-height:92dvh;display:flex;flex-direction:column}
.sheet.on{transform:translateY(0)}
.sh-handle{width:34px;height:4px;background:var(--br2);border-radius:99px;margin:10px auto 0;flex-shrink:0}
.sh-hdr{padding:14px 18px 11px;border-bottom:0.5px solid var(--br);flex-shrink:0}
.sh-title{font-size:17px;font-weight:600}
.sh-id{font-size:11px;color:var(--ac);font-family:var(--mo);margin-top:2px}
.sh-body{flex:1;overflow-y:auto;padding:14px 18px;display:flex;flex-direction:column;gap:14px;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
.sh-foot{padding:14px 18px calc(14px + env(safe-area-inset-bottom,0px)) 18px;border-top:0.5px solid var(--br);flex-shrink:0;display:flex;gap:10px}
/* PIN EDITOR */
.pin-editor{display:flex;gap:10px;align-items:center}
.pin-prev{width:36px;height:36px;border-radius:6px;transform:rotate(45deg);display:flex;align-items:center;justify-content:center;flex-shrink:0;border:2px solid rgba(255,255,255,.2);transition:background .15s}
.pin-prev span{transform:rotate(-45deg);font-size:9px;font-weight:700;color:#000;font-family:var(--mo);max-width:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;display:block}
.pin-prev.t-fissure{background:var(--red)}
.pin-prev.t-visuel{background:var(--blu)}
.pin-prev.t-autre{background:var(--tx2)}
/* TYPE */
.tr{display:flex;gap:8px}
.tb{flex:1;padding:9px 4px;border-radius:8px;border:0.5px solid var(--br2);background:var(--sf2);cursor:pointer;font-size:12px;font-weight:500;color:var(--tx2);text-align:center;transition:all .12s}
.tb.af{background:var(--red2);border-color:var(--red);color:var(--red)}
.tb.av{background:var(--blu2);border-color:var(--blu);color:var(--blu)}
.tb.aa{background:rgba(154,151,160,.12);border-color:var(--tx2);color:var(--tx)}
/* FISSURE */
.fgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px}
.mf{display:flex;flex-direction:column;gap:4px}
.ml{font-size:11px;color:var(--tx2);font-weight:500}
/* PHOTOS */
.ph-row{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch}
.ph-wrap{position:relative;flex-shrink:0}
.ph-thumb{width:clamp(56px,18vw,70px);height:clamp(56px,18vw,70px);border-radius:8px;object-fit:cover;border:0.5px solid var(--br2);display:block}

.ph-add{width:clamp(56px,18vw,70px);height:clamp(56px,18vw,70px);border-radius:8px;border:1px dashed var(--br2);background:var(--sf2);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0}
.ph-add svg{width:20px;height:20px;stroke:var(--tx3);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
/* LIST */
.li{padding:13px 14px;border-bottom:0.5px solid var(--br);display:flex;align-items:flex-start;gap:11px;cursor:pointer}
.li:active{background:var(--sf)}
.li-dot{width:9px;height:9px;border-radius:2px;transform:rotate(45deg);flex-shrink:0;margin-top:4px}
.li-dot.t-fissure{background:var(--red)}
.li-dot.t-visuel{background:var(--blu)}
.li-dot.t-autre{background:var(--tx2)}
.li-info{flex:1;min-width:0}
.li-id{font-size:11px;font-family:var(--mo);color:var(--ac);margin-bottom:2px}
.li-title{font-size:14px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.li-meta{font-size:12px;color:var(--tx2);margin-top:2px}
.li-pc{font-size:11px;color:var(--tx3);background:var(--sf2);border-radius:4px;padding:2px 6px;flex-shrink:0;align-self:center}
.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px;padding:40px;color:var(--tx2);font-size:14px;text-align:center}
.empty svg{width:44px;height:44px;stroke:var(--tx3);fill:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round}
/* EXPORT */
.exp-stats{background:var(--sf);border:0.5px solid var(--br2);border-radius:var(--rl);padding:18px;display:flex;gap:12px}
.es{flex:1;text-align:center}
.es-n{font-size:24px;font-weight:600;color:var(--ac);font-family:var(--mo)}
.es-l{font-size:10px;color:var(--tx2);text-transform:uppercase;letter-spacing:.05em}
.ec{background:var(--sf);border:0.5px solid var(--br2);border-radius:var(--rl);padding:16px 18px;display:flex;align-items:center;gap:13px;cursor:pointer}
.ec:active{border-color:var(--ac)}
.ec-ic{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.ec-ic svg{width:18px;height:18px;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.ec h3{font-size:14px;font-weight:500}
.ec p{font-size:12px;color:var(--tx2);margin-top:1px}
.ec-b{margin-left:auto;font-size:11px;font-weight:600;padding:3px 8px;border-radius:99px;flex-shrink:0}
/* HOME */
.home-inner{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px 16px;gap:0}
.h-logo{font-family:var(--mo);font-size:11px;color:var(--ac);letter-spacing:.12em;text-transform:uppercase;margin-bottom:10px}
.h-title{font-size:30px;font-weight:600;line-height:1.15;margin-bottom:6px}
.h-title span{color:var(--ac)}
.h-sub{font-size:13px;color:var(--tx2);margin-bottom:36px;line-height:1.5;text-align:center}
.h-actions{display:flex;flex-direction:column;gap:10px;width:100%;max-width:min(380px,100%)}
.h-card{background:var(--sf);border:0.5px solid var(--br2);border-radius:var(--rl);padding:18px;cursor:pointer;display:flex;align-items:center;gap:14px}
.h-card:active{border-color:var(--ac)}
.h-card-ic{width:42px;height:42px;border-radius:10px;background:var(--sf2);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.h-card-ic svg{width:20px;height:20px;stroke:var(--ac);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.h-card h3{font-size:14px;font-weight:500;margin-bottom:2px}
.h-card p{font-size:12px;color:var(--tx2);line-height:1.35}
.toast{position:fixed;bottom:calc(76px + env(safe-area-inset-bottom,0px));left:50%;transform:translateX(-50%) translateY(10px);background:var(--sf2);border:0.5px solid var(--br2);border-radius:99px;padding:9px 18px;font-size:13px;color:var(--tx);z-index:400;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none;white-space:nowrap}
.toast.on{opacity:1;transform:translateX(-50%) translateY(0)}
#ibanner{display:none;position:fixed;bottom:0;left:0;right:0;z-index:500;background:var(--ac);padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px)) 16px;align-items:center;gap:12px}
#ibanner p{flex:1;font-size:13px;font-weight:600;color:#000}
.ib-no{background:rgba(0,0,0,.15);border:none;border-radius:8px;padding:7px 12px;font-size:12px;font-weight:600;color:#000;cursor:pointer}
.ib-yes{background:#000;border:none;border-radius:8px;padding:7px 14px;font-size:12px;font-weight:700;color:var(--ac);cursor:pointer}

@media(max-width:360px){
  .nb span{display:none}
  .nb{padding:10px 4px 12px}
  .sh-body{padding:12px 14px}
  .sh-hdr{padding:12px 14px 10px}
  .sh-foot{padding:10px 14px calc(10px + env(safe-area-inset-bottom,0px)) 14px}
  .h-title{font-size:26px}
  .fgrid{grid-template-columns:1fr}
  .map-tools{bottom:12px;right:10px;gap:6px}
  .mfab{width:46px;height:46px}
  .mfab-sm{width:36px;height:36px}
}
@media(min-width:600px){
  .sh-body{padding:16px 24px}
  .h-actions{max-width:460px}
  .exp-stats{gap:20px}
  .es-n{font-size:28px}
}
@media(display-mode:standalone){
  .hdr{padding-top:max(13px,env(safe-area-inset-top,0px))}
  .scr{height:100dvh}
}

/* TIFF PAGE SELECTOR */
.tiff-sel{position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.8);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:16px;backdrop-filter:blur(4px)}
.tiff-sel h3{font-size:15px;font-weight:600;color:var(--tx);text-align:center}
.tiff-sel p{font-size:12px;color:var(--tx2);text-align:center}
.tiff-pages{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-height:60dvh;overflow-y:auto;padding:4px}
.tiff-page-btn{display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;padding:8px;border-radius:10px;border:1.5px solid var(--br2);background:var(--sf);transition:border-color .15s}
.tiff-page-btn:active{border-color:var(--ac)}
.tiff-page-btn canvas{border-radius:4px;display:block}
.tiff-page-btn span{font-size:11px;color:var(--tx2);font-family:var(--mo)}
.tiff-cancel{background:var(--sf2);border:0.5px solid var(--br2);color:var(--tx);font-size:14px;font-weight:500;border-radius:var(--r);padding:11px 24px;cursor:pointer}
</style>
</head>
<body>
<div class="toast" id="toast"></div>
<div id="ibanner"><p>Installer DiagTerrain ?</p><button class="ib-no" onclick="document.getElementById('ibanner').style.display='none'">Plus tard</button><button class="ib-yes" onclick="installApp()">Installer</button></div>
<div class="ov" id="ov" onclick="closeSheet()"></div>

<!-- TIFF PAGE SELECTOR -->
<div class="tiff-sel" id="tiff-sel" style="display:none">
  <h3>Sélectionner une page</h3>
  <p id="tiff-sel-info">Ce fichier contient plusieurs pages</p>
  <div class="tiff-pages" id="tiff-pages"></div>
  <button class="tiff-cancel" onclick="document.getElementById('tiff-sel').style.display='none'">Annuler</button>
</div>

<!-- SHEET -->
<div class="sheet" id="obs-sheet">
  <div class="sh-handle"></div>
  <div class="sh-hdr">
    <div class="sh-title" id="sh-title">Nouvelle observation</div>
    <div class="sh-id" id="sh-id">OBS-001</div>
  </div>
  <div class="sh-body">
    <div class="fg">
      <div class="fl">Type</div>
      <div class="tr">
        <div class="tb" id="tb-f" onclick="setType('fissure')">Fissuration</div>
        <div class="tb" id="tb-v" onclick="setType('visuel')">Visuel</div>
        <div class="tb" id="tb-a" onclick="setType('autre')">Autre</div>
      </div>
    </div>
    <div class="fg">
      <div class="fl">Étiquette du pin</div>
      <div class="pin-editor">
        <div class="pin-prev t-visuel" id="pin-prev"><span id="pin-prev-txt">01</span></div>
        <input class="fi" id="pin-label" placeholder="ex: P3, Mur S, Façade N…" maxlength="8" oninput="updatePrev()">
      </div>
      <div style="font-size:11px;color:var(--tx3)">Laisser vide = numéro auto · 8 caractères max</div>
    </div>
    <div id="fiss-fields" style="display:none">
      <div class="fl" style="margin-bottom:8px">Caractéristiques fissure</div>
      <div class="fgrid">
        <div class="mf"><div class="ml">Largeur (mm)</div><input class="fi-sm" id="f-larg" type="number" step="0.1" placeholder="0.3"></div>
        <div class="mf"><div class="ml">Longueur (cm)</div><input class="fi-sm" id="f-long" type="number" placeholder="45"></div>
        <div class="mf"><div class="ml">Orientation</div>
          <select class="fi-sm" id="f-ori"><option value="">—</option><option>Verticale</option><option>Horizontale</option><option>Oblique</option><option>En étoile</option><option>Réseau</option></select>
        </div>
        <div class="mf"><div class="ml">Activité</div>
          <select class="fi-sm" id="f-act"><option value="">—</option><option>Active</option><option>Stabilisée</option><option>Inconnue</option></select>
        </div>
      </div>
    </div>
    <div class="fg"><div class="fl">Localisation</div><input class="fi" id="obs-loc" placeholder="ex: Poteau P3, face sud, à 1m20 du sol"></div>
    <div class="fg"><div class="fl">Observation</div><textarea class="fi" id="obs-txt" placeholder="Description, matériaux, gravité estimée…"></textarea></div>
    <div class="fg">
      <div class="fl">Photos</div>
      <div class="ph-row" id="ph-row"></div>
      <input type="file" id="ph-input" accept="image/*" multiple capture="environment" style="display:none" onchange="addPhotos(this)">
    </div>
  </div>
  <div class="sh-foot">
    <button class="btn-sec btn-del" onclick="deleteObs()">Suppr.</button>
    <button class="btn-sav" onclick="saveObs()">Enregistrer</button>
  </div>
</div>

<!-- HOME -->
<div class="scr on" id="scr-home">
  <div class="home-inner">
    <div class="h-logo-img"><img src="data:image/jpeg;base64,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" alt="BTP Ingénierie" style="height:36px;width:auto;display:block;margin:0 auto 8px"></div>
    <h1 class="h-title">Diag<span>Terrain</span></h1>
    <p class="h-sub">Localisation des observations et photos sur plan.<br>Export fiches structurelles.</p>
    <div class="h-actions">
      <!-- Carte mission en cours — affichée si données locales présentes -->
      <div class="h-card" id="resume-card" style="display:none;border-color:var(--ac);position:relative" onclick="resumeLocal()">
        <div class="h-card-ic" style="background:var(--ac2)"><svg viewBox="0 0 24 24" style="stroke:var(--ac)"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div style="flex:1;min-width:0">
          <h3 id="resume-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">—</h3>
          <p id="resume-meta">—</p>
        </div>
        <button onclick="clearLocal(event)" style="background:none;border:none;padding:6px;cursor:pointer;flex-shrink:0" title="Effacer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <button class="btn" onclick="goSetup()">+ Nouvelle mission</button>
      <div class="h-card" onclick="document.getElementById('imp-home').click()">
        <div class="h-card-ic"><svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></div>
        <div><h3>Importer une sauvegarde</h3><p>Reprendre depuis un fichier JSON</p></div>
      </div>
      <input type="file" id="imp-home" accept=".json" style="display:none" onchange="loadJSON(this)">
    </div>
  </div>
</div>

<!-- SETUP -->
<div class="scr" id="scr-setup">
  <div class="hdr"><button class="ib" onclick="goHome()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button><div class="hdr-t">Nouvelle mission</div></div>
  <div style="flex:1;overflow-y:auto;padding:18px 14px;display:flex;flex-direction:column;gap:18px">
    <div class="fg"><div class="fl">Nom de la mission</div><input class="fi" id="p-name" placeholder="ex: Diagnostic post-incendie — Salle polyvalente" oninput="chkSetup()"></div>
    <div class="fg"><div class="fl">Référence affaire</div><input class="fi" id="p-ref" placeholder="ex: 2026-042"></div>
    <div class="fg"><div class="fl">Ingénieur</div><input class="fi" id="p-ing" value="Q. JULLIEN"></div>
    <div class="fg">
      <div class="fl">Plan (PDF, JPG, PNG)</div>
      <div class="upz" id="upz" onclick="document.getElementById('plan-file').click()">
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        <p id="up-label">Appuyer pour charger un plan<br><span style="font-size:11px;color:var(--tx3)">PDF, JPG, PNG, TIFF</span></p>
        <input type="file" id="plan-file" accept="image/*,application/pdf,.tif,.tiff,image/tiff" style="display:none" onchange="handlePlan(this)">
      </div>
    </div>
  </div>
  <div style="padding:14px;border-top:0.5px solid var(--br);flex-shrink:0"><button class="btn" id="btn-start" onclick="startMission()" disabled>Démarrer la mission</button></div>
</div>

<!-- MAP -->
<div class="scr" id="scr-map">
  <div class="hdr">
    <div style="flex:1"><div class="hdr-t" id="map-title">—</div><div class="hdr-s" id="map-ref">—</div></div>
  </div>
  <div class="map-wrap" id="map-wrap">
    <canvas id="plan-cvs"></canvas>
    <svg id="mklayer" style="position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none"></svg>
    <div class="map-hint" id="map-hint">Appui long pour ajouter une observation</div>

  </div>
  <div class="map-tools">
    <div class="mfab-sm" onclick="doZoomIn()"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    <div class="mfab-sm" onclick="doZoomOut()"><svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    <div class="mfab-sm" onclick="fitMap()"><svg viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></div>
    <div class="mfab" onclick="openNewObs(null)"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
  </div>
  <div class="nav">
    <button class="nb on" id="nb-m" onclick="showMap()"><svg viewBox="0 0 24 24"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg><span>Plan</span></button>
    <button class="nb" id="nb-l" onclick="goList()"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/></svg><span>Relevés</span></button>
    <button class="nb" id="nb-e" onclick="goExp()"><svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg><span>Export</span></button>
  </div>
</div>

<!-- LIST -->
<div class="scr" id="scr-list">
  <div class="hdr"><button class="ib" onclick="showMap()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button><div class="hdr-t">Observations</div><button class="ib" onclick="openNewObs(null)"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button></div>
  <div style="flex:1;overflow-y:auto" id="list-body"></div>
  <div class="nav">
    <button class="nb" onclick="showMap()"><svg viewBox="0 0 24 24"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg><span>Plan</span></button>
    <button class="nb on" onclick="goList()"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/></svg><span>Relevés</span></button>
    <button class="nb" onclick="goExp()"><svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg><span>Export</span></button>
  </div>
</div>

<!-- EXPORT -->
<div class="scr" id="scr-exp">
  <div class="hdr"><button class="ib" onclick="showMap()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button><div class="hdr-t">Export</div></div>
  <div style="flex:1;overflow-y:auto;padding:16px 14px;display:flex;flex-direction:column;gap:12px">
    <div class="exp-stats">
      <div class="es"><div class="es-n" id="en-o">0</div><div class="es-l">Obs.</div></div>
      <div class="es"><div class="es-n" id="en-f">0</div><div class="es-l">Fissures</div></div>
      <div class="es"><div class="es-n" id="en-p">0</div><div class="es-l">Photos</div></div>

    </div>
    <div class="ec" onclick="expJSON()"><div class="ec-ic" style="background:var(--ac2)"><svg viewBox="0 0 24 24" stroke="var(--ac)"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><h3>Sauvegarde complète</h3><p>JSON — toutes données + photos</p></div><div class="ec-b" style="background:var(--ac2);color:var(--ac)">JSON</div></div>
    <div class="ec" onclick="expCSV()"><div class="ec-ic" style="background:var(--grn2)"><svg viewBox="0 0 24 24" stroke="var(--grn)"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg></div><div><h3>Tableau CSV</h3><p>Observations + mesures fissures</p></div><div class="ec-b" style="background:var(--grn2);color:var(--grn)">CSV</div></div>
    <div class="ec" onclick="expPDF()"><div class="ec-ic" style="background:var(--blu2)"><svg viewBox="0 0 24 24" stroke="var(--blu)"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="19" x2="12" y2="19"/></svg></div><div><h3>Rapport PDF</h3><p>Plan A4 paysage + tableau portrait</p></div><div class="ec-b" style="background:var(--blu2);color:var(--blu)">PDF</div></div>
  </div>
  <div class="nav">
    <button class="nb" onclick="showMap()"><svg viewBox="0 0 24 24"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg><span>Plan</span></button>
    <button class="nb" onclick="goList()"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/></svg><span>Relevés</span></button>
    <button class="nb on" onclick="goExp()"><svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg><span>Export</span></button>
  </div>
</div>

<script>
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// STATE
let proj={name:'',ref:'',ing:'Q. JULLIEN',date:''};
let obs=[], planImg=null, counter=0;
let editId=null, pendPos=null, curPhotos=[];


// PAN/ZOOM — touch natif propre
let sc=1, px=0, py=0;
let _drag=false, _lx=0, _ly=0, _moved=false, _lpt=null;
let _p1=null, _p2=null, _d0=0, _sc0=1;

function W(){ return document.getElementById('map-wrap'); }
function C(){ return document.getElementById('plan-cvs'); }

function applyT(){
  C().style.transform=`translate(${px}px,${py}px) scale(${sc})`;
  renderMk();
}

function fitMap(){
  const w=W(), c=C();
  if(!c.width) return;
  const f=Math.min(w.clientWidth/c.width, w.clientHeight/c.height)*0.95;
  sc=f;
  px=(w.clientWidth-c.width*sc)/2;
  py=(w.clientHeight-c.height*sc)/2;
  applyT();
}

function doZoomIn(){ zoomAt(1.3, W().clientWidth/2, W().clientHeight/2); }
function doZoomOut(){ zoomAt(0.77, W().clientWidth/2, W().clientHeight/2); }

function zoomAt(f, cx, cy){
  const ns=Math.min(Math.max(sc*f, 0.1), 12);
  px=cx-(cx-px)*ns/sc;
  py=cy-(cy-py)*ns/sc;
  sc=ns; applyT();
}

function s2c(sx, sy){
  const r=W().getBoundingClientRect();
  return {x:(sx-r.left-px)/sc, y:(sy-r.top-py)/sc};
}

function setupMapEvents(){
  const wrap=W();

  wrap.addEventListener('touchstart', e=>{
    e.preventDefault();
    const t=e.touches;
    if(t.length===1){
      _p1={x:t[0].clientX,y:t[0].clientY}; _p2=null;
      _lx=t[0].clientX; _ly=t[0].clientY;
      _moved=false; _drag=true;
      _lpt=setTimeout(()=>{
        if(!_moved){
          navigator.vibrate&&navigator.vibrate(40);
          openNewObs(s2c(_lx,_ly));
        }
      },580);
    } else if(t.length===2){
      clearTimeout(_lpt); _drag=false; _moved=true;
      _p1={x:t[0].clientX,y:t[0].clientY};
      _p2={x:t[1].clientX,y:t[1].clientY};
      _d0=Math.hypot(_p2.x-_p1.x,_p2.y-_p1.y);
      _sc0=sc;
    }
  },{passive:false});

  wrap.addEventListener('touchmove', e=>{
    e.preventDefault();
    const t=e.touches;
    if(t.length===1 && _drag){
      const dx=t[0].clientX-_lx, dy=t[0].clientY-_ly;
      if(Math.abs(dx)+Math.abs(dy)>4){_moved=true; clearTimeout(_lpt);}
      if(_moved){px+=dx; py+=dy; applyT();}
      _lx=t[0].clientX; _ly=t[0].clientY;
    } else if(t.length===2 && _p2){
      const p1={x:t[0].clientX,y:t[0].clientY};
      const p2={x:t[1].clientX,y:t[1].clientY};
      const d=Math.hypot(p2.x-p1.x,p2.y-p1.y);
      const ns=Math.min(Math.max(_sc0*d/_d0,0.1),12);
      const cx=(p1.x+p2.x)/2, cy=(p1.y+p2.y)/2;
      px=cx-(cx-px)*ns/sc; py=cy-(cy-py)*ns/sc;
      sc=ns; applyT();
    }
  },{passive:false});

  wrap.addEventListener('touchend', e=>{
    clearTimeout(_lpt);
    if(e.touches.length===0){
      _drag=false; _p2=null;
    }
  },{passive:false});

  wrap.addEventListener('mousedown', e=>{
    _moved=false; _drag=true; _lx=e.clientX; _ly=e.clientY;
    _lpt=setTimeout(()=>{if(!_moved) openNewObs(s2c(e.clientX,e.clientY));},580);
  });
  wrap.addEventListener('mousemove', e=>{
    if(!_drag) return;
    const dx=e.clientX-_lx, dy=e.clientY-_ly;
    if(Math.abs(dx)+Math.abs(dy)>3){_moved=true; clearTimeout(_lpt);}
    if(_moved){px+=dx; py+=dy; applyT();}
    _lx=e.clientX; _ly=e.clientY;
  });
  wrap.addEventListener('mouseup', e=>{
    clearTimeout(_lpt); _drag=false;
  });
  wrap.addEventListener('wheel', e=>{
    e.preventDefault();
    zoomAt(e.deltaY<0?1.12:0.89, e.clientX, e.clientY);
  },{passive:false});
}

// MARKERS via SVG
function renderMk(){
  const svg=document.getElementById('mklayer');
  svg.innerHTML='';
  obs.forEach(o=>{
    if(o.pos) mkObs(svg,o);
  });
}

const NS='http://www.w3.org/2000/svg';
function el(tag,attrs){const e=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));return e;}

function mkObs(svg,o){
  const sx=o.pos.x*sc+px, sy=o.pos.y*sc+py;
  const lbl=o.pinLabel||String(o.id).padStart(2,'0');
  const col=o.type==='fissure'?'#e05252':o.type==='visuel'?'#4a9eff':'#9a97a0';
  const fs=lbl.length>4?7:lbl.length>2?8:10;
  const g=el('g',{transform:`translate(${sx},${sy})`,cursor:'pointer','pointer-events':'all'});
  // losange = rect tourné 45°, centré à (0,-24)
  g.appendChild(el('rect',{x:'-13',y:'-37',width:'26',height:'26',rx:'4',fill:col,stroke:'rgba(255,255,255,0.35)','stroke-width':'1.5',transform:'rotate(45,0,-24)'}));
  const txt=el('text',{x:'0',y:'-21','text-anchor':'middle','dominant-baseline':'middle',fill:'#000','font-family':'JetBrains Mono,monospace','font-weight':'700','font-size':String(fs)});
  txt.textContent=lbl; g.appendChild(txt);
  g.appendChild(el('line',{x1:'0',y1:'0',x2:'0',y2:'-8',stroke:'rgba(255,255,255,0.25)','stroke-width':'2'}));
  g.addEventListener('click',e=>{e.stopPropagation();openEditObs(o.id);});
  svg.appendChild(g);
}




// OBS SHEET
function nxtId(){ return ++counter; }

function updatePrev(){
  const v=document.getElementById('pin-label').value.trim();
  const n=String(counter+1).padStart(2,'0');
  document.getElementById('pin-prev-txt').textContent=v||n;
}

function openNewObs(pos){
  editId=null; pendPos=pos; clearSheet();
  document.getElementById('sh-title').textContent='Nouvelle observation';
  document.getElementById('sh-id').textContent='OBS-'+String(counter+1).padStart(3,'0');
  updatePrev(); openSheet();
}

function openEditObs(id, keepPhotos){
  const o=obs.find(x=>x.id===id); if(!o)return;
  editId=id;
  document.getElementById('sh-title').textContent='Observation';
  document.getElementById('sh-id').textContent='OBS-'+String(id).padStart(3,'0');
  setType(o.type||'visuel');
  document.getElementById('pin-label').value=o.pinLabel||'';
  document.getElementById('pin-prev-txt').textContent=o.pinLabel||String(id).padStart(2,'0');
  document.getElementById('pin-prev').className='pin-prev t-'+(o.type||'visuel');
  document.getElementById('obs-loc').value=o.loc||'';
  document.getElementById('obs-txt').value=o.text||'';
  if(o.type==='fissure'&&o.fissure){
    document.getElementById('f-larg').value=o.fissure.larg||'';
    document.getElementById('f-long').value=o.fissure.long||'';
    document.getElementById('f-ori').value=o.fissure.ori||'';
    document.getElementById('f-act').value=o.fissure.act||'';
  }
  if(!keepPhotos) curPhotos=(o.photos||[]).map(p=>({src:p.src}));
  renderPhotoRow(curPhotos); openSheet();
}

function clearSheet(){
  setType('visuel');
  document.getElementById('pin-label').value='';
  document.getElementById('obs-loc').value='';
  document.getElementById('obs-txt').value='';
  ['f-larg','f-long'].forEach(i=>document.getElementById(i).value='');
  document.getElementById('f-ori').value=''; document.getElementById('f-act').value='';
  curPhotos=[]; renderPhotoRow([]);
}

let curType='visuel';
function setType(t){
  curType=t;
  document.getElementById('tb-f').className='tb'+(t==='fissure'?' af':'');
  document.getElementById('tb-v').className='tb'+(t==='visuel'?' av':'');
  document.getElementById('tb-a').className='tb'+(t==='autre'?' aa':'');
  document.getElementById('fiss-fields').style.display=t==='fissure'?'block':'none';
  document.getElementById('pin-prev').className='pin-prev t-'+t;
}

function renderPhotoRow(photos){
  const row=document.getElementById('ph-row'); row.innerHTML='';
  photos.forEach((ph,i)=>{
    const w=document.createElement('div'); w.className='ph-wrap';
    const img=document.createElement('img'); img.className='ph-thumb'; img.src=ph.src;
    img.onclick=()=>{if(confirm('Supprimer cette photo ?')){curPhotos.splice(i,1);renderPhotoRow(curPhotos);}};
    w.appendChild(img); row.appendChild(w);
  });
  const add=document.createElement('div'); add.className='ph-add';
  add.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>';
  add.onclick=()=>document.getElementById('ph-input').click();
  row.appendChild(add);
}

async function addPhotos(input){
  for(const f of input.files){ curPhotos.push({src:await toDataURL(f),pos:null}); }
  renderPhotoRow(curPhotos); input.value='';
}

// ══ AUTOSAVE ══
const LS='diagterrain_v3';

// Compresser une image base64 à maxW px de large, qualité q
function compressImg(dataUrl, maxW, q){
  return new Promise(res=>{
    const img=new Image();
    img.onload=()=>{
      const ratio=Math.min(1, maxW/img.width);
      const c=document.createElement('canvas');
      c.width=Math.round(img.width*ratio);
      c.height=Math.round(img.height*ratio);
      c.getContext('2d').drawImage(img,0,0,c.width,c.height);
      res(c.toDataURL('image/jpeg', q));
    };
    img.src=dataUrl;
  });
}

async function autosave(){
  try{
    localStorage.setItem(LS, JSON.stringify({proj, obs, savedAt:Date.now()}));
    // Stocker le plan compressé dans localStorage pour persistance complète
    if(planImg){
      try{
        // Essai direct
        localStorage.setItem(LS+'_plan', planImg);
      }catch(e){
        // Quota : on compresse davantage
        try{
          const small=await compressImg(planImg, 1200, 0.7);
          localStorage.setItem(LS+'_plan', small);
        }catch(e2){
          // Abandon silencieux — le plan ne sera pas persisté
          console.warn('Plan trop lourd pour localStorage');
        }
      }
    }
  }catch(e){
    // Quota global dépassé — sauvegarde sans photos
    try{
      const light={proj, obs:obs.map(o=>({...o,photos:(o.photos||[]).map(p=>({src:''}))})), savedAt:Date.now(), noPhotos:true};
      localStorage.setItem(LS, JSON.stringify(light));
    }catch(e2){}
  }
}

function loadLocal(){
  try{ const r=localStorage.getItem(LS); return r?JSON.parse(r):null; }catch(e){return null;}
}

function refreshHomeCard(){
  const d=loadLocal();
  const card=document.getElementById('resume-card');
  if(!d||!d.proj?.name){card.style.display='none';return;}
  const dt=new Date(d.savedAt);
  const ds=dt.toLocaleDateString('fr-FR')+' '+dt.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
  document.getElementById('resume-name').textContent=d.proj.name;
  document.getElementById('resume-meta').textContent=(d.obs?.length||0)+' obs. · '+ds+(d.noPhotos?' · photos non conservées':'');
  card.style.display='flex';
}

function resumeLocal(){
  const d=loadLocal(); if(!d)return;
  proj=d.proj||{}; obs=d.obs||[];
  counter=obs.reduce((m,o)=>Math.max(m,o.id||0),0);
  planImg=localStorage.getItem(LS+'_plan')||null;
  document.getElementById('map-title').textContent=proj.name||'';
  document.getElementById('map-ref').textContent=proj.ref||'Sans référence';
  showMap();
  if(planImg) setTimeout(initMap,80);
  else toast('Plan non disponible — rechargez-le via Nouvelle mission');
}

function clearLocal(e){
  e.stopPropagation();
  if(!confirm('Effacer la mission en cours ?'))return;
  localStorage.removeItem(LS); localStorage.removeItem(LS+'_plan');
  obs=[]; proj={name:'',ref:'',ing:'Q. JULLIEN',date:''}; planImg=null; counter=0;
  refreshHomeCard(); toast('Mission effacée');
}

function saveObs(){
  const text=document.getElementById('obs-txt').value.trim();
  const loc=document.getElementById('obs-loc').value.trim();
  const pinLabel=document.getElementById('pin-label').value.trim();
  if(!text&&!loc&&curPhotos.length===0){toast('Ajoutez une observation, localisation ou photo');return;}
  const d={type:curType,text,loc,pinLabel,photos:curPhotos.map(p=>({src:p.src})),date:new Date().toLocaleString('fr-FR')};
  if(curType==='fissure') d.fissure={larg:document.getElementById('f-larg').value,long:document.getElementById('f-long').value,ori:document.getElementById('f-ori').value,act:document.getElementById('f-act').value};
  if(editId!==null){const o=obs.find(x=>x.id===editId);Object.assign(o,d);}
  else{d.id=nxtId();d.pos=pendPos;obs.push(d);}
  closeSheet(); renderMk(); autosave().catch(()=>{}); toast('Enregistré');
}

function deleteObs(){
  if(editId===null){closeSheet();return;}
  if(!confirm('Supprimer ?'))return;
  obs=obs.filter(o=>o.id!==editId);
  closeSheet(); renderMk(); renderList(); autosave().catch(()=>{}); toast('Supprimé');
}

function openSheet(){document.getElementById('ov').classList.add('on');document.getElementById('obs-sheet').classList.add('on');}
function closeSheet(){document.getElementById('ov').classList.remove('on');document.getElementById('obs-sheet').classList.remove('on');}

// SCREENS
function showScr(id){document.querySelectorAll('.scr').forEach(s=>s.classList.remove('on'));document.getElementById('scr-'+id).classList.add('on');}
function goHome(){refreshHomeCard();showScr('home');}
function goSetup(){showScr('setup');}
function showMap(){showScr('map');renderMk();}
function goList(){showScr('list');renderList();}
function goExp(){showScr('exp');renderExp();}

// SETUP
function chkSetup(){document.getElementById('btn-start').disabled=!(document.getElementById('p-name').value.trim()&&planImg);}
// Convertir une page TIFF (IFD) en dataURL JPEG
function tiffPageToDataURL(ifd, width, height){
  UTIF.decodeImage(ifd._data, ifd);
  const rgba = UTIF.toRGBA8(ifd);
  const c = document.createElement('canvas');
  c.width = width; c.height = height;
  const ctx = c.getContext('2d');
  const imgData = ctx.createImageData(width, height);
  imgData.data.set(rgba);
  ctx.putImageData(imgData, 0, 0);
  return c.toDataURL('image/jpeg', 0.92);
}

// Afficher le sélecteur de page TIFF
function showTiffSelector(ifds, rawBuffer, fileName){
  const sel = document.getElementById('tiff-sel');
  const pages = document.getElementById('tiff-pages');
  const info = document.getElementById('tiff-sel-info');
  info.textContent = fileName + ' — ' + ifds.length + ' page' + (ifds.length > 1 ? 's' : '');
  pages.innerHTML = '';
  ifds.forEach((ifd, i) => {
    try {
      UTIF.decodeImage(rawBuffer, ifd);
      const rgba = UTIF.toRGBA8(ifd);
      const w = ifd.width, h = ifd.height;
      // Miniature 120px max
      const ratio = Math.min(120/w, 100/h);
      const tw = Math.round(w*ratio), th = Math.round(h*ratio);
      const c = document.createElement('canvas');
      c.width = tw; c.height = th;
      const ctx = c.getContext('2d');
      // Créer image pleine taille puis réduire
      const full = document.createElement('canvas');
      full.width = w; full.height = h;
      const fctx = full.getContext('2d');
      const imgData = fctx.createImageData(w, h);
      imgData.data.set(rgba);
      fctx.putImageData(imgData, 0, 0);
      ctx.drawImage(full, 0, 0, tw, th);
      const btn = document.createElement('div');
      btn.className = 'tiff-page-btn';
      btn.appendChild(c);
      const lbl = document.createElement('span');
      lbl.textContent = 'Page ' + (i+1) + ' — ' + w + '×' + h;
      btn.appendChild(lbl);
      btn.onclick = () => {
        // Reconstruire pleine résolution
        const full2 = document.createElement('canvas');
        full2.width = w; full2.height = h;
        const ctx2 = full2.getContext('2d');
        const id2 = ctx2.createImageData(w, h);
        id2.data.set(rgba);
        ctx2.putImageData(id2, 0, 0);
        planImg = full2.toDataURL('image/jpeg', 0.92);
        sel.style.display = 'none';
        document.getElementById('up-label').innerHTML =
          '<span style="color:var(--ac);font-family:var(--mo);font-size:12px">' + fileName + ' — p.' + (i+1) + '</span>' +
          '<br><span style="font-size:11px;color:var(--grn)">Plan chargé ✓</span>';
        chkSetup();
      };
      pages.appendChild(btn);
    } catch(e) {
      console.warn('TIFF page', i, 'erreur:', e);
    }
  });
  sel.style.display = 'flex';
}

async function handlePlan(input){
  const f=input.files[0]; if(!f)return;
  document.getElementById('upz').classList.add('ok');
  document.getElementById('up-label').innerHTML='<span style="color:var(--ac);font-family:var(--mo);font-size:12px">'+f.name+'</span><br><span style="font-size:11px;color:var(--tx2)">Chargement…</span>';
  const ext = f.name.split('.').pop().toLowerCase();
  if(f.type==='application/pdf'){
    const ab=await f.arrayBuffer();
    const pdf=await pdfjsLib.getDocument({data:ab}).promise;
    if(pdf.numPages > 1){
      // Sélecteur de page PDF
      await showPdfSelector(pdf, f.name);
      return;
    }
    const page=await pdf.getPage(1);
    const vp=page.getViewport({scale:2.5});
    const c=document.createElement('canvas'); c.width=vp.width; c.height=vp.height;
    await page.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
    planImg=c.toDataURL('image/jpeg',.92);
  } else if(ext==='tif'||ext==='tiff'||f.type==='image/tiff'){
    const ab = await f.arrayBuffer();
    const ifds = UTIF.decode(ab);
    if(ifds.length === 0){ toast('Fichier TIFF invalide'); return; }
    if(ifds.length === 1){
      // Page unique — charger directement
      UTIF.decodeImage(ab, ifds[0]);
      const rgba = UTIF.toRGBA8(ifds[0]);
      const w = ifds[0].width, h = ifds[0].height;
      const c = document.createElement('canvas'); c.width=w; c.height=h;
      const ctx = c.getContext('2d');
      const imgData = ctx.createImageData(w, h);
      imgData.data.set(rgba);
      ctx.putImageData(imgData, 0, 0);
      planImg = c.toDataURL('image/jpeg', 0.92);
    } else {
      // Multipage — afficher sélecteur
      showTiffSelector(ifds, ab, f.name);
      return;
    }
  } else {
    planImg=await toDataURL(f);
  }
  document.getElementById('up-label').innerHTML='<span style="color:var(--ac);font-family:var(--mo);font-size:12px">'+f.name+'</span><br><span style="font-size:11px;color:var(--grn)">Plan chargé ✓</span>';
  chkSetup();
}

// Sélecteur de page PDF (pour PDF multipages)
async function showPdfSelector(pdf, fileName){
  const sel = document.getElementById('tiff-sel');
  const pages = document.getElementById('tiff-pages');
  const info = document.getElementById('tiff-sel-info');
  info.textContent = fileName + ' — ' + pdf.numPages + ' pages';
  pages.innerHTML = '';
  for(let i=1; i<=pdf.numPages; i++){
    const page = await pdf.getPage(i);
    const vp = page.getViewport({scale:0.3});
    const c = document.createElement('canvas'); c.width=vp.width; c.height=vp.height;
    await page.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
    const btn = document.createElement('div');
    btn.className = 'tiff-page-btn';
    btn.appendChild(c);
    const lbl = document.createElement('span'); lbl.textContent = 'Page '+i;
    btn.appendChild(lbl);
    const pageNum = i;
    btn.onclick = async () => {
      sel.style.display = 'none';
      const fullVp = page.getViewport({scale:2.5});
      const fc = document.createElement('canvas'); fc.width=fullVp.width; fc.height=fullVp.height;
      await page.render({canvasContext:fc.getContext('2d'),viewport:fullVp}).promise;
      planImg = fc.toDataURL('image/jpeg',.92);
      document.getElementById('up-label').innerHTML =
        '<span style="color:var(--ac);font-family:var(--mo);font-size:12px">' + fileName + ' — p.' + pageNum + '</span>' +
        '<br><span style="font-size:11px;color:var(--grn)">Plan chargé ✓</span>';
      chkSetup();
    };
    pages.appendChild(btn);
  }
  sel.style.display = 'flex';
}
async function startMission(){
  proj={name:document.getElementById('p-name').value.trim(),ref:document.getElementById('p-ref').value.trim(),ing:document.getElementById('p-ing').value.trim(),date:new Date().toLocaleDateString('fr-FR')};
  document.getElementById('map-title').textContent=proj.name;
  document.getElementById('map-ref').textContent=proj.ref||'Sans référence';
  _eventsReady=false;
  try{ await autosave(); }catch(e){}
  showMap(); setTimeout(initMap,80);
}

// MAP INIT
let _eventsReady=false;
function initMap(){
  const cvs=C(), img=new Image();
  img.onload=()=>{
    cvs.width=img.width; cvs.height=img.height;
    cvs.getContext('2d').drawImage(img,0,0);
    fitMap();
    if(!_eventsReady){ setupMapEvents(); _eventsReady=true; }
    renderMk();
  };
  img.src=planImg;
}

// LIST
function renderList(){
  const body=document.getElementById('list-body');
  if(obs.length===0){body.innerHTML='<div class="empty"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><p>Aucune observation.<br>Appui long sur le plan pour en ajouter.</p></div>';return;}
  body.innerHTML=obs.map(o=>`<div class="li" onclick="openEditObs(${o.id})">
    <div class="li-dot t-${o.type}"></div>
    <div class="li-info">
      <div class="li-id">OBS-${String(o.id).padStart(3,'0')}${o.pinLabel?' · <b>'+esc(o.pinLabel)+'</b>':''} · ${o.type.toUpperCase()}</div>
      <div class="li-title">${esc(o.loc||o.text||'—')}</div>
      <div class="li-meta">${o.date}${o.type==='fissure'&&o.fissure?.larg?' · '+o.fissure.larg+' mm':''}</div>
    </div>
    ${(o.photos||[]).length?'<div class="li-pc">'+(o.photos||[]).length+(o.photos.length>1?' photos':' photo')+'</div>':''}
  </div>`).join('');
}

// EXPORT
function renderExp(){
  document.getElementById('en-o').textContent=obs.length;
  document.getElementById('en-f').textContent=obs.filter(o=>o.type==='fissure').length;
  document.getElementById('en-p').textContent=obs.reduce((a,o)=>a+(o.photos||[]).length,0);

}

function expJSON(){dl(new Blob([JSON.stringify({proj,obs,planImg},null,2)],{type:'application/json'}),(proj.ref||'mission')+'_diagterrain.json');toast('Sauvegarde exportée');}

function expCSV(){
  const hdr=['ID','Pin','Type','Localisation','Observation','Date','Larg.(mm)','Long.(cm)','Orientation','Activité','Photos','Photos localisées'];
  const rows=obs.map(o=>['OBS-'+String(o.id).padStart(3,'0'),o.pinLabel||'',o.type,o.loc||'',o.text||'',o.date,o.fissure?.larg||'',o.fissure?.long||'',o.fissure?.ori||'',o.fissure?.act||'',(o.photos||[]).length,(o.photos||[]).filter(p=>p.pos).length]);
  dl(new Blob(['\uFEFF',[hdr,...rows].map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(';')).join('\n')],{type:'text/csv;charset=utf-8'}),(proj.ref||'mission')+'_observations.csv');
  toast('CSV exporté');
}

async function expPDF(){
  if(!planImg){ toast('Chargez un plan dabord'); return; }
  toast('Génération PDF…');
  const { jsPDF } = window.jspdf;

  // ── PAGE 1 : PLAN A4 PAYSAGE AVEC PINS ──
  const doc = new jsPDF({ orientation:'landscape', unit:'mm', format:'a4' });
  const PW=297, PH=210; // A4 paysage mm
  const marg=12;

  // En-tête
  doc.setFillColor(15,17,23);
  doc.rect(0,0,PW,18,'F');
  doc.setFontSize(10); doc.setTextColor(240,165,0); doc.setFont('helvetica','bold');
  doc.text('DIAGTERRAIN — BTP INGÉNIERIE', marg, 11);
  doc.setTextColor(154,151,160); doc.setFont('helvetica','normal'); doc.setFontSize(8);
  doc.text(proj.name||'', PW/2, 11, {align:'center'});
  doc.text('Réf. '+(proj.ref||'—')+'  ·  '+proj.ing+'  ·  '+proj.date, PW-marg, 11, {align:'right'});

  // Trait séparateur
  doc.setDrawColor(240,165,0); doc.setLineWidth(0.4);
  doc.line(marg,18,PW-marg,18);

  // Zone plan
  const planY=22, planH=PH-planY-marg;
  const planW=PW-2*marg;

  // Dessiner le plan avec pins
  const cvs=document.getElementById('plan-cvs');
  let annotated=planImg;
  if(cvs.width>0){
    const c=document.createElement('canvas'); c.width=cvs.width; c.height=cvs.height;
    const ctx=c.getContext('2d');
    const img=new Image(); img.src=planImg; ctx.drawImage(img,0,0);
    // Calculer l'échelle pour les pins (taille adaptée à la résolution du canvas)
    const pinScale = Math.max(cvs.width, cvs.height) / 800;
    const pinR = Math.round(16 * pinScale);
    const fontSize = Math.round(11 * pinScale);
    obs.forEach(o=>{
      if(!o.pos)return;
      const col=o.type==='fissure'?[224,82,82]:o.type==='visuel'?[74,158,255]:[154,151,160];
      const lbl=o.pinLabel||String(o.id).padStart(2,'0');
      const x=o.pos.x, y=o.pos.y;
      // Losange
      ctx.save(); ctx.translate(x, y-pinR*1.5); ctx.rotate(Math.PI/4);
      ctx.fillStyle=`rgb(${col[0]},${col[1]},${col[2]})`;
      ctx.beginPath(); ctx.roundRect(-pinR,-pinR,pinR*2,pinR*2, Math.round(3*pinScale)); ctx.fill();
      ctx.restore();
      ctx.fillStyle='#000';
      ctx.font=`bold ${lbl.length>4?Math.round(fontSize*0.75):fontSize}px monospace`;
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(lbl, x, y-pinR*1.5);
      // Queue
      ctx.strokeStyle='rgba(255,255,255,0.4)'; ctx.lineWidth=Math.round(2*pinScale);
      ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x,y-pinR*0.6); ctx.stroke();
    });
    annotated=c.toDataURL('image/jpeg',.92);
  }

  // Ajuster l'image au cadre en conservant le ratio
  const tmpImg=new Image(); tmpImg.src=annotated;
  await new Promise(r=>{tmpImg.onload=r;});
  const iW=tmpImg.width, iH=tmpImg.height;
  const scaleX=planW/iW, scaleY=planH/iH;
  const scale=Math.min(scaleX,scaleY);
  const dW=iW*scale, dH=iH*scale;
  const dX=marg+(planW-dW)/2, dY=planY+(planH-dH)/2;
  doc.addImage(annotated,'JPEG',dX,dY,dW,dH);

  // Légende
  doc.setFontSize(6.5); doc.setTextColor(154,151,160);
  const legY=PH-marg+3;
  doc.setFillColor(224,82,82); doc.rect(marg,legY-2.5,3,3,'F');
  doc.text('Fissuration',marg+4,legY);
  doc.setFillColor(74,158,255); doc.rect(marg+22,legY-2.5,3,3,'F');
  doc.text('Visuel',marg+26,legY);
  doc.setFillColor(154,151,160); doc.rect(marg+40,legY-2.5,3,3,'F');
  doc.text('Autre',marg+44,legY);
  doc.text('Page 1/'+String(Math.ceil(obs.length/20)+1), PW-marg, legY, {align:'right'});

  // ── PAGES SUIVANTES : TABLEAU DES OBSERVATIONS PORTRAIT ──
  const ROW_H=8; // hauteur ligne mm
  const COLS=[
    {label:'Réf.', w:18},
    {label:'Pin', w:16},
    {label:'Type', w:18},
    {label:'Localisation', w:52},
    {label:'Observation', w:62},
    {label:'Date', w:24},
  ];
  const FISS_COLS=[
    {label:'L. (mm)', w:16},
    {label:'Long. (cm)', w:18},
    {label:'Orient.', w:20},
    {label:'Activité', w:18},
  ];
  const allCols=[...COLS,...FISS_COLS];
  const totalW=allCols.reduce((a,c)=>a+c.w,0); // ~244
  const PA=210, PB=297; // A4 portrait
  const mP=10;
  const tableW=PA-2*mP;
  const scFactor=tableW/totalW;

  function addTablePage(pageNum, totalPages){
    doc.addPage('a4','portrait');
    // En-tête
    doc.setFillColor(15,17,23); doc.rect(0,0,PA,16,'F');
    doc.setFontSize(9); doc.setTextColor(240,165,0); doc.setFont('helvetica','bold');
    doc.text('RELEVÉ DES OBSERVATIONS', mP, 10);
    doc.setTextColor(154,151,160); doc.setFont('helvetica','normal'); doc.setFontSize(7.5);
    doc.text(proj.name||'', PA/2, 10, {align:'center'});
    doc.text('Page '+pageNum+'/'+totalPages, PA-mP, 10, {align:'right'});
    doc.setDrawColor(240,165,0); doc.setLineWidth(0.4);
    doc.line(mP,16,PA-mP,16);
    return 22; // Y de départ du tableau
  }

  const totalPages=Math.ceil(obs.length/20)+1;
  const ROWS_PER_PAGE=Math.floor((PB-40)/ROW_H);
  let curY=0, curPage=2;

  // En-têtes colonnes
  function drawHeaders(y){
    doc.setFillColor(30,35,55); doc.rect(mP,y,tableW,ROW_H,'F');
    doc.setFontSize(6.5); doc.setFont('helvetica','bold'); doc.setTextColor(240,165,0);
    let cx=mP;
    allCols.forEach(col=>{
      const cw=col.w*scFactor;
      doc.text(col.label, cx+1.5, y+5, {maxWidth:cw-2});
      cx+=cw;
    });
    // Lignes verticales header
    doc.setDrawColor(60,65,85); doc.setLineWidth(0.2);
    cx=mP;
    allCols.forEach(col=>{
      const cw=col.w*scFactor;
      doc.line(cx,y,cx,y+ROW_H);
      cx+=cw;
    });
    doc.line(cx,y,cx,y+ROW_H);
    doc.line(mP,y,PA-mP,y);
    doc.line(mP,y+ROW_H,PA-mP,y+ROW_H);
    return y+ROW_H;
  }

  // Première page tableau
  curY=addTablePage(curPage, totalPages);
  curY=drawHeaders(curY);

  obs.forEach((o,idx)=>{
    // Nouvelle page si nécessaire
    if(curY+ROW_H > PB-14){
      curPage++;
      curY=addTablePage(curPage, totalPages);
      curY=drawHeaders(curY);
    }

    // Couleur de fond alternée
    if(idx%2===0){ doc.setFillColor(26,29,39); doc.rect(mP,curY,tableW,ROW_H,'F'); }

    doc.setFontSize(6.5); doc.setFont('helvetica','normal');
    const col=o.type==='fissure'?[224,82,82]:o.type==='visuel'?[74,158,255]:[154,151,160];
    const lbl=o.pinLabel||String(o.id).padStart(2,'0');

    const rowData=[
      'OBS-'+String(o.id).padStart(3,'0'),
      lbl,
      o.type.toUpperCase(),
      o.loc||'',
      o.text||'',
      o.date?.split(' ')[0]||'',
      o.fissure?.larg||'',
      o.fissure?.long||'',
      o.fissure?.ori||'',
      o.fissure?.act||'',
    ];

    let cx=mP;
    rowData.forEach((val,ci)=>{
      const cw=allCols[ci].w*scFactor;
      // Couleur type
      if(ci===2){ doc.setTextColor(...col); doc.setFont('helvetica','bold'); }
      else { doc.setTextColor(220,217,232); doc.setFont('helvetica','normal'); }
      doc.text(String(val||''), cx+1.5, curY+5, {maxWidth:cw-3});
      cx+=cw;
    });

    // Lignes
    doc.setDrawColor(40,45,65); doc.setLineWidth(0.15);
    cx=mP;
    allCols.forEach(col2=>{
      const cw=col2.w*scFactor;
      doc.line(cx,curY,cx,curY+ROW_H);
      cx+=cw;
    });
    doc.line(cx,curY,cx,curY+ROW_H);
    doc.line(mP,curY+ROW_H,PA-mP,curY+ROW_H);

    curY+=ROW_H;

    // Photos sous la ligne si présentes
    if((o.photos||[]).length>0){
      const phH=22;
      if(curY+phH > PB-14){ curPage++; curY=addTablePage(curPage,totalPages); curY=drawHeaders(curY); }
      let px2=mP+2;
      for(const ph of o.photos){
        if(!ph.src) continue;
        try{
          doc.addImage(ph.src,'JPEG',px2,curY+1,18,16);
          px2+=20;
          if(px2+20>PA-mP) break;
        }catch(e){}
      }
      curY+=phH;
    }
  });

  doc.save((proj.ref||'mission')+'_rapport.pdf');
  toast('PDF généré');
}

// JSON IMPORT
async function loadJSON(input){
  const f=input.files[0]; if(!f)return;
  const data=JSON.parse(await f.text());
  proj=data.proj||{}; obs=data.obs||[]; planImg=data.planImg||null;
  counter=obs.reduce((m,o)=>Math.max(m,o.id||0),0);
  document.getElementById('map-title').textContent=proj.name||'';
  document.getElementById('map-ref').textContent=proj.ref||'';
  try{ await autosave(); }catch(e){}
  showMap(); setTimeout(initMap,80);
  toast('Mission chargée — '+obs.length+' observations'); input.value='';
}

// UTILS
function toDataURL(f){return new Promise(r=>{const fr=new FileReader();fr.onload=e=>r(e.target.result);fr.readAsDataURL(f);});}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function dl(blob,name){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),5000);}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),2800);}

// PWA
let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;document.getElementById('ibanner').style.display='flex';});
function installApp(){if(!deferredPrompt)return;deferredPrompt.prompt();deferredPrompt.userChoice.then(r=>{deferredPrompt=null;document.getElementById('ibanner').style.display='none';if(r.outcome==='accepted')toast('DiagTerrain installée !');});}
window.addEventListener('appinstalled',()=>{document.getElementById('ibanner').style.display='none';toast('Installée avec succès');});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));}

// INIT — afficher la carte "mission en cours" au démarrage
window.addEventListener('DOMContentLoaded', ()=>{ refreshHomeCard(); });
</script>
</body>
</html>
