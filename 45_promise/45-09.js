try{
	setTimeout(()=>{ throw new Error('Error');},1000);
}catch(e){
	console.error(e);
}