const fs=require('fs'),vm=require('vm'),assert=require('assert');
const dir=require('path').resolve(__dirname,'../Presentacion_Liderazgo_Web_Completa');
const html=fs.readFileSync(dir+'/index.html','utf8');
class Element {
 constructor(id=''){this.id=id;this.events={};this.attrs={};this.classes=new Set();this.inert=false;this.hidden=false;this.style={};this.dataset={};this.textContent='';this._html='';this.disabled=false;this.tagName='BUTTON';this.classList={contains:c=>this.classes.has(c),add:c=>this.classes.add(c),remove:c=>this.classes.delete(c),toggle:(c,on)=>{on=on??!this.classes.has(c);on?this.classes.add(c):this.classes.delete(c);return on}};}
 set innerHTML(s){this._html=s;if(this.id==='overviewList'){overviewButtons=[...s.matchAll(/data-go="(\d+)"/g)].map(m=>{let e=new Element();e.dataset.go=m[1];return e})}}
 get innerHTML(){return this._html}
 setAttribute(k,v){this.attrs[k]=v} addEventListener(k,f){(this.events[k]??=[]).push(f)}
 focus(){document.activeElement=this} closest(q){return q==='button'?this:null}
 querySelectorAll(){return overviewButtons}
 fire(k,e={}){for(const f of this.events[k]||[])f({target:this,...e})}
}
let overviewButtons=[];const ids={};for(const m of html.matchAll(/\bid="([^"]+)"/g))ids[m[1]]=new Element(m[1]);
const slides=Array.from({length:18},()=>new Element());
const kpis=['time','delivery','cost'].map(x=>{let e=new Element();e.dataset.kpi=x;return e});
ids.overviewShade.hidden=ids.modalShade.hidden=true;
const document=new Element();document.activeElement={tagName:'BODY',closest:()=>null};document.getElementById=x=>{assert(ids[x],`Missing DOM id ${x}`);return ids[x]};
document.querySelectorAll=q=>q==='.slide'?slides:q==='.kpi'?kpis:q==='.overview-list button'?overviewButtons:[];
document.documentElement={requestFullscreen:()=>{document.fullscreenElement={};document.fire('fullscreenchange');return Promise.resolve()}};
document.exitFullscreen=()=>{document.fullscreenElement=null;document.fire('fullscreenchange');return Promise.resolve()};document.body=new Element();
const window=new Element();window.innerHeight=768;let timer;
const location={hash:''},history={replaceState:(a,b,h)=>location.hash=h};
const context={document,window,location,history,setTimeout:f=>(timer=f,1),clearTimeout:()=>{}};
vm.runInNewContext(fs.readFileSync(dir+'/app.js','utf8'),context);
const key=k=>document.fire('keydown',{key:k,preventDefault:()=>{}});
const active=n=>{assert.equal(slides.filter(e=>e.classList.contains('active')).length,1);assert(slides[n-1].classList.contains('active'));assert.equal(location.hash,'#slide-'+n);assert(!slides[n-1].inert)};
active(1);assert(ids.prev.disabled);for(let n=2;n<=18;n++){key('ArrowRight');active(n)}assert(ids.next.disabled);key('ArrowRight');active(18);for(let n=17;n>=1;n--){key('ArrowLeft');active(n)}
key('End');active(18);key('Home');active(1);key(' ');active(2);
key('n');active(2);assert(!ids.notesDrawer && !ids.notesButton);key('o');assert(!ids.overviewShade.hidden);assert.equal(overviewButtons.length,18);overviewButtons[11].fire('click');active(12);assert(ids.overviewShade.hidden);
key('?');assert(!ids.modalShade.hidden);key('ArrowRight');active(12);key('Escape');assert(ids.modalShade.hidden);
key('f');assert(document.fullscreenElement);assert(document.body.classList.contains('deck-fullscreen'));key('f');assert(!document.fullscreenElement);
location.hash='#slide-7';window.fire('hashchange');active(7);
assert(!ids.deckControls.classList.contains('visible'));document.fire('pointermove',{pointerType:'mouse',clientY:750});assert(ids.deckControls.classList.contains('visible'));timer();assert(!ids.deckControls.classList.contains('visible'));
key('Tab');assert(ids.deckControls.classList.contains('keyboard-access'));ids.deckControls.fire('pointerdown');assert(!ids.deckControls.classList.contains('keyboard-access'));
ids.next.focus();key('ArrowRight');active(8);
assert(!/id="presenterName"|class="appbar"|class="shell-footer"|class="deck-progress"/.test(html));
console.log('PASS: DOM simulation: 18 slides, arrows, boundaries, Home/End/Space, N disabled, O/?/F, index, modal blocking, hash, control reveal/timeout/keyboard mode, navigation while a button is focused. Real browser layout/fullscreen not covered.');
for(const n of [4,5,6,7]){context.sourceModal(n);assert(!ids.modalShade.hidden);assert(ids.modalContent.innerHTML.includes('ING / MCKINSEY'));assert(ids.modalContent.innerHTML.includes('A. Evidencia empresarial'));if(n!==6){assert(ids.modalContent.innerHTML.includes('B. Marco académico'));assert(ids.modalContent.innerHTML.includes('HAAS &amp; MORTENSEN'));assert(ids.modalContent.innerHTML.includes('C. Relación entre teoría y caso'));}assert(ids.modalContent.innerHTML.includes('D. Limitación'));context.closeModal();}
context.sourceModal(5);for(const term of ['p. 3','pp. 3–6','pp. 6–7','pp. 7–10','no implica adopción declarada','https://hbr.org/2016/06/the-secrets-of-great-teamwork'])assert(ids.modalContent.innerHTML.includes(term),term);context.closeModal();
context.sourceModal(13);assert(ids.modalContent.innerHTML.includes('BLANCHARD'));assert(ids.modalContent.innerHTML.includes('FORBES'));context.closeModal();
context.sourceModal(16);assert(ids.modalContent.innerHTML.includes('BOONSTRA'));assert(ids.modalContent.innerHTML.includes('ETSY'));context.closeModal();
console.log('PASS: ING source modals 4–7, case/framework/interpretation/limits, verified PDF pages, BCP/Forbes and Etsy/Boonstra references.');
