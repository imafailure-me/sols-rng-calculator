// Sol's RNG Aura Calculator
// Created by WhiteYN.
// This file contains the calculator data and logic.
// It is intentionally dependency-free so the site works on GitHub Pages without a build step.

const raw = `
Nothing|Basic|1||The Limbo|standard
Common|Basic|2|||standard
Uncommon|Basic|4|||standard
Good|Basic|5|||standard
Natural|Basic|8|||standard
Rare|Basic|16|||standard
Divinus|Basic|32|6|Heaven|standard
Crystallized|Basic|64|||standard
Dizzy|Basic|123|||standard
Rage|Basic|128|||standard
Topaz|Basic|150|||standard
Ruby|Basic|350|||standard
Forbidden|Basic|403|202|Cyberspace|standard
Emerald|Basic|500|||standard
Gilded|Basic|512|128|Sandstorm|standard
Ink|Basic|700|||standard
Jackpot|Basic|777|194|Sandstorm|standard
Sapphire|Basic|800|||standard
Aquamarine|Basic|900|||standard
Wind|Basic|900|300|Windy|standard
Diaboli|Epic|1004|||standard
Penumbra|Epic|1010|||standard
Umbra|Epic|1010|||standard
Precious|Epic|1024|||standard
Hydrogen|Epic|1111|||standard
Atomic|Epic|1180|||standard
Glock|Epic|1700|||standard
Magnetic|Epic|2048|||standard
Ash|Epic|2300|||standard
Glacier|Epic|2304|768|Snowy|standard
Player|Epic|3000|1500|Cyberspace|standard
Flora|Epic|3700|||standard
Cola|Epic|3999|||standard
Sidereum|Epic|4096|||standard
Bleeding|Epic|4444|||standard
Flutter|Epic|5000|||standard
Targeted|Epic|5000|||standard
:Flushed:|Epic|6900|||standard
Hazard|Epic|7000|1400|Corruption|standard
Doodle|Epic|7500|||standard
Quartz|Epic|8192|||standard
Honey|Epic|8335|||standard
Lost Soul|Epic|9200|||standard
Atomic : Ribonucleic|Epic|9876|||standard
★|Unique|100||Dreamspace|standard
Undead|Unique|12000|2000|Hell|standard
Corrosive|Unique|12000|2400|Corruption|standard
Kawaii|Unique|12300|||standard
Rage : Heated|Unique|12800|||standard
Ink : Leak|Unique|14000|||standard
Powered|Unique|16384|||standard
Gilded : Crowned|Unique|20000|5000|Sandstorm|standard
Marsh|Unique|25000|||standard
Copper|Unique|29000|||standard
Watt|Unique|32768|||standard
Aquatic|Unique|40000|||standard
Solar|Unique|50000|5000|Daytime|standard
Lunar|Unique|50000|5000|Nighttime|standard
Starlight|Unique|50000|10000|Starfall|standard
StarRider|Unique|50000|10000|Starfall|standard
Pleiades|Unique|65358||Singularity|standard
Flushed : Lobotomy|Unique|69000|||standard
Hazard : Rays|Unique|70000|14000|Corruption|standard
Nautilus|Unique|70000|||standard
Permafrost|Unique|73500|24500|Snowy|standard
Pulsar|Unique|83345||Singularity|standard
Constella|Unique|86988||Singularity|standard
Flow|Unique|87000|29000|Windy|standard
Stormal|Unique|90000|30000|Windy|standard
★★|Legendary|1000||Dreamspace|standard
Fault|Legendary|3000||Glitched|standard
Exotic|Legendary|99999|||standard
Diaboli : Void|Legendary|100400|||standard
Comet|Legendary|120000|24000|Singularity|standard
Divinus : Angel|Legendary|120000|24000|Heaven|standard
Jade|Legendary|125000|||standard
Spectre|Legendary|140000|||standard
Jazz|Legendary|160000|||standard
Aether|Legendary|180000|||standard
Bounded|Legendary|200000|||standard
Lantern|Legendary|333333|||standard
Celestial|Legendary|350000|||standard
Vortex|Legendary|399999|133333|Windy|standard
Terror|Legendary|400000|||standard
Hope|Legendary|488725|97745|Heaven|standard
Raven|Legendary|500000||The Limbo|standard
Warlock|Legendary|666000|||standard
Undead : Devil|Legendary|666666|111111|Hell|standard
Kyawthuite|Legendary|850000|||standard
★★★|Mythic|10000||Dreamspace|standard
Arcane|Mythic|1000000|||standard
Starlight : Kunzite|Mythic|1000000|200000|Starfall|standard
Gothic|Mythic|1000001||The Limbo|standard
Magnetic : Reverse Polarity|Mythic|1024000|||standard
Undefined|Mythic|1111000|1111|Null|standard
Rage : Brawler|Mythic|1280000|||standard
Symbiosis|Mythic|1331201|266240|Corruption|standard
Astral|Mythic|1336000|267200|Starfall|standard
Cosmos|Mythic|1520000|||standard
Obsidian|Mythic|1750000|||standard
Archmage|Mythic|1766000|||standard
Player : Respawn|Mythic|1999999|999999|Cyberspace|standard
Gravitational|Mythic|2000000|||standard
Bounded : Unbound|Mythic|2000000|||standard
Flutter : Buggify|Mythic|2000000|||standard
Flowed|Mythic|2121121|2121|Null|standard
Virtual|Mythic|2500000|1250000|Cyberspace|standard
Vega|Mythic|2580000||Singularity|standard
Parasite|Mythic|3000000|600000|Corruption|standard
Orion|Mythic|3000000|600000|Starfall|standard
Apatite|Mythic|3133133|||standard
Savior|Mythic|3200000|||standard
Shiftlock|Mythic|3325000|3325|Null|standard
Evanescent|Mythic|3360000|840000|Rainy|standard
Cosmos : Alice|Mythic|3500000|||standard
Crystallized : Bejeweled|Mythic|3600000|||standard
Aquatic : Flame|Mythic|4000000|||standard
Poseidon|Mythic|4000000|1000000|Rainy|standard
Metabytes|Mythic|4000000|2000000|Cyberspace|standard
Wraith|Mythic|4100000|||standard
Zeus|Mythic|4500000|||standard
Solar : Solstice|Mythic|5000000|500000|Daytime|standard
Galaxy|Mythic|5000000|1000000|Singularity|standard
Lunar : Full Moon|Mythic|5000000|500000|Nighttime|standard
Anima|Mythic|5730000||The Limbo|standard
Twilight|Mythic|6000000|600000|Nighttime|standard
Astronaut|Mythic|6117186||Singularity|standard
Origin|Mythic|6500000|||standard
Hades|Mythic|6666666|1111111|Hell|standard
Celestial : Divine|Mythic|7000000|||standard
Anubis|Mythic|7200000|1800000|Sandstorm|standard
Refraction|Mythic|7242000|||standard
Faith|Mythic|7250000|1450000|Heaven|standard
Hyper-Volt|Mythic|7500000|||standard
Velocity|Mythic|7630000|||standard
Nautilus : Lost|Mythic|7700000|||standard
Divinus : Guardian|Mythic|7777777|1555555|Heaven|standard
Outlaw|Mythic|8000000|2000000|Sandstorm|standard
Soultorn|Mythic|8333333|||standard
Harnessed|Mythic|8500000|||standard
Nihility|Mythic|9000000|9000|Null|standard
Helios|Mythic|9000000|||standard
Stargazer|Mythic|9200000|1840000|Starfall|standard
Jade : Purity|Mythic|9250000|||standard
Amethyst|Mythic|9333700|||standard
Starscourge|Exalted|10000000|2000000|Starfall|standard
Sharkyn|Exalted|10000000|2500000|Rainy|standard
Guardian|Exalted|10000000|||standard
Empty|Exalted|11111111|||standard
Melodic|Exalted|11300000|||standard
Sailor|Exalted|12000000|3000000|Rainy|standard
Imaginary|Exalted|12200000||The Limbo|standard
Stormal : Hurricane|Exalted|13500000|4500000|Windy|standard
Sirius|Exalted|14000000|2800000|Starfall|standard
Arcane : Legacy|Exalted|15000000|||standard
Icarus|Exalted|15660000|3132000|Heaven|standard
Lullaby|Exalted|17000000|1700000|Nighttime|standard
Chromatic|Exalted|20000000|||standard
Plasma|Exalted|20600000|||standard
Oculus|Exalted|23233340|4646668|Heaven|standard
Aviator|Exalted|24000000|8000000|Windy|standard
Ruby : Brimstone|Exalted|24060000|||standard
Apotheosis|Exalted|24691356|||standard
Centurion|Exalted|25000000||Singularity|standard
Blizzard|Exalted|27315000|9105000|Snowy|standard
Arcane : Dark|Exalted|30000000|||standard
Flora : Florest|Exalted|32800000|||standard
Ethereal|Exalted|35000000|||standard
Virtual : Fatal Error|Exalted|40413000|20206500|Cyberspace|standard
Juxtaposition|Exalted|40440400||The Limbo|standard
Overseer|Exalted|45000000|||standard
Exotic : Apex|Exalted|49999500|||standard
Matrix|Exalted|50000000|25000000|Cyberspace|standard
Runic|Exalted|50000000|||standard
Sentinel|Exalted|60000000|||standard
Twilight : Iridescent Memory|Exalted|60000000|6000000|Nighttime|standard
Antivirus|Exalted|62500000|31250000|Cyberspace|standard
Dominion|Exalted|70000000|14000000|Heaven|standard
Starborn|Exalted|72000000|14400000|Starfall|standard
Melodic : Serenade|Exalted|77000000|7700000|Nighttime|standard
Sailor : Flying Dutchman|Exalted|80000000|20000000|Rainy|standard
Carriage|Exalted|80000000|||standard
Aquaria|Exalted|80000000|20000000|Rainy|standard
Virtual : Full Control|Exalted|80000000|40000000|Cyberspace|standard
Harnessed : Elements|Exalted|85000000|||standard
Hellbound|Exalted|85000000|14166666|Hell|standard
Runic : Wilt|Exalted|87388744|||standard
Virtual : WorldWide|Exalted|87500000|43750000|Cyberspace|standard
Atomic : Nucleus|Exalted|92118000|||standard
Quartz : Rose|Exalted|97500000|||standard
Chromatic : Genesis|Glorious|99999999|||standard
Starscourge : Radiant|Glorious|100000000|20000000|Starfall|standard
Spectraflow|Glorious|100000000|||standard
Lily|Glorious|112000000|||standard
Overture|Glorious|150000000|||standard
Bounded : Aichmalotos|Glorious|170000000|||standard
Symphony|Glorious|175000000|||standard
Twilight : Withering Grace|Glorious|180000000|18000000|Nighttime|standard
Felled|Glorious|180000000|30000000|Hell|standard
Impeached|Glorious|200000000|40000000|Corruption|standard
Raven : Plague|Glorious|200000000||The Limbo|standard
Lumenpool|Glorious|220000000|55000000|Rainy|standard
Hyper-Volt : Ever-Storm|Glorious|225000000|||standard
Virtual Memory|Glorious|232232232|116116116|Cyberspace|standard
Astral : Zodiac|Glorious|267200000|53440000|Starfall|standard
Prophecy|Glorious|275649430|55129886|Heaven|standard
Exotic : Void|Glorious|299999999|||standard
Overture : History|Glorious|300000000|||standard
Bloodlust|Glorious|300000000|50000000|Hell|standard
Maelstrom|Glorious|309999999|103333333|Windy|standard
Dreamer|Glorious|315000000|31500000|Nighttime|standard
Perpetual|Glorious|315000000|||standard
Lotusfall|Glorious|320000000|||standard
Cytokinesis|Glorious|330400472|165200236|Cyberspace|standard
Jazz : Orchestra|Glorious|336870912|||standard
Archangel|Glorious|350000000|70000000|Heaven|standard
Atlas|Glorious|360000000|90000000|Sandstorm|standard
Flora : Evergreen|Glorious|370073730|||standard
Chillsear|Glorious|375000000|125000000|Snowy|standard
Celestial : Eclipse|Glorious|384400000|||standard
Abyssal Hunter|Glorious|400000000|100000000|Rainy|standard
Gargantua|Glorious|430000000|86000000|Singularity|standard
Apostolos|Glorious|444000000|222000000||unobtainable
Unknown|Glorious|444444444||The Limbo|standard
Kyawthuite : Remembrance|Glorious|450000000|||standard
Ruins|Glorious|500000000|||standard
Matrix : Overdrive|Glorious|503000000|251500000|Cyberspace|standard
Sailor : Admiral|Glorious|540000000|135000000|Rainy|standard
Elude|Glorious|555555555||The Limbo|standard
Sophyra|Glorious|570000000|||standard
Matrix : Reality|Glorious|601020102|300510051|Cyberspace|standard
Sloth|Glorious|650000000|||standard
Prologue|Glorious|666616111||The Limbo|standard
Pythios|Glorious|666666666|111111111|Hell|standard
Sovereign|Glorious|750000000|||standard
Ruins : Withered|Glorious|800000000|||standard
Aegis|Glorious|825000000|412500000|Cyberspace|standard
Dreamscape|Glorious|850000000||The Limbo|standard
Ascendant|Glorious|935000000|187000000|Heaven|standard
Nyctophobia|Transcendent|1011111010||The Limbo|standard
Pixelation|Transcendent|1073741824|536870912|Cyberspace|standard
Luminosity|Transcendent|1200000000|||standard
Breakthrough|Transcendent|1999999999|||standard
Equinox|Transcendent|2500000000|||standard
Memory|Challenged|100|||challenge-unaffected
Neferkhaf|Challenged|1000|||challenge-unaffected
Fragments of the Crimson Moon|Challenged|1000|||challenge-unaffected
Meta|Challenged|10000||Cyberspace|challenge-unaffected
Illusionary|Challenged|10000000||Cyberspace|challenge-unaffected
Glitch|Challenged|12210110||Glitched|challenge
Borealis|Challenged|13333333||Dreamspace|challenge
Projection|Challenged|197000000||Singularity|challenge
Point : Zero|Challenged|521121900||Singularity|challenge
Leviathan|Challenged|1730400000||Rainy|challenge
Dream Catcher|Challenged|2222222222||Nighttime|challenge
Oppression|Challenged+|220000000||Glitched|challenge
Dreammetric|Challenged+|320000000||Dreamspace|challenge
Astraios|Challenged+|1750000000||Singularity|challenge
Monarch|Challenged+|3000000000||Corruption|challenge
Lightning|Exclusive|40000|||unobtainable
`;

