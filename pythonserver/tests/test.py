import sys
sys.path.append('../')
import unittest
from app import app 

class UsersTest(unittest.TestCase):
    # Test para verificar que el servidor esté funcionando

    def setUp(self):
        self.ctx = app.app_context()
        self.ctx.push()
        self.client = app.test_client()

    def tearDown(self):
        self.ctx.pop()

    def test_hacer_resta(self):
        print("restando")
        response = self.client.get('/resta/1/1')
        self.assertEqual(response.status_code,200)

    def test_no_hacer_resta(self):
        print("error restando")
        response = self.client.get('/resta/hola/adios')
        self.assertEqual(response.status_code,400)

    def test_hacer_division(self):
        print("dividiendo")
        response = self.client.get('/division/1/1')
        self.assertEqual(response.status_code,200)
    
    def test_no_hacer_division(self):
        print("error dividiendo")
        response = self.client.get('/division/hola/mundo')
        self.assertEqual(response.status_code,400)
    

if __name__ == '__main__':
    unittest.main()