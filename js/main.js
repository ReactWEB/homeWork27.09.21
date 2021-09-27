//Exersize__1
//1) Добить массив 100 нулями.

const arr = [1, 8, -3, 4];

const task1 = (_array) => {      
  for(let i = 0; i < 100; i++){
    arr.push(0); 
  }
}
task1(0);
console.log(arr);

//Exersize__2
//2) Добить массив нулями до длины массива 100.

const arr1 = [1, 8, -3, 4];

const task2 = (_array) => {
  for(let i = 0; i < 96; i++){
    if(arr1.el !== 0){
      arr1.push(0);      
    }    
  }  
}
task2(0);

console.log(arr1);

//Exersize__3
//3) Дописать в начало массива 100 нулей.

const arr2 = [1, 8, -3, 4];

const task3 = (_array) => {
  for(let i = 0; i < (203 - arr2.length); i++){    
     arr2.unshift(0);
    } 
}
task3(0);

console.log(arr2);

//Exersize__4

//4) Дописать в начало массива нули, всего длина массива должна быть 100.

const arr3 = [1, 8, -3, 4];

const task4 = (_array) => {
  for(let i = 0; i < (196 - arr3.length); i++){    
      arr3.unshift(0);          
    } 
}
task4(0);

console.log(arr3);

//Exersize__5

//5) Между первой и второй ячейкой входного массива вставить 25 ячеек с нулями.

const arr4 = [1, 8, -3, 4];

const task5 = (_array) => {
  let c = arr4.shift();
  for(let i = 0; i < (54 - arr4.length); i++){
    if(arr4.el !== 1){
      arr4.unshift(0);          
    }   
  } 
  arr4[0] = c;
}
task5(0);

console.log(arr4);

//Exersize__6
//6) Продублировать значения входного массива 20 раз, т.е длина полученного массива должна быть arr.length*20

const arr5 = [1, 8, -3, 4];

const task6 = (_array) => {
  for(let i = 0; i < 96 - arr5.length; i++){
    arr5.unshift(arr5[0], arr5[1], arr5[2], arr5[3]);
  }
}
task6(0);

console.log(arr5);

//Exersize__7
//7) Дописать в конец массива еще одну ячейку, в которой будет сумма всех элементов

const arr6 = [1, 8, -3, 4];

const task7 = (_array) => {
  let sum = 0; 
  for(let i = 0; i < arr6.length; i++){ 
    sum += arr6[i]; 
  } 
  arr6.push(sum * 2);
}
task7(0);

console.log(arr6);

//Exersize__8
//8) дописать в конец массива 2 ячейки, в первой будет количество положительных элементов, во второй будет количество отрицательных элементов входного массива. // [1, 8, -3, 4, 3, 1]

const arr7 = [1, 8, -3, 4];

const task8 = (_array) => {  
  let sumPlus = 0;
  let sumMinus = 0; 
  for(let i = 0; i < arr7.length; i++){    
     if(arr7[i] > 0){
      sumPlus += 1;
     } else {
      sumMinus += 1;
     }
  } 
  arr7.push(sumPlus);
  arr7.push(sumMinus);
}
task8(0);

console.log(arr7);

//Exersize__9
//9) получить массив, где все ячейки *2 от входного массива

const arr8 = [1, 8, -3, 4];

const task9 = (_array) => {
  for(let i = 0; i < arr8.length; i++){
    arr8[i] = arr8[i] * 2;
  }
}
task9(0);
console.log(arr8);

//Exersize__10
//10) дописать столько же ячеек, в каждой будет исходное значение + 3; // [1, 8, -3, 4, 4, 11, 0, 7]

const arr9 = [1, 8, -3, 4];

const task10 = (_array) => {  
       
  for(let i = 0; i < 12 - arr9.length; i++){
    let x = arr[i] + 3;       
    arr9.push(x);    
  }  
}
task10(0);
console.log(arr9);

//Exersize__11
//11) дописать в конец массива первый элемент

const arr10 = [1, 8, -3, 4];

const task11 = (_array) => {       
  arr10.push(arr10[0]);
}
task11(0);
console.log(arr10);

//Exersize__12
//12) получить значение последнего элемента массива, на это значение увеличить оставшиеся элементы. // [5, 12, 1]

const arr11 = [1, 8, -3, 4];
let g = arr11.pop();

const task12 = (_array) => {  
  for(let i = 0; i < arr11.length; i++){
    arr11[i] = arr11[i] + g;    
  }
  arr11.push(g);
}
task12(0);
console.log(arr11);