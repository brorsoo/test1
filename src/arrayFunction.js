// 배열
// 1. 배열 만들기
// 기본적인 방법
// By. Hunch
var number = [ "123" ];
console.log( number.length );

// 생성자를 호출하는 방법
// By. Hunch
var number2 = new Array(1,2,3,4,5);
console.log( number2.length );

// 요소가 1개일땐 배열의 갯수로 인식
// By. Hunch
var number3 = new Array( 10 );
console.log( number3.length );

// 다양한 종류의 요소를 사용가능하다.
// By. Hunch
var number4 = [ 1, "ha", 2, null, true ];
console.log( number4.length );

// Array.isArray()
// By. Hunch
var number5 = 3;
var number6 = [ 1,2,3 ];
console.log( Array.isArray( number5 ) );
console.log( Array.isArray( number6 ) );

// split() 함수
// 문자열을 특정 구분자로 분리한 다음 배열로 만든다.
// By. Hunch
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");

for( var i = 0; i < words.length; i++ ) {
    console.log( i + " : " + words[ i ] );
}


////////////////////////////// 접근자 함수 /////////////////////////////////
// indexOf(), lastIndexOf(), join(), toString(), concat(), splice(),    //
//  push(), unShift(), pop(), shift(), splice(), reverse(), sort()      //
/////////////////////////////////////////////////////////////////////////

// indexOf()
// 여러개가 있을경우 첫번째로 발견한 인자를 반환.
// 찾지 못할 경우 -1 반환.
// By. Hunch
var names = [ "apple", "orange", "banana", "apple" ];
var name = "apple";
var position = names.indexOf( name );
console.log( "name : " + position );

// lastIndexOf()
// 발견한 마지막 인자를 반환.
// 찾지 못할 경우 -1 반환.
// By. Hunch
var position1 = names.lastIndexOf( name );
console.log( "name1 : " + position1 );

// join(), toString()
// 배열을 문자열 형식으로 반환한다. 배열요소를 ,로 구분한다.
// By. Hunch
var nameStr = names.join();
console.log( nameStr );
var nameStr1 = names.toString();
console.log( nameStr1 );


// concat()
// 함수는 두 개 이상의 배열을 합쳐 새 배열을 만든다.
// 호출한 배열 뒤로 추가된다.
// By. Hunch
var cisDept = [ "Mike", "Clayton", "Terrill", "Danny", "Jennifer" ];
var dmpDept = [ "Raymond", "Cynthia", "Bryan" ];
var itDiv = cisDept.concat( dmpDept );
console.log( itDiv );
itDiv = dmpDept.concat( cisDept );
console.log( itDiv );


// splice()
// 기존 배열의 서브셋으로 새 배열을 만든다.
// 배열의 중간에 요소를 추가 / 제거
// 추가 : (첫 적용 위치, 0, 추가할 인자들)
// 제거 : (첫 적용 위치, 제거할 인자 수 )

// 제거
// By. Hunch
var itDiv1 = cisDept.splice( 3, 3 );
var itDiv2 = cisDept;
console.log( itDiv1 );
console.log( itDiv2 );

// 추가
// By. Hunch
console.log( dmpDept );
dmpDept.splice( 2, 0, "haha", "test" );
console.log( dmpDept );




///////// 변형자 함수 ( mutator function ) /////////
//      push(), unShift(), pop(), shift(),       //
//      splice(), reverse(), sort()              //
///////////////////////////////////////////////////

// push()
// 배열에 요소를 추가한다.
// 배열의 맨끝에
// By. Hunch
var pushResult = [ 1, 2, 3, 4, 5 ];
console.log( pushResult );
pushResult.push( 6 );
console.log( pushResult );


// unShift()
// 배열에 요소를 추가한다.
// 배열의 맨앞에
// By. Hunch
var unSiftResult = [ 1, 2, 3, 4, 5];
console.log( unSiftResult );
unSiftResult.unshift( 0 );
console.log( unSiftResult );


// pop()
// 배열의 요소를 제거한다.
// 배열의 맨끝에
// By. Hunch
var popResult = [ 1, 2, 3, 4, 5, 6 ];
console.log( popResult );
popResult.pop();
console.log( popResult );


// shift()
// 배열의 요소를 제거한다.
// 배열의 맨앞에
// By. Hunch
var shiftResult = [ 0, 1, 2, 3, 4, 5 ];
console.log( shiftResult );
shiftResult.shift();
console.log( shiftResult );


// reverse()
// 배열의 요소를 역순으로 바꾼다.
// By. Hunch
var reverseResult = [ 1, 2, 3, 4, 5 ];
console.log( reverseResult );
reverseResult.reverse();
console.log( reverseResult );



// sort()
// 배열 요소를 순서대로 정렬한다. (알파벳순으로)
// 특히 문자열을 정렬할때 유용하다.
// 숫자는 함수를 만들면 가능하다.
// By. Hunch
var sortResult = [ "David", "Mike", "Cynthia", "Clayton" ];
console.log( sortResult );
sortResult.sort();
console.log( sortResult );

