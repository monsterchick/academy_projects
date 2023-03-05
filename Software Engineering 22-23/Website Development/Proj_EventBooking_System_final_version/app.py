from flask import Flask, render_template, request


app = Flask(__name__)

# navigation and welcome page
@app.route('/')
def index():
    return render_template('index.html')









# login page
@app.route('/login')
def login():
    return render_template('login.html')


# where to save the data from users
database = {
        'Nixon@gmail.com':'nnn',
        'andrew@yahoo.com': 'aaa',
        'kwan@outlook.com': 'kkk'
        }
@app.route('/participant', methods=['GET', 'POST'])
def participant():
    loginEmail = request.form['email']
    loginPwd = request.form['password']
    if loginEmail not in database:
        return render_template('login.html', test='Email/Password wrong!')
    else:
        # if loginEmail != database[loginPwd]:
        if database[loginEmail] != loginPwd:
            return render_template('login.html', test='Email/Password wrong!')
        else:
            return render_template('participant.html', greeting='Welcome to event booking system!')




@app.route('/edit_profile',methods=['GET'])
def edit_info():
    return render_template('edit_profile.html')
@app.route('/basket')
def basket():
    return render_template('basket.html')








# sign up page
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    return render_template('signup.html')



@app.route('/find_info')
def findInfo():
    return render_template('find_info.html')


if __name__ == "__main__":
    app.run(debug=True)