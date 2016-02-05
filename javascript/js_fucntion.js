/**
출처 : http://www.nextree.co.kr/p4150/


자바스크립트에서 함수는 first-class object다.
  first-class object는 변수에 저장할 수 있어야 합니다.
  first-class object는 함수의 파라미터로 전달할 수 있어야 합니다.
  first-class object는 함수의 반환값으로 사용할 수 있어야 합니다.
  first-class object는 자료 구조에 저장할 수 있어야 합니다.


// 기명 함수표현식(named function expression)
var company = function company() {
    // 실행코드
};

// 익명 함수표현식(anonymous function expression)
var company = function() {
    // 실행코드
};

// 기명 즉시실행함수(named immediately-invoked function expression)
(function company() {
    // 실행코드
}());

// 익명 즉시실행함수(immediately-invoked function expression)
// Javascript 대가이신 더글라스 클락포트의 권장 표기법
(function() {
    // 실행코드
}());

// 익명 즉시실행함수(immediately-invoked function expression)
(function() {
    // 실행코드
})();

*/



/**
즉시 실행 함수
*/
var buyCar = function(carName) {
    // "내가 구매한 차는 sonata입니다." 출력
    console.log('내가 구매한 차는 ' + carName + '입니다.');
};
buyCar('sonata');

(function(carName) {
    // "내가 구매한 차는 sonata입니다." 출력
    console.log('내가 구매한 차는 ' + carName + '입니다.');
}('sonata'));
/**
ex) at JQuery
(function($) {
    // 함수 스코프 내에서 $는 jQuery Object임.
    console.log($);
}(jQuery));
*/



/**
모듈 패턴 (Module Pattern)
즉시실행함수를 위와 같이 사용하여 언어레벨에서 제공하지 못하는 모듈화 지원도구를 극복할 수 있으며,
이렇게 작성된 코드를 분리된 파일로 구성하면 재사용성을 높일 수 있습니다.
*/
var clerk = (function() {
    var name = 'Teo';
    var sex = '남자';
    var position = '수석 엔지니어';
    // salary private
    var salary = 2000;
    var taxSalary = 200;
    var totalBonus = 100;
    var taxBonus = 10;

    var payBonus = function() {
        totalBonus = totalBonus - taxBonus;
        return totalBonus;
    };
    var paySalary = function() {
        return salary - taxSalary;
    };

    // Public 속성, 메소드
    return {
        name : name,
        sex : sex,
        position : position,
        paySalary : paySalary,
        payBonus : payBonus
    };
}());

// name 속성은 public
console.log(clerk.name); // 'Teo' 출력

// salary 변수는 즉시실행함수 내부 변수이므로 private
console.log(clerk.salary); // undefined 출력

// paySalary 메소드는 public
console.log(clerk.paySalary()); // 1800 출력

// payBonus 메소드는 public
console.log(clerk.payBonus()); // 90 출력
console.log(clerk.payBonus()); // 80 출력



/**
자바스크립트 모듈 작성시 코드 순서
  Javascript로 SPA를 구현할  때, 다음과 같은 순서의 코드로 모듈을 작성하게 되면 협업하는 개발자들에게 집약되고 일관된 코드를 제공하여 많은 도움이 될 것입니다. 이렇게 코드의 순서를 정하는 이유는 집약되고 일관된 코드를 제공하는데 있으므로 코드의 순서는 개발상황과 모듈용도에 맞춰가며 조정하고 추가 및 삭제될 수도 있습니다. 아래 순서는 단지 코드작성 순서의 예일뿐입니다.
    - 모듈 스코프 내에서 사용할 변수 작성
    - 유틸리티 메소드 작성
    - DOM 조작 메소드 작성
    - 이벤트 핸들러 작성
    - Public 메소드 작성
*/
// SPA 모듈 작성 순서 예시
var app = (function() {

    // 1. 모듈 스코프 내에서 사용할 변수 작성
    var scopeVar = {};
    var utilMethod;
    var manipulateDom;
    var eventHandle;
    var initModule;

    // 2. 유틸리티 메소드 작성
    utilMethod = function() {
        // 실행코드
    };

    // 3. DOM 조작 메소드 작성
    manipulateDom = function() {
        // 실행코드
    };

    // 4. 이벤트 핸들러 작성
    eventHandle = function() {
        // 실행코드
    };

    // Public 메소드 작성
    initModule = function() {
        // 실행코드
    };

    return {
        init : initModule
    };
}());



/**
모듈화 하는 코딩 기법 정리
*/
/**
 * Library 모듈화를 위한 코딩기법 1
 * call 함수 이용
 */
(function() {
    'use strict';
    var root = this;
    var version = '1.0';
    var Module1;
    if(typeof exports !== 'undefined') {
        Module1 = exports;
    } else {
        Module1 = root.Module1 = {};
    }
    Module1.getVersion = function() {
        return version;
    }
}).call(this);
// console.log(Module1.getVersion());

/**
 * Library 모듈화를 위한 코딩기법 2
 * 글로벌 객체를 파라미터로 전달
 */
(function(global) {
    var root = global;
    var version = '1.0';
    var Module2;
    if(typeof exports !== 'undefined') {
        Module2 = exports;
    } else {
        Module2 = root.Module2 = {};
    }
    Module2.getVersion = function() {
        return version;
    }
}(this));
// console.log(Module2.getVersion());

/**
 * Library 모듈화를 위한 코딩기법 3
 * 즉시실행함수 내부에서 글로벌 객체를 내부 변수에 할당
 */
(function() {
    var root = this;
    var version = '1.0';
    var Module3;
    if(typeof exports !== 'undefined') {
        Module3 = exports;
    } else {
        Module3 = root.Module3 = {};
    }
    Module3.getVersion = function() {
        return version;
    }
}());
// console.log(Module3.getVersion());

/**
 * Library 모듈화를 위한 코딩기법 4
 * apply 함수 이용
 */
(function() {
    var root = this;
    var version = '1.0';
    var Module4;
    if(typeof exports !== 'undefined') {
        Module4 = exports;
    } else {
        Module4 = root.Module4 = {};
    }
    Module4.getVersion = function() {
        return version;
    }
}).apply(this) ;
// console.log(Module4.getVersion());

/**
 * Library 모듈화를 위한 코딩기법 5
 * 기명 즉시실행함수 이용
 */
var Module5 = (function() {
    var root = this;
    var version = '1.0';
    var Module;
    if(typeof exports !== 'undefined') {
        Module = exports;
    } else {
        Module = root.Module = {};
    }
    Module.getVersion = function() {
        return version;
    }
    return Module;
}());
console.log(Module5.getVersion());












