let home = 'Sizda hozir random sonlar chiqishni boshlaydi';
alert(home);

let number = Math.floor(Math.random() * 100) + 1;
alert(`Random orqali chiqgan son: ${number}`);

let son = 'Biz random orqali chiqgan sonni 2ga kopaytiramiz va bolamiz';
alert(son);

let multiplied = number * 2;
let divided = multiplied / 2;
let finalResult = divided / 3;

alert(`Random orqali chiqgan son ${number}\nBiz uni 2ga kopaytirib ${multiplied} sonini chiqardik\nBiz uni 2ga bolib ${divided} sonini chiqardik\nva shu sonni 3ga bolib ${finalResult.toFixed(2)} sonini chiqardik.`);
