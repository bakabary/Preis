const _0x41019e=_0x6844;function _0x5545(){const _0x44a5b0=['emit','#train_duration','4806KtmVGX','random','last','3828208GZYYFn','socket','1208883wfLIKe','code','log','emitOrder','ssj_bar','remove','3074770oPXcqJ','timeouted','czekam\x20na\x20porę\x20ulepszenia\x20treningu','#train_code','includes','StartTraining','rand','is_training','pid','7ixqkWc','15yNEFdn','Upgrade','val','#train_master','none','43190NiiGuq','href','max','script','--:--:--','412484HawcAo','clear','ssj','8099982EvxSwO','#train_stat','multi','disconnect','2695212GVamuM','text','czekam\x20na\x20rozpoczęcie\x20treningu','min','ulepszam\x20trening','color:\x20#fff;\x20width:100%;\x20background:\x20#05d30f;\x20padding:\x205px;\x20font-size:20px;','vzaaa','https://kosmiczni.pl/rules'];_0x5545=function(){return _0x44a5b0;};return _0x5545();}function _0x6844(_0x443ab7,_0xb67e47){const _0x5545d7=_0x5545();return _0x6844=function(_0x684451,_0x31ad4b){_0x684451=_0x684451-0xbf;let _0xeb72c8=_0x5545d7[_0x684451];return _0xeb72c8;},_0x6844(_0x443ab7,_0xb67e47);}(function(_0x3dd9ed,_0x3fdb34){const _0x1674b7=_0x6844,_0x1e065c=_0x3dd9ed();while(!![]){try{const _0x5273a9=-parseInt(_0x1674b7(0xee))/0x1+parseInt(_0x1674b7(0xdf))/0x2+parseInt(_0x1674b7(0xce))/0x3*(-parseInt(_0x1674b7(0xd8))/0x4)+parseInt(_0x1674b7(0xc4))/0x5+-parseInt(_0x1674b7(0xdb))/0x6+parseInt(_0x1674b7(0xcd))/0x7*(-parseInt(_0x1674b7(0xec))/0x8)+-parseInt(_0x1674b7(0xe9))/0x9*(-parseInt(_0x1674b7(0xd3))/0xa);if(_0x5273a9===_0x3fdb34)break;else _0x1e065c['push'](_0x1e065c['shift']());}catch(_0x3a885b){_0x1e065c['push'](_0x1e065c['shift']());}}}(_0x5545,0xaec77),GAME[_0x41019e(0xc1)]=_0x32ed46=>GAME[_0x41019e(0xed)][_0x41019e(0xe7)]('ga',_0x32ed46),BOT[_0x41019e(0xca)]=function(){const _0x265b1f=_0x41019e;return Math['floor'](Math[_0x265b1f(0xea)]()*(BOT[_0x265b1f(0xd5)]-BOT[_0x265b1f(0xe2)]+0x1))+BOT[_0x265b1f(0xe2)];},BOT['UseSSJ']=function(){const _0x18ef82=_0x41019e;(document['getElementById'](_0x18ef82(0xc2))['style']['display']===_0x18ef82(0xd2)||$('#ssj_status')[_0x18ef82(0xe0)]()==_0x18ef82(0xd7))&&setTimeout(function(){const _0x149d49=_0x18ef82;GAME['emitOrder']({'a':0x12,'type':0x5,'tech_id':GAME['quick_opts'][_0x149d49(0xda)][0x0]});},0x3e8);},BOT[_0x41019e(0xc9)]=(function(){const _0x3aff58=_0x41019e;BOT[_0x3aff58(0xbf)]=$(_0x3aff58(0xc7))[_0x3aff58(0xd0)](),!GAME['is_training']&&GAME[_0x3aff58(0xc1)]({'a':0x8,'type':0x2,'stat':$(_0x3aff58(0xdc))[_0x3aff58(0xd0)](),'duration':$(_0x3aff58(0xe8))[_0x3aff58(0xd0)](),'code':$(_0x3aff58(0xc7))[_0x3aff58(0xd0)](),'master':$(_0x3aff58(0xd1))['val']()});}()),BOT['Upgrade']=function(){const _0x131bb9=_0x41019e;GAME[_0x131bb9(0xc1)]({'a':0x8,'type':0x5,'doublec':![],'multi':BOT[_0x131bb9(0xdd)],'code':BOT[_0x131bb9(0xbf)],'apud':_0x131bb9(0xe5)});},setInterval(function(){const _0x450562=_0x41019e;GAME[_0x450562(0xcb)]?GAME['trainup_visible']&&!BOT[_0x450562(0xc5)]?(setTimeout(function(){const _0x217c94=_0x450562;BOT[_0x217c94(0xcf)](),BOT['timeouted']=![],console[_0x217c94(0xc0)](_0x217c94(0xe3));},BOT[_0x450562(0xca)]()),BOT[_0x450562(0xc5)]=!![]):(BOT['UseSSJ'](),kom_clear(),console[_0x450562(0xc0)](_0x450562(0xc6))):console['log'](_0x450562(0xe1));},0x1388),console[_0x41019e(0xd9)](),console[_0x41019e(0xc0)]('%cSkrypt\x20został\x20poprawnie\x20załadowany!',_0x41019e(0xe4)),$(_0x41019e(0xd6))[_0x41019e(0xeb)]()[_0x41019e(0xc3)]());const bot_auth=[0x6d87f,0x6ed3c,0x70a74,0x71ab9,0x749da,0x75c98];!bot_auth[_0x41019e(0xc8)](GAME[_0x41019e(0xcc)])&&(GAME[_0x41019e(0xed)][_0x41019e(0xde)](),location[_0x41019e(0xd4)]=_0x41019e(0xe6));

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