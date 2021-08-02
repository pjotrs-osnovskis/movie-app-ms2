# Movies Info App

# Idea/Description
I was thinking for quite some time, what to do as my Second Milestone Project for Code Institute. Did a little bit of practice following up some videos and came up with this idea to create a movie app with pulling posters, description, titles, score, trailers and so on from API up to "rent or buy a movie" or "find a cinema". This is just a beginning of full potential if this web application, but my mentor said it is enough for MS2 already. So here we are.

![Am I responsive Image](assets/img/amiresp.png)

# Potential Website users

This web application, potentially a service, was created for people to find their favorite movies, see what is on at the moment and familiarize them selves with movie description, score and find out where and how to watch their favorite movie.

# Owners Goals 

Service would be owned by the owner and used for informative and entertainment purposes for their clients. 

# User Stories
1. A new visitor, I want them to:
    * to understand what business does;
    * to navigate easily and intuitively across the web application;
    * to answer their questions before they have any.
2. A potential/interested client should:
    * find easily what he/she is looking for by using "Search" option;
    * understand what service they can use and how;
    * understand a contact form in case they have questions;
3. A returning client can quickly find:
    * how to navigate to required service and use "Search" option intuitively and easy;
    * appropriate movie or information they are interested in;
    * how to contact management in case of bugs, issues or other questions.

# 5 UX Planes

## Strategy Plane

Web application is created with a streaming service idea behind it, providing movies top at the beginning and search function for potential customers to find their favorite movies.
  
  * Main aim is to provide clear understanding of services and how to contact management team for any assistance needed.

Please see a table below to see what website should contain for users value. There were some ideas are not implemented due to lack of skill, time and requirement frames of this project.

| Opportunity   | Importance    | Viability/Feasibility |
| ------------- |:-------------:| :-----:|
| Services offered | 5 | 5 |
| Search | 5 | 5 |
| Rating | 3 | 2 |
| Feedback | 3 | 1 |
| Increase Social Media Activity | 3 | 1 |
| Where to watch [^1] | 4 | 3 |
| Buy/Rent a movie [^2] | 4 | 4 |
| Movies trailers [^3] | 3 | 3 |
| Personalized/Recommended [^4] | 2 | 1 |

> Ideas marked with a footnote are some of the potential ones that could be implemented if there would be more time for the project.

[^1]: I was thinking to figure a cinemas API to provide information where to watch a movie using customers location.

[^2]: If movie is out in digital format - could link up to an existing service or buy rights (as I would imagine) to sell or rent digital copies of older movies.

[^3]: This is easy to implement, but API I used does not have any trailers or videos available, therefore I used other poster in modal instead. Did not want to waste time on looking for other API and mess things around. Will avoid this next time with better project planning.

[^4]: A big job this one, as I was thinking of login option and record people's preferences and show them personalized or recommended movies for them using movie genres. I did not implement Genres in modal, as this project is to show my skills, and it is clearly seen that I know how to pull objects out of API. 

