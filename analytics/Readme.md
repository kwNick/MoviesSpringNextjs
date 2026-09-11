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
         REST API                       pandas
             │                            │
             │                  ┌─────────┴───────────────┬─────────────────────────────────────────┐
             │                  │              ┌──────────┴───────────────┐                         ▼
             │                  ▼              │                          │                   VISUALIZATIONS
             │             STATISTICS          ▼                          ▼                         │
             │                  │              ML                 RECOMMENDATION SYSTEM             ▼
             │                  ▼              │                          │                  Matplotlib/Seaborn
             │             SciPy/numpy         ▼                          ▼                         │
             │                  │          scikit-learn              CONTENT-BASED                  ▼
             │                  ▼              │                          │                  Charts/Histograms
             │              Analysis           ▼                          ▼                Scatter-Plots/Heat-Maps
             │                  │          Random Forest            Cosine Similarity
             └──────────┬───────┘              │                          │
                        │                      ▼                          ▼
                        ▼                 Predicts value         Movie Recommendations
               FastAPI Analytics API           │                          │
                        │                      ▼                          ▼
                        ▼                   FastAPI                    FastAPI
                     Next.js
                        │
              ┌─────────┴──────────────┐
              ▼                        ▼
          Dashboard         Predictions/Visualizations
```

```text
                 RECOMMENDATION
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
      Numerical      Genre       People
        40%           30%          30%
                                   │
                              ┌────┴────┐
                              ▼         ▼
                          Director    Actors
                            15%        15%
```

```text
                    ORIGINAL MOVIE
                        │
                        │
            ┌────────────┴────────────┐
            │                         │
            ▼                         ▼
    ML preprocessing           Original data
            │                         │
            ▼                         │
    Feature vectors                  │
            │                         │
            ▼                         │
    Cosine similarity                  │
            │                         │
            └────────────┬────────────┘
                        ▼
                Recommendation
                        │
                ┌─────────┴─────────┐
                │                   │
        Movie fields       Recommendation data
        (unchanged)        similarity
                            match_percentage
                            description
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
        RECOMMENDATION SYSTEM
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
