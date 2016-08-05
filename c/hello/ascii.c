#include <stdio.h>

int main() {
    char code1 = 'A';
    char code2 = 65;

    char beep1 = 7;
    char beep2 = '\a';


    printf("%c\n", code1);
    printf("%c\n", code2);

    //printf("%c\n", beep1);
    //printf("%c\n", beep2);

    printf("print warn! \007");
}
