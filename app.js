// ══ DATABASE ══
const DB = {
  accounts: [],
  loans: [],
  approvals: [],
  vouchers: [],
  collections: [],
  changefunds: [],
  banks: [],
  bankaccounts: [],
  products: [],
  agents: [],
  addresses: [],
  lookups: [],
};

const API_BASE = '/unilend/api.php';

async function apiRequest(action, table, data = {}) {
  const url = new URL(window.location.origin + API_BASE);
  url.searchParams.set('action', action);
  url.searchParams.set('table', table);

  const opts = { credentials: 'same-origin' };
  if (action === 'list' || action === 'get') {
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, value);
      }
    });
  } else {
    opts.method = 'POST';
    opts.headers = { 'Content-Type': 'application/json' };
    opts.body = JSON.stringify(data);
  }

  const resp = await fetch(url.toString(), opts);
  const json = await resp.json();
  if (!json.success) {
    throw new Error(json.message || 'API request failed');
  }
  return json;
}

async function loadTable(table) {
  try {
    const result = await apiRequest('list', table);
    DB[table] = Array.isArray(result.data) ? result.data : [];
    if (table === 'bankaccounts') {
      renderBankAccounts();
    } else {
      renderT(table);
    }
    if (table === 'approvals') {
      updatePendingBadge();
    }
  } catch (err) {
    toast('⚠️ Failed to load ' + table + ': ' + err.message, 'error');
  }
}

function loadAllTables() {
  ['accounts','loans','approvals','vouchers','collections','changefunds','banks','bankaccounts','products','agents','addresses','lookups']
    .forEach(table => loadTable(table));
}

window.addEventListener('DOMContentLoaded', loadAllTables);

// ══ STATE ══
const ST = {};
const initST = (k,ps=15)=>{ ST[k]=ST[k]||{q:'',status:'',sort:{col:-1,dir:1},page:1,ps}; };
['accounts','loans','approvals','vouchers','collections','changefunds','banks','products','agents','addresses','lookups'].forEach(k=>initST(k));
let editIdx={};
let curApprovalIdx=-1;

// ══ HELPERS ══
function fmt(n,d=2){return Number(n||0).toLocaleString('en-PH',{minimumFractionDigits:d,maximumFractionDigits:d});}
function fmtD(d){if(!d)return '';try{return new Date(d+'T00:00:00').toLocaleDateString('en-PH',{month:'short',day:'2-digit',year:'numeric'});}catch(e){return d;}}
function today(){return new Date().toISOString().split('T')[0];}
function now(){return new Date().toISOString().slice(0,16);}
function gv(id){const e=document.getElementById(id);return e?e.value:'';}
function sv(id,val){const e=document.getElementById(id);if(e)e.value=val;}
function badge(txt){
  const m={'Active':'b-active','Problem':'b-problem','Fully Paid':'b-paid','Dead Account':'b-dead','For Release':'b-release','Archived':'b-dead','Pending':'b-pending','Approved':'b-approved','Denied':'b-denied','Credit':'b-credit','Debit':'b-debit','Full-Time':'b-active','Part-Time':'b-pending'};
  return `<span class="badge ${m[txt]||'b-active'}">${txt}</span>`;
}

// ══ FILTERED DATA ══
function getFiltered(k){
  const s=ST[k];
  let data=[...DB[k]];
  if(s.q){const q=s.q.toLowerCase();data=data.filter(r=>Object.values(r).join(' ').toLowerCase().includes(q));}
  if(s.status){data=data.filter(r=>Object.values(r).some(v=>v===s.status));}
  if(s.sort.col>=0){data.sort((a,b)=>{const av=Object.values(a)[s.sort.col],bv=Object.values(b)[s.sort.col];if(typeof av==='number')return s.sort.dir*(av-bv);return s.sort.dir*String(av).localeCompare(String(bv));});}
  return data;
}

// ══ TABLE RENDER ══
function renderT(k){
  const s=ST[k];const data=getFiltered(k);const total=data.length;
  const start=(s.page-1)*s.ps;const slice=data.slice(start,start+s.ps);
  const tb=document.getElementById('tbody-'+k);if(!tb)return;
  tb.innerHTML=slice.length?slice.map((r,i)=>rowHTML(k,r,start+i)).join(''):`<tr class="empty-row"><td colspan="20">No records found</td></tr>`;
  updatePgn(k,total);
}

