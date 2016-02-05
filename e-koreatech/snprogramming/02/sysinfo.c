#include <stdio.h>
#include <sys/sysinfo.h>

int main() {
  struct sysinfo sinfo;

  sysinfo(&sinfo);
  printf("부팅 이후 시스템의 생존 시간(초단위) = %ld\n", sinfo.uptime);
  printf("1분, 5분, 15분 이전의 시스템 평균 부하 = %ld, %ld, %ld\n", sinfo.loads[0], sinfo.loads[1], sinfo.loads[2]);
  printf("메모리의 총 크기/사용 가능한 메모리 = %ld / %ld\n", sinfo.totalram, sinfo.freeram);
  printf("스왑 공간의 총 크기 / 사용 가능한 스왑 공간 = %ld / %ld\n", sinfo.totalswap, sinfo.freeswap);
  printf("현재 수행되고 있는 프로세스 수 = %hd\n", sinfo.procs);
  return 0;
}

