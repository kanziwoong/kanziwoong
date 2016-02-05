# [Homebrew](http://brew.sh/)
>OS X 용 패키지 관리자

## Introduce

기본적인 소개는 [링크 - 생활코딩 Homebrew 강의](https://opentutorials.org/course/128/11129)로 대체하고 싶다.

## Install
> 한글 설명도 있군요? [링크](http://brew.sh/index_ko.html)

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Usage
### Search
> brew 를 이용해 설치할 수 있는 패키지를 검색

Example : `gradle` 설치

```
mac $ brew search gradle
gradle                                   homebrew/versions/gradle21
homebrew/versions/gradle110              homebrew/versions/gradle221
homebrew/versions/gradle112              homebrew/versions/gradle24
homebrew/versions/gradle16               homebrew/versions/gradle26
homebrew/versions/gradle18               homebrew/versions/gradle27
homebrew/versions/gradle20               homebrew/versions/gradle28
Caskroom/cask/qlgradle
```

### Install
> brew 를 이용한 패키지 설치

Example : `gradle` 설치

```
$ brew install gradle
==> Downloading https://downloads.gradle.org/distributions/gradle-2.10-bin.zip
######################################################################## 100.0%
🍺  /usr/local/Cellar/gradle/2.10: 164 files, 48.9M, built in 6 minutes 6 seconds
```

### brew tap
> 다른 원하는 버젼을 설치하기 위한 툴

`gradle`을 이용한 `build` 중 나타난 에러,

```
mac $ gradle build

FAILURE: Build failed with an exception.

* Where:
Build file '/Users/kanziw/dev/kanziwoong/react-native/githubNotetaker/android/app/build.gradle' line: 1

* What went wrong:
A problem occurred evaluating project ':app'.
> Failed to apply plugin [id 'com.android.application']
   > Gradle version 2.2 is required. Current version is 2.10. If using the gradle wrapper, try editing the distributionUrl in /Users/kanziw/dev/kanziwoong/react-native/githubNotetaker/android/gradle/wrapper/gradle-wrapper.properties to gradle-2.2-all.zip

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

BUILD FAILED

Total time: 0.801 secs
```

현재의 `gradle version` 확인

```
$ gradle --version

------------------------------------------------------------
Gradle 2.10
------------------------------------------------------------

Build time:   2015-12-21 21:15:04 UTC
Build number: none
Revision:     276bdcded730f53aa8c11b479986aafa58e124a6

Groovy:       2.4.4
Ant:          Apache Ant(TM) version 1.9.3 compiled on December 23 2013
JVM:          1.8.0_65 (Oracle Corporation 25.65-b01)
OS:           Mac OS X 10.11.2 x86_64
```

* `homebrew/version`을 이용해 다른 버젼의 `gradle`을 설치
	* `brew unlink brew`로 현재 사용중인 `symbolic link`를 일단 끊고 `brew search gradle`로 설치 원하는 버젼을 검색하여 설치

`homebrew/version` 설치

```
brew tap homebrew/versions
```
unlink

```
$ brew unlink gradle
Unlinking /usr/local/Cellar/gradle/2.10... 1 symlinks removed
```
설치

```
$ brew install homebrew/versions/gradle221
==> Installing gradle221 from homebrew/versions
==> Downloading https://downloads.gradle.org/distributions/gradle-2.2.1-bin.zip
##                                                                         3.1%^######################################################################## 100.0%
🍺  /usr/local/Cellar/gradle221/2.2.1: 154 files, 43.5M, built in 5 minutes 48 seconds
```

버젼 확인

```
$ gradle --version

------------------------------------------------------------
Gradle 2.2.1
------------------------------------------------------------

Build time:   2014-11-24 09:45:35 UTC
Build number: none
Revision:     6fcb59c06f43a4e6b1bcb401f7686a8601a1fb4a

Groovy:       2.3.6
Ant:          Apache Ant(TM) version 1.9.3 compiled on December 23 2013
JVM:          1.8.0_65 (Oracle Corporation 25.65-b01)
OS:           Mac OS X 10.11.2 x86_64
```

### Switch
> 이미 설치 해놓은 다른 버전의 툴로 변경하는 명령어, 근데 난 왜 안되지.ㅋㅋ

--
#### 참조 링크 : [stackoverflow](http://stackoverflow.com/questions/3987683/homebrew-install-specific-version-of-formula)