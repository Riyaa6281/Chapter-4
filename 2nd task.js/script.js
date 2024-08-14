    // <!-- Problem#01

    
        //  var name= "Usama" , fName= "ali", gender= "Male";

    
    // Problem#02 
    // (legal declaration)
    
    //     var $name = "huzaifa";
    //     var fName = "Asif";
    //     var _age = 20;
    //     var fvrt_fruit = "mango";
    //     var fvrtNumber_ = 4;


    //     // (illegal declaration)

    //     var #Name= "Huzaifa";
    //     var @fName = "Asif";
    //     var 1age = 20;
    //     var fvrt^fruit = "mango";
    //     var FvrtNumber& = 4;

    
    
    // Problem#03 

    
    document.write("<h2>"+"Rules for naming JS Variables"+"</h2>");
//  (b) 
    
        var num= "number";
        var char= "$";
        var char1= "_";

    document.write(" Variable names can only contain" + " "+num+", "+char+" and "+char1+". For example $my_1stVariable. <br/>" );
    console.log(" Variable names can only contain" + " "+num+", "+char+" and "+char1+". For example $my_1stVariable. <br/>" );
// (C)
    var letter= "letter";
    document.write(" Variables must begin with a "+letter+", "+char+" and "+char1+". For example $name, _name or name . <br/>");
// (d)
    document.write("Variable names are case sensitive.<br/>");
//  (e)
    var key= "keywords";
    document.write("Variable names should not be JS "+key+".");