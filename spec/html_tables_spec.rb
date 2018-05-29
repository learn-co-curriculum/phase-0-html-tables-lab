require 'pry'

RSpec.describe 'index.html' do
  it 'contains a <table> with five rows' do
    table = parsed_html.search('table').first
    expect(table).to_not be_nil, "The main <table> tag is missing!"
    expect(html_file_contents).to include('</table>'), "Don't forget to include a closing </table>"


    children = table.children.select {|child| child.name == "tr"}
    expect(children.length).to be == 5, "Your <table> tag needs five <tr> tags, one for each row"

  end

  it 'contains a <table> with the correct headers' do
    headers = parsed_html.search('table > tr').first

    expect(headers.children[0].children[0].text).to eq("City")
    expect(headers.children[2].children[0].text).to eq("State")
    expect(headers.children[4].children[0].text).to eq("2017 estimate")
  end

  it 'contains the correct information about New York City' do
    new_york = parsed_html.search('table > tr')[1]

    expect(new_york.children[0].children[0].text).to eq("New York")
    expect(new_york.children[2].children[0].text).to eq("New York")
    expect(new_york.children[4].children[0].text).to be == "8,622,698"
  end

  it 'contains the correct information about California' do
    new_york = parsed_html.search('table > tr')[2]

    expect(new_york.children[0].children[0].text).to eq("Los Angeles")
    expect(new_york.children[2].children[0].text).to eq("California")
    expect(new_york.children[4].children[0].text).to be == "3,999,759"
  end

  it 'contains the correct information about Chicago' do
    new_york = parsed_html.search('table > tr')[3]

    expect(new_york.children[0].children[0].text).to eq("Chicago")
    expect(new_york.children[2].children[0].text).to eq("Illinois")
    expect(new_york.children[4].children[0].text).to be == "2,716,450"
  end

  it 'contains the correct information about Houston' do
    new_york = parsed_html.search('table > tr')[4]

    expect(new_york.children[0].children[0].text).to eq("Houston")
    expect(new_york.children[2].children[0].text).to eq("Texas")
    expect(new_york.children[4].children[0].text).to be == "2,312,717"
  end

end
