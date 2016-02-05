//
//  Student.h
//  02 Object-basic
//
//  Created by kanziw on 2016. 1. 11..
//  Copyright © 2016년 kanziw. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Student : NSObject {
    int studentId;
    NSString * name;
    NSString * phone;
}
@property(nonatomic, retain) NSString * name;
@property(nonatomic, retain) NSString * phone;
@property int studentId;
@end
