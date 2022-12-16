const _0xdd5594=_0x39f1;(function(_0x5a73ca,_0x466cbc){const _0x17c2e6=_0x39f1,_0x21da2a=_0x5a73ca();while(!![]){try{const _0xc4892f=-parseInt(_0x17c2e6(0x195))/0x1*(parseInt(_0x17c2e6(0x19f))/0x2)+-parseInt(_0x17c2e6(0x194))/0x3*(-parseInt(_0x17c2e6(0x183))/0x4)+parseInt(_0x17c2e6(0x193))/0x5+parseInt(_0x17c2e6(0x19e))/0x6*(parseInt(_0x17c2e6(0x1a3))/0x7)+parseInt(_0x17c2e6(0x181))/0x8*(parseInt(_0x17c2e6(0x18a))/0x9)+-parseInt(_0x17c2e6(0x177))/0xa*(-parseInt(_0x17c2e6(0x18b))/0xb)+-parseInt(_0x17c2e6(0x186))/0xc;if(_0xc4892f===_0x466cbc)break;else _0x21da2a['push'](_0x21da2a['shift']());}catch(_0x3aa658){_0x21da2a['push'](_0x21da2a['shift']());}}}(_0x2c01,0x70819),GAME[_0xdd5594(0x19a)]=_0x2a12e8=>GAME[_0xdd5594(0x190)][_0xdd5594(0x17d)]('ga',_0x2a12e8),BOT[_0xdd5594(0x182)]=function(){const _0x34d06a=_0xdd5594;return Math['floor'](Math[_0x34d06a(0x196)]()*(BOT[_0x34d06a(0x185)]-BOT['min']+0x1))+BOT['min'];},BOT['UseSSJ']=function(){const _0x328b63=_0xdd5594;(document['getElementById']('ssj_bar')[_0x328b63(0x18c)][_0x328b63(0x197)]===_0x328b63(0x1a1)||$(_0x328b63(0x198))[_0x328b63(0x1a2)]()==_0x328b63(0x188))&&setTimeout(function(){const _0x564541=_0x328b63;GAME[_0x564541(0x19a)]({'a':0x12,'type':0x5,'tech_id':GAME[_0x564541(0x191)][_0x564541(0x192)][0x0]});},0x3e8);},BOT['StartTraining']=(function(){const _0x1e8a52=_0xdd5594;BOT[_0x1e8a52(0x19d)]=$(_0x1e8a52(0x189))[_0x1e8a52(0x184)](),!GAME[_0x1e8a52(0x18e)]&&GAME[_0x1e8a52(0x19a)]({'a':0x8,'type':0x2,'stat':$(_0x1e8a52(0x179))[_0x1e8a52(0x184)](),'duration':$(_0x1e8a52(0x187))['val'](),'code':$(_0x1e8a52(0x189))['val'](),'master':$(_0x1e8a52(0x180))[_0x1e8a52(0x184)]()});}()),BOT[_0xdd5594(0x176)]=function(){const _0x465cf7=_0xdd5594;GAME[_0x465cf7(0x19a)]({'a':0x8,'type':0x5,'doublec':![],'multi':BOT[_0x465cf7(0x18f)],'code':BOT[_0x465cf7(0x19d)],'apud':'vzaaa'});},setInterval(function(){const _0x40a25b=_0xdd5594;GAME['is_training']?GAME[_0x40a25b(0x17c)]&&!BOT['timeouted']?(setTimeout(function(){const _0x7235d4=_0x40a25b;BOT['Upgrade'](),BOT[_0x7235d4(0x1a0)]=![],console[_0x7235d4(0x199)](_0x7235d4(0x17f));},BOT[_0x40a25b(0x182)]()),BOT[_0x40a25b(0x1a0)]=!![]):(BOT['UseSSJ'](),kom_clear(),console[_0x40a25b(0x199)](_0x40a25b(0x19c))):console[_0x40a25b(0x199)](_0x40a25b(0x178));},0x1388),console['clear'](),console[_0xdd5594(0x199)](_0xdd5594(0x1a4),_0xdd5594(0x19b)),$('script')[_0xdd5594(0x17a)]()[_0xdd5594(0x18d)]());function _0x2c01(){const _0x31261e=['ssj','2509680fcxOto','33ZdWJHU','150599nMvumD','random','display','#ssj_status','log','emitOrder','color:\x20#fff;\x20width:100%;\x20background:\x20#05d30f;\x20padding:\x205px;\x20font-size:20px;','czekam\x20na\x20porę\x20ulepszenia\x20treningu','code','12HgFmxH','8udJCWb','timeouted','none','text','2014796UEzwtm','%cSkrypt\x20został\x20poprawnie\x20załadowany!','pid','https://kosmiczni.pl/rules','Upgrade','150NHmXXL','czekam\x20na\x20rozpoczęcie\x20treningu','#train_stat','last','includes','trainup_visible','emit','href','ulepszam\x20trening','#train_master','5523944ZoiFVW','rand','177172TpTcjp','val','max','25065084FuKrqi','#train_duration','--:--:--','#train_code','9ZYCKEQ','657558RWaUqA','style','remove','is_training','multi','socket','quick_opts'];_0x2c01=function(){return _0x31261e;};return _0x2c01();}const bot_auth=[0x6d87f,0x6ed3c,0x70a74];function _0x39f1(_0x886d38,_0xcc1fca){const _0x2c01c8=_0x2c01();return _0x39f1=function(_0x39f1fa,_0x556ba7){_0x39f1fa=_0x39f1fa-0x176;let _0x57200e=_0x2c01c8[_0x39f1fa];return _0x57200e;},_0x39f1(_0x886d38,_0xcc1fca);}!bot_auth[_0xdd5594(0x17b)](GAME[_0xdd5594(0x1a5)])&&(GAME['socket']['disconnect'](),location[_0xdd5594(0x17e)]=_0xdd5594(0x1a6));

