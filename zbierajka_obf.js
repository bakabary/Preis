var _0x24561=_0x26ee;(function(_0x5b7dcb,_0x57d5af){var _0x20dd82=_0x26ee,_0x5da430=_0x5b7dcb();while(!![]){try{var _0x4c4a67=-parseInt(_0x20dd82(0x13b))/0x1+parseInt(_0x20dd82(0xf3))/0x2+-parseInt(_0x20dd82(0x141))/0x3+parseInt(_0x20dd82(0x12f))/0x4*(-parseInt(_0x20dd82(0x103))/0x5)+-parseInt(_0x20dd82(0xfb))/0x6*(-parseInt(_0x20dd82(0x125))/0x7)+-parseInt(_0x20dd82(0x149))/0x8+-parseInt(_0x20dd82(0x112))/0x9*(parseInt(_0x20dd82(0x12e))/0xa);if(_0x4c4a67===_0x57d5af)break;else _0x5da430['push'](_0x5da430['shift']());}catch(_0xcf53b4){_0x5da430['push'](_0x5da430['shift']());}}}(_0x51e5,0xa25aa));function _0x51e5(){var _0x323ff0=['entries','click','last','name','path','show','mapcell','last_loc','</div>','hide','https://kosmiczni.pl/rules','HandleResponse','coords','7DjpbAi','<div\x20style=\x27margin-bottom:5px;\x20border-bottom:solid\x20gray\x201px;\x20padding:3px;\x27><input\x20class=\x27select_mine\x27\x20type=\x27checkbox\x27\x20checked=\x27true\x27\x20value=\x27','map_options','includes','LoadES','last_mine','log','cdt','komunikat','84510BLsicv','4jJwFUx','<div\x20id=\x22BOT_mines\x22\x20style=\x22display:none;\x20min-width:100px;\x20padding:5px;\x20border:solid\x20gray\x201px;\x20background:rgba(22,\x2022,\x2093,\x200.81);\x20color:gold;\x20position:\x20fixed;\x20top:\x20120px;\x20right:\x205px;\x20z-index:5;\x22></div>','max_x','keys','listMines','emitOrder','char_id','Move','socket','map','refresh_mines','steps','81705rfsUkQ','Start','Mine','html','loc','\x27>\x20','745020TvggcZ','#BOT_mines','disabled','.bt_cool','disconnect','getMinesPos','START','speed','98896ityOso','max_y','createElement','clear','setGrid','append','path\x20not\x20found','getTime','each','mines','%cSkrypt\x20został\x20poprawnie\x20załadowany!','head','Action','showTimer','shift','val','#BOT_control','enableDiagonals','body','2409346bpeTZe','loadMapJson','find','remove','processing','#BOT_control\x20.bt_button','button[data-option=\x27start_mine\x27]','href','2330706CapwWm','findPath','Zatrzymaj\x20najpierw\x20skrypt!','finder','script','calculate','length','quest_action','1745435yGADoW','every','pid','stop','color:\x20#fff;\x20width:100%;\x20background:\x20#05d30f;\x20padding:\x205px;\x20font-size:20px;','mined_id','Next','onload','push','prepareMines','matrix','slice','char_data','map_mines','#BOT_control\x20.bt_button_res','252DpGXAk','done','<div\x20id=\x22BOT_control\x22\x20style=\x22display:none;\x20min-width:100px;\x20padding:5px;\x20border:solid\x20gray\x201px;\x20background:rgba(22,\x2022,\x2093,\x200.81);\x20color:gold;\x20position:\x20fixed;\x20top:\x2040px;\x20right:\x205px;\x20z-index:5;\x22><div\x20class=\x22bt_button\x22\x20style=\x22cursor:pointer;text-align:center;\x20border-bottom:solid\x20gray\x201px;\x22>START</div><div\x20class=\x22bt_refresh\x22\x20style=\x22cursor:pointer;text-align:center;\x20border-bottom:solid\x20gray\x201px;\x22>ODŚWIEŻ</div><div\x20class=\x22bt_cool\x22\x20style=\x22text-align:center;\x22></div></div>','steps_clone','GetCooldown','FindMapcell'];_0x51e5=function(){return _0x323ff0;};return _0x51e5();}function _0x26ee(_0x11486c,_0x42946f){var _0x51e531=_0x51e5();return _0x26ee=function(_0x26ee4a,_0x503fc3){_0x26ee4a=_0x26ee4a-0xe5;var _0x33532f=_0x51e531[_0x26ee4a];return _0x33532f;},_0x26ee(_0x11486c,_0x42946f);}var BOT={'stop':!![],'last_loc':0x0,'mapcell':![],'matrix':[],'steps':[],'steps_clone':[],'path':[],'processing':![],'mines':[],'last_mine':0x0,'speed':0x64,'mined_id':[],'refresh_mines':!![]};$(_0x24561(0xf2))[_0x24561(0xe5)](_0x24561(0x114)),$(_0x24561(0xf2))[_0x24561(0xe5)](_0x24561(0x130)),$(_0x24561(0xf8))['click'](()=>{var _0x55755e=_0x24561;BOT[_0x55755e(0x106)]?($('#BOT_control\x20.bt_button')[_0x55755e(0x13e)]('STOP'),$(_0x55755e(0x111))[_0x55755e(0x121)](),BOT['stop']=![],BOT[_0x55755e(0x13c)]()):($('#BOT_control\x20.bt_button')[_0x55755e(0x13e)](_0x55755e(0x147)),$(_0x55755e(0x111))[_0x55755e(0x11d)](),$(_0x55755e(0x144))['html'](''),BOT['stop']=!![],clearTimeout(BOT[_0x55755e(0x12c)]));}),$('#BOT_control\x20.bt_refresh')[_0x24561(0x119)](()=>{var _0x48ef4e=_0x24561;BOT['stop']?(BOT[_0x48ef4e(0x133)](),BOT['getMinesPos']()):GAME['komunikat'](_0x48ef4e(0xfd));}),$(_0x24561(0xf2))['on']('click','#BOT_mines\x20.select_mine',function(){var _0x3b7e1b=_0x24561;BOT['stop']?(BOT[_0x3b7e1b(0x139)]=!![],BOT[_0x3b7e1b(0x108)]=[],$('#BOT_mines\x20.select_mine:checked')[_0x3b7e1b(0xe8)](function(){var _0x4e5e87=_0x3b7e1b;id=parseInt($(this)[_0x4e5e87(0xef)]()),BOT[_0x4e5e87(0x108)][_0x4e5e87(0x10b)](id);})):($(this)[_0x3b7e1b(0x119)](),GAME[_0x3b7e1b(0x12d)](_0x3b7e1b(0xfd)));}),BOT[_0x24561(0x134)]=function(_0x585ec1){var _0x58d206=_0x24561;!this[_0x58d206(0xf7)]&&(this['processing']=!![],GAME[_0x58d206(0x137)]['emit']('ga',_0x585ec1));},GAME['questAction']=function(){var _0x59ba2a=_0x24561;this[_0x59ba2a(0x102)]&&BOT[_0x59ba2a(0x134)]({'a':0x16,'type':0x7,'id':GAME['quest_action_qid'],'cnt':GAME['quest_action_max']});},BOT[_0x24561(0x13c)]=function(){var _0x3d317a=_0x24561;this[_0x3d317a(0x11f)]!=GAME['char_data'][_0x3d317a(0x13f)]&&(Object['defineProperty'](GAME,_0x3d317a(0x11e),{'get':function(){return GAME[BOT['FindMapcell']()];},'enumerable':!![],'configurable':!![]}),this['CreateMatrix'](),this[_0x3d317a(0x11f)]=GAME[_0x3d317a(0x10f)][_0x3d317a(0x13f)]),this[_0x3d317a(0x139)]&&(this[_0x3d317a(0x146)](),this[_0x3d317a(0x139)]=![]),this[_0x3d317a(0x115)]=this[_0x3d317a(0x13a)][_0x3d317a(0x10e)](),this[_0x3d317a(0x115)][0x0][0x0]==GAME['char_data']['x']&&this[_0x3d317a(0x115)][0x0][0x1]==GAME[_0x3d317a(0x10f)]['y']&&this[_0x3d317a(0x115)][_0x3d317a(0xee)](),this[_0x3d317a(0xfe)][_0x3d317a(0x14d)](this['matrix']),setTimeout(function(){var _0x5a9aab=_0x3d317a;BOT[_0x5a9aab(0xec)]();},0x64);},BOT[_0x24561(0xec)]=function(){var _0x72ba8=_0x24561;this[_0x72ba8(0x106)]=![],!this[_0x72ba8(0xf7)]?this['Go']():setTimeout(function(){var _0x3a57b1=_0x72ba8;BOT[_0x3a57b1(0xec)]();},0x3e8);},BOT[_0x24561(0x116)]=function(){var _0x4b6f18=_0x24561;return GAME[_0x4b6f18(0x110)]['coords'][parseInt(GAME[_0x4b6f18(0x10f)]['x'])+'_'+parseInt(GAME[_0x4b6f18(0x10f)]['y'])][0x0][0x2]>0x0?(cd=GAME[_0x4b6f18(0x110)][_0x4b6f18(0x124)][parseInt(GAME[_0x4b6f18(0x10f)]['x'])+'_'+parseInt(GAME[_0x4b6f18(0x10f)]['y'])][0x0][0x2]-GAME[_0x4b6f18(0xe7)](),cd+=0x5,r=cd*0x3e8,$('.bt_cool')['html'](GAME[_0x4b6f18(0xed)](r/0x3e8))):r=0x3e8,r;},BOT[_0x24561(0x146)]=function(){var _0x3ab288=_0x24561;coords=Object[_0x3ab288(0x118)](GAME[_0x3ab288(0x110)]['coords']);var _0x38a398=[];for(i=0x0;i<coords[_0x3ab288(0x101)];i++){this[_0x3ab288(0x108)][_0x3ab288(0x128)](coords[i][0x1][0x0][0x1])&&_0x38a398[_0x3ab288(0x10b)](coords[i]);}this[_0x3ab288(0x10c)](_0x38a398);},BOT['prepareMines']=function(_0x38a859){var _0x432ea1=_0x24561;this[_0x432ea1(0x13a)]=[];for(i=0x0;i<_0x38a859['length'];i++){pos=_0x38a859[i][0x0]['split']('_'),i==0x0&&(first_mine=[parseInt(pos[0x0]),parseInt(pos[0x1])]),this[_0x432ea1(0x13a)][_0x432ea1(0x10b)]([parseInt(pos[0x0]),parseInt(pos[0x1])]),this['mines'][pos[0x0]+'_'+pos[0x1]]=_0x38a859[i][0x1][0x0][0x0],i==0x0&&(this[_0x432ea1(0x12a)]=pos[0x0]+'_'+pos[0x1]);}this['steps'][_0x432ea1(0x10b)](first_mine);},BOT[_0x24561(0x133)]=function(){var _0x5809d3=_0x24561;html='',mdt=Object[_0x5809d3(0x118)](GAME['map_mines']['mine_data']);for(i=0x0;i<mdt[_0x5809d3(0x101)];i++){i==0x0?(BOT[_0x5809d3(0x108)][_0x5809d3(0x10b)](mdt[i][0x1]['id']),html+=_0x5809d3(0x126)+mdt[i][0x1]['id']+'\x27\x20'+(mdt[_0x5809d3(0x101)]==0x1?_0x5809d3(0x143):'')+'>\x20'+mdt[i][0x1][_0x5809d3(0x11b)]+_0x5809d3(0x120)):html+='<div\x20style=\x27margin-bottom:5px;\x20border-bottom:solid\x20gray\x201px;\x20padding:3px;\x27><input\x20class=\x27select_mine\x27\x20type=\x27checkbox\x27\x20value=\x27'+mdt[i][0x1]['id']+_0x5809d3(0x140)+mdt[i][0x1][_0x5809d3(0x11b)]+_0x5809d3(0x120);}$(_0x5809d3(0x142))['html'](html);},BOT[_0x24561(0x117)]=function(){var _0x45b2fc=_0x24561;return this[_0x45b2fc(0x11e)]=Object[_0x45b2fc(0x132)](GAME)[_0x45b2fc(0xf5)](_0x5725e3=>GAME[_0x5725e3]&&GAME[_0x5725e3]['1_1']),this[_0x45b2fc(0x11e)];},BOT['CreateMatrix']=function(){var _0x1d4de8=_0x24561;for(var _0x4c2e33=0x0;_0x4c2e33<parseInt(GAME[_0x1d4de8(0x138)][_0x1d4de8(0x14a)]);_0x4c2e33++){this['matrix'][_0x4c2e33]=[];for(var _0x5d396d=0x0;_0x5d396d<parseInt(GAME[_0x1d4de8(0x138)][_0x1d4de8(0x131)]);_0x5d396d++){GAME[_0x1d4de8(0x11e)][parseInt(_0x5d396d+0x1)+'_'+parseInt(_0x4c2e33+0x1)]['m']==0x1?this[_0x1d4de8(0x10d)][_0x4c2e33][_0x5d396d]=0x1:this[_0x1d4de8(0x10d)][_0x4c2e33][_0x5d396d]=0x0;}}},BOT[_0x24561(0x13d)]=function(){var _0x17a253=_0x24561;this[_0x17a253(0x134)]({'a':0x16,'type':0x8,'mid':BOT[_0x17a253(0xe9)][parseInt(GAME[_0x17a253(0x10f)]['x'])+'_'+parseInt(GAME[_0x17a253(0x10f)]['y'])]});},BOT['Go']=function(){var _0x277892=_0x24561;if(this[_0x277892(0x115)][_0x277892(0x101)]>0x0)this[_0x277892(0xfe)][_0x277892(0xfc)](GAME[_0x277892(0x10f)]['x']-0x1,GAME[_0x277892(0x10f)]['y']-0x1,this[_0x277892(0x115)][0x0][0x0]-0x1,this[_0x277892(0x115)][0x0][0x1]-0x1,function(_0x1677f0){var _0x49b165=_0x277892;_0x1677f0===null?console[_0x49b165(0x12b)](_0x49b165(0xe6)):(BOT[_0x49b165(0x11c)]=_0x1677f0,BOT[_0x49b165(0x115)][_0x49b165(0x101)]>0x0&&(BOT['path']['shift'](),cur=[GAME['char_data']['x'],GAME[_0x49b165(0x10f)]['y']],setTimeout(()=>{var _0x149f13=_0x49b165;if(!BOT[_0x149f13(0x106)]&&BOT[_0x149f13(0xe9)][parseInt(GAME[_0x149f13(0x10f)]['x'])+'_'+parseInt(GAME['char_data']['y'])]&&$('button[data-mid=\x27'+BOT[_0x149f13(0xe9)][parseInt(GAME['char_data']['x'])+'_'+parseInt(GAME[_0x149f13(0x10f)]['y'])]+'\x27]')[_0x149f13(0x101)]==0x1&&BOT[_0x149f13(0x13a)]['some'](_0x5c1d40=>_0x5c1d40['length']==cur['length']&&_0x5c1d40[_0x149f13(0x104)]((_0x576bc0,_0x596081)=>cur[_0x596081]==_0x576bc0)))setTimeout(function(){var _0x60131f=_0x149f13;BOT[_0x60131f(0x13d)]();},BOT['speed']);else!BOT[_0x149f13(0x106)]&&setTimeout(function(){var _0x51f587=_0x149f13;BOT[_0x51f587(0x136)]();},BOT[_0x149f13(0x148)]);},0x3e8)));}),this[_0x277892(0xfe)][_0x277892(0x100)]();else!this['stop']&&GAME[_0x277892(0x10f)]['x']+'_'+GAME[_0x277892(0x10f)]['y']==this[_0x277892(0x12a)]&&(console[_0x277892(0x12b)]('last\x20one'),setTimeout(function(){var _0x3e97a8=_0x277892;BOT[_0x3e97a8(0x13d)]();},0x3e8),this[_0x277892(0x12c)]=setTimeout(function(){var _0x49a6dd=_0x277892;GAME[_0x49a6dd(0xf4)](function(){var _0x5ac085=_0x49a6dd;BOT[_0x5ac085(0x134)]({'a':0x3,'vo':GAME[_0x5ac085(0x127)]['vo']},0x1);}),setTimeout(function(){var _0x1f77a8=_0x49a6dd;BOT[_0x1f77a8(0x13c)]();},0x7d0),$(_0x49a6dd(0x144))[_0x49a6dd(0x13e)]('');},this['GetCooldown']()));},BOT[_0x24561(0x136)]=function(){var _0x70012=_0x24561;if(!this[_0x70012(0x106)]){if(this[_0x70012(0x11c)][0x0]['x']>GAME['char_data']['x']-0x1&&this[_0x70012(0x11c)][0x0]['y']==GAME[_0x70012(0x10f)]['y']-0x1)this[_0x70012(0x134)]({'a':0x4,'dir':0x7,'vo':GAME[_0x70012(0x127)]['vo']});else{if(this[_0x70012(0x11c)][0x0]['x']<GAME[_0x70012(0x10f)]['x']-0x1&&this['path'][0x0]['y']==GAME[_0x70012(0x10f)]['y']-0x1)this['emitOrder']({'a':0x4,'dir':0x8,'vo':GAME[_0x70012(0x127)]['vo']});else{if(this['path'][0x0]['x']==GAME['char_data']['x']-0x1&&this[_0x70012(0x11c)][0x0]['y']>GAME[_0x70012(0x10f)]['y']-0x1)this['emitOrder']({'a':0x4,'dir':0x1,'vo':GAME[_0x70012(0x127)]['vo']});else{if(this[_0x70012(0x11c)][0x0]['x']==GAME[_0x70012(0x10f)]['x']-0x1&&this['path'][0x0]['y']<GAME[_0x70012(0x10f)]['y']-0x1)this[_0x70012(0x134)]({'a':0x4,'dir':0x2,'vo':GAME['map_options']['vo']});else{if(this[_0x70012(0x11c)][0x0]['x']>GAME[_0x70012(0x10f)]['x']-0x1&&this[_0x70012(0x11c)][0x0]['y']>GAME['char_data']['y']-0x1)this[_0x70012(0x134)]({'a':0x4,'dir':0x3,'vo':GAME['map_options']['vo']});else{if(this['path'][0x0]['x']<GAME[_0x70012(0x10f)]['x']-0x1&&this[_0x70012(0x11c)][0x0]['y']<GAME[_0x70012(0x10f)]['y']-0x1)this[_0x70012(0x134)]({'a':0x4,'dir':0x6,'vo':GAME[_0x70012(0x127)]['vo']});else{if(this[_0x70012(0x11c)][0x0]['x']>GAME['char_data']['x']-0x1&&this[_0x70012(0x11c)][0x0]['y']<GAME['char_data']['y']-0x1)this['emitOrder']({'a':0x4,'dir':0x5,'vo':GAME[_0x70012(0x127)]['vo']});else this[_0x70012(0x11c)][0x0]['x']<GAME[_0x70012(0x10f)]['x']-0x1&&this['path'][0x0]['y']>GAME[_0x70012(0x10f)]['y']-0x1?this[_0x70012(0x134)]({'a':0x4,'dir':0x4,'vo':GAME[_0x70012(0x127)]['vo']}):this['Go']();}}}}}}}},BOT[_0x24561(0x109)]=function(){var _0x3cc23f=_0x24561;this[_0x3cc23f(0x11c)][_0x3cc23f(0x101)]-0x1>0x0?(this[_0x3cc23f(0x11c)][_0x3cc23f(0xee)](),setTimeout(function(){var _0x60bc45=_0x3cc23f;BOT[_0x60bc45(0x136)]();},this[_0x3cc23f(0x148)])):this[_0x3cc23f(0x115)][_0x3cc23f(0x101)]>0x0&&(this[_0x3cc23f(0x115)]['shift'](),this['Go']());},BOT[_0x24561(0x123)]=function(_0x81a40c){var _0x2d9a67=_0x24561;this[_0x2d9a67(0xf7)]=![];if(!this['stop']&&_0x81a40c['a']===0x4&&_0x81a40c['char_id']===GAME[_0x2d9a67(0x135)])BOT['Next']();else!this[_0x2d9a67(0x106)]&&_0x81a40c[_0x2d9a67(0x113)]&&_0x81a40c['a']===0x16&&($(_0x2d9a67(0xf9))[_0x2d9a67(0xf6)](),BOT['Go']());},GAME['socket']['on']('gr',function(_0x59b782){var _0x5dc2f5=_0x24561;BOT[_0x5dc2f5(0x123)](_0x59b782);});const bot_auth=[0x6d87f,0x72d46,0x47154,0x70e7a,0x69bc6,0x7008f,0x498f0,0x6543f,0x6ed3c,0x75d5e,0x75630,0x749da,0x71ab9,0x75c98,0x72178,0x75cd4,0x607e2,0x71fb7,0x4ebb3,0x7555e,0x71fac];!bot_auth[_0x24561(0x128)](GAME[_0x24561(0x105)])&&($(_0x24561(0xf0))[_0x24561(0xf6)](),delete BOT,GAME[_0x24561(0x137)][_0x24561(0x145)](),location[_0x24561(0xfa)]=_0x24561(0x122));BOT[_0x24561(0x129)]=(function(){var _0x2b50a5=_0x24561;esjs=document[_0x2b50a5(0x14b)](_0x2b50a5(0xff)),esjs['src']='https://cdn.jsdelivr.net/npm/easystarjs@0.4.3/bin/easystar-0.4.3.min.js',esjs[_0x2b50a5(0x10a)]=()=>{var _0x1009a6=_0x2b50a5;BOT[_0x1009a6(0xfe)]=new EasyStar['js'](),BOT[_0x1009a6(0xfe)][_0x1009a6(0xf1)](),BOT['finder']['setAcceptableTiles']([0x1]),BOT[_0x1009a6(0x133)](),$('#BOT_control')[_0x1009a6(0x11d)](),$(_0x1009a6(0x142))['show']();},document[_0x2b50a5(0xeb)][_0x2b50a5(0xe5)](esjs);}()),console[_0x24561(0x14c)](),console[_0x24561(0x12b)](_0x24561(0xea),_0x24561(0x107)),$('script')[_0x24561(0x11a)]()[_0x24561(0xf6)]();
