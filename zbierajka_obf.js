var _0x2bb2d=_0x1bba;function _0x46d8(){var _0x24840a=['every','finder','max_x','#BOT_mines\x20.select_mine','char_data','show','Next','map_mines','#BOT_control\x20.bt_button','includes','#BOT_control\x20.bt_button_res','html','loadMapJson','Zatrzymaj\x20najpierw\x20skrypt!','body','mines','defineProperty','name','#BOT_control','each','112CGXWMh','path','4647060esdOoM','shift','split','FindMapcell','map_options','src','script','entries','head','prepareMines','socket','11146HyKVaU','coords','append','Mine','quest_action_qid','Action','last','stop','color:\x20#fff;\x20width:100%;\x20background:\x20#05d30f;\x20padding:\x205px;\x20font-size:20px;','slice','4418700alPwTq','loc','komunikat','<div\x20style=\x27margin-bottom:5px;\x20border-bottom:solid\x20gray\x201px;\x20padding:3px;\x27><input\x20class=\x27select_mine\x27\x20type=\x27checkbox\x27\x20value=\x27','quest_action_max','disconnect','https://cdn.jsdelivr.net/npm/easystarjs@0.4.3/bin/easystar-0.4.3.min.js','last\x20one','9243800lBjhQO','Move','1722360Zyxqdr','setGrid','<div\x20style=\x27margin-bottom:5px;\x20border-bottom:solid\x20gray\x201px;\x20padding:3px;\x27><input\x20class=\x27select_mine\x27\x20type=\x27checkbox\x27\x20checked=\x27true\x27\x20value=\x27','CreateMatrix','matrix','keys','char_id','length','href','</div>','mine_data','clear','LoadES','calculate','%cSkrypt\x20został\x20poprawnie\x20załadowany!','219987SABwOW','getMinesPos','remove','push','click','enableDiagonals','map','createElement','steps_clone','speed','processing','find','320nOrpJK','22bNLeyN','last_loc','last_mine','quest_action','findPath','cdt','refresh_mines','1_1','steps','emitOrder','10213lEzFXV','max_y','#BOT_mines','button[data-mid=\x27','pid','log','GetCooldown','mapcell','HandleResponse','.bt_cool','Start','button[data-option=\x27start_mine\x27]','listMines','#BOT_mines\x20.select_mine:checked','876baliLO','onload','mined_id','disabled','<div\x20id=\x22BOT_mines\x22\x20style=\x22display:none;\x20min-width:100px;\x20padding:5px;\x20border:solid\x20gray\x201px;\x20background:rgba(22,\x2022,\x2093,\x200.81);\x20color:gold;\x20position:\x20fixed;\x20top:\x20120px;\x20right:\x205px;\x20z-index:5;\x22></div>','emit','path\x20not\x20found','getTime','some'];_0x46d8=function(){return _0x24840a;};return _0x46d8();}(function(_0x132c57,_0xf4b3b2){var _0x1611de=_0x1bba,_0x4638=_0x132c57();while(!![]){try{var _0x2ea060=-parseInt(_0x1611de(0x143))/0x1*(-parseInt(_0x1611de(0x172))/0x2)+parseInt(_0x1611de(0x138))/0x3+parseInt(_0x1611de(0x157))/0x4+-parseInt(_0x1611de(0x14d))/0x5+-parseInt(_0x1611de(0x18b))/0x6*(-parseInt(_0x1611de(0x17d))/0x7)+-parseInt(_0x1611de(0x1a8))/0x8*(parseInt(_0x1611de(0x166))/0x9)+-parseInt(_0x1611de(0x155))/0xa*(parseInt(_0x1611de(0x173))/0xb);if(_0x2ea060===_0xf4b3b2)break;else _0x4638['push'](_0x4638['shift']());}catch(_0xe60d0d){_0x4638['push'](_0x4638['shift']());}}}(_0x46d8,0xdc0a2));var BOT={'stop':!![],'last_loc':0x0,'mapcell':![],'matrix':[],'steps':[],'steps_clone':[],'path':[],'processing':![],'mines':[],'last_mine':0x0,'speed':0x64,'mined_id':[],'refresh_mines':!![]};function _0x1bba(_0x5e7838,_0x2feef3){var _0x46d8a2=_0x46d8();return _0x1bba=function(_0x1bbaf1,_0xf66538){_0x1bbaf1=_0x1bbaf1-0x138;var _0x1c7c39=_0x46d8a2[_0x1bbaf1];return _0x1c7c39;},_0x1bba(_0x5e7838,_0x2feef3);}$(_0x2bb2d(0x1a2))[_0x2bb2d(0x145)]('<div\x20id=\x22BOT_control\x22\x20style=\x22display:none;\x20min-width:100px;\x20padding:5px;\x20border:solid\x20gray\x201px;\x20background:rgba(22,\x2022,\x2093,\x200.81);\x20color:gold;\x20position:\x20fixed;\x20top:\x2040px;\x20right:\x205px;\x20z-index:5;\x22><div\x20class=\x22bt_button\x22\x20style=\x22cursor:pointer;text-align:center;\x20border-bottom:solid\x20gray\x201px;\x22>START</div><div\x20class=\x22bt_refresh\x22\x20style=\x22cursor:pointer;text-align:center;\x20border-bottom:solid\x20gray\x201px;\x22>ODŚWIEŻ</div><div\x20class=\x22bt_cool\x22\x20style=\x22text-align:center;\x22></div></div>'),$(_0x2bb2d(0x1a2))['append'](_0x2bb2d(0x18f)),$('#BOT_control\x20.bt_button')[_0x2bb2d(0x16a)](()=>{var _0x50d14d=_0x2bb2d;BOT['stop']?($(_0x50d14d(0x19c))[_0x50d14d(0x19f)]('STOP'),$(_0x50d14d(0x19e))['hide'](),BOT[_0x50d14d(0x14a)]=![],BOT[_0x50d14d(0x187)]()):($(_0x50d14d(0x19c))[_0x50d14d(0x19f)]('START'),$(_0x50d14d(0x19e))[_0x50d14d(0x199)](),$(_0x50d14d(0x186))[_0x50d14d(0x19f)](''),BOT['stop']=!![],clearTimeout(BOT[_0x50d14d(0x178)]));}),$('#BOT_control\x20.bt_refresh')['click'](()=>{var _0x15e793=_0x2bb2d;BOT[_0x15e793(0x14a)]?(BOT[_0x15e793(0x189)](),BOT[_0x15e793(0x167)]()):GAME[_0x15e793(0x14f)](_0x15e793(0x1a1));}),$(_0x2bb2d(0x1a2))['on']('click',_0x2bb2d(0x197),function(){var _0x12a623=_0x2bb2d;BOT[_0x12a623(0x14a)]?(BOT['refresh_mines']=!![],BOT[_0x12a623(0x18d)]=[],$(_0x12a623(0x18a))[_0x12a623(0x1a7)](function(){var _0x370f08=_0x12a623;id=parseInt($(this)['val']()),BOT['mined_id'][_0x370f08(0x169)](id);})):($(this)[_0x12a623(0x16a)](),GAME[_0x12a623(0x14f)](_0x12a623(0x1a1)));}),BOT[_0x2bb2d(0x17c)]=function(_0x1ac766){var _0x42260d=_0x2bb2d;!this[_0x42260d(0x170)]&&(this[_0x42260d(0x170)]=!![],GAME[_0x42260d(0x142)][_0x42260d(0x190)]('ga',_0x1ac766));},GAME['questAction']=function(){var _0x4facc1=_0x2bb2d;this[_0x4facc1(0x176)]&&BOT[_0x4facc1(0x17c)]({'a':0x16,'type':0x7,'id':GAME[_0x4facc1(0x147)],'cnt':GAME[_0x4facc1(0x151)]});},BOT[_0x2bb2d(0x187)]=function(){var _0x212705=_0x2bb2d;this[_0x212705(0x174)]!=GAME[_0x212705(0x198)][_0x212705(0x14e)]&&(Object[_0x212705(0x1a4)](GAME,_0x212705(0x184),{'get':function(){return GAME[BOT['FindMapcell']()];},'enumerable':!![],'configurable':!![]}),this[_0x212705(0x15a)](),this['last_loc']=GAME[_0x212705(0x198)]['loc']),this[_0x212705(0x179)]&&(this[_0x212705(0x167)](),this[_0x212705(0x179)]=![]),this[_0x212705(0x16e)]=this[_0x212705(0x17b)][_0x212705(0x14c)](),this['steps_clone'][0x0][0x0]==GAME[_0x212705(0x198)]['x']&&this[_0x212705(0x16e)][0x0][0x1]==GAME['char_data']['y']&&this['steps_clone'][_0x212705(0x139)](),this['finder'][_0x212705(0x158)](this[_0x212705(0x15b)]),setTimeout(function(){var _0x5484b4=_0x212705;BOT[_0x5484b4(0x148)]();},0x64);},BOT[_0x2bb2d(0x148)]=function(){var _0x13c98b=_0x2bb2d;this['stop']=![],!this[_0x13c98b(0x170)]?this['Go']():setTimeout(function(){var _0x3cde8c=_0x13c98b;BOT[_0x3cde8c(0x148)]();},0x3e8);},BOT[_0x2bb2d(0x183)]=function(){var _0x55517d=_0x2bb2d;return GAME['map_mines'][_0x55517d(0x144)][parseInt(GAME[_0x55517d(0x198)]['x'])+'_'+parseInt(GAME[_0x55517d(0x198)]['y'])][0x0][0x2]>0x0?(cd=GAME[_0x55517d(0x19b)]['coords'][parseInt(GAME[_0x55517d(0x198)]['x'])+'_'+parseInt(GAME[_0x55517d(0x198)]['y'])][0x0][0x2]-GAME[_0x55517d(0x192)](),cd+=0x5,r=cd*0x3e8,$('.bt_cool')[_0x55517d(0x19f)](GAME['showTimer'](r/0x3e8))):r=0x3e8,r;},BOT[_0x2bb2d(0x167)]=function(){var _0x353435=_0x2bb2d;coords=Object[_0x353435(0x13f)](GAME[_0x353435(0x19b)][_0x353435(0x144)]);var _0x481069=[];for(i=0x0;i<coords[_0x353435(0x15e)];i++){this[_0x353435(0x18d)][_0x353435(0x19d)](coords[i][0x1][0x0][0x1])&&_0x481069['push'](coords[i]);}this[_0x353435(0x141)](_0x481069);},BOT[_0x2bb2d(0x141)]=function(_0x48ab30){var _0x393118=_0x2bb2d;this[_0x393118(0x17b)]=[];for(i=0x0;i<_0x48ab30[_0x393118(0x15e)];i++){pos=_0x48ab30[i][0x0][_0x393118(0x13a)]('_'),i==0x0&&(first_mine=[parseInt(pos[0x0]),parseInt(pos[0x1])]),this[_0x393118(0x17b)][_0x393118(0x169)]([parseInt(pos[0x0]),parseInt(pos[0x1])]),this[_0x393118(0x1a3)][pos[0x0]+'_'+pos[0x1]]=_0x48ab30[i][0x1][0x0][0x0],i==0x0&&(this['last_mine']=pos[0x0]+'_'+pos[0x1]);}this[_0x393118(0x17b)][_0x393118(0x169)](first_mine);},BOT[_0x2bb2d(0x189)]=function(){var _0x5889e5=_0x2bb2d;html='',mdt=Object[_0x5889e5(0x13f)](GAME['map_mines'][_0x5889e5(0x161)]);for(i=0x0;i<mdt[_0x5889e5(0x15e)];i++){i==0x0?(BOT[_0x5889e5(0x18d)][_0x5889e5(0x169)](mdt[i][0x1]['id']),html+=_0x5889e5(0x159)+mdt[i][0x1]['id']+'\x27\x20'+(mdt[_0x5889e5(0x15e)]==0x1?_0x5889e5(0x18e):'')+'>\x20'+mdt[i][0x1]['name']+'</div>'):html+=_0x5889e5(0x150)+mdt[i][0x1]['id']+'\x27>\x20'+mdt[i][0x1][_0x5889e5(0x1a5)]+_0x5889e5(0x160);}$(_0x5889e5(0x17f))['html'](html);},BOT[_0x2bb2d(0x13b)]=function(){var _0x519857=_0x2bb2d;return this[_0x519857(0x184)]=Object[_0x519857(0x15c)](GAME)[_0x519857(0x171)](_0x12badb=>GAME[_0x12badb]&&GAME[_0x12badb][_0x519857(0x17a)]),this['mapcell'];},BOT['CreateMatrix']=function(){var _0x5f1adb=_0x2bb2d;for(var _0x2c4a55=0x0;_0x2c4a55<parseInt(GAME[_0x5f1adb(0x16c)][_0x5f1adb(0x17e)]);_0x2c4a55++){this[_0x5f1adb(0x15b)][_0x2c4a55]=[];for(var _0x58852a=0x0;_0x58852a<parseInt(GAME[_0x5f1adb(0x16c)][_0x5f1adb(0x196)]);_0x58852a++){GAME['mapcell'][parseInt(_0x58852a+0x1)+'_'+parseInt(_0x2c4a55+0x1)]['m']==0x1?this[_0x5f1adb(0x15b)][_0x2c4a55][_0x58852a]=0x1:this[_0x5f1adb(0x15b)][_0x2c4a55][_0x58852a]=0x0;}}},BOT[_0x2bb2d(0x146)]=function(){var _0x5d7a39=_0x2bb2d;this[_0x5d7a39(0x17c)]({'a':0x16,'type':0x8,'mid':BOT[_0x5d7a39(0x1a3)][parseInt(GAME[_0x5d7a39(0x198)]['x'])+'_'+parseInt(GAME[_0x5d7a39(0x198)]['y'])]});},BOT['Go']=function(){var _0xa7cd07=_0x2bb2d;if(this[_0xa7cd07(0x16e)][_0xa7cd07(0x15e)]>0x0)this[_0xa7cd07(0x195)][_0xa7cd07(0x177)](GAME[_0xa7cd07(0x198)]['x']-0x1,GAME['char_data']['y']-0x1,this['steps_clone'][0x0][0x0]-0x1,this[_0xa7cd07(0x16e)][0x0][0x1]-0x1,function(_0x3ba11b){var _0x560843=_0xa7cd07;_0x3ba11b===null?console[_0x560843(0x182)](_0x560843(0x191)):(BOT[_0x560843(0x1a9)]=_0x3ba11b,BOT[_0x560843(0x16e)][_0x560843(0x15e)]>0x0&&(BOT[_0x560843(0x1a9)][_0x560843(0x139)](),cur=[GAME[_0x560843(0x198)]['x'],GAME['char_data']['y']],setTimeout(()=>{var _0x369bc7=_0x560843;if(!BOT[_0x369bc7(0x14a)]&&BOT['mines'][parseInt(GAME['char_data']['x'])+'_'+parseInt(GAME[_0x369bc7(0x198)]['y'])]&&$(_0x369bc7(0x180)+BOT['mines'][parseInt(GAME[_0x369bc7(0x198)]['x'])+'_'+parseInt(GAME[_0x369bc7(0x198)]['y'])]+'\x27]')['length']==0x1&&BOT[_0x369bc7(0x17b)][_0x369bc7(0x193)](_0x5550ed=>_0x5550ed['length']==cur[_0x369bc7(0x15e)]&&_0x5550ed[_0x369bc7(0x194)]((_0x24b8d6,_0x405c93)=>cur[_0x405c93]==_0x24b8d6)))setTimeout(function(){BOT['Mine']();},BOT['speed']);else!BOT[_0x369bc7(0x14a)]&&setTimeout(function(){BOT['Move']();},BOT[_0x369bc7(0x16f)]);},0x3e8)));}),this['finder'][_0xa7cd07(0x164)]();else!this[_0xa7cd07(0x14a)]&&GAME[_0xa7cd07(0x198)]['x']+'_'+GAME[_0xa7cd07(0x198)]['y']==this[_0xa7cd07(0x175)]&&(console[_0xa7cd07(0x182)](_0xa7cd07(0x154)),setTimeout(function(){BOT['Mine']();},0x3e8),this[_0xa7cd07(0x178)]=setTimeout(function(){var _0x47301d=_0xa7cd07;GAME[_0x47301d(0x1a0)](function(){var _0x312655=_0x47301d;BOT[_0x312655(0x17c)]({'a':0x3,'vo':GAME[_0x312655(0x13c)]['vo']},0x1);}),setTimeout(function(){var _0x2b61fe=_0x47301d;BOT[_0x2b61fe(0x187)]();},0x7d0),$('.bt_cool')[_0x47301d(0x19f)]('');},this[_0xa7cd07(0x183)]()));},BOT[_0x2bb2d(0x156)]=function(){var _0x56364a=_0x2bb2d;if(!this[_0x56364a(0x14a)]){if(this['path'][0x0]['x']>GAME[_0x56364a(0x198)]['x']-0x1&&this['path'][0x0]['y']==GAME[_0x56364a(0x198)]['y']-0x1)this['emitOrder']({'a':0x4,'dir':0x7,'vo':GAME[_0x56364a(0x13c)]['vo']});else{if(this[_0x56364a(0x1a9)][0x0]['x']<GAME[_0x56364a(0x198)]['x']-0x1&&this[_0x56364a(0x1a9)][0x0]['y']==GAME[_0x56364a(0x198)]['y']-0x1)this[_0x56364a(0x17c)]({'a':0x4,'dir':0x8,'vo':GAME[_0x56364a(0x13c)]['vo']});else{if(this[_0x56364a(0x1a9)][0x0]['x']==GAME[_0x56364a(0x198)]['x']-0x1&&this[_0x56364a(0x1a9)][0x0]['y']>GAME[_0x56364a(0x198)]['y']-0x1)this[_0x56364a(0x17c)]({'a':0x4,'dir':0x1,'vo':GAME['map_options']['vo']});else{if(this[_0x56364a(0x1a9)][0x0]['x']==GAME[_0x56364a(0x198)]['x']-0x1&&this[_0x56364a(0x1a9)][0x0]['y']<GAME[_0x56364a(0x198)]['y']-0x1)this['emitOrder']({'a':0x4,'dir':0x2,'vo':GAME[_0x56364a(0x13c)]['vo']});else{if(this[_0x56364a(0x1a9)][0x0]['x']>GAME[_0x56364a(0x198)]['x']-0x1&&this[_0x56364a(0x1a9)][0x0]['y']>GAME[_0x56364a(0x198)]['y']-0x1)this['emitOrder']({'a':0x4,'dir':0x3,'vo':GAME[_0x56364a(0x13c)]['vo']});else{if(this[_0x56364a(0x1a9)][0x0]['x']<GAME[_0x56364a(0x198)]['x']-0x1&&this[_0x56364a(0x1a9)][0x0]['y']<GAME[_0x56364a(0x198)]['y']-0x1)this[_0x56364a(0x17c)]({'a':0x4,'dir':0x6,'vo':GAME[_0x56364a(0x13c)]['vo']});else{if(this[_0x56364a(0x1a9)][0x0]['x']>GAME[_0x56364a(0x198)]['x']-0x1&&this['path'][0x0]['y']<GAME[_0x56364a(0x198)]['y']-0x1)this[_0x56364a(0x17c)]({'a':0x4,'dir':0x5,'vo':GAME[_0x56364a(0x13c)]['vo']});else this[_0x56364a(0x1a9)][0x0]['x']<GAME[_0x56364a(0x198)]['x']-0x1&&this[_0x56364a(0x1a9)][0x0]['y']>GAME['char_data']['y']-0x1?this[_0x56364a(0x17c)]({'a':0x4,'dir':0x4,'vo':GAME[_0x56364a(0x13c)]['vo']}):this['Go']();}}}}}}}},BOT[_0x2bb2d(0x19a)]=function(){var _0x298219=_0x2bb2d;this['path'][_0x298219(0x15e)]-0x1>0x0?(this[_0x298219(0x1a9)][_0x298219(0x139)](),setTimeout(function(){BOT['Move']();},this['speed'])):this[_0x298219(0x16e)][_0x298219(0x15e)]>0x0&&(this['steps_clone'][_0x298219(0x139)](),this['Go']());},BOT['HandleResponse']=function(_0x556874){var _0x5d6fa5=_0x2bb2d;this[_0x5d6fa5(0x170)]=![];if(!this[_0x5d6fa5(0x14a)]&&_0x556874['a']===0x4&&_0x556874[_0x5d6fa5(0x15d)]===GAME[_0x5d6fa5(0x15d)])BOT['Next']();else!this['stop']&&_0x556874['done']&&_0x556874['a']===0x16&&($(_0x5d6fa5(0x188))[_0x5d6fa5(0x168)](),BOT['Go']());},GAME[_0x2bb2d(0x142)]['on']('gr',function(_0x4a223f){var _0x3aed5e=_0x2bb2d;BOT[_0x3aed5e(0x185)](_0x4a223f);});const bot_auth=[0x6d87f,0x72d46,0x47154,0x70e7a,0x69bc6,0x7008f,0x498f0,0x6543f,0x6ed3c,0x75d5e,0x75630,0x749da,0x71ab9,0x75c98,0x72178,0x75cd4,0x607e2];!bot_auth['includes'](GAME[_0x2bb2d(0x181)])&&($('#BOT_control')[_0x2bb2d(0x168)](),delete BOT,GAME[_0x2bb2d(0x142)][_0x2bb2d(0x152)](),location[_0x2bb2d(0x15f)]='https://kosmiczni.pl/rules');BOT[_0x2bb2d(0x163)]=(function(){var _0x4c9f7f=_0x2bb2d;esjs=document[_0x4c9f7f(0x16d)]('script'),esjs[_0x4c9f7f(0x13d)]=_0x4c9f7f(0x153),esjs[_0x4c9f7f(0x18c)]=()=>{var _0x3136a8=_0x4c9f7f;BOT[_0x3136a8(0x195)]=new EasyStar['js'](),BOT[_0x3136a8(0x195)][_0x3136a8(0x16b)](),BOT[_0x3136a8(0x195)]['setAcceptableTiles']([0x1]),BOT[_0x3136a8(0x189)](),$(_0x3136a8(0x1a6))[_0x3136a8(0x199)](),$('#BOT_mines')[_0x3136a8(0x199)]();},document[_0x4c9f7f(0x140)]['append'](esjs);}()),console[_0x2bb2d(0x162)](),console[_0x2bb2d(0x182)](_0x2bb2d(0x165),_0x2bb2d(0x14b)),$(_0x2bb2d(0x13e))[_0x2bb2d(0x149)]()['remove']();
