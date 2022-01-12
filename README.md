# cs180project-021-sea-cream-jasmine


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



