# cs180project-021-sea-cream-jasmine
- **Please grade based on React Website**
- **Regression Tests and Continuous Integration NOT Included**

## Table of Contents
- [Home Page Features](#home-page-features)
- [Modify Page Features](#modify-page-features)
- [Analytics Page Features](#analytics-page-features)
- [Languages](#languages)
- [Tools](#tools)
- [Libraries/Dependencies](#libraries/dependencies)
- [Dataset and Disclaimer](#dataset-and-disclaimer)
- [Project Setup](#project-setup)
  - [Django Setup](#django-setup)
  - [React Setup](#react-setup)
  - [Flutter Setup](#flutter-setup)
- [High-Level Guide of Source Code for Django and React](#high-level-guide)

<a name="home-page-features"></a>
# Home Page Features
1. Anime search
2. Genre search
3. Studio search
4. Animes with specified scores search

<a name="modify-page-features"></a>
# Modify Page Features
1. **Edit** anime to database
   * Simply type the name of the anime that you want to be modified and the information that you want to change, then press the add button
2. **Delete** anime from database
   * Simply type the name of the anime that you want to be deleted, then press the delete button
3. **Add** anime to database
   * Simply type the name of the anime that you want to add and any other information, then press the add button
4. **Backup** changes
   * Must press backup button and refresh page to see any changes made
5. **Import** anime.json to local data structure

<a name="analytics-page-features"></a>
# Analytics Page Features
**Some analytics may return an empty table if that search does not have any data. This is not a bug. Select a different search if this is the case.**
1. Find *top 100 highest scoring anime from a specified genre* (Implements incremental analytics)
2. Find *top 100 highest scoring anime from a specified type* (Implements incremental analytics)
3. Find *top 100 highest scoring anime from a studio*
4. Find *top 100 highest scoring anime from a specified type*
5. Display *average completion time in seconds for top 100 anime from all genres*
6. Find *top 100 highest completed rate anime from a genre*
7. Find *top 100 highest completed rate anime from a type*


<a name="languages"></a>
## Languages
* Python, Javascript, and CSS


<a name="tools"></a>
## Frameworks/Tools
### Frameworks
* [React.JS](https://reactjs.org/) 
* [Flutter](https://flutter.dev/?gclid=Cj0KCQiA-qGNBhD3ARIsAO_o7ynUZ1RAxE723ccQpSxJUXgAWzz5J1LKrQuGyWzkDtUOG7dCrORgMfgaAvKKEALw_wcB&gclsrc=aw.ds) 
* [Django](https://www.django-rest-framework.org/) 
### Tools:  
* Visual Studio Code
* Postman


<a name="libraries/dependencies"></a>
## Libraries/Dependencies
### Libraries
  * [Material UI](https://mui.com/) 
  * [Recharts](https://recharts.org/en-US/)
  * [Axios](https://www.axios.com/)

1. "@emotion/react": "^11.5.0"
2. "@emotion/styled": "^11.3.0"
3. "@material-ui/core": "^4.11.4"
4. "@material-ui/icons": "^4.11.2"
5. "@mui/icons-material": "^5.0.4"
6. "@mui/material": "^5.0.4"
7. "@testing-library/jest-dom": "^5.14.1"
8. "@testing-library/react": "^11.2.7"
9. "@testing-library/user-event": "^12.8.3"
10. "@types/react": "^17.0.0"
11. "@types/react-dom": "^17.0.0"
12. "axios": "^0.22.0"
13. "react": "^17.0.2"
14. "react-dom": "^17.0.2"
15. "react-router-dom": "^5.3.0"
16. "react-scripts": "^4.0.3"
17. "recharts": "^2.1.6"
18. "typescript": "^4.4.4"
19. "web-vitals": "^1.1.2"

<a name="dataset-and-disclaimer"></a>
## Dataset and Disclaimer
1. We have modifed the anime.csv and anime.json to delete the "adult" anime. Please clone repo for the correct file.
2. The original anime.csv can be downloaded from [kaggle](https://www.kaggle.com/hernan4444/anime-recommendation-database-2020?select=animelist.csv)
3. This dataset contains information about 17.562 anime and the preference from 325.772 different users. In particular, this dataset contain:
   * The anime list per user. Include dropped, complete, plan to watch, currently watching and on hold.
   * Ratings given by users to the animes that they has watched completely.
   * Information about the anime like genre, stats, studio, etc.

<a name="project-setup"></a>
# Project Setup
1. Clone this repo 
    ```sh
     git clone https://github.com/ucr-cs180-fall21/cs180project-021-sea-cream-jasmine.git
    ``` 

<a name="django-setup"></a>
## Django Setup
1. cd into the project directory
```sh 
cd cs180project-021-sea-cream-jasmine/ 
``` 
2. create a virtual environment
```sh
python -m venv env
```
3a. For Linux, activate the virtual environment<br />
```sh
source env/bin/activate
```
3b. For Linux, activate the virtual environment<br />
```sh
admin\env\Scripts\activate.bat
```
4. cd into the admin folder
```sh
cd admin/
```
5. install all the dependencies 
```sh
pip3 install -r requirements.txt
```
6. run the server
```sh
python manage.py runserver
```



<a name="react-setup"></a>
## React Setup (React must be running on another port)
1. cd into the React folder on a separate terminal
```sh 
cd react-app/ 
``` 
2. install required dependencies. Your terminal should tell you which dependencies you're missing. Simply install the missing ones.
```sh
npm install
```
3. activate the react server
```sh
npm start
```


<a name="flutter-setup"></a>
## Flutter Setup (Install [Flutter](https://docs.flutter.dev/get-started/install) first) 

1. cd into the Flutter folder on a separate terminal
```sh 
cd flutterapp/
``` 
2. activate the Flutter server
```sh
flutter run -d chrome
```
<a name="high-level-guide"></a>
# High-Level Guide of Source Code for Django and React
 *  `admin/` - folder for Django (backend) files
    * `admin/` - folder for admin files
    * `app/` - contains backend files for app
      * `database/` - contains anime.csv file
        * `anime.csv` - modified anime.csv file with no "adult" anime
      * `scj_filter.py` - file containing functions for analytics and incremental analytics
         * `+handle_change(action,anime_obj)` (incremental analytics) - if there are any changes like edit, insert, delete, this function will just modify one entry in the map
         * `+binary_search(arr, score)` (incremental analytics) - binary search function to see where to insert an entry into our sorted list in our local map 
         * `+update_prev_data_map_with_list(action,anime_obj,map,type)` (incremental analytics) - store/get previously sorted arrays into our local map and update accordingly
         * `+update_prev_data_map(action,anime_obj,map,type)` (incremental analytics) - store/get previously sorted arrays into our local map and update accordingly
         * `+sort_by_score_genre(target_genre, n)` - function for analytic 1 that sorts the top n highest scoring anime from specified genre
         * `+sort_by_score_type(target_type, n)` - function for analytic 2 that sorts the top n highest scoring anime from specified type
         * `+top_n_highest_average_anime_by_studio(studio,n)` - function for analytic 3 that sorts the top n highest scoring anime from specified studio
         * `+top_n_highest_average_anime_by_rating(rating,n)` - function for analytic 4 that sorts the top n highest scoring anime from specified rating
         * `+average_duration_by_top(target_genre, n)` - function for analytic 5 that generates a bar graph showing the average durations for top n anime from each genre
         * `+_sort_by_completion_rate(target_genre,n)` - function for analytic 6 and 7 that sorts the top n animes with the highest completion rate from specified genre or type
      * `scj_parcer.py` - file containing functions to parce csv to json, functions to filter searches, and functions to add, delete, modify, import, and backup anime in database
         * functions to parse csv to json
           * `+with open(path, 'r', encoding="UTF-8") as file` - uses UTF-8 to read the Japanese characters, then parses the data in file
           * `+generateJson()` - generates a json file from the results of the function above
           * `+get_list()` - gets the anime dictionary list
         * functions to filter searches
           * `+search_by_name(target_name)` - function to filter search by name
           * `+search_by_score(target_score)` - function to filter search by score
           * `+search_by_producers(target_producer)` - function to filter search by producer/studio
           * `+search_by_genres(target_genre)` - function to filter search by genre
           * `+search_by_type(target_type)` - function to filter search by type
         * functions to add, delete, modify, import, and backup anime in database
           * `+insert(anime_name, score, ranking, episodes, type, popularity, genre, studio)` - function for adding anime to the database
           * `+delete(target_name)` - function for adding anime to the database
           * `+update(anime_name, score, ranking, episodes, type, popularity, genre, studio)` - function for adding anime to the database
           * `+import_data()` - function for importing anime.json to local data structure
           * `+backup_data()` - function for backing up server-side change to local data
      * `urls.py` - file containing the url paths for the website

 * `react-app/` - folder for react frontend files
   * `node_modules/` - folder for installed npm packages
   * `public/` - folder for react icons and logos
   * `src/` - folder for pages and components files
      * `Components/` - folder for component files
        *  `BarGraph.css` - css file to stylize the bar graph
        *  `BarGraph.js` - js file to stylize the bar graph and connect to frontend code
        *  `GenreBar.css` - css file to stylize the genre search bar
        *  `GenreBar.js` - js file to stylize the genre search bar and connect to frontend code
        *  `ProducerBar.css` - css file to stylize the producer search bar
        *  `ProducerBar.js` - js file to stylize the producer search bar and connect to frontend code
        *  `ScoreBar.css` - css file to stylize the score bar
        *  `ScoreBar.js` - js file to stylize the score bar and connect to frontend code
        *  `SearchBar.css` - css file to stylize the anime name bar
        *  `SearchBar.js` - js file to stylize the anime bar and connect to frontend code
      * `images/` - folder for images
      * `Pages/` - folder for pages
        *  `Analytics.css` - css file to stylize the Analytics page
        *  `Analytics.js` - js file to stylize the Analytics page and connect to frontend code
        *  `AnimeChange.css` - css file to stylize the Modify page
        *  `AnimeChange.js` - js file to stylize the Modify page and connect to frontend code
        *  `FeatureBar.css` - css file to stylize the general search bar
        *  `FeatureBar.js` - js file to stylize the general search and connect to frontend code
        *  `Home.css` - css file to stylize the Home page
        *  `Home.js` - js file to stylize the Home page and connect to frontend code
      * `anime.json` - json file that contains the parsed anime.csv
      * `saved_anime.json` - json file that contains the backed-up changes made to database
      * `App.css` - css file to stlyize the overall frontend layout
      * `App.js` - js file to stlyize the overall frontend layout and connect to frontend code
      * `genre.js` - js file containing array of genres
      * `index.css` - css file to stlyize the overall frontend layout
      * `index.js` - json file that contains the backed-up changes made to database

