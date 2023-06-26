const Calculator = {
    add(x,y){return parseInt(x)+parseInt(y)},
    sub(x,y){return x-y},
    mul(x,y){return x*y},
    div(x,y){return x/y},
    calculate(e1, e2, exp){
        let x = document.getElementById(e1).value;
        let y = document.getElementById(e2).value;
        let result = 0;
        if(exp == "add")
        {
            result = this.add(x,y);
        } else if( exp == 'sub')
        {
            result = this.sub(x,y);
        } else if( exp == 'mul')
        {
            result = this.mul(x,y);
        } else 
        {
            result = this.div(x,y);
        }
        document.getElementById("result").value = result;
    }
}

export{Calculator}