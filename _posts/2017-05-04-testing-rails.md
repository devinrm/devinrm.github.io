---
layout: post
title: "Testing Rails"
date: 2017-05-04
---

I joined a book club with other programmers a wee bit ago and in this book
club we're each assigned a chapter and asked to do a full on presentation when
our chapter comes up, which has been great. It also taught me something: I
retain things much better when I teach as opposed to when I'm just reading, so
from now on I'm going to write a blog post about each significant thing I learn
and through my selfishness conceivably you'll benefit as well.

## Tooling

When I test my Rails apps I use [RSpec](https://github.com/rspec/rspec) and
[Capybara](https://github.com/teamcapybara/capybara).
[minitest](https://github.com/seattlerb/minitest) is also a good choice. If you
prefer it, use it. Everything in this blog post will still apply.

## Feature Tests

Feature tests are high-level tests that are intended to mimic an actual user
using your application. It's here that you'll try to put yourself in the mind of
the user. Because I want my apps to be easy to use I try to focus on making each
bit of code do one thing and do it well. This is made easier by testing first
and writing the code to make your tests pass second, i.e. [red, green,
refactor](http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html)

This is a good example of how testing first can drive the design of your
application. I think it's reasonable to say that if you can't write a test for a
feature you want to implement, you probably aren't ready to write that feature.
Reconsider, the feature. See if you can synthesize it down and make it simpler
and then try writing the test again.

**Here's an example feature spec from a movie app I made:**

```ruby
# spec/features/create_movie_spec.rb

describe "Creating a new movie" do
  it "saves the movie and displays the movie's details" do
    visit movies_url

    click_link "Add Movie"

    expect(current_path).to eq(new_movie_path)

    fill_in "Title", with: "Movie Title"
    fill_in "Storyline", with: "A really great storyline."
    select "PG-13", from: "movie_rating"
    fill_in "Genre", with: "Action"
    fill_in "Imdb link", with: "http://www.imdb.com/title/tt2488496/"
    attach_file "Poster", "#{Rails.root}/app/assets/images/ep_4.jpg"

    click_button "Create Movie"

    expect(current_path).to eq(movie_path(Movie.last))

    expect(page).to have_text("Movie Title")
  end
end
```

This test was written to mimic the expected path that I thought a user would
take if they wanted to add a movie to my website.

First, it visits the movies page, then it clicks the link to add a movie
(most likely a button). Then the test framework does some checking for me: when
they click "Add Movie" does it direct them to a form where they can create a
movie? If it doesn't the test should fail. It looks like I also need to set up
my routes and controllers to make this test pass (yay, more tests!).
We then get to the form where they can fill in the details of their favorite
movie and we mimic filling that in with some dummy data. Now since I spent all
that time filling in the movie form I definitely want to save it to the site so
I click "Create Movie". And now my test framework checks that the behavior I
need to add to my controller action will actually work: does the current url
show the slug for the movie I entered, and does the current paged show the movie
I just saved?

Of note: *I don't always test first when it comes to feature specs. Mostly
because I prefer to write faster MVC specs and then I leave the slower feature
specs for the "happy path" through the application once I'm done. However, when
I first started doing TDD it helped out tremendously to write my feature specs
first and I still think it's a reasonable practice to follow.*

## Model Tests

I use model specs to test classes and methods. Model tests are nice because if
you do them right, they're fast (who likes waiting for a test suite to complete)
and they're good for testing and catching edge cases. I like having my model
specs interact with the database as well as it gives me the "warm fuzzies" to
test my database as the "source of truth".

**Here's an example model spec from that same movie app:**

```ruby
# spec/models/movie_spec.rb

describe Movie do
  it "requires a title" do
    movie = Movie.new(title: "")

    movie.valid?

    expect(movie.errors[:title].any?).to eq(true)
  end
end
```

As a rule of thumb, I test my models by writing [Four Phase
Tests](http://xunitpatterns.com/Four%20Phase%20Test.html):

1.) setup
2.) interact
3.) verify
4.) teardown

Now, you might look at that test above and say, "wait, it only has three
phases.", but actually RSpec is handling the teardown for us. That might not be
the case for all test frameworks though so be mindful of the fourth phase.

## Controller Tests

When I'm tempted to write a feature test I will often consider if I can write a
controller test instead because they're faster and less verbose.
I think it's reasonable to think of controller tests as the "other feature
tests" mainly because you can test a fair amount of the same functionality
(testing different paths through the app) with controller tests as you can with
feature tests.

**Example controller spec:**

```ruby
# spec/controllers/movies_controller_spec.rb

describe "GET #index" do
  it "should get a list of movies" do
    visit movies_url

    expect(response).to render_template(:index)
  end
end
```

## View Tests

You might be thinking, "aren't view tests the same as feature tests?" and you
wouldn't be completely wrong. View specs are often overlooked for feature specs
but because feature specs can really slow down your test suite as your
application grows, I think it's worth being discerning regarding whether the test
you're about to right really needs to be a feature spec or whether it would be
better suited as a faster view spec.

**Here's an example from the movie app:**

```ruby
# spec/views/_movie.html.erb_spec.rb

describe 'movies/_movie.html.erb' do
  context 'when the movie has a link to imdb' do
    it 'displays the link' do
      assign(:movie, build(:movie, url: 'http://imdb.com')

      render

      expect(rendered).to have_link 'Movie', href: 'http://imdb.com'
    end
  end
end
```

In conclusion, that's how I test my Rails apps. In a later blog post I'll cover
how I test JavaScript in my Rails apps using
[Selenium-Webdriver](https://rubygems.org/gems/selenium-webdriver/versions/3.4.0),
[WebDriverIO](http://webdriver.io/), [MochaJS](https://mochajs.org/), and
[ChaiJS](http://chaijs.com/)

