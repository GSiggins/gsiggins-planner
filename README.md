#Daily Planner

## Repo Link : https://github.com/GSiggins/gsiggins-planner

## Live Link : https://gsiggins.github.io/gsiggins-planner

### WorkFlow:

-Created bones of HTML, using bootstrap to arrange columns.

-Created row for each hour in the planner, including time, textarea, and button.

-Grabbed elements of rows to reference in javascript.

-Wrote function to grab the current time from moment.js and display in Jumbotron.

-Wrote a checkTime function to run and update the planner every 15 minutes. 

-Wrote function to grab the current hour from moment.js in 24 hour format. 

-Used parseInt to convert each time-slot to an integer.

-Used if/else if LOOP logic to compare time-slot to current hour and wrote logic to determine past, present, and future. 

-Used the if/else if function to also add classes with CSS styling for past, present, future.

-Wrote button clicks to trigger the localStorage saving. 

-Commited values of text areas to local storage with the key being the hour.

-Used getItem to populate the time-slots with the correlating info. 

![image](https://user-images.githubusercontent.com/103160909/172531872-b117f012-255d-42dc-9e08-8d8686046568.png)
