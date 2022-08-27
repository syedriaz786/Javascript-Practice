let fetchbtn = document.getElementById("fetchbtn");
let spinner = document.getElementById("spinner");


// fetchbtn.addEventListener('click', buttonClickHandler);

// function buttonClickHandler(){

//    console.log("click fetch button to recieve Data");


               //  <-- through this object we can send and recieve data from server or anywhere.
               //  <-- yahan hum connection Established kr rhe han

            //    const xhr = new XMLHttpRequest(); 

        // is "OPEN" object me 3 parameter dalty han 1. hame data "GET" se data send or  recieve karna hai ya "POST" se  2. file name with path or url 3. hum is procedure ko asynchronously run krna chahty han ya sychronously if "asynchronously" we pass "TRUE"  of not we pass "FALSE". ............. yahan humne server client ki request recieve hoti hai.


        // xhr.open('Get', 'json.json', true);   


//   ye method hume ye facility provide krta hai k data ane tk hum koi or function ya task perform kr sky ya loader or spinner show kra sky.     ............... yahan server data ko load krta hai ye processing state hai

//    xhr.onprogress = function(){                 
//     console.log('on progress');
//    }

   // ye method server se jo data ata hai usko print krane me madad krta hai or agar data kisi reason ki waja se data nhi aya to kia print krana hai using condition 

//    xhr.onload = function(){

//     if (this.status == 200){
//         console.log(this.responseText)
//     }
//     else{
//         console.log("Some Error Occured");
//     }
//    }

   // is method se hum request send krty han server ko , otherwise request will not send.

//    xhr.send();

// }


                                        // OR

                        // yahan humne "HTTPS Online REST API" ka istemal kia

// let onlineRestApi = document.getElementById("onlineRestApi");

// onlineRestApi.addEventListener('click', buttonClickHandler);

// function buttonClickHandler(){

//    console.log("click fetch button to recieve Data");


//                const xhr = new XMLHttpRequest(); 


//   xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);   // <--- Onine HTTPS REST API


//    xhr.onprogress = function(){                 
//     console.log('on progress');
//     spinner.style.display="block";

//    }

//    xhr.onload = function(){

//     if (this.status == 200){
//         console.log(this.responseText)
//         spinner.style.display="none";
//     }
//     else{
//         console.log("Some Error Occured");
//         // spinner.style.display="none";
//     }
//    }


//    xhr.send();

// }

                       // Yahan hum "ONINE REST API" pr create data kre ge "POST" Method Ka istemal kar k


// let Post_OR_Add_Data = document.getElementById("Post_OR_Add_Data");

// Post_OR_Add_Data.addEventListener('click', buttonClickHandler);

// function buttonClickHandler(){

//    console.log("click fetch button to recieve Data");


//                const xhr = new XMLHttpRequest(); 


//   xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);   // <--- ONLINE HTTPS REST API


//   xhr.getResponseHeader('content-type','application/json');


// let params = `{"name":"tester",
//                  "salary": "123",
//                  "age":"23",
//                  "id": 25}`;
  

//    xhr.onload = function(){

//     if (this.status == 200){
//         console.log(this.responseText)
       
//     }
//     else{
//         console.log("Some Error Occured");
    
//     }
//    }


//    xhr.send(params);

// }


                // Yahan hum "ONINE REST API" pr update data kre ge "PUT" Method Ka istemal kar k


// let Update_Data = document.getElementById("Update_Data");

// Update_Data.addEventListener('click', buttonClickHandler);

// function buttonClickHandler(){

//    console.log("click fetch button to recieve Data");


//                const xhr = new XMLHttpRequest(); 


//   xhr.open('PUT', 'https://dummy.restapiexample.com/api/v1/update/21', true);   // <---ONLINE HTTPS  REST API


//   xhr.getResponseHeader('content-type','application/json');


// let params = `{"name":"tester",
//                  "salary": "123",
//                  "age":"23",
//                  "id": 25}`;
  

//    xhr.onload = function(){

//     if (this.status == 200){
//         console.log(this.responseText)
       
//     }
//     else{
//         console.log("Some Error Occured");
    
//     }
//    }


//    xhr.send(params);

// }


                 // Yahan hum "ONINE REST API" pr DELETE data kre ge "DELETE" Method Ka istemal kar k

// let Update_Data = document.getElementById("Update_Data");

// Update_Data.addEventListener('click', buttonClickHandler);

// function buttonClickHandler(){

//    console.log("click fetch button to recieve Data");


//                const xhr = new XMLHttpRequest(); 


//   xhr.open('DELETE', 'https://dummy.restapiexample.com/api/v1/delete/2', true);   // <---ONLINE HTTPS  REST API


//   xhr.getResponseHeader('content-type','application/json');


// let params = `{"name":"tester",
//                  "salary": "123",
//                  "age":"23",
//                  "id": 25}`;
  

//    xhr.onload = function(){

//     if (this.status == 200){
//         console.log(this.responseText)
       
//     }
//     else{
//         console.log("Some Error Occured");
    
//     }
//    }


//    xhr.send(params);

// }