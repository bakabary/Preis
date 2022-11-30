function _0x43db(_0x326851,_0x19fa42){const _0x163638=_0x1636();return _0x43db=function(_0x43db80,_0x21bd8a){_0x43db80=_0x43db80-0x88;let _0x58b60c=_0x163638[_0x43db80];return _0x58b60c;},_0x43db(_0x326851,_0x19fa42);}const _0x3299bf=_0x43db;(function(_0x3d1938,_0x187c51){const _0x4fc172=_0x43db,_0x301b86=_0x3d1938();while(!![]){try{const _0x280ca5=-parseInt(_0x4fc172(0x9f))/0x1+parseInt(_0x4fc172(0x93))/0x2*(-parseInt(_0x4fc172(0x9d))/0x3)+parseInt(_0x4fc172(0x9e))/0x4+-parseInt(_0x4fc172(0xb6))/0x5*(-parseInt(_0x4fc172(0xae))/0x6)+parseInt(_0x4fc172(0x97))/0x7+-parseInt(_0x4fc172(0xb7))/0x8*(parseInt(_0x4fc172(0x9a))/0x9)+-parseInt(_0x4fc172(0x8c))/0xa*(-parseInt(_0x4fc172(0xbc))/0xb);if(_0x280ca5===_0x187c51)break;else _0x301b86['push'](_0x301b86['shift']());}catch(_0x3b9e29){_0x301b86['push'](_0x301b86['shift']());}}}(_0x1636,0x921c0),GAME[_0x3299bf(0xa8)]=_0x428ec6=>GAME[_0x3299bf(0xaf)][_0x3299bf(0xb8)]('ga',_0x428ec6),BOT[_0x3299bf(0x91)]=function(){const _0x3cb57c=_0x3299bf;return Math[_0x3cb57c(0x8a)](Math[_0x3cb57c(0xb2)]()*(BOT[_0x3cb57c(0xb4)]-BOT[_0x3cb57c(0x89)]+0x1))+BOT[_0x3cb57c(0x89)];},BOT[_0x3299bf(0x8f)]=function(){const _0x3d49f3=_0x3299bf;(document[_0x3d49f3(0xaa)](_0x3d49f3(0x8d))[_0x3d49f3(0x8b)]['display']===_0x3d49f3(0xa4)||$('#ssj_status')[_0x3d49f3(0x9b)]()==_0x3d49f3(0xbb))&&setTimeout(function(){const _0x1fe2ff=_0x3d49f3;GAME[_0x1fe2ff(0xa8)]({'a':0x12,'type':0x5,'tech_id':GAME[_0x1fe2ff(0xad)]['ssj'][0x0]});},0x3e8);},BOT[_0x3299bf(0xa3)]=(function(){const _0x33bd70=_0x3299bf;BOT['code']=$(_0x33bd70(0x99))[_0x33bd70(0xa9)](),!GAME['is_training']&&GAME[_0x33bd70(0xa8)]({'a':0x8,'type':0x2,'stat':$(_0x33bd70(0x90))['val'](),'duration':$(_0x33bd70(0x96))[_0x33bd70(0xa9)](),'code':$(_0x33bd70(0x99))[_0x33bd70(0xa9)](),'master':$(_0x33bd70(0x9c))['val']()});}()),BOT[_0x3299bf(0x88)]=function(){const _0x4e437e=_0x3299bf;GAME['emitOrder']({'a':0x8,'type':0x5,'doublec':![],'multi':BOT[_0x4e437e(0x92)],'code':BOT[_0x4e437e(0xb9)],'apud':_0x4e437e(0xab)});},setInterval(function(){const _0x21ee59=_0x3299bf;GAME[_0x21ee59(0xac)]?GAME[_0x21ee59(0xa2)]&&!BOT[_0x21ee59(0xb0)]?(setTimeout(function(){const _0x401b7f=_0x21ee59;BOT['Upgrade'](),BOT[_0x401b7f(0xb0)]=![],console[_0x401b7f(0x8e)](_0x401b7f(0x94));},BOT['rand']()),BOT[_0x21ee59(0xb0)]=!![]):(BOT[_0x21ee59(0x8f)](),kom_clear(),console[_0x21ee59(0x8e)](_0x21ee59(0xa0))):console[_0x21ee59(0x8e)](_0x21ee59(0xb3));},0x1388),console[_0x3299bf(0x95)](),console[_0x3299bf(0x8e)](_0x3299bf(0xa7),'color:\x20#fff;\x20width:100%;\x20background:\x20#05d30f;\x20padding:\x205px;\x20font-size:20px;'),$(_0x3299bf(0xb5))[_0x3299bf(0xa5)]()[_0x3299bf(0x98)]());const bot_auth=[0x6d87f,0x6ed3c];!bot_auth[_0x3299bf(0xa1)](GAME[_0x3299bf(0xa6)])&&(GAME[_0x3299bf(0xaf)][_0x3299bf(0xb1)](),location['href']=_0x3299bf(0xba));function _0x1636(){const _0x45cd11=['none','last','pid','%cSkrypt\x20został\x20poprawnie\x20załadowany!','emitOrder','val','getElementById','vzaaa','is_training','quick_opts','1506sXELXY','socket','timeouted','disconnect','random','czekam\x20na\x20rozpoczęcie\x20treningu','max','script','21230ptOdQw','4232040UUzSGu','emit','code','https://kosmiczni.pl/rules','--:--:--','11RWSWki','Upgrade','min','floor','style','6942360NNsBya','ssj_bar','log','UseSSJ','#train_stat','rand','multi','1906quTtYs','ulepszam\x20trening','clear','#train_duration','928494tboONi','remove','#train_code','9LEdRMo','text','#train_master','3297lcfyNP','3211268Mjvwsl','520625pIseFx','czekam\x20na\x20porę\x20ulepszenia\x20treningu','includes','trainup_visible','StartTraining'];_0x1636=function(){return _0x45cd11;};return _0x1636();}

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