class UserRepository:

    def __init__(self, db_driver):
        self.db_driver = db_driver

    def find(self):
        self.db_driver.connect()
        sql = "SELECT * FROM todo;"
        result = self.db_driver.select(sql)
        return result
    
    def create(self, title, content):
        self.db_driver.connect()
        sql = f'INSERT INTO todo (title, content) VALUES (\'{title}\', \'{content}\');'
        self.db_driver.execute_handler(sql)
    
    def delete(self, id):
        self.db_driver.connect()
        sql = f'DELETE FROM todo WHERE id = \'{id}\''
        self.db_driver.execute_handler(sql)