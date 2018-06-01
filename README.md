# HTML Tables

## Problem Statement

In HTML, we can create lists of related content using unordered and ordered
lists, and they will display line by line in the order we put them in. Sometimes
as web developers, though, we need to display more complex data. For instance,
imagine you are working with a financial company and need to display a
collection of transactions, each with a title, value, time, category, etc... or
you've been hired by a marketing company and need to display a list of the [most
popular Instagram
accounts](https://en.wikipedia.org/wiki/List_of_most-followed_Instagram_accounts),
each with their username, the owner of the account, the number of followers,
etc... For sets of data like this, with many separate components, the best way
to display would be to put the data into a _table_.

Fortunately, HTML has a built in way to display tables! In this lesson, we will
be reviewing how tables work and how to make our own.

## Objectives

1. Learn the basics of HTML table elements
2. Practice table creation from scratch

## Introduce the Table Tag

The first thing we need in order to create a table is to write opening and
closing `<table>` tags.

```html
<table>

</table>
```

This tells our browser to interpret anything inside as part of the table. What
makes up a table, exactly? A table is defined as having rows, columns, which
create individual cells, as well as headers to label what each column is for.  

In HTML, we define these table components using individual elements that we nest
inside our `table` tags.

## Introduce the Table Row Tag

It's important to note: order really matters when building a table in HTML!
We're trying to display a two-dimensional table, but HTML is interpreted _line
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

## Introduce the Table Header Tag

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

Even though we write the HTML from top down, if we were to spin up `httpserver`
or directly open `index.html` right now, we would see these headers in bolrd and
lined up _left to right_.  

This first row is almost always the only place where we use the `th` tag.

## Introduce the Table Data Tag

In the second row, we can start putting in our data. Here, instead of using the
_table header_ tag, we want to use the _table data_ tag, `<td>`, which will
represent one table cell. So, for our party table, we can add in some names,
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
    <td>845-282-4000</td>
    <td>Guacamole</td>
  </tr>
  <tr>
    <td>Rachel</td>
    <td>718-466-3323</td>
    <td>Chips</td>
  </tr>
  <tr>
    <td>Terrance</td>
    <td>914-442-3112</td>
    <td>Salsa</td>
  </tr>
</table>
```

If you paste this into `index.html` and take a look at how it is displayed in
browser, you'll see we've got a table with 4 rows and 3 columns! Each "column"
of content expands to fit the width of the content.

## Reinforce Our Understanding Of HTML Tables Through Creation

Okay, now its time to put what we've learned to the test. For this challenge,
your task is to recreate a table using the following data:

![cities by population](https://s3.amazonaws.com/ironboard-learn/us_cities_by_population.png)

The above table shows total population of the 4 biggest cities in the US. We can
see there are 3 headers, "City", "State", and "2017 estimate", and data for each
of the four cities.

To complete this task, follow the order of table creation we discussed earlier -
first you need to create a `table`, and place rows inside, dedicate the first
row to just headers, and then add in the data in the appropriate order so that
each city name falls under the "City" column, each state is under "State",
etc...

Run `learn` to test your work and see your progress. The tests also include the
exact population numbers, so feel free to copy them from the errors!

## Conclusion

So, with `table`, `tr`, `th` and `td`, we are able to turn line by line HTML
into table with rows and columns! It may seem counterintuitive at first to list
out row content separately, but with this, you can represent all sorts of data!

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/html-tables'
title='HTML Tables'>HTML Tables</a> on Learn.co and start learning to code for
free.</p>
