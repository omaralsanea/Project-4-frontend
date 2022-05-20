# IntelliHench - SEI Project 4

# Overview
'intelliHench' is a fitness web-app that provides numerous features to help a user achieve their goals. This is a full-stack project which represents my first experience utilising Python and Django on the backend. I chose to undertake our final project individually in order to learn as much as possible over the process. We were given two weeks to build and deliver this project, however, it's worth noting that I began to feel unwell early on and found that I was covid positive and I ended up taking a few days off during this two week period. 

<img width="921" alt="Screenshot 2022-05-18 at 01 34 10" src="https://user-images.githubusercontent.com/98101603/168933835-e1377cde-02f5-4b30-9e0f-cbc5e126cbf3.png">


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
- PyJWT
- Python

### Front-End
- Axios
- Bulma
- React
- React Router Dom
- Sass

### Development Tools
- Excalidraw (planning)
- Git
- GitHub
- Heroku (deployment)
- Postman
- QuickDBD (ERD)
- VS Code
- Yarn


## 1) Planning
Due to my passion within the area, I arrived fairly quickly at the idea of creating a fitness web-app. It also made a lot of sense as it was a topic that would perfectly demonstrate relationships between the data (between the muscle groups and the exercises). One to many and many to many relationships can be seen - for example, a single compound movement like a deadlift can affect many different muscle groups but those same muscle groups can be exercised by many different exercises.  

I wanted to create an app that anyone could use, whether it was a seasoned lifter looking for new ways to target muscle groups or correct muscle imbalances or someone who had never set foot in a gym before who just wanted more information on how to perform basic exercises. 'intelliHench' could also be used by those with a physical disability or going through physiotherapy for an injury and who are seeking alternative exercises that they can perform or that won't aggravate the injury.

'intelliHench' is designed to give aspiring lifters the knowledge they need to perform targeted training.
So whatever your level or experience, get started today!
Not only did I want this to be an app that would be genuinely useful for people interested in fitness and weightlifting I also wanted to deliver all the features that I would want from such an app, namely:
- Exercises - with full descriptions/instructions and gifs demonstrating the movement.
- A list of all muscles that are targeted in that particular exercise. 
- Community - a hub for both forum-type threads and admin-posted articles for insight.
- Profile - a page to keep track of your progress, in order to boost motivation.
IntelliHench being completely responsive was also a very high priority so that the user can benefit from the app wherever they are.

### ERD (Entity Relationship Diagram, QuickDBD)

<img width="1341" alt="Screenshot 2022-05-18 at 01 09 43" src="https://user-images.githubusercontent.com/98101603/168931902-7038ef4f-54db-406b-bf41-cec2b84d6a39.png">


### Wireframe (Excalidraw)

<img width="1258" alt="Screenshot 2022-05-12 at 11 08 06" src="https://user-images.githubusercontent.com/98101603/168931995-b4003264-553a-4f7b-a93f-f571fe3e212c.png">


## 2) Back-End
In my first experience using Python and Django as a backend, as well as a SQL database (in the form of PostgreSQL), I created 2 main models (apps in Django terminology). These were for the exercises and muscles. I utilised a custom user model and authentication (using JWT) rather than solely relying on Django’s pre-built version. A total of 19 RESTful API endpoints were created, which were all tested using Postman during the backend build.

<img width="725" alt="Screenshot 2022-05-17 at 21 22 33" src="https://user-images.githubusercontent.com/98101603/169497771-f7b89682-eea2-405e-8e96-a697be6ea101.png">

<img width="725" alt="Screenshot 2022-05-20 at 10 20 34" src="https://user-images.githubusercontent.com/98101603/169497948-86b0676b-ec43-45d6-a64b-f1a70a5e4e3e.png">

<img width="725" alt="Screenshot 2022-05-20 at 10 21 01" src="https://user-images.githubusercontent.com/98101603/169497984-75a784ee-30ea-4c1b-b1de-52b6961cb24b.png">




## 3) Front-End
React was used for the creation of the front-end, including the following hooks: useState, useEffect, useRef and useContext. Axios was used for connecting the front-end requests to the back-end, and react-router-dom for the front-end routing. Below is a gif that shows navigation from the Home Page to the muscle Page. When a compound exercise like the Deadlift is clicked it shows the exercise description, the gif of the movement and also each of the different muscles that are targeted in the movement. From here you can pick a particular muscle such as the calf which will take you to the Calf page where all the exercises (in contrast to the Deadlift) are isolation movements:

![ezgif-3-9571140a2a](https://user-images.githubusercontent.com/98101603/168935959-f6a1b124-26dc-42bf-9fff-c8861ac606f0.gif)



## 4) Styling
I decided to use conventional CSS for the majority of the styling but also employed Bulma too. 
Due to the nature of the app I wanted a very deliberate and strong design and colour scheme. I eventually decided on heavy text with a black, grey and yellow colour scheme. I decided to create a logo (see screenshot below) and I feel this captures the style of 'intelliHench'. 

<img width="317" alt="Screenshot 2022-04-25 at 15 06 16" src="https://user-images.githubusercontent.com/98101603/168933131-eadbc00d-9192-468c-b218-a9625d501176.png">


# IntelliHench - Screenshot Walkthrough

#### Home Page

<img width="600" alt="Screenshot 2022-05-18 at 01 34 10" src="https://user-images.githubusercontent.com/98101603/169022993-ddd954a1-cc40-4fcc-aec2-8da21de63af3.png">

### All Exercises Page 

![ezgif-3-22d9856e33](https://user-images.githubusercontent.com/98101603/169496445-8f7a0411-4bd9-480d-88b2-1ff87d00aa34.gif)


### Register Page

<img width="600" alt="Screenshot 2022-05-17 at 19 02 17" src="https://user-images.githubusercontent.com/98101603/169023186-f707cba6-3750-4cca-9f11-10dc9f55dfa7.png">

### Login Page

<img width="600" alt="Screenshot 2022-05-17 at 19 02 27" src="https://user-images.githubusercontent.com/98101603/169023253-a0d60e59-1e7b-48a5-821d-7e23a25a7722.png">


### About Page

<img width="600" alt="Screenshot 2022-05-17 at 19 03 26" src="https://user-images.githubusercontent.com/98101603/169023096-e3ce047f-bcc0-45c9-a142-bdc88b7610d4.png">


# Wins & Blockers
### **Wins**
- Complete application that delivers many features.
- Learning and utilising numerous Hooks.

### **Blockers**
- Learning the idiosyncrasies of SQL databases and Django initially took some time to embed, whilst some of the Django features such as the admin portal were particularly time saving.

# Bugs

-Registration and Login are currently not working.

# Future Improvements
- The ability to leave a comment on an exercise.
- A featured content component within the home page (e.g. the highest rated exercises).
- The ability to save exercises in a favourite list. 
- Profile picture/avatar for each user.

# Key Takeaways
Building 'intelliHench' was a great way to build my knowledge of Python, as well as of relational databases (SQL). Creating another React front-end further deepened my ability in this area, especially having employed useRef and useContext for the first time. Whilst Django felt a little limiting at times compared to MongoDB/Mongoose, its ability to create a functioning back-end so quickly and efficiently means that I will continue to explore it.
