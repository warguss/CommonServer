
var express = require('express');
var http = require('http');
var app = express();
app.use(express.json())

/******************************************
 * 
 ******************************************/

function DayManager()
{
	this.DayMap = {};
	/*
	this.DayMap['monday'] = "- [가슴][Warm Up] 플랫 벤치 빈봉/30Kg X 12Rep\n- [WorkOut 1] 플랫 벤치 60Kg/70Kg/80Kg/85Kg/90Kg X 5Reps\n[WorkOut 2] 인클라인 스미스 20Kg/30Kg/40Kg/50Kg X 12Reps\n- [WorkOut 3] 케이블 5Kg/10Kg/15Kg/20Kg X 12Reps\n- [WorkOut 4] 케이블 or 팩 덱플라이 5Kg/10Kg/15Kg/20Kg X 12Reps\n[WorkOut 5] 딥스(가능하면..) 4Set X 12Reps\n[WorkOut 6] 플랫 벤치(Negative) 30Kg x 4Set X 12Reps"
	this.DayMap['tuesday'] = "- [어깨][Warm Up] 덤벨 프레스 13~15Kga X 5Set X 15Rep\n- [WorkOut 1] 스미스 시티드 밀리터리 프레스30Kg X 12Reps , 40Kg/50Kg/55Kg/60Kg/65Kg X 5Reps\n[WorkOut 2] 사이드 래터럴 레이즈  16Kg ~ 9Kg X 12Reps\n- [WorkOut 3] (후면)팩 덱플라이 35Kg ~ 5Kg X 12Reps\n- [WorkOut 4] 밀리터리 프레스 빈봉/5Kg/10Kg/15Kg/20Kg 4Set X 12Reps"
	this.DayMap['wednesday'] = "- [등][Warm Up] 컨벤 데드 40/50Kg x 12Reps\n- [WorkOut 1] 컨벤 데드 , 80Kg/100Kg/120Kg/130Kg/140Kg X 5Reps\n[WorkOut 2] 로우 빈봉 X 2SET X 12Reps, 10Kg/15Kg/20Kg/15Kg/10Kg x 12Reps\n- [WorkOut 3] 랫 풀 다운 25Kg/30Kg/35Kg/40Kg X 12Reps\n- [WorkOut 4] 풀업 보조 머신 15Kg/20Kg/25Kg/25Kg/25Kg X 12Reps"
	this.DayMap['thursday'] = "- [하체][Warm Up] 스쿼트 빈봉/40Kg x 12Reps\n- [WorkOut 1] 스쿼트 , 70Kg/80Kg/90Kg/100Kg/110Kg X 5Reps\n[WorkOut 2] 레그 프레스기본/40Kg/80Kg/120Kg/120Kg x 8~12Reps\n- [WorkOut 3] 레그 익스텐션  25Kg/30Kg/35Kg/40Kg/45Kg X 12Reps"
	*/
}

DayManager.prototype.addDay = function(key, value)
{
	console.log("add");
	this.DayMap[key] = value;
}

DayManager.prototype.getDay = function(key, value)
{
	return this.DayMap[key];
}

app.post('/init.api', function(req, res) {
			console.log( req.body );
			var init = req.body['userRequest']['user']['id']
			var key = req.body['action']['params']['Day']

			var value = g_Manager.getDay(key);
			var test;
			if ( value == undefined )
			{
				test = { 'version': '2.0', 'template': { 'outputs': [ { 'simpleText': { 'text': '전달 데이터가 이상합니다' } }] }}
			}
			else
			{
				test = { 'version': '2.0', 'template': { 'outputs': [ { 'simpleText': { 'text': value } }] }}

			}

			res.send(test);
			//res.send(test2);
		});

http.createServer(app).listen(8080, function()
		{
			console.log('listen');
		});

var g_Manager = new DayManager();
g_Manager.addDay('monday', "- [가슴][Warm Up] 플랫 벤치 빈봉/30Kg X 12Rep\n- [WorkOut 1] 플랫 벤치 60Kg/70Kg/80Kg/85Kg/90Kg X 5Reps\n- [WorkOut 2] 인클라인 스미스 20Kg/30Kg/40Kg/50Kg X 12Reps\n- [WorkOut 3] 케이블 5Kg/10Kg/15Kg/20Kg X 12Reps\n- [WorkOut 4] 케이블 or 팩 덱플라이 5Kg/10Kg/15Kg/20Kg X 12Reps\n- [WorkOut 5] 딥스(가능하면..) 4Set X 12Reps\n- [WorkOut 6] 플랫 벤치(Negative) 30Kg x 4Set X 12Reps");
g_Manager.addDay('tuesday', "- [어깨][Warm Up] 덤벨 프레스 13~15Kg X 5Set X 15Rep\n- [WorkOut 1] 스미스 시티드 밀리터리 프레스30Kg X 12Reps , 40Kg/50Kg/55Kg/60Kg/65Kg X 5Reps\n- [WorkOut 2] 사이드 래터럴 레이즈  16Kg ~ 9Kg X 12Reps\n- [WorkOut 3] (후면)팩 덱플라이 35Kg ~ 5Kg X 12Reps\n- [WorkOut 4] 밀리터리 프레스 빈봉/5Kg/10Kg/15Kg/20Kg 4Set X 12Reps");
g_Manager.addDay('wednesday', "- [등][Warm Up] 컨벤 데드 40/50Kg x 12Reps\n- [WorkOut 1] 컨벤 데드 , 80Kg/100Kg/120Kg/130Kg/140Kg X 5Reps\n- [WorkOut 2] 로우 빈봉 X 2SET X 12Reps, 10Kg/15Kg/20Kg/15Kg/10Kg x 12Reps\n- [WorkOut 3] 랫 풀 다운 25Kg/30Kg/35Kg/40Kg X 12Reps\n- [WorkOut 4] 풀업 보조 머신 15Kg/20Kg/25Kg/25Kg/25Kg X 12Reps");
g_Manager.addDay('thursday', "- [하체][Warm Up] 스쿼트 빈봉/40Kg x 12Reps\n- [WorkOut 1] 스쿼트 , 70Kg/80Kg/90Kg/100Kg/110Kg X 5Reps\n- [WorkOut 2] 레그 프레스기본/40Kg/80Kg/120Kg/120Kg x 8~12Reps\n- [WorkOut 3] 레그 익스텐션  25Kg/30Kg/35Kg/40Kg/45Kg X 12Reps");
g_Manager.addDay('friday', "금요일엔 유산소합시다 +  부족한 운동 채우기");
g_Manager.addDay('saturday', "토요일엔 유산소 합시다 + 부족한 운동 채우기");
g_Manager.addDay('sunday', "일요일은 쉬자?");

