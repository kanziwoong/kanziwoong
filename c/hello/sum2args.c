#include <stdio.h>

int main(void) {
    int x, y;
    printf("input first number : ");
    scanf("%d", &x);
    
    printf("input second number : ");
    scanf("%d", &y);
    printf("%d + %d = %d\n", x, y, x + y);
    return 0;
}
