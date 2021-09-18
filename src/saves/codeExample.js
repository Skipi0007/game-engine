//TODO: code examples for saves

const fs = require("fs");

fs.writeFile("gameProgress.js", JSON.stringify(saveData), function(error){

    if(error) throw error; // если возникла ошибка
    console.log("File content is:");
    let data = fs.readFileSync("gameProgress.js", "utf8");
    console.log(data);  // выводим считанные данные
});

fs.readFile("hello.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});