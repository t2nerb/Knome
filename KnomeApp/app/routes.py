from flask import Flask, request
from forms import RegistrationForm 


Knome = Flask(__name__)

@Knome.route('/')
def index():
    return render_template('main.html')

@Knome.route('/profile/<username>', methods=['GET', 'POST'])
def profile(username):
    return ("%s's profile page" % username)

@Knome.route('/test')
def test():
    #GET is used by URL
    if request.method == 'GET':
        return ("GET, dud")
    elif request.method == 'POST':
        return ("POST, dipshit")

@Knome.route('/create')
def create():
    return render_template("create.html")

@Knome.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    """
    if request.method == 'POST' and form.validate():
        user = User(form.username.data, form.email.data, form.password.data)
        db_session.add(user)
        flash('Thanks for registering')
        return redirect(url_for('login'))
    """
    return render_template('register.html', form=form)

if __name__ == "__main__":
    Knome.run(debug=True)