function rowHTML(k,r,idx){
  const acts=`<button class="ab edit" onclick="editRow('${k}',${idx})" title="Edit">✏️</button><button class="ab del" onclick="delRow('${k}',${idx})" title="Delete">🗑️</button>`;
  switch(k){
    case 'accounts':return`<tr><td></td><td class="mono">${r.pn}</td><td class="bold">${r.name}</td><td>${r.provider}</td><td>${r.type}</td><td class="num">₱${fmt(r.pension)}</td><td>${r.bank}</td><td>${badge(r.status)}</td><td><div class="ag">${acts}</div></td></tr>`;
    case 'loans':return`<tr><td></td><td class="mono">${r.ref}</td><td>${fmtD(r.date)}</td><td class="bold">${r.name}</td><td class="num">₱${fmt(r.amort)}</td><td class="num">${r.terms}</td><td class="num green">₱${fmt(r.principal)}</td><td class="num">${fmt(r.proc)}</td><td class="num">${fmt(r.not)}</td><td class="num">${fmt(r.ins)}</td><td class="num">${fmt(r.interest)}</td><td class="num green">₱${fmt(r.cashout)}</td><td><div class="ag">${acts}<button class="ab print" onclick="printRow('${k}',${idx})" title="Print">🖨️</button></div></td></tr>`;
    case 'approvals':return`<tr><td class="mono">${r.ref}</td><td>${fmtD(r.date)}</td><td class="bold">${r.name}</td><td class="num">₱${fmt(r.amort)}</td><td class="num">${r.terms}</td><td class="num green">₱${fmt(r.principal)}</td><td>${badge(r.status)}</td><td><div class="ag">${r.status==='Pending'?`<button class="proc-btn" onclick="openProcessModal(${idx})">✔ Process</button>`:`<button class="ab view" onclick="viewApproval(${idx})" title="View">👁️</button>`}</div></td></tr>`;
    case 'vouchers':return`<tr><td></td><td class="bold">${r.no}</td><td>${fmtD(r.date)}</td><td>${r.payee}</td><td>${r.acct}</td><td class="num ${r.amount>0?'green':''}">₱${fmt(r.amount)}</td><td>${badge(r.status||'Active')}</td><td><div class="ag">${acts}<button class="ab print" onclick="printRow('${k}',${idx})" title="Print">🖨️</button></div></td></tr>`;
    case 'collections':return`<tr><td></td><td class="bold">${r.no}</td><td>${fmtD(r.date)}</td><td>${r.cust}</td><td class="num green">₱${fmt(r.amount)}</td><td class="num">₱${fmt(r.bonus)}</td><td style="color:var(--text3);font-size:11.5px">${r.remarks}</td><td><div class="ag">${acts}<button class="ab print" onclick="printRow('${k}',${idx})" title="Print">🖨️</button></div></td></tr>`;
    case 'changefunds':return`<tr><td></td><td class="bold">${r.no}</td><td>${fmtD(r.date)}</td><td>${badge(r.type)}</td><td class="num ${r.type==='Credit'?'green':'red-t'}">₱${fmt(r.amount)}</td><td>${r.name}</td><td style="color:var(--text3);font-size:11px">${r.remarks}</td><td>${r.branch}</td><td><div class="ag">${acts}<button class="ab print" onclick="printRow('${k}',${idx})" title="Print">🖨️</button></div></td></tr>`;
    case 'banks':return`<tr><td></td><td class="bold">${r.name}</td><td style="color:var(--text3)">${r.addr}</td><td>${r.contact}</td><td style="color:var(--text3)">${r.pos}</td><td>${r.tel}</td><td><div class="ag">${acts}</div></td></tr>`;
    case 'products':{const pc={Additional:'b-active',Bonus:'b-pending','BUY OUT NEW':'b-paid','BUY OUT REN':'b-paid','BUY OUT RENRA':'b-paid','CORRECTIVE DISCOUNT LOAN':'b-problem',Extension:'b-active',New:'b-active',Renewal:'b-active'};return`<tr><td></td><td class="bold">${r.name}</td><td><span class="badge ${pc[r.type]||'b-active'}" style="font-size:10px">${r.type}</span></td><td style="color:var(--text3);font-size:12px">${r.desc}</td><td><div class="ag">${acts}</div></td></tr>`;}
    case 'agents':return`<tr><td></td><td class="bold">${r.name}</td><td>${badge(r.type)}</td><td style="color:var(--text3)">${r.addr}</td><td>${r.contact}</td><td><div class="ag">${acts}</div></td></tr>`;
    case 'addresses':return`<tr><td></td><td class="mono">${r.code}</td><td>${r.addr}</td><td><div class="ag">${acts}</div></td></tr>`;
    case 'lookups':return`<tr><td></td><td class="bold">${r.word}</td><td style="color:var(--text3)">${r.order}</td><td style="color:var(--text3)">${r.code}</td><td><div class="ag">${acts}</div></td></tr>`;
    default:return'';
  }
}

