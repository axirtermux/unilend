// ══ DATABASE ══
const DB = {
  accounts:[
    {pn:'MUCC-103-001',name:'Adela Buriel',provider:'SSS',type:'Loan-70n',pension:8500,bank:'2012-7000-5585',status:'Active'},
    {pn:'MUCC-103-002',name:'Reynaldo Bascon',provider:'SSS',type:'Loan-72n',pension:9200,bank:'2012-7000-5585',status:'Active'},
    {pn:'MUCC-103-003',name:'Zenaldo Clavio',provider:'SSS',type:'Loan-75n',pension:10500,bank:'2012-7000-5585',status:'Active'},
    {pn:'MUCC-103-004',name:'Teodora Dionisio',provider:'SSS',type:'Loan-79n',pension:11200,bank:'2012-7000-5585',status:'Active'},
    {pn:'MUCC-103-005',name:'Eduardo Laquindanum',provider:'SSS',type:'Loan-80n',pension:12500,bank:'2012-7000-5585',status:'Active'},
    {pn:'MUCC-103-006',name:'Zenaida Dela Cruz',provider:'SSS',type:'Loan-70x',pension:8500,bank:'2012-7000-5585',status:'Active'},
    {pn:'MUCC-103-007',name:'Thelma Dionisio',provider:'SSS',type:'Loan-72x',pension:9200,bank:'2012-7000-5585',status:'Active'},
    {pn:'MUCC-103-008',name:'Hospicio Dulay',provider:'SSS',type:'Loan-75x',pension:10500,bank:'2012-7000-5585',status:'Active'},
    {pn:'MUCC-103-009',name:'Mercedita Esguerra',provider:'SSS',type:'Loan-79x',pension:11200,bank:'2012-7000-5585',status:'Active'},
    {pn:'MUCC-103-010',name:'Leticia Espiritu',provider:'SSS',type:'Loan-80x',pension:12500,bank:'2012-7000-5585',status:'Active'},
  ],
  loans:[
    {ref:'A33L5QE866',date:'2025-03-15',name:'Julius Bolanos',amort:4200,terms:12,principal:50400,proc:504,not:0,ins:0,interest:10080,cashout:39816,status:'Active'},
    {ref:'A92K4MX739',date:'2025-04-22',name:'Maria Santos',amort:3800,terms:18,principal:68400,proc:684,not:0,ins:0,interest:13680,cashout:54036,status:'Active'},
    {ref:'B47N8PQ215',date:'2025-05-10',name:'Roberto Cruz',amort:4500,terms:24,principal:108000,proc:1080,not:0,ins:0,interest:21600,cashout:85320,status:'Active'},
    {ref:'C15R3ST847',date:'2025-06-05',name:'Carmen Reyes',amort:5200,terms:12,principal:62400,proc:624,not:0,ins:0,interest:12480,cashout:49296,status:'Active'},
    {ref:'D28M7VY963',date:'2025-07-18',name:'Fernando Lopez',amort:4800,terms:18,principal:86400,proc:864,not:0,ins:0,interest:17280,cashout:68256,status:'Active'},
  ],
  approvals:[
    {ref:'A88L2ZE754',date:'2025-08-01',name:'Lourdes Torres',amort:3900,terms:12,principal:46800,status:'Pending'},
    {ref:'B55K9MX328',date:'2025-08-05',name:'Eduardo Ramos',amort:4100,terms:18,principal:73800,status:'Pending'},
    {ref:'C33N7PQ441',date:'2025-08-10',name:'Gloria Hernandez',amort:4700,terms:24,principal:112800,status:'Pending'},
    {ref:'D66M3VY855',date:'2025-08-12',name:'Rodrigo Flores',amort:5100,terms:12,principal:61200,status:'Pending'},
    {ref:'E77R4ST966',date:'2025-08-15',name:'Teresita Gutierrez',amort:4300,terms:18,principal:77400,status:'Pending'},
  ],
  vouchers:[
    {no:'0000000010',date:'2025-03-28',payee:'Francisco Rivera',acct:'2012-7000-5585',amount:0,status:'Active'},
    {no:'0000000011',date:'2025-05-21',payee:'Rodolfo Vistan',acct:'2012-7000-5585',amount:0,status:'Active'},
    {no:'0000000012',date:'2025-05-21',payee:'Pablo Marquez',acct:'2012-7000-5585',amount:0,status:'Active'},
    {no:'0000000013',date:'2025-05-22',payee:'Teodorica Delgado',acct:'2012-7000-5585',amount:0,status:'Active'},
    {no:'0000000014',date:'2025-05-26',payee:'Gloria De Leon',acct:'2012-7000-5585',amount:0,status:'Active'},
    {no:'0000000015',date:'2025-05-26',payee:'Olivia Santos',acct:'2012-7000-5585',amount:0,status:'Active'},
    {no:'0000000016',date:'2025-05-26',payee:'Romulo Berey',acct:'2012-7000-5585',amount:0,status:'Active'},
    {no:'0000000017',date:'2025-06-10',payee:'KENNITH A. OCHOA',acct:'2012-7000-5585',amount:20000,status:'Active'},
    {no:'0000000018',date:'2025-06-10',payee:'Virginia Clemente',acct:'2012-7000-5585',amount:1615,status:'Active'},
    {no:'0000000019',date:'2025-07-18',payee:'Herminia Latoza',acct:'2012-7000-5585',amount:4376,status:'Active'},
    {no:'0000000020',date:'2025-10-13',payee:'Patrick Delos Santos',acct:'2012-7000-5585',amount:59350,status:'Active'},
    {no:'0000000021',date:'2026-04-13',payee:'KENNITH A. OCHOA',acct:'2012-7000-5585',amount:20000,status:'Active'},
    {no:'0000000022',date:'2026-04-27',payee:'Rufina Bodino',acct:'2012-7000-5585',amount:7447,status:'Active'},
    {no:'0000000023',date:'2026-04-27',payee:'JAISSA DUPLON',acct:'2012-7000-5585',amount:10000,status:'Active'},
    {no:'0000000024',date:'2026-04-27',payee:'Elenita Hilario',acct:'2012-7000-5585',amount:5000,status:'Active'},
  ],
  collections:[
    {no:'0000300139',date:'2011-10-10',cust:'Adela Buriel',amount:2800,bonus:0,remarks:'',status:'Active'},
    {no:'0000300193',date:'2011-10-09',cust:'Reynaldo Bascon',amount:6000,bonus:0,remarks:'',status:'Active'},
    {no:'0000300240',date:'2011-10-26',cust:'Zenaldo Clavio',amount:12900,bonus:0,remarks:'',status:'Active'},
    {no:'0000300253',date:'2011-10-17',cust:'Teodora Dionisio',amount:2300,bonus:0,remarks:'',status:'Active'},
    {no:'0000300303',date:'2011-09-18',cust:'Eduardo Laquindanum',amount:1000,bonus:0,remarks:'',status:'Active'},
    {no:'0000300304',date:'2011-10-17',cust:'Eduardo Laquindanum',amount:1000,bonus:0,remarks:'',status:'Active'},
    {no:'0000300357',date:'2011-11-14',cust:'Zenaida Dela Cruz',amount:3200,bonus:0,remarks:'',status:'Active'},
    {no:'0000300360',date:'2011-11-30',cust:'Thelma Dionisio',amount:12400,bonus:0,remarks:'',status:'Active'},
    {no:'0000300362',date:'2011-11-30',cust:'Hospicio Dulay',amount:6500,bonus:0,remarks:'',status:'Active'},
    {no:'0000300363',date:'2011-11-03',cust:'Mercedita Esguerra',amount:2000,bonus:0,remarks:'',status:'Active'},
    {no:'0000300364',date:'2011-11-30',cust:'Mercedita Esguerra',amount:2000,bonus:0,remarks:'',status:'Active'},
    {no:'0000300369',date:'2011-11-30',cust:'Leticia Espiritu',amount:1000,bonus:0,remarks:'',status:'Active'},
    {no:'0000300370',date:'2011-10-10',cust:'Jorge Estrada',amount:3500,bonus:0,remarks:'',status:'Active'},
    {no:'0000300371',date:'2011-11-14',cust:'Jorge Estrada',amount:3500,bonus:0,remarks:'',status:'Active'},
    {no:'0000300372',date:'2011-11-30',cust:'Jorge Estrada',amount:7500,bonus:0,remarks:'',status:'Active'},
    {no:'0000300375',date:'2011-10-03',cust:'Julian Caparas',amount:4000,bonus:0,remarks:'',status:'Active'},
    {no:'0000300376',date:'2011-11-02',cust:'Julian Caparas',amount:4000,bonus:0,remarks:'',status:'Active'},
    {no:'0000300377',date:'2011-11-30',cust:'Julian Caparas',amount:4000,bonus:0,remarks:'',status:'Active'},
    {no:'0000300381',date:'2011-10-02',cust:'Bienvenido Francisco',amount:3800,bonus:0,remarks:'',status:'Active'},
    {no:'0000300390',date:'2011-12-19',cust:'Feliciana Pascual',amount:5400,bonus:0,remarks:'',status:'Active'},
    {no:'0000300391',date:'2011-12-06',cust:'Victoria Gatchalian',amount:1000,bonus:0,remarks:'',status:'Active'},
    {no:'0000300392',date:'2012-01-02',cust:'Victoria Gatchalian',amount:1000,bonus:0,remarks:'',status:'Active'},
    {no:'0000300393',date:'2012-01-30',cust:'Carmelita Llamas',amount:2400,bonus:0,remarks:'',status:'Active'},
    {no:'0000300394',date:'2012-02-28',cust:'Roberto Hernandez',amount:5500,bonus:0,remarks:'',status:'Active'},
    {no:'0000300395',date:'2012-03-31',cust:'Nora Villanueva',amount:3200,bonus:0,remarks:'',status:'Active'},
    {no:'0000300396',date:'2012-04-30',cust:'Ramon Gutierrez',amount:7800,bonus:0,remarks:'',status:'Active'},
    {no:'0000300397',date:'2012-05-31',cust:'Amelia Castillo',amount:1500,bonus:0,remarks:'',status:'Active'},
    {no:'0000300398',date:'2012-06-30',cust:'Domingo Reyes',amount:4200,bonus:0,remarks:'',status:'Active'},
    {no:'0000300399',date:'2012-07-31',cust:'Elena Santos',amount:6100,bonus:0,remarks:'',status:'Active'},
    {no:'0000300400',date:'2012-08-31',cust:'Pedro Cruz',amount:2900,bonus:0,remarks:'',status:'Active'},
  ],
  changefunds:[
    {no:'0000000001',date:'2025-02-06',type:'Credit',amount:2000,name:'Ma. Nery Bacani',remarks:'',branch:'Malolos'},
    {no:'0000000002',date:'2025-02-06',type:'Debit',amount:2000,name:'Ma. Nery Bacani',remarks:'Ref Collection#: 0000452775',branch:'Malolos'},
    {no:'0000000003',date:'2025-03-26',type:'Credit',amount:5000,name:'MARINO QUITELES',remarks:'',branch:'Malolos'},
    {no:'0000000004',date:'2025-03-26',type:'Credit',amount:200,name:'Leoncia Ganaden',remarks:'',branch:'Malolos'},
    {no:'0000000005',date:'2025-03-26',type:'Debit',amount:2400,name:'MARINO QUITELES',remarks:'Ref Collection#: 0000452776',branch:'Malolos'},
    {no:'0000000006',date:'2025-03-26',type:'Credit',amount:24000,name:'MARINO QUITELES',remarks:'',branch:'Malolos'},
    {no:'0000000007',date:'2025-03-26',type:'Credit',amount:500,name:'Fe Ablaza',remarks:'',branch:'Malolos'},
    {no:'0000000008',date:'2025-03-26',type:'Debit',amount:500,name:'Fe Ablaza',remarks:'Ref Collection#: 0000452777',branch:'Malolos'},
    {no:'0000000009',date:'2025-03-26',type:'Credit',amount:200,name:'Olivia Daria',remarks:'',branch:'Malolos'},
    {no:'0000000010',date:'2025-03-26',type:'Credit',amount:1000,name:'Rufina Bodino',remarks:'CF MAR (2025.03.26-POSBAL)',branch:'Malolos'},
    {no:'0000000011',date:'2025-03-26',type:'Credit',amount:500,name:'Fe Ablaza',remarks:'',branch:'Malolos'},
    {no:'0000000012',date:'2025-03-26',type:'Credit',amount:500,name:'Rufina Bodino',remarks:'SSS CF: MARCH',branch:'Malolos'},
    {no:'0000000013',date:'2025-03-28',type:'Debit',amount:400,name:'Ricardo Ablaza',remarks:'Ref Collection#: 0000452780',branch:'Malolos'},
    {no:'0000000014',date:'2025-03-28',type:'Credit',amount:400,name:'Ricardo Ablaza',remarks:'',branch:'Malolos'},
    {no:'0000000015',date:'2025-05-22',type:'Credit',amount:0,name:'Rufina Bodino',remarks:'',branch:'Malolos'},
    {no:'0000000016',date:'2025-10-13',type:'Debit',amount:5000,name:'Patrick Delos Santos',remarks:'lost coll. (OCT 2025)',branch:'Malolos'},
    {no:'0000000017',date:'2025-10-16',type:'Debit',amount:7000,name:'Patrick Delos Santos',remarks:'Ref Collection#: 0000452782',branch:'Malolos'},
    {no:'0000000018',date:'2025-10-16',type:'Debit',amount:7000,name:'Patrick Delos Santos',remarks:'',branch:'Malolos'},
    {no:'0000000019',date:'2026-04-13',type:'Debit',amount:200,name:'Reynaldo De Guzman',remarks:'Ref Collection#: 0000452784',branch:'Malolos'},
    {no:'0000000020',date:'2026-04-13',type:'Debit',amount:1000,name:'Eleuterio Reyes',remarks:'Ref Collection#: 0000452785',branch:'Malolos'},
    {no:'0000000021',date:'2026-04-13',type:'Debit',amount:1800,name:'Fe Ablaza',remarks:'Ref Collection#: 0000452786',branch:'Malolos'},
    {no:'0000000022',date:'2026-04-13',type:'Debit',amount:480,name:'Olivia Daria',remarks:'Ref Collection#: 0000452787',branch:'Malolos'},
    {no:'0000000023',date:'2026-04-13',type:'Debit',amount:4000,name:'Elenita Hilario',remarks:'Ref Collection#: 0000452788',branch:'Malolos'},
    {no:'0000000024',date:'2026-04-27',type:'Credit',amount:3500,name:'Ma. Nery Bacani',remarks:'',branch:'Malolos'},
    {no:'0000000025',date:'2026-04-27',type:'Debit',amount:2000,name:'Ricardo Ablaza',remarks:'Ref Collection#: 0000452789',branch:'Malolos'},
    {no:'0000000026',date:'2026-04-27',type:'Credit',amount:1200,name:'Leonora Gili',remarks:'',branch:'Malolos'},
    {no:'0000000027',date:'2026-04-27',type:'Debit',amount:800,name:'Anita Clemente',remarks:'Ref Collection#: 0000452790',branch:'Malolos'},
  ],
  banks:[
    {name:'Allied Bank',addr:'',contact:'',pos:'',tel:''},
    {name:'Asia United Bank Corporation',addr:'',contact:'',pos:'',tel:''},
    {name:'Bank of Commerce',addr:'',contact:'',pos:'',tel:''},
    {name:'Bank of the Philippine Islands',addr:'',contact:'',pos:'',tel:''},
    {name:'BDO Unibank, Inc.',addr:'',contact:'',pos:'',tel:''},
    {name:'China Banking Corporation',addr:'',contact:'',pos:'',tel:''},
    {name:'CTBC Bank (Philippines) Corporation',addr:'',contact:'',pos:'',tel:''},
    {name:'Development Bank of the Philippines',addr:'',contact:'',pos:'',tel:''},
    {name:'East West Banking Corp.',addr:'',contact:'',pos:'',tel:''},
    {name:'Gateway Rural Bank, Inc.',addr:'',contact:'',pos:'',tel:''},
    {name:'Land Bank of the Philippines',addr:'',contact:'',pos:'',tel:''},
    {name:'Maybank Philippines, Inc.',addr:'',contact:'',pos:'',tel:''},
    {name:'Metropolitan Bank and Trust Co.',addr:'',contact:'',pos:'',tel:''},
    {name:'Overseas Filipino Bank',addr:'',contact:'',pos:'',tel:''},
    {name:'Palawan Bank',addr:'',contact:'',pos:'',tel:''},
    {name:'Philippine Bank of Communications',addr:'',contact:'',pos:'',tel:''},
    {name:'Philippine Business Bank',addr:'',contact:'',pos:'',tel:''},
    {name:'Philippine National Bank',addr:'',contact:'',pos:'',tel:''},
    {name:'Philippine Savings Bank',addr:'',contact:'',pos:'',tel:''},
    {name:'Philippine Trust Company',addr:'',contact:'',pos:'',tel:''},
    {name:'Philippine Veterans Affairs Office',addr:'',contact:'',pos:'',tel:''},
    {name:'Philippine Veterans Bank',addr:'',contact:'',pos:'',tel:''},
    {name:'Security Bank Corp.',addr:'',contact:'',pos:'',tel:''},
    {name:'United Coconut Planters Bank',addr:'',contact:'',pos:'',tel:''},
    {name:'Unionbank of the Philippines',addr:'',contact:'',pos:'',tel:''},
  ],
  bankaccounts:[
    {bank:'Metropolitan Bank and Trust Co.',addr:'',acctno:'MB-1234',bal:0},
    {bank:'Philippine National Bank',addr:'',acctno:'2012-7000-5585',bal:0},
  ],
  products:[
    {name:'Loan-70a',type:'Additional',desc:'Additional loan for Pensioners 70 years old and below'},
    {name:'Loan-72a',type:'Additional',desc:'Additional loan for Pensioners 71 to 72 years old'},
    {name:'Loan-75a',type:'Additional',desc:'Additional loan for Pensioners 73 to 75 years old'},
    {name:'Loan-79a',type:'Additional',desc:'Additional loan for Pensioners 76 to 79 years old'},
    {name:'Loan-80a',type:'Additional',desc:'Additional loan for Pensioners 80 and ABOVE'},
    {name:'BONUS LOAN August',type:'Bonus',desc:'Bonus loan for SSS clients - August only'},
    {name:'BONUS LOAN July',type:'Bonus',desc:'Bonus loan for SSS clients - July only'},
    {name:'BONUS LOAN November',type:'Bonus',desc:'Bonus loan for SSS clients - November only'},
    {name:'BONUS LOAN October',type:'Bonus',desc:'Bonus loan for SSS clients - October only'},
    {name:'BONUS LOAN September',type:'Bonus',desc:'Bonus loan for SSS clients - September only'},
    {name:'BUY-OUT 70n (AGENT BASED)',type:'BUY OUT NEW',desc:'For Agent Based Buy-out Clients'},
    {name:'BuyOut-70n - New and Below (WALK-IN)',type:'BUY OUT NEW',desc:'For prospective buy-out clients'},
    {name:'BUY-OUT 70r (AGENT BASED)',type:'BUY OUT REN',desc:'For Agent Based Buy-out Clients'},
    {name:'BuyOut-70r - Renewal and Below',type:'BUY OUT REN',desc:'For prospective buy-out clients'},
    {name:'CORRECTIVE DISCOUNTED LOAN EXTENSION',type:'CORRECTIVE DISCOUNT LOAN',desc:'Discounted Extension Loan from current date to date of ACOP/APIR'},
    {name:'CORRECTIVE DISCOUNTED LOAN RENEWAL',type:'CORRECTIVE DISCOUNT LOAN',desc:'Client qualified for discounted renewal loan'},
    {name:'Loan 70x',type:'Extension',desc:'Extension loan for Pensioners 70 years old and below'},
    {name:'Loan-72x',type:'Extension',desc:'Extension loan for Pensioners 71 to 72 years old'},
    {name:'Loan-75x',type:'Extension',desc:'Extension loan for Pensioners 73 to 75 years old'},
    {name:'Loan-79x',type:'Extension',desc:'Extension loan for Pensioners 76 to 79 years old'},
    {name:'Loan-80x and ABOVE',type:'Extension',desc:'Extension loan for Pensioners 80 years and ABOVE'},
    {name:'Loan 70n',type:'New',desc:'New loan for Pensioners 70 years old and below'},
    {name:'Loan-72n',type:'New',desc:'New loan for Pensioners 71 to 72 years old'},
    {name:'Loan-75n',type:'New',desc:'New loan for Pensioners 73 to 75 years old'},
    {name:'Loan-79n',type:'New',desc:'New loan for Pensioners 76 to 79 years old'},
    {name:'Loan-80n and ABOVE',type:'New',desc:'New loan for Pensioners 80 years and ABOVE'},
    {name:'Loan 70r',type:'Renewal',desc:'Renewal loan for Pensioners 70 years old and below'},
    {name:'Loan-72r',type:'Renewal',desc:'Renewal loan for Pensioners 71 to 72 years old'},
    {name:'Loan-75r',type:'Renewal',desc:'Renewal loan for Pensioners 73 to 75 years old'},
    {name:'Loan-79r',type:'Renewal',desc:'Renewal loan for Pensioners 76 to 79 years old'},
  ],
  agents:[
    {name:'Ana Santos',type:'Full-Time',addr:'Lugam, Malolos',contact:'003'},
    {name:'Roberto Cruz',type:'Full-Time',addr:'Lugam, Malolos',contact:'000001287'},
    {name:'Maria Dela Cruz',type:'Full-Time',addr:'Santo Rosario (Pob.), Malolos',contact:'0000124'},
    {name:'Jose Garcia',type:'Full-Time',addr:'Santo Rosario (Pob.), Malolos',contact:'2000006400'},
    {name:'Carmen Reyes',type:'Full-Time',addr:'Kapitangan, Paombong',contact:'00022565'},
    {name:'Fernando Lopez',type:'Full-Time',addr:'Meyto, Calumpit',contact:'09359829530'},
    {name:'Lourdes Torres',type:'Full-Time',addr:'Santor, Malolos',contact:'10092017'},
    {name:'Eduardo Ramos',type:'Full-Time',addr:'Bulac, Santa Maria',contact:'10132017'},
    {name:'Gloria Hernandez',type:'Full-Time',addr:'Caingin, Bocaue',contact:'2000001297'},
    {name:'Rodrigo Flores',type:'Full-Time',addr:'Panasahan, Malolos',contact:'2000001383'},
    {name:'Teresita Gutierrez',type:'Full-Time',addr:'Caniogan, Calumpit',contact:'2000001419'},
    {name:'Andres Aquino',type:'Full-Time',addr:'',contact:'0033'},
    {name:'Consolacion Bautista',type:'Full-Time',addr:'',contact:'00522'},
    {name:'Domingo Villanueva',type:'Full-Time',addr:'',contact:'005484'},
    {name:'Edna Castillo',type:'Full-Time',addr:'',contact:'2'},
    {name:'Felix Morales',type:'Full-Time',addr:'',contact:'20000000939'},
    {name:'Glenda Mendoza',type:'Full-Time',addr:'',contact:'0920-5494451'},
    {name:'Hermogenes Pascual',type:'Full-Time',addr:'',contact:'032356'},
    {name:'Imelda Soriano',type:'Full-Time',addr:'',contact:'03264'},
    {name:'Juanito Gonzales',type:'Full-Time',addr:'',contact:'03332'},
    {name:'Katrina Perez',type:'Full-Time',addr:'',contact:'09067725214'},
    {name:'Leonardo Ramirez',type:'Full-Time',addr:'',contact:'092717'},
    {name:'Maryrose Navarro',type:'Part-Time',addr:'Sumapang Matanda, Malolos',contact:'N/A'},
    {name:'Nestor Aguilar',type:'Full-Time',addr:'Canalato, Malolos',contact:'09171234567'},
    {name:'Ofelia Domingo',type:'Full-Time',addr:'Pao, San Jose, Tarlac',contact:'09281234567'},
    {name:'Pablo Estrada',type:'Full-Time',addr:'Pinagbakahan, Malolos',contact:'09391234567'},
    {name:'Quirino Francisco',type:'Full-Time',addr:'Santo Cristo, Malolos',contact:'09451234567'},
    {name:'Remedios Halili',type:'Full-Time',addr:'Abulalas, Hagonoy',contact:'09561234567'},
    {name:'Salvador Ibarra',type:'Full-Time',addr:'Santo Cristo, Malolos',contact:'09671234567'},
    {name:'Trinidad Javier',type:'Full-Time',addr:'Pipiton, Bulacan',contact:'09781234567'},
  ],
  addresses:[
    {code:'A2015rW853',addr:'Lugam, City of Malolos (Capital), Bulacan'},
    {code:'A2015rW902',addr:'Santo Rosario (Pob.), City of Malolos (Capital), Bulacan'},
    {code:'A2015rW919',addr:'Kapitangan, Paombong, Bulacan'},
    {code:'A2015rW195',addr:'Meyto, Calumpit, Bulacan'},
    {code:'A2015rW161',addr:'Santor, City of Malolos (Capital), Bulacan'},
    {code:'A2015rW173',addr:'Bulac, Santa Maria, Bulacan'},
    {code:'A2015rW461',addr:'Caingin, Bocaue, Bulacan'},
    {code:'A2015rW466',addr:'Panasahan, City of Malolos (Capital), Bulacan'},
    {code:'A2015rW473',addr:'Caniogan, Calumpit, Bulacan'},
    {code:'A2015rW572',addr:'Pio Cruzcosa, Calumpit, Bulacan'},
    {code:'A2015rW577',addr:'Sumapang Matanda, City of Malolos (Capital), Bulacan'},
    {code:'A2015rW644',addr:'Canalato, City of Malolos (Capital), Bulacan'},
    {code:'A2015rW650',addr:'Pao, San Jose, Tarlac'},
    {code:'A2015rW680',addr:'Pinagbakahan, City of Malolos (Capital), Bulacan'},
    {code:'A2015rW733',addr:'Santo Cristo, City of Malolos (Capital), Bulacan'},
    {code:'A2015rW780',addr:'Abulalas, Hagonoy, Bulacan'},
    {code:'A2015rW788',addr:'Santo Cristo, City of Malolos (Capital), Bulacan'},
    {code:'A2015rW793',addr:'Pipiton, Bulacan, Bulacan'},
    {code:'A2015rW842',addr:'Pinalogdan, Paombong, Bulacan'},
    {code:'A2015rW848',addr:'Pinagbakahan, City of Malolos (Capital), Bulacan'},
    {code:'A2015rW887',addr:'Kapitangan, Paombong, Bulacan'},
    {code:'A2015rX014',addr:'San Miguel, Calumpit, Bulacan'},
    {code:'A2015rX028',addr:'Look 2nd, City of Malolos (Capital), Bulacan'},
    {code:'A2015rX041',addr:'Mojon, City of Malolos (Capital), Bulacan'},
    {code:'A2015rX122',addr:'Matimbo, City of Malolos (Capital), Bulacan'},
    {code:'A2015rX273',addr:'Mabolo, City of Malolos (Capital), Bulacan'},
    {code:'A2015rX311',addr:'Anilao, City of Malolos (Capital), Bulacan'},
    {code:'A2015rX405',addr:'Babatnin, City of Malolos (Capital), Bulacan'},
    {code:'A2015rX518',addr:'Balite, City of Malolos (Capital), Bulacan'},
    {code:'A2015rX620',addr:'Bulacnin, City of Malolos (Capital), Bulacan'},
  ],
  lookups:[
    {word:'—',order:1,code:''},{word:'_',order:2,code:''},{word:'1',order:3,code:''},
    {word:'A',order:4,code:''},{word:'A.',order:5,code:''},{word:'Aaron',order:6,code:''},
    {word:'ABADAM',order:7,code:''},{word:'Abadecio',order:8,code:''},{word:'Abalgar',order:9,code:''},
    {word:'Aballe',order:10,code:''},{word:'Abalos',order:11,code:''},{word:'Abaloyan',order:12,code:''},
    {word:'Abanog',order:13,code:''},{word:'Abaño',order:14,code:''},{word:'Abdula',order:15,code:''},
    {word:'Abejera',order:16,code:''},{word:'Abejo',order:17,code:''},{word:'Abelardo',order:18,code:''},
    {word:'Abella',order:19,code:''},{word:'Abellera',order:20,code:''},{word:'Aberte',order:21,code:''},
    {word:'Abiday',order:22,code:''},{word:'Abillon',order:23,code:''},{word:'Abino',order:24,code:''},
    {word:'Abique',order:25,code:''},{word:'Abisamis',order:26,code:''},{word:'Ablang',order:27,code:''},
    {word:'Ablaza',order:28,code:''},{word:'Abner',order:29,code:''},{word:'Abolencia',order:30,code:''},
  ]
};

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
  const name=`${gv('ai-fname')} ${gv('ai-mname')?gv('ai-mname')+' ':''} ${gv('ai-lname')}`.replace(/\s+/g,' ').trim();
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
