#include <stdio.h>

int main () {
    enum origin { EAST, WEST, SOUTH, NORTH };
    origin mark;
    mark = EAST;
    printf("mark = %d\n", mark);
    return 0;
}
