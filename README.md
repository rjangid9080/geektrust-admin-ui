# Geektrust Admin UI

This challenge is from geektrust and it is meant to be solved offline.

## Problem Statement
You work at a startup that is building an interface for admins to see and delete users. The users will be provided via an API. Your job is to build out a working UI.
These are the requirements :

1. Column titles must stand out from the entries.
2. There should be a search bar that can filter on any property.
3. You should be able to edit or delete rows in place.(There is no expectation of persistence. Edit and delete are expected to only happen in memory.)
4. You need to implement pagination: Each page contains 10 rows. Buttons at the bottom allow you to jump to any page including special buttons for first page, previous page, next page and last page. Pagination must update based on search/filtering. If there are 25 records for example that match a search query, then pagination buttons should only go till 3.
5. You should be able to select one or more rows. A selected row is highlighted with a grayish background color. Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left.
6. Checkbox on the top left is a shortcut to select or deselect all displayed rows. This should only apply to the ten rows displayed in the current page, and not all 50 rows.

### Users API
We provide you an Users API to list all the users and their properties.
### Note :
The users are sorted by `id` field. There is no alphabetical sorting.
### Request Type :
Get
### Endpoint
https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json
### Sample Response
[
  {
    "id": "1",
    "name": "Aaron Miles",
    "email": "aaron@mailinator.com",
    "role": "member"
  },
  {
    "id": "2",
    "name": "Aishwarya Naik",
    "email": "aishwarya@mailinator.com",
    "role": "member"
  },
  {
    "id": "3",
    "name": "Arvind Kumar",
    "email": "arvind@mailinator.com",
    "role": "admin"
  }
]

### Solved UI :
![Screenshot 2022-04-20 173028](https://user-images.githubusercontent.com/43642227/164227116-0b63c2a4-048c-4c3f-9347-3d22b6d2b012.png)

### Developing
This repo uses [pnpm](https://pnpm.io/) , to install it ...
```
npm install -g pnpm 
```
...then install dependencies
```
pnpm install
```
to run Geektrust_Admin_UI on your local host using `pnpm start`
### Additional Feature
When you click on Name then the users sorted by name in ascending manner and on another click it sorted descending.
