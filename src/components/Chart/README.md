# APY growth over time data visualization

This chart shows the growth over 30 years of a deposit with varying high yield interest vs a traditional savings account with fixed interest. The user can input a custom amount, select from 1 of 3 APY options and see how their deposit will grow over time. The user can also hover over the chart to see the year to year comparison of their deposit.

The idea behind the chart is to show how much higher the potential earnings are in a high yield account vs a traditional savings account. In a real world scenario, this chart could be tied into a deposit flow to show the user how their current balance will grow over time as well as display how a one-time deposit or recurring deposit will grow. In the code you'll find a few variables at the top of `Chart.js` thats are hard coded, but are intended to be variables that are fetched from the back end or Redux Store.

The chart was built with:
- React/Gatsby
- ReactVis (D3 under the hood)
- Styled Components
- Immer
