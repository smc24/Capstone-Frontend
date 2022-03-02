# Project #3 Frontend - Keep It Real

# Objective

Keep It Real is a free mental health platform that targets the black community and low income families. 


# Technologies Used
* User stories - Microsoft Word
* Wireframe - Miro
* ERD - Lucidchart
* Spring Boot - IntelliJ IDEA 2021.3.1
* Frontend - Visual Studio Code

# Getting Started

## Create user stories

![Screenshot (3)](https://user-images.githubusercontent.com/95877715/156383275-79410969-94a2-4655-9fb7-5fde15b214eb.png)

## Create a wireframe 

![Screenshot (4)](https://user-images.githubusercontent.com/95877715/156384171-69da55c2-f14b-4aeb-9ad9-1314a5c8ab47.png)
![Screenshot (5)](https://user-images.githubusercontent.com/95877715/156384184-7e215c4a-35f3-4c73-82ae-bd2b4d3dec18.png)
![Screenshot (6)](https://user-images.githubusercontent.com/95877715/156384188-4188eed6-36bb-4668-a919-80eabdc7705e.png)


## ERD
![Keep It Real](https://user-images.githubusercontent.com/95877715/156389318-0bcdd95a-0416-462f-b88d-52096baddf38.png)

# Process and Struggles
Starting with the backend, I started a new Spring Boot project in a separate repository. I implemented full CRUD for the ```therapist``` and ```posts``` models. As for the ```comment``` model, I only implemented ```getAll```, ```post```, and ```delete```. I ran into a hurdle when it came to the relationship of the  ```therapist``` and ```comment``` models. I created separate services and controllers in order to keep things organized, which ended up confusing me. To prevent myself from going crazy, I decided to create the ```comment``` apis in the ```PostsController```. 

Moving on to the frontend, I created a new angular project in a separate repository.
```
ng new keepItReal
```
I decided to create a one page application. New ideas started flowing as I began working on my first component. This of course added more work to my sprints but I was open to the challenge. My first hurdle was keeping certain components on certain parts of the page. A simple fix of adding the component to the specified section of the ```nav-bar component``` solved my hour-long struggle. 

I was then presented with my next challenge of how I was going to connect my backend to my frontend.

![jackie-chan-meme](https://user-images.githubusercontent.com/95877715/156406333-27212c89-8f8d-4fd0-a044-94dd1eb70b83.gif)

Since the applicaton is for the use of patients, I decided to hardcode the therapist information and focus on using my backend for the posts page. I was succesful making a get request but not a post request. 

## Final Product
### Homepage
![Screenshot (7)](https://user-images.githubusercontent.com/95877715/156412071-83470923-f4ed-4c6a-b02c-bde10cc0d2eb.png)
### Therapist's Page
![Screenshot (8)](https://user-images.githubusercontent.com/95877715/156412098-0d05c771-8fdd-4122-9fac-5b7917f7bbaf.png)
### Posts' Page
![Screenshot (9)](https://user-images.githubusercontent.com/95877715/156412117-1fef2411-1c76-45e5-99e7-d7e4e2e7b1f6.png)

## Resources
https://bbbootstrap.com/snippets/bootstrap-comment-section-navbar-26188744
https://freefrontend.com/css-profile-cards/

https://codepen.io/FrankieDoodie/pen/NOJpVX
