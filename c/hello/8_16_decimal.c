#include <stdio.h>

int main() {
    int x = 10;     // 10
    int y = 010;    // 8
    int z = 0x10;   // 16

    int k = 3;
    int l = -3;

    printf("x = %d\tx = %d\n", x, x);
    printf("y = %d\ty = %#o\n", y, y);
    printf("z = %d\tz = %#x\n", z, z);

    printf("k = %08X\n", k);
    printf("l = %08X\n", l);
    printf("k + l = %08X\n", k + l);
}
