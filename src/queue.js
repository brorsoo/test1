// Queue 큐
// stack 정반대
// FIFO 선입선출
// 큐에 요소를 삽입하는 동작 enqueue
// 큐에서 요소를 삭제하는 동작 dequeue

function Queue() {
    //
    this.dataStore  = [];
    this.enqueue    = enqueue;
    this.dequeue    = dequeue;
    this.dequeue2   = dequeue2;
    this.front      = front;
    this.back       = back;
    this.toString   = toString;
    this.toString2  = toString2;
    this.empty      = empty;

}


// 큐의 끝부분에 요소를 추가한다.
function enqueue( element ) {
    //
    this.dataStore.push( element );

}

// 배열의 앞부분에서 요소를 삭제한다.
function dequeue(  ) {
    //
    return this.dataStore.shift();
}

// 큐의 앞부분과 끝부분에 저장된 요소를 확인할 수 있다.
function front(  ) {
    //
    return this.dataStore[ 0 ];
}

function back(  ) {
    //
    return this.dataStore[ this.dataStore.length - 1 ];
}

// 큐의 모든 요소를 출력해주는 toString() 함수.
function toString(  ) {
    //
    var retStr = "";
    for ( var i = 0; i < this.dataStore.length; ++i ) {
        retStr += this.dataStore[ i ] + "\n";
    }
    return retStr;

}

// 큐가 비었는지 확인하는 함수.
function empty(  ) {
    //
    if ( this.dataStore.length == 0 ) {
        return true;
    } else {
        return false;
    }
}


// 테스트
var q = new Queue();
q.enqueue( "Meredith" );
q.enqueue( "Cynthia" );
q.enqueue( "Jennifer" );
console.log( q.toString() );

q.dequeue();
console.log( q.toString() );
console.log( "Front of queue : " + q.front() );
console.log( "Back of queue : " + q.back() );



// 기수정렬

function distribute( nums, queues, n, digit ) {
    //
    for ( var i = 0; i < n; ++i ) {
        if ( digit == 1 ) {
            queues[ nums[ i ] % 10 ].enqueue( nums[ i ] );
        } else {
            queues[ Math.floor( nums[ i ] / 10 ) ].enqueue( nums[ i ] );
        }
    }

}


function collect( queues, nums ) {
    //
    var i = 0;
    for ( var digit = 0; digit < 10; ++digit ) {
        while ( !queues[ digit ].empty() ) {
            nums[ i++ ] = queues[ digit ].dequeue();
        }
    }
}


function dispArray( arr ) {
    //
    for ( var i = 0; i < arr.length; ++i ) {
        console.log( arr[ i ] + " " );
    }
}


var queues = [];
for ( var i = 0; i < 10; ++i ) {
    queues[ i ] = new Queue();
}

var nums = [];
for ( var i = 0; i < 10; ++i ) {
    nums[ i ] = Math.floor( Math.floor( Math.random() * 101  ) );
}

console.log( "Before radix sort : " );
dispArray( nums );
distribute( nums, queues, 10, 1 );
collect( queues, nums );
distribute( nums, queues, 10, 10 );
collect( queues, nums );
console.log( "\n\nAfter radix sort : " );
dispArray( nums );




// 우선순위 큐
function Patient( name, code ) {
    //
    this.name   = name;
    this.code   = code;
}

// 변형된 dequeue
function dequeue2(  ) {
    //
    var entry = 0;
    for ( var i = 0; i < this.dataStore.length; ++i ) {
        if ( this.dataStore[ i ].code < this.dataStore[ entry ].code ) {
            entry = i;
        }
    }
    return this.dataStore.splice( entry, 1 );
}

// 변형된 toString
function toString2(  ) {
    //
    var retStr = "";
    for( var i = 0; i < this.dataStore.length; ++i ) {
        retStr += this.dataStore[ i ].name + " code : "
            + this.dataStore[ i ].code + "\n";
    }
    return retStr;
}


// 테스트
var p = new Patient( "Smith", 5 );
var ed = new Queue();
ed.enqueue( p );

p = new Patient( "Jones", 4 );
ed.enqueue( p );
p = new Patient( "Fehrenbach", 6 );
ed.enqueue( p );
p = new Patient( "Brown", 1 );
ed.enqueue( p );
p = new Patient( "Ingram", 1 );
ed.enqueue( p );

console.log( ed.toString2() );
var seen = ed.dequeue2();
console.log( "Patient being treated : " + seen[ 0 ].name );
console.log( "Patient waiting to be seen : " );
console.log( ed.toString2() );

// 다음환자 치료
var seen = ed.dequeue2();
console.log( "Patient being treated : " + seen[ 0 ].name );
console.log( "Patient waiting to be seen : " );
console.log( ed.toString2() );

