//      using while	_loop

//var variable=["raja"];
//	while(input!=="quit"){
//		var input=prompt("What you have to do- new,list,delete or quit");
//
//		if(input==="new"){
//			var otherVariable=prompt("Add a value");
//			variable.push(otherVariable);
//
	//	}
//		
	//		else if (input==="list"){
//				console.log(variable);
//			}
//				else if(input==="delete"){
//					variable.pop();
//					console.log(variable);
//				}
//}
	
//alert("you r successfully come out");




//  second method (using forEach loop)




// var variable=["raja"];
// 	while(input!=="quit"){
// 		var input=prompt("What you have to do- new,list,delete or quit");
// 
// 		if(input==="list"){
// 			console.log("**********");
// 			variable.forEach(function(variable,i){
// 				console.log(i + ":" + variable);
// 			console.log("**********");
// 			});
// 
// 			
// 		}
// 		
// 			else if (input==="new"){
// 				var otherVariable=prompt("add a new value");
// 				variable.push(otherVariable);
// 			
// 			}
// 				else if(input==="delete"){
// 					var index=prompt("enter the index no.");
// 					variable.splice(index,1)
// 				}
// }
	
// alert("you r successfully come out");




// third method (using function)




var variable=["raja"];
	while(input!=="quit"){
		var input=prompt("What you have to do- new,list,delete or quit");

		if(input==="list"){
			list();
		}
		
			else if(input==="new"){
					new1();
			}
				else if(input==="delete"){
						delete1();
				}
}
	
alert("you r successfully come out");

function list(){
			console.log("**********");
			variable.forEach(function(variable,i){
			console.log(i + ":" + variable); 
			console.log("**********");
	});
}


function new1(){
		var otherVariable=prompt("add a new value");
				variable.push(otherVariable);
			
}

function delete1(){
		var index=prompt("enter the index no.");
					variable.splice(index,1)
				
}