new Promise(
    (_,reject)=>
        reject(new Error('rejected'))
    )
    .then( 
        (undefined,e) =>
            console.log(e) 
    )
    .catch(e=>{
        console.log(e);
    })