console.log("Type Script 테스트");

///변수 기본 타입 -> js에서 사용하던 그대로 사용해도 됨
let name;
name = "PNU";
console.log(`${name}님 안녕하세요`)
//문자열
let name2:string;
name2 = "PNU2";
console.log(`${name2}님 안녕하세요`)
//숫자
let name3:number = 30; //초기값 설정
console.log(`${name3}세 입니다.`)
name3 = 20; //let은 변수이므로 수정 가능
console.log(`${name3}세 입니다.`)
//bool
let isStudent:boolean=false;
//bool-삼항연산자
// isStudent?console.log(`[학생] ${name}님 안녕하세요.(${name3}세)`)
//             :console.log(`[일반인] ${name}님 안녕하세요.(${name3}세)`)
//bool-if문
if(isStudent) console.log(`[학생] ${name}님 안녕하세요.(${name3}세)`);
else console.log(`[일반인] ${name}님 안녕하세요.(${name3}세)`);

///배열 타입 : 동일한 데이터 타입만 저장
let arr1:number[] = [5,1,6];
arr1.push(1);
arr1.push(4);
//console.log(arr1); //배열 전체 출력
arr1.map(item=>console.log(item)) //배열의 요소 하나씩 출력

let arr2:Array<string> = ['a','b','c']
arr2.push('1');
arr2.map(item=>console.log(item)); //배열의 요소 하나씩 출력

///튜플 타입 : 다른 데이터 타입 저장 가능
let tp:[string,number]=['PNU',24];
console.log(`${tp[0]}님 안녕하세요.(${tp[1]}세)`);
//tp = [24, 'PNU'] //앞에서 지정한 데이터 타입의 순서[string,number]대로 사용해야 함

type User = [string,number] //type으로 선언 -> 중복되는 부분 제거 가능
let tp2:User;
tp2 = ['tp2',18]
console.log(`${tp2[0]}님 안녕하세요.(${tp2[1]}세)`);

///객체(Object) 타입 : {키:값, 키:값...}
let p1:{name:string; age:number}; //오브젝트가 가지고 있는 키의 타입을 선언
p1 = { //오브젝트가 가지고 있는 키에 해당하는 값을 넣기
    name : "Hww",
    age : 20
}
console.log(`${p1.name}님 안녕하세요.(${p1['age']}세)`);

let p2:{name:string; age:number};
p2 = { //오브젝트가 가지고 있는 키에 해당하는 값을 넣기
    name : "Dss",
    age : 22
}
console.log(`${p2.name}님 안녕하세요.(${p2['age']}세)`);

// type으로 선언 -> 중복되는 부분 제거 가능
type PersonType = {
    name:string,
    age:number
}
let p10:PersonType;
p10 = {name:'p10', age:10};
console.log(`${p10.name}님 안녕하세요.(${p10['age']}세)`);
let p20:PersonType;
p20 = {name:'p20', age:20}
console.log(`${p20.name}님 안녕하세요.(${p20['age']}세)`);

// interface로 선언 -> 중복되는 부분 제거 가능 & 상속가능
interface PersonInterface {
    name:string,
    age:number
}
let p30:PersonInterface
p30 = {name:'p30', age:30}
console.log(`${p30.name}님 안녕하세요.(${p30['age']}세)`);
let p40:PersonInterface
p40 = {name:'p40', age:40}
console.log(`${p40['name']}님 안녕하세요.(${p40['age']}세)`);

console.log(Object.keys(p40)); //배열
console.log(Object.values(p40)); //배열
(Object.keys(p40) as (keyof PersonInterface)[]).map(item=>
            console.log(item, p40[item])); //keyof : PersonInterface에서 정의한, name(string 타입), age(number 타입) 키값만 가져올 수 있음