#include <stdio.h>
#define PI 3.14

int main() {
    const double doublePI = PI * 2;
    printf("#define PI %f, const doubpePI = %f\n", PI, doublePI);
    return 0;
}
