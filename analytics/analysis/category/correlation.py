from scipy.stats import pearsonr

def calculate_correlation(df, column1, column2):
    
    # Make sure the requested columns exist
    if column1 not in df.columns:
        raise ValueError(
            f"Column '{column1}' does not exist"
        )

    if column2 not in df.columns:
        raise ValueError(
            f"Column '{column2}' does not exist"
        )

    # print("================================")
    # print("CORRELATION DEBUG")
    # print("================================")

    # print("Column 1:", column1)
    # print("Column 2:", column2)

    # print("\nData types:")
    # print(df[[column1, column2]].dtypes)

    # print("\nValues:")
    # print(df[[column1, column2]])

    # print("\nMissing values:")
    # print(df[[column1, column2]].isna().sum())

    # Remove rows where either value is missing
    data = df[[column1, column2]].dropna()

    # print("\nRows after dropna:", len(data))

    # print("\nUnique values:")
    # print(column1, data[column1].nunique())
    # print(column2, data[column2].nunique())

    # print("\nClean data:")
    # print(data)

    if len(data) < 2:
        raise ValueError(
            "Not enough valid data to calculate correlation"
        )

    if data[column1].nunique() < 2:
        raise ValueError(
            f"'{column1}' does not contain enough different values"
        )

    if data[column2].nunique() < 2:
        raise ValueError(
            f"'{column2}' does not contain enough different values"
        )

    correlation, p_value = pearsonr(
        data[column1],
        data[column2]
    )

    # print("\nCorrelation:", correlation)
    # print("P-value:", p_value)

    return {
        "variable1": column1,
        "variable2": column2,
        "correlation": round(float(correlation), 3),
        "p_value": round(float(p_value), 4)
    }