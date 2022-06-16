from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/resta/<numeroa>/<numerob>', methods=['GET'])
def resta(numeroa, numerob):
    
    try:
        numeroa = int(numeroa)
        numerob = int(numerob)
        return jsonify({ 'resultado': numeroa-numerob}), 200
    except:
        return jsonify({ 'resultado': 'Error al resta los numeros'}), 400


@app.route('/division/<numeroa>/<numerob>', methods=['GET'])
def division(numeroa, numerob):
    
    try:
        numeroa = int(numeroa)
        numerob = int(numerob)
        return jsonify({ 'resultado': numeroa/numerob}), 200
    except:
        return jsonify({ 'resultado': 'Error al dividir los numeros'}), 400