from flask import Flask, request, render_template

Knome = Flask(__name__)

@Knome.route('/')
def index():
    return ('Method: %s' % request.method)

@Knome.route('/profile/<username>', methods=['GET', 'POST'])
def profile(username):
    return ("%s's profile page" % username)

@Knome.route('/test')
def test():
    #GET is used by URL
    if request.method == 'GET':
        return ("Using GET, dud")
    elif request.method == 'POST':
        return ("Using POST, dipshit")

@Knome.route('/login', methods=['GET', 'POST'])
def create():
    return render_template("login.html")

if __name__ == "__main__":
    Knome.run()
