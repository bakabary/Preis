var _0x5603b7=_0x200b;(function(_0x5e9e62,_0x5db138){var _0x5b5d76=_0x200b,_0x153a42=_0x5e9e62();while(!![]){try{var _0x31b199=-parseInt(_0x5b5d76(0xf6))/0x1*(parseInt(_0x5b5d76(0xc9))/0x2)+-parseInt(_0x5b5d76(0xfd))/0x3+parseInt(_0x5b5d76(0xe2))/0x4*(-parseInt(_0x5b5d76(0xbd))/0x5)+-parseInt(_0x5b5d76(0xd8))/0x6*(parseInt(_0x5b5d76(0xc2))/0x7)+parseInt(_0x5b5d76(0xc5))/0x8*(-parseInt(_0x5b5d76(0x104))/0x9)+-parseInt(_0x5b5d76(0xc1))/0xa*(-parseInt(_0x5b5d76(0xc7))/0xb)+parseInt(_0x5b5d76(0xea))/0xc;if(_0x31b199===_0x5db138)break;else _0x153a42['push'](_0x153a42['shift']());}catch(_0x2792b9){_0x153a42['push'](_0x153a42['shift']());}}}(_0x2f0a,0x46944),(function(){var _0x5e16ea=_0x200b;let _0x49359e;function _0x59abf9(){var _0x196a94=_0x200b;if(!_0x49359e)_0x49359e=Object[_0x196a94(0xc0)](GAME)[_0x196a94(0xba)](_0x54d9bb=>GAME[_0x54d9bb]&&GAME[_0x54d9bb]['1_1']);return _0x49359e;}Object[_0x5e16ea(0xbf)](GAME,'mapcell',{'get':function(){return GAME[_0x59abf9()];}});}()),GAME[_0x5603b7(0x105)]=_0xf990c0=>GAME['socket'][_0x5603b7(0xd3)]('ga',_0xf990c0));var BOT={'Stop':!![],'Matrix':[],'Map':0x0,'Path':[],'Born':0x2,'Killed':![]};$('body')[_0x5603b7(0xed)](_0x5603b7(0xe8)),$(_0x5603b7(0xf4))['click'](()=>{var _0x1c4d7a=_0x5603b7;BOT[_0x1c4d7a(0xec)]?($('#BOT_control\x20.bt_button')['html'](_0x1c4d7a(0xfe)),BOT[_0x1c4d7a(0xec)]=![],BOT[_0x1c4d7a(0xf1)]()):($(_0x1c4d7a(0xf4))[_0x1c4d7a(0x100)](_0x1c4d7a(0xd0)),BOT[_0x1c4d7a(0xec)]=!![]);}),$(_0x5603b7(0xee))['on']('click',_0x5603b7(0xe0),function(){var _0x53184e=_0x5603b7;BOT['Stop']?($('[id=select_born]')['removeClass']('red'),$(this)[_0x53184e(0xce)](_0x53184e(0xf8)),BOT[_0x53184e(0xb9)]=parseInt($(this)[_0x53184e(0xf0)](_0x53184e(0x102)))):GAME['komunikat']('<h1>Musisz\x20najpierw\x20zatrzymać\x20skrypt!<h1>');}),BOT[_0x5603b7(0xf1)]=function(){var _0x414814=_0x5603b7;BOT[_0x414814(0xe9)]();},BOT[_0x5603b7(0xef)]=function(){var _0x264eb0=_0x5603b7;BOT[_0x264eb0(0xbe)]=[],BOT[_0x264eb0(0x101)]=GAME[_0x264eb0(0xbc)];for(var _0x2b1292=0x0;_0x2b1292<parseInt(GAME['map']['max_y']);_0x2b1292++){BOT[_0x264eb0(0xbe)][_0x2b1292]=[];for(var _0x56648e=0x0;_0x56648e<parseInt(GAME[_0x264eb0(0xf7)]['max_x']);_0x56648e++){BOT[_0x264eb0(0x101)][parseInt(_0x56648e+0x1)+'_'+parseInt(_0x2b1292+0x1)]['m']==0x1?BOT[_0x264eb0(0xbe)][_0x2b1292][_0x56648e]=0x1:BOT[_0x264eb0(0xbe)][_0x2b1292][_0x56648e]=0x0;}}},BOT[_0x5603b7(0xe9)]=function(){var _0x49d98a=_0x5603b7;GAME[_0x49d98a(0x105)]({'a':0x20,'type':0x0});},BOT[_0x5603b7(0xdf)]=function(){var _0x1b5b92=_0x5603b7;console[_0x1b5b92(0xd7)](_0x1b5b92(0xfa)),console[_0x1b5b92(0xd7)](document['getElementById']('special_list_con')[_0x1b5b92(0xbb)]),document[_0x1b5b92(0xe6)]('special_list_con')[_0x1b5b92(0xbb)]&&(console[_0x1b5b92(0xd7)](_0x1b5b92(0xd9)),BOT[_0x1b5b92(0xd5)]=!![],GAME[_0x1b5b92(0x105)]({'a':0x20,'type':0x1,'wanted_id':BOT['Born'],'quick':0x1}));},BOT[_0x5603b7(0xff)]=function(){var _0x5d2a74=_0x5603b7;GAME[_0x5d2a74(0x105)]({'a':0x20,'type':0x2,'wanted':BOT[_0x5d2a74(0xb9)]});},BOT[_0x5603b7(0xd4)]=function(){var _0x491126=_0x5603b7;loc=parseInt(document[_0x491126(0xe1)](_0x491126(0xdb))[BOT[_0x491126(0xb9)]+0x1][_0x491126(0xe5)](_0x491126(0xcd))['value']),GAME[_0x491126(0xe4)]!=loc?(GAME[_0x491126(0x105)]({'a':0xc,'type':0x12,'loc':loc}),setTimeout(0xbb8)):BOT['Go']();},BOT['Go']=function(){var _0x3ac458=_0x5603b7;BOT[_0x3ac458(0xef)](),BOT[_0x3ac458(0xcf)]['setGrid'](BOT[_0x3ac458(0xbe)]),PathID=BOT['Finder'][_0x3ac458(0xfc)](GAME[_0x3ac458(0xe4)]['x']-0x1,GAME[_0x3ac458(0xe4)]['y']-0x1,parseInt(GAME[_0x3ac458(0x103)]['x'])-0x1,parseInt(GAME['map_wanteds']['y'])-0x1,function(_0x48d756){var _0x8fc9e5=_0x3ac458;_0x48d756===null?console[_0x8fc9e5(0xd7)](_0x8fc9e5(0xc4)):(_0x48d756[0x0]['x']==GAME[_0x8fc9e5(0xe4)]['x']-0x1&&_0x48d756[0x0]['y']==GAME[_0x8fc9e5(0xe4)]['y']-0x1&&_0x48d756['shift'](),BOT['Path']=_0x48d756,BOT[_0x8fc9e5(0xf2)]());}),BOT[_0x3ac458(0xcf)]['calculate']();},BOT['Move']=function(){var _0x5591b9=_0x5603b7;if(!BOT[_0x5591b9(0xca)]){if(BOT['Path'][0x0]['x']>GAME['char_data']['x']-0x1&&BOT[_0x5591b9(0xf9)][0x0]['y']==GAME['char_data']['y']-0x1)GAME['emitOrder']({'a':0x4,'dir':0x7,'vo':GAME[_0x5591b9(0xe3)]['vo']});else{if(BOT[_0x5591b9(0xf9)][0x0]['x']<GAME[_0x5591b9(0xe4)]['x']-0x1&&BOT[_0x5591b9(0xf9)][0x0]['y']==GAME[_0x5591b9(0xe4)]['y']-0x1)GAME[_0x5591b9(0x105)]({'a':0x4,'dir':0x8,'vo':GAME[_0x5591b9(0xe3)]['vo']});else{if(BOT[_0x5591b9(0xf9)][0x0]['x']==GAME[_0x5591b9(0xe4)]['x']-0x1&&BOT['Path'][0x0]['y']>GAME[_0x5591b9(0xe4)]['y']-0x1)GAME['emitOrder']({'a':0x4,'dir':0x1,'vo':GAME[_0x5591b9(0xe3)]['vo']});else{if(BOT[_0x5591b9(0xf9)][0x0]['x']==GAME[_0x5591b9(0xe4)]['x']-0x1&&BOT[_0x5591b9(0xf9)][0x0]['y']<GAME['char_data']['y']-0x1)GAME['emitOrder']({'a':0x4,'dir':0x2,'vo':GAME[_0x5591b9(0xe3)]['vo']});else{if(BOT['Path'][0x0]['x']>GAME['char_data']['x']-0x1&&BOT[_0x5591b9(0xf9)][0x0]['y']>GAME[_0x5591b9(0xe4)]['y']-0x1)GAME[_0x5591b9(0x105)]({'a':0x4,'dir':0x3,'vo':GAME[_0x5591b9(0xe3)]['vo']});else{if(BOT[_0x5591b9(0xf9)][0x0]['x']<GAME[_0x5591b9(0xe4)]['x']-0x1&&BOT['Path'][0x0]['y']<GAME[_0x5591b9(0xe4)]['y']-0x1)GAME[_0x5591b9(0x105)]({'a':0x4,'dir':0x6,'vo':GAME[_0x5591b9(0xe3)]['vo']});else{if(BOT[_0x5591b9(0xf9)][0x0]['x']>GAME[_0x5591b9(0xe4)]['x']-0x1&&BOT[_0x5591b9(0xf9)][0x0]['y']<GAME[_0x5591b9(0xe4)]['y']-0x1)GAME[_0x5591b9(0x105)]({'a':0x4,'dir':0x5,'vo':GAME[_0x5591b9(0xe3)]['vo']});else BOT['Path'][0x0]['x']<GAME[_0x5591b9(0xe4)]['x']-0x1&&BOT[_0x5591b9(0xf9)][0x0]['y']>GAME[_0x5591b9(0xe4)]['y']-0x1?GAME[_0x5591b9(0x105)]({'a':0x4,'dir':0x4,'vo':GAME[_0x5591b9(0xe3)]['vo']}):BOT['Go']();}}}}}}}},BOT[_0x5603b7(0xfb)]=function(){var _0x5b1827=_0x5603b7;BOT[_0x5b1827(0xf9)]['length']-0x1>0x0?(BOT[_0x5b1827(0xf9)]['shift'](),BOT[_0x5b1827(0xf2)]()):setTimeout(function(){var _0x3849de=_0x5b1827;BOT[_0x3849de(0xdf)]();},0x1f4);},BOT[_0x5603b7(0xda)]=function(_0x4b2ecf){var _0x106fcf=_0x5603b7;if(!BOT[_0x106fcf(0xec)]&&_0x4b2ecf['a']===0x4&&_0x4b2ecf[_0x106fcf(0xd2)]===GAME['char_id'])BOT[_0x106fcf(0xfb)]();else{if(!BOT[_0x106fcf(0xec)]&&_0x4b2ecf['a']===0x20&&_0x4b2ecf['e']==0x0)$('button[data-wanted=\x22'+BOT[_0x106fcf(0xb9)]+'\x22]')['html']()?GAME[_0x106fcf(0x105)]({'a':0x20,'type':0x2,'wanted':BOT[_0x106fcf(0xb9)]}):BOT[_0x106fcf(0xd4)]();else{if(!BOT[_0x106fcf(0xec)]&&BOT['Killed']&&_0x4b2ecf['a']===0x25a&&!_0x4b2ecf['res'][_0x106fcf(0x106)])BOT[_0x106fcf(0xd5)]=![],BOT['Collect']();else{if(!BOT[_0x106fcf(0xec)]&&_0x4b2ecf['a']===0x20&&_0x4b2ecf['e']==0x2)BOT[_0x106fcf(0xd4)]();else{if(!BOT['Stop']&&_0x4b2ecf['a']===0xc)GAME[_0x106fcf(0xe4)]['x']==GAME['map_wanteds']['x']&&GAME[_0x106fcf(0xe4)]['y']==GAME['map_wanteds']['y']?setTimeout(function(){var _0x2e49b9=_0x106fcf;BOT[_0x2e49b9(0xdf)]();},0x1f4):setTimeout(function(){BOT['Go']();},0x3e8);else!BOT[_0x106fcf(0xca)]&&_0x4b2ecf['a']===undefined&&setTimeout(()=>{BOT['Go']();},0x1f4);}}}}},GAME[_0x5603b7(0xde)]['on']('gr',function(_0x3b25e0){var _0x549781=_0x5603b7;BOT[_0x549781(0xda)](_0x3b25e0);});const bot_auth=[0x6d87f,0x72d46];!bot_auth[_0x5603b7(0xe7)](GAME[_0x5603b7(0x107)])&&($('#BOT_control')[_0x5603b7(0xf3)](),delete BOT,GAME[_0x5603b7(0xde)][_0x5603b7(0xcc)](),location[_0x5603b7(0xd6)]=_0x5603b7(0xf5));function _0x200b(_0x3e067b,_0x1b13be){var _0x2f0a40=_0x2f0a();return _0x200b=function(_0x200b03,_0x345b3e){_0x200b03=_0x200b03-0xb9;var _0x54e383=_0x2f0a40[_0x200b03];return _0x54e383;},_0x200b(_0x3e067b,_0x1b13be);}BOT[_0x5603b7(0xdc)]=(function(){var _0x4f799d=_0x5603b7;esjs=document[_0x4f799d(0xcb)]('script'),esjs[_0x4f799d(0xc3)]='https://cdn.jsdelivr.net/npm/easystarjs@0.4.3/bin/easystar-0.4.3.min.js',esjs[_0x4f799d(0xc8)]=()=>{var _0x94c89b=_0x4f799d;BOT['Finder']=new EasyStar['js'](),BOT['Finder'][_0x94c89b(0xc6)](),BOT[_0x94c89b(0xcf)][_0x94c89b(0xdd)]([0x1]),$('#BOT_control')[_0x94c89b(0xd1)]();},document[_0x4f799d(0xeb)][_0x4f799d(0xed)](esjs);}());function _0x2f0a(){var _0x31d0c6=['map_options','char_data','getAttributeNode','getElementById','includes','<div\x20id=\x22BOT_control\x22\x20style=\x22display:none;min-width:100px;\x20padding:5px;\x20border:solid\x20gray\x201px;\x20background:rgba(22,\x2022,\x2093,\x200.81);\x20color:gold;\x20position:\x20fixed;\x20top:\x2040px;\x20right:\x205px;\x20z-index:5;\x20text-align:center;\x22><div\x20class=\x22bt_button\x22\x20style=\x22cursor:pointer;text-align:center;\x20border-bottom:solid\x20gray\x201px;\x22>START</div><div\x20id=\x22select_born\x22\x20class=\x22pointer\x20red\x22\x20born=\x222\x22>G</div><div\x20id=\x22select_born\x22\x20class=\x22pointer\x22\x20born=\x223\x22>U</div><div\x20id=\x22select_born\x22\x20class=\x22pointer\x22\x20born=\x224\x22>S</div><div\x20id=\x22select_born\x22\x20class=\x22pointer\x22\x20born=\x225\x22>H</div></div>','LoadPVM','11382372dSlFFw','head','Stop','append','body','CreateMatrix','attr','Start','Move','remove','#BOT_control\x20.bt_button','https://kosmiczni.pl/rules','7eOtIcJ','map','red','Path','out\x20emit\x20kill','Next','findPath','134244sOwVmv','STOP','Collect','html','Map','born','map_wanteds','9lCVsFk','emitOrder','wanted','pid','Born','find','childElementCount','mapcell','18345VPBBOk','Matrix','defineProperty','keys','686210NDKYqM','385wPWYzT','src','Path\x20was\x20not\x20found','529224OaBnox','enableDiagonals','55UbLSIz','onload','74500CMUuHj','stop','createElement','disconnect','data-loc','addClass','Finder','START','show','char_id','emit','Teleport','Killed','href','log','52014sxorSM','emit\x20kill','HandleSockets','green\x20option','LoadES','setAcceptableTiles','socket','KillWanted','#select_born','getElementsByClassName','168ELMIVI'];_0x2f0a=function(){return _0x31d0c6;};return _0x2f0a();}