# PRODIGY_WD_05
Weather App
This is a simple web-based weather application that allows users to fetch current weather data based on their location or a user-inputted location. The app uses the OpenWeatherMap API to retrieve real-time weather information.

Features
Fetch weather data based on user-inputted city names.
Automatically detect the user's current location and fetch the weather data.
Display weather conditions, temperature, humidity, and wind speed.
Responsive and user-friendly interface.
Technologies Used
HTML: Structure of the webpage.
CSS: Styling for the webpage, including gradients and responsive design.
JavaScript: Handles API requests, processes user input, and updates the UI dynamically.
OpenWeatherMap API: Provides the weather data.
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/MarellaDeepika/weather-app.git
2. Navigate to the Project Directory
bash
Copy code
cd weather-app
3. Get an API Key
Sign up for an account on OpenWeatherMap.
Generate an API key from your account dashboard.
4. Insert Your API Key
Open the script.js file located in the project directory.
Replace the placeholder 'YOUR_API_KEY' with your actual API key from OpenWeatherMap.
javascript
Copy code
const apiKey = 'your_actual_api_key_here';
// Insert your API key here
6. Run the App
Open index.html in your web browser to start using the weather app.
Usage
Input Location: Enter a city name in the input field and click "Get Weather" to fetch the weather data for that location.
Use Current Location: Leave the input field blank and click "Get Weather" to use your current location (requires browser permission).
Project Structure
plaintext
Copy code
weather-app/

index.html         # The main HTML file
styles.css         # CSS file for styling the app
script.js          # JavaScript file for handling logic and API calls
README.md          # This readme file
Screenshot of the website:
screenshot :![Screenshot 2024-10-23 001427](https://github.com/user-attachments/assets/e7bf373d-afe7-481c-ad2f-41770cc8812c)



*Link Of The Project
link: https://github.com/MarellaDeepika/PRODIGY_WD_05

Acknowledgments
OpenWeatherMap for the weather API.
Inspiration and guidance from online coding communities.
