console.log('This would be the main JS file.');

/*function callApiSkyScanner(){
    //var urlsky='http://partners.api.skyscanner.net/apiservices/pricing/v1.0/';
    var urlsky='http://business.skyscanner.net/apiservices/pricing/v1.0/';
  
try  {
    var dataSky = {}; 
    dataSky['apiKey']='mo374098407154598537526911452749';
    //dataSky['apiKey']='prtl6749387986743898559646983194';
    
    dataSky['country']='ES';
    dataSky['currency']='EUR';
    dataSky['locale']='es-ES';
    dataSky['originplace']='BCN';
    dataSky['destinationplace']=' LHR';
    dataSky['outbound date']=' 2016-12-12';
    dataSky['adults']='1';              
    var result = false;
    dummy = JSON.stringify(dataSky);
    dummy = encodeURIComponent(String(dummy));
    
    $.ajax({
        url: urlsky,
        async:false,
        timeout: 200,
        type: 'post',
        dataType: 'json',
        data: dummy,
        beforeSend: function() { },
        error: function(request,error) {			
                if (error == 'timeout') {
                    alert('Timed out');
                }
                else {
                    alert('ERROR: ' + request.statusText);
                }												
            },
        success: function(data)
            {
                if (data != 'null') {						  
                    result=data;
                }
                else {
                    result=true;
                }
            }
        });
	}
	catch(exception)
	{
		txt="There was an error on callApiSkyScanner function. <br>";
		txt+="Error description: " + exception.message + "<br>";
		txt+="Click OK to continue. <br>";
		alert(txt);
	}
	finally {
		return result;
	}
}*/

function showAlert() {
    if (document.forms["data"]["fromname"].value == "" || document.forms["data"]["toname"].value == "") {
        alert("Please complete the text fields");
    }
    // Dat hardcode
    else if (document.forms["data"]["fromname"].value == document.forms["data"]["toname"].value == "") {
        alert("You don't need to take a plane for this hackathon! ");
    }
    /*if (document.forms["data"]["fromname"].value == "BCN") {
        if (document.forms["data"]["toname"].value == "BCN") { //HackUPC
            alert("Please complete the text fields");
        }
        if (document.forms["data"]["toname"].value == "OTP") { //HackConnect
            alert("Please complete the text fields");
        }
        if (document.forms["data"]["toname"].value == "HEL") { //Junction
            window.open("Stuff/LocalHackDay.html");
        }
        if (document.forms["data"]["toname"].value == "JFK") { //HackNY
            window.open("Stuff/LocalHackDay.html");
        }
        if (document.forms["data"]["toname"].value == "---") { //Local Hack Day
            window.open("Stuff/LocalHackDay.html");
        }
        if (document.forms["data"]["toname"].value == "LHR") { //Hack London
            window.open("Stuff/LocalHackDay.html");
        }
        if (document.forms["data"]["toname"].value == "LGW") { //Oxford
            window.open("Stuff/LocalHackDay.html");
        }
        if (document.forms["data"]["toname"].value == "BHX") { //Brum
            window.open("Stuff/LocalHackDay.html");
        }
        if (document.forms["data"]["toname"].value == "BHX2") { //Aston
            window.open("Stuff/LocalHackDay.html");
        }
    }*/   
}