const auras = raw.trim().split(/\n+/).map(l=>{
 const [name,tier,base,biomeOdds,biome,kind]=l.split('|');
 return {name,tier,base:+base,biomeOdds:biomeOdds?+biomeOdds:null,biome:biome||'',kind:kind||'standard'};
}).filter(a=>a.base>0);
for (const a of auras) {
 if (['Unknown'].includes(a.name)) a.kind = 'unobtainable';
}

const devicePresets = [
 {id:0,name:'0 - Nothing', desc:'Default bonus roll: every 10 rolls, x2.', bonusEvery:10, bonusMult:2, flatLuck:0, luckMult:1, timedMult:1, timedUptime:0, removeBonus:false, speedMult:1, customPattern:null},
 {id:1,name:'1 - Jackpot', desc:'+77% luck and a small rollspeed boost. Default bonus roll is kept.', bonusEvery:10, bonusMult:2, flatLuck:0.77, luckMult:1, timedMult:1, timedUptime:0, removeBonus:false, speedMult:1.07, customPattern:null},
 {id:2,name:'2 - Flesh', desc:'Every roll is treated like a x1.3 bonus roll.', bonusEvery:1, bonusMult:1.3, flatLuck:0, luckMult:1, timedMult:1, timedUptime:0, removeBonus:false, speedMult:1, customPattern:null},
 {id:3,name:'3 - Gravitational', desc:'Bonus roll multiplier becomes x6.', bonusEvery:10, bonusMult:6, flatLuck:0, luckMult:1, timedMult:1, timedUptime:0, removeBonus:false, speedMult:1, customPattern:null},
 {id:4,name:'4 - Darkshader', desc:'Bonus roll cooldown becomes 5. Darkshade gives x2.5 luck for 10 rolls every 20 rolls.', bonusEvery:5, bonusMult:2, flatLuck:0, luckMult:1, timedMult:2.5, timedUptime:50, removeBonus:false, speedMult:1, customPattern:'darkshader'},
 {id:9,name:'5 - Pole Light Core Device', desc:'Uses the Pole Light Core formula for Polar Shift / instant-roll scaling. Custom settings are ignored for this preset.', bonusEvery:10, bonusMult:2, flatLuck:0, luckMult:1, timedMult:1, timedUptime:0, removeBonus:false, speedMult:1, customPattern:'polelight'},
 {id:10,name:'6 - The Thing', desc:'Bonus roll multiplier becomes x11.', bonusEvery:10, bonusMult:11, flatLuck:0, luckMult:1, timedMult:1, timedUptime:0, removeBonus:false, speedMult:1, customPattern:null},
 {id:11,name:'7 - Unfathomable Ruins', desc:'Removes bonus roll. Every 1000 rolls grants x100 base luck for the next 10 rolls.', bonusEvery:10, bonusMult:2, flatLuck:0, luckMult:1, timedMult:1, timedUptime:0, removeBonus:true, speedMult:1, customPattern:'unfathomable'},
 {id:99,name:'Custom / manual', desc:'Use the custom fields below.', bonusEvery:10, bonusMult:2, flatLuck:0, luckMult:1, timedMult:1, timedUptime:0, removeBonus:false, speedMult:1, customPattern:null}
];

