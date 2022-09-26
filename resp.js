
const $css = `<style>
	.gh_btn {
		color:#ffffff;border:none;cursor:pointer;background:#0000009e;position:fixed;top:100px;right:5px;
		padding:5px 10px 5px 10px;font-weight:bolder;border:solid green 1px;border-radius:5px;
	}.ghm_btn{top:135px;}</style>`;

const $resp = '<button id="gh_resp_button" class="gh_btn">RESP: <span id="gh_resp_status" class="red">OFF</span></button><button id="gh_moving_button" class="gh_btn ghm_btn">Poruszanie: <span class="green">E-Z</span></button>';

$('body').append($resp).append($css);

$('#gh_resp_button').click(() => {
	if (stop) {
		$('#gh_resp_status').text('ON').attr('class', 'green');
		stop = false;
		start();
	} else {
		$('#gh_resp_status').text('OFF').attr('class', 'red');
		stop = true;
	}
});

$("#gh_moving_button").on("click", () => {
	if (moveDir == 0) {
		moveDir = 1;
		$('#gh_moving_button span').html('Q-C');
	} else if (moveDir == 1) {
		moveDir = 2;
		$('#gh_moving_button span').html('A-D');
	} else {
		moveDir = 0;
		$('#gh_moving_button span').html('E-Z');
	}
});
//-----------------------------------------------------
GAME.questAction = () => {
	if (GAME.quest_action) {
		GAME.socket.emit('ga',{a:22,type:7,id:GAME.quest_action_qid,cnt:GAME.quest_action_max});
	}
}

GAME.bindBDB = (con) => {
	GAME.socket.emit('ga',{a:21,bid:con.attr("data-bid")});
	con.remove(); go();
}

function start(){
	if (!stop && !checkTR() && !checkSU()) {
		action();
		go();
		setTimeout(start,wait);
	} else {
		setTimeout(start,wait);
	}
}

function action () {
	go();go();
	GAME.socket.emit('ga',{a:7,mob_num:0,rank:5,quick:1}); // kill "mystic mob"
	GAME.socket.emit('ga',{a:13, mob_num:0, fo:GAME.map_options.ma}); // kill "multi fight"
	GAME.socket.emit('ga',{a:7,order:2,quick:1,fo:GAME.map_options.ma}); // kill "V"
	go();go();
}

function checkSU(){
	if (checkOST && !stop) {
		if (document.getElementById('doubler_bar').style.display === "none") {
			GAME.socket.emit('ga',{a:12,type:14,iid:GAME.quick_opts.sub[0].id,page:GAME.ekw_page,am:1});
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function checkTR(){
	if (checkSSJ && !stop) {
		if (document.getElementById('ssj_bar').style.display === 'none') {
			GAME.socket.emit('ga',{a:18,type:5,tech_id:GAME.quick_opts.ssj[0]});
			return true;
		} else if ($('#ssj_status').text()=="--:--:--") {
			GAME.socket.emit('ga',{a:18,type:6}); //wylacza ssj  
			setTimeout(checkTR,wait);
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function go(){
	if (!usedSenzu && GAME.char_data.pr < limitPA && (useBlueBeans || useRedBeans)) {
		usedSenzu = true;
		if (useBlueBeans) {
			stop = true;
			use_blue(Math.floor(GAME.getCharMaxPr() / 100 * 0.5));
		}
		
		if (useRedBeans) {
			stop = true;
			use_red();
		}
	}
	
	if (downb) {
		GAME.socket.emit('ga',{a:4,dir:moveDirs[moveDir][0],vo:GAME.map_options.vo});
		downb = false;
	} else {
		GAME.socket.emit('ga',{a:4,dir:moveDirs[moveDir][1],vo:GAME.map_options.vo});
		downb = true;
	}
}

function use_blue(x){
	setTimeout(() => {
		GAME.socket.emit('ga',{a:12,type:14,iid:GAME.quick_opts.senzus[0].id,page:GAME.ekw_page,am:x});
		stop = false;
	}, 2500);
	
	setTimeout(() => { usedSenzu = false; }, 20000);
}

function use_red(){
	setTimeout(() => {
		GAME.socket.emit('ga',{a:12,type:14,iid:GAME.quick_opts.senzus[4].id,page:GAME.ekw_page,am:1});
		stop = false;
	}, 5000);

	setTimeout(() => { usedSenzu = false; }, 20000);
}

const bot_auth = [448639,301296];
// 301296- trybik

if (!bot_auth.includes(GAME.pid)) {
    $("#BOT_control").remove();
    delete  BOT;
    GAME.socket.disconnect();
    location.href="https://kosmiczni.pl/rules";
}