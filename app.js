// ══ DATABASE ══
const DB = {
  accounts: [
    {pn:'MUCC-103-03-2158517-8',name:'Fe Ablaza',provider:'SSS',type:'Retirement',pension:3900,bank:'Philippine National Bank',status:'Active'},
    {pn:'MUCC-103-0',name:'Reynaldo De Guzman',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:2500,bank:'Philippine National Bank',status:'Active'},
    {pn:'MUCC-103-33-25209959-6',name:'Olivia Daria',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:1210,bank:'Philippine National Bank',status:'Problem'},
    {pn:'MUCC-103-09-09226053-0',name:'Ma. Nery Bacani',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:3904,bank:'Security Bank Corp.',status:'Active'},
    {pn:'MUCC-103-09-06469603-1',name:'Eleuterio Reyes',provider:'SSS',type:'Retirement',pension:0,bank:'Philippine National Bank',status:'Active'},
    {pn:'MUCC-103-03-39111605-0',name:'Leoncia Ganaden',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:1700,bank:'Philippine National Bank',status:'Problem'},
    {pn:'MUCC-103-03-03939934-4',name:'Elenita Hilario',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:8121.50,bank:'',status:'Fully Paid'},
    {pn:'MUCC-103-03-69993810-1',name:'Evelyn Mayayo',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:2500,bank:'Maybank Philippines, Inc.',status:'Active'},
    {pn:'MUCC-103-03-01707720-6',name:'Ricardo Ablaza',provider:'SSS',type:'Retirement',pension:3689.07,bank:'Philippine National Bank',status:'Fully Paid'},
    {pn:'MUCC-103-03-01471111-8',name:'Leonora Gili',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:3049.20,bank:'Security Bank Corp.',status:'Fully Paid'},
    {pn:'MUCC-103-03-0215298-3',name:'Emilia Carable',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:2600,bank:'Land Bank of the Philippines',status:'Active'},
    {pn:'MUCC-103-03-45159939-9',name:'Anita Clemente',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:2500,bank:'Philippine National Bank',status:'Active'},
    {pn:'MUCC-103-03-**missing**',name:'Ursula Cristobal',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:2524,bank:'Philippine Savings Bank',status:'Active'},
    {pn:'MUCC-103-03-12314443-9',name:'Natividad Lubrino',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:3500,bank:'Bank of the Philippine Islands',status:'Fully Paid'},
    {pn:'MUCC-103-03-13322334-8',name:'Marcelino Victoria',provider:'SSS',type:'Retirement',pension:3513.40,bank:'Philippine National Bank',status:'Dead Account'},
    {pn:'MUCC-103-03-05960990-1',name:'Gloria Lorenzo',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:2900,bank:'Land Bank of the Philippines',status:'Active'},
    {pn:'MUCC-103-03-22039581-4',name:'Adelfa Bañares',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:1452,bank:'Philippine National Bank',status:'Active'},
    {pn:'MUCC-103-03-29000278-0',name:'Marina Ventura',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:4049.20,bank:'Philippine National Bank',status:'Active'},
    {pn:'MUCC-103-03-48873821-1',name:'Ma. Luisa Victorino',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:1400,bank:'Metropolitan Bank and Trust Co.',status:'Active'},
    {pn:'MUCC-103-03-89530073-8',name:'Reynaldo Morales',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:4670,bank:'BDO Unibank, Inc.',status:'Problem'},
    {pn:'MUCC-103-03-48884336-9',name:'Isabelita Almario',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:3500,bank:'United Coconut Planters Bank',status:'Active'},
    {pn:'MUCC-103-03-3589450-9',name:'Norberto Chong',provider:'SSS',type:'Retirement',pension:3900,bank:'Security Bank Corp.',status:'Active'},
    {pn:'MUCC-103-03-88210044-1',name:'Josefina Ramos',provider:'SSS',type:'Retirement',pension:5200,bank:'Philippine National Bank',status:'Active'},
    {pn:'MUCC-103-03-77334411-2',name:'Manuel Santos',provider:'SSS',type:'Retirement',pension:4100,bank:'BDO Unibank, Inc.',status:'Active'},
    {pn:'MUCC-103-03-66778899-3',name:'Carmelita Flores',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:1800,bank:'Security Bank Corp.',status:'Fully Paid'},
    {pn:'MUCC-103-03-55443322-4',name:'Rodrigo Cruz',provider:'SSS',type:'Retirement',pension:6500,bank:'Land Bank of the Philippines',status:'Active'},
    {pn:'MUCC-103-03-44332211-5',name:'Teresita Bautista',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:2300,bank:'Philippine Savings Bank',status:'Active'},
    {pn:'MUCC-103-03-33221100-6',name:'Eduardo Reyes',provider:'SSS',type:'Retirement',pension:3750,bank:'Maybank Philippines, Inc.',status:'Problem'},
    {pn:'MUCC-103-03-22110099-7',name:'Lorena Dela Cruz',provider:'SSS',type:'Surviving Spouse of Dead Member',pension:1950,bank:'Philippine National Bank',status:'Active'},
    {pn:'MUCC-103-03-11009988-8',name:'Francisco Mendoza',provider:'SSS',type:'Retirement',pension:4800,bank:'Bank of the Philippine Islands',status:'Active'},
  ],
  loans: [
    {ref:'A2049Fi497',date:'2011-09-01',name:'Flora Hipolito',amort:1900,terms:1,principal:1900,proc:0,not:0,ins:0,interest:380,cashout:1520,status:'Active'},
    {ref:'A2049Fh640',date:'2011-09-01',name:'Thelma Buan',amort:3400,terms:1,principal:3400,proc:0,not:0,ins:0,interest:680,cashout:2720,status:'Active'},
    {ref:'A2049Fi179',date:'2011-09-01',name:'Ernesto Fajardo',amort:9700,terms:1,principal:9700,proc:0,not:0,ins:0,interest:1940,cashout:7760,status:'Active'},
    {ref:'A2049Fg204',date:'2012-01-08',name:'Ricardo Torres',amort:1700,terms:7,principal:11900,proc:100,not:238,ins:0,interest:4046,cashout:7446,status:'Active'},
    {ref:'A2049Fh339',date:'2011-09-01',name:'Cesar Edoria',amort:4000,terms:1,principal:4000,proc:0,not:0,ins:0,interest:800,cashout:3200,status:'Active'},
    {ref:'A2049Fh532',date:'2011-09-01',name:'Jovita Marcelino',amort:3800,terms:1,principal:3800,proc:0,not:0,ins:0,interest:760,cashout:3040,status:'Active'},
    {ref:'A2049Fh735',date:'2011-09-01',name:'Perlito Surio',amort:3200,terms:1,principal:3200,proc:0,not:0,ins:0,interest:640,cashout:2560,status:'Active'},
    {ref:'A2049Fg003',date:'2011-11-05',name:'Anita Tubig',amort:1000,terms:4,principal:4000,proc:100,not:80,ins:0,interest:800,cashout:2980,status:'Active'},
    {ref:'A2049Fh748',date:'2011-09-01',name:'Rosario Trillana',amort:1900,terms:1,principal:1900,proc:0,not:0,ins:0,interest:380,cashout:1520,status:'Active'},
    {ref:'A2049Fh284',date:'2011-09-01',name:'Imelda Buan',amort:3400,terms:1,principal:3400,proc:0,not:0,ins:0,interest:680,cashout:2720,status:'Active'},
    {ref:'A2049Fh705',date:'2011-09-01',name:'Marissa Batungbakal',amort:5700,terms:1,principal:5700,proc:0,not:0,ins:0,interest:1140,cashout:4560,status:'Active'},
    {ref:'A2049Fi727',date:'2011-09-01',name:'Rowena Aquino',amort:1400,terms:1,principal:1400,proc:0,not:0,ins:0,interest:280,cashout:1120,status:'Active'},
    {ref:'A2049Fi839',date:'2011-09-01',name:'Ofelia Santiago',amort:2600,terms:1,principal:2600,proc:0,not:0,ins:0,interest:520,cashout:2080,status:'Active'},
    {ref:'A2049Fh441',date:'2011-09-01',name:'Herminia Latoza',amort:1700,terms:1,principal:1700,proc:0,not:0,ins:0,interest:340,cashout:1360,status:'Active'},
    {ref:'A2049Fg839',date:'2012-03-26',name:'Diosdado Hiracay',amort:1700,terms:5,principal:8500,proc:100,not:170,ins:0,interest:3230,cashout:4950,status:'Active'},
    {ref:'A2049Fg543',date:'2011-08-13',name:'Adelaida Sulog',amort:500,terms:6,principal:3000,proc:100,not:60,ins:0,interest:360,cashout:2420,status:'Active'},
    {ref:'A2049Fh957',date:'2011-09-01',name:'Ma. Victoria Reyes',amort:1200,terms:1,principal:1200,proc:0,not:0,ins:0,interest:240,cashout:960,status:'Active'},
    {ref:'A2049Fh832',date:'2011-09-01',name:'Feliciana Pascual',amort:2900,terms:1,principal:2900,proc:0,not:0,ins:0,interest:580,cashout:2320,status:'Active'},
    {ref:'A2049Fi966',date:'2011-09-01',name:'Adoracion Santos',amort:3700,terms:1,principal:3700,proc:0,not:0,ins:0,interest:740,cashout:2960,status:'Active'},
    {ref:'A2049Fi077',date:'2011-09-01',name:'Rodolfo Eugenio',amort:1400,terms:1,principal:1400,proc:0,not:0,ins:0,interest:280,cashout:1120,status:'Active'},
    {ref:'A2049Fg427',date:'2011-11-12',name:'Editha Manabat',amort:1500,terms:3,principal:4500,proc:100,not:90,ins:0,interest:810,cashout:3470,status:'Active'},
    {ref:'A2049Fh538',date:'2011-09-01',name:'Monica Villanueva',amort:1700,terms:1,principal:1700,proc:0,not:0,ins:0,interest:340,cashout:1360,status:'Active'},
    {ref:'A2049Fj033',date:'2011-09-01',name:'Rizalino Tengco',amort:2800,terms:1,principal:2800,proc:0,not:0,ins:0,interest:560,cashout:2240,status:'Active'},
    {ref:'A2049Fk112',date:'2011-09-01',name:'Carlito Dela Torre',amort:3100,terms:1,principal:3100,proc:0,not:0,ins:0,interest:620,cashout:2480,status:'Active'},
    {ref:'A2049Fl224',date:'2011-09-1',name:'Marilou Corpuz',amort:2200,terms:1,principal:2200,proc:0,not:0,ins:0,interest:440,cashout:1760,status:'Active'},
    {ref:'A2049Fm335',date:'2011-09-01',name:'Benedicto Gomez',amort:4500,terms:2,principal:9000,proc:0,not:0,ins:0,interest:1800,cashout:7200,status:'Active'},
    {ref:'A2049Fn446',date:'2011-10-15',name:'Erlinda Paglinawan',amort:1800,terms:2,principal:3600,proc:100,not:72,ins:0,interest:720,cashout:2708,status:'Active'},
    {ref:'A2049Fo557',date:'2011-09-01',name:'Domingo Castillo',amort:5000,terms:1,principal:5000,proc:0,not:0,ins:0,interest:1000,cashout:4000,status:'Active'},
    {ref:'A2049Fp668',date:'2011-09-01',name:'Leonarda Garcia',amort:2700,terms:1,principal:2700,proc:0,not:0,ins:0,interest:540,cashout:2160,status:'Active'},
    {ref:'A2049Fq779',date:'2011-09-01',name:'Roberto Aquino',amort:3300,terms:1,principal:3300,proc:0,not:0,ins:0,interest:660,cashout:2640,status:'Active'},
  ],
  approvals: [
    {ref:'A28J33a216',date:'2025-09-30',name:'Ma. Nery Bacani',amort:2200,terms:18,principal:39600,status:'Pending'},
    {ref:'A28C3Hc749',date:'2025-09-16',name:'Ma. Nery Bacani',amort:2000,terms:15,principal:30000,status:'Pending'},
    {ref:'A22h3Ml598',date:'2025-03-26',name:'Eleuterio Reyes',amort:1000,terms:12,principal:12000,status:'Pending'},
    {ref:'A24F7ww249',date:'2025-05-21',name:'MAURA Sapno',amort:10000,terms:12,principal:120000,status:'Pending'},
    {ref:'A24f12k307',date:'2025-05-22',name:'Olivia Daria',amort:1200,terms:6,principal:7200,status:'Pending'},
    {ref:'A22h353809',date:'2025-03-26',name:'Ma. Nery Bacani',amort:3900,terms:12,principal:46800,status:'Pending'},
  ],
  vouchers: [],
  collections: [],
  changefunds: [],
  banks: [
    {name:'Philippine National Bank',address:'Makati City',contact:'Juan Dela Cruz',position:'Manager',tel:'8888-1234'},
    {name:'Security Bank Corp.',address:'Quezon City',contact:'Maria Santos',position:'Branch Head',tel:'8888-5678'},
    {name:'BDO Unibank, Inc.',address:'Manila',contact:'Pedro Reyes',position:'VP',tel:'8888-9012'},
  ],
  bankaccounts: [
    {bank:'Philippine National Bank',addr:'Makati City',acctno:'1234-5678-901'},
    {bank:'Security Bank Corp.',addr:'Quezon City',acctno:'9876-5432-109'},
  ],
  products: [
    {name:'Loan-70a',type:'New',description:'Standard loan product'},
    {name:'Loan-72a',type:'Renewal',description:'Renewal loan product'},
    {name:'BONUS LOAN August',type:'Bonus',description:'Bonus loan for August'},
  ],
  agents: [
    {fname:'Ana',lname:'Santos',type:'Full-Time',addr:'Manila',contact:'0917-123-4567'},
    {fname:'Roberto',lname:'Cruz',type:'Full-Time',addr:'Quezon City',contact:'0918-234-5678'},
    {fname:'Maria',lname:'Dela Cruz',type:'Part-Time',addr:'Makati',contact:'0919-345-6789'},
  ],
  addresses: [
    {code:'MAL001',addr:'Malolos, Bulacan'},
    {code:'QC001',addr:'Quezon City'},
    {code:'MNL001',addr:'Manila'},
  ],
  lookups: [
    {word:'Active',order:1,code:'ACT'},
    {word:'Problem',order:2,code:'PRB'},
    {word:'Archived',order:3,code:'ARC'},
  ],
};

