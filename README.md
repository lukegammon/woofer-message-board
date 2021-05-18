Woofer - Twitter style basic message board.

+ Frontend: HTML, CSS (Skeleton Framework), Vanilla Javascript
+ Backend: nodeJS, express
+ Database: MongoDB, Monk for connection
+ Others: bad-words filter

# Front-end
 - [x] Create client folder
 - [x] Setup index.html
 - [x] Bring in Skeleton CSS
  - http://getskeleton.com/
  - https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
 - [x] Create Header
 - [x] Create form
 - [x] Name
 - [x] Content
 - [x] u-full-width to both inputs
 - [x] Listen for form submit
 - [x] Stop form submit for x seconds + show message
 - [x] Show loading spinner
 - [x] Get data from form and log it
 - [x] Get user input on the Client
 - [x] Hide/Show elements on the client
# Back-end
 - [x] Create server folder
 - [x] npm init -y
 - [x] npm install express 
 - [x] Setup index.js
 - [x] Add GET / route
 - [x] Add POST /mews route
 - [x] log out req.body
# Front-end
 - [x] fetch POST /mews with form data
 - [x] See the CORS error and revel in this moment
 - [x] Send user input from the client with fetch to the server
# Back-end
 - [x] npm install cors
 - [x] Make sure the server is recieving the data
 - [x] Add JSON body parser middleware
 - [x] Validate name and content
 - [x] Must be a string
 - [x] Cannot be empty
 - [x] If not valid
 - [x] Invalid mew, must contain name and content
 - [x] Setup DB Connection
 - [x] npm install monk
 - [x] connect to db
 - [x] create document collection (mews)
 - [x] If Valid
 - [x] Create mew object with
 - [x] name, content, created_date
 - [x] Insert into DB
 - [x] Respond with created mew object
 - [x] Store data in a database
# Front-end
 - [ ] Log out created Mew after POST request
 - [ ] Show the form
 - [ ] Hide loading spinner
# Back-end
 - [ ] GET /mews
 - [ ] Respond with mews from DB
 - [ ] Retrieve data from a database on the Server
# Front-end
 - [ ] fetch GET /mews
 - [ ] Iterate over array
 - [ ] Append each to page
 - [ ] Reverse before appending
 - [ ] Show the form
 - [ ] Hide loading spinner
 - [ ] etch GET /mews after creating a mew
 - [ ] Retrieve data from a server on the client using Fetch
 - [ ] Hide/Show elements on the client
 - [ ] Add elements to the page on the client
# Back-end
 - [ ] npm install bad-words
 - [ ] Use filter before inserting into DB
 - [ ] npm install express-rate-limit
 - [ ] Limit to 1 request every 15 seconds
# Deploy
 - [ ] Deploy server with now
 - [ ] Setup environment variables
 - [ ] Database connection
 - [ ] process.env.MONGO_URI
 - [ ] Show mlab
 - [ ] Deploy with environment variable
 - [ ] now -e MONGO_URI=@meower-db
 - [ ] Add alias
 - [ ] Deploy client folder with now
 - [ ] Set API_URL based on hostname

 ## Inspired by meower by Coding Garden