// ══ PAGINATION ══
function updatePgn(k,total){
  const s=ST[k];const pages=Math.ceil(total/s.ps)||1;
  const start=(s.page-1)*s.ps+1;const end=Math.min(s.page*s.ps,total);
  const info=document.getElementById('pgi-'+k);if(info)info.textContent=total?`${start} - ${end} of ${total.toLocaleString()} items`:'0 items';
  const btns=document.getElementById('pgb-'+k);if(!btns)return;
  let h=`<div class="pb ${s.page===1?'dis':''}" onclick="gotoPage('${k}',${s.page-1})">‹</div>`;
  let fr=Math.max(1,s.page-2),to=Math.min(pages,fr+4);
  if(fr>1)h+=`<div class="pb" onclick="gotoPage('${k}',1)">1</div>${fr>2?'<div class="pb dis">…</div>':''}`;
  for(let i=fr;i<=to;i++)h+=`<div class="pb ${i===s.page?'active':''}" onclick="gotoPage('${k}',${i})">${i}</div>`;
  if(to<pages)h+=`${to<pages-1?'<div class="pb dis">…</div>':''}<div class="pb" onclick="gotoPage('${k}',${pages})">${pages}</div>`;
  h+=`<div class="pb ${s.page===pages?'dis':''}" onclick="gotoPage('${k}',${s.page+1})">›</div>`;
  btns.innerHTML=h;
  const subs={accounts:'acct-sub',loans:'lp-sub',approvals:'la-sub',vouchers:'v-sub',collections:'col-sub',changefunds:'cf-sub',banks:'banks-sub',products:'prod-sub',agents:'agents-sub',addresses:'addr-sub',lookups:'lu-sub'};
  const sub=document.getElementById(subs[k]);if(sub)sub.textContent=`${total.toLocaleString()} record${total!==1?'s':''}`;
}

function gotoPage(k,p){const s=ST[k];const data=getFiltered(k);const pages=Math.ceil(data.length/s.ps)||1;if(p<1||p>pages)return;s.page=p;renderT(k);}
function chgPS(k,size){ST[k].ps=parseInt(size);ST[k].page=1;renderT(k);}
function search(k,val){ST[k].q=val;ST[k].page=1;renderT(k);}
function fStatus(k,val){ST[k].status=val;ST[k].page=1;renderT(k);}
function sortT(k,col){const s=ST[k];if(s.sort.col===col)s.sort.dir*=-1;else{s.sort.col=col;s.sort.dir=1;}renderT(k);}

