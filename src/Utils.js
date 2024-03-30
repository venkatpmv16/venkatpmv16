const isArrayEmpty =(arr) =>{
    if(arr !== undefined && arr !== null && arr.length > 0){
        return true
    }
    return false
}

const dumplogs = (message)=>{
    console.log(message);

    // sends it to tool for tracking
}

export {isArrayEmpty, dumplogs}