// 숫자는 적용x
var sortResult1 = [ 1, 2, 300, 500, 4 ];
console.log( sortResult1 );
sortResult1.sort();
console.log( sortResult1 );

// 함수를 이용해서 숫자가능
function compare( num1, num2 ) {
    //
    return num1 - num2;
}
var sortResult2 = [ 1, 2, 300, 500, 4 ];
console.log( sortResult2 );
sortResult2.sort( compare );
console.log( sortResult2 );



/////////////// 반복자 함수 ////////////////////
// forEach(), every(), some(), add(),       //
// reduce(), reduceRight(), map(), filter() //
//////////////////////////////////////////////

// forEach()
// 배열을 만들지 않는다.
// 배열의 모든 요소에 인자로 받은 함수를 호출.
// By. Hunch
function square( num ) {
    //
    console.log( num, num * num );
}
var forEachResult = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
forEachResult.forEach( square );


// every()
// boolean 함수를 배열에 적용해 배열의 모든 요소가 참이면 true 반환.
// By. Hunch
function isEven( num ) {
    //
    return num % 2 == 0;
}
var everyResult = [ 2, 4, 6, 8, 10 ];
var even = everyResult.every( isEven );
console.log( even );


// some()
// 배열 요소 중에 한 요소라도 boolean 요소의 기준을 만족하면 true를 반환.
// By. Hunch
function isEven2( num ) {
    //
    return num % 2 == 0;
}

var someResult = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var someEven = someResult.some( isEven2 );
console.log( someEven );

// 조건에 불만족하도록
someResult = [ 1, 3, 5, 7 ,9 ];
var someEven2 = someResult.some( isEven2 );
console.log( someEven2 );


// reduce()
// 누적자 함수를 인자로 받은 다음 배열의 모든 요소를 누적자 함수에 적용한다.
// add() 함수 이용해서
// By. Hunch
function add( runningTotal, currentValue ) {
    //
    return runningTotal + currentValue;
}
var reduceResult = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var sum = reduceResult.reduce( add );
console.log( sum );

// 문자열도 가능하다.
var reduceResult2 = [ "Haha", "The", "Test", "And" ];
var sum2 = reduceResult2.reduce( add );
console.log( sum2 );


// reduceRight()
// reduce() 함수와 기능은 같다. 문자열 사용할때
// reduce()는 왼쪽에서 오른쪽 처리.
// reduceRight()는 오른쪽에서 왼쪽 처리.
// By. Hunch
var reduceResult3 = [ "Haha", "The", "Test", "And" ];
var sum3 = reduceResult3.reduceRight( add );
console.log( sum3 );


// map()
// forEach() 함수처럼 배열의 각 요소에 함수를 적용하는 함수다.
// 배열 요소에 함수를 적용한 결과를 포함하는 새 배열을 반환.
// By. Hunch
function curve( grade ) {
    //
    return grade += 5;
}

var grades = [ 77, 65, 81, 92, 83 ];
var newGrades = grades.map( curve );
console.log( newGrades );

// 문자열에 map()함수 적용.
function first( word ) {
    //
    return word[ 0 ];
}

var words = [ "for", "your", "information" ];
var acronym = words.map( first );
console.log( acronym.join("") );


// filter()
// every() 함수와 비슷하다.
// boolean 함수를 만족하는 요소를 포함하는 새로운 배열을 반환한다.
// By. Hunch
function isEven3( num ) {
    //
    return num % 2 == 0;
}

function isOdd3( num ) {
    //
    return num % 2 != 0;
}

var nums3 = [];
for ( var i = 0; i < 20; ++i ) {
    nums3[ i ] = i + 1;
}

var evens = nums3.filter( isEven3 );
console.log( evens );
var odds = nums3.filter( isOdd3 );
console.log( odds );


// filter() 함수응용
// 60이상만 출력하도록
function passing( num ) {
    //
    return num >= 60;
}

var grades = [];
for ( var i = 0; i < 20; ++i ) {
    grades[ i ] = Math.floor( Math.random() * 101 );
}

var passGrades = grades.filter( passing );
console.log( grades );
console.log( passGrades );


// filter() 함수응용
// 문자열
function afterc( str ) {
    //
    if( str.indexOf("cie") > 1 ) {
        return true;
    }
}

var words3 = [ "recieve", "deceive", "percieve", "deceit", "concieve" ];
var misspelled = words3.filter( afterc );
console.log( misspelled );



// 객체에 포함된 배열
// weekTemps()

function weekTemps() {
    //
    this.dataStore = [];
    this.add1 = add1;
    this.average = average;

}


function add1( temp ) {
    //
    this.dataStore.push( temp );

}


function average() {
    //
    var total = 0;
    for ( var i = 0; i < this.dataStore.length; ++i ) {
        total += this.dataStore[ i ];
    }

    return total / this.dataStore.length;

}


var thisWeek = new weekTemps();

thisWeek.add1( 52 );
thisWeek.add1( 55 );
thisWeek.add1( 61 );
thisWeek.add1( 65 );
thisWeek.add1( 55 );
thisWeek.add1( 50 );
thisWeek.add1( 52 );
thisWeek.add1( 49 );

console.log( thisWeek.average() );









