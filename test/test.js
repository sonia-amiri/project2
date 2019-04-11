let assert = require('chai').assert;

function getWeekDay(date) {
   let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

   return days[date.getDay()];
}

describe('getWeekDay', function () {
   it('3 january 2012-tuesday', function () {
      let date = new Date(2012, 0, 3);
      assert.equal(getWeekDay(new Date(2012, 0, 3)), 'TU');
   });

   it('5 january 2012-thursday', function () {
      date = new Date(2012 - 0 - 5);
      assert.equal(getWeekDay(new Date(2012, 0, 5)), 'TH');
   });
});

function getLocalDay(date2) {
   let day = date2.getDay();

   return day;
}

describe('getLocalDay returns the iranian  weekday', function () {
   it('2 january 2012-tuesday', function () {
      date2 = new Date(2012, 0, 3);
      assert.equal(getLocalDay(new Date(2012, 0, 3)), 2);
   });

   it('5 january 2012-friday', function () {
      date2 = new Date(2012, 0, 6);
      assert.equal(getLocalDay(new Date(2012, 0, 6)), 5);
   });
});

function getDateAgo(date3, days) {
   const date = new Date(date3);

   date.setDate(date3.getDate() - days);

   return date.getDate();
}

let date3 = new Date(2015, 0, 2);

describe('getDateAgo', function () {
   it('1 day befor date', function () {
      console.log(getDateAgo(date3, 1));
      assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1);
   });

   it('2 days befor date', function () {
      console.log(getDateAgo(date3, 2));
      assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31);
   });

   it('365 days befor date', function () {
      console.log(getDateAgo(date3, 365));
      assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
   });
});

function getLastDayOfMonth(year, month) {
   let date4 = new Date(year, month + 1);

   return date4.getDate();
}

describe('getLastDayOfMonth', function () {
   it('last day of 01.01.2012', function () {
      assert.equal(getLastDayOfMonth(2012, 0), 1);
   });
});
