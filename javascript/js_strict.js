/**

출처
http://blog.aliencube.org/ko/2014/01/02/reasons-behind-using-strict-mode-while-coding-javascript/


Strict Mode는 ECMAScript 5 버전에 있는 새로운 기능으로써,
당신의 프로그램 또는 함수를 엄격한 운용 콘텍스트 안에서 실행시킬 수 있게끔 합니다.
이 엄격한 콘텍스트는 몇가지 액션들을 실행할 수 없도록 하며, 좀 더 많은 예외를 발생시킵니다.

Strict Mode는 몇가지 면에서 도움이 되는데:
  흔히 발생하는 코딩 실수를 잡아내서 예외를 발생시킵니다.
  상대적으로 안전하지 않은 액션이 발생하는 것을 방지하거나 그럴 때 예외를 발생시킵니다.
  예를 들자면 전역객체들에 접근하려 한다거나 하는 것들이겠지요.
  혼란스럽거나 제대로 고려되지 않은 기능들을 비활성화시킵니다.

이 strict mode는 파일 전체에 적용시킬 수도 있고,
아니면 특정한 함수 안에서만 적용시킬 수도 있습니다.

따라서, 기존의 자바스크립트 코드에 대해 좀 더 엄격한 검사를 실행시키고 싶다면 문서의 첫 줄에 "use strict";를 추가한다.
기존의 것은 그대로 놔두고, 새로운 코드에 대해서만 추가하고 싶다면 각각의 함수 블록 처음에 추가하는 것이 좋겠다.

*/