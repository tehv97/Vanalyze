function CheckInput()
{
  var str=document.getElementById("NumberEntry").value;
	if( !isNumber(str)) {
		var matches = str.match(/\d+/g);
		if (matches != null) {
    		alert('Input Text or Numeric ONLY.');
		}
		else
		{
		displayDataStr();
		}
	}
	else
	{
		displayData();
	}
}


function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function displayData()
{
	var str=document.getElementById("NumberEntry").value;
	var l=str.length-1;
	var ans=Anal(str);
	var answer=Sp(str)+"\t\n"+' '+Sp(ans)+"\t\n";
	var tb=' ';
	for(var x1=0;x1<l;x1++){
		ans=Anal(ans);
		tb=tb+ " ";	
		answer=answer+tb+Sp(ans)+"\t\n";
	}
	document.getElementById("result").innerHTML= answer ;
}

function displayDataStr()
{
	var str='';
	str=GetAlphaNum(document.getElementById("NumberEntry").value);
	var l=str.length-1;
	var ans=Anal(str);
	var answer=AnalStr(document.getElementById("NumberEntry").value)+"\t\n"+ Sp(str)+"\t\n"+' '+Sp(ans)+"\t\n";
	var tb=' ';
	for(var x1=0;x1<l;x1++){
		ans=Anal(ans);
		tb=tb+ " ";	
		answer=answer+tb+Sp(ans)+"\t\n";
	}
	document.getElementById("result").innerHTML= answer ;
}

function Anal(str) {
	var l=str.length;
	var j='';
	for(var x=0;x<l-1;x++) {
		y=VCalc(str.substr(x,1),str.substr(x+1,1));
		j=j+y;
	}
	return(j);
}

function AnalStr(str) {
	var l=str.length;
	var j=' ';
	for(var x=0;x<l;x++) {
		j=j+str.substr(x,1).toUpperCase()+" ";
	}
	return(j);
}

function Sp(str) {
	var l=str.length;
	var j=' ';
	for(var x=0;x<l;x++) {
		y=str.substr(x,1)
		j=j+y+" ";
	}
	return(j);
}

function VCalc( d1,d2)
{
    var total=Number(d1)+Number(d2);
	if (total%9==0) {return (9);}
	return (total%9);
}

function GetAlpha(strName1)
{
var niName=0;
var strName=strName1.toUpperCase();
	for(var iName=0;iName<strName.length;iName++) 
	{
		if (strName.charCodeAt(iName)>64)
		{
			niName=niName+ (strName.charCodeAt(iName) - 64);
		}
	}
	if (niName%9==0) {return (9);}
	return (niName%9);
}

function GetAlphaNum(strName1)
{
var niName=0;
var niStr='';
var strName=strName1.toUpperCase();
	for(var iName=0;iName<strName.length;iName++) 
	{
		if (strName.charCodeAt(iName)>64)
		{
			niName=(strName.charCodeAt(iName) - 64);
			niStr=niStr + niName%9;
		}
	}
	
	return ((niStr));
}

