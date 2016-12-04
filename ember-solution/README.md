# Ember

This is an Ember implementation of a rough Spending Plan calculator.

## tl;dr

In order to meaningfully plan one's finances, it's necessary to know how much
money you'll need and when you'll need it. Unfortunately, predicting the future
is hard (citation needed), and you're only able to effect what you're doing
_now_.

To that end, it's useful to show you what arbitrary goals require you to do, at
least savings-wise. If you need $12K in 12 years, obviously you need to put away
$1K per year until then. This calculator exists to help you understand the
impact of less conveniently priced goals.

## Usage
Ideally, you'll have the ability to add/remove goals, but until then, some
placeholder goals are provided for you. You have full control over their
non-name attributes, specifically the Total Cost, Year of Completion, and the
Spending per Month. However, you can only change one at a time, with one locked
at a level you're comfortable with, leaving the final attribute to be calculated
from the other two.

### An Example
Say you want to go on vacation. You know you want to go in 2018, so you lock the
Year of Completion attribute at 2018. Now, you're not sure how much you need to
save, so you start playing with the Spending per Month attribute. As you bump it
upwards, you'll notice that the total also increases- this reflects that you're
saving more money every month until you spend it all on your vacation.

### Sanity-Checking
It's all well and good to just decide to spend a million bucks on all of your
goals, but it's unlikely to fit your budget (if it does, I am now accepting seed
capital). Instead, you should think about how much money you can realistically
dedicate to goals every month (or use an annual number divided by 12) and enter
it into the "Available Cash" field.

As your monthly spending approaches this number, the system will update colors
to let you know if you're getting yourself in trouble. If you're spending far
less than you have available monthly, the field will be a deep blue, to let you
know you can live a little larger (or you're not counting some savings, like any
money you put aside for retirement). If you're spending 95% of your monthly
available cash, it will be a light yellow to say "Head's up, you're closing in
on your total". If you are trying to spend more money than you actually have
available, however, it will be red, to indicate you're in trouble.

The Available Cash field isn't the only place you get this feedback- you'll also
notice the goals themselves update in color. The way this works is that goals
are prioritized, top-to-bottom, and you'll be writing checks (metaphorically
speaking) in that order. Thus, your total spending accumulates as you pay for
each goal in turn.

For example, imagine you have 

- Goal#1 requiring $10/month
- Goal#2 requiring $20/month
- Goal#3 requiring $30/month

After setting aside your monthly payment for Goal#1 your total cost is $10.
After setting aside your monthly payment for Goal#2 your total cost is $30.
After setting aside your monthly payment for Goal#3 your total cost is $60.

These numbers are compared to how much you have said you have available and at
some point, you'll get close (or even exceed) your available cash. If that
happens, that goal (and any after it) will be colored using the same scheme as
the cash field.

This lets you prioritize accordingly- if you feel bad when you see that you
won't be able to pay for your Goal, it might make sense to bump up its priority,
reduce your goal's monthly cost via its Year of Completion or its Total Cost, or
reduce spending on earlier goals which will free up cash for that goal.

The world is your oyster, go get those pearls!
