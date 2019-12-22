//document.getElementById('su').value="none";
//var container = document.getElementById('con-ar');
//var ele = container.getElementsByClassName('result-op xpath-log');
//ele[1].style.display="none";
//container.style.display="none";
//document.onload = clearad();

setInterval(function(){
	//document.getElementById('content_right').style.display="none";
	document.getElementById('content_right').innerHTML = "X";
	var container = document.getElementById('content_left');
	var allele = container.getElementsByTagName('*');
	//alert(allele.length);
	for(var i = 0; i<allele.length; i++){
		//allele[i].style.display = "none";
		var _theid = parseInt(allele[i].getAttribute("id"));
		//console.log(_theid);
		if((_theid<100000)&&(_theid>100)){
			//allele[i].style.display = "none";
			allele[i].innerHTML = "X";
		}else{
			var subele = allele[i].getElementsByClassName('m ec_tuiguang_pplink');
			if(subele.length>0){
				//allele[i].style.display = "none";
				allele[i].innerHTML = "X";
				console.log('one blocked2');
			}else{
				if(allele[i].shadowRoot!= null){
					//console.log(allele[i].shadowRoot);
					//allele[i].ShadowRoot.remove();
					$('::shadow div').remove();
					console.log('one blocked3');
					/*
					var shadowele = allele[i].shadowRoot.getElementsByClassName('m ec_tuiguang_pplink');
					if(shadowele.length>0){
						allele[i].createShadowRoot();
						console.log('one blocked3');
					}else{
						console.log('all clear');
					}*/
				}
			}
		}
	}
	console.log('done once');
},2000);