async function loadTable(table) {
  try {
    DB[table] = Array.isArray(DB[table]) ? DB[table] : [];
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
function delBankAcct(i){confirmDlg('Delete Bank Account','This cannot be undone.',()=>{DB.bankaccounts.splice(i,1);renderBankAccounts();toast('🗑️ Deleted','success');});}

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
function delRow(k,idx){
  const data=getFiltered(k);const r=data[idx];const aIdx=DB[k].indexOf(r);
  confirmDlg('Delete Record','Delete this record? Cannot be undone.',()=>{DB[k].splice(aIdx,1);renderT(k);toast('🗑️ Deleted','success');});
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
function approveLoan(){
  const data=getFiltered('approvals');const r=data[curApprovalIdx];const aIdx=DB.approvals.indexOf(r);
  confirmDlg('Approve Loan',`Approve loan ${r.ref} for ${r.name}?`,()=>{
    DB.approvals[aIdx].status='Approved';closeM('m-process-loan');renderT('approvals');updatePendingBadge();toast('✅ Loan approved!','success');
  });
}
function denyLoan(){
  const data=getFiltered('approvals');const r=data[curApprovalIdx];const aIdx=DB.approvals.indexOf(r);
  const remarks=gv('process-remarks');
  confirmDlg('Deny Loan',`Deny loan ${r.ref}?`,()=>{
    DB.approvals[aIdx].status='Denied';closeM('m-process-loan');renderT('approvals');updatePendingBadge();toast('✗ Loan denied','error');
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
function saveAccount(){
  if(!gv('ai-fname')||!gv('ai-lname')){toast('⚠️ First and Last Name are required','error');return;}
  const name=`${gv('ai-fname')} ${gv('ai-mname')?gv('ai-mname')+' ':''}${gv('ai-lname')}`.replace(/\s+/g,' ').trim();
  const rec={pn:gv('ai-pnum')||'MUCC-103-'+Date.now(),name,provider:gv('ai-provider'),type:gv('ai-ptype'),pension:parseFloat(gv('ai-pamount')||0),bank:gv('ai-bank'),status:gv('ai-pstatus')||'Active'};
  if(editIdx.accounts!==undefined){DB.accounts[editIdx.accounts]=rec;delete editIdx.accounts;toast('✅ Account updated!','success');}
  else{DB.accounts.push(rec);toast('✅ Account created!','success');}
  closeM('m-account');renderT('accounts');
}
function saveLoan(){
  if(!gv('ln-customer')){toast('⚠️ Customer name required','error');return;}
  const a=parseFloat(gv('ln-amort')||0);const t=parseInt(gv('ln-terms')||12);const pr=a*t;const int=pr*0.2;const net=parseFloat(gv('ln-net')||0);
  const rec={ref:'A'+Date.now().toString(36).toUpperCase().slice(-8),date:gv('ln-ldate')||today(),name:gv('ln-customer'),amort:a,terms:t,principal:pr,proc:parseFloat(gv('ln-proc')||0),not:parseFloat(gv('ln-not')||0),ins:parseFloat(gv('ln-ins')||0),interest:int,cashout:net,status:'Active'};
  if(editIdx.loans!==undefined){DB.loans[editIdx.loans]=rec;delete editIdx.loans;toast('✅ Loan updated!','success');}
  else{DB.loans.push(rec);toast('✅ Loan created!','success');}
  closeM('m-loan');renderT('loans');
}
function saveVoucher(){
  if(!gv('v-payee')){toast('⚠️ Payee required','error');return;}
  const nextNo=String(DB.vouchers.length+1).padStart(10,'0');
  const rec={no:nextNo,date:gv('v-date')||today(),payee:gv('v-payee'),acct:(gv('v-bankacct')||'').split(' ')[0],amount:parseFloat(gv('v-amount')||0),status:'Active'};
  if(editIdx.vouchers!==undefined){DB.vouchers[editIdx.vouchers]=rec;delete editIdx.vouchers;toast('✅ Voucher updated!','success');}
  else{DB.vouchers.push(rec);toast('✅ Voucher created!','success');}
  closeM('m-voucher');renderT('vouchers');
}
function saveCollection(){
  if(!gv('cl-customer')){toast('⚠️ Customer required','error');return;}
  const nextNo=String(300000+DB.collections.length+1).padStart(10,'0');
  const rec={no:nextNo,date:gv('cl-date')||today(),cust:gv('cl-customer'),amount:parseFloat(gv('cl-amount')||0),bonus:parseFloat(gv('cl-bonus')||0),remarks:gv('cl-remarks'),status:'Active'};
  if(editIdx.collections!==undefined){DB.collections[editIdx.collections]=rec;delete editIdx.collections;toast('✅ Collection updated!','success');}
  else{DB.collections.push(rec);toast('✅ Collection recorded!','success');}
  closeM('m-collection');renderT('collections');
}
function saveChangeFund(){
  if(!gv('cf-custname')){toast('⚠️ Customer name required','error');return;}
  const nextNo=String(DB.changefunds.length+1).padStart(10,'0');
  const rec={no:nextNo,date:gv('cf-date')||today(),type:gv('cf-type'),amount:parseFloat(gv('cf-amount')||0),name:gv('cf-custname'),remarks:gv('cf-remarks'),branch:gv('cf-branch')||'Malolos'};
  if(editIdx.changefunds!==undefined){DB.changefunds[editIdx.changefunds]=rec;delete editIdx.changefunds;toast('✅ Change Fund updated!','success');}
  else{DB.changefunds.push(rec);toast('✅ Change Fund created!','success');}
  closeM('m-changefund');renderT('changefunds');
}
function saveBank(){
  if(!gv('bk-name')){toast('⚠️ Bank name required','error');return;}
  const rec={name:gv('bk-name'),addr:gv('bk-addr'),contact:gv('bk-contact'),pos:gv('bk-pos'),tel:gv('bk-tel')};
  if(editIdx.banks!==undefined){DB.banks[editIdx.banks]=rec;delete editIdx.banks;toast('✅ Bank updated!','success');}
  else{DB.banks.push(rec);toast('✅ Bank created!','success');}
  closeM('m-bank');renderT('banks');
}
function saveBankAccount(){
  if(!gv('ba-acctno')){toast('⚠️ Account No. required','error');return;}
  const rec={bank:gv('ba-bank'),addr:gv('ba-addr'),acctno:gv('ba-acctno'),bal:0};
  if(editIdx.bankaccounts!==undefined){DB.bankaccounts[editIdx.bankaccounts]=rec;delete editIdx.bankaccounts;}
  else{DB.bankaccounts.push(rec);}
  closeM('m-bankaccount');renderBankAccounts();toast('✅ Bank Account saved!','success');
}
function saveProduct(){
  if(!gv('pr-name')){toast('⚠️ Product name required','error');return;}
  const rec={name:gv('pr-name'),type:gv('pr-type'),desc:gv('pr-desc')};
  if(editIdx.products!==undefined){DB.products[editIdx.products]=rec;delete editIdx.products;toast('✅ Product updated!','success');}
  else{DB.products.push(rec);toast('✅ Product created!','success');}
  closeM('m-product');renderT('products');
}
function saveAgent(){
  if(!gv('ag-fname')||!gv('ag-lname')){toast('⚠️ First and Last Name required','error');return;}
  const name=`${gv('ag-fname')} ${gv('ag-lname')}`.trim();
  const rec={name,type:gv('ag-type'),addr:gv('ag-addr'),contact:gv('ag-contact')};
  if(editIdx.agents!==undefined){DB.agents[editIdx.agents]=rec;delete editIdx.agents;toast('✅ Agent updated!','success');}
  else{DB.agents.push(rec);toast('✅ Agent created!','success');}
  closeM('m-agent');renderT('agents');
}
function saveAddress(){
  if(!gv('addr-code')||!gv('addr-addr')){toast('⚠️ Code and Address required','error');return;}
  const rec={code:gv('addr-code'),addr:gv('addr-addr')};
  if(editIdx.addresses!==undefined){DB.addresses[editIdx.addresses]=rec;delete editIdx.addresses;toast('✅ Address updated!','success');}
  else{DB.addresses.push(rec);toast('✅ Address created!','success');}
  closeM('m-address');renderT('addresses');
}
function saveLookup(){
  if(!gv('lu-word')){toast('⚠️ LookUpWord is required','error');return;}
  const rec={word:gv('lu-word'),order:parseInt(gv('lu-order')||DB.lookups.length+1),code:gv('lu-code')};
  if(editIdx.lookups!==undefined){DB.lookups[editIdx.lookups]=rec;delete editIdx.lookups;toast('✅ LookUp updated!','success');}
  else{DB.lookups.push(rec);toast('✅ LookUp created!','success');}
  closeM('m-lookup');renderT('lookups');
}
