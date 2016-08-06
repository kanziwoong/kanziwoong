#include <stdio.h>
#include <string.h>

int main() {
    struct {
        char Name[10];
        int Age;
        double Height;
    } Friend;

    strcpy(Friend.Name, "YSKim");
    Friend.Age = 29;
    Friend.Height = 180.0;

    printf("%s's Age = %d\n", Friend.Name, Friend.Age);
    printf("%s's Height = %.1f\n", Friend.Name, Friend.Height);
    return 0;
}
