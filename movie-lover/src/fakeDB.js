const addTime=(time)=>{
    localStorage.setItem("watchTime" , time);
}

const getTime=()=>{
    let time = localStorage.getItem("watchTime");
    if(time){
        return parseInt(time);
    }
    else{
        return 0;
    }

}

const clearAll=()=>{
    localStorage.clear();
}


export {
    addTime,
    getTime,
    clearAll
}