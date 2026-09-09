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
