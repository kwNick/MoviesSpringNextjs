from sklearn.ensemble import RandomForestRegressor

# Random Forest Regression Model
# Predicting continuous numerical value

def create_model():
    model = RandomForestRegressor(
        n_estimators=100, # Number of decision tree regressors
        random_state=42
    )

    return model