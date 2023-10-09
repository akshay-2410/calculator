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


nums.onclick= function(event){
    oper_check=0
    let val = event.target.textContent;
    console.log(event.target.id)
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
    else if((val>='0'&&val<='9')||val=='.')
        input(val);

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
            
        oper_check=1
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
    value = parseFloat(eval(value)).toFixed(8)
    screen.innerHTML = value
}