const biomeWeights = [
 {name:'Windy', spawn:500, duration:120},
 {name:'Snowy', spawn:600, duration:120},
 {name:'Rainy', spawn:750, duration:120},
 {name:'Sandstorm', spawn:3000, duration:650},
 {name:'Hell', spawn:6666, duration:660},
 {name:'Starfall', spawn:7500, duration:600 * 0.99},
 {name:'Singularity', spawn:750000, duration:1200},
 {name:'Heaven', spawn:7777, duration:240},
 {name:'Corruption', spawn:9000, duration:650},
 {name:'Null', spawn:10100, duration:99},
 {name:'Glitched', spawn:5148445, duration:164},
 {name:'Dreamspace', spawn:3500000, duration:192}
];

const displayFactors = {seconds:1, minutes:60, hours:3600, days:86400, weeks:604800, months:2629800, years:31557600};

function fmtNum(x){return isFinite(x)?Math.round(x).toLocaleString('en-US'):'∞'}
function fmtPct(x){return (x*100).toFixed(x<0.00001?7:x<0.001?5:x<0.01?4:x<0.1?3:2)+'%'}
function fmtTime(sec){ if(!isFinite(sec)) return '∞'; if(sec<60) return sec.toFixed(1)+' s'; if(sec<3600) return (sec/60).toFixed(1)+' min'; if(sec<86400) return (sec/3600).toFixed(2)+' h'; return (sec/86400).toFixed(2)+' d'; }
function clamp01(x){return Math.max(0,Math.min(1,x))}
function poleLightSpeedMultiplier(){
 const s=(+document.getElementById('speed').value||100)/100;
 return (27 + 6) / (25 + ((1/(s + 10))*5)/(1/s));
}
function poleLightM1(){ return 1; }
function poleLightLuckMultiplier(L){
 const m=poleLightM1();
 return 1 + ((3*m)/(L || 1));
}

