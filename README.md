

how to run the the code:

github (for some reason it didnt find the classroom repo when creating project from version control) :
https://github.com/RobinFlaks/exam

additional info:
- using HashRouter since that allows the user to refresh and still be on the same page.

known issues:
- when leaving a page with a get call the browser gets an error message n is not a function, when refreshing the page it renders without issues.

# Technologies: 

- [ ] some form of Login and access control
- [ ] Jest tests
  - [ ] Snapshot tests
  - [ ] simulate + jest.fn
  - [ ] supertest
- [ ] Github Actions with coverage report
- [ ] Deployment to Azure
- [ ] Mongodb
- [x] Navigating in the application using React Router
- [ ] Writing data to server
- [ ] Websockets

# General Requirements:
- E
  - [x] Write a homepage in React
  - [x] Have at least 2 other React pages that can be accessed via React-Router
  - [x] At least one page has "state", with a change that is triggered from interface
  - [x] From each page you can navigate back (either previous page or homepage)
- D
  - [ ] Create a RESTful API that handles at least one GET, POST, PUT and DELETE (with JSON)
  - [ ] Frontend is using the api(ex using fetch)
  - [ ] All endpoints must be listed in README.md
  - [ ] The solution uses continuous integration (GitHub) the CI should run tests
- C
  - [ ] Handle authentication/authhorization (via cookies)
  - [ ] Frontend should have a login page
  - [ ] A logged-in user gets a personalized welcome message
  - [ ] On every page there is an option to logout
- B
  - [ ] Each REST endpoint MUST handle authentication (401), and possibly authorization (403) (if and endpoint is open to everyone add comment)
  - [ ] Create a test class called security-test.js where each endpoint is tested for when it returns 401 and 403
  - [ ] In the README.md also list the security tests written for it
- A
  - [ ] Solution includes continuous deployment to Azure
  - [ ] Extra functionality:

# Testing
- Code coverage: 0%

# Specific requirements
- E
  - [x] A visitor to the page is able to see the menu of potential dishes
  - [ ] When the application starts in developer mode have some data already filled in
- D
  - [ ] A customer should be able to create an account but admin users are not able to be created
- C
  - [ ] An admin is able to log in, add and remove items from the menu, edit existing menu items (update ingredients for a menu item)
- B
  - [ ] The server should have sperate API paths for customers getting data and admins adding/removing items (checks to ensure that only admins can add/removve items should be enforced)
- A
  - [ ] a Chat system (based on WebSockets) should be provided where a cusomer can chat with an employee
  - [ ] A customer can create an order specifying a time/place where they want a delivery, and how many portions of each dish they select.
  - extra:

# Submission
- [ ] PDF file of the README.md
- [ ] .zip from github