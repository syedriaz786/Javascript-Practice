let student ={                        // <--- student aik js object hai

    name: "Riaz",
    age: 25
}

let ans = JSON.stringify(student);     // <--- ye stringify data ko json data bana dega
console.log(ans);



let str = ['{"name":"Riaz","age":"23","roll num":"45"}'];     //   <-- ye data json daata hai jo json file me hota hai

let obj = JSON.parse(str);                       //   <--  yahan humne parse ki madad se json data ko javascript object bana dia

console.log(obj);
