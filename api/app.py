import os, sys
pardir = os.path.dirname(os.path.dirname(os.path.abspath((__file__))))
sys.path.append(pardir)
sys.dont_write_bytecode = True

from src.routers.index import api

if __name__ == '__main__':
    host = '0.0.0.0'
    port=5000
    api.run(debug=True, host=host, port=port)