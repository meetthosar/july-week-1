// Automatically generated with Reach 0.1.10 (c934aa69)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c934aa69)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const map0_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc2],
      2: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc2],
      3: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc0, ctc2],
      5: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Bank(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bank expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bank expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc2, ctc3, ctc2, ctc3, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v250, v251, v252, v253, v254], secs: v256, time: v255, didSend: v52, from: v249 } = txn1;
  const v257 = stdlib.tokenEq(v250, v252);
  const v258 = v257 ? false : true;
  stdlib.assert(v258, {
    at: './index.rsh:26:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Bank'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v275, time: v274, didSend: v59, from: v273 } = txn2;
  ;
  ;
  const v285 = stdlib.addressEq(v249, v273);
  stdlib.assert(v285, {
    at: './index.rsh:30:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bank'
    });
  const v288 = stdlib.protect(ctc4, await interact.acceptSwap(v250, v251, v252, v253), {
    at: './index.rsh:34:52:application',
    fs: ['at ./index.rsh:33:12:application call to [unknown function] (defined at: ./index.rsh:33:16:function exp)'],
    msg: 'acceptSwap',
    who: 'Bank'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v249, v250, v251, v252, v253, v254, v288],
    evt_cnt: 1,
    funcNum: 2,
    lct: v274,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v292], secs: v294, time: v293, didSend: v71, from: v291 } = txn3;
      
      ;
      await stdlib.simMapSet(sim_r, 0, v291, null);
      const v302 = stdlib.add(v293, v254);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc3, ctc2, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v292], secs: v294, time: v293, didSend: v71, from: v291 } = txn3;
  ;
  await stdlib.mapSet(map0, v291, null);
  const v302 = stdlib.add(v293, v254);
  const txn4 = await (ctc.sendrecv({
    args: [v249, v250, v251, v252, v253, v291, v302],
    evt_cnt: 0,
    funcNum: 3,
    lct: v293,
    onlyIf: v292,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:8:dot', stdlib.UInt_max, '0'), [[v253, v252]]],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v306, time: v305, didSend: v80, from: v304 } = txn4;
      
      ;
      sim_r.txns.push({
        amt: v253,
        kind: 'to',
        tok: v252
        });
      const v316 = stdlib.addressEq(v291, v304);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v302],
    tys: [ctc5, ctc2, ctc3, ctc2, ctc3, ctc5, ctc3],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v395, time: v394, didSend: v137, from: v393 } = txn5;
    ;
    const v396 = stdlib.addressEq(v249, v393);
    stdlib.assert(v396, {
      at: './index.rsh:47:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bank'
      });
    ;
    return;
    
    }
  else {
    const {data: [], secs: v306, time: v305, didSend: v80, from: v304 } = txn4;
    ;
    ;
    const v316 = stdlib.addressEq(v291, v304);
    stdlib.assert(v316, {
      at: './index.rsh:44:8:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bank'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v321], secs: v323, time: v322, didSend: v90, from: v320 } = txn5;
    ;
    const v324 = stdlib.addressEq(v249, v320);
    stdlib.assert(v324, {
      at: './index.rsh:60:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bank'
      });
    const v325 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v321), null);
    let v326;
    switch (v325[0]) {
      case 'None': {
        const v327 = v325[1];
        v326 = false;
        
        break;
        }
      case 'Some': {
        const v328 = v325[1];
        v326 = true;
        
        break;
        }
      }
    if (v326) {
      ;
      ;
      return;
      }
    else {
      ;
      ;
      return;
      }
    
    }
  
  
  
  
  
  
  
  };
