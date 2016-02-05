//
//  main.m
//  02 Object-basic
//
//  Created by kanziw on 2016. 1. 11..
//  Copyright © 2016년 kanziw. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Student.h"

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        Student * student = [[Student alloc] init];
        student.studentId = 2700377;
        student.name = @"kanziw";
        student.phone = @"010-1111-1234";
        
        NSLog(@"name: %@, phone: %@, id: %d", student.name, student.phone, student.studentId);
    }
    return 0;
}
