// /**
//  * ①const, let等の変数宣言
//  */
// var val1 = "var変数";
// console.log(val1);

// // val変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数を再宣言可能
// var val1 = "val変数を再宣言";
// console.log(val1);

// /**
//  * ②テンプレート文字列
//  */
// const name = "レイ";
// const age = 26;
// //「私の名前はレイです。年齢は26歳です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// /**
//  * ③アロー関数
//  **/

// //従来の関数
// //  function func1(str) {
// //   return str;
// //  }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です。"));

// //アロー関数
// // const func2 = (str) => {
// //   return str;
// // };
// const func2 = (str) => str;

// console.log(func2("func2です。"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // }
// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * ④分割代入
 */
// const myProfile = {
//   name: "レイ",
//   age: 26
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['レイ', 26];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * ⑤デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello("レイ");

/**
 * ⑥スプレっと構文
 * 参照されない！！
 */
//　配列の展開
// const arr1 = [1, 2, 3];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * ⑦mapやfillterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "レイ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番名は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "レイ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * ⑧三項演算子
 */
//ある条件 ? 条件がtrueの持：じょうけんがfalseの時
// const val1 = 1 > 0 ? `trueです`:`falseです` ;
// console.log(val1);

// const num = 1300;
//toLocaleString : 3桁区切りに,を付けてくれる
// console.log(num.toLocaleString());

// const formattedNm = typeof num === 'number'? num.toLocaleString() : '数値を入力してください。';
// console.log(formattedNm);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : `許容範囲内です`;
// };

// console.log(checkSum(50, 40));

/**
 * ⑨論理演算子の本当の意味を知ろう　&& ||
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

//実は'または'とか'かつ'の意味ではない？
// || は左側がfalseなら右を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
