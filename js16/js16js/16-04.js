function fn(){
    let ct = 5
    id = setInterval(()=>{
        if(ct>0){
            console.log(`${ct}`);
        }else if(ct==0){
            console.log('펑!');
            alert('펑!')
            clearInterval(id)
        }
            ct--;                
    },1000)
    console.log(`타이머ID(${id})가 동작합니다.`)    
}
function fnx(){
    clearInterval(id)
    console.log(`타이머ID(${id})가 사용자에 의해 중지됨`)
    alert(`중지됨`)
}