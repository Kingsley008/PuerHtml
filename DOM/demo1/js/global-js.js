//由javascript来创建请求对象
var request1 = createReuqest();
var request2 = createReuqest();

function createReuqest(){
	var request= null;
	try {
		 request = new XMLHttpRequest();
	} catch (trymicrosoft) {
		try{
    		//创建微软IE游览器的请求对象
    		request = new ActiveXObject("Msxm12.XMLHTTP");
    	}catch(othermicrosoft){
             
    		try{
    			request = new ActiveXObject("Microsoft.XMLHTTP");
    		}catch(failed){
    			//如果出现错误，将request设置为空
    			request = null;
    		}
    	}
    
	}
	if(request == null){
		alert("Error creating request object!")
	}else{
		return request;
	}
	
}