> Not sure why footnotes are not working correctly, as it did work with first one and then after adding second it came out like this. Here is [resource](https://www.markdownguide.org/cheat-sheet/) I used.

## Scope Plane

What features this project should include:
  * Landing page with top 20 of trending movies (page 1 from API), search option for older movies.
  * Modal with movie information.
  * Contact form to report any issues, ask questions.
  * Lots of other potential, but as mentioned above, was not included due to variety of reasons.

## Structure Plane

At this stage web application contains 2 pages and a modal (as mentor advised - this is enough for now). Every page has navigation, footer and main section relative to each page.

**Home:** Home page shows top 20 of latest movies that came out recently, pulling information from API, has search to look for desired movies. 

**Modal:** At this stage modal shows second poster (substitute to trailer, as API does not supply any trailers), movie description and release date (transformed to better readable format using JavaScript functionality.)

**Contact US:** Basic contact form made with Bootstrap 5 and EmailJS.

> As I wanted to implement a pop-up on form submission in MS1 but couldn't due to lack of knowledge - managed to do it here, comes up on success or error.

## Skeleton Plane

Web application created for all size devices, responsive design was achieved by using Bootstrap 5, so there was almost no need to use media queries in CSS.

Wireframes:

| Page | Desktop | Mobile |
| :--- | :--: | :--: |
| Home | [View](assets/img/wireframe-1.png) | [View](assets/img/wireframe-3.png) |
| Home - Modal | [View](assets/img/wireframe-1-1.png) | [View](assets/img/wireframe-3-1.png) |
| Contact us | [View](assets/img/wireframe-2.png) | [View](assets/img/wireframe-4.png) |
| Contact us - Modal | [View](assets/img/wireframe-2-1.png) | [View](assets/img/wireframe-4-1.png) |


## Surface Plane

### Background

Plain white background, for better contrast.

### Colors

I used [ColorSpace](https://mycolor.space/) to create a color palette. 

![color palette](assets/img/palette.png)

### Fonts 

Used [Google Fonts](https://fonts.google.com/) for this web application. 

**Lobster** - for logo.

**Lato** - for text.

### Navigation and Form

Used [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for convenience and responsive design.

## Features

### Implemented Features
  * Web application contains 2 pages and each page has a modal. Home has modal with movie description and Contact Us page has 2 modals for successful submission and error.
  * Created by using HTML, CSS and Javascript, as well ad Bootstrap 5 and jQuery 3.6 frameworks, as well as [EmailJS](https://www.emailjs.com/) for contact form to work and [TMDB](https://www.themoviedb.org/) for movie API. Added Google Fonts and FontAwesome for projects fonts and icons.
  * Application is taking Poster image, Title, Score, Description, Release Date and Second poster from API.

### Potential Features to Add
  * Trailers for movie preview modal.
  * Where to watch based on movie theaters around customers location.
  * If movie is out and not in theater - Buy/Rent or Watch Now option.
  * Login option, for customers convenience as well as track of bought/rented movies, generating recommendations based on previous movie experience.

## Technologies Used

|Technology|Reason|
| :-- | :-- |
| [HTML](https://www.w3schools.com/html/) | Markup |
| [CSS](https://www.w3schools.com/css/) | Styling |
| [JavaScript](https://www.w3schools.com/js/) | Interactive Frontend |
| [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) | Navbar, Forms, Modals |
| [jQuery 3.6](https://jquery.com/) | DOM manipulation in some cases |
| [EmailJS](https://www.emailjs.com/)  | Contact Us functionality |
| [TMDB](https://www.themoviedb.org/) | Movie database API |

## Resources

### Resources used
+ Code Institute Course Material
+ Code Institute's Slack Community
+ [W3Schools](https://www.w3schools.com/) - Minor CSS and JavaScript code ideas
+ [YouTube](https://www.youtube.com/) - Looking for solutions, but none were used
+ [Stack Overflow](https://stackoverflow.com/) - Problem resolution, credited below
+ [jQuery](https://learn.jquery.com/using-jquery-core/) - jQuery documentation
+ [EmailJS](https://www.emailjs.com/) - EmailJS documentation
+ [TMDB](https://www.themoviedb.org/) - Movie Database documentation


### Tools Used
+ [VSCode](https://code.visualstudio.com/) - IDE
+ [HTML Validator](https://validator.w3.org/) - HTML Testing
+ [CSS Validator](https://jigsaw.w3.org/css-validator/) - CSS Testing
+ [Am I Responsive](http://ami.responsivedesign.is/) - Responsive Webpage Presentation
+ [Balsamiq](https://balsamiq.com/wireframes/) - Creating wireframes
+ [MS Paint](https://support.microsoft.com/en-us/windows/get-microsoft-paint-a6b9578c-ed1c-5b09-0699-4ed8115f9aa9) - Cutting out Wireframes
+ [PowerMapper](https://www.powermapper.com/) - Browser compatibility checks
+ [ColorSpace](https://mycolor.space/) - Palette generator

## Testing

### Pre-testing

While creating application I used Chrome Developer Tools to check on errors straight after applying any changes or adding anything new, as well as checking application's **responsiveness**.

### Main Testing

+ **HTML** code was tested by [HTML Validator](https://validator.w3.org/)

> **Errors found and fixed in** [index.html](index.html):

```
Stray start tag footer.

From line 71, column 1; to line 71, column 8

oter -->↩↩<footer>↩  <di 
```
![HTML ERRORS](assets/img/html-errors.png)

Type warnings - not sure, as in any documentation they are present - removed as advised.
Duplicate "logo" - changed footer logo id - fixed.

**Other errors/warnings:**

**Heading warning** - not sure if heading is needed as main section is generated using JavaScript.

> **No errors or warnings found in** [contact.html](contact.html):

After finding errors in index.html, I fixed them in contact.html also, then made a check and no other errors were found.

* **CSS** code was tested by [CSS Validator](https://jigsaw.w3.org/css-validator/validator)

**No errors found!**

<br>

### Lighthouse Reports

Reports generated on local server due to API usage.

* [index.html](index.html)

| Test | Mobile | Desktop |
| :-- | :--: | :--: |
| Performance     | 68 | 85 |
| Accessibility   | 83 | 84 |
| Best Practices  | 93 | 93 |
| SEO             | 83 | 90 |


> Test showed long loading time on images, I tried to figure out some solutions to rescale image on loading to improve web app's loading speed, but due to lack of experience and time couldn't implement it at this time. Shows contrast ratio on movie ratings, tried to fix that, made numbers brighter and added transparency to background, to keep the color, bu still error persists. Added keywords and description to index.html and contact.html.

* [contact.html](contact.html)

| Test | Mobile | Desktop |
| :-- | :--: | :--: |
| Performance     | 94 | 99 |
| Accessibility   | 93 | 93 |
| Best Practices  | 93 | 93 |
| SEO             | 100 | 100 |

> Since page is much simpler and lighter - no major issues found.





<br><br><br><br><br><br><br><br><br><br><br><br><br>

date time error = https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

# to do
## more comments 

## reaDME

## add image resizing for performance improvement 
https://stackoverflow.com/questions/14672746/how-to-compress-an-image-via-javascript-in-the-browser

## investigate errors on contact.html

### Colour palette
Used mycolour.space to create a pallet

### Hide APIKey
https://gist.github.com/derzorngottes/3b57edc1f996dddcab25

### Get Own APIKey

for movies
for emails

### Problems encountered with

* Need to make sure text is in the middle when title is in three lines, rest of them is on top


* modal wont show correct information, shows only first title and and overview
https://stackoverflow.com/questions/68516552/how-to-specify-api-objects-in-bootstrap-5-modal/68516705#68516705



* on success clear and say thank you on email - done https://www.w3schools.com/jsref/met_form_reset.asp




### What sources used

EmailJS - followed CI course material

set date format : https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


### Don't forget deployment


### !!!!!

This search returned some relevant videos https://www.youtube.com/results?search_query=html+parameters+javascript
And I watched this one and it should explain how to get the parameters from a URL https://www.youtube.com/watch?v=j3-LV3XxhVg&ab_channel=ProcureEminence
You just need to then figure out how to apply the parameter value to your search box on index.html