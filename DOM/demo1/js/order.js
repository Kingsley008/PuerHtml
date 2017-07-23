
function getCutsomerInfo(){
	createRequest();
	var phonenumber = document.getElementById("phonenumber").value;
	var url = "/AjaxDemo/wbd/getCustomerInfo?phonenumber="+escape(phonenumber);
	request.open("GET", url, true)
	request.send(null);
	//当浏览器得到响应时会运行这个函数
	request.onreadystatechange = updatePage;
}

function updatePage(){
	
	//完全响应后才会执行业务逻辑代码
	if(request.readyState == 4){
		//TODO
		//得到服务器的响应数据
		if(request.status==200){
	
		var Address = request.responseText;
		document.getElementById("address").value = Address;
		
		}else{
			alert("Error creating request 404!")
		}
		
	}
	
}