export async function Landlord(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Landlord expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Landlord expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3, ctc2, ctc3, ctc3]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v232 = stdlib.protect(ctc4, await interact.proposeSwap(), {
    at: './index.rsh:20:94:application',
    fs: ['at ./index.rsh:19:16:application call to [unknown function] (defined at: ./index.rsh:19:20:function exp)'],
    msg: 'proposeSwap',
    who: 'Landlord'
    });
  const v233 = v232[stdlib.checkedBigNumberify('./index.rsh:20:94:application', stdlib.UInt_max, '0')];
  const v234 = v232[stdlib.checkedBigNumberify('./index.rsh:20:94:application', stdlib.UInt_max, '1')];
  const v235 = v232[stdlib.checkedBigNumberify('./index.rsh:20:94:application', stdlib.UInt_max, '2')];
  const v236 = v232[stdlib.checkedBigNumberify('./index.rsh:20:94:application', stdlib.UInt_max, '3')];
  const v237 = v232[stdlib.checkedBigNumberify('./index.rsh:20:94:application', stdlib.UInt_max, '4')];
  const v243 = stdlib.tokenEq(v233, v235);
  const v244 = v243 ? false : true;
  stdlib.assert(v244, {
    at: './index.rsh:21:11:application',
    fs: ['at ./index.rsh:19:16:application call to [unknown function] (defined at: ./index.rsh:19:20:function exp)'],
    msg: null,
    who: 'Landlord'
    });
  const v245 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:22:22:decimal', stdlib.UInt_max, '0'));
  const v246 = v245 ? false : true;
  stdlib.assert(v246, {
    at: './index.rsh:22:10:application',
    fs: ['at ./index.rsh:19:16:application call to [unknown function] (defined at: ./index.rsh:19:20:function exp)'],
    msg: null,
    who: 'Landlord'
    });
  const v247 = stdlib.eq(v236, stdlib.checkedBigNumberify('./index.rsh:23:23:decimal', stdlib.UInt_max, '0'));
  const v248 = v247 ? false : true;
  stdlib.assert(v248, {
    at: './index.rsh:23:10:application',
    fs: ['at ./index.rsh:19:16:application call to [unknown function] (defined at: ./index.rsh:19:20:function exp)'],
    msg: null,
    who: 'Landlord'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v233, v234, v235, v236, v237],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc3, ctc2, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v250, v251, v252, v253, v254], secs: v256, time: v255, didSend: v52, from: v249 } = txn1;
      
      const v257 = stdlib.tokenEq(v250, v252);
      const v258 = v257 ? false : true;
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v250
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v252
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc2, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v250, v251, v252, v253, v254], secs: v256, time: v255, didSend: v52, from: v249 } = txn1;
  const v257 = stdlib.tokenEq(v250, v252);
  const v258 = v257 ? false : true;
  stdlib.assert(v258, {
    at: './index.rsh:26:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Landlord'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v249, v250, v251, v252, v253, v254],
    evt_cnt: 0,
    funcNum: 1,
    lct: v255,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:12:dot', stdlib.UInt_max, '0'), [[v251, v250]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v275, time: v274, didSend: v59, from: v273 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v251,
        kind: 'to',
        tok: v250
        });
      const v285 = stdlib.addressEq(v249, v273);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc2, ctc3, ctc2, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v275, time: v274, didSend: v59, from: v273 } = txn2;
  ;
  ;
  const v285 = stdlib.addressEq(v249, v273);
  stdlib.assert(v285, {
    at: './index.rsh:30:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Landlord'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v292], secs: v294, time: v293, didSend: v71, from: v291 } = txn3;
  ;
  await stdlib.mapSet(map0, v291, null);
  const v302 = stdlib.add(v293, v254);
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: ['time', v302],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.sendrecv({
      args: [v249, v250, v251, v252, v253, v291, v302],
      evt_cnt: 0,
      funcNum: 4,
      lct: v293,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:47:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [], secs: v395, time: v394, didSend: v137, from: v393 } = txn5;
        
        ;
        const v396 = stdlib.addressEq(v249, v393);
        ;
        sim_r.txns.push({
          amt: v251,
          kind: 'from',
          to: v249,
          tok: v250
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v252
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v250
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc2, ctc3, ctc2, ctc3, ctc6, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v395, time: v394, didSend: v137, from: v393 } = txn5;
    ;
    const v396 = stdlib.addressEq(v249, v393);
    stdlib.assert(v396, {
      at: './index.rsh:47:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Landlord'
      });
    ;
    return;
    
    }
  else {
    const {data: [], secs: v306, time: v305, didSend: v80, from: v304 } = txn4;
    ;
    ;
    const v316 = stdlib.addressEq(v291, v304);
    stdlib.assert(v316, {
      at: './index.rsh:44:8:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Landlord'
      });
    const v319 = stdlib.protect(ctc6, await interact.nameTheBank(), {
      at: './index.rsh:57:56:application',
      fs: ['at ./index.rsh:56:16:application call to [unknown function] (defined at: ./index.rsh:56:20:function exp)'],
      msg: 'nameTheBank',
      who: 'Landlord'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v249, v250, v251, v252, v253, v291, v319],
      evt_cnt: 1,
      funcNum: 5,
      lct: v305,
      onlyIf: true,
      out_tys: [ctc6],
      pay: [stdlib.checkedBigNumberify('./index.rsh:60:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v321], secs: v323, time: v322, didSend: v90, from: v320 } = txn5;
        
        ;
        const v324 = stdlib.addressEq(v249, v320);
        ;
        const v325 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v321), null);
        let v326;
        switch (v325[0]) {
          case 'None': {
            const v327 = v325[1];
            v326 = false;
            
            break;
            }
          case 'Some': {
            const v328 = v325[1];
            v326 = true;
            
            break;
            }
          }
        if (v326) {
          sim_r.txns.push({
            amt: v253,
            kind: 'from',
            to: v249,
            tok: v252
            });
          sim_r.txns.push({
            amt: v251,
            kind: 'from',
            to: v291,
            tok: v250
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v252
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v250
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            amt: v251,
            kind: 'from',
            to: v249,
            tok: v250
            });
          sim_r.txns.push({
            amt: v253,
            kind: 'from',
            to: v291,
            tok: v252
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v252
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v250
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc2, ctc3, ctc2, ctc3, ctc6, ctc6],
      waitIfNotPresent: false
      }));
    const {data: [v321], secs: v323, time: v322, didSend: v90, from: v320 } = txn5;
    ;
    const v324 = stdlib.addressEq(v249, v320);
    stdlib.assert(v324, {
      at: './index.rsh:60:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Landlord'
      });
    const v325 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v321), null);
    let v326;
    switch (v325[0]) {
      case 'None': {
        const v327 = v325[1];
        v326 = false;
        
        break;
        }
      case 'Some': {
        const v328 = v325[1];
        v326 = true;
        
        break;
        }
      }
    if (v326) {
      ;
      ;
      return;
      }
    else {
      ;
      ;
      return;
      }
    
    }
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAQBIAUoMAM4AqCNBghgQCYCAQAAIjUAMRhBBGcpZEkiWzUBIQtbNQIxGSQSQQAIMQAoKGZCBDU2GgAXSUEAByI1BCQ1BgA2GgIXNQQ2GgM2GgEXSSEHDEACKkkjDEABqEkhBAxAAR8hBBJEIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JVs1/iEFWzX9IQZbNfwhCFs1+1dAIDX6STUFNfmABJFYyAo0+VCwNP8xABJENPmIA9FJNfciVUAABiI1+EIABiQ1+EIAADT4QQBZsSKyATT7shIjshA0/7IUNPyyEbOxIrIBNP2yEiOyEDT6shQ0/rIRs7EisgEishIjshAyCbIVMgqyFDT8shGzsSKyASKyEiOyEDIJshUyCrIUNP6yEbNCAwaxIrIBNP2yEiOyEDT/shQ0/rIRs7EisgE0+7ISI7IQNPqyFDT8shGzsSKyASKyEiOyEDIJshUyCrIUNPyyEbOxIrIBIrISI7IQMgmyFTIKshQ0/rIRs0ICrUghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEkSc087AyBjQDIQxbD0Q0/zEAEkSxIrIBNAMhBVuyEiOyEDT/shQ0/rIRs7EisgEishIjshAyCbIVMgqyFDQDIQZbshGzsSKyASKyEiOyEDIJshUyCrIUNP6yEbNCAitIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JVs1/iEFWzX9IQZbNfwhCFs1+1dAIDX6gASnZcS0sDIGNAMhDFsMRDT7NPyIAls0+jEAEkQ0/zT+FlA0/RZQNPwWUDT7FlA0+lAoSwFXAGBnSCEENQEyBjUCQgHLSSQMQAD9SSEJDEAAg0ghCTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQVbNf0hBls1/CEIWzX7STUFFzX6gARqEToINPoWUQcIULAxACiAAQFmMgY0AyENWwg1+TT/NP4WUDT9FlA0/BZQNPsWUDEAUDT5FlAoSwFXAGhnSCEHNQEyBjUCQgE7SCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JVs1/iEFWzX9IQZbNfwhCFs1+yENWzX6gASai5F0sDT9NP6IAVk0/zEAEkQ0/zT+FlA0/RZQNPwWUDT7FlA0+hZQKEsBVwBIZ0ghCTUBMgY1AkIAyEgiNAESRDQESSISTDQCEhFESTUFSUpJIls1/yELWzX+gRBbNf2BGFs1/CVbNfuABE1+Byc0/xZQNP4WUDT9FlA0/BZQNPsWULAhCogAxDT/NP0TRCEKiAC5sSKyASKyEiOyEDIKshQ0/7IRsyEKiAChsSKyASKyEiOyEDIKshQ0/bIRszEANP8WUDT+FlA0/RZQNPwWUDT7FlAoSwFXAEhnSCQ1ATIGNQJCABwxGSEEEkSxIrIBIrIIJLIQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkkCDIEEkQxFhJEJEMxGSISREL/3yI1ASI1AkL/w0kxGGFAAANIKIkoYok0AElKJAg1ADgHMgoSRDgQJBJEOAgSRIk0AElKSSQINQA4FDIKEkQ4ECMSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 104,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v250",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v251",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v252",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v253",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v250",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v251",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v252",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v253",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v292",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v321",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v292",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v321",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620018a8380380620018a8833981016040819052620000269162000310565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b039081168486015291810151606080850191909152818501519092166080808501919091529181015160a0840152015160c082015290517f131e9e7268765eedc6c73354bf31f60bd5d8d00b2dd80d93757e1786bb09c60b9181900360e00190a1602081015160408101519051620000e5916001600160a01b03918216911614620000da576001620000dd565b60005b6007620001ec565b620000f334156008620001ec565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091523380825260208381018051516001600160a01b0390811683860190815282518401516040808801918252845181015184166060808a0191825286518101516080808c01918252975188015160a0808d019182526001600081905543905585519a8b019b909b5295518716938901939093529251928701929092529051909216928401929092525192820192909252905160c082015260e00160405160208183030381529060405260029080519060200190620001e392919062000216565b50505062000408565b81620002125760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200022490620003cb565b90600052602060002090601f01602090048101928262000248576000855562000293565b82601f106200026357805160ff191683800117855562000293565b8280016001018555821562000293579182015b828111156200029357825182559160200191906001019062000276565b50620002a1929150620002a5565b5090565b5b80821115620002a15760008155600101620002a6565b60405160a081016001600160401b0381118282101715620002ed57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200030b57600080fd5b919050565b600081830360c08112156200032457600080fd5b604080519081016001600160401b03811182821017156200035557634e487b7160e01b600052604160045260246000fd5b6040528351815260a0601f19830112156200036f57600080fd5b62000379620002bc565b91506200038960208501620002f3565b825260408401516020830152620003a360608501620002f3565b6040830152608084810151606084015260a09094015193820193909352602083015250919050565b600181811c90821680620003e057607f821691505b602082108114156200040257634e487b7160e01b600052602260045260246000fd5b50919050565b61149080620004186000396000f3fe6080604052600436106100845760003560e01c806373b4522c1161005657806373b4522c146101045780638323075714610117578063a7661d541461012c578063ab53f2c61461013f578063e268f1e61461016257005b80631e93b0f11461008d5780632c10a159146100b15780633bc5b7bf146100c45780633e59bac4146100f157005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf36600461105b565b610175565b3480156100d057600080fd5b506100e46100df36600461108c565b610394565b6040516100a891906110bf565b61008b6100ff36600461105b565b6103c0565b61008b61011236600461105b565b61061e565b34801561012357600080fd5b5060015461009e565b61008b61013a36600461105b565b61082a565b34801561014b57600080fd5b50610154610999565b6040516100a8929190611132565b61008b61017036600461105b565b610a36565b610185600160005414600c610c5d565b61019f8135158061019857506001548235145b600d610c5d565b6000808055600280546101b19061116c565b80601f01602080910402602001604051908101604052809291908181526020018280546101dd9061116c565b801561022a5780601f106101ff5761010080835404028352916020019161022a565b820191906000526020600020905b81548152906001019060200180831161020d57829003601f168201915b505050505080602001905181019061024291906111d8565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161027592919061125a565b60405180910390a161028934156009610c5d565b6102a661029f3383602001518460400151610c83565b600a610c5d565b80516102be906001600160a01b03163314600b610c5d565b6040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d516001600160a01b03908116808e528f8b015182168a528f8f015189528f880151821687528f86015185528f84015183526002909b55436001558d51998a019a909a52965189169b88019b909b52935192860192909252519094169383019390935291519481019490945251908301529060e0015b6040516020818303038152906040526002908051906020019061038e929190610f6d565b50505050565b60408051606081018252600080825260208201819052918101919091526103ba82610c9b565b92915050565b6103d0600260005414600f610c5d565b6103ea813515806103e357506001548235145b6010610c5d565b6000808055600280546103fc9061116c565b80601f01602080910402602001604051908101604052809291908181526020018280546104289061116c565b80156104755780601f1061044a57610100808354040283529160200191610475565b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b505050505080602001905181019061048d91906111d8565b90506104a56040518060200160405280600081525090565b7fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd33846040516104d692919061125a565b60405180910390a16104ea3415600e610c5d565b336000908152600460205260409020805462ff00ff1916600117905560a08201516105159043611292565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015183168185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081523360a0808d019182528d5160c0808f0191825260036000554360015589519b8c019c909c5298518c16978a0197909752945193880193909352905188169086015251918401919091525190931691810191909152905160e08201526101000160405160208183030381529060405260029080519060200190610617929190610f6d565b5050505050565b61062e6003600054146014610c5d565b6106488135158061064157506001548235145b6015610c5d565b60008080556002805461065a9061116c565b80601f01602080910402602001604051908101604052809291908181526020018280546106869061116c565b80156106d35780601f106106a8576101008083540402835291602001916106d3565b820191906000526020600020905b8154815290600101906020018083116106b657829003601f168201915b50505050508060200190518101906106eb91906112b8565b90506106fe8160c0015143106016610c5d565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c6338360405161072f92919061125a565b60405180910390a161074334156011610c5d565b6107606107593383606001518460800151610c83565b6012610c5d565b60a081015161077b906001600160a01b031633146013610c5d565b6040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d516001600160a01b03908116808e528f8b015182168a528f8f015189528f880151821687528f86015185528f840151821683526005909b55436001558d51998a019a909a52965189169b88019b909b52935192860192909252518516908401525195820195909552935116908301529060e00161036a565b61083a6003600054146019610c5d565b6108548135158061084d57506001548235145b601a610c5d565b6000808055600280546108669061116c565b80601f01602080910402602001604051908101604052809291908181526020018280546108929061116c565b80156108df5780601f106108b4576101008083540402835291602001916108df565b820191906000526020600020905b8154815290600101906020018083116108c257829003601f168201915b50505050508060200190518101906108f791906112b8565b905061090b8160c00151431015601b610c5d565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722338360405161093c92919061125a565b60405180910390a161095034156017610c5d565b8051610968906001600160a01b031633146018610c5d565b61097f816020015182600001518360400151610d73565b6000808055600181905561099590600290610ff1565b5050565b6000606060005460028080546109ae9061116c565b80601f01602080910402602001604051908101604052809291908181526020018280546109da9061116c565b8015610a275780601f106109fc57610100808354040283529160200191610a27565b820191906000526020600020905b815481529060010190602001808311610a0a57829003601f168201915b50505050509050915091509091565b610a46600560005414601e610c5d565b610a6081351580610a5957506001548235145b601f610c5d565b600080805560028054610a729061116c565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9e9061116c565b8015610aeb5780601f10610ac057610100808354040283529160200191610aeb565b820191906000526020600020905b815481529060010190602001808311610ace57829003601f168201915b5050505050806020019051810190610b03919061136b565b6040805160208101909152600081529091507fd9d317f50580320260589621a22264dca6ea15fe8bf7bf7ac2b9f0642902ba523384604051610b469291906113e6565b60405180910390a1610b5a3415601c610c5d565b8151610b72906001600160a01b03163314601d610c5d565b6000610b8c610b87604086016020870161108c565b610c9b565b516001811115610b9e57610b9e6110a9565b1415610bad5760008152610bdf565b6001610bc2610b87604086016020870161108c565b516001811115610bd457610bd46110a9565b1415610bdf57600181525b805115610c2f57610bfd826060015183600001518460800151610d73565b610c1482602001518360a001518460400151610d73565b60008080556001819055610c2a90600290610ff1565b505050565b610c46826020015183600001518460400151610d73565b610c1482606001518360a001518460800151610d73565b816109955760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610c9183853085610d87565b90505b9392505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610ce757610ce76110a9565b1415610d64576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610d2857610d286110a9565b6001811115610d3957610d396110a9565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610d7e838383610e61565b610c2a57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610dee91611421565b60006040518083038185875af1925050503d8060008114610e2b576040519150601f19603f3d011682016040523d82523d6000602084013e610e30565b606091505b5091509150610e4182826001610f32565b5080806020019051810190610e56919061143d565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610ec091611421565b60006040518083038185875af1925050503d8060008114610efd576040519150601f19603f3d011682016040523d82523d6000602084013e610f02565b606091505b5091509150610f1382826002610f32565b5080806020019051810190610f28919061143d565b9695505050505050565b60608315610f41575081610c94565b825115610f515782518084602001fd5b60405163100960cb60e01b815260048101839052602401610c7a565b828054610f799061116c565b90600052602060002090601f016020900481019282610f9b5760008555610fe1565b82601f10610fb457805160ff1916838001178555610fe1565b82800160010185558215610fe1579182015b82811115610fe1578251825591602001919060010190610fc6565b50610fed92915061102e565b5090565b508054610ffd9061116c565b6000825580601f1061100d575050565b601f01602090049060005260206000209081019061102b919061102e565b50565b5b80821115610fed576000815560010161102f565b60006040828403121561105557600080fd5b50919050565b60006040828403121561106d57600080fd5b610c948383611043565b6001600160a01b038116811461102b57600080fd5b60006020828403121561109e57600080fd5b8135610c9481611077565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106110e457634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60005b83811015611121578181015183820152602001611109565b8381111561038e5750506000910152565b8281526040602082015260008251806040840152611157816060850160208701611106565b601f01601f1916919091016060019392505050565b600181811c9082168061118057607f821691505b6020821081141561105557634e487b7160e01b600052602260045260246000fd5b60405160c0810167ffffffffffffffff811182821017156111d257634e487b7160e01b600052604160045260246000fd5b60405290565b600060c082840312156111ea57600080fd5b6111f26111a1565b82516111fd81611077565b8152602083015161120d81611077565b602082015260408381015190820152606083015161122a81611077565b60608201526080838101519082015260a0928301519281019290925250919050565b801515811461102b57600080fd5b6001600160a01b0383168152813560208083019190915260608201908301356112828161124c565b8015156040840152509392505050565b600082198211156112b357634e487b7160e01b600052601160045260246000fd5b500190565b600060e082840312156112ca57600080fd5b60405160e0810181811067ffffffffffffffff821117156112fb57634e487b7160e01b600052604160045260246000fd5b604052825161130981611077565b8152602083015161131981611077565b602082015260408381015190820152606083015161133681611077565b60608201526080838101519082015260a083015161135381611077565b60a082015260c0928301519281019290925250919050565b600060c0828403121561137d57600080fd5b6113856111a1565b825161139081611077565b815260208301516113a081611077565b60208201526040838101519082015260608301516113bd81611077565b60608201526080838101519082015260a08301516113da81611077565b60a08201529392505050565b6001600160a01b038381168252823560208084019190915260608301919084013561141081611077565b818116604085015250509392505050565b60008251611433818460208701611106565b9190910192915050565b60006020828403121561144f57600080fd5b8151610c948161124c56fea264697066735822122044b4762ef6b18a1838b43e0986f1ca33c15c847f9126237ae35ae39149874f8564736f6c634300080c0033`,
  BytecodeLen: 6312,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:31:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:42:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:50:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:54:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:69:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:69:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bank": Bank,
  "Landlord": Landlord
  };
export const _APIs = {
  };
