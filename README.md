# Sales-Forecast-Application
# Sales Forecasting Application

The Sales Forecasting Application is a powerful web-based tool that enables users to perform accurate sales forecasting using a flexible and fully automated Machine Learning Pipeline. With an intuitive user interface, the application allows users to upload their sales dataset, cleanse and preprocess the data, train the ML model, and obtain predictions. The prediction results are presented in an interactive dashboard with informative graphs and comparison tables.

## Objective

The main objective of the Sales Forecasting Application is to build an end-to-end pipeline that simplifies the sales forecasting process. From data extraction to prediction, the application streamlines the following steps:

1. **Data Extraction:** Users can easily upload their sales dataset in CSV format through the Angular App. They have the option to set the target feature, select relevant features, and specify the time period for future forecasts.

2. **Data Cleaning:** Before making predictions, the application cleans the data to ensure accurate results. This step involves fixing or removing incorrect, corrupted, duplicate, or incomplete data.

3. **Pre-processing:** Raw data is transformed according to requirements, and various exploratory data analysis techniques, such as normalization and standardization, are applied for data validation and enhancement.

4. **Prediction:** The ML model predicts the target feature for the specified time period. The application generates comparison tables displaying actual versus predicted values, along with model validation metrics like RMSE, MAPE, and Accuracy.

5. **Visualization:** The prediction results are visually presented in the form of graphs within the Angular App. Additionally, an informative dashboard is built using Power BI, providing business-oriented insights based on the prediction results. The dashboard uses the Actual versus Prediction table as a CSV file data source.

## Tech Stack

The Sales Forecasting Application is built using the following technologies:

- Angular: For the frontend user interface and data uploading.
- Flask: For the backend API to handle data extraction and prediction.
- Python: For implementing the Machine Learning model and data preprocessing.
- Power BI: For creating an informative and visually appealing business-oriented dashboard.
- HTML/CSS: For designing a user-friendly and visually attractive frontend interface.

## Specifications

The Sales Forecasting Application boasts the following key features:

- User-friendly data upload: Users can upload their sales dataset in CSV format through the Angular App.
- Flexibility: Users can choose target features, select relevant features, and set the time period for future forecasts.
- Data cleansing: The application ensures data cleanliness by handling incorrect, corrupted, and incomplete data.
- Preprocessing and validation: Raw data is preprocessed and validated through normalization, standardization, and other exploratory data analysis steps.
- Accurate predictions: The ML model accurately predicts the target feature for the specified time period.
- Visual representation: The application presents the prediction results through interactive graphs within the Angular App.
- Business-oriented dashboard: An informative Power BI dashboard is created, using the Actual versus Prediction table as a data source, to provide business insights.

