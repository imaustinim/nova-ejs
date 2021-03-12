# NOVA

## Introduction
Nova is a platform where artists connect raise equity and capital. With the rise of alternative asset classes, Nova allows investors to help change individual lives with the potential of future returns. Unlike platforms such as: gofundme, kickstarter, and indigogo, Nova provides an opportunity for investors to reap what they sow.

## Technologies Used
- Javascript, Node JS, Mongoose, MongoDB
- EJS, HTML
- CSS

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

## ERD
![ERD](public/images/ERD.png)

## Flow Chart
![Flow Chart](public/images/flowchart.png)

## Home Page
![Home Page](public/images/homepage.png)

## Projects
![Projects Page](public/images/projectpage.png)

## User
![User Page](public/images/userpage.png)

## Goals
1. Create and manage database and routers effectively.
2. Allow users to create projects.
3. Allow users to leave comments on other comments.
4. Use google login (OAuth).
5. Create dynamic partial ejs pages. 
-----------------------------------------------------
6. Creating a user to user chatbox
7. Build dynamic algorithm for 'trending' projects.
8. Allow users to embed social media.
