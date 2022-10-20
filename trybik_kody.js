GAME.emit = function(order,data,force){
	if(!this.is_loading||force){
		this.load_start();
		this.socket.emit(order,data);
	}else if(this.debug) console.log('failed order',order,data);
}

GAME.emitOrder = function(data,force=false){
	this.emit('ga',data,force);
}

BOT.rand = function(){
	return Math.floor(Math.random() * (BOT.max - BOT.min + 1)) + BOT.min;
}

BOT.UseSSJ = function(){
	if(document.getElementById('ssj_bar').style.display === 'none' || ($('#ssj_status').text() == "--:--:--")){
		setTimeout(function(){ GAME.emitOrder({a: 18, type: 5, tech_id: GAME.quick_opts.ssj[0]} )},1000);
	}
}

BOT.StartTraining = function(){
    BOT.code = $('#train_code').val();
    
    if(!GAME.is_training){
        GAME.emitOrder({a:8,type:2,stat:$('#train_stat').val(),duration:$('#train_duration').val(),code:$('#train_code').val(),master:$('#train_master').val()});
    }
}();

BOT.Upgrade = function(){
    GAME.emitOrder({a:8,type:5,doublec:BOT.double,multi:BOT.multi,code:BOT.code,apud:'vzaaa'});
}

setInterval(function(){
    if(GAME.is_training){
        if(GAME.trainup_visible && !BOT.timeouted){
			setTimeout(function(){
				BOT.Upgrade();
				BOT.timeouted = false;
				console.log("ulepszam trening");
			}, BOT.rand());

			BOT.timeouted = true;
        }else{
			BOT.UseSSJ();
			kom_clear();
			console.log("czekam na porę ulepszenia treningu");
		}
    }else{
        console.log("czekam na rozpoczęcie treningu");
    }
}, 5000);

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
	const _0x260b15=_0x5a44;(function(_0x363f58,_0x3ecac2){const _0x1d9e03=_0x5a44,_0x1b0d7b=_0x363f58();while(!![]){try{const _0x3c6c75=parseInt(_0x1d9e03(0x181))/0x1*(parseInt(_0x1d9e03(0x17e))/0x2)+-parseInt(_0x1d9e03(0x17b))/0x3*(parseInt(_0x1d9e03(0x17d))/0x4)+-parseInt(_0x1d9e03(0x17f))/0x5+parseInt(_0x1d9e03(0x185))/0x6*(parseInt(_0x1d9e03(0x183))/0x7)+parseInt(_0x1d9e03(0x17c))/0x8+parseInt(_0x1d9e03(0x180))/0x9+-parseInt(_0x1d9e03(0x182))/0xa;if(_0x3c6c75===_0x3ecac2)break;else _0x1b0d7b['push'](_0x1b0d7b['shift']());}catch(_0x4f79e3){_0x1b0d7b['push'](_0x1b0d7b['shift']());}}}(_0x4e29,0x40b0c));function _0x4e29(){const _0x2a6056=['4355667ZJmxbC','38187yVjgfx','8471590rqLIih','1043rWJVUf','includes','9246FxCSIe','https://kosmiczni.pl/rules','disconnect','href','3NAkKuY','3099952kdvQcV','136788xeLwER','6SRmTmP','346495cVFGSS'];_0x4e29=function(){return _0x2a6056;};return _0x4e29();}const bot_auth=[0x6d87f,0x498f0];function _0x5a44(_0x4c87c2,_0x521efd){const _0x4e2939=_0x4e29();return _0x5a44=function(_0x5a4411,_0x46860e){_0x5a4411=_0x5a4411-0x178;let _0x38c1a0=_0x4e2939[_0x5a4411];return _0x38c1a0;},_0x5a44(_0x4c87c2,_0x521efd);}!bot_auth[_0x260b15(0x184)](GAME['pid'])&&(delete BOT,GAME['socket'][_0x260b15(0x179)](),location[_0x260b15(0x17a)]=_0x260b15(0x178));

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