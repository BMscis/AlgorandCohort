// Automatically generated with Reach 0.1.13 (c44a1544)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (c44a1544)';
export const _backendVersion = 27;

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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc5, ctc4, ctc1],
      6: [ctc0, ctc2, ctc1, ctc5, ctc1],
      7: [ctc0, ctc1, ctc2, ctc1, ctc5, ctc1]
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
export async function _ATTENDEE_buy7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _ATTENDEE_buy7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _ATTENDEE_buy7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Struct([['price', ctc3], ['amount', ctc3]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc3, ctc3, ctc3, ctc3]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v799, v800, v820, v876, v883, v884] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc2, ctc3, ctc4, ctc3, ctc7, ctc3]);
  const v900 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)'],
    msg: 'in',
    who: 'ATTENDEE_buy'
    });
  const v901 = v900[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v902 = v901.price;
  const v903 = v901.amount;
  const v908 = stdlib.safeMul(v903, v800);
  const v909 = stdlib.eq(v908, v902);
  stdlib.assert(v909, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:93:18:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:8:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)'],
    msg: 'You have to increase purchasing price',
    who: 'ATTENDEE_buy'
    });
  const v911 = v883[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
  const v912 = v911[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
  const v913 = stdlib.gt(v912, v903);
  stdlib.assert(v913, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:93:18:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:8:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)', 'at ./index.rsh:93:3:application call to [unknown function] (defined at: ./index.rsh:93:3:function exp)'],
    msg: 'Insufficient token balance',
    who: 'ATTENDEE_buy'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v799, v800, v820, v876, v883, v884, v900],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v902, [[stdlib.checkedBigNumberify('./index.rsh:94:22:decimal', stdlib.UInt_max, '0'), v820]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v923], secs: v925, time: v924, didSend: v364, from: v922 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "ATTENDEE_buy"
        });
      const v927 = v923[stdlib.checkedBigNumberify('./index.rsh:92:5:spread', stdlib.UInt_max, '0')];
      const v928 = v927.price;
      const v934 = stdlib.add(v884, v928);
      sim_r.txns.push({
        amt: v928,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      ;
      const v937 = v927.amount;
      const v942 = v883[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
      const v943 = v942[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
      const v946 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc2, v922, ctc0), null);
      const v947 = {
        None: 0,
        Some: 1
        }[v946[0]];
      const v948 = stdlib.eq(v947, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v948) {
        const v991 = stdlib.sub(v943, v937);
        const v993 = stdlib.Array_set(v942, '0', v991);
        const v994 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v993);
        sim_r.txns.push({
          kind: 'from',
          to: v922,
          tok: v820
          });
        const v995 = v994[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
        const v996 = v995[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
        const v998 = v995[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
        const v1000 = stdlib.safeAdd(v876, v937);
        const v1002 = [true, v996, v998, v1000, v934];
        const v1003 = await txn1.getOutput('ATTENDEE_buy', 'v1002', ctc10, v1002);
        
        const v1323 = v1000;
        const v1325 = v994;
        const v1326 = v934;
        const v1329 = stdlib.gt(v996, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
        if (v1329) {
          sim_r.isHalt = false;
          }
        else {
          const v1380 = v1000;
          const v1382 = v994;
          const v1383 = v934;
          const v1386 = stdlib.gt(v998, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
          if (v1386) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v799,
              tok: undefined /* Nothing */
              });
            const v1389 = stdlib.sub(v996, v996);
            const v1390 = stdlib.Array_set(v995, '0', v1389);
            const v1391 = stdlib.Array_set(v994, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1390);
            const v1392 = v1391[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
            const v1393 = v1392[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
            const v1394 = stdlib.sub(v1393, v996);
            const v1395 = stdlib.Array_set(v1392, '1', v1394);
            const v1396 = stdlib.Array_set(v1391, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1395);
            stdlib.simTokenBurn(sim_r, v820, v996);
            const v1397 = v1396[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
            const v1398 = v1397[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
            if (v1398) {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              stdlib.simTokenDestroy(sim_r, v820);
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        await stdlib.simMapSet(sim_r, 0, ctc2, v922, ctc0, null);
        const v957 = stdlib.sub(v943, v937);
        const v959 = stdlib.Array_set(v942, '0', v957);
        const v960 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v959);
        sim_r.txns.push({
          kind: 'from',
          to: v922,
          tok: v820
          });
        const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
        const v962 = v961[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
        const v964 = v961[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
        const v966 = stdlib.safeAdd(v876, v937);
        const v968 = [true, v962, v964, v966, v934];
        const v969 = await txn1.getOutput('ATTENDEE_buy', 'v968', ctc10, v968);
        
        const v1399 = v966;
        const v1401 = v960;
        const v1402 = v934;
        const v1405 = stdlib.gt(v962, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
        if (v1405) {
          sim_r.isHalt = false;
          }
        else {
          const v1456 = v966;
          const v1458 = v960;
          const v1459 = v934;
          const v1462 = stdlib.gt(v964, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
          if (v1462) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v799,
              tok: undefined /* Nothing */
              });
            const v1465 = stdlib.sub(v962, v962);
            const v1466 = stdlib.Array_set(v961, '0', v1465);
            const v1467 = stdlib.Array_set(v960, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1466);
            const v1468 = v1467[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
            const v1469 = v1468[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
            const v1470 = stdlib.sub(v1469, v962);
            const v1471 = stdlib.Array_set(v1468, '1', v1470);
            const v1472 = stdlib.Array_set(v1467, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1471);
            stdlib.simTokenBurn(sim_r, v820, v962);
            const v1473 = v1472[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
            const v1474 = v1473[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
            if (v1474) {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              stdlib.simTokenDestroy(sim_r, v820);
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc3, ctc7, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v923], secs: v925, time: v924, didSend: v364, from: v922 } = txn1;
  undefined /* setApiDetails */;
  const v927 = v923[stdlib.checkedBigNumberify('./index.rsh:92:5:spread', stdlib.UInt_max, '0')];
  const v928 = v927.price;
  const v934 = stdlib.add(v884, v928);
  ;
  ;
  const v937 = v927.amount;
  const v939 = stdlib.safeMul(v937, v800);
  const v940 = stdlib.eq(v939, v928);
  stdlib.assert(v940, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:96:12:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
    msg: 'You have to increase purchasing price',
    who: 'ATTENDEE_buy'
    });
  const v942 = v883[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
  const v943 = v942[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
  const v944 = stdlib.gt(v943, v937);
  stdlib.assert(v944, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:96:12:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
    msg: 'Insufficient token balance',
    who: 'ATTENDEE_buy'
    });
  const v946 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v922, ctc0), null);
  const v947 = {
    None: 0,
    Some: 1
    }[v946[0]];
  const v948 = stdlib.eq(v947, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  if (v948) {
    const v991 = stdlib.sub(v943, v937);
    const v993 = stdlib.Array_set(v942, '0', v991);
    const v994 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v993);
    ;
    const v995 = v994[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
    const v996 = v995[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
    const v998 = v995[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
    const v1000 = stdlib.safeAdd(v876, v937);
    const v1002 = [true, v996, v998, v1000, v934];
    const v1003 = await txn1.getOutput('ATTENDEE_buy', 'v1002', ctc10, v1002);
    if (v364) {
      stdlib.protect(ctc0, await interact.out(v923, v1003), {
        at: './index.rsh:92:6:application',
        fs: ['at ./index.rsh:92:6:application call to [unknown function] (defined at: ./index.rsh:92:6:function exp)', 'at ./index.rsh:99:7:application call to "rt" (defined at: ./index.rsh:95:3:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
        msg: 'out',
        who: 'ATTENDEE_buy'
        });
      }
    else {
      }
    
    const v1323 = v1000;
    const v1325 = v994;
    const v1326 = v934;
    const v1329 = stdlib.gt(v996, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
    if (v1329) {
      return;
      }
    else {
      const v1380 = v1000;
      const v1382 = v994;
      const v1383 = v934;
      const v1386 = stdlib.gt(v998, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
      if (v1386) {
        return;
        }
      else {
        ;
        const v1389 = stdlib.sub(v996, v996);
        const v1390 = stdlib.Array_set(v995, '0', v1389);
        const v1391 = stdlib.Array_set(v994, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1390);
        const v1392 = v1391[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
        const v1393 = v1392[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
        const v1394 = stdlib.sub(v1393, v996);
        const v1395 = stdlib.Array_set(v1392, '1', v1394);
        const v1396 = stdlib.Array_set(v1391, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1395);
        undefined /* TokenBurn */;
        const v1397 = v1396[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
        const v1398 = v1397[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
        if (v1398) {
          return;
          }
        else {
          undefined /* TokenDestroy */;
          return;
          }}}}
  else {
    await stdlib.mapSet(map0, ctc2, v922, ctc0, null);
    const v957 = stdlib.sub(v943, v937);
    const v959 = stdlib.Array_set(v942, '0', v957);
    const v960 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v959);
    ;
    const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
    const v962 = v961[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
    const v964 = v961[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
    const v966 = stdlib.safeAdd(v876, v937);
    const v968 = [true, v962, v964, v966, v934];
    const v969 = await txn1.getOutput('ATTENDEE_buy', 'v968', ctc10, v968);
    if (v364) {
      stdlib.protect(ctc0, await interact.out(v923, v969), {
        at: './index.rsh:92:6:application',
        fs: ['at ./index.rsh:92:6:application call to [unknown function] (defined at: ./index.rsh:92:6:function exp)', 'at ./index.rsh:99:7:application call to "rt" (defined at: ./index.rsh:95:3:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
        msg: 'out',
        who: 'ATTENDEE_buy'
        });
      }
    else {
      }
    
    const v1399 = v966;
    const v1401 = v960;
    const v1402 = v934;
    const v1405 = stdlib.gt(v962, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
    if (v1405) {
      return;
      }
    else {
      const v1456 = v966;
      const v1458 = v960;
      const v1459 = v934;
      const v1462 = stdlib.gt(v964, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
      if (v1462) {
        return;
        }
      else {
        ;
        const v1465 = stdlib.sub(v962, v962);
        const v1466 = stdlib.Array_set(v961, '0', v1465);
        const v1467 = stdlib.Array_set(v960, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1466);
        const v1468 = v1467[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
        const v1469 = v1468[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
        const v1470 = stdlib.sub(v1469, v962);
        const v1471 = stdlib.Array_set(v1468, '1', v1470);
        const v1472 = stdlib.Array_set(v1467, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1471);
        undefined /* TokenBurn */;
        const v1473 = v1472[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
        const v1474 = v1473[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
        if (v1474) {
          return;
          }
        else {
          undefined /* TokenDestroy */;
          return;
          }}}}
  
  
  };
export async function _ATTENDEE_redeem6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _ATTENDEE_redeem6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _ATTENDEE_redeem6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc4, ctc4, ctc4, ctc4]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v799, v820, v1021, v1028, v1029] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3, ctc4, ctc7, ctc4]);
  const v1037 = ctc.selfAddress();
  const v1039 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)'],
    msg: 'in',
    who: 'ATTENDEE_redeem'
    });
  const v1040 = v1039[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1043 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v1037, ctc0), null);
  const v1044 = {
    None: 0,
    Some: 1
    }[v1043[0]];
  const v1045 = stdlib.eq(v1044, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1045, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:119:21:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:8:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)'],
    msg: 'You\'re not a member',
    who: 'ATTENDEE_redeem'
    });
  const v1047 = stdlib.tokenEq(v1040, v820);
  stdlib.assert(v1047, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:115:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:119:21:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:8:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)', 'at ./index.rsh:119:3:application call to [unknown function] (defined at: ./index.rsh:119:3:function exp)'],
    msg: 'Tokens are not the same',
    who: 'ATTENDEE_redeem'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v799, v820, v1021, v1028, v1029, v1039],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:120:11:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:120:14:decimal', stdlib.UInt_max, '1'), v820]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1056], secs: v1058, time: v1057, didSend: v574, from: v1055 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "ATTENDEE_redeem"
        });
      ;
      const v1065 = v1028[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
      const v1066 = v1065[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
      const v1067 = stdlib.add(v1066, stdlib.checkedBigNumberify('./index.rsh:120:14:decimal', stdlib.UInt_max, '1'));
      const v1069 = stdlib.Array_set(v1065, '0', v1067);
      const v1070 = stdlib.Array_set(v1028, stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0'), v1069);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:120:14:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v820
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc2, v1055, ctc0), null);
      const v1079 = v1070[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
      const v1080 = v1079[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
      const v1084 = stdlib.sub(v1080, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
      const v1086 = stdlib.Array_set(v1079, '0', v1084);
      const v1087 = stdlib.Array_set(v1070, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1086);
      const v1088 = v1087[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
      const v1089 = v1088[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '1')];
      const v1090 = stdlib.sub(v1089, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
      const v1092 = stdlib.Array_set(v1088, '1', v1090);
      const v1093 = stdlib.Array_set(v1087, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1092);
      stdlib.simTokenBurn(sim_r, v820, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
      const v1094 = v1093[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
      const v1095 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
      const v1097 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:43:application', stdlib.UInt_max, '1')];
      const v1098 = stdlib.safeSub(v1021, stdlib.checkedBigNumberify('./index.rsh:124:57:decimal', stdlib.UInt_max, '1'));
      const v1100 = [true, v1095, v1097, v1098, v1029];
      const v1101 = await txn1.getOutput('ATTENDEE_redeem', 'v1100', ctc9, v1100);
      
      const v1475 = v1098;
      const v1477 = v1093;
      const v1478 = v1029;
      const v1481 = stdlib.gt(v1097, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
      if (v1481) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v799,
          tok: undefined /* Nothing */
          });
        const v1484 = stdlib.sub(v1095, v1095);
        const v1485 = stdlib.Array_set(v1094, '0', v1484);
        const v1486 = stdlib.Array_set(v1093, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1485);
        const v1487 = v1486[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
        const v1488 = v1487[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
        const v1489 = stdlib.sub(v1488, v1095);
        const v1490 = stdlib.Array_set(v1487, '1', v1489);
        const v1491 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1490);
        stdlib.simTokenBurn(sim_r, v820, v1095);
        const v1492 = v1491[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
        const v1493 = v1492[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
        if (v1493) {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          stdlib.simTokenDestroy(sim_r, v820);
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1056], secs: v1058, time: v1057, didSend: v574, from: v1055 } = txn1;
  undefined /* setApiDetails */;
  const v1060 = v1056[stdlib.checkedBigNumberify('./index.rsh:118:5:spread', stdlib.UInt_max, '0')];
  ;
  const v1065 = v1028[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
  const v1066 = v1065[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
  const v1067 = stdlib.add(v1066, stdlib.checkedBigNumberify('./index.rsh:120:14:decimal', stdlib.UInt_max, '1'));
  const v1069 = stdlib.Array_set(v1065, '0', v1067);
  const v1070 = stdlib.Array_set(v1028, stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0'), v1069);
  ;
  const v1073 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v1055, ctc0), null);
  const v1074 = {
    None: 0,
    Some: 1
    }[v1073[0]];
  const v1075 = stdlib.eq(v1074, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1075, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:15:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:121:3:application call to [unknown function] (defined at: ./index.rsh:121:3:function exp)'],
    msg: 'You\'re not a member',
    who: 'ATTENDEE_redeem'
    });
  const v1077 = stdlib.tokenEq(v1060, v820);
  stdlib.assert(v1077, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:115:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:15:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:121:3:application call to [unknown function] (defined at: ./index.rsh:121:3:function exp)'],
    msg: 'Tokens are not the same',
    who: 'ATTENDEE_redeem'
    });
  const v1079 = v1070[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
  const v1080 = v1079[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
  const v1084 = stdlib.sub(v1080, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
  const v1086 = stdlib.Array_set(v1079, '0', v1084);
  const v1087 = stdlib.Array_set(v1070, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1086);
  const v1088 = v1087[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
  const v1089 = v1088[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '1')];
  const v1090 = stdlib.sub(v1089, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
  const v1092 = stdlib.Array_set(v1088, '1', v1090);
  const v1093 = stdlib.Array_set(v1087, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1092);
  undefined /* TokenBurn */;
  const v1094 = v1093[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
  const v1095 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
  const v1097 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:43:application', stdlib.UInt_max, '1')];
  const v1098 = stdlib.safeSub(v1021, stdlib.checkedBigNumberify('./index.rsh:124:57:decimal', stdlib.UInt_max, '1'));
  const v1100 = [true, v1095, v1097, v1098, v1029];
  const v1101 = await txn1.getOutput('ATTENDEE_redeem', 'v1100', ctc9, v1100);
  if (v574) {
    stdlib.protect(ctc0, await interact.out(v1056, v1101), {
      at: './index.rsh:118:6:application',
      fs: ['at ./index.rsh:118:6:application call to [unknown function] (defined at: ./index.rsh:118:6:function exp)', 'at ./index.rsh:124:7:application call to "rt" (defined at: ./index.rsh:121:3:function exp)', 'at ./index.rsh:121:3:application call to [unknown function] (defined at: ./index.rsh:121:3:function exp)'],
      msg: 'out',
      who: 'ATTENDEE_redeem'
      });
    }
  else {
    }
  
  const v1475 = v1098;
  const v1477 = v1093;
  const v1478 = v1029;
  const v1481 = stdlib.gt(v1097, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
  if (v1481) {
    return;
    }
  else {
    ;
    const v1484 = stdlib.sub(v1095, v1095);
    const v1485 = stdlib.Array_set(v1094, '0', v1484);
    const v1486 = stdlib.Array_set(v1093, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1485);
    const v1487 = v1486[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
    const v1488 = v1487[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
    const v1489 = stdlib.sub(v1488, v1095);
    const v1490 = stdlib.Array_set(v1487, '1', v1489);
    const v1491 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1490);
    undefined /* TokenBurn */;
    const v1492 = v1491[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
    const v1493 = v1492[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
    if (v1493) {
      return;
      }
    else {
      undefined /* TokenDestroy */;
      return;
      }}
  
  
  };
export async function CREATOR(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CREATOR expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CREATOR expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc6 = stdlib.T_Object({
    evenTime: ctc2,
    eventName: ctc3,
    eventSymbol: ctc4,
    metadata: ctc3,
    price: ctc2,
    reserved: ctc2,
    tickets: ctc2,
    url: ctc5
    });
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Struct([['price', ctc2], ['amount', ctc2]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Tuple([ctc11, ctc2, ctc2, ctc2, ctc2]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc2, ctc2, ctc11]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v766 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v767 = [v766];
  const v773 = stdlib.protect(ctc6, await interact.getParams(), {
    at: './index.rsh:55:114:application',
    fs: ['at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:18:function exp)'],
    msg: 'getParams',
    who: 'CREATOR'
    });
  const v774 = v773.evenTime;
  const v775 = v773.eventName;
  const v776 = v773.eventSymbol;
  const v777 = v773.metadata;
  const v778 = v773.price;
  const v779 = v773.reserved;
  const v780 = v773.tickets;
  const v781 = v773.url;
  const v791 = stdlib.ge(v780, stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v791, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:16:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)', 'at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:18:function exp)'],
    msg: 'Tickets have to be more than none',
    who: 'CREATOR'
    });
  const v793 = stdlib.ge(v779, stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v793, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:16:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)', 'at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:18:function exp)'],
    msg: 'You must reserve atleast one ticket',
    who: 'CREATOR'
    });
  const v795 = stdlib.gt(v780, v779);
  stdlib.assert(v795, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:37:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:16:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)', 'at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:18:function exp)'],
    msg: 'Reserved can\'t be more than ticket nums',
    who: 'CREATOR'
    });
  const v797 = stdlib.gt(v778, stdlib.checkedBigNumberify('./index.rsh:38:13:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v797, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:16:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)', 'at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:18:function exp)'],
    msg: 'Price has to be more than nil',
    who: 'CREATOR'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v778, v780, v775, v776, v781, v777, v774, v779],
    evt_cnt: 8,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:58:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc3, ctc4, ctc5, ctc3, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:58:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v800, v801, v802, v803, v804, v805, v806, v807], secs: v809, time: v808, didSend: v115, from: v799 } = txn1;
      
      ;
      const v819 = stdlib.simTokenNew(sim_r, v802, v803, v804, v805, v801, stdlib.checkedBigNumberify('./index.rsh:61:15:decimal', stdlib.UInt_max, '0'), getSimTokCtr());
      const v820 = await txn1.getOutput('internal', 'v819', ctc7, v819);
      const v830 = v767[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
      const v831 = stdlib.Array_set(v830, '0', v801);
      const v832 = stdlib.Array_set(v767, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v831);
      const v834 = v832[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
      const v835 = stdlib.Array_set(v834, '1', v801);
      const v836 = stdlib.Array_set(v832, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v835);
      const v837 = v836[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
      const v838 = stdlib.Array_set(v837, '2', false);
      const v839 = stdlib.Array_set(v836, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v838);
      const v840 = v839[stdlib.checkedBigNumberify('./index.rsh:66:24:application', stdlib.UInt_max, '0')];
      const v841 = v840[stdlib.checkedBigNumberify('./index.rsh:66:24:application', stdlib.UInt_max, '1')];
      const v844 = v840[stdlib.checkedBigNumberify('./index.rsh:67:18:application', stdlib.UInt_max, '0')];
      const v853 = await ctc.getContractInfo();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc4, ctc5, ctc3, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v800, v801, v802, v803, v804, v805, v806, v807], secs: v809, time: v808, didSend: v115, from: v799 } = txn1;
  ;
  const v811 = stdlib.ge(v801, stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v811, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:14:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)'],
    msg: 'Tickets have to be more than none',
    who: 'CREATOR'
    });
  const v813 = stdlib.ge(v807, stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v813, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:14:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)'],
    msg: 'You must reserve atleast one ticket',
    who: 'CREATOR'
    });
  const v815 = stdlib.gt(v801, v807);
  stdlib.assert(v815, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:37:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:14:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)'],
    msg: 'Reserved can\'t be more than ticket nums',
    who: 'CREATOR'
    });
  const v817 = stdlib.gt(v800, stdlib.checkedBigNumberify('./index.rsh:38:13:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v817, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:14:application call to "checkParams" (defined at: ./index.rsh:34:29:function exp)'],
    msg: 'Price has to be more than nil',
    who: 'CREATOR'
    });
  const v819 = undefined /* TokenNew */;
  const v820 = await txn1.getOutput('internal', 'v819', ctc7, v819);
  const v830 = v767[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
  const v831 = stdlib.Array_set(v830, '0', v801);
  const v832 = stdlib.Array_set(v767, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v831);
  const v834 = v832[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
  const v835 = stdlib.Array_set(v834, '1', v801);
  const v836 = stdlib.Array_set(v832, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v835);
  const v837 = v836[stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0')];
  const v838 = stdlib.Array_set(v837, '2', false);
  const v839 = stdlib.Array_set(v836, stdlib.checkedBigNumberify('./index.rsh:65:27:application', stdlib.UInt_max, '0'), v838);
  const v840 = v839[stdlib.checkedBigNumberify('./index.rsh:66:24:application', stdlib.UInt_max, '0')];
  const v841 = v840[stdlib.checkedBigNumberify('./index.rsh:66:24:application', stdlib.UInt_max, '1')];
  const v842 = stdlib.eq(v841, v801);
  stdlib.assert(v842, {
    at: './index.rsh:66:10:application',
    fs: [],
    msg: 'Supply must be equal to tickets',
    who: 'CREATOR'
    });
  const v844 = v840[stdlib.checkedBigNumberify('./index.rsh:67:18:application', stdlib.UInt_max, '0')];
  const v845 = stdlib.eq(v844, v801);
  stdlib.assert(v845, {
    at: './index.rsh:67:10:application',
    fs: [],
    msg: 'Balance must be equal to tickets',
    who: 'CREATOR'
    });
  const v850 = stdlib.eq(v841, v844);
  stdlib.assert(v850, {
    at: './index.rsh:68:10:application',
    fs: [],
    msg: 'Balance must be equal to supply',
    who: 'CREATOR'
    });
  const v853 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v853, v820, v841, v844), {
    at: './index.rsh:72:26:application',
    fs: ['at ./index.rsh:72:26:application call to [unknown function] (defined at: ./index.rsh:72:26:function exp)', 'at ./index.rsh:72:26:application call to "liftedInteract" (defined at: ./index.rsh:72:26:application)'],
    msg: 'notify',
    who: 'CREATOR'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v799, v800, v807, v820, v839, v840, v844],
    evt_cnt: 0,
    funcNum: 1,
    lct: v808,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v861, time: v860, didSend: v215, from: v859 } = txn2;
      
      ;
      const v871 = stdlib.sub(v844, v807);
      const v873 = stdlib.Array_set(v840, '0', v871);
      const v874 = stdlib.Array_set(v839, stdlib.checkedBigNumberify('./index.rsh:77:31:application', stdlib.UInt_max, '0'), v873);
      sim_r.txns.push({
        kind: 'from',
        to: v799,
        tok: v820
        });
      
      const v876 = v807;
      const v877 = v860;
      const v883 = v874;
      const v884 = stdlib.checkedBigNumberify('./index.rsh:53:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v895 = v883[stdlib.checkedBigNumberify('./index.rsh:84:15:application', stdlib.UInt_max, '0')];
        const v896 = v895[stdlib.checkedBigNumberify('./index.rsh:84:15:application', stdlib.UInt_max, '0')];
        const v897 = stdlib.gt(v896, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
        
        return v897;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        const v1021 = v876;
        const v1022 = v877;
        const v1028 = v883;
        const v1029 = v884;
        
        if (await (async () => {
          const v1034 = v1028[stdlib.checkedBigNumberify('./index.rsh:111:21:application', stdlib.UInt_max, '0')];
          const v1035 = v1034[stdlib.checkedBigNumberify('./index.rsh:111:21:application', stdlib.UInt_max, '1')];
          const v1036 = stdlib.gt(v1035, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
          
          return v1036;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v799,
            tok: undefined /* Nothing */
            });
          const v1119 = v1028[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
          const v1120 = v1119[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
          const v1126 = stdlib.sub(v1120, v1120);
          const v1128 = stdlib.Array_set(v1119, '0', v1126);
          const v1129 = stdlib.Array_set(v1028, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1128);
          const v1130 = v1129[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
          const v1131 = v1130[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
          const v1132 = stdlib.sub(v1131, v1120);
          const v1134 = stdlib.Array_set(v1130, '1', v1132);
          const v1135 = stdlib.Array_set(v1129, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1134);
          stdlib.simTokenBurn(sim_r, v820, v1120);
          const v1136 = v1135[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
          const v1137 = v1136[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
          if (v1137) {
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v820);
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc2, ctc2, ctc7, ctc15, ctc14, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v861, time: v860, didSend: v215, from: v859 } = txn2;
  ;
  const v862 = stdlib.addressEq(v799, v859);
  stdlib.assert(v862, {
    at: './index.rsh:73:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'CREATOR'
    });
  const v871 = stdlib.sub(v844, v807);
  const v873 = stdlib.Array_set(v840, '0', v871);
  const v874 = stdlib.Array_set(v839, stdlib.checkedBigNumberify('./index.rsh:77:31:application', stdlib.UInt_max, '0'), v873);
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:78:25:application',
    fs: ['at ./index.rsh:78:25:application call to [unknown function] (defined at: ./index.rsh:78:25:function exp)', 'at ./index.rsh:78:25:application call to "liftedInteract" (defined at: ./index.rsh:78:25:application)'],
    msg: 'ready',
    who: 'CREATOR'
    });
  
  let v876 = v807;
  let v877 = v860;
  let v883 = v874;
  let v884 = stdlib.checkedBigNumberify('./index.rsh:53:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v895 = v883[stdlib.checkedBigNumberify('./index.rsh:84:15:application', stdlib.UInt_max, '0')];
    const v896 = v895[stdlib.checkedBigNumberify('./index.rsh:84:15:application', stdlib.UInt_max, '0')];
    const v897 = stdlib.gt(v896, stdlib.checkedBigNumberify('./index.rsh:84:26:decimal', stdlib.UInt_max, '0'));
    
    return v897;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v923], secs: v925, time: v924, didSend: v364, from: v922 } = txn4;
    undefined /* setApiDetails */;
    const v927 = v923[stdlib.checkedBigNumberify('./index.rsh:92:5:spread', stdlib.UInt_max, '0')];
    const v928 = v927.price;
    const v934 = stdlib.add(v884, v928);
    ;
    ;
    const v937 = v927.amount;
    const v939 = stdlib.safeMul(v937, v800);
    const v940 = stdlib.eq(v939, v928);
    stdlib.assert(v940, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:96:12:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
      msg: 'You have to increase purchasing price',
      who: 'CREATOR'
      });
    const v942 = v883[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
    const v943 = v942[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
    const v944 = stdlib.gt(v943, v937);
    stdlib.assert(v944, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:96:12:application call to "doCheck" (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:95:3:application call to [unknown function] (defined at: ./index.rsh:95:3:function exp)'],
      msg: 'Insufficient token balance',
      who: 'CREATOR'
      });
    const v946 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v922, ctc0), null);
    const v947 = {
      None: 0,
      Some: 1
      }[v946[0]];
    const v948 = stdlib.eq(v947, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    if (v948) {
      const v991 = stdlib.sub(v943, v937);
      const v993 = stdlib.Array_set(v942, '0', v991);
      const v994 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v993);
      ;
      const v995 = v994[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
      const v996 = v995[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
      const v998 = v995[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
      const v1000 = stdlib.safeAdd(v876, v937);
      const v1002 = [true, v996, v998, v1000, v934];
      await txn4.getOutput('ATTENDEE_buy', 'v1002', ctc12, v1002);
      const cv876 = v1000;
      const cv877 = v924;
      const cv883 = v994;
      const cv884 = v934;
      
      v876 = cv876;
      v877 = cv877;
      v883 = cv883;
      v884 = cv884;
      
      txn3 = txn4;
      continue;}
    else {
      await stdlib.mapSet(map0, ctc10, v922, ctc0, null);
      const v957 = stdlib.sub(v943, v937);
      const v959 = stdlib.Array_set(v942, '0', v957);
      const v960 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:98:35:application', stdlib.UInt_max, '0'), v959);
      ;
      const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
      const v962 = v961[stdlib.checkedBigNumberify('./index.rsh:99:21:application', stdlib.UInt_max, '0')];
      const v964 = v961[stdlib.checkedBigNumberify('./index.rsh:99:43:application', stdlib.UInt_max, '1')];
      const v966 = stdlib.safeAdd(v876, v937);
      const v968 = [true, v962, v964, v966, v934];
      await txn4.getOutput('ATTENDEE_buy', 'v968', ctc12, v968);
      const cv876 = v966;
      const cv877 = v924;
      const cv883 = v960;
      const cv884 = v934;
      
      v876 = cv876;
      v877 = cv877;
      v883 = cv883;
      v884 = cv884;
      
      txn3 = txn4;
      continue;}
    
    }
  stdlib.protect(ctc0, await interact.soldOut(v820, v853), {
    at: './index.rsh:106:25:application',
    fs: ['at ./index.rsh:106:25:application call to [unknown function] (defined at: ./index.rsh:106:25:function exp)', 'at ./index.rsh:106:25:application call to "liftedInteract" (defined at: ./index.rsh:106:25:application)'],
    msg: 'soldOut',
    who: 'CREATOR'
    });
  
  let v1021 = v876;
  let v1022 = v877;
  let v1028 = v883;
  let v1029 = v884;
  
  let txn4 = txn3;
  while (await (async () => {
    const v1034 = v1028[stdlib.checkedBigNumberify('./index.rsh:111:21:application', stdlib.UInt_max, '0')];
    const v1035 = v1034[stdlib.checkedBigNumberify('./index.rsh:111:21:application', stdlib.UInt_max, '1')];
    const v1036 = stdlib.gt(v1035, stdlib.checkedBigNumberify('./index.rsh:111:26:decimal', stdlib.UInt_max, '0'));
    
    return v1036;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc13],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1056], secs: v1058, time: v1057, didSend: v574, from: v1055 } = txn5;
    undefined /* setApiDetails */;
    const v1060 = v1056[stdlib.checkedBigNumberify('./index.rsh:118:5:spread', stdlib.UInt_max, '0')];
    ;
    const v1065 = v1028[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
    const v1066 = v1065[stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0')];
    const v1067 = stdlib.add(v1066, stdlib.checkedBigNumberify('./index.rsh:120:14:decimal', stdlib.UInt_max, '1'));
    const v1069 = stdlib.Array_set(v1065, '0', v1067);
    const v1070 = stdlib.Array_set(v1028, stdlib.checkedBigNumberify('./index.rsh:107:34:dot', stdlib.UInt_max, '0'), v1069);
    ;
    const v1073 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v1055, ctc0), null);
    const v1074 = {
      None: 0,
      Some: 1
      }[v1073[0]];
    const v1075 = stdlib.eq(v1074, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
    stdlib.assert(v1075, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:114:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:15:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:121:3:application call to [unknown function] (defined at: ./index.rsh:121:3:function exp)'],
      msg: 'You\'re not a member',
      who: 'CREATOR'
      });
    const v1077 = stdlib.tokenEq(v1060, v820);
    stdlib.assert(v1077, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:115:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:15:application call to "checkToken" (defined at: ./index.rsh:113:28:function exp)', 'at ./index.rsh:121:3:application call to [unknown function] (defined at: ./index.rsh:121:3:function exp)'],
      msg: 'Tokens are not the same',
      who: 'CREATOR'
      });
    const v1079 = v1070[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
    const v1080 = v1079[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
    const v1084 = stdlib.sub(v1080, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
    const v1086 = stdlib.Array_set(v1079, '0', v1084);
    const v1087 = stdlib.Array_set(v1070, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1086);
    const v1088 = v1087[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0')];
    const v1089 = v1088[stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '1')];
    const v1090 = stdlib.sub(v1089, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '1'));
    const v1092 = stdlib.Array_set(v1088, '1', v1090);
    const v1093 = stdlib.Array_set(v1087, stdlib.checkedBigNumberify('./index.rsh:123:16:application', stdlib.UInt_max, '0'), v1092);
    undefined /* TokenBurn */;
    const v1094 = v1093[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
    const v1095 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:21:application', stdlib.UInt_max, '0')];
    const v1097 = v1094[stdlib.checkedBigNumberify('./index.rsh:124:43:application', stdlib.UInt_max, '1')];
    const v1098 = stdlib.safeSub(v1021, stdlib.checkedBigNumberify('./index.rsh:124:57:decimal', stdlib.UInt_max, '1'));
    const v1100 = [true, v1095, v1097, v1098, v1029];
    await txn5.getOutput('ATTENDEE_redeem', 'v1100', ctc12, v1100);
    const cv1021 = v1098;
    const cv1022 = v1057;
    const cv1028 = v1093;
    const cv1029 = v1029;
    
    v1021 = cv1021;
    v1022 = cv1022;
    v1028 = cv1028;
    v1029 = cv1029;
    
    txn4 = txn5;
    continue;
    
    }
  ;
  const v1119 = v1028[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
  const v1120 = v1119[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
  const v1126 = stdlib.sub(v1120, v1120);
  const v1128 = stdlib.Array_set(v1119, '0', v1126);
  const v1129 = stdlib.Array_set(v1028, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1128);
  const v1130 = v1129[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0')];
  const v1131 = v1130[stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '1')];
  const v1132 = stdlib.sub(v1131, v1120);
  const v1134 = stdlib.Array_set(v1130, '1', v1132);
  const v1135 = stdlib.Array_set(v1129, stdlib.checkedBigNumberify('./index.rsh:134:14:application', stdlib.UInt_max, '0'), v1134);
  undefined /* TokenBurn */;
  const v1136 = v1135[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '0')];
  const v1137 = v1136[stdlib.checkedBigNumberify('./index.rsh:135:23:application', stdlib.UInt_max, '2')];
  if (v1137) {
    stdlib.protect(ctc0, await interact.end(), {
      at: './index.rsh:138:23:application',
      fs: ['at ./index.rsh:138:23:application call to [unknown function] (defined at: ./index.rsh:138:23:function exp)', 'at ./index.rsh:138:23:application call to "liftedInteract" (defined at: ./index.rsh:138:23:application)'],
      msg: 'end',
      who: 'CREATOR'
      });
    
    return;
    }
  else {
    undefined /* TokenDestroy */;
    stdlib.protect(ctc0, await interact.end(), {
      at: './index.rsh:138:23:application',
      fs: ['at ./index.rsh:138:23:application call to [unknown function] (defined at: ./index.rsh:138:23:function exp)', 'at ./index.rsh:138:23:application call to "liftedInteract" (defined at: ./index.rsh:138:23:application)'],
      msg: 'end',
      who: 'CREATOR'
      });
    
    return;
    }
  
  
  
  };
export async function ATTENDEE_buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for ATTENDEE_buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for ATTENDEE_buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _ATTENDEE_buy7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function ATTENDEE_redeem(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for ATTENDEE_redeem expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for ATTENDEE_redeem expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _ATTENDEE_redeem6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`ATTENDEE_buy((uint64,uint64))(byte,uint64,uint64,uint64,uint64)`, `ATTENDEE_redeem(uint64)(byte,uint64,uint64,uint64,uint64)`, `_reachp_0((uint64,uint64,uint64,byte[32],byte[8],byte[96],byte[32],uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_4((uint64,(uint64)))void`, `_reachp_5((uint64,((uint64,uint64))))void`],
    pure: [],
    sigs: [`ATTENDEE_buy((uint64,uint64))(byte,uint64,uint64,uint64,uint64)`, `ATTENDEE_redeem(uint64)(byte,uint64,uint64,uint64,uint64)`, `_reachp_0((uint64,uint64,uint64,byte[32],byte[8],byte[96],byte[32],uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_4((uint64,(uint64)))void`, `_reachp_5((uint64,((uint64,uint64))))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCANAAEIICigjQYHMBEGBAIDJgMAAQABATEYQQSSKGRJIls1ASRbNQIpZIIGBCvTwL4EPDPZ3wRE8TbSBNrBe4YE39kjKAT1vduHNhoAjgYEIwFOAAEEPgQzBEkANhoBNQskrzQLUDULIQY0ARJESVcAIDUUSSVbNRNJIQRbNRJJIQdbNRFJVzgRNQ+BSVs1DjQLIls1DDQLVwgQNQ2ABCrLTzw0DBZQNA1QsDQMiAVLNA1JNQsiWzUVNA40FQg1DTQViAVlNAskW0k1DDQTCzQVEkQ0D1cAEUk1FSJbSTULNAwNRCgoKTEAUIgFIiJVIxJBA+M0DzQVNAs0DAkWXABcADUWNAw0EjEAiAT4NBZXABE1FTQRNAwINQsqNBVXAAhQNBVXCAhQNAsWUDQNFlA1DIAIAAAAAAAAA+o0DFCwNAw1BDQLMgY0FjQNNQ41DzUQNRE0D1cAESJbIg1BA+U0FDQTFlA0EhZQNBEWUDQPUDQOFlAhCK9QIQYyBjUCNQEpTFcAYmcoNAEWNAIWUGcxGSISRIgEgjQDQAAKgAQVH3x1NARQsCNDNhoBFzULJK80CxZQNQ4hCTQBEkRJVwAgNRRJJVs1EkkhBFs1FUlXMBE1DIFBWzULNA4iWzUPNA5XCAg1EIAEMnKFaDQPFlA0EFCwNA+IBAI0DFcAETUPNAw0D0kiWyMIFlwAXAA1DiM0EjEWNAAjCEk1AAlHAzgUMgoSRDgQIQoSRDgRTwISRDgSEkQoKCkxAFCIA9EiVSMSRDQQFzQSEkQ0DlcAETUQNA40EEkiWyMJFlwAXABJNQ9XABE1EDQPNBBJJFsjCRZcCFwASTUOVwARNRE0FSMJNRAqNBFXAAhQNBFXCAhQNBAWUDQLFlA1D4AIAAAAAAAABEw0D1CwNA81BDQQMgY0DjUMNQ01FTQMVwARSTUNJFsiDUECkTQUNBIWUDQVFlA0DFA0CxZQgRmvUCEJMgZC/poxADUUNAsiWzUNNAskWzUTNAuBEFs1DDQLVxggNRE0C1c4CDUQNAtXQGA1DzQLV6AgNQ40C4HIAVs1F4AEjjnn7zQNFlA0ExZQNAwWUDQRUDQQUDQPUDQOUDQLV8AIUDQXFlCwNA2IAq8hCK81CzQMIQsPRDQXIw9ENAw0Fw1ENBMiDUQhBYgCnbEisgEhDLIQNAyyIiKyIzQQsiU0EbImNA+yJzQOsigyCrIps7Q8NQ2ACAAAAAAAAAMzNA0WULA0DTUSNAtJVwARNAwWXABcAEk1DUlXABE0DBZcCFwASTULSVcAESlcEFwASTUWVwARSTUVJFtJNQs0DBJENBUiW0k1DTQMEkQ0CzQNEkQ0FDQTFlA0FxZQNBIWUDQWUDQVUDQNFlAjMgZC/W4jNAESRElXACA1FEklWzUTSSEEWzUXSSEHWzUSSVc4ETUWSVdJETUVgVpbNQ00Cxc1DIAE1RUZFDQMFlCwNAyIAao0FDEAEkQ0FzQSNBSIAaU0FzIGNBY0FTQNNBcJFlwAXAAiNQ41DzUQNRFC/NaIAXYhBYgBgzYaATULQv5ViAFmNhoBNQtC/3aIAVs2GgE1DkL9E4gBUDYaATULQvu5IjE0EkQhCzE1EkQiMTYSRCIxNxJEiAEwgWKvIiJC/K4xGSISREL8xoHUeikxAFAoiAFqNA80FTQLNAwJFlwAXAA1FjQMNBIxAIgBCjQWVwARNRU0ETQMCDULKjQVVwAIUDQVVwgIUDQLFlA0DRZQNQyACAAAAAAAAAPINAxQsDQMNQQ0CzIGNBY0DTUONQ81EDURQvwPNBE0EDQPNA41CzUMNQ01FUL9YDQLNBSIAMc0DSJbNQ40DDQNNA5JCRZcAFwASTULVwARNQw0CzQMSSRbNA4JFlwIXABXABFXEAEXQQAUMRmBBRJEiAB+IjIKMgmIAKJC+/GxIrIBIQyyEDQSsiGzIQU0Bwg1B0L/1UhMv0iJIrIBI7IQsgeyCLOJIrIBIQqyELIUshGyErOJSIlMCUk1BjIJiAA8iQlJQf/uSTUGiAA0iSM1A4lJIhJMNAISEUSJsUL/xjQGCDUGib5JFlEHCEUETVCJNAY0B0oPQf+9Qv/FsUL/mTEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRImxsglC/3dMSb1A/2xLA4j/skL/ZA==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `29`,
    1000: `621`,
    1001: `621`,
    1002: `622`,
    1003: `623`,
    1004: `626`,
    1005: `626`,
    1006: `627`,
    1007: `627`,
    1008: `628`,
    1009: `629`,
    101: `29`,
    1010: `633`,
    1011: `633`,
    1012: `634`,
    1013: `634`,
    1014: `635`,
    1015: `636`,
    1016: `637`,
    1017: `637`,
    1018: `638`,
    1019: `639`,
    102: `30`,
    1020: `640`,
    1021: `640`,
    1022: `641`,
    1023: `642`,
    1024: `643`,
    1025: `643`,
    1026: `644`,
    1027: `645`,
    1028: `645`,
    1029: `646`,
    103: `31`,
    1030: `647`,
    1031: `647`,
    1032: `648`,
    1033: `649`,
    1034: `650`,
    1035: `651`,
    1036: `651`,
    1037: `652`,
    1038: `652`,
    1039: `652`,
    104: `31`,
    1040: `654`,
    1041: `655`,
    1042: `655`,
    1043: `656`,
    1044: `657`,
    1045: `659`,
    1046: `660`,
    1047: `660`,
    1048: `660`,
    1049: `661`,
    105: `33`,
    1050: `661`,
    1051: `662`,
    1052: `663`,
    1053: `664`,
    1054: `665`,
    1055: `665`,
    1056: `666`,
    1057: `667`,
    1058: `667`,
    1059: `668`,
    106: `33`,
    1060: `669`,
    1061: `669`,
    1062: `670`,
    1063: `671`,
    1064: `671`,
    1065: `672`,
    1066: `673`,
    1067: `673`,
    1068: `674`,
    1069: `675`,
    107: `34`,
    1070: `675`,
    1071: `675`,
    1072: `676`,
    1073: `676`,
    1074: `677`,
    1075: `678`,
    1076: `678`,
    1077: `678`,
    1078: `679`,
    1079: `679`,
    108: `34`,
    1080: `680`,
    1081: `680`,
    1082: `681`,
    1083: `682`,
    1084: `682`,
    1085: `683`,
    1086: `683`,
    1087: `684`,
    1088: `685`,
    1089: `685`,
    109: `35`,
    1090: `686`,
    1091: `686`,
    1092: `686`,
    1093: `686`,
    1094: `686`,
    1095: `686`,
    1096: `687`,
    1097: `687`,
    1098: `688`,
    1099: `689`,
    11: `2`,
    110: `36`,
    1100: `690`,
    1101: `692`,
    1102: `692`,
    1103: `693`,
    1104: `693`,
    1105: `693`,
    1106: `694`,
    1107: `694`,
    1108: `695`,
    1109: `695`,
    111: `38`,
    1110: `696`,
    1111: `697`,
    1112: `700`,
    1113: `700`,
    1114: `702`,
    1115: `702`,
    1116: `704`,
    1117: `704`,
    1118: `705`,
    1119: `705`,
    112: `39`,
    1120: `705`,
    1121: `706`,
    1122: `706`,
    1123: `707`,
    1124: `707`,
    1125: `708`,
    1126: `708`,
    1127: `709`,
    1128: `709`,
    1129: `710`,
    113: `39`,
    1130: `710`,
    1131: `711`,
    1132: `711`,
    1133: `712`,
    1134: `713`,
    1135: `714`,
    1136: `714`,
    1137: `715`,
    1138: `715`,
    1139: `716`,
    114: `39`,
    1140: `717`,
    1141: `717`,
    1142: `718`,
    1143: `718`,
    1144: `719`,
    1145: `719`,
    1146: `720`,
    1147: `720`,
    1148: `721`,
    1149: `721`,
    115: `40`,
    1150: `721`,
    1151: `723`,
    1152: `723`,
    1153: `723`,
    1154: `724`,
    1155: `724`,
    1156: `725`,
    1157: `725`,
    1158: `725`,
    1159: `726`,
    116: `40`,
    1160: `726`,
    1161: `726`,
    1162: `727`,
    1163: `727`,
    1164: `728`,
    1165: `728`,
    1166: `728`,
    1167: `730`,
    1168: `730`,
    1169: `730`,
    117: `41`,
    1170: `731`,
    1171: `731`,
    1172: `731`,
    1173: `732`,
    1174: `732`,
    1175: `733`,
    1176: `733`,
    1177: `733`,
    1178: `735`,
    1179: `735`,
    118: `42`,
    1180: `735`,
    1181: `736`,
    1182: `736`,
    1183: `736`,
    1184: `737`,
    1185: `737`,
    1186: `738`,
    1187: `738`,
    1188: `738`,
    1189: `740`,
    119: `43`,
    1190: `740`,
    1191: `740`,
    1192: `741`,
    1193: `741`,
    1194: `741`,
    1195: `742`,
    1196: `742`,
    1197: `743`,
    1198: `743`,
    1199: `743`,
    12: `2`,
    120: `44`,
    1200: `745`,
    1201: `746`,
    1202: `746`,
    1203: `747`,
    1204: `748`,
    1205: `749`,
    1206: `749`,
    1207: `750`,
    1208: `750`,
    1209: `751`,
    121: `44`,
    1210: `752`,
    1211: `753`,
    1212: `754`,
    1213: `754`,
    1214: `755`,
    1215: `756`,
    1216: `757`,
    1217: `758`,
    1218: `758`,
    1219: `759`,
    122: `45`,
    1220: `760`,
    1221: `761`,
    1222: `761`,
    1223: `761`,
    1224: `762`,
    1225: `762`,
    1226: `763`,
    1227: `764`,
    1228: `765`,
    1229: `766`,
    123: `46`,
    1230: `766`,
    1231: `766`,
    1232: `768`,
    1233: `768`,
    1234: `769`,
    1235: `770`,
    1236: `771`,
    1237: `773`,
    1238: `773`,
    1239: `773`,
    124: `46`,
    1240: `775`,
    1241: `775`,
    1242: `775`,
    1243: `776`,
    1244: `777`,
    1245: `777`,
    1246: `778`,
    1247: `779`,
    1248: `780`,
    1249: `780`,
    125: `47`,
    1250: `780`,
    1251: `781`,
    1252: `781`,
    1253: `782`,
    1254: `782`,
    1255: `783`,
    1256: `783`,
    1257: `784`,
    1258: `784`,
    1259: `785`,
    126: `48`,
    1260: `786`,
    1261: `787`,
    1262: `787`,
    1263: `788`,
    1264: `788`,
    1265: `789`,
    1266: `789`,
    1267: `790`,
    1268: `790`,
    1269: `792`,
    127: `48`,
    1270: `792`,
    1271: `793`,
    1272: `793`,
    1273: `794`,
    1274: `794`,
    1275: `794`,
    1276: `795`,
    1277: `795`,
    1278: `796`,
    1279: `796`,
    128: `49`,
    1280: `796`,
    1281: `797`,
    1282: `797`,
    1283: `798`,
    1284: `798`,
    1285: `799`,
    1286: `799`,
    1287: `800`,
    1288: `801`,
    1289: `801`,
    129: `50`,
    1290: `802`,
    1291: `803`,
    1292: `803`,
    1293: `804`,
    1294: `804`,
    1295: `804`,
    1296: `805`,
    1297: `806`,
    1298: `806`,
    1299: `807`,
    13: `2`,
    130: `50`,
    1300: `807`,
    1301: `807`,
    1302: `808`,
    1303: `809`,
    1304: `809`,
    1305: `810`,
    1306: `811`,
    1307: `812`,
    1308: `812`,
    1309: `813`,
    131: `51`,
    1310: `814`,
    1311: `815`,
    1312: `815`,
    1313: `816`,
    1314: `816`,
    1315: `816`,
    1316: `816`,
    1317: `816`,
    1318: `816`,
    1319: `816`,
    132: `52`,
    1320: `816`,
    1321: `816`,
    1322: `816`,
    1323: `817`,
    1324: `817`,
    1325: `818`,
    1326: `819`,
    1327: `820`,
    1328: `820`,
    1329: `821`,
    133: `52`,
    1330: `821`,
    1331: `822`,
    1332: `822`,
    1333: `823`,
    1334: `823`,
    1335: `824`,
    1336: `824`,
    1337: `825`,
    1338: `825`,
    1339: `826`,
    134: `53`,
    1340: `826`,
    1341: `827`,
    1342: `827`,
    1343: `828`,
    1344: `828`,
    1345: `829`,
    1346: `829`,
    1347: `830`,
    1348: `830`,
    1349: `830`,
    135: `54`,
    1350: `832`,
    1351: `832`,
    1352: `833`,
    1353: `833`,
    1354: `834`,
    1355: `834`,
    1356: `835`,
    1357: `835`,
    1358: `836`,
    1359: `836`,
    136: `54`,
    1360: `837`,
    1361: `837`,
    1362: `838`,
    1363: `838`,
    1364: `839`,
    1365: `839`,
    1366: `840`,
    1367: `840`,
    1368: `840`,
    1369: `842`,
    137: `54`,
    1370: `842`,
    1371: `844`,
    1372: `844`,
    1373: `845`,
    1374: `845`,
    1375: `845`,
    1376: `846`,
    1377: `846`,
    1378: `847`,
    1379: `848`,
    138: `55`,
    1380: `849`,
    1381: `849`,
    1382: `850`,
    1383: `850`,
    1384: `851`,
    1385: `851`,
    1386: `852`,
    1387: `852`,
    1388: `853`,
    1389: `854`,
    139: `55`,
    1390: `855`,
    1391: `856`,
    1392: `856`,
    1393: `857`,
    1394: `857`,
    1395: `858`,
    1396: `859`,
    1397: `859`,
    1398: `860`,
    1399: `860`,
    14: `2`,
    140: `56`,
    1400: `860`,
    1401: `861`,
    1402: `861`,
    1403: `862`,
    1404: `862`,
    1405: `863`,
    1406: `863`,
    1407: `864`,
    1408: `865`,
    1409: `866`,
    141: `56`,
    1410: `867`,
    1411: `867`,
    1412: `868`,
    1413: `869`,
    1414: `870`,
    1415: `870`,
    1416: `871`,
    1417: `871`,
    1418: `872`,
    1419: `872`,
    142: `57`,
    1420: `872`,
    1421: `873`,
    1422: `873`,
    1423: `873`,
    1424: `874`,
    1425: `875`,
    1426: `875`,
    1427: `875`,
    1428: `877`,
    1429: `877`,
    143: `58`,
    1430: `878`,
    1431: `878`,
    1432: `879`,
    1433: `880`,
    1434: `882`,
    1435: `882`,
    1436: `882`,
    1437: `884`,
    1438: `885`,
    1439: `885`,
    144: `58`,
    1440: `886`,
    1441: `886`,
    1442: `887`,
    1443: `887`,
    1444: `887`,
    1445: `888`,
    1446: `888`,
    1447: `888`,
    1448: `890`,
    1449: `891`,
    145: `59`,
    1450: `892`,
    1451: `892`,
    1452: `893`,
    1453: `893`,
    1454: `894`,
    1455: `894`,
    1456: `896`,
    1457: `896`,
    1458: `897`,
    1459: `897`,
    146: `59`,
    1460: `898`,
    1461: `899`,
    1462: `899`,
    1463: `901`,
    1464: `901`,
    1465: `902`,
    1466: `903`,
    1467: `903`,
    1468: `904`,
    1469: `904`,
    147: `60`,
    1470: `904`,
    1471: `906`,
    1472: `907`,
    1473: `908`,
    1474: `909`,
    1475: `910`,
    1476: `912`,
    1477: `913`,
    1478: `913`,
    1479: `914`,
    148: `61`,
    1480: `915`,
    1481: `915`,
    1482: `916`,
    1483: `916`,
    1484: `917`,
    1485: `917`,
    1486: `918`,
    1487: `919`,
    1488: `921`,
    1489: `922`,
    149: `62`,
    1490: `922`,
    1491: `923`,
    1492: `923`,
    1493: `924`,
    1494: `924`,
    1495: `925`,
    1496: `925`,
    1497: `926`,
    1498: `926`,
    1499: `927`,
    15: `2`,
    150: `62`,
    1500: `927`,
    1501: `928`,
    1502: `929`,
    1503: `931`,
    1504: `932`,
    1505: `934`,
    1506: `935`,
    1507: `936`,
    1508: `937`,
    1509: `937`,
    151: `63`,
    1510: `938`,
    1511: `938`,
    1512: `939`,
    1513: `939`,
    1514: `939`,
    1515: `940`,
    1516: `942`,
    1517: `943`,
    1518: `944`,
    1519: `944`,
    152: `63`,
    1520: `944`,
    1521: `945`,
    1522: `946`,
    1523: `946`,
    1524: `947`,
    1525: `947`,
    1526: `947`,
    1527: `948`,
    1528: `950`,
    1529: `951`,
    153: `64`,
    1530: `951`,
    1531: `952`,
    1532: `954`,
    1533: `955`,
    1534: `956`,
    1535: `957`,
    1536: `958`,
    1537: `958`,
    1538: `959`,
    1539: `960`,
    154: `64`,
    1540: `961`,
    1541: `962`,
    1542: `964`,
    1543: `965`,
    1544: `965`,
    1545: `965`,
    1546: `967`,
    1547: `967`,
    1548: `968`,
    1549: `969`,
    155: `64`,
    1550: `969`,
    1551: `970`,
    1552: `972`,
    1553: `973`,
    1554: `974`,
    1555: `975`,
    1556: `975`,
    1557: `975`,
    1558: `976`,
    1559: `976`,
    156: `65`,
    1560: `977`,
    1561: `978`,
    1562: `979`,
    1563: `981`,
    1564: `981`,
    1565: `982`,
    1566: `982`,
    1567: `983`,
    1568: `984`,
    1569: `985`,
    157: `65`,
    1570: `985`,
    1571: `985`,
    1572: `986`,
    1573: `986`,
    1574: `986`,
    1575: `988`,
    1576: `989`,
    1577: `989`,
    1578: `989`,
    1579: `992`,
    158: `66`,
    1580: `992`,
    1581: `993`,
    1582: `993`,
    1583: `994`,
    1584: `995`,
    1585: `996`,
    1586: `997`,
    1587: `997`,
    1588: `998`,
    1589: `999`,
    159: `66`,
    1590: `999`,
    1591: `1000`,
    1592: `1000`,
    1593: `1001`,
    1594: `1001`,
    1595: `1002`,
    1596: `1003`,
    1597: `1004`,
    1598: `1004`,
    1599: `1005`,
    16: `2`,
    160: `66`,
    1600: `1006`,
    1601: `1007`,
    1602: `1008`,
    1603: `1008`,
    1604: `1009`,
    1605: `1010`,
    1606: `1011`,
    1607: `1013`,
    1608: `1014`,
    1609: `1014`,
    161: `66`,
    1610: `1015`,
    1611: `1015`,
    1612: `1015`,
    1613: `1017`,
    1614: `1018`,
    1615: `1019`,
    1616: `1020`,
    1617: `1020`,
    1618: `1020`,
    1619: `1021`,
    162: `66`,
    1620: `1021`,
    1621: `1022`,
    1622: `1022`,
    1623: `1022`,
    1624: `1023`,
    163: `66`,
    164: `67`,
    165: `67`,
    166: `68`,
    167: `69`,
    168: `70`,
    169: `70`,
    17: `2`,
    170: `71`,
    171: `72`,
    172: `74`,
    173: `74`,
    174: `75`,
    175: `75`,
    176: `75`,
    177: `77`,
    178: `77`,
    179: `78`,
    18: `2`,
    180: `79`,
    181: `79`,
    182: `80`,
    183: `81`,
    184: `82`,
    185: `82`,
    186: `83`,
    187: `83`,
    188: `84`,
    189: `84`,
    19: `2`,
    190: `85`,
    191: `86`,
    192: `86`,
    193: `87`,
    194: `87`,
    195: `88`,
    196: `88`,
    197: `88`,
    198: `91`,
    199: `91`,
    2: `2`,
    20: `2`,
    200: `92`,
    201: `93`,
    202: `94`,
    203: `95`,
    204: `95`,
    205: `96`,
    206: `96`,
    207: `97`,
    208: `98`,
    209: `98`,
    21: `2`,
    210: `99`,
    211: `100`,
    212: `106`,
    213: `106`,
    214: `107`,
    215: `107`,
    216: `107`,
    217: `108`,
    218: `109`,
    219: `109`,
    22: `2`,
    220: `110`,
    221: `111`,
    222: `112`,
    223: `113`,
    224: `113`,
    225: `114`,
    226: `114`,
    227: `115`,
    228: `116`,
    229: `123`,
    23: `2`,
    230: `124`,
    231: `125`,
    232: `126`,
    233: `126`,
    234: `127`,
    235: `128`,
    236: `128`,
    237: `128`,
    238: `129`,
    239: `130`,
    24: `2`,
    240: `131`,
    241: `132`,
    242: `133`,
    243: `133`,
    244: `133`,
    245: `134`,
    246: `134`,
    247: `135`,
    248: `135`,
    249: `136`,
    25: `4`,
    250: `136`,
    251: `137`,
    252: `137`,
    253: `138`,
    254: `139`,
    255: `140`,
    256: `140`,
    257: `141`,
    258: `141`,
    259: `142`,
    26: `4`,
    260: `142`,
    261: `143`,
    262: `143`,
    263: `145`,
    264: `145`,
    265: `146`,
    266: `146`,
    267: `147`,
    268: `147`,
    269: `147`,
    27: `5`,
    270: `148`,
    271: `148`,
    272: `149`,
    273: `149`,
    274: `149`,
    275: `150`,
    276: `150`,
    277: `151`,
    278: `151`,
    279: `152`,
    28: `5`,
    280: `152`,
    281: `153`,
    282: `154`,
    283: `154`,
    284: `155`,
    285: `156`,
    286: `156`,
    287: `157`,
    288: `157`,
    289: `157`,
    29: `5`,
    290: `158`,
    291: `159`,
    292: `159`,
    293: `160`,
    294: `160`,
    295: `160`,
    296: `161`,
    297: `162`,
    298: `162`,
    299: `163`,
    3: `2`,
    30: `6`,
    300: `164`,
    301: `165`,
    302: `165`,
    303: `166`,
    304: `167`,
    305: `168`,
    306: `168`,
    307: `169`,
    308: `169`,
    309: `169`,
    31: `7`,
    310: `169`,
    311: `169`,
    312: `169`,
    313: `169`,
    314: `169`,
    315: `169`,
    316: `169`,
    317: `170`,
    318: `170`,
    319: `171`,
    32: `8`,
    320: `172`,
    321: `173`,
    322: `173`,
    323: `174`,
    324: `174`,
    325: `175`,
    326: `175`,
    327: `176`,
    328: `176`,
    329: `177`,
    33: `9`,
    330: `177`,
    331: `178`,
    332: `178`,
    333: `179`,
    334: `179`,
    335: `180`,
    336: `180`,
    337: `181`,
    338: `181`,
    339: `182`,
    34: `10`,
    340: `182`,
    341: `184`,
    342: `184`,
    343: `185`,
    344: `185`,
    345: `185`,
    346: `186`,
    347: `187`,
    348: `188`,
    349: `189`,
    35: `11`,
    350: `190`,
    351: `190`,
    352: `190`,
    353: `192`,
    354: `192`,
    355: `193`,
    356: `193`,
    357: `194`,
    358: `195`,
    359: `196`,
    36: `11`,
    360: `196`,
    361: `197`,
    362: `198`,
    363: `199`,
    364: `199`,
    365: `200`,
    366: `201`,
    367: `202`,
    368: `202`,
    369: `203`,
    37: `12`,
    370: `204`,
    371: `204`,
    372: `205`,
    373: `206`,
    374: `207`,
    375: `207`,
    376: `208`,
    377: `209`,
    378: `210`,
    379: `210`,
    38: `13`,
    380: `211`,
    381: `211`,
    382: `213`,
    383: `213`,
    384: `214`,
    385: `214`,
    386: `215`,
    387: `216`,
    388: `217`,
    389: `217`,
    39: `14`,
    390: `217`,
    391: `218`,
    392: `219`,
    393: `220`,
    394: `220`,
    395: `221`,
    396: `222`,
    397: `222`,
    398: `223`,
    399: `224`,
    4: `2`,
    40: `14`,
    400: `225`,
    401: `226`,
    402: `226`,
    403: `227`,
    404: `228`,
    405: `229`,
    406: `231`,
    407: `231`,
    408: `231`,
    409: `233`,
    41: `15`,
    410: `233`,
    411: `234`,
    412: `234`,
    413: `234`,
    414: `236`,
    415: `236`,
    416: `236`,
    417: `236`,
    418: `236`,
    419: `236`,
    42: `16`,
    420: `237`,
    421: `237`,
    422: `238`,
    423: `239`,
    424: `241`,
    425: `242`,
    426: `244`,
    427: `244`,
    428: `244`,
    429: `245`,
    43: `18`,
    430: `246`,
    431: `246`,
    432: `248`,
    433: `249`,
    434: `250`,
    435: `250`,
    436: `251`,
    437: `252`,
    438: `253`,
    439: `253`,
    44: `18`,
    440: `255`,
    441: `255`,
    442: `256`,
    443: `256`,
    444: `257`,
    445: `258`,
    446: `260`,
    447: `261`,
    448: `261`,
    449: `261`,
    45: `18`,
    450: `262`,
    451: `262`,
    452: `263`,
    453: `264`,
    454: `265`,
    455: `266`,
    456: `266`,
    457: `267`,
    458: `268`,
    459: `268`,
    46: `18`,
    460: `269`,
    461: `270`,
    462: `270`,
    463: `271`,
    464: `272`,
    465: `272`,
    466: `272`,
    467: `273`,
    468: `273`,
    469: `274`,
    47: `18`,
    470: `274`,
    471: `275`,
    472: `276`,
    473: `276`,
    474: `277`,
    475: `277`,
    476: `278`,
    477: `279`,
    478: `280`,
    479: `280`,
    48: `18`,
    480: `281`,
    481: `281`,
    482: `282`,
    483: `282`,
    484: `282`,
    485: `283`,
    486: `283`,
    487: `284`,
    488: `284`,
    489: `284`,
    49: `18`,
    490: `284`,
    491: `284`,
    492: `284`,
    493: `285`,
    494: `285`,
    495: `286`,
    496: `287`,
    497: `288`,
    498: `288`,
    499: `289`,
    5: `2`,
    50: `18`,
    500: `290`,
    501: `292`,
    502: `292`,
    503: `293`,
    504: `293`,
    505: `293`,
    506: `295`,
    507: `295`,
    508: `296`,
    509: `296`,
    51: `18`,
    510: `296`,
    511: `297`,
    512: `297`,
    513: `298`,
    514: `298`,
    515: `299`,
    516: `299`,
    517: `300`,
    518: `301`,
    519: `302`,
    52: `18`,
    520: `303`,
    521: `304`,
    522: `305`,
    523: `306`,
    524: `306`,
    525: `307`,
    526: `307`,
    527: `308`,
    528: `308`,
    529: `309`,
    53: `18`,
    530: `310`,
    531: `310`,
    532: `313`,
    533: `313`,
    534: `314`,
    535: `314`,
    536: `315`,
    537: `316`,
    538: `317`,
    539: `318`,
    54: `18`,
    540: `318`,
    541: `319`,
    542: `320`,
    543: `320`,
    544: `321`,
    545: `321`,
    546: `322`,
    547: `322`,
    548: `323`,
    549: `324`,
    55: `18`,
    550: `325`,
    551: `325`,
    552: `326`,
    553: `326`,
    554: `327`,
    555: `328`,
    556: `329`,
    557: `329`,
    558: `330`,
    559: `330`,
    56: `18`,
    560: `331`,
    561: `332`,
    562: `333`,
    563: `333`,
    564: `334`,
    565: `335`,
    566: `339`,
    567: `340`,
    568: `341`,
    569: `342`,
    57: `18`,
    570: `342`,
    571: `343`,
    572: `344`,
    573: `344`,
    574: `344`,
    575: `345`,
    576: `346`,
    577: `347`,
    578: `348`,
    579: `349`,
    58: `18`,
    580: `355`,
    581: `355`,
    582: `356`,
    583: `357`,
    584: `357`,
    585: `358`,
    586: `359`,
    587: `365`,
    588: `365`,
    589: `366`,
    59: `18`,
    590: `366`,
    591: `366`,
    592: `367`,
    593: `367`,
    594: `368`,
    595: `368`,
    596: `369`,
    597: `369`,
    598: `370`,
    599: `371`,
    6: `2`,
    60: `18`,
    600: `372`,
    601: `373`,
    602: `374`,
    603: `375`,
    604: `376`,
    605: `376`,
    606: `377`,
    607: `377`,
    608: `378`,
    609: `379`,
    61: `18`,
    610: `379`,
    611: `380`,
    612: `380`,
    613: `380`,
    614: `381`,
    615: `381`,
    616: `382`,
    617: `382`,
    618: `383`,
    619: `383`,
    62: `18`,
    620: `384`,
    621: `385`,
    622: `386`,
    623: `387`,
    624: `388`,
    625: `389`,
    626: `390`,
    627: `390`,
    628: `391`,
    629: `391`,
    63: `18`,
    630: `392`,
    631: `393`,
    632: `393`,
    633: `394`,
    634: `394`,
    635: `394`,
    636: `395`,
    637: `395`,
    638: `396`,
    639: `396`,
    64: `18`,
    640: `397`,
    641: `398`,
    642: `399`,
    643: `399`,
    644: `400`,
    645: `401`,
    646: `401`,
    647: `402`,
    648: `402`,
    649: `402`,
    65: `18`,
    650: `403`,
    651: `404`,
    652: `404`,
    653: `405`,
    654: `405`,
    655: `405`,
    656: `406`,
    657: `407`,
    658: `407`,
    659: `408`,
    66: `18`,
    660: `409`,
    661: `410`,
    662: `410`,
    663: `411`,
    664: `412`,
    665: `413`,
    666: `413`,
    667: `414`,
    668: `414`,
    669: `414`,
    67: `18`,
    670: `414`,
    671: `414`,
    672: `414`,
    673: `414`,
    674: `414`,
    675: `414`,
    676: `414`,
    677: `415`,
    678: `415`,
    679: `416`,
    68: `18`,
    680: `417`,
    681: `418`,
    682: `418`,
    683: `419`,
    684: `419`,
    685: `420`,
    686: `420`,
    687: `421`,
    688: `421`,
    689: `422`,
    69: `18`,
    690: `422`,
    691: `423`,
    692: `423`,
    693: `424`,
    694: `424`,
    695: `425`,
    696: `425`,
    697: `427`,
    698: `427`,
    699: `428`,
    7: `2`,
    70: `18`,
    700: `428`,
    701: `428`,
    702: `429`,
    703: `430`,
    704: `430`,
    705: `431`,
    706: `432`,
    707: `433`,
    708: `434`,
    709: `435`,
    71: `18`,
    710: `435`,
    711: `435`,
    712: `437`,
    713: `437`,
    714: `438`,
    715: `438`,
    716: `439`,
    717: `440`,
    718: `441`,
    719: `441`,
    72: `18`,
    720: `442`,
    721: `443`,
    722: `444`,
    723: `444`,
    724: `445`,
    725: `446`,
    726: `446`,
    727: `447`,
    728: `448`,
    729: `449`,
    73: `18`,
    730: `449`,
    731: `450`,
    732: `451`,
    733: `452`,
    734: `452`,
    735: `453`,
    736: `453`,
    737: `454`,
    738: `454`,
    739: `454`,
    74: `18`,
    740: `456`,
    741: `456`,
    742: `457`,
    743: `457`,
    744: `458`,
    745: `458`,
    746: `459`,
    747: `460`,
    748: `461`,
    749: `461`,
    75: `19`,
    750: `462`,
    751: `462`,
    752: `463`,
    753: `464`,
    754: `465`,
    755: `465`,
    756: `466`,
    757: `466`,
    758: `467`,
    759: `467`,
    76: `19`,
    760: `468`,
    761: `469`,
    762: `469`,
    763: `470`,
    764: `470`,
    765: `471`,
    766: `471`,
    767: `471`,
    768: `472`,
    769: `472`,
    77: `19`,
    770: `473`,
    771: `473`,
    772: `474`,
    773: `474`,
    774: `474`,
    775: `475`,
    776: `475`,
    777: `476`,
    778: `476`,
    779: `477`,
    78: `20`,
    780: `477`,
    781: `477`,
    782: `478`,
    783: `478`,
    784: `479`,
    785: `479`,
    786: `480`,
    787: `480`,
    788: `480`,
    789: `481`,
    79: `20`,
    790: `481`,
    791: `482`,
    792: `482`,
    793: `483`,
    794: `483`,
    795: `483`,
    796: `484`,
    797: `485`,
    798: `485`,
    799: `486`,
    8: `2`,
    80: `20`,
    800: `486`,
    801: `486`,
    802: `486`,
    803: `486`,
    804: `486`,
    805: `487`,
    806: `487`,
    807: `488`,
    808: `489`,
    809: `490`,
    81: `20`,
    810: `490`,
    811: `491`,
    812: `492`,
    813: `493`,
    814: `493`,
    815: `494`,
    816: `495`,
    817: `496`,
    818: `496`,
    819: `497`,
    82: `20`,
    820: `498`,
    821: `498`,
    822: `499`,
    823: `500`,
    824: `500`,
    825: `501`,
    826: `502`,
    827: `502`,
    828: `503`,
    829: `504`,
    83: `20`,
    830: `504`,
    831: `505`,
    832: `505`,
    833: `505`,
    834: `506`,
    835: `507`,
    836: `507`,
    837: `508`,
    838: `509`,
    839: `510`,
    84: `20`,
    840: `512`,
    841: `512`,
    842: `513`,
    843: `513`,
    844: `513`,
    845: `514`,
    846: `514`,
    847: `515`,
    848: `516`,
    849: `516`,
    85: `20`,
    850: `517`,
    851: `517`,
    852: `518`,
    853: `518`,
    854: `519`,
    855: `520`,
    856: `525`,
    857: `525`,
    858: `526`,
    859: `527`,
    86: `20`,
    860: `528`,
    861: `533`,
    862: `533`,
    863: `534`,
    864: `534`,
    865: `535`,
    866: `536`,
    867: `541`,
    868: `541`,
    869: `542`,
    87: `20`,
    870: `543`,
    871: `544`,
    872: `549`,
    873: `549`,
    874: `550`,
    875: `550`,
    876: `550`,
    877: `551`,
    878: `552`,
    879: `553`,
    88: `20`,
    880: `553`,
    881: `554`,
    882: `554`,
    883: `555`,
    884: `555`,
    885: `556`,
    886: `556`,
    887: `557`,
    888: `557`,
    889: `558`,
    89: `20`,
    890: `559`,
    891: `559`,
    892: `560`,
    893: `560`,
    894: `561`,
    895: `561`,
    896: `562`,
    897: `562`,
    898: `563`,
    899: `563`,
    9: `2`,
    90: `20`,
    900: `564`,
    901: `564`,
    902: `565`,
    903: `565`,
    904: `566`,
    905: `566`,
    906: `567`,
    907: `567`,
    908: `568`,
    909: `568`,
    91: `20`,
    910: `569`,
    911: `569`,
    912: `570`,
    913: `571`,
    914: `571`,
    915: `572`,
    916: `572`,
    917: `573`,
    918: `573`,
    919: `573`,
    92: `22`,
    920: `573`,
    921: `573`,
    922: `573`,
    923: `573`,
    924: `573`,
    925: `573`,
    926: `573`,
    927: `574`,
    928: `574`,
    929: `575`,
    93: `24`,
    930: `576`,
    931: `577`,
    932: `578`,
    933: `578`,
    934: `579`,
    935: `579`,
    936: `580`,
    937: `580`,
    938: `581`,
    939: `582`,
    94: `24`,
    940: `582`,
    941: `582`,
    942: `583`,
    943: `583`,
    944: `584`,
    945: `585`,
    946: `585`,
    947: `586`,
    948: `586`,
    949: `587`,
    95: `24`,
    950: `588`,
    951: `588`,
    952: `589`,
    953: `590`,
    954: `590`,
    955: `590`,
    956: `591`,
    957: `591`,
    958: `592`,
    959: `593`,
    96: `25`,
    960: `593`,
    961: `594`,
    962: `594`,
    963: `595`,
    964: `596`,
    965: `596`,
    966: `597`,
    967: `598`,
    968: `598`,
    969: `598`,
    97: `25`,
    970: `599`,
    971: `600`,
    972: `600`,
    973: `601`,
    974: `601`,
    975: `602`,
    976: `603`,
    977: `603`,
    978: `604`,
    979: `604`,
    98: `27`,
    980: `604`,
    981: `605`,
    982: `606`,
    983: `606`,
    984: `607`,
    985: `608`,
    986: `609`,
    987: `610`,
    988: `610`,
    989: `611`,
    99: `28`,
    990: `611`,
    991: `612`,
    992: `613`,
    993: `616`,
    994: `616`,
    995: `617`,
    996: `618`,
    997: `619`,
    998: `620`,
    999: `620`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 98,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:70:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:139:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:139:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:107:34:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:80:32:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "ATTENDEE_buy": ATTENDEE_buy,
  "ATTENDEE_redeem": ATTENDEE_redeem,
  "CREATOR": CREATOR
  };
export const _APIs = {
  ATTENDEE: {
    buy: ATTENDEE_buy,
    redeem: ATTENDEE_redeem
    }
  };
