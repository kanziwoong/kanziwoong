#include <stdio.h>
#include "static.h"
#include "shared.h"

int main(void) {
  printf("main start. \n");
  static_function(100);
  shared_function(200, 300);
  printf("main end.\n");
  return 0;
}

