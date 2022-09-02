let account_no = 54556445;
let account_saving = "Current";

 function widthdraw(){


console.log("amount Deducted...");

}

 function deposite(){


    console.log("balance Updated...");

}

function credit(){


    console.log("Successfully credit ...");

}



//2. "2nd step" this is another way to export variable and functions.      its  easy way
export{ widthdraw, deposite, credit};





// 5.  "5th STEP" NOW WE MAKE DEFAULT "FUNCTION" IN MODULE.

export default function(){

    console.log("this is default function in Module");
}