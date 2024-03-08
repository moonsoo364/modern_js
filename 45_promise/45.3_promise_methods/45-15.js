new Promise((_,reject) => reject(new Error('reject')))
    .catch(e => 
        console.log(e)
    );