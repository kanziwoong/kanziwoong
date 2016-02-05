//: Playground - noun: a place where people can play

import Cocoa

// Basic
var str = "Hello, playground"
var name = "kanziw"
print("\(name)")

var i = 1
var f : Float = 1.1
i = 3



// tuple
var one = (1, "one", "일")
let two = (num : 2, eng : "two", kor : "둘")

one.0
one.1
one.2
two.num
let (num, _, _) = two
num



// Array
var intArray : [Int] = [1, 2, 3, 4, 5]
let strArray = ["A", "B", "C"]
var emptyArray = [Int]()

intArray = [1, 2, 3]
intArray += [4]
intArray.append(5)
intArray.removeLast()
intArray.count
intArray.isEmpty



// Dictionary
var dic1 : [String:Int] = ["1월":1, "2월":2]
dic1["2월"]
var dic2 : [String: String] = ["12월":"크리스마스"]
dic2["4월"] = "april"
dic2["4월"] = "잔인한 달"

struct Item {
    var value : Int
}
var customDic1 : Dictionary<Int, Item>
//var item : Item
//print("\(item)")
//customDic1[1] = 3.value
//var customDic2 : Dictionary<Item,String>    // Error



// Set
var beverage : Set<String> = ["Coke", "Juice", "Milk"]
beverage.insert("Soda")
beverage.remove("Milk")
var array = Array(beverage)
var intersect = beverage.intersect(["Coke", "Juice", "Wiskey"])



// if
var ifNum = 3
if ifNum == 1 {
    print(ifNum)
} else if ifNum == 2 {
    print(ifNum)
} else {
    print(ifNum)
}



// Optional
var optionalVar : Int?
var colorName = optionalVar ?? 999

var optionalStr : String?
var num1 = optionalStr?.uppercaseString
var optionalStr2 : String! = "123"



// Function
func greeting(){
    print("Hello function")
}
greeting()

func random3() -> (Int, Int, Int) {
    let r1 = Int(5625 % 10)
    let r2 = Int(342 % 10)
    let r3 = Int(231 % 10)
    return (r1, r2, r3)
}
print(random3())


// External params
func greeting(whom person : String, with emotion : String = "Happy") {
    print("Hello " + person)
}
greeting(whom: "My Friend", with: "Smile")


// Use internal param name
func greeting(person person : String, emotion : String) {
    print("Hello " + person)
}

greeting(person: "My Friend", emotion: "Smile")


// add example
func adds(count : Int, values : Int...) {
    if count == 0 || count > values.count {
        print("Invalied Values & count : \(values.count)")
    }
    else{
        var result = 0
        for (var i = 0; i < count; i++){
            result += values[i]
        }
        print("Result : \(result)")
    }
}

adds(1, values: 1, 2, 3) // 1
adds(3, values: 1, 2, 3, 4) // 6
adds(4, values: 1, 2, 3, 4, 5, 6) // 10




