import pymysql.cursors


class MysqlDriver:
    
    def connect(self):
        self.connection = pymysql.connect(
            host='mysql',
            port=3306,
            user='user',
            password='password',
            db='sample_db',
            charset='utf8',
            cursorclass=pymysql.cursors.DictCursor)

    def select(self, sql):
        with self.connection.cursor() as cursor:
            cursor.execute(sql)
            result = cursor.fetchall()
        self.connection.commit()
        self.connection.close()
        return result
    
    def execute_handler(self, sql):
        with self.connection.cursor() as cursor:
            cursor.execute(sql)
        self.connection.commit()
        self.connection.close()