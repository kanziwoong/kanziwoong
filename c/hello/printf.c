#include <stdio.h>

int main() {
    int num = 123;
    double pie = 3.14;

    printf("=== int ===\n");
    printf("-->%d<--\n", num);
    printf("-->%5d<--\n", num);
    printf("-->%05d<--\n", num);
    printf("-->%-5d<--\n", num);

    printf("=== double ===\n");
    printf("-->%f<--\n", pie);
    printf("-->%10f<--\n", pie);
    printf("-->%.2f<--\n", pie);
    printf("-->%10.2f<--\n", pie);
    printf("-->%010.2f<--\n", pie);
    printf("-->%-10.2f<--\n", pie);
    return 0;
}
