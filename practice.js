// Напишите программу, которая берет исходное количество евро, записанное в константу eurosCount, переводит евро в доллары и выводит на экран. Затем полученное значение переводит в рубли и выводит на новой строчке.
const dollarsCount = eurosCount * 1.25;
console.log(dollarsCount);
const rublesCount = dollarsCount * 60;
console.log(rublesCount);
 
 
// Избавьтесь от магических чисел, создав новые переменные, а затем выведите текст на экран:
// King Balon the 6th has 102 rooms.
const king = 'King Balon the 6th';
let numberOfRooms = 17
let generation = 6
console.log(king + ' has ' + (numberOfRooms * generation) + ' rooms.')


// Выведите на экран строку Do you want to eat, <name>?, где вместо <name> должна использоваться константа stark. Вывод должен получиться таким:
const stark = 'Arya';
console.log(`Do you want to eat, ${stark}?`)


//Вам даны три переменные с фамилиями разных людей. Составьте и выведите на экран слово из символов в таком порядке:
// Третий символ из первой строки
// Второй символ из второй строки
// Четвертый символ из третьей строки
// Пятый символ из второй строки
// Третий символ из второй строки
const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';
console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`)


//Выведите на экран первую и последнюю буквы предложения, записанного в константу text, в следующем формате:
//First: N
//Last: t
const text = 'Never forget what you are, for surely the world will not';
const result = `First: ${text[0]}\nLast: ${text[length(text) - 1]}`;
console.log(result);


//Функция Math.random() возвращает случайное число от 0 до 1 с большим количеством знаков после запятой. Но в реальных задачах бывает нужно получать случайные целые числа, например, в диапазоне от 0 до 10. Реализуйте код, который выводит на экран именно такое число. Для этой задачи вам понадобятся функции Math.random() и Math.round()
console.log(Math.round(Math.random() * 10));



//С помощью метода slice() получите часть предложения, записанного в константу text, c 5 по 15 символы включительно. Полученную подстроку обработайте методом .trim() и выведите на экран длину итоговой подстроки. Выполните эти методы подряд в цепочке без создания промежуточных переменных.
console.log(text.slice(4, 15).trim().length);


 


 

