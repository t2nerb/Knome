![alt text](https://github.com/t2nerb/Knome/raw/master/KnomeApp/app/static/img/Knome-01.jpg?raw=true "Knome Logo")

Knome by Team6
=================================
CSCI3308 project by Team6. 

Project Description
----------------
Social networking has been proven to be one of the most successful ideas facilitated by the internet. What we aim to do, is create an interactive map, where users can see events submitted by other users. These events can be anything! Whether you want to make others aware of a street performances, public events, or garage sales, other users  browsing the map can see these events provided they are in close proximity to them. 
On the technical side, when a user submits an event, the geolocation of the user’s device is sent to the server, where we then plot the event on the universal map. Other users who are close in proximity would be able to view the events on this map, with the ability to change the radius of their range, depending on their mobility. With time, we plan on implementing features to the interactive map, such as highlighting regions of high crime-activity, or highly congested areas. 

Vision Statement
-------------------
For local communities who want to connect, Knome is an event mapping tool that provides real time information regarding local events and activities nearby. Unlike other interactive maps, our product adds social networking to give the user relevant information about the events taking place around them.

Risks
-------------------
1. Google Maps API limitations may not allow us to have a 'pretty' interface for the map
2. Filtering malicious/inappropriate pins
3. Without porting to a mobile-application, may run into limitations regarding a web application on a mobile web-browser

Risk mitigation plan
---------------------
* Use a different API if Google Maps does not provide all desired functionality. 
* Allow users to ‘report’ possibly malicious / inappropriate pins.
* Reconvene at every checkpoint to assure identical visions of the end product of every group member.
* Have porting to a mobile application as a reach goal following the completion of the webapp. 

Software Development Methodology:
-----------------------------
* This project will utilize an Agile workflow, with project management done through [Github Projects](https://github.com/t2nerb/Knome/projects) on the [main fork](https://github.com/t2nerb/Knome/tree/master) of the repository


Collaboration Tools
---------------------
* Slack for communication
* Github for version control
* [Github Projects](https://github.com/t2nerb/Knome/projects) for project management
* Google docs for documents

Team 6 Members
-------------------
|Names | Emails | Github Username |
|:----------------:|----------------|-----------|
|Brent Dagdagan|brent.dagdagan@colorado.edu|t2nerb
|Samuel Anoff|samuel.anoff@colorado.edu|sanoff
|Andrew Casner|andrew.casner@colorado.edu|Andrew-Casner
|Frank Harvey|franklin.harvey@colorado.edu|franklinharvey
|Sam Cuthbertson|samuel.cuthbertson@colorado.edu|scuthbert
|Daniel Holmes|daniel.holmes@colorado.edu|dholmescu
                                                        

How to
----------------------
1. Install Virtualenv to set up the virtual environment: ```virtualenv .```
2. Set path to the virtual environment: ```source bin/activate``` 
3. Install dependencies with pip3: ```pip3 install -r requirements.txt```
4. Run the app: ```python3 server.py```
