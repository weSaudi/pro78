function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rkVtdGRZ2c":
        Script1();
        break;
  }
}

function Script1()
{
  const player = GetPlayer();
var url="https://script.google.com/macros/s/AKfycbzDM9pPkooDiRx9LTniY_ynuZJPRpnpw_XOhj6yJEGI9g0azcCOk7NqES8U5FYNM9zaHg/exec";


var userpass =player.GetVar("uvr0");
let vcomein = player.GetVar("comein");
let uservr1;
let uservr2 = player.GetVar("uvr2");



fetch(url)
.then(res => res.json())
.then(data => 
{
for (var i = 49; i < data.content.length && i<101; i++) 
	{
    if(userpass == data.content[i][0] && i<101)
		{
      vcomein=true;
      uservr1=data.content[i][1];
      player.SetVar("comein",vcomein)
      player.SetVar("uvr1",uservr1)
      player.SetVar("passtest","تم تأكيد البيانات اضغط تسجيل مرة آخرى")
      i=101;
      console.log(userpass);
    }

     else{
      player.SetVar("passtest","كلمة المرور خاطئة")
      console.log(userpass);
    }
	}
})

}

