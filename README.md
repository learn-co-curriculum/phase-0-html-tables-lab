# HTML Tables

### Cloning Down Your Repository

If you already have a personal repository:

* Open the Learn IDE, and in the terminal, type

```
git clone https://github.com/<your_username_here>/exceptional-realty
cd exceptional-realty
git fetch --all
git checkout main-pages
```

If you want to use the demo repository to follow along:

```
git clone https://github.com/learn-co-curriculum/exceptional-realty-demo
cd exceptional-realty-demo
git fetch --all
git checkout html-tables
```

**Remember to use `httpserver` to live test your webpage**

<iframe width="640" height="480" src="//www.youtube.com/embed/mHeCqIctSRU?rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>

<p><a href="https://www.youtube.com/watch?v=mHeCqIctSRU">HTML Tables</a></p>

In this lesson, we're going to go over creating tables. In our
`market-report.html` page, go ahead and set up the basic document structure,
change the title in the `<head>` to say 'Exceptional Realty - Luxury Homes -
Market Report', and add in our `<h1>` and `<h2>` main page headers. Then, let's
add an below that `<h3>` with 'Market Report' inside.

### `<table> </table>`

To add a table, we first need to write opening and closing `<table>` tags. This
tells our browser to interpret anything inside as part of the table. Inside
these tags, we'll use a few other elements to designate the rows, headers and
cells of the table.

### `<tr> </tr>`

To make a row inside our table, we use the _table row_ tag, `<tr>`. So if we
wanted to have four rows in our table, including our headers, it would look
like this:

```
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
them in in the first table row.

```
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

```
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
`/market-report.html` to the end of your URL path). If you're working from your
own repository, push up your work to your remote repo before continuing:

```
git add .
git commit -m 'add listing table to real-estate-listings.html'
git push
```

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/html-tables' title='HTML Tables'>HTML Tables</a> on Learn.co and start learning to code for free.</p>
