from flask import Flask

Knome = Flask(__name__)

@Knome.route('/')
def index():
    return ('Put shit here')

@Knome.route('/profile/<username>')
def profile(username):
    return ("Hey there %s" % username)

if __name__ == "__main__":
    Knome.run()
