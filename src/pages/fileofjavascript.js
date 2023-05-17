// const personName = 'hariram is bad';
// const firstName = 'ram'
// const lastName = 'sharma'
// const amount = 90;
// const detail = 'millions'

// const amount = '900';
// const rating = '90.90';
// const m = Number.parseInt(amount);
// const r = Number.parseFloat(rating);



// console.log(detail.substring(2, 7) + '...');
// console.log(personName.slice(3, 5));


// const per = personName.replace('bad', 'good');
// console.log(per)
// const templateString = `${personName} ${firstName} ${lastName} ${amount}`;

// console.log(amount.toString());

// console.log(personName.includes('arir'));
// console.log(personName.charAt(2));
// console.log(personName.trim().length);
// console.log(personName.indexOf('i'));
// console.log(personName.repeat(5));
// console.log(typeof (amount));
// console.log(firstName.concat(' ', lastName, ' he is'));
// console.log('hello' + ' ' + 'world');

// const amount = '900';
// const g = Infinity;
// const rating = '90.90';
// const m = Number.parseInt(amount);
// const r = Number.parseFloat(rating);
// const s = Number.parseInt(rating);
// console.log(s);
// console.log(Number.isFinite(g))

// const rating = 90.747368;
// const m = 4;
// console.log(rating.toFixed(4))



// console.log(Math.ceil(rating));
// console.log(Math.round(rating));
// console.log(Math.floor(rating));
// console.log(Math.sqrt(9));
// console.log(Math.max(22, 77, 55, 44, 99));
// console.log(Math.min(22, 77, 55, 44, 99));
// console.log(Math.pow(3, 3));

// const random = Math.random() * 5 + 1;
// console.log(Math.floor(
//   random
// ));

// const a = 20;

// let c = 1;
// c = c + 5;
// c += 5;
// c -= 5;
// c /= 5;
// c *= 5;
// console.log(c);


// const d = ++c;
// console.log(d);


// let mi = 900;
// mi--;
// console.log(mi)
// const a = 20;
// const b = 90;
// const simplify = 90 + (90 * 90) / 9;
// console.log(simplify)

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(b % a);



// const c = '90'
// const d = 90
// console.log(c === d)

// const a = 90;
// const b = 100;

// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a === b);
// console.log(a !== b);

// const a = 90;
// const b = 100;

// console.log(a > b || a < b || a === b);
// console.log(a < b && a !== b);

// const msg = a > b ? 'ok' : a !== b ? 'lio' : 'wrong';

// const a = 90;
// const b = 100;

// if (a > b) {
//   return <h1>This is the truly condition</h1>;
// } else {

// }


// const age = 30;

// if (age < 17) {
//   return <h1>You are Junior,Price is Rs.20</h1>
// } else if (age > 17 && age < 50) {
//   return <h1>You are regular,Price is Rs.30</h1>
// } else {
//   return <h1>You are Senior,Price is Rs.50</h1>
// }

// while (true) {
//   console.log(hello)
// }

// let i = 0;
// let text = '';

// while (i < 20) {
//   text = text + `${i}`
//   i++;
//   console.log(i);
// }

// do {
//   i++;
//   text = text + `${i}`;
// } while (i < 20);

// for (let i = 0; i <= 20; i++) {
//   if (i === 10) {
//     continue;
//     break;
//   }
//   console.log(i)
// }

// for (let i = 1; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`fizz buzz ${i}`);
//   } else if (i % 3 === 0) {
//     console.log(`fizz ${i}`);
//   } else if (i % 5 === 0) {
//     console.log(`buzz ${i}`)
//   } else {
//     console.log(i);
//   }

// }

// const weekday = 7;

// switch (weekday) {
//   case 1:
//     console.log('sunday');
//     break;
//   case 2:
//     console.log('monday');

//     break;
//   default:
//     console.log('not a week day');
// }

// let i;

// const data = null;
// if (data === null) {
//   console.log('data not available');
// }

// if (i === undefined) {
//   i = 90;
// }

// const numbers = [22, 55, 66, 77, 99];

// for (let i in numbers) {
//   console.log(i);

// }
// let total = 0;

// for (let i of numbers) {
//   total = total + i;

// }

// function greet() {
//   console.log('hello user');
// }
// greet();


// const greet = (greet, user) => {
//   alert(`${greet} ${user}`);
// }

// onClick={() => greet('namaste', 'ram')}
// onMouseEnter={() => greet('namaste', 'ram')}
// onMouseLeave={() => greet('namaste', 'ram')}
// onDoubleClick={() => greet('namaste', 'ram')}
// onWheel={() => greet('namaste', 'ram')}

// onKeyDown={() => greet('namaste', 'ram')}

// window.addEventListener('click', () => {
//   console.log('hello');
// });

//  window.addEventListener('scroll', () => {
// //   console.log('hello')
// })



// const habit = prompt('What is your habit');

// console.log(habit);
{/* <h1>{habit}</h1> */ }

// const hio = window.confirm('are u sure');

// console.log(hio);

// const age = prompt('What is your age');

// if (age < 20) {
//   return <h1>You are Junior</h1>
// } else if (age > 20 && age < 50) {
//   return <h1>You are Regular</h1>
// } else {
//   return <h1>You are Senior</h1>
// }

// let total = 0;

// const sumofnumbers = (numbers) => {
//   for (let i of numbers) {
//     total = total + i;
//   }
//   return total;
// }
// const m = sumofnumbers([22, 77, 44, 99]);

{/* <h1>{m}</h1> */ }


