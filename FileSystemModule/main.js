let {readFile, writeFile} = require('fs');

readFile('file.txt','utf-8', (error, text)=>{
	if(error) throw error;
	console.log("The file contains:", text);
});

writeFile("graffiti.txt", "Node was here", err =>{
	if(err) console.log(`Failed to write file: ${err}`);
	else console.log("File written");
})