// ══ BANK ACCOUNTS ══
function renderBankAccounts(){
  const tb=document.getElementById('tbody-bankaccounts');if(!tb)return;
  tb.innerHTML=DB.bankaccounts.map((r,i)=>`<tr><td></td><td class="bold">${r.bank}</td><td style="color:var(--text3)">${r.addr}</td><td class="mono">${r.acctno}</td><td class="num">₱${fmt(r.bal)}</td><td><div class="ag"><button class="ab edit" onclick="editBankAcct(${i})" title="Edit">✏️</button><button class="ab del" onclick="delBankAcct(${i})" title="Delete">🗑️</button></div></td></tr>`).join('');
}
function editBankAcct(i){const r=DB.bankaccounts[i];sv('ba-bank',r.bank);sv('ba-addr',r.addr);sv('ba-acctno',r.acctno);editIdx.bankaccounts=i;openM('m-bankaccount');}
async function delBankAcct(i){confirmDlg('Delete Bank Account','This cannot be undone.',async()=>{const rec=DB.bankaccounts[i];if(rec?.id){try{await apiRequest('delete','bankaccounts',{id:rec.id});}catch(err){toast('⚠️ '+err.message,'error');return;}}DB.bankaccounts.splice(i,1);renderBankAccounts();toast('🗑️ Deleted','success');});}

// ══ EDIT ROW ══
function editRow(k,idx){
  const data=getFiltered(k);const r=data[idx];const aIdx=DB[k].indexOf(r);editIdx[k]=aIdx;
  const mmap={accounts:'m-account',loans:'m-loan',vouchers:'m-voucher',collections:'m-collection',changefunds:'m-changefund',banks:'m-bank',products:'m-product',agents:'m-agent',addresses:'m-address',lookups:'m-lookup'};
  switch(k){
    case 'accounts':sv('ai-pnum',r.pn);sv('ai-lname',r.name);sv('ai-provider',r.provider);sv('ai-ptype',r.type);sv('ai-pamount',r.pension);sv('ai-bank',r.bank);sv('ai-pstatus',r.status);break;
    case 'loans':sv('ln-loanref',r.ref);sv('ln-ldate',r.date);sv('ln-customer',r.name);sv('ln-amort',r.amort);sv('ln-terms',r.terms);sv('ln-proc',r.proc);sv('ln-not',r.not);sv('ln-ins',r.ins);calcLoan();break;
    case 'vouchers':sv('v-no',r.no);sv('v-date',r.date);sv('v-payee',r.payee);sv('v-amount',r.amount);break;
    case 'collections':sv('cl-no',r.no);sv('cl-date',r.date);sv('cl-customer',r.cust);sv('cl-amount',r.amount);sv('cl-bonus',r.bonus);sv('cl-remarks',r.remarks);break;
    case 'changefunds':sv('cf-no',r.no);sv('cf-date',r.date);sv('cf-type',r.type);sv('cf-amount',r.amount);sv('cf-custname',r.name);sv('cf-branch',r.branch);sv('cf-remarks',r.remarks);break;
    case 'banks':sv('bk-name',r.name);sv('bk-addr',r.addr);sv('bk-contact',r.contact);sv('bk-pos',r.pos);sv('bk-tel',r.tel);break;
    case 'products':sv('pr-name',r.name);sv('pr-type',r.type);sv('pr-desc',r.desc);break;
    case 'agents':sv('ag-lname',r.name);sv('ag-type',r.type);sv('ag-addr',r.addr);sv('ag-contact',r.contact);break;
    case 'addresses':sv('addr-code',r.code);sv('addr-addr',r.addr);break;
    case 'lookups':sv('lu-word',r.word);sv('lu-order',r.order);sv('lu-code',r.code);break;
  }
  openM(mmap[k]);
}

// ══ DELETE ROW ══
async function delRow(k,idx){
  const data=getFiltered(k);const r=data[idx];const aIdx=DB[k].indexOf(r);
  confirmDlg('Delete Record','Delete this record? Cannot be undone.',async()=>{if(r?.id){try{await apiRequest('delete',k,{id:r.id});}catch(err){toast('⚠️ '+err.message,'error');return;}}DB[k].splice(aIdx,1);renderT(k);toast('🗑️ Deleted','success');});
}
function printRow(k,idx){const data=getFiltered(k);const r=data[idx];toast('🖨️ Printing '+Object.values(r)[0],'success');}

