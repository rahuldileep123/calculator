const displayContent =(content)=>{
    result.value+=content
}
const clearContent=()=>{
    result.value=''
}
const finalResult=()=>{
    input=result.value
    try{result.value=eval(input)}
    catch{
        result.value='error'
    }  
}
const deleteDigit=()=>{
    result.value=result.value.slice(0,-1)
   
}