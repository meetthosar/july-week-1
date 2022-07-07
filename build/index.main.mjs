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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc2],
      2: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc2],
      3: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc0, ctc3, ctc2],
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
  const {data: [v268, v269, v270, v271, v272], secs: v274, time: v273, didSend: v52, from: v267 } = txn1;
  const v275 = stdlib.tokenEq(v268, v270);
  const v276 = v275 ? false : true;
  stdlib.assert(v276, {
    at: './index.rsh:27:12:dot',
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
  const {data: [], secs: v293, time: v292, didSend: v59, from: v291 } = txn2;
  ;
  ;
  const v303 = stdlib.addressEq(v267, v291);
  stdlib.assert(v303, {
    at: './index.rsh:31:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bank'
    });
  const v306 = stdlib.protect(ctc4, await interact.acceptSwap(v268, v269, v270, v271), {
    at: './index.rsh:35:52:application',
    fs: ['at ./index.rsh:34:12:application call to [unknown function] (defined at: ./index.rsh:34:16:function exp)'],
    msg: 'acceptSwap',
    who: 'Bank'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v267, v268, v269, v270, v271, v272, v306],
    evt_cnt: 1,
    funcNum: 2,
    lct: v292,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v310], secs: v312, time: v311, didSend: v71, from: v309 } = txn3;
      
      ;
      await stdlib.simMapSet(sim_r, 0, v309, null);
      const v320 = stdlib.add(v311, v272);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc3, ctc2, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v310], secs: v312, time: v311, didSend: v71, from: v309 } = txn3;
  ;
  await stdlib.mapSet(map0, v309, null);
  const v320 = stdlib.add(v311, v272);
  if (v310) {
    stdlib.protect(ctc0, await interact.seeNotification(true), {
      at: './index.rsh:46:58:application',
      fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)'],
      msg: 'seeNotification',
      who: 'Bank'
      });
    
    }
  else {
    }
  const txn4 = await (ctc.sendrecv({
    args: [v267, v268, v269, v270, v271, v309, v310, v320],
    evt_cnt: 0,
    funcNum: 3,
    lct: v311,
    onlyIf: v310,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:8:dot', stdlib.UInt_max, '0'), [[v271, v270]]],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v326, time: v325, didSend: v86, from: v324 } = txn4;
      
      ;
      sim_r.txns.push({
        amt: v271,
        kind: 'to',
        tok: v270
        });
      const v336 = stdlib.addressEq(v309, v324);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v320],
    tys: [ctc5, ctc2, ctc3, ctc2, ctc3, ctc5, ctc4, ctc3],
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
    const {data: [], secs: v419, time: v418, didSend: v155, from: v417 } = txn5;
    ;
    const v420 = stdlib.addressEq(v267, v417);
    stdlib.assert(v420, {
      at: './index.rsh:51:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bank'
      });
    ;
    return;
    
    }
  else {
    const {data: [], secs: v326, time: v325, didSend: v86, from: v324 } = txn4;
    ;
    ;
    const v336 = stdlib.addressEq(v309, v324);
    stdlib.assert(v336, {
      at: './index.rsh:48:8:dot',
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
    const {data: [v341], secs: v343, time: v342, didSend: v96, from: v340 } = txn5;
    ;
    const v344 = stdlib.addressEq(v267, v340);
    stdlib.assert(v344, {
      at: './index.rsh:64:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bank'
      });
    const v345 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v341), null);
    let v346;
    switch (v345[0]) {
      case 'None': {
        const v347 = v345[1];
        v346 = false;
        
        break;
        }
      case 'Some': {
        const v348 = v345[1];
        v346 = true;
        
        break;
        }
      }
    if (v346) {
      stdlib.protect(ctc0, await interact.attacherMatched(true), {
        at: './index.rsh:67:58:application',
        fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)'],
        msg: 'attacherMatched',
        who: 'Bank'
        });
      
      ;
      ;
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.attacherMatched(false), {
        at: './index.rsh:71:58:application',
        fs: ['at ./index.rsh:71:9:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
        msg: 'attacherMatched',
        who: 'Bank'
        });
      
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
  
  
  const v250 = stdlib.protect(ctc4, await interact.proposeSwap(), {
    at: './index.rsh:21:94:application',
    fs: ['at ./index.rsh:20:16:application call to [unknown function] (defined at: ./index.rsh:20:20:function exp)'],
    msg: 'proposeSwap',
    who: 'Landlord'
    });
  const v251 = v250[stdlib.checkedBigNumberify('./index.rsh:21:94:application', stdlib.UInt_max, '0')];
  const v252 = v250[stdlib.checkedBigNumberify('./index.rsh:21:94:application', stdlib.UInt_max, '1')];
  const v253 = v250[stdlib.checkedBigNumberify('./index.rsh:21:94:application', stdlib.UInt_max, '2')];
  const v254 = v250[stdlib.checkedBigNumberify('./index.rsh:21:94:application', stdlib.UInt_max, '3')];
  const v255 = v250[stdlib.checkedBigNumberify('./index.rsh:21:94:application', stdlib.UInt_max, '4')];
  const v261 = stdlib.tokenEq(v251, v253);
  const v262 = v261 ? false : true;
  stdlib.assert(v262, {
    at: './index.rsh:22:11:application',
    fs: ['at ./index.rsh:20:16:application call to [unknown function] (defined at: ./index.rsh:20:20:function exp)'],
    msg: null,
    who: 'Landlord'
    });
  const v263 = stdlib.eq(v252, stdlib.checkedBigNumberify('./index.rsh:23:22:decimal', stdlib.UInt_max, '0'));
  const v264 = v263 ? false : true;
  stdlib.assert(v264, {
    at: './index.rsh:23:10:application',
    fs: ['at ./index.rsh:20:16:application call to [unknown function] (defined at: ./index.rsh:20:20:function exp)'],
    msg: null,
    who: 'Landlord'
    });
  const v265 = stdlib.eq(v254, stdlib.checkedBigNumberify('./index.rsh:24:23:decimal', stdlib.UInt_max, '0'));
  const v266 = v265 ? false : true;
  stdlib.assert(v266, {
    at: './index.rsh:24:10:application',
    fs: ['at ./index.rsh:20:16:application call to [unknown function] (defined at: ./index.rsh:20:20:function exp)'],
    msg: null,
    who: 'Landlord'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v251, v252, v253, v254, v255],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc3, ctc2, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v268, v269, v270, v271, v272], secs: v274, time: v273, didSend: v52, from: v267 } = txn1;
      
      const v275 = stdlib.tokenEq(v268, v270);
      const v276 = v275 ? false : true;
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v268
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v270
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
  const {data: [v268, v269, v270, v271, v272], secs: v274, time: v273, didSend: v52, from: v267 } = txn1;
  const v275 = stdlib.tokenEq(v268, v270);
  const v276 = v275 ? false : true;
  stdlib.assert(v276, {
    at: './index.rsh:27:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Landlord'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v267, v268, v269, v270, v271, v272],
    evt_cnt: 0,
    funcNum: 1,
    lct: v273,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:12:dot', stdlib.UInt_max, '0'), [[v269, v268]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v293, time: v292, didSend: v59, from: v291 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v269,
        kind: 'to',
        tok: v268
        });
      const v303 = stdlib.addressEq(v267, v291);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc2, ctc3, ctc2, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v293, time: v292, didSend: v59, from: v291 } = txn2;
  ;
  ;
  const v303 = stdlib.addressEq(v267, v291);
  stdlib.assert(v303, {
    at: './index.rsh:31:12:dot',
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
  const {data: [v310], secs: v312, time: v311, didSend: v71, from: v309 } = txn3;
  ;
  await stdlib.mapSet(map0, v309, null);
  const v320 = stdlib.add(v311, v272);
  if (v310) {
    stdlib.protect(ctc0, await interact.seeNotification(true), {
      at: './index.rsh:46:58:application',
      fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)'],
      msg: 'seeNotification',
      who: 'Landlord'
      });
    
    }
  else {
    }
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: ['time', v320],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.sendrecv({
      args: [v267, v268, v269, v270, v271, v309, v310, v320],
      evt_cnt: 0,
      funcNum: 4,
      lct: v311,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:51:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [], secs: v419, time: v418, didSend: v155, from: v417 } = txn5;
        
        ;
        const v420 = stdlib.addressEq(v267, v417);
        ;
        sim_r.txns.push({
          amt: v269,
          kind: 'from',
          to: v267,
          tok: v268
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v270
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v268
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
      tys: [ctc6, ctc2, ctc3, ctc2, ctc3, ctc6, ctc5, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v419, time: v418, didSend: v155, from: v417 } = txn5;
    ;
    const v420 = stdlib.addressEq(v267, v417);
    stdlib.assert(v420, {
      at: './index.rsh:51:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Landlord'
      });
    ;
    return;
    
    }
  else {
    const {data: [], secs: v326, time: v325, didSend: v86, from: v324 } = txn4;
    ;
    ;
    const v336 = stdlib.addressEq(v309, v324);
    stdlib.assert(v336, {
      at: './index.rsh:48:8:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Landlord'
      });
    const v339 = stdlib.protect(ctc6, await interact.nameTheBank(), {
      at: './index.rsh:61:56:application',
      fs: ['at ./index.rsh:60:16:application call to [unknown function] (defined at: ./index.rsh:60:20:function exp)'],
      msg: 'nameTheBank',
      who: 'Landlord'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v267, v268, v269, v270, v271, v309, v339],
      evt_cnt: 1,
      funcNum: 5,
      lct: v325,
      onlyIf: true,
      out_tys: [ctc6],
      pay: [stdlib.checkedBigNumberify('./index.rsh:64:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v341], secs: v343, time: v342, didSend: v96, from: v340 } = txn5;
        
        ;
        const v344 = stdlib.addressEq(v267, v340);
        ;
        const v345 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v341), null);
        let v346;
        switch (v345[0]) {
          case 'None': {
            const v347 = v345[1];
            v346 = false;
            
            break;
            }
          case 'Some': {
            const v348 = v345[1];
            v346 = true;
            
            break;
            }
          }
        if (v346) {
          
          sim_r.txns.push({
            amt: v271,
            kind: 'from',
            to: v267,
            tok: v270
            });
          sim_r.txns.push({
            amt: v269,
            kind: 'from',
            to: v309,
            tok: v268
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v270
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v268
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          
          sim_r.txns.push({
            amt: v269,
            kind: 'from',
            to: v267,
            tok: v268
            });
          sim_r.txns.push({
            amt: v271,
            kind: 'from',
            to: v309,
            tok: v270
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v270
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v268
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
    const {data: [v341], secs: v343, time: v342, didSend: v96, from: v340 } = txn5;
    ;
    const v344 = stdlib.addressEq(v267, v340);
    stdlib.assert(v344, {
      at: './index.rsh:64:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Landlord'
      });
    const v345 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v341), null);
    let v346;
    switch (v345[0]) {
      case 'None': {
        const v347 = v345[1];
        v346 = false;
        
        break;
        }
      case 'Some': {
        const v348 = v345[1];
        v346 = true;
        
        break;
        }
      }
    if (v346) {
      stdlib.protect(ctc0, await interact.attacherMatched(true), {
        at: './index.rsh:67:58:application',
        fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:31:function exp)'],
        msg: 'attacherMatched',
        who: 'Landlord'
        });
      
      ;
      ;
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.attacherMatched(false), {
        at: './index.rsh:71:58:application',
        fs: ['at ./index.rsh:71:9:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
        msg: 'attacherMatched',
        who: 'Landlord'
        });
      
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
  appApproval: `BiAOAAQBIAUoMAM4AqCNBghhQCYCAQAAIjUAMRhBBG4pZEkiWzUBIQtbNQIxGSQSQQAIMQAoKGZCBDw2GgAXSUEAByI1BCQ1BgA2GgIXNQQ2GgM2GgEXSSEHDEACKkkjDEABqEkhBAxAAR8hBBJEIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JVs1/iEFWzX9IQZbNfwhCFs1+1dAIDX6STUFNfmABJFYyAo0+VCwNP8xABJENPmIA9hJNfciVUAABiI1+EIABiQ1+EIAADT4QQBZsSKyATT7shIjshA0/7IUNPyyEbOxIrIBNP2yEiOyEDT6shQ0/rIRs7EisgEishIjshAyCbIVMgqyFDT8shGzsSKyASKyEiOyEDIJshUyCrIUNP6yEbNCAw2xIrIBNP2yEiOyEDT/shQ0/rIRs7EisgE0+7ISI7IQNPqyFDT8shGzsSKyASKyEiOyEDIJshUyCrIUNPyyEbOxIrIBIrISI7IQMgmyFTIKshQ0/rIRs0ICtEghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEkSc087AyBjQDIQxbD0Q0/zEAEkSxIrIBNAMhBVuyEiOyEDT/shQ0/rIRs7EisgEishIjshAyCbIVMgqyFDQDIQZbshGzsSKyASKyEiOyEDIJshUyCrIUNP6yEbNCAjJIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JVs1/iEFWzX9IQZbNfwhCFs1+1dAIDX6gASnZcS0sDIGNAMhDFsMRDT7NPyIAmI0+jEAEkQ0/zT+FlA0/RZQNPwWUDT7FlA0+lAoSwFXAGBnSCEENQEyBjUCQgHSSSQMQAEESSEJDEAAikghCTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQVbNf0hBls1/CEIWzX7STUFFzX6gARqEToINPoWUQcIULAxACiAAQFmMgY0AyENWwg1+TT/NP4WUDT9FlA0/BZQNPsWUDEAUDT6FlEHCFA0+RZQKEsBVwBpZ0ghBzUBMgY1AkIBO0gkNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yVbNf4hBVs1/SEGWzX8IQhbNfshDVs1+oAEmouRdLA0/TT+iAFZNP8xABJENP80/hZQNP0WUDT8FlA0+xZQNPoWUChLAVcASGdIIQk1ATIGNQJCAMhIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSSJbNf8hC1s1/oEQWzX9gRhbNfwlWzX7gARNfgcnNP8WUDT+FlA0/RZQNPwWUDT7FlCwIQqIAMQ0/zT9E0QhCogAubEisgEishIjshAyCrIUNP+yEbMhCogAobEisgEishIjshAyCrIUNP2yEbMxADT/FlA0/hZQNP0WUDT8FlA0+xZQKEsBVwBIZ0gkNQEyBjUCQgAcMRkhBBJEsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJJAgyBBJEMRYSRCRDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAADSCiJKGKJNABJSiQINQA4BzIKEkQ4ECQSRDgIEkSJNABJSkkkCDUAOBQyChJEOBAjEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 105,
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
                "name": "v268",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v269",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v270",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v271",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v272",
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
                "name": "v268",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v269",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v270",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v271",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v272",
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
                "name": "v310",
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
                "name": "v341",
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
                "name": "v310",
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
                "name": "v341",
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
  Bytecode: `0x60806040526040516200192938038062001929833981016040819052620000269162000310565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b039081168486015291810151606080850191909152818501519092166080808501919091529181015160a0840152015160c082015290517f131e9e7268765eedc6c73354bf31f60bd5d8d00b2dd80d93757e1786bb09c60b9181900360e00190a1602081015160408101519051620000e5916001600160a01b03918216911614620000da576001620000dd565b60005b6007620001ec565b620000f334156008620001ec565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091523380825260208381018051516001600160a01b0390811683860190815282518401516040808801918252845181015184166060808a0191825286518101516080808c01918252975188015160a0808d019182526001600081905543905585519a8b019b909b5295518716938901939093529251928701929092529051909216928401929092525192820192909252905160c082015260e00160405160208183030381529060405260029080519060200190620001e392919062000216565b50505062000408565b81620002125760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200022490620003cb565b90600052602060002090601f01602090048101928262000248576000855562000293565b82601f106200026357805160ff191683800117855562000293565b8280016001018555821562000293579182015b828111156200029357825182559160200191906001019062000276565b50620002a1929150620002a5565b5090565b5b80821115620002a15760008155600101620002a6565b60405160a081016001600160401b0381118282101715620002ed57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200030b57600080fd5b919050565b600081830360c08112156200032457600080fd5b604080519081016001600160401b03811182821017156200035557634e487b7160e01b600052604160045260246000fd5b6040528351815260a0601f19830112156200036f57600080fd5b62000379620002bc565b91506200038960208501620002f3565b825260408401516020830152620003a360608501620002f3565b6040830152608084810151606084015260a09094015193820193909352602083015250919050565b600181811c90821680620003e057607f821691505b602082108114156200040257634e487b7160e01b600052602260045260246000fd5b50919050565b61151180620004186000396000f3fe6080604052600436106100845760003560e01c806373b4522c1161005657806373b4522c146101045780638323075714610117578063a7661d541461012c578063ab53f2c61461013f578063e268f1e61461016257005b80631e93b0f11461008d5780632c10a159146100b15780633bc5b7bf146100c45780633e59bac4146100f157005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004611096565b610175565b3480156100d057600080fd5b506100e46100df3660046110c7565b610394565b6040516100a891906110fa565b61008b6100ff366004611096565b6103c0565b61008b610112366004611096565b610658565b34801561012357600080fd5b5060015461009e565b61008b61013a366004611096565b610864565b34801561014b57600080fd5b506101546109d3565b6040516100a892919061116d565b61008b610170366004611096565b610a70565b610185600160005414600c610c97565b61019f8135158061019857506001548235145b600d610c97565b6000808055600280546101b1906111a7565b80601f01602080910402602001604051908101604052809291908181526020018280546101dd906111a7565b801561022a5780601f106101ff5761010080835404028352916020019161022a565b820191906000526020600020905b81548152906001019060200180831161020d57829003601f168201915b5050505050806020019051810190610242919061121e565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102759291906112a0565b60405180910390a161028934156009610c97565b6102a661029f3383602001518460400151610cbd565b600a610c97565b80516102be906001600160a01b03163314600b610c97565b6040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d516001600160a01b03908116808e528f8b015182168a528f8f015189528f880151821687528f86015185528f84015183526002909b55436001558d51998a019a909a52965189169b88019b909b52935192860192909252519094169383019390935291519481019490945251908301529060e0015b6040516020818303038152906040526002908051906020019061038e929190610fa8565b50505050565b60408051606081018252600080825260208201819052918101919091526103ba82610cd5565b92915050565b6103d0600260005414600f610c97565b6103ea813515806103e357506001548235145b6010610c97565b6000808055600280546103fc906111a7565b80601f0160208091040260200160405190810160405280929190818152602001828054610428906111a7565b80156104755780601f1061044a57610100808354040283529160200191610475565b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b505050505080602001905181019061048d919061121e565b90506104a56040518060200160405280600081525090565b7fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd33846040516104d69291906112a0565b60405180910390a16104ea3415600e610c97565b336000908152600460205260409020805462ff00ff1916600117905560a082015161051590436112d8565b81526040805161010081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188815260c08a0189905260e08a01989098528b516001600160a01b039081168a528c88015181169096528b8a0151909452918a015190931690925290870151905233909152909161059f919086019086016112fe565b151560c0820152815160e082015260036000554360015560405161062d90829060200160006101008201905060018060a01b0380845116835280602085015116602084015260408401516040840152806060850151166060840152608084015160808401528060a08501511660a08401525060c0830151151560c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610651929190610fa8565b5050505050565b6106686003600054146014610c97565b6106828135158061067b57506001548235145b6015610c97565b600080805560028054610694906111a7565b80601f01602080910402602001604051908101604052809291908181526020018280546106c0906111a7565b801561070d5780601f106106e25761010080835404028352916020019161070d565b820191906000526020600020905b8154815290600101906020018083116106f057829003601f168201915b50505050508060200190518101906107259190611326565b90506107388160e0015143106016610c97565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516107699291906112a0565b60405180910390a161077d34156011610c97565b61079a6107933383606001518460800151610cbd565b6012610c97565b60a08101516107b5906001600160a01b031633146013610c97565b6040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d516001600160a01b03908116808e528f8b015182168a528f8f015189528f880151821687528f86015185528f840151821683526005909b55436001558d51998a019a909a52965189169b88019b909b52935192860192909252518516908401525195820195909552935116908301529060e00161036a565b6108746003600054146019610c97565b61088e8135158061088757506001548235145b601a610c97565b6000808055600280546108a0906111a7565b80601f01602080910402602001604051908101604052809291908181526020018280546108cc906111a7565b80156109195780601f106108ee57610100808354040283529160200191610919565b820191906000526020600020905b8154815290600101906020018083116108fc57829003601f168201915b50505050508060200190518101906109319190611326565b90506109458160e00151431015601b610c97565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516109769291906112a0565b60405180910390a161098a34156017610c97565b80516109a2906001600160a01b031633146018610c97565b6109b9816020015182600001518360400151610dae565b600080805560018190556109cf9060029061102c565b5050565b6000606060005460028080546109e8906111a7565b80601f0160208091040260200160405190810160405280929190818152602001828054610a14906111a7565b8015610a615780601f10610a3657610100808354040283529160200191610a61565b820191906000526020600020905b815481529060010190602001808311610a4457829003601f168201915b50505050509050915091509091565b610a80600560005414601e610c97565b610a9a81351580610a9357506001548235145b601f610c97565b600080805560028054610aac906111a7565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad8906111a7565b8015610b255780601f10610afa57610100808354040283529160200191610b25565b820191906000526020600020905b815481529060010190602001808311610b0857829003601f168201915b5050505050806020019051810190610b3d91906113ec565b6040805160208101909152600081529091507fd9d317f50580320260589621a22264dca6ea15fe8bf7bf7ac2b9f0642902ba523384604051610b80929190611467565b60405180910390a1610b943415601c610c97565b8151610bac906001600160a01b03163314601d610c97565b6000610bc6610bc160408601602087016110c7565b610cd5565b516001811115610bd857610bd86110e4565b1415610be75760008152610c19565b6001610bfc610bc160408601602087016110c7565b516001811115610c0e57610c0e6110e4565b1415610c1957600181525b805115610c6957610c37826060015183600001518460800151610dae565b610c4e82602001518360a001518460400151610dae565b60008080556001819055610c649060029061102c565b505050565b610c80826020015183600001518460400151610dae565b610c4e82606001518360a001518460800151610dae565b816109cf5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610ccb83853085610dc2565b90505b9392505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610d2157610d216110e4565b1415610d9e576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610d6257610d626110e4565b6001811115610d7357610d736110e4565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610db9838383610e9c565b610c6457600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610e29916114a2565b60006040518083038185875af1925050503d8060008114610e66576040519150601f19603f3d011682016040523d82523d6000602084013e610e6b565b606091505b5091509150610e7c82826001610f6d565b5080806020019051810190610e9191906114be565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610efb916114a2565b60006040518083038185875af1925050503d8060008114610f38576040519150601f19603f3d011682016040523d82523d6000602084013e610f3d565b606091505b5091509150610f4e82826002610f6d565b5080806020019051810190610f6391906114be565b9695505050505050565b60608315610f7c575081610cce565b825115610f8c5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610cb4565b828054610fb4906111a7565b90600052602060002090601f016020900481019282610fd6576000855561101c565b82601f10610fef57805160ff191683800117855561101c565b8280016001018555821561101c579182015b8281111561101c578251825591602001919060010190611001565b50611028929150611069565b5090565b508054611038906111a7565b6000825580601f10611048575050565b601f0160209004906000526020600020908101906110669190611069565b50565b5b80821115611028576000815560010161106a565b60006040828403121561109057600080fd5b50919050565b6000604082840312156110a857600080fd5b610cce838361107e565b6001600160a01b038116811461106657600080fd5b6000602082840312156110d957600080fd5b8135610cce816110b2565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061111f57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60005b8381101561115c578181015183820152602001611144565b8381111561038e5750506000910152565b8281526040602082015260008251806040840152611192816060850160208701611141565b601f01601f1916919091016060019392505050565b600181811c908216806111bb57607f821691505b6020821081141561109057634e487b7160e01b600052602260045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561120d57634e487b7160e01b600052604160045260246000fd5b60405290565b8051610da9816110b2565b600060c0828403121561123057600080fd5b6112386111dc565b8251611243816110b2565b81526020830151611253816110b2565b6020820152604083810151908201526060830151611270816110b2565b60608201526080838101519082015260a0928301519281019290925250919050565b801515811461106657600080fd5b6001600160a01b0383168152813560208083019190915260608201908301356112c881611292565b8015156040840152509392505050565b600082198211156112f957634e487b7160e01b600052601160045260246000fd5b500190565b60006020828403121561131057600080fd5b8135610cce81611292565b8051610da981611292565b600061010080838503121561133a57600080fd5b6040519081019067ffffffffffffffff8211818310171561136b57634e487b7160e01b600052604160045260246000fd5b816040528351915061137c826110b2565b81815261138b60208501611213565b6020820152604084015160408201526113a660608501611213565b6060820152608084015160808201526113c160a08501611213565b60a08201526113d260c0850161131b565b60c082015260e084015160e0820152809250505092915050565b600060c082840312156113fe57600080fd5b6114066111dc565b8251611411816110b2565b81526020830151611421816110b2565b602082015260408381015190820152606083015161143e816110b2565b60608201526080838101519082015260a083015161145b816110b2565b60a08201529392505050565b6001600160a01b0383811682528235602080840191909152606083019190840135611491816110b2565b818116604085015250509392505050565b600082516114b4818460208701611141565b9190910192915050565b6000602082840312156114d057600080fd5b8151610cce8161129256fea264697066735822122021b44737990757ff7a39b79eea1eccda21f581d2de03d533b4baead9558a1e3464736f6c634300080c0033`,
  BytecodeLen: 6441,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:30:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:32:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:43:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:54:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:58:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:75:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:75:11:after expr stmt semicolon',
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