// ══ LOAN APPROVAL: PROCESS MODAL ══
function openProcessModal(idx){
  curApprovalIdx=idx;const data=getFiltered('approvals');const r=data[idx];
  document.getElementById('process-loan-info').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12.5px">
      <div><span style="color:var(--text3)">Reference:</span> <strong>${r.ref}</strong></div>
      <div><span style="color:var(--text3)">Date:</span> ${fmtD(r.date)}</div>
      <div><span style="color:var(--text3)">Customer:</span> <strong>${r.name}</strong></div>
      <div><span style="color:var(--text3)">Principal:</span> <strong style="color:var(--emerald)">₱${fmt(r.principal)}</strong></div>
      <div><span style="color:var(--text3)">Amortization:</span> ₱${fmt(r.amort)}</div>
      <div><span style="color:var(--text3)">Terms:</span> ${r.terms} months</div>
    </div>`;
  sv('process-remarks','');
  openM('m-process-loan');
}
function viewApproval(idx){openProcessModal(idx);}
async function approveLoan(){
  const data=getFiltered('approvals');const r=data[curApprovalIdx];const aIdx=DB.approvals.indexOf(r);
  confirmDlg('Approve Loan',`Approve loan ${r.ref} for ${r.name}?`,async()=>{
    try{if(r?.id){await apiRequest('update','approvals',{id:r.id,status:'Approved'});}DB.approvals[aIdx].status='Approved';closeM('m-process-loan');renderT('approvals');updatePendingBadge();toast('✅ Loan approved!','success');}catch(err){toast('⚠️ '+err.message,'error');}
  });
}
async function denyLoan(){
  const data=getFiltered('approvals');const r=data[curApprovalIdx];const aIdx=DB.approvals.indexOf(r);
  const remarks=gv('process-remarks');
  confirmDlg('Deny Loan',`Deny loan ${r.ref}?`,async()=>{
    try{if(r?.id){await apiRequest('update','approvals',{id:r.id,status:'Denied',remarks});}DB.approvals[aIdx].status='Denied';closeM('m-process-loan');renderT('approvals');updatePendingBadge();toast('✗ Loan denied','error');}catch(err){toast('⚠️ '+err.message,'error');}
  });
}
function updatePendingBadge(){const cnt=DB.approvals.filter(a=>a.status==='Pending').length;const el=document.getElementById('pending-badge');if(el)el.textContent=cnt;const el2=document.getElementById('cnt-pending');if(el2)el2.textContent=cnt;}

// ══ LOAN CALCULATOR ══
function calcLoan(){
  const a=parseFloat(gv('ln-amort')||0);const t=parseInt(gv('ln-terms')||12);const pr=a*t;
  const proc=parseFloat(gv('ln-proc')||0);const not=parseFloat(gv('ln-not')||0);const ins=parseFloat(gv('ln-ins')||0);const colfee=parseFloat(gv('ln-colfee')||0);
  const interest=pr*0.20;const deductions=proc+not+ins+colfee;const gross=pr-deductions;const net=gross-interest;
  sv('ln-principal',pr.toFixed(2));sv('ln-interest',interest.toFixed(2));sv('ln-deductions',deductions.toFixed(2));sv('ln-gross',gross.toFixed(2));sv('ln-net',net.toFixed(2));
  const sb=document.getElementById('sched-body');if(!sb)return;
  if(!a||!t){sb.innerHTML='<tr><td colspan="5" class="sub-empty">Enter amortization and terms</td></tr>';return;}
  const base=new Date();let bal=pr;
  sb.innerHTML=Array.from({length:t},(_, i)=>{
    const earned=pr/t;const unearned=pr-(earned*(i+1));const dd=new Date(base);dd.setMonth(dd.getMonth()+i+1);
    const row=`<tr><td>${i+1}</td><td>${fmtD(dd.toISOString().split('T')[0])}</td><td>₱${fmt(earned)}</td><td>₱${fmt(Math.max(0,unearned))}</td><td>₱${fmt(pr-(earned*(i+1)))}</td></tr>`;
    return row;
  }).join('');
}

// ══ VOUCHER CALC ══
function calcVoucher(){const a=parseFloat(gv('v-amount')||0);const t=parseFloat(gv('v-intax')||0);sv('v-wtax',(a*0.01).toFixed(2));}

// ══ COLLECTION CALC ══
function calcCollection(){const a=parseFloat(gv('cl-amount')||0);const cf=parseFloat(gv('cl-cf')||0);sv('cl-cfbal',(cf>a?cf-a:0).toFixed(2));}

// ══ MODAL OPEN/CLOSE ══
function openM(id){
  if(!editIdx[id.replace('m-','')]){}
  document.getElementById(id).classList.add('open');
}
function closeM(id){document.getElementById(id).classList.remove('open');}
document.addEventListener('click',e=>{if(e.target.classList.contains('overlay'))closeM(e.target.id);});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.overlay.open').forEach(o=>o.classList.remove('open'));});

// ══ CONFIRM ══
function confirmDlg(title,msg,onOk){
  document.getElementById('confirm-title').textContent=title;
  document.getElementById('confirm-msg').textContent=msg;
  const btn=document.getElementById('confirm-ok');
  btn.onclick=()=>{closeM('m-confirm');onOk();};
  openM('m-confirm');
}

// ══ TOAST ══
function toast(msg,type='success'){
  const wrap=document.getElementById('toast-wrap');const el=document.createElement('div');
  el.className=`toast ${type}`;const icons={success:'✅',error:'❌',warn:'⚠️'};
  el.innerHTML=`<span>${icons[type]||'ℹ️'}</span><span>${msg}</span>`;
  wrap.appendChild(el);requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('show')));
  setTimeout(()=>{el.classList.remove('show');setTimeout(()=>el.remove(),400);},3200);
}

// ══ EXPORT ══
function exportCSV(k){
  const data=DB[k];if(!data||!data.length){toast('⚠️ No data to export','warn');return;}
  const h=Object.keys(data[0]);const rows=data.map(r=>h.map(key=>`"${String(r[key]).replace(/"/g,'""')}"`).join(','));
  const csv=[h.join(','),...rows].join('\n');const a=document.createElement('a');
  a.href='data:text/csv;charset=utf-8,'+encodeURIComponent(csv);a.download=`unilend_${k}_${today()}.csv`;a.click();
  toast('📤 CSV exported!','success');
}

