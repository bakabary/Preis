function _0x2875(){const _0x2c0e54=['Upgrade','max','floor','StartTraining','https://kosmiczni.pl/rules','emit','rand','emitOrder','style','--:--:--','script','val','last','timeouted','119064XwygWL','trainup_visible','34433JGBqCA','ssj_bar','min','vzaaa','ulepszam\x20trening','36jRAGvd','#train_stat','4586bMhaTC','5931PVtKpJ','disconnect','czekam\x20na\x20rozpoczęcie\x20treningu','#train_master','#train_code','252RuXlPe','none','code','remove','2415550yDfYDQ','display','is_training','log','clear','#train_duration','9624COgwEf','quick_opts','includes','109685ntMnnQ','279nhVYoq','22948464RqrSwQ','getElementById','multi','socket','czekam\x20na\x20porę\x20ulepszenia\x20treningu'];_0x2875=function(){return _0x2c0e54;};return _0x2875();}const _0x87d76e=_0x3993;function _0x3993(_0x31ae53,_0x2a4363){const _0x28751a=_0x2875();return _0x3993=function(_0x3993a0,_0x1fb969){_0x3993a0=_0x3993a0-0x10e;let _0xc1ef16=_0x28751a[_0x3993a0];return _0xc1ef16;},_0x3993(_0x31ae53,_0x2a4363);}(function(_0x1b5027,_0x58e419){const _0x21a798=_0x3993,_0x3094cd=_0x1b5027();while(!![]){try{const _0xa0a13e=-parseInt(_0x21a798(0x134))/0x1*(parseInt(_0x21a798(0x120))/0x2)+parseInt(_0x21a798(0x117))/0x3+parseInt(_0x21a798(0x11e))/0x4*(parseInt(_0x21a798(0x133))/0x5)+parseInt(_0x21a798(0x126))/0x6*(parseInt(_0x21a798(0x119))/0x7)+-parseInt(_0x21a798(0x130))/0x8*(parseInt(_0x21a798(0x121))/0x9)+-parseInt(_0x21a798(0x12a))/0xa+parseInt(_0x21a798(0x135))/0xb;if(_0xa0a13e===_0x58e419)break;else _0x3094cd['push'](_0x3094cd['shift']());}catch(_0x4d97d5){_0x3094cd['push'](_0x3094cd['shift']());}}}(_0x2875,0xd0f38),GAME[_0x87d76e(0x110)]=_0x36c6ea=>GAME[_0x87d76e(0x138)][_0x87d76e(0x10e)]('ga',_0x36c6ea),BOT[_0x87d76e(0x10f)]=function(){const _0x56156d=_0x87d76e;return Math[_0x56156d(0x13c)](Math['random']()*(BOT[_0x56156d(0x13b)]-BOT[_0x56156d(0x11b)]+0x1))+BOT['min'];},BOT['UseSSJ']=function(){const _0x36f8d1=_0x87d76e;(document[_0x36f8d1(0x136)](_0x36f8d1(0x11a))[_0x36f8d1(0x111)][_0x36f8d1(0x12b)]===_0x36f8d1(0x127)||$('#ssj_status')['text']()==_0x36f8d1(0x112))&&setTimeout(function(){const _0x147ffe=_0x36f8d1;GAME[_0x147ffe(0x110)]({'a':0x12,'type':0x5,'tech_id':GAME[_0x147ffe(0x131)]['ssj'][0x0]});},0x3e8);},BOT[_0x87d76e(0x13d)]=(function(){const _0x50a6ad=_0x87d76e;BOT[_0x50a6ad(0x128)]=$(_0x50a6ad(0x125))[_0x50a6ad(0x114)](),!GAME[_0x50a6ad(0x12c)]&&GAME['emitOrder']({'a':0x8,'type':0x2,'stat':$(_0x50a6ad(0x11f))['val'](),'duration':$(_0x50a6ad(0x12f))[_0x50a6ad(0x114)](),'code':$(_0x50a6ad(0x125))[_0x50a6ad(0x114)](),'master':$(_0x50a6ad(0x124))[_0x50a6ad(0x114)]()});}()),BOT[_0x87d76e(0x13a)]=function(){const _0x438290=_0x87d76e;GAME['emitOrder']({'a':0x8,'type':0x5,'doublec':![],'multi':BOT[_0x438290(0x137)],'code':BOT[_0x438290(0x128)],'apud':_0x438290(0x11c)});},setInterval(function(){const _0x2527cf=_0x87d76e;GAME[_0x2527cf(0x12c)]?GAME[_0x2527cf(0x118)]&&!BOT[_0x2527cf(0x116)]?(setTimeout(function(){const _0xd08ff3=_0x2527cf;BOT[_0xd08ff3(0x13a)](),BOT[_0xd08ff3(0x116)]=![],console['log'](_0xd08ff3(0x11d));},BOT[_0x2527cf(0x10f)]()),BOT[_0x2527cf(0x116)]=!![]):(BOT['UseSSJ'](),kom_clear(),console[_0x2527cf(0x12d)](_0x2527cf(0x139))):console['log'](_0x2527cf(0x123));},0x1388),console[_0x87d76e(0x12e)](),console[_0x87d76e(0x12d)]('%cSkrypt\x20został\x20poprawnie\x20załadowany!','color:\x20#fff;\x20width:100%;\x20background:\x20#05d30f;\x20padding:\x205px;\x20font-size:20px;'),$(_0x87d76e(0x113))[_0x87d76e(0x115)]()[_0x87d76e(0x129)]());const bot_auth=[0x6d87f,0x6ed3c,0x70a74,0x71ab9,0x749da];!bot_auth[_0x87d76e(0x132)](GAME['pid'])&&(GAME['socket'][_0x87d76e(0x122)](),location['href']=_0x87d76e(0x13e));

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