function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65slzdc1Tru":
        Script1();
        break;
      case "6CwedocpbPS":
        Script2();
        break;
      case "6GWmlohNA5z":
        Script3();
        break;
      case "5UmWzr0rH2H":
        Script4();
        break;
      case "5piLUfmAK6j":
        Script5();
        break;
      case "5sXQjkd8yNp":
        Script6();
        break;
      case "5aKo2WqhVO9":
        Script7();
        break;
      case "6eM8W85vhb5":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

