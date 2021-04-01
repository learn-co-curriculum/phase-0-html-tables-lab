# HTML Tables

## Learning Goals

1. Recognize basic HTML table elements
2. Create HTML tables

## Introduction

In HTML, we can create lists of related content using unordered and ordered
lists, and they will display line by line in the order we put them in.
Sometimes as web developers, though, we need to display more complex data. For
instance, imagine you are working with a financial company and need to display
a collection of transactions, each with a title, value, time, and category.
Or, imagine that you've been hired by a marketing company and need to display a
list of the [most popular Instagram accounts][mpia], each with their username,
the owner of the account, and the number of followers. For sets of data like
this, with many separate components, the best way to display would be to put
the data into a _table_.

HTML has a built in way to display tables! In this lesson, we will be reviewing
how tables work and how to make our own.

## Getting Started

Fork and clone this lesson into your local environment. Navigate into its directory
in the terminal, then run `code .` to open the files in Visual Studio Code. Finally,
run `bundle` to install the lab's dependencies.

## Recognize Basic HTML Table Elements

### The Table Tag: `<table>`

The first thing we need in order to create a table is to write opening and
closing `<table>` tags.

```html
<table>

</table>
```

This tells our browser to interpret anything inside as part of the table. What
makes up a table, exactly? A table has rows and columns, which together
create individual cells, as well as headers to label what each column is for.

In HTML, we define these table components using individual elements that we nest
inside our `table` tags.

### The Table Row Tag: `<tr>`

It's important to note: order really matters when building a table in HTML!
We're trying to display a two-dimensional table, but browsers interpret HTML _line
by line_.  For this reason, HTML tables were designed so that there is no tag
for _columns_, only _rows_.  If you were creating a table with 5 rows and 5
columns, in designing the table, we would actually have to create 5 _rows_, each
with 5 individual _cells_ inside.  When displayed, the cells in each row will
line up to _look_ like columns.

Table rows always come first. To make a row inside our table, we use the _table
row_ tag, `<tr>`. So if we wanted to have four rows in our table, including a row of
headers, setting up the rows it would look like this:

```HTML
<table>
  <tr></tr>
  <tr></tr>
  <tr></tr>
  <tr></tr>
</table>
```

Any content we want in a row would go inside that particular `<tr>`.

### The Table Header Tag: `<th>`

Tables generally start with a row of headers to label each column, so the first
`tr` tag we write will be dedicated to these headers.

To create headers, we use `<th>`, the _table header_ tag. Let's say we were
creating a list of guests to a party. The first column might have a header
called 'Name' for the guest's name, the second, the guest's 'Phone Number', and
the third, what the guest is 'Bringing' to the party.

These headers need to go in the first row, so that may look something like:

```HTML
<table>
  <tr>
    <th>Name</th>
    <th>Phone Number</th>
    <th>Bringing</th>
  </tr>
  <tr></tr>
  <tr></tr>
  <tr></tr>
</table>
```

Even though we write the HTML from top down, we would see these headers in bold
and lined up _left to right_. We can open up `index.html` right now to take a
look to confirm.

This first row is almost always the only place where we use the `th` tag.

### The Table Data Tag: `<td>`

In the second row, we can start putting in our data. Here, we want to use the
_table data_ tag, `<td>` instead of using the _table header_ tag. The `<td>` tag
represents one table cell. So, for our party table, we can add in some names,
phone numbers and items for guests to bring. An example row would look like the
following:

```HTML
<tr>
  <td>Daniel</td>
  <td>845-282-4000</td>
  <td>Guacamole</td>
</tr>
```

As long as each bit of data in a `<td>` is in the _same position_ as the
corresponding `<th>` in the first row, it will show up in that column.

Repeating this structure, if we wanted to include 3 guests for our party, our
entire table would look like the following:

```HTML
<table>
  <tr>
    <th>Name</th>
    <th>Phone Number</th>
    <th>Bringing</th>
  </tr>
  <tr>
    <td>Daniel</td>
    <td>718-555-1212</td>
    <td>Guacamole</td>
  </tr>
  <tr>
    <td>Rachel</td>
    <td>718-555-1212</td>
    <td>Chips</td>
  </tr>
  <tr>
    <td>Terrance</td>
    <td>914-555-1212</td>
    <td>Salsa</td>
  </tr>
</table>
```

Paste this into `index.html` and take a look at how it is displayed in
browser. You'll see we've got a table with 4 rows and 3 columns! Each "column"
of content expands to fit the width of the content.

## Create HTML Tables

Okay, now its time to put what we've learned to the test. For this challenge,
your task is to recreate a table using the following data:

![cities by population](https://s3.amazonaws.com/ironboard-learn/us_cities_by_population.png)

The above table shows total population of the 4 biggest cities in the US. We can
see there are 3 headers, "City", "State", and "2017 estimate", and data for each
of the four cities.

To complete this task, follow the order of table creation we discussed earlier:

1. Create a `table`, and place rows inside,
2. Dedicate the first row to just headers
3. Add in the data in the appropriate order so that each city name falls under the
"City" column, each state is under "State", etc...

Run `rspec` to test your work and see your progress. The tests also include the
exact population numbers, so feel free to copy them from the errors!

## Saving Your Work Remotely

Currently, the work you've done on this assignment is only on your local
machine. To preserve work on your GitHub fork, you will need to stage the
changes you've made, commit them, and push the commit up to GitHub. Use
the following commands to do this:

```sh
git add .
git commit -m "Completed assignment"
git push
```

If you visit your fork on GitHub, you should now see that _you've_ made the most
recent commit, and your solution will be present in the files.

## Conclusion

So, with `table`, `tr`, `th` and `td`, we are able to turn line by line HTML
into a table with rows and columns! It may seem counterintuitive at first to list
out row content separately, but with this, you can represent all sorts of data!

[mpia]: https://en.wikipedia.org/wiki/List_of_most-followed_Instagram_accounts



