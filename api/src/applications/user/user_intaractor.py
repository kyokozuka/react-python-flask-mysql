class UserIntaractor:

    def __init__(self, repo):
        self.repo = repo
    
    def find(self):
        result = self.repo.find()
        return result
    
    def create(self, data):
        result = self.repo.create(data['title'], data['content'])
        return result
    
    def delete(self, id):
        self.repo.delete(id)
        