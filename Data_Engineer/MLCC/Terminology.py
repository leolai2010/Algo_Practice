Label: is the true thing we're predicting: y
    The y variable in basic linear regression
Features: are input variables describing our data: Xi
    The {x1, x2 ... xn} variables in basic linear regression
Example: is a particular instance of data, x 
Labeled example: has {Features, lablel} :(x,y)
    used to train the model
Unlabeled example: has {Features, ?} :(x,?)
    used for making predictions on new data 
Model maps examples to predicted labels: y' 
    Defined by internal parameters, which are learned
    Training: means creating or learning the model. 
    By showing the model labeled examples and and enable the model to gradually learn the relationsihps between features and label
    Inference: means applying the trained model to Unlabeled examples. Using trained model to make useful predictions
Regression vs. Clasification
    Regression: model that predicts continuous values 
    Classification: model that predicts discrete values