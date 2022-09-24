# Assignment Film-Finder

## The assignment:

You are going to make a film finder! This project will give you an overview of the variety of movies. For now, you don't need to worry too much about the database(yet)! This is already made for you. There are a collection of movies in the database that can be filtered by the user through filter buttons. The picked movie can link the user to the IMDB

## Requirements:

Your project should satisfy the following:

1. As a user, I want to see the available movies as posters from the movie.
   - Check the data: There is a link to the poster for each movie in the database.
2. As a user, I want to filter out the movies with 5 filters in a form of radio buttons. The filter functions will be described as follows.
3. As a user, I can only filter one at a time.
   - The current filter will switch to the filter that has been clicked on(radio button). Unless it's a checkbox then there can be more filters selected at the same time.
4. Category 1: As a user, I want to filter all new movies: from the last years, this means 2014 and newer.
5. Category 2: As a user, I want to filter movies with "Avenger" in the title.
5. Category 3: As a user, I want to filter movies with "X-Men" in the title.
7. Category 4: As a user, I want to filter movies with "Princess" in the title.
8. Category 5: As a user, I want to filter movies with "Batman" in the title.
   - Use array methods for the filters.
   - Check if a string is already in another string with .includes()` method.
   - The last 4 filters look very alike, Do you need multiple functions for that? Or can it be solved with one function?
9. As a user, I can click on a poster from the movie, which will link me to their IMDB page.
   - IMDB works with an id for each film/series in the URL. See for example: https://www.imdb.com/title/tt0944947/. Edit The URL from the IMDB and paste the correct ID behind it.
