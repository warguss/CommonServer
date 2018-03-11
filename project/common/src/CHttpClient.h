#ifndef _CHTTPCLIENT_H_
#define _CHTTPCLIENT_H_


/***********************
 * Get / Post 우선 구현
 ***********************/
class CHttpClient
{
	private:
		int _fd;

	public:
		CHttpClient();
		~CHttpClient();

		int readline();
		int readn();

		int writeline();
		int writen();

		bool addParam();
		bool addHeader();

		bool deleteParam();
		bool deleteHeader(); 

		bool getStatusLine();
		bool setStatusLine();

		bool operation();
}


#endif
