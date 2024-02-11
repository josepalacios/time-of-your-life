import React, { useState } from 'react';

const TimeToWords = ({ time }) => {
  const convertToWords = (num) => {

    const units = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty'];

    if (num === 0) {
      return 'Zero';
    } else if (num < 10) {
      return units[num];
    } else if (num < 20) {
      return teens[num - 11];
    } else {
      const digitOne = Math.floor(num / 10);
      const digitTwo = num % 10;
      return `${tens[digitOne]} ${units[digitTwo]}`;
    }
  };

  const convertTimeToWords = () => {
    const newDate = new Date();
    const [hours, minutes] =  newDate.toLocaleTimeString().split(':');
    const hourWords = convertToWords(parseInt(hours, 10));
    const minuteWords = convertToWords(parseInt(minutes, 10));

    return `${hourWords} ${minuteWords}`;
  };

  return (
    <div>
      <p>{convertTimeToWords()}</p>
    </div>
  );
};


export default TimeToWords