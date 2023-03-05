from flask import Flask, render_template, request


app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    return render_template('login.html', email=email,password=password)

    # return render_template('login.html', dm1=email, dm2=password)

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    return render_template('signup.html')


if __name__ == "__main__":
    app.run(debug=True)