function allBiomes(){return [...new Set(['Average natural biomes','None','Daytime','Nighttime','Windy','Snowy','Rainy','Sandstorm','Hell','Starfall','Singularity','Corruption','Null','Glitched','Heaven','Dreamspace','The Limbo',...auras.map(a=>a.biome).filter(Boolean)])];}
function environmentLabel(value){
 const labels = {
  'Average natural biomes':'🌍 Normal gameplay (AFK) ⭐ Recommended',
  'None':'🚫 Ignore biome effects',
  'Daytime':'☀️ Currently Daytime',
  'Nighttime':'🌙 Currently Nighttime',
  'Windy':'🌪️ Force Windy',
  'Snowy':'❄️ Currently in Snowy',
  'Rainy':'🌧️ Force Rainy',
  'Sandstorm':'🏜️ Force Sandstorm',
  'Hell':'🔥 Force Hell',
  'Starfall':'⭐ Force Starfall',
  'Singularity':'🕳️ Force Singularity',
  'Corruption':'☠️ Force Corruption',
  'Null':'⬛ Force Null',
  'Glitched':'⚡ Currently in Glitched',
  'Heaven':'☁️ Force Heaven',
  'Dreamspace':'💭 Currently in Dreamspace',
  'The Limbo':'🌀 The Limbo location'
 };
 return labels[value] || ('Force ' + value);
}
function biomeAverageDistribution(){const raw = biomeWeights.map(b=>({name:b.name, w:b.duration/b.spawn})); const sum = raw.reduce((a,b)=>a+b.w,0); return [{name:'None', w:Math.max(0,1-sum)}, ...raw];}
function biomeUptimeWeight(name){
 const item = biomeAverageDistribution().find(b=>b.name===name);
 return item ? item.w : 0;
}
function targetExclusiveBiome(target){
 if(!target || target.name==='Custom rarity' || !target.biome) return '';
 // These challenged auras are effectively biome-exclusive; the raw AFK model should include the biome uptime.
 if(['Oppression'].includes(target.name)) return 'Glitched';
 // Generic fallback: auras without native odds but with a required biome behave like exclusive entries.
 if(target.biome && !target.biomeOdds) { const req=target.biome.split('/')[0].trim(); if(req==='The Limbo' || req==='Removed') return ''; return req; }
 return '';
}
function biomeSpawnFactorForTarget(target, selectedMode){
 if(!document.getElementById('rawExclusiveBiome')?.checked) return 1;
 if(selectedMode !== 'Average natural biomes' && selectedMode !== 'None' && selectedMode !== 'Cycle Day/Night') return 1;
 const req = targetExclusiveBiome(target);
 if(!req) return 1;
 if(req === 'Glitched') return 1/65179; if(req === 'Dreamspace') return 1/37892; return biomeUptimeWeight(req) || 0;
}

