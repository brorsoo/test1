// 스택
// LIFO (last - in first - out)
// 후입선출

function Stack() {
    //
    this.dataStore  = [];
    this.top        = 0;
    this.push       = push;
    this.pop        = pop;
    this.peek       = peek;
    this.clear      = clear;
    this.length     = length;

}

// 새 요소를 스택에 추가할 때는 탑 위치에 요소를 저장한 다음 배열에서 빈공간을
// 새로운 탑이 가리키도록 top 변수를 증가시킨다.
function push( element ) {
    //
    this.dataStore[ this.top++ ] = element;

}

// 스택의 탑 위치에 있는 요소를 반환한 다음 top 변수를 감소한다.
function pop() {
    //
    return this.dataStore[ --this.top ];

}

// 배열의 top-1 위치의 요소에 접근해 스택의 탑 요소를 반환한다.
function peek() {
    //
    return this.dataStore[ this.top - 1 ];

}

// 스택에 얼마나 많은 데이터가 저장되어 있는지 확인.
function length() {
    //
    return this.top;

}

// top 변수를 0으로 설정하면 스택 전체 요소가 삭제된다.
function clear() {
    //
    this.top = 0;

}



// 테스트
var s = new Stack();
s.push( "David" );
s.push( "Raymond" );
s.push( "Bryan" );
console.log( "length : " + s.length() );
console.log( s.peek() );

var popped = s.pop();
console.log( "The poped element is : " + popped );
console.log( s.peek() );

s.push( "Cynthia" );
console.log( s.peek() );

s.clear();
console.log( "length : " + s.length() );
console.log( s.peek() );

s.push( s.peek() );

s.push( "Clayton" );
console.log( s.peek() );




// 문자열 회문(앞으로,뒤로 똑같은 문자열) 검사 테스트

function isPalindrome( word ) {
    //
    var s = new Stack();
    for ( var i = 0; i < word.length; ++i ) {
        s.push( word[ i ] );
    }

    var reword = "";
    while ( s.length() > 0 ) {
        reword += s.pop();
    }

    if ( word == reword ) {
        return true;
    } else {
        return false;
    }

}


var word1 = "Hello";
console.log( isPalindrome( word1 ) );



// 스택으로 재귀함수 구현해보기

function fact( n ) {
    //
    var s = new Stack();
    while ( n > 1 ) {
        s.push( n-- );
        console.log( n );
    }

    var product = 1;
    while ( s.length() > 0 ) {
        product *= s.pop();
        console.log( product );
    }
    return product;

}

console.log( fact( 5 ) );







