let nums = document.getElementById("numbers")
let screen =  document.getElementById("number-screen")
let operid = document.getElementById("oper")
let value='';
let oper_check = 0
let oper =''
let ext = document.getElementById("sci-cal");
let num_cnt = document.getElementById("num-cnt")
let sci_num = document.getElementById("sci-num")
let button = document.querySelectorAll(".button"), extended=false
let decimal=false;
let decimal2 = false

nums.onclick= function(event){
    oper_check=0
    let val = event.target.textContent;
    console.log(val)
    if(event.target.id=="change"){
        value = -1*value
        print()
        }   
    else if(event.target.id=="allclear"){
        value = ''
        print()
    }else if(event.target.id=="clear")
    {
        value = value.slice(0,-1)
        print()
    }
    else if((val>='0'&&val<='9'))
        input(val);
    else if(val=='.')
    {
        console.log("val = "+val)
        for(i = 0; i<value.length; i++)
        {
            if(value[i]=='.')
            {
               decimal = true;
               break;
            }
            else{
                decimal = false;
            }
        }

        if(decimal)
            {
                input("")
                print();
            }
            else{
                input(".")
                print();
            }
    }

}

operid.onclick = function(event){
    
    oper = event.target.textContent;
    console.log(oper)

    if(value==''){
            screen.innerHTML = "invalid input"
    }
    else{

        if(oper=="="){
            calculate()
        }
        else{
            if(oper_check==0)
            {
                if(oper == '÷')
                    input("/")
                else if(oper == '×')
                    input("*");
                else
                    input(oper)

                    oper_check = 1;
            }else
            {
                value = value.slice(0,-1)
                if(oper == '÷')
                    input("/")
                else if(oper == '×')
                    input("*");
                else
                    input(oper)
                print()
            }
        }
            
        
    }
}

function input(val){
    value+=val;
    print()
}

function print(){
    screen.innerHTML = value;
}

function calculate(){
    console.log(value)
    for(i=0;i<value.length;i++){
        if(value[i]=='/'||value[i]==".")
        {
            decimal2=true
            break;
        }
        else{
            decimal2 = false;
        }

    }

    if(decimal2){
        value = parseFloat(eval(value)).toFixed(5)
    }
    else{
        value = eval(value)
       
    }
    screen.innerHTML = value
}

