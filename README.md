# Inventory List

### Overview of project
A lot of people pwn a pair of earings, but what if you lose one of the earings, now you're just left with one! What do you do, throw it out? That would be a waste! Introducing, Earing Finder! Here you have 2 options, either you can sell the one remaining earing you have or you can find someone that's in the same predicament as you and selling their lone earing. Obviously, this is very basic, and won't actually work, but this is a good base to start with.

##### Features:
   * Sign up or login
   * See a list of a the listings, with the name of the seller, a brief description of the earing, and the price
   * Have a look at earings you're selling
   * Be able to change the price or completely delete a listing
   * Can create a new listing for a new earing you want to sell
   * Can't make a new listing over $150
   * Can also create a new category of earing
   * Can stay logged in even after refreshing the page
   * Can also logout once you are done

### Installation Instructions
* Fork and clone this repo to your computer
* Run bundle install to access all the gemfiles
* Run rails db:migrate to create the table, and bundle exec rake db:seed if you want some generic data
* Run rails s to create a server
* Run npm install --prefix client to install all the gems for React
* Run npm start --prefix client and clink the link (localhost/...) to show the app on your webpage
* Sign up with username and password to enjoy all the perks

### Problems
* Create a filter in all listings to show specific listings
* The earings descriptions need to be more specific, but that's for when I have more time
<!-- take off fetch in my listing, get it when login and get user -->