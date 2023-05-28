// // prototype chain
// function Ultra() {}
// Ultra.prototype.ultraProp = true;

// function Super() {}
// Super.prototype = new Ultra();

// function Sub() {}
// Sub.prototype = new Super();

// var o = new Sub();
// // Sub는 ultraProp라는 것을 가지고 있지 않았는데도 true가 출력된다.
// console.log(o.ultraProp); // true
// // Sub가 없으면 Super를 보고 Super에도 없으면 Ultra로 올라가서 보게된다.

// // call, apply, bind
// // call
// const jgy = {
// 	name: 'jgy'
// };
// function update(birthYear, occupation) {
// 	this.birthYear = birthYear;
// 	this.occupation = occupation;
// }

// update.call(jgy, 1998, 'singer');
// console.log(jgy);

// // 위의 call을 apply로 변경
// const jgy = {
// 	name: 'jgy'
// };
// function update(birthYear, occupation) {
// 	this.birthYear = birthYear;
// 	this.occupation = occupation;
// }
// update.call(jgy, ['1998', 'singer']); // 매개변수를 배열로 묶어주기.
// console.log(jgy);

// const jgy = {
// 	name: 'jgy',
// 	getName: function() {
// 		return this.name;
// 	}
// };

// console.log(jgy.getName());

// let getYourSite = jgy.getName;
// console.log(getYourSite()); // undefined

// let mySite = getYourSite.bind(jgy);
// console.log(mySite());