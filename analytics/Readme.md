# Analysis

## Architecture

```text
                        MongoDB
                           │
             ┌─────────────┴──────────────┐
             │                            │
             ▼                            ▼
       Spring Boot                    PyMongo
             │                            │
             ▼                            ▼
        REST API                    pandas
             │                            │
             │                  ┌─────────┴──────────┐
             │                  │                    │
             │                  ▼                    ▼
             │             STATISTICS              ML
             │                  │                    │
             │                  ▼                    ▼
             │              SciPy                scikit-learn
             │                  │                    │
             │                  ▼                    ▼
             │             Analysis             Random Forest
             │                  │                    │
             └──────────┬───────┘                    │
                        │                            │
                        ▼                            ▼
                    FastAPI Analytics API
                        │
                        ▼
                     Next.js
                        │
              ┌─────────┴──────────┐
              ▼                    ▼
          Dashboard            Predictions
```

## Pipeline

```text
        RAW DATA
        ↓
        DATA CLEANING
        ↓
        DATAFRAME
        ↓
        STATISTICAL ANALYSIS
        ↓
        MACHINE LEARNING
        ↓
        FASTAPI
        ↓
        NEXT.JS VISUALIZATION/UI
```

```text
| ML type            | Your question                           | Models                   | Metrics                                           |
| ------------------ | --------------------------------------- | ------------------------ | ------------------------------------------------- |
| **Regression**     | "What IMDb rating will this movie get?" | Random Forest Regressor  | MAE, MSE, RMSE, R²                                |
| **Classification** | "Will this movie be highly rated?"      | Random Forest Classifier | Accuracy, Precision, Recall, F1, Confusion Matrix |
| **Clustering**     | "What groups of similar movies exist?"  | K-Means                  | Silhouette Score                                  |
```

```text
| Metric   | What it tells you                                               | Better |
| -------- | --------------------------------------------------------------- | ------ |
| **MAE**  | Average prediction error                                        | Lower  |
| **MSE**  | Average squared prediction error; heavily punishes large errors | Lower  |
| **RMSE** | Prediction error in the original IMDb-rating units              | Lower  |
| **R²**   | How much of the variation in IMDb ratings the model explains    | Higher |
```
