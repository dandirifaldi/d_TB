from flask import Flask, render_template, request
# from keras.preprocessing.image import load_img
# from keras.preprocessing.image import img_to_array
import tensorflow as tf
from tensorflow import keras
from keras.models import load_model
import cv2
import numpy as np

app = Flask(__name__)
model = tf.keras.models.load_model('model/model2.h5')
# model.make_predict_function()

@app.route('/', methods=['GET'])
def main():
    return render_template('index.html')
    
@app.route('/', methods=['POST'])
def predict():
    imagefile = request.files['imagefile']
    image_path = "./static/img/predict/" + imagefile.filename
    imagefile.save(image_path)

    # image = load_img(image_path, target_size=(224,224))
    # image = img_to_array(image)
    # image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
    x = cv2.imread(image_path)
    x = cv2.resize(x,(224,224))
    x = x.reshape(224, 224, x.shape[2])
    x = cv2.cvtColor(x, cv2.COLOR_BGR2GRAY)
    x = np.array(x)/255
    x = x.reshape(-1, 224, 224, 1)
    images = np.vstack([x])
    pred = model.predict(images, batch_size=32)
    # global desc
    if pred[0]>=0.5:
        # desc = 'NORMAL'
        return render_template('index.html',_anchor="predict", fname=imagefile.filename,prediction="TUBERKULOSIS", image=image_path)
    elif pred[0]<0.5:
        return render_template('index.html',_anchor="predict", fname=imagefile.filename, prediction="NORMAL", image=image_path)
        # desc = 'TUBERKULOSIS'

    # classification = '%s' % (desc)
    # return render_template('index.html', prediction=classification, image=image_path)


if __name__ == '__main__':
    app.run(port=3000, debug=True)