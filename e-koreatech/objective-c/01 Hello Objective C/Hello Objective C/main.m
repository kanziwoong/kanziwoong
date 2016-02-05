//
//  main.m
//  Hello Objective C
//
//  Created by kanziw on 2016. 1. 11..
//  Copyright © 2016년 kanziw. All rights reserved.
//

#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // insert code here...
        NSLog(@"Hello, World!");
        
        
        NSString * string = @"Hello String";
        NSString * scoreString = [NSString stringWithFormat:@"You scored %i! Way to go!", 3000];
        NSLog(@"%@, %@", string, scoreString);
        
        NSString * str = @"oranges";
        BOOL res = [str isEqualToString:@"apples"];
        NSLog(@"문자열이 %@ 합니다.", (res)? @"일치":@"불일치");
        
        int branch = 3;
        if (branch == 0 ) {
            NSLog(@"0 is selected");
        } else {
            NSLog(@"0 is not selected!");
        }
        
        switch(branch){
            case 0: NSLog(@"0 is selected!"); break;
            case 1: NSLog(@"1 is selected!"); break;
            default: NSLog(@"%i is unhandled!", branch);
        }
        
        int i = 0;
        while(i < 10) {
            NSLog(@"while i = %i", i);
            i++;
        }
        
        for(i = 0; i < 10; i++) {
            NSLog(@"for i = %i", i);
        }
        
        i = 0;
        do {
            NSLog(@"do-while i = %i", i);
            i++;
        } while(i < 10);
        
        NSString * stringParam = [[NSString alloc] initWithCString:"This is sample" encoding: NSUTF8StringEncoding];
        NSLog(@"stringParam : %@", stringParam);
    }
    return 0;
}