// ══ SAVE FUNCTIONS ══
async function saveAccount(){
  if(!gv('ai-fname')||!gv('ai-lname')){toast('⚠️ First and Last Name are required','error');return;}
  const name=`${gv('ai-fname')} ${gv('ai-mname')?gv('ai-mname')+' ':''}${gv('ai-lname')}`.replace(/\s+/g,' ').trim();
  const rec={pn:gv('ai-pnum')||'MUCC-103-'+Date.now(),name,provider:gv('ai-provider'),type:gv('ai-ptype'),pension:parseFloat(gv('ai-pamount')||0),bank:gv('ai-bank'),status:gv('ai-pstatus')||'Active'};
  try{
    if(editIdx.accounts!==undefined){const id=DB.accounts[editIdx.accounts]?.id; if(id)rec.id=id; await apiRequest('update','accounts',rec);DB.accounts[editIdx.accounts]=rec;delete editIdx.accounts;toast('✅ Account updated!','success');}
    else{const res=await apiRequest('create','accounts',rec);rec.id=res.data.id;DB.accounts.push(rec);toast('✅ Account created!','success');}
    closeM('m-account');renderT('accounts');
  }catch(err){toast('⚠️ '+err.message,'error');}
}
async function saveLoan(){
  if(!gv('ln-customer')){toast('⚠️ Customer name required','error');return;}
  const a=parseFloat(gv('ln-amort')||0);const t=parseInt(gv('ln-terms')||12);const pr=a*t;const int=pr*0.2;const net=parseFloat(gv('ln-net')||0);
  const rec={ref:'A'+Date.now().toString(36).toUpperCase().slice(-8),date:gv('ln-ldate')||today(),name:gv('ln-customer'),amort:a,terms:t,principal:pr,proc:parseFloat(gv('ln-proc')||0),not:parseFloat(gv('ln-not')||0),ins:parseFloat(gv('ln-ins')||0),interest:int,cashout:net,status:'Active'};
  try{
    if(editIdx.loans!==undefined){const id=DB.loans[editIdx.loans]?.id; if(id)rec.id=id; await apiRequest('update','loans',rec);DB.loans[editIdx.loans]=rec;delete editIdx.loans;toast('✅ Loan updated!','success');}
    else{const res=await apiRequest('create','loans',rec);rec.id=res.data.id;DB.loans.push(rec);toast('✅ Loan created!','success');}
    closeM('m-loan');renderT('loans');
  }catch(err){toast('⚠️ '+err.message,'error');}
}
async function saveVoucher(){
  if(!gv('v-payee')){toast('⚠️ Payee required','error');return;}
  const nextNo=String(DB.vouchers.length+1).padStart(10,'0');
  const rec={no:nextNo,date:gv('v-date')||today(),payee:gv('v-payee'),acct:(gv('v-bankacct')||'').split(' ')[0],amount:parseFloat(gv('v-amount')||0),status:'Active'};
  try{
    if(editIdx.vouchers!==undefined){const id=DB.vouchers[editIdx.vouchers]?.id; if(id)rec.id=id; await apiRequest('update','vouchers',rec);DB.vouchers[editIdx.vouchers]=rec;delete editIdx.vouchers;toast('✅ Voucher updated!','success');}
    else{const res=await apiRequest('create','vouchers',rec);rec.id=res.data.id;DB.vouchers.push(rec);toast('✅ Voucher created!','success');}
    closeM('m-voucher');renderT('vouchers');
  }catch(err){toast('⚠️ '+err.message,'error');}
}
async function saveCollection(){
  if(!gv('cl-customer')){toast('⚠️ Customer required','error');return;}
  const nextNo=String(300000+DB.collections.length+1).padStart(10,'0');
  const rec={no:nextNo,date:gv('cl-date')||today(),cust:gv('cl-customer'),amount:parseFloat(gv('cl-amount')||0),bonus:parseFloat(gv('cl-bonus')||0),remarks:gv('cl-remarks'),status:'Active'};
  try{
    if(editIdx.collections!==undefined){const id=DB.collections[editIdx.collections]?.id; if(id)rec.id=id; await apiRequest('update','collections',rec);DB.collections[editIdx.collections]=rec;delete editIdx.collections;toast('✅ Collection updated!','success');}
    else{const res=await apiRequest('create','collections',rec);rec.id=res.data.id;DB.collections.push(rec);toast('✅ Collection recorded!','success');}
    closeM('m-collection');renderT('collections');
  }catch(err){toast('⚠️ '+err.message,'error');}
}
async function saveChangeFund(){
  if(!gv('cf-custname')){toast('⚠️ Customer name required','error');return;}
  const nextNo=String(DB.changefunds.length+1).padStart(10,'0');
  const rec={no:nextNo,date:gv('cf-date')||today(),type:gv('cf-type'),amount:parseFloat(gv('cf-amount')||0),name:gv('cf-custname'),remarks:gv('cf-remarks'),branch:gv('cf-branch')||'Malolos'};
  try{
    if(editIdx.changefunds!==undefined){const id=DB.changefunds[editIdx.changefunds]?.id; if(id)rec.id=id; await apiRequest('update','changefunds',rec);DB.changefunds[editIdx.changefunds]=rec;delete editIdx.changefunds;toast('✅ Change Fund updated!','success');}
    else{const res=await apiRequest('create','changefunds',rec);rec.id=res.data.id;DB.changefunds.push(rec);toast('✅ Change Fund created!','success');}
    closeM('m-changefund');renderT('changefunds');
  }catch(err){toast('⚠️ '+err.message,'error');}
}
async function saveBank(){
  if(!gv('bk-name')){toast('⚠️ Bank name required','error');return;}
  const rec={name:gv('bk-name'),addr:gv('bk-addr'),contact:gv('bk-contact'),pos:gv('bk-pos'),tel:gv('bk-tel')};
  try{
    if(editIdx.banks!==undefined){const id=DB.banks[editIdx.banks]?.id; if(id)rec.id=id; await apiRequest('update','banks',rec);DB.banks[editIdx.banks]=rec;delete editIdx.banks;toast('✅ Bank updated!','success');}
    else{const res=await apiRequest('create','banks',rec);rec.id=res.data.id;DB.banks.push(rec);toast('✅ Bank created!','success');}
    closeM('m-bank');renderT('banks');
  }catch(err){toast('⚠️ '+err.message,'error');}
}
async function saveBankAccount(){
  if(!gv('ba-acctno')){toast('⚠️ Account No. required','error');return;}
  const rec={bank:gv('ba-bank'),addr:gv('ba-addr'),acctno:gv('ba-acctno'),bal:0};
  try{
    if(editIdx.bankaccounts!==undefined){const id=DB.bankaccounts[editIdx.bankaccounts]?.id; if(id)rec.id=id; await apiRequest('update','bankaccounts',rec);DB.bankaccounts[editIdx.bankaccounts]=rec;delete editIdx.bankaccounts;}
    else{const res=await apiRequest('create','bankaccounts',rec);rec.id=res.data.id;DB.bankaccounts.push(rec);}
    closeM('m-bankaccount');renderBankAccounts();toast('✅ Bank Account saved!','success');
  }catch(err){toast('⚠️ '+err.message,'error');}
}
async function saveProduct(){
  if(!gv('pr-name')){toast('⚠️ Product name required','error');return;}
  const rec={name:gv('pr-name'),type:gv('pr-type'),desc:gv('pr-desc')};
  try{
    if(editIdx.products!==undefined){const id=DB.products[editIdx.products]?.id; if(id)rec.id=id; await apiRequest('update','products',rec);DB.products[editIdx.products]=rec;delete editIdx.products;toast('✅ Product updated!','success');}
    else{const res=await apiRequest('create','products',rec);rec.id=res.data.id;DB.products.push(rec);toast('✅ Product created!','success');}
    closeM('m-product');renderT('products');
  }catch(err){toast('⚠️ '+err.message,'error');}
}
async function saveAgent(){
  if(!gv('ag-fname')||!gv('ag-lname')){toast('⚠️ First and Last Name required','error');return;}
  const name=`${gv('ag-fname')} ${gv('ag-lname')}`.trim();
  const rec={name,type:gv('ag-type'),addr:gv('ag-addr'),contact:gv('ag-contact')};
  try{
    if(editIdx.agents!==undefined){const id=DB.agents[editIdx.agents]?.id; if(id)rec.id=id; await apiRequest('update','agents',rec);DB.agents[editIdx.agents]=rec;delete editIdx.agents;toast('✅ Agent updated!','success');}
    else{const res=await apiRequest('create','agents',rec);rec.id=res.data.id;DB.agents.push(rec);toast('✅ Agent created!','success');}
    closeM('m-agent');renderT('agents');
  }catch(err){toast('⚠️ '+err.message,'error');}
}
async function saveAddress(){
  if(!gv('addr-code')||!gv('addr-addr')){toast('⚠️ Code and Address required','error');return;}
  const rec={code:gv('addr-code'),addr:gv('addr-addr')};
  try{
    if(editIdx.addresses!==undefined){const id=DB.addresses[editIdx.addresses]?.id; if(id)rec.id=id; await apiRequest('update','addresses',rec);DB.addresses[editIdx.addresses]=rec;delete editIdx.addresses;toast('✅ Address updated!','success');}
    else{const res=await apiRequest('create','addresses',rec);rec.id=res.data.id;DB.addresses.push(rec);toast('✅ Address created!','success');}
    closeM('m-address');renderT('addresses');
  }catch(err){toast('⚠️ '+err.message,'error');}
}
async function saveLookup(){
  if(!gv('lu-word')){toast('⚠️ LookUpWord is required','error');return;}
  const rec={word:gv('lu-word'),order:parseInt(gv('lu-order')||DB.lookups.length+1),code:gv('lu-code')};
  try{
    if(editIdx.lookups!==undefined){const id=DB.lookups[editIdx.lookups]?.id; if(id)rec.id=id; await apiRequest('update','lookups',rec);DB.lookups[editIdx.lookups]=rec;delete editIdx.lookups;toast('✅ LookUp updated!','success');}
    else{const res=await apiRequest('create','lookups',rec);rec.id=res.data.id;DB.lookups.push(rec);toast('✅ LookUp created!','success');}
    closeM('m-lookup');renderT('lookups');
  }catch(err){toast('⚠️ '+err.message,'error');}
}