function syncRange(numId, rangeId){const n=document.getElementById(numId), r=document.getElementById(rangeId); n.addEventListener('input',()=>{r.value=Math.min(+r.max,Math.max(+r.min,+n.value||0));calc();}); r.addEventListener('input',()=>{n.value=r.value;calc();});}
function selectedDevice(){const preset = devicePresets.find(d=>d.id==document.getElementById('device').value) || devicePresets[0]; if(!document.getElementById('manualDevice').checked && preset.id!==99) return preset; return {id:99,name:'Custom / manual',desc:'Custom settings are active.',bonusEvery:+document.getElementById('bonusEvery').value||10,bonusMult:+document.getElementById('bonusMult').value||1,flatLuck:+document.getElementById('flatLuck').value||0,luckMult:+document.getElementById('luckMult').value||1,timedMult:+document.getElementById('timedMult').value||1,timedUptime:+document.getElementById('timedUptime').value||0,removeBonus:document.getElementById('removeBonus').checked,speedMult:1,customPattern:null};}
function oddsFor(a, biome){if(document.getElementById('useNativeOdds').checked && a.biomeOdds && a.biome && biome && biome!=='None'){const bs=a.biome.split('/').map(x=>x.trim()); if(bs.includes(biome) || a.biome.includes(biome)) return a.biomeOdds;} return a.base;}
function activePool(biome){const stdOnly=document.getElementById('standardOnly').checked; const incUn=document.getElementById('includeUnobtainable')?.checked; return auras.filter(a=>{if(!incUn && a.kind==='unobtainable') return false; if(stdOnly && a.kind!=='standard') return false; if(a.biome && !a.biomeOdds && biome!=='Cycle Day/Night' && biome!=='None') return a.biome.split('/').map(x=>x.trim()).includes(biome); if(a.biome && !a.biomeOdds && biome==='None') return false; return true;});}

function auraMatchesFilters(a){
 const incUn=document.getElementById('includeUnobtainable')?.checked;
 if(!incUn && a.kind==='unobtainable') return false;
 const q=(document.getElementById('auraSearch')?.value || '').trim().toLowerCase();
 const bf=document.getElementById('auraBiomeFilter')?.value || 'All';
 if(q && !a.name.toLowerCase().includes(q)) return false;
 if(bf !== 'All'){
   if(bf === 'No native'){
     if(a.biome) return false;
   } else {
     if(!a.biome || !a.biome.split('/').map(x=>x.trim()).includes(bf)) return false;
   }
 }
 return true;
}
function populateTargetOptions(keepName){
 const target=document.getElementById('target');
 const current=keepName || target.value || 'Solar';
 target.innerHTML='';
 const incUn=document.getElementById('includeUnobtainable')?.checked;
 const list=auras
   .filter(a=>incUn || a.kind!=='unobtainable')
   .filter(auraMatchesFilters)
   .sort((a,b)=>a.base-b.base);
 for(const a of list) target.add(new Option(`${a.name} — 1/${fmtNum(a.base)}${a.biome?` | ${a.biome}`:''}`,a.name));
 if([...target.options].some(o=>o.value===current)) target.value=current;
 else if(target.options.length) target.value=target.options[0].value;
}
function populateBiomeFilter(){
 const sel=document.getElementById('auraBiomeFilter');
 sel.innerHTML='';
 const values=['All','No native',...new Set(auras.map(a=>a.biome).filter(Boolean).flatMap(b=>b.split('/').map(x=>x.trim())))].sort((a,b)=>a==='All'?-1:b==='All'?1:a.localeCompare(b));
 for(const v of values) sel.add(new Option(v,v));
}

function getTarget(){if(document.getElementById('targetMode').value==='rarity') return {name:'Custom rarity',tier:'custom',base:+document.getElementById('rarity').value||1,biomeOdds:null,biome:'',kind:'standard'}; return auras.find(a=>a.name===document.getElementById('target').value);}
function baseLuckAfterFlat(L){const d=selectedDevice(); const vip=+document.getElementById('vip').value || 1; const dor=+document.getElementById('dorce').value || 1; return (L + (d.flatLuck||0)) * (d.luckMult||1) * vip * dor;}
function isFixedLuckAura(target){
 if(!target) return false;
 const b=(target.biome||'');
 return b.includes('Cyberspace') && ['Meta','Illusionary','Ilussionary'].includes(target.name);
}

function averageEffectiveLuckPerRoll(L){
 const d=selectedDevice();
 const base=baseLuckAfterFlat(L);

 if(isNaN(base) || !isFinite(base)) return base;

 if(d.customPattern==='unfathomable'){
   return (1000/1010)*base + (10/1010)*base*100;
 }

 if(d.customPattern==='darkshader'){
   return (8/20)*base
        + (2/20)*base*(d.bonusMult||2)
        + (8/20)*base*(d.timedMult||2.5)
        + (2/20)*base*(d.timedMult||2.5)*(d.bonusMult||2);
 }

 if(d.customPattern==='polelight'){
   return base * poleLightLuckMultiplier(L);
 }

 let uptime=clamp01((d.timedUptime||0)/100);
 let every=d.bonusEvery||10, mult=d.bonusMult||1;

 if(d.removeBonus){
   return (1-uptime)*base + uptime*base*(d.timedMult||1);
 }

 function avgBonusLuck(luck){
   if(every<=1) return luck*mult;
   return ((every-1)/every)*luck + (1/every)*luck*mult;
 }

 return (1-uptime)*avgBonusLuck(base) + uptime*avgBonusLuck(base*(d.timedMult||1));
}

