# Sway - SEI Project 4

# Overview
Sway is a mindfulness web-app that provides numerous features to help a user achieve their goals. This is a full-stack project which represents my first experience utilising Python and Django on the backend. I chose to undertake our final project individually in order to learn as much as possible over the process. The whole web application was built and delivered over a one week period.

## Code Installation:
Clone or download the repository and run the following within the terminal:
- Setup backend dependencies: pipenv
- Enter shell for project: pipenv shell
- Make migrations: python3 manage.py makemigrations
- Migrate: python3 manage.py migrate
- Load the seed data for each Django app (articles, comments, jwt_auth, meditations, notes) by replacing ‘app’ with the app name: python3 manage.py loaddata app/seeds.json
- NB at this stage you can run python3 manage.py runserver and view the web-app in its static form.
- Initialise the backend server: python3 manage.py runserver
- Move into front-end directory: cd front-end
- Install frontend dependencies: yarn
- Start the frontend server: yarn start



# The Brief

- Build a full stack application with a React front-end and a Django back-end.
- Use a Python-Django fully functional RESTful API to serve your data from a Postgres database.
- Create a complete web-app, using multiple (one-to-many and many-to-many) relationships and all CRUD routes.
- The finished product should be publicly accessible and deployed.

# Technologies Used

### Back-End
- Django
- Django-heroku
- Django REST Framework
- Psycopg2
- PyJWT
- Python

### Front-End
- Axios
- Bootstrap
- React
- React Router Dom
- Sass

### Development Tools
- Asana (project management)
- Cloudinary (media hosting)
- Git
- GitHub
- Heroku (deployment)
- Miro (planning)
- Postman
- QuickDBD (ERD)
- VS Code
- Yarn

# Approach

## 1) Planning
Due to my passion within the area, I arrived fairly quickly at the idea of creating a fitness web-app. I wanted to deliver all the features that I would want from such an app, namely:
- Meditations - both guided and using a self-timer.
- Notes - so that the user can scribble down any illuminating thoughts.
- Community - a hub for both forum-type threads and admin-posted articles for insight.
- Profile - a page to keep track of your progress, in order to boost motivation.
Sway being completely responsive was also a very high priority so that the user can benefit from the app wherever they are.

### ERD (Entity Relationship Diagram, QuickDBD)
<img width="858" alt="Screenshot 2021-12-28 at 12 08 03" src="https://user-images.githubusercontent.com/89992629/147564777-506863c0-3392-491b-a4ea-4b61f7b1be25.png">

### Feature Wishlist (Miro)

### Wireframe (Miro)

I used Asana to clearly layout what needed to be achieved within the strict time frame we had, in order that each feature received due attention.

## 2) Back-End
In my first experience using Python and Django as a backend, as well as a SQL database (in the form of PostgreSQL), I created 5 models (apps in Django terminology). These were for the articles, comments, users, meditations and notes. I utilised a custom user model and authentication (using JWT) rather than solely relying on Django’s pre-built version. A total of 19 RESTful API endpoints were created, which were all tested using Postman during the backend build.

#### Code Snippet - Notes views

## 3) Front-End
React was used for the creation of the front-end, including the following hooks: useState, useEffect, useRef and useContext. Axios was used for connecting the front-end requests to the back-end, and react-router-dom for the front-end routing. I decided to not use any package for creating the audio player for the guided meditations in order to challenge myself. The player utilises react hooks only and is fully customisable. Cloudinary was used to store the audio files for the app. Upon completing a meditation, the session is saved to the user’s profile. Creating the meditation timer was also extremely rewarding as it was my first experience with React’s useContext hook, which allowed the user to configure the settings for their meditation. Below is a snippet from the timer components:

#### Code Snippet - Timer component

The notes page was also a rewarding challenge, especially due to being able to read, delete and create a new note all from the same url.

#### Code Snippet - Notes List component


## 4) Styling
As mentioned, the app being fully responsive was crucial from the outset. Bootstrap was utilised in order to neatly create a responsive navbar that became a hamburger menu on appropriate screen sizes. Through using responsive styling methods, barely any additional code was needed to adapt the web-app to mobile. The entire website and menus adapt to whether the user is logged in or not and points them towards doing so. Sass was used for the styling and I decided to style each page to an acceptable standard during the front-end phase, before using a whole day at the end of the project to add the finishing touches.

# IntelliHench - Screenshot Walkthrough

#### Home Page


# Wins & Blockers
### **Wins**
- Complete application that delivers many features across all web devices. 
- Learning and utilising numerous Hooks and building a fully customisable audio player.

### **Blockers**
- Learning the idiosyncrasies of SQL databases and Django initially took some time to embed, whilst some of the Django features such as the admin portal were particularly time saving.

# Bugs
- The favouriting/unfavouriting of a meditation does not always switch the icon as it should.
- When registering, the user is not given a specific error message explaining that the given password is not strong enough.

# Future Improvements
- The ability to edit a note.
- A featured content component within the home page (e.g. the most favourited meditations, most commented on threads).
- Meditation history within the user profile page.
- Profile picture/avatar for each user.

# Key Takeaways
Building Sway was a great way to build my knowledge of Python, as well as of relational databases (SQL). Creating another React front-end further deepened my ability in this area, especially having employed useRef and useContext for the first time. Whilst Django felt a little limiting at times compared to MongoDB/Mongoose, its ability to create a functioning back-end so quickly and efficiently means that I will continue to delve deeper into it.
