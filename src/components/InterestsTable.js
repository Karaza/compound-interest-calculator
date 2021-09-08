import * as React from 'react';

const InterestsTable = (state) => {
  const { initialAmount, period, growthRate, monthlyContribution } = state;

  function compound(initialAmount, growthRate, period, monthlyContribution) {
    var accumulated = initialAmount;
    for (let i = 0; i < period; i++) {
      accumulated *= growthRate / 100;
      if (monthlyContribution) {
        accumulated += initialAmount;
      }
    }

    return (
      initialAmount +
      '€ will grow to ' +
      Math.round((accumulated * 100) / 100) +
      '€ at ' +
      growthRate +
      '% over ' +
      period +
      ' months'
    );
  }

  compound(initialAmount, growthRate, period, monthlyContribution);

  return (
    <>
      <h2 className="text-center">Result</h2>
      <p>{compound(initialAmount, growthRate, period, monthlyContribution)}</p>
      {/* <table>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table> */}
    </>
  );
};

export default InterestsTable;
