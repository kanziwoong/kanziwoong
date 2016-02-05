#include <stdio.h>
#include <math.h>

int main(void) {
	double dnum = 100.0;

	printf("SQRT(%lf) = %lf\n", dnum, sqrt(dnum));
	return 0;
}

// gcc -o sqrt sqrt.c -lm
