# NOVA 
### /ˈnōvə/ - borrowed from New Latin, "newly visible star" 

<br>

## Introduction
Nova is a platform where artists can raise equity for future projects and also connect with other professionals. With the rise of alternative asset classes, Nova allows fans and investors to help change lives with the potential of future returns. Unlike platforms such as gofundme, kickstarter, and indigogo, Nova provides an opportunity for users to reap what they sow.

<br>

## Technologies Used
- Javascript, Node JS, Mongoose, MongoDB
- EJS, HTML
- CSS, Bootstrap

<br>

## Pseudo Code & System Design

#### All Pages
- Header
    - Home
    - Artists
    - Projects
    - Search
    - Profile

- Footer
    - Disclaimer
    - Copyright
    - FAQ
    - Contact
    - Address

### HomePage
- Body
    - Show youtube like components of:
        - trending projects
        - trending artists
        - recommended for you
        - following
    - Show projects cards as index -> Artists page / details -> Invest
    - Show stats -> Stats page with artists' successes

### Artist's Page
- Body
    - Cards of index displaying the following: (Click to go into seperate page with longer bio and details)
        - Introduction 
        - Current Project 
        - Amount Raised/Need
        - Other details include:
            - Bio
            - Photo, gif, or video
            - link to spotify, instagram, fb, soundcloud, tiktok, etc.
            - Stats
            
--- 

<br>

## ERD
![ERD](public/images/ERD.png)

<br>

--- 

## Flow Chart
![Flow Chart](public/images/flowchart.png)

<br>

--- 

## Home Page
![Home Page](public/images/homepage.png)

<br>

--- 

## Projects
![Projects Page](public/images/projectpage.png)

<br>

--- 

## User
![User Page](public/images/userpage.png)

<br>

---

## Goals
1. Create and manage database and routers effectively. *(10 hours)* 
2. Allow users to create projects. *(15 hours)*
3. Allow users to leave comments on other comments. *(5 hours)* 
4. Use google login (OAuth). *(5 hours)*
5. Create dynamic partial ejs pages. *(10 hours)*
### Total: 45 hours
--- 
## Additional Features
6. Create order function using strip/paypal. *(10 hours)*
7. Creating a user to user chatbox. *(5 hours)*
8. Build dynamic algorithm for 'trending' projects. *(5 hours)*
9. Allow users to embed social media. *(10 hours)*
10. Add tags to projects and users. *(10 hours)*
11. Add dynamic search function. *(20 hours)*
### Total: 60 hours

--- 

## FAQ

***How accurate are the times to complete work?***
<br>
Not accurate at all. Honestly I have no idea what I'm doing...

---

***Is there a different collection for users that upload and investors?***
<br>
Nope, similar to YouTube, you can upload videos while watching and leaving comments on others.

# Reflection
## What I'm proud of
1. I'm glad I was able to put a lot of effort in and reaffirm my drive for software engineering.
2. I was able to try a lot of different things out and learn a lot. Specifically heroku and bootstrap.
3. I think a project like this is quite viable.

## Lessons Learned and what to work on.
1. I need to know more about databases and authentication.
2. Focus on one thing at a time rather than just bouncing around.
3. Front-end looks quite amateur.

Overall, I'm pretty proud of my effort, not so much my execution but I don't think that matters at this point. 
I know that if I continue put in effort into this project, it can be a legitimate platform, which I plan to do.

## Still to fix
- Fix user.details and project.details -> no need for a details section
- Fix login functions
- Add projects/:id/edit page
- Connect to cloud database to store images
- Create function to parse youtube links to show embed properly
- Create links on users/index page
- Add function for edit photo and to properly place/edit it
- Add sidenav (left)
- Add function to save and display proper social media links
- Add function to save
- Add search function (fuzzy search)

- Add payment function
