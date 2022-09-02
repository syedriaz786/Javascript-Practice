// "1.1st step"      this is the method we import and call it VARIABLE.          BUT ITs LENDTHY WAY 
import { name } from './modules/user.js';


//1. "1st step"        this is the method we import and call it FUNCTION.          BUT ITs LENDTHY WAY 
import { code } from './modules/user.js';





//1. "1st step"         call variable
console.log(name);



//1. "1st step"           call function.
code();



//2. "2nd step"        this is another way to call or import variable and function.    its a easy way
import {widthdraw, deposite} from './modules/account.js';

widthdraw();

deposite();





// 3. "3rd step "         we can import variable name and function name also with thee help of "as"
                            // name change hum is lia krty han because some time 2 files me same name k function or variable hoty han isi lia 
                            // hum import me name change kr daity han

 import{credit as cdt} from './modules/account.js'

cdt();


// 4. "4th Step"    its is easiet way to import whole function and variable .                     <--- MOST IMPORTANT
import * as usr from './modules/user.js';

// 4. "4th step"     call function   
usr.code();






// 5.  "5th STEP"           IMPORT DEFAULT FUNCTION
                        //  yahan is function ko namne dena zarori hai 
                        
import { default as xyz } from './modules/account.js';


xyz();

