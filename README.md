

how to run the code:
- in project root:
  - npm run install:app (this is only used the first time)
  - npm run build
  - npm run dev

GitHub (for some reason it didn't find the classroom repo when creating project from version control) :
https://github.com/RobinFlaks/exam

additional info:
- to allow for anyone to access the db I have uploaded the .env file to git(this would normally be a file with personal access to the db for each developer)

known issues:
- 

# Technologies: 

- [ ] some form of Login and access control
- [x] Jest tests
  - [x] Snapshot tests
  - [x] simulate + jest.fn
  - [x] supertest
- [x] GitHub Actions with coverage report
- [ ] Deployment to Azure
- [x] Mongodb
- [x] Navigating in the application using React Router
- [x] Writing data to server
- [ ] Websockets

# General Requirements:
- E
  - [x] Write a homepage in React
  - [x] Have at least 2 other React pages that can be accessed via React-Router
  - [x] At least one page has "state", with a change that is triggered from interface
  - [x] From each page you can navigate back (either previous page or homepage)
- D
  - [ ] Create a RESTful API that handles at least one GET, POST, PUT and DELETE (with JSON)
  - [x] Frontend is using the api(ex using fetch)
  - [ ] All endpoints must be listed in README.md
  - [x] The solution uses continuous integration (GitHub) the CI should run tests
- C
  - [ ] Handle authentication/authorization (via cookies)
  - [x] Frontend should have a login page
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
- Code coverage: 0% coverage report found under "npm run test" in GitHub actions

# Specific requirements
- E
  - [x] A visitor to the page is able to see the menu of potential dishes
  - [x] When the application starts in developer mode have some data already filled in
- D
  - [x] A customer should be able to create an account but admin users are not able to be created
- C
  - [ ] An admin is able to log in, add and remove items from the menu, edit existing menu items (update ingredients for a menu item)
- B
  - [ ] The server should have separate API paths for customers getting data and admins adding/removing items (checks to ensure that only admins can add/remove items should be enforced)
- A
  - [ ] a Chat system (based on WebSockets) should be provided where a customer can chat with an employee
  - [ ] A customer can create an order specifying a time/place where they want a delivery, and how many portions of each dish they select.
  - extra:

# Submission
- [ ] PDF file of the README.md
- [ ] .zip from GitHub