from flask import Flask, request, render_template, session

Knome = Flask(__name__)


@Knome.route('/', methods=['GET', 'POST'])
def index():
    return render_template("index.html")
    #return ('Method: %s' % request.method)

@Knome.route('/profile/<username>', methods=['GET', 'POST'])
def profile(username):
    return ("%s's profile page" % username)

@Knome.route('/loginhandler?uname=<username>&psw=<password>')
def loginhandler(username, password):
    return (username, password)

@Knome.route('/test')
def test():
    #GET is used by URL
    if request.method == 'GET':
        return ("Using GET, dud")
    elif request.method == 'POST':
        return ("Using POST, dipshit")

@Knome.route('/login', methods=['GET', 'POST'])
def create():
    if request.method == 'GET':
        return render_template("login.html")
    elif request.method == 'POST':
        username = request.form['uname']
        print(username)

if __name__ == "__main__":
    Knome.run()