function pOneLuck(target, luck, biome){const targetOdds = target.name==='Custom rarity' ? target.base : oddsFor(target, biome); let p=luck/targetOdds; if(document.getElementById('capProb').checked) p=Math.min(1,p); if(!document.getElementById('blocking').checked) return p; let prod=1; for(const a of activePool(biome)){if(a.name===target.name) continue; const o=oddsFor(a, biome); if(o>targetOdds){let pi=luck/o; if(document.getElementById('capProb').checked) pi=Math.min(1,pi); prod *= (1-pi); if(prod<=0) return 0;}} return p*prod;}
function pFixedLuckAura(target, biome){
 // Cyberspace fixed-luck order:
 // 1) Illusionary
 // 2) Meta
 // 3) then normal highest-to-lowest aura priority
 // Fixed-luck auras ignore player luck, devices, VIP, Dorcelessness, and bonus rolls.
 if(target.name==='Illusionary' || target.name==='Ilussionary') return 1 / oddsFor(target, biome);
 if(target.name==='Meta'){
   const illu = auras.find(a=>a.name==='Illusionary' || a.name==='Ilussionary');
   const pIllu = illu ? 1 / oddsFor(illu, biome) : 0;
   return (1 - pIllu) * (1 / oddsFor(target, biome));
 }
 return 1 / (target.name==='Custom rarity' ? target.base : oddsFor(target, biome));
}
function pDeviceWeighted(target, L, biome){if(isFixedLuckAura(target)) return pFixedLuckAura(target,biome); const d=selectedDevice(); const base=baseLuckAfterFlat(L); if(d.customPattern==='polelight') return pOneLuck(target, base*poleLightLuckMultiplier(L), biome); if(d.customPattern==='unfathomable') return (1000/1010)*pOneLuck(target,base,biome) + (10/1010)*pOneLuck(target,base*100,biome); if(d.customPattern==='darkshader') return (8/20)*pOneLuck(target,base,biome)+(2/20)*pOneLuck(target,base*(d.bonusMult||2),biome)+(8/20)*pOneLuck(target,base*(d.timedMult||2.5),biome)+(2/20)*pOneLuck(target,base*(d.timedMult||2.5)*(d.bonusMult||2),biome); let uptime=clamp01((d.timedUptime||0)/100); let every=d.bonusEvery||10, mult=d.bonusMult||1; if(d.removeBonus) return (1-uptime)*pOneLuck(target,base,biome) + uptime*pOneLuck(target,base*(d.timedMult||1),biome); function pBonus(luck){if(every<=1) return pOneLuck(target,luck*mult,biome); return ((every-1)/every)*pOneLuck(target,luck,biome) + (1/every)*pOneLuck(target,luck*mult,biome);} return (1-uptime)*pBonus(base) + uptime*pBonus(base*(d.timedMult||1));}
function desmosBiomeFactorFor(target){if(!document.getElementById('useDesmosBiomeFactor')?.checked) return 1; if(!target || target.name==='Custom rarity' || !target.biomeOdds || !target.biome) return 1; const dId = +(document.getElementById('device')?.value || 0); const b = target.biome; if(b.includes('Windy')) return 0.922; if(b.includes('Snowy')) return 0.936; if(b.includes('Rainy')) return dId===6 ? 0.82625 : 0.9415; if(b.includes('Sandstorm')) return 0.92725; if(b.includes('Hell')) return 0.9591666666666667; if(b.includes('Starfall')) return 0.9649; if(b.includes('Corruption')) return 0.9712; if(b.includes('Null')) return 0.995005; return 1;}
function pCycle(target,L){const b=document.getElementById('biome').value; if(b==='Average natural biomes'){
 const req=targetExclusiveBiome(target);
 if(req){return biomeSpawnFactorForTarget(target,b) * pDeviceWeighted(target,L,req);}

 // Neutral/custom auras are not affected by biome availability.
 if(!target || target.name==='Custom rarity' || !target.biomeOdds){
   return pDeviceWeighted(target,L,'None');
 }

 // Native-biome auras in Normal gameplay use the long-term biome-time factor.
 // Example: Chillsear base rarity is used, then improved by Snowy availability factor.
 return Math.min(1, pDeviceWeighted(target,L,'None') / desmosBiomeFactorFor(target));
} if(b==='Cycle Day/Night'){const day=0.5; const night=0.5; const rest=Math.max(0,1-day-night); const pc = day*pDeviceWeighted(target,L,'Daytime') + night*pDeviceWeighted(target,L,'Nighttime') + rest*pDeviceWeighted(target,L,'None'); return Math.min(1, pc * biomeSpawnFactorForTarget(target,b));} const p = pDeviceWeighted(target,L,b); if(b==='None') return p; return p;}
function speedRps(){
 const d=selectedDevice();
 const baseRps=((+document.getElementById('speed').value||100)/100) * (d.speedMult||1);

 if(d.customPattern==='polelight'){
   return baseRps * poleLightSpeedMultiplier();
 }

 return baseRps;
}
function calc(){const L=+document.getElementById('luck').value||0; const t=getTarget(); const p=pCycle(t,L); const rps=speedRps(); const rolls=1/p, seconds=rolls/rps, drops=3600*rps*p; const unit=document.getElementById('display').value; document.getElementById('mOneIn').textContent=isFinite(1/p)?`1 in ${fmtNum(1/p)}`:'—'; document.getElementById('mChance').textContent=`(${fmtPct(p)})`; document.getElementById('mRolls').textContent=fmtNum(rolls); document.getElementById('mTime').textContent=fmtTime(seconds); document.getElementById('mHour').textContent=isFinite(drops)?drops.toFixed(3):'∞'; document.getElementById('mDisplay').textContent=isFinite(seconds)?(seconds/displayFactors[unit]).toFixed(6)+' '+unit:'∞'; document.getElementById('details').innerHTML=detailsHtml(t,L); updateRawInfo(t,L,p); updateBiomeContext(t,seconds); updateMilestones(p);}
function detailsHtml(t,L){const d=selectedDevice(), b=document.getElementById('biome').value; const compareBiome=b==='Cycle Day/Night'||b==='Average natural biomes'?'Daytime':b; const targetOdds=t.name==='Custom rarity'?t.base:oddsFor(t,compareBiome); return `<span class="pill">${t.name}</span><span class="pill">${t.tier}</span><span class="pill">base 1/${fmtNum(t.base)}</span>${isFixedLuckAura(t)?'<span class="pill">fixed luck: 1x</span>':''}`+(t.biomeOdds?`<span class="pill">${t.biome} native 1/${fmtNum(t.biomeOdds)}</span>`:'')+`<p>Static luck after passive modifiers: <b>${baseLuckAfterFlat(L).toFixed(3)}</b><br>Average effective luck per roll: <b>${averageEffectiveLuckPerRoll(L).toFixed(3)}</b></p><p>Device model: <b>${d.name}</b>. ${d.desc}</p>
 ${d.customPattern==='polelight' ? `<p>Pole Light Core m₁: <b>${poleLightM1().toFixed(3)}</b><br>Pole Light Core speed multiplier: <b>${poleLightSpeedMultiplier().toFixed(4)}×</b><br>Pole Light Core luck multiplier: <b>${poleLightLuckMultiplier(L).toFixed(4)}×</b></p>` : ''}<p>Environment mode: <b>${b}</b>. Rarer-aura blocking: <b>${document.getElementById('blocking').checked?'ON':'OFF'}</b>. Reference target odds: <b>1/${fmtNum(targetOdds)}</b>.</p>`;}



