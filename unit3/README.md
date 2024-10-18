# WEB103 Project 3 - Stardew Locations

Submitted by: Casey Mak

About this web app: Popular Stardew Valley locations and its events

Time spent: 14 hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [X] **The web app uses React to display data from the API**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [X] **NOTE: Your GIF or a screenshot added to this README must include a view of your Railway database that shows the contents of the table used by your app**
- [X] **The web app displays the title of the app**
- [X] **A visual interface allows the user to select a Location they would like to view**
- [X] **Clicking on a Location shows a list of all items from the Events table that corresponds to that Location**
- [X] **Each Location detail page should have its own unique URL**

The following **optional** features are implemented:

- [ ] An additional page shows all possible `Events` that the user can sort and filter by `Location`
- [ ] `Events` display a countdown showing the time remaining before that event and appears with different formatting when the event has passed

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='/walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  LICEcap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.
It was kind of weird designing the time limits because it's an event, but technically not enough key events with certain dates per location, so I had to improvise. It was also interesting incorporating the template and learning svgs. I had a dumb issue where I was changing the polygons, but it was a simple fix because the width height of the original png was shifted in the svg-edit website so the dimensions was compeletely wrong and it took me a while to realize this small error.

## License

Copyright [2024] [Casey Mak]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.