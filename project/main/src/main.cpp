#include <stdio.h>
#include <unistd.h>

/*****************************************
 * Parent - Child 구조
 * Child가 죽으면 restart 필요(재시작필요) 
 * Daemon으로 하여 stdout, in, err에대해
 * 파일로 log를 쓴다
 *****************************************/
int main(void)
{
	int count;
	pid_t pid = fork();

	if ( pid == 0 )
	{
		/**************************
		 * Child Process
		 **************************/

	} 
	else if ( pid > 0 )
	{
		/**************************
		 * Parent Process
		 * Child Signal 검사 
		 **************************/
		
	} 
	else
	{
		/**************************
		 * Fork Fail
		 **************************/
	
	}



	return 0;
} 