// const personCall = (m, n, o, ...names) => {
//   console.log(names);
// }
// const m = personCall('ram', 'shyam', 'hari', 'sita')

// global/local
// const age = 90;

// const printage = () => {
//   const age = 190;
//   console.log(age);
// }
// printage();




// persons.reverse(); ulto bata lyaunako lagi
// persons.sort() alphabetic agadi bata suru hunxa




// const numbers = [22, 55, 77, 99];
// const persons = ['ram', 'hari', 'shyam', 'sita'];

// console.log(persons.includes('rita')); for mentioned name true or false
// console.log(persons.join(' and '))  join for any word
// numbers.push(100); euta number add garna
// numbers.shift(); agadi ko euta no hatauna
// numbers.unshift(33); agadi bata euta no add garna
// numbers.pop() paxadi ko euta number delete garna

// const m = numbers.slice(2) range anusar katera rakhna lai
// numbers.splice(2, 1); euta number delete garnu parema
// console.log(numbers);

// console.log(numbers.at(2)); euta slected position dekhuana
// console.log(numbers.concat(11, 33)); multiple no add garna

// const persons = ['ram', 'shyam', 'hari'];
//   const numbers = [22, 77, 99];
//   let total = 0;

//   numbers.forEach((n) => {
//     total = total + n;
//   });

//   let names = '';

//   persons.forEach((m) => {
//     names = names + m[0] + m[1];
//   });



// map ko

// const persons = ['ram', 'shyam', 'hari'];
// const numbers = [1, 2, 3, 4, 5, 6];

// const n = numbers.reduce(() => {
//   return p;
// })



// const newpersons = persons.map((p) => {
//   return p + 'per';
// });


// const newNumbers = numbers.map((n) => {
//   return n * 5;

// })

// console.log(newNumbers);
// console.log(newpersons);
{/* <div> */ }

{/* {persons.map((p, i) => {
  return <h1 key={i} className='text-2xl text-pink-300 p-2 uppercase'>{p} <span className='text-lg text-green-500 lowercase underline cursor-pointer hover:bg-black animate-pulse'> this is a data{i}</span> </h1>
})}
</div> */}



// reduce ko=

// const numbers = [1, 2, 20, 4, 5, 6];


//   const n = numbers.reduce((p, n) => {

//     // 1 < 2

//     // 2 < 20

//     // 20 < 4

//     return p > n ? n : p;
//   })
//   console.log(n);




// for each ko=

 // const persons = ['ram', 'shyam', 'hari'];
  // let names = '';

  // persons.forEach((m) => {
  //   names = names + m[0] + m[1];
  // })

   // <h1>{names}</h1>
   

  // const numbers = [22, 77, 99];
  // let total = 0;

  // numbers.forEach((a) => {
  //   total = total + a;
  // })

  // <h1>{total}</h1>

// destructing ko =

  // const App = () => {


  //   const numbers = [22, 55, 77, 99]
  
  //   const [a, b] = numbers;
  
  //   return (
  //     <div>
  
  //       <h1>{a}</h1>
  //       <h1>{b}</h1>
  
  
  //     </div>
  //   )
  // }

  
// Object ko =

// const person = {
//   name: 'hariram',
//   age: 90,
//   habits: ['dance', 'sing'],
//   isAdmin: false,
//   sleep: () => {
//     return 'person is sleeping';
//   }
// };
// person.sleep();

// const p = new Object();
// p.title = 'hello';
// console.log(p);


// person['job'] = 'influecer';

// for (let a of Object.entries(person))
//   console.log(a)

// console.log(person);

// return (
//   <>
//     <h1>{person.name}{person.age}</h1>
//     <h1>{`${person.name} ${person.age}`}</h1>



// object ma button=

// const person = {
//   name: 'hariram',
//   age: 90,
//   habits: ['dance', 'sing'],
//   isAdmin: false,
//   // sleep: () => {
//   //   return 'person is sleeping';
//   sleep: function () {
//     return this.name;
//   }
// };
// person.sleep();

// return (
//   <>
//     <h1>{person.name}</h1>
//     <button onClick={() => alert(person.sleep())}>Sleep</button>

// object ko destructing

// const person = {
//   name: 'hariram',
//   age: 90,
//   habits: ['dance', 'sing'],
//   isAdmin: false,
//   // sleep: () => {
//   //   return 'person is sleeping';
//   sleep: function () {
//     return this.name;
//   }
// };

// const { habits } = person;
// console.log(habits);


    //TOPIC Date ko =

// const n = new Date();
//   const d = new Date('2023-03-25');
//   console.log(d);

//   const day = n.getDay();
//   let weekday;

//   switch (day) {
//     case 1:
//       weekday = 'monday';

//   }

//   console.log(`${n.getDate()} ${weekday}`)



     //  TOPIC TIME

// const App = () => {

//   const greet = () => {
//     console.log('hello user');
//   }

  // setTimeout(() => {  jati second rakhyo teti second paxi time out hune
  //   greet();
  // }, 5000);


  // setInterval(() => {   set interval vaneko second second ma call garney

  //   const n = new Date();  new rakkhyo vane object ma aauxa
  //   console.log(`${n.getHours()}/${n.getMinutes()}/${n.getSeconds()}`);
  // }, 1000);
  

  // setInterval(() => {
  //   const n = Date(); date matra rakhey string ma auxa
  //   console.log(n);
  // }, 1000);


  // const m = setInterval(() => {  clear interval vaneko time diyeko samaya paxi rokinxa
  //   const n = Date();
  //   console.log(n);
  // }, 1000);

  // setTimeout(() => {
  //   clearInterval(m);
  // }, 5000);
