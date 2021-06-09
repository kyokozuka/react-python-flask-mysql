from flask import Flask
from redis import Redis
from flask_cors import CORS

from src.routers.user import user_api


# Flask App
api = Flask(__name__)
api.config['SECRET_KEY'] = 'secret'
CORS(api)

# Flask Blueprint
api.register_blueprint(user_api, url_prefix='/api/user')

def index():
    return f'Hello Flask3'

# Flask Rule
api.add_url_rule('/', 'index', index)


