from flask import Blueprint, request

from src.db.mysql import MysqlDriver

from src.applications.user.user_intaractor import UserIntaractor
from src.applications.user.user_repository import UserRepository


class UserController:

    def __init__(self, db_driver):
        repo = UserRepository(db_driver)
        self.interactor = UserIntaractor(repo)

    def find(self):
        result = self.interactor.find()
        return {'body': result}
    
    def create(self):
        data = request.json
        self.interactor.create(data)
        return {'body': 'create'}
    
    def delete(self, todo_id):
        self.interactor.delete(todo_id)
        return {'body': 'delete'}

db = MysqlDriver()
user = UserController(db)

user_api = Blueprint('user_api', __name__)
user_api.add_url_rule('/', view_func=user.find, methods=['GET'])
user_api.add_url_rule('/create', view_func=user.create, methods=['POST'])
user_api.add_url_rule('/delete/<todo_id>', view_func=user.delete, methods=['DELETE'])
