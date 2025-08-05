console.log("Type Script 테스트2_함수 타입 선언");
//function -> 화살표함수 ->

//매개변수 없고, 리턴값도 없는 경우
// function Add1():void{
//     console.log("안녕하세요");
// }

const Add1 = ():void =>{
    console.log("안녕하세요2")
}
Add1()

//매개변수 있고, 리턴값이 없는 경우
// function Add2(x:number,y:number):void{
//     console.log(x+y);
// }

const Add2 = (x:number,y:number):void =>{
    console.log(x+y);
}
Add2(10,20)

//매개변수 있고, 리턴값도 있는 경우
// function Add3(x:number,y:number):number{
//     return x+y;
// }

const Add3 = (x:number, y:number):number =>{
    return x+y;

}
console.log(Add3(15,20))



//제너릭 타입
interface G<T>{
    value:T
}

function test():void{
    //상수
    const d1:string = "left";
    //d1='right' //Cannot assign to 'd1' because it is a constant.
    console.log(d1)

    //유니온 타입 : |기호를 사용해서 여러 타입 중에서 하나를 허용
    let d2 : 'right'|'left';
    d2 = "right"
    //d2 = 'up' //Type '"up"' is not assignable to type '"left" | "right"'.
    console.log(d2)


    //제너릭 선언
    let g1:G<number> = {value:10};
    console.log(g1.value);

    let g2:G<string> = {value:"Hello"};
    console.log(g2.value);
}
test()


