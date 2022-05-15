import pyaes
import bcrypt

KEY = b"0123456789123456"

if __name__ == '__main__':
    aes = pyaes.AESModeOfOperationCTR(KEY)
    value = 'sef_1.32'.encode('utf-8')
    encrypted_value = aes.encrypt(value)
    encrypted_value2 = bcrypt.hashpw(value, bcrypt.gensalt())
    print(value, encrypted_value, encrypted_value2, bcrypt.checkpw(value, encrypted_value2), sep=' <|> ')
    encrypted_value3 = bcrypt.hashpw(encrypted_value2, bcrypt.gensalt())
    print(encrypted_value3)
    print(bcrypt.checkpw(encrypted_value2, encrypted_value3))