function afkFactorOverride(name){
 if(name==='Glitched') return 65179;
 if(name==='Dreamspace') return 37892;
 return null;
}

function biomeSpawnIntervalSeconds(name){
 if(name==='Glitched') return 5148445;
 if(name==='Dreamspace') return 3500000;
 if(name==='Singularity') return 750000;
 const b = biomeWeights.find(x=>x.name===name);
 return b ? b.spawn : null;
}
function biomeDurationSeconds(name){
 if(name==='Glitched') return 164;
 if(name==='Dreamspace') return 192;
 if(name==='Singularity') return 1200;
 const b = biomeWeights.find(x=>x.name===name);
 return b ? b.duration : null;
}

function updateMilestones(p){
 const tbody=document.getElementById('milestones');
 if(!tbody) return;
 const rps=speedRps();
 const probs=[10,25,50,75,90,95,99];
 if(!p || p<=0 || !isFinite(p)){
   tbody.innerHTML='<tr><td colspan="3">No valid chance.</td></tr>';
   return;
 }
 tbody.innerHTML=probs.map(percent=>{
   const q=percent/100;
   const rolls=Math.log(1-q)/Math.log(1-p);
   const seconds=rolls/rps;
   return `<tr><td>${percent}%</td><td>${fmtTime(seconds)}</td><td>${fmtNum(rolls)}</td></tr>`;
 }).join('');
}


function updateBiomeContext(target, seconds){
 const mode=document.getElementById('biome').value;
 const req=targetExclusiveBiome(target);
 const relevant = req || (target && target.biome ? target.biome.split('/')[0].trim() : '');
 const rows = [];

 function addRow(k,v){ rows.push(`<tr><td>${k}</td><td><b>${v}</b></td></tr>`); }

 if(mode==='Average natural biomes'){
   addRow('Mode','Normal gameplay (AFK)');
 } else if(mode==='None'){
   addRow('Mode','Ignore biome effects');
 } else {
   addRow('Mode', mode);
 }

 addRow('Rollspeed', `${speedRps().toFixed(2)} rolls/sec`);

 if(relevant){
   if(relevant==='The Limbo'){
     addRow('Location','The Limbo');
     addRow('Biome spawn','Not applicable');
   } else {
     const interval=biomeSpawnIntervalSeconds(relevant);
     const dur=biomeDurationSeconds(relevant);
     const override=afkFactorOverride(relevant);

     if(interval) addRow('Average occurrence', fmtTime(interval));
     if(dur) addRow('Duration', fmtTime(dur));
     if(override) addRow('AFK multiplier', `×${fmtNum(override)}`);
     else if(interval && dur) addRow('Long-term uptime', `1 in ${fmtNum(interval/dur)}`);
   }
 } else if(mode==='Daytime'){
   addRow('Daytime share','50%');
 } else if(mode==='Nighttime'){
   addRow('Nighttime share','50%');
 }

 if(target && target.biomeOdds){
   addRow('Native rarity', `1 in ${fmtNum(target.biomeOdds)}`);
 }

 if(seconds && isFinite(seconds)){
   addRow('Average target time', fmtTime(seconds));
 }

 document.getElementById('biomeContext').innerHTML =
   `<table><thead><tr><th>Property</th><th>Value</th></tr></thead><tbody>${rows.join('')}</tbody></table>`;
}

function updateRawInfo(t,L,p){
 const b=document.getElementById('biome').value;
 const req=targetExclusiveBiome(t);
 const factor=biomeSpawnFactorForTarget(t,b);
 let txt='';
 if(req && (b==='Average natural biomes'||b==='None'||b==='Cycle Day/Night')){
   txt = `Target requires <b>${req}</b>. Normal gameplay mode multiplies the aura chance by the AFK biome factor: <b>${fmtPct(factor)}</b> (about 1 in ${fmtNum(1/factor)} uptime). Final chance per roll: <b>${fmtPct(p)}</b> (1 in ${fmtNum(1/p)}). Biome spawn interval and average drop interval are not the same: a rare biome can last long enough for many rolls while it is active, so common biome-exclusive auras may have a shorter long-term average interval than the biome spawn interval.`;
 } else if(b==='Average natural biomes'){
   txt = 'Normal gameplay mode weights native biome odds by estimated long-term biome uptime.';
 } else {
   txt = 'Current mode calculates the selected biome/time directly. Exclusive biome spawn chance is only applied in None, Cycle Day/Night, or Normal gameplay modes.';
 }
 document.getElementById('rawInfo').innerHTML=txt;
}

function renderBlockers(t){let b=document.getElementById('biome').value; let biome=(b==='Cycle Day/Night'||b==='Average natural biomes')?'Daytime':b; const targetOdds=t.name==='Custom rarity'?t.base:oddsFor(t,biome); const rows=activePool(biome).filter(a=>a.name!==t.name && oddsFor(a,biome)>targetOdds).sort((a,b)=>oddsFor(a,biome)-oddsFor(b,biome)).slice(0,25).map(a=>`<tr><td>${a.name}</td><td>1/${fmtNum(oddsFor(a,biome))}</td><td>${a.biome||'—'}</td><td>${a.tier}</td></tr>`).join(''); document.getElementById('blockers').innerHTML=rows||'<tr><td colspan="4">No active rarer auras.</td></tr>';}
function optimize(){const t=getTarget(); let bestL=0,bestP=-1; for(let L=1;L<=5000;L+=(L<100?0.5:L<1000?2:10)){const p=pCycle(t,L); if(p>bestP){bestP=p;bestL=L;}} document.getElementById('optOut').innerHTML=`<b class="ok">Best estimated base luck:</b> ${bestL.toFixed(1)} | chance ${fmtPct(bestP)} | ${(3600*speedRps()*bestP).toFixed(3)} drops/hour`;}
function drawChart(mark){const c=document.getElementById('chart'), ctx=c.getContext('2d'), w=c.width,h=c.height; ctx.clearRect(0,0,w,h); ctx.strokeStyle='#2a2f3a'; ctx.lineWidth=1; for(let i=0;i<=10;i++){let x=i*w/10,y=i*h/10;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();} const t=getTarget(), xs=[],ys=[]; for(let i=0;i<=260;i++){let L=1+i*(1200-1)/260;xs.push(L);ys.push(3600*speedRps()*pCycle(t,L));} const maxY=Math.max(...ys)*1.08||1; ctx.strokeStyle='#7ee787';ctx.lineWidth=2;ctx.beginPath(); xs.forEach((L,i)=>{let x=(L-1)/(1200-1)*w,y=h-(ys[i]/maxY)*h;if(i)ctx.lineTo(x,y);else ctx.moveTo(x,y);});ctx.stroke(); ctx.fillStyle='#cbd5e1';ctx.font='12px system-ui';ctx.fillText('1 luck',4,h-6);ctx.fillText('1200 luck',w-75,h-6);ctx.fillText(maxY.toFixed(2)+' drops/h',8,14); if(mark){let x=(mark-1)/(1200-1)*w;ctx.strokeStyle='#facc15';ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}}
function fillManualFromDevice(){const d=devicePresets.find(x=>x.id==document.getElementById('device').value)||devicePresets[0]; document.getElementById('bonusEvery').value=d.bonusEvery; document.getElementById('bonusMult').value=d.bonusMult; document.getElementById('flatLuck').value=d.flatLuck; document.getElementById('luckMult').value=d.luckMult; document.getElementById('timedMult').value=d.timedMult; document.getElementById('timedUptime').value=d.timedUptime; document.getElementById('removeBonus').checked=!!d.removeBonus; document.getElementById('deviceDesc').textContent=d.desc;}
function init(){const dev=document.getElementById('device'); devicePresets.forEach(d=>dev.add(new Option(d.name,d.id))); dev.value=0; const target=document.getElementById('target'); populateBiomeFilter(); populateTargetOptions('Solar'); const biome=document.getElementById('biome'); allBiomes().forEach(b=>biome.add(new Option(environmentLabel(b),b))); biome.value='Average natural biomes'; syncRange('luck','luckRange'); syncRange('speed','speedRange'); syncRange('rarity','rarityRange'); document.getElementById('device').addEventListener('change',()=>{fillManualFromDevice();calc();}); document.getElementById('manualDevice').addEventListener('change',()=>{document.getElementById('manualBox').classList.toggle('hidden', !document.getElementById('manualDevice').checked);calc();}); document.getElementById('auraSearch').addEventListener('input',()=>{populateTargetOptions();calc();}); document.getElementById('auraBiomeFilter').addEventListener('change',()=>{populateTargetOptions();calc();}); document.getElementById('includeUnobtainable').addEventListener('change',()=>{populateTargetOptions();calc();}); document.getElementById('target').addEventListener('change',()=>{const t=getTarget(); if(t && t.name!=='Custom rarity'){document.getElementById('rarity').value=t.base;document.getElementById('rarityRange').value=Math.min(10000000000,t.base);} calc();}); document.querySelectorAll('input,select').forEach(e=>e.addEventListener('change',calc)); fillManualFromDevice(); calc();}
init();