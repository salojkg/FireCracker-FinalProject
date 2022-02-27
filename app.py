# Importing essential libraries
from flask import Flask, render_template, request
import pickle
import numpy as np


eec_model = pickle.load(open('eec_model.pkl', 'rb'));

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        preg = int(request.form['pregnancies'])
        glucose = int(request.form['glucose'])
        bp = int(request.form['bloodpressure'])
        st = int(request.form['skinthickness'])
        insulin = int(request.form['insulin'])
        bmi = float(request.form['bmi'])
        dpf = float(request.form['dpf'])
        age = int(request.form['age'])
        
        data = np.array([[preg, glucose, bp, st, insulin, bmi, dpf, age]])
        prediction = eec_model.predict(data)
        print("**********")
        print(prediction)
        print("**********")
        return render_template('index.html', prediction=prediction)

if __name__ == '__main__':
	app.run(debug=True)