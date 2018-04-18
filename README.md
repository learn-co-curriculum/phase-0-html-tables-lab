# HTML Tables

## Objectives

- Learn the basics of HTML table elements

## Getting Started

In this lesson, we're going to go over creating tables. In our
`market-report.html` page, go ahead and set up the basic document structure that
we see in `real-estate-listings.html`. Change the title in the `<head>` to say
'Exceptional Realty - Luxury Homes - Market Report' so that our users can know
what page they are on from the tab heading. Let's also add in our `<h1>` and
`<h2>` main page headers. Then, let's add an additional `<h3>` header below that
with 'Market Report' inside.

## `<table> </table>`

**Remember to use `httpserver` to live test your webpage**

To add a table, we first need to write opening and closing `<table>` tags. This
tells our browser to interpret anything inside as part of the table. Inside
these tags, we'll use a few other elements to designate the rows, headers and
cells of the table.

### `<tr> </tr>`

To make a row inside our table, we use the _table row_ tag, `<tr>`. So if we
wanted to have four rows in our table, including our headers, it would look
like this:

```HTML
<table>
  <tr></tr>
  <tr></tr>
  <tr></tr>
  <tr></tr>
</table>
```

Any content we want in a row would go inside that particular `<tr>`.

### `<th> </th>`

Tables generally start with a row of headers to label columns for the rows
below. To do this, we use `<th>`, the _table header_ tag. Let's add four
headers to this table, 'Address,' 'City,' 'State,' and 'Sales Price,' adding
them in in the first table row:

```HTML
<table>
  <tr>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Sales Price</th>
  </tr>
  <tr></tr>
  <tr></tr>
  <tr></tr>
</table>
```

### `<td> </td>`

In the next row down, we can start putting our information. In this row,
instead of using the _table header_ tag, we want to use the _table data_ tag,
`<td>`, which will represent one table cell. So, for our table data, we can
just make up some addresses in cities and states, as well as a sales price, and
add them in. An example row would look like the following:

```HTML
<tr>
  <td>2345 Fairview Ln.</td>
  <td>Brooklyn</td>
  <td>New York</td>
  <td>$1.2 mil</td>
</tr>
```

As long as each bit of data in a `<td>` is in the same position as the
corresponding `<th>`, it will show up in that column.

Go ahead and fill 4 rows in with data before moving on, then check out the
results on your live page using `httpserver` (make sure to add
`/market-report.html` to the end of your URL path).

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/html-tables' title='HTML Tables'>HTML Tables</a> on Learn.co and start learning to code for free.</p>