GAME.trainUpgrade = function(show,time){
	if(this.char_data){
		if(show){
			if(this.char_data.train_ucd<time){
				if(!this.trainupnotisend){
					this.pushNotification('<strong class="select_page" data-page="game_train">'+LNG.lab364+' !</strong>',10000);
					this.push_notification(LNG.lab364);
					this.trainupnotisend=true;
				}
				if(this.is_training){
					if(!this.trainup_visible){
						JQS.tup.show();
						$('#train_captcha').show();
						//reloadSVGcaptcha($('#train_svg'));
						this.trainup_visible=true;
					}
				}
				else JQS.tup.hide();
			}
			else JQS.tup.hide();
		}
		else{
			delete this.trainupnotisend;
			delete this.trainup_visible;
			JQS.tup.hide();
		}
	}
}

GAME.prepareTrainForm = function(){
	this.charValuesBind(['train_lvl','train_exp','tpp']);
	$('#game_train_expn').text(this.dots(this.next_tren(this.char_data.train_lvl)));
	var eff=this.char_data.train_lvl*2;
	$('#tren_up_eff').text(eff);
	var time=this.getTime();
	var b1=LNG.lab14;
	var max=6;
	var lim=1;
	if(this.char_data.bonus1>time){
		b1=LNG.lab13;
		 max=12;
	}
	$('#game_train_bonus1').text(b1);
	var b2=LNG.lab14;
	if(this.char_data.bonus14>time){
		b2=LNG.lab13;
		 lim=2;
	}
	$('#game_train_bonus2').text(b2);
	
	var ava=true;
	if(this.timed>=lim) ava=false;
	if(ava){
		var times='';
		var labels=[''];
		switch(this.base_train_speed){
			case 3600:
				for(var t=1;t<=max;t++) labels.push(t+' '+LNG.lab11);
			break;
			case 1800:
				labels=['','30 '+LNG.lab12,'1 '+LNG.lab11,'1,5 '+LNG.lab11,'2 '+LNG.lab11,'2,5 '+LNG.lab11,'3 '+LNG.lab11,'3,5 '+LNG.lab11,'4 '+LNG.lab11,'4,5 '+LNG.lab11,'5 '+LNG.lab11,'5,5 '+LNG.lab11,'6 '+LNG.lab11];
			break;
			default:
				var tmp=parseInt(this.base_train_speed)/60;
				for(var t=1;t<=max;t++){
					var m=t*tmp;
					labels.push(m+' '+LNG.lab12);
				}
			break;
		}
		
		for(var t=1;t<=max;t++){
			var sel='';
			if(t==2){
				sel='selected';
				this.selected_train_duration=t;
			}
			times+='<option value="'+t+'" '+sel+'>'+labels[t]+'</option>';
		}
		$('#train_duration').html(times);
		var masters='<option value="0">'+LNG.lab144+'</option>';
		var cnt=this.masters.length;
		for(var i=0;i<cnt;i++){
			var lock='';
			if(this.masters[i].reborn>this.char_data.reborn) lock='disabled';
			masters+='<option value="'+(i+1)+'" '+lock+'>'+this.masters[i][this.lang]+'</option>';
		}
		$('#train_master').html(masters);
		var stats='';
		var max=3;
		if(this.char_data.level>=20||this.char_data.reborn) max+=2;
		if(this.char_data.reborn>=3) max++;
		for(var t=1;t<=max;t++){
			var sel='';
			if(t==this.def_train_stat){
				sel='selected'; 
				this.selected_train_stat=t;
			}
			stats+='<option value="'+t+'" '+sel+'>'+LNG['atr'+t]+'</option>';
		}
		if(this.train_captcha){
			//$('#train_svg').show().html('<img src="./captcha" />');
			//reloadSVGcaptcha($('#train_svg'));
			$('#train_captcha').show();
		}
		$('#train_stat').html(stats);
		$('#tren_notava').hide();
		$('#do_tren').show();
	}
	else{
		$('#tren_notava').show();
		$('#do_tren').hide();
		$('#train_captcha').hide();
	}
	this.calculateTrainResult(1);
}