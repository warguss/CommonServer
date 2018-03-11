#ifndef _CNETWORK_MANAGER_H_
#define _CNETWORK_MANAGER_H_

class CNetworkManager
{
	private:
		int _port;

	public:
		static int _epoll_fd;
		static struct epoll_event _init_ev, *_events;
		static int _serverSock;

		CNetworksManager(int port);
		~CNetworksManager();
		int connectInitialize();

		static void* waitEvent(void* val);
};


#endif
