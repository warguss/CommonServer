#ifndef _CCOMANDBOJECT_H_
#define _CCOMANDOBJECT_H_
#include <map>

using namespace std;

class CObjectMap
{
	private:
		map<char* , CCommandObject*> _cmdMap;

	public:
		CObjectMap();
		~CObjectMap();

		bool addCommandObject(char* cmd, CCommandObject* object);
		CCommandObject* getCommandObject(CCommandObject* object);

};

CObjectMap g_objectMap;


class CCommandObject
{
	public:
		CCommandObject();
		~CCommandObject();

		virtual bool onMessage();


}; 


class CKakaoBotObject : public CCommandObject
{
	public: 
		CKakaoBotObject();
		~CKakaoBotObject();

		bool onMessage();

};






#endif
