const test = require('tape')
const nlp = require('../_lib')
const spacetime = require('spacetime')
//single-date tests

//yep,
let january = 0
let february = 1
let march = 2
let april = 3
let may = 4
let june = 5
let july = 6
let august = 7
let september = 8
let october = 9
let november = 10
let december = 11

const tests = [
  {
    today: [2016, february, 11],
    tests: [
      ['march 2nd', [2016, march, 2]],
      ['2 march', [2016, march, 2]],
      ['2 march 2016', [2016, march, 2]],
      ['march 2nd', [2016, march, 2]],
      ['2nd of march', [2016, march, 2]],
      ['2nd of march, 2016', [2016, march, 2]],
      ['march 2nd, 2016', [2016, march, 2]],
      ['march 22nd', [2016, march, 22]],
      ['tuesday march 22nd', [2016, march, 22]],
      ['tuesday march 22nd, 2016', [2016, march, 22]],
      ['april the 22nd', [2016, april, 22]],
      ['22 april', [2016, april, 22]],
      ['22 april 2016', [2016, april, 22]],
      ['april 22nd', [2016, april, 22]],
      ['22nd of april', [2016, april, 22]],
      ['the 22nd of april, 2016', [2016, april, 22]],
      ['april 1st, 2016', [2016, april, 1]],
      ['april 1st', [2016, april, 1]],
      ['tuesday, april the 1st', [2016, april, 1]],
      ['tuesday april 1st, 2016', [2016, april, 1]],
      ['2pm', [2016, february, 11]],
      ['2:12', [2016, february, 11]],
      ['2:12am', [2016, february, 11]],
      ['2:12 pm', [2016, february, 11]],
      ['2pm est', [2016, february, 11]],
      ['2pm eastern', [2016, february, 11]],
      ['2pm eastern time', [2016, february, 11]],
      ['2pm pacific standard time', [2016, february, 11]],
      ['march 2nd', [2016, march, 2]],
      ['march 2nd at 2pm', [2016, march, 2]],
      ['march 2nd at 2pm EST', [2016, march, 2]],
      ['march 2nd at 2pm Eastern standard', [2016, march, 2]],
      ['march 2nd at 2pm Eastern time', [2016, march, 2]],
      ['march 2nd at 2pm Eastern standard time', [2016, march, 2]],
      ['march 2nd at 2pm UTC+5', [2016, march, 2]],
      ['4pm on march 2nd', [2016, march, 2]],
      ['4:32 on march 2nd', [2016, march, 2]],
      ['@ 5 march 2nd', [2016, march, 2]],
      ['@ 5 pacific time march 2nd', [2016, march, 2]],
      ['2 oclock march 2nd', [2016, march, 2]],
      ['march 2nd 2 oclock', [2016, march, 2]],
      ['march 2nd @ 2pm', [2016, march, 2]],
      // ['march 2nd @ 2', [2016, march, 2]],
      ['march 2nd @ 2:02', [2016, march, 2]],
      ['march 2nd after 2:00', [2016, march, 2]],
      ['today after 2:00', [2016, february, 11]],
      ['tommorrow before noon', [2016, february, 12]],
      ['tomorrow before 3', [2016, february, 12]],
      ['july 5th at 2pm', [2016, july, 5]],
      ['july 5th, 2:12', [2016, july, 5]],
      ['4:23am july 5th ', [2016, july, 5]],
      ['july 5th 2pm PST', [2016, july, 5]],
      ['1pm pacific time, july 5th ', [2016, july, 5]],
      ['july 5th before noon pacific time', [2016, july, 5]],
      ['3:23 EST july 5th ', [2016, july, 5]],
      ['2 oclock july 5th ', [2016, july, 5]],
      ['july 5 2016 12 oclock PST', [2016, july, 5]],
      ['3:23 eastern standard time july 5', [2016, july, 5]],
      ['new years eve', [2016, december, 31]],
      ['april fools', [2016, april, 1]],
      ['april fools at 5pm', [2016, april, 1]],
      ['april fools, 2016', [2016, april, 1]],
      ['1999/12/25', [1999, december, 25]],
      ['1999-12-25', [1999, december, 25]],
      ['12/25/1999', [1999, december, 25]],
      ['12-25-1999', [1999, december, 25]],
      ['25-12-1999', [1999, december, 25]],
      ['25-12-1999 12:32', [1999, december, 25]],
      ['25-12-1999 12:32:00', [1999, december, 25]],
      ['2016/03/13', [2016, march, 13]],
      ['03/13/2016 at 2:00', [2016, march, 13]],
      ['2016/13/03', [2016, march, 13]],
      ['13/03/2016 before 11', [2016, march, 13]],

      ['q1 2002', [2002, january, 1]],
      // ['fourth quarter, 2002', [2002, october, 1]],
      // ['fourth quarter', [2016, october, 1]],
      // ['spring 2002', [2002, march, 1]],
      ['this march', [2016, march, 1]],
      // ['first week of january', [2016, january, 2]],
      // ['first week of february', [2016, february, 6]],
      // ['first week of march', [2016, march, 1]],
      // ['first week of april', [2016, april, 4]],
      // ['first week of may', [2016, may, 2]],
      // ['first week of june', [2016, june, 1]],
      // ['first week of july', [2016, july, 4]],
      // ['first week of august', [2016, august, 1]],
      // ['first week of september', [2016, september, 1]],
      // ['first week of october', [2016, october, 3]],
      // ['first week of november', [2016, november, 1]],
      // // ['first week of december', [2017, december, 1]], //todo: bug
      ['second week of february', [2016, february, 8]],
      ['2nd week of february', [2016, february, 8]],
      ['tomorrow', [2016, february, 12]],
      ['the next day', [2016, february, 12]],
      ['the day after next', [2016, february, 13]],
      ['day after tomorrow', [2016, february, 13]],
      ['the last weekend in october', [2016, october, 29]],
      // ['the last weekend this month', [2016, february, 27]]
    ],
  },
  // {
  //   today: [2016, february, 10],
  //   tests: [
  //     // last date chunk wins - part 3, arbitrary edition
  //     // ['yesterday 6th', [2016, march, 6]],
  //     // ['yesterday the 6th', [2016, march, 6]],
  //     ['yesterday on the 6th', [2016, march, 6]],
  //     // ['yesterday on 6', [2016, march, 6]],
  //     ['6th yesterday', [2016, february, 9]],
  //     ['6 yesterday', [2016, february, 9]],
  //     // ['today 6th', [2016, march, 6]],
  //     // ['today the 6th', [2016, march, 6]],
  //     ['today on the 6th', [2016, march, 6]],
  //     // ['today on 6', [2016, march, 6]],
  //     ['6th today', [2016, february, 10]],
  //     ['6 today', [2016, february, 10]],
  //     // ['tomorrow 6th', [2016, march, 6]],
  //     // ['tomorrow the 6th', [2016, march, 6]],
  //     ['tomorrow on the 6th', [2016, march, 6]],
  //     // ['tomorrow on 6', [2016, march, 6]],
  //     ['6th tomorrow', [2016, february, 11]],
  //     ['6 tomorrow', [2016, february, 11]],
  //     // ['friday 6th', [2016, march, 6]],
  //     // ['friday the 6th', [2016, march, 6]],
  //     ['friday on the 6th', [2016, march, 6]],
  //     // ['friday on 6', [2016, march, 6]],
  //     ['6th friday', [2016, february, 12]],
  //     ['6th on friday', [2016, february, 12]],
  //     ['6th this friday', [2016, february, 12]],
  //     ['6 friday', [2016, february, 12]],
  //     ['6 on friday', [2016, february, 12]],
  //     ['6 this friday', [2016, february, 12]],
  //     // ['next week 6th', [2016, march, 6]],
  //     // ['next week the 6th', [2016, march, 6]],
  //     // ['next week on the 6th', [2016, march, 6]],
  //     // ['next week on 6', [2016, march, 6]],
  //     ['6th next week', [2016, february, 15]],
  //     ['6 next week', [2016, february, 15]],
  //     ['6 on next week', [2016, february, 15]],
  //     ['6 this next week', [2016, february, 15]],
  //   ],
  // },
  {
    today: [2011, march, 28], //monday
    tests: [
      ['yesterday', [2011, march, 27]],
      ['tomorrow', [2011, march, 29]],
      ['tmr', [2011, march, 29]],
      ['in 3 days', [2011, march, 31]],
      ['3 days ago', [2011, march, 25]],
      ['in 3 weeks', [2011, april, 18]],
      ['four weeks ago', [2011, february, 28]],
      ['in 3 months', [2011, june, 28]],
      ['three months ago', [2010, december, 28]],
      ['in 3 years', [2014, march, 28]],
      ['seven years ago', [2004, march, 28]],
      ['60 years ago', [1951, march, 28]],
      ['2 days ago', [2011, march, 26]],
      ['365 days from now', [2012, march, 27]],
      ['100 months now', [2019, july, 28]],
      ['100 years from now', [2111, march, 28]],
      ['next monday', [2011, april, 4]],
      ['next mon', [2011, april, 4]],
      // ['4 mondays from now', [2011, april, 25]],
      // ['4 mondays from today', [2011, april, 25]],
      ['next weekend', [2011, april, 9]],
      // ['six mondays ago', [2011, february, 21]],
      ['last monday', [2011, march, 21]],
      ['last mon', [2011, march, 21]],
      ['this past mon', [2011, march, 21]],
      ['this coming mon', [2011, april, 4]],
      ['this upcoming mon', [2011, april, 4]],
      ['next thurs', [2011, april, 7]],
      ['next month', [2011, april, 1]],
      ['last month', [2011, february, 1]],
      ['next week', [2011, april, 4]],
      ['last week', [2011, march, 21]],
      ['next year', [2012, january, 1]],
      ['this year', [2011, january, 1]], //?
      ['last year', [2010, january, 1]],
      ['tues this week', [2011, march, 29]],
      ['tuesday this week', [2011, march, 29]],
      ['tuesday next week', [2011, april, 5]],
      ['this september', [2011, september, 1]],
      // ['in a september', [2011, october, 1]],
      // ['in an october', [2011, november, 1]],
      ['september', [2011, september, 1]],
      ['last september', [2010, september, 1]], //fixme
      ['next september', [2011, september, 1]],
      ['january', [2012, january, 1]],
      ['next january', [2012, january, 1]], //fixme
      ['last january', [2011, january, 1]],
      ['next february', [2012, february, 1]],
      ['last february', [2011, february, 1]],
      ['february ', [2012, february, 1]],
      ['in a year', [2012, march, 28]],
      ['in a week', [2011, april, 4]],
      ['the saturday after next', [2011, april, 16]],
      ['the monday after next', [2011, april, 11]],
      // ['the monday after next monday', [2011, april, 14]],
      // ['the monday before May 25', [2011, june, 23]],
      // ['the 2nd monday before May 25', [2011, june, 16]],
      // ['3 mondays after May 25', [2011, july, 13]],
      // ['tuesday before last', [2011, march, 15]],
      ['a week from now', [2011, april, 4]],
      ['a month from today', [2011, april, 28]],
      ['a week after this friday', [2011, april, 8]],
      ['a week from this friday', [2011, april, 8]],
      ['two weeks from this friday', [2011, april, 15]],
      // ['the second week after this friday', [2011, april, 15]],
      ['A week on tuesday', [2011, april, 5]],
      ['A month ago', [2011, february, 28]],
      ['A week ago', [2011, march, 21]],
      ['A year ago', [2010, march, 28]],
      ['this month', [2011, march, 1]],
      ['current month', [2011, march, 1]],
      ['the current week', [2011, march, 28]],
      ['current year', [2011, january, 1]],
      // ['first monday in 1 month', [2011, april, 4]],
      // ['first monday of month in 1 month', [2011, april, 4]],
      // ['first monday of 1 month', [2011, april, 4]],
      // ['first monday in 2 months', [2011, may, 2]],
      // ['first monday of 2 months', [2011, may, 2]],
      // ['first monday of month 2 months', [2011, may, 2]],
      // ['first monday of month in 2 months', [2011, may, 2]],
      // ['first monday in 3 months', [2011, june, 6]],
      // ['first monday of 3 months', [2011, june, 6]],
      // ['first monday of month in 3 months', [2011, june, 6]],
      ['1 year 9 months from now', [2012, december, 28]],
      ['1 year 9 months 1 day from now', [2012, december, 29]],
      ['2 years 4 months ago', [2008, november, 28]],
      ['2 years 4 months 5 days ago', [2008, november, 23]],
    ],
  },
  {
    today: [2016, february, 5], // a friday
    tests: [
      // //referenced nearby days
      ['this saturday', [2016, february, 6]], //tomorrow
      ['sunday', [2016, february, 7]],
      ['mon', [2016, february, 8]],
      ['tuesday', [2016, february, 9]],
      ['next wed', [2016, february, 10]],
      ['this thurs', [2016, february, 11]],
      ['this friday', [2016, february, 12]], //not today
      ['next friday', [2016, february, 12]], //not today
      ['friday', [2016, february, 12]], //not today
      // start/end of week
      ['this weekend', [2016, february, 6]], //tomorrow
      ['next weekend', [2016, february, 13]],
      ['end of this week', [2016, february, 5]], //friday (today)
      ['next week', [2016, february, 8]], //monday
      ['start of next week', [2016, february, 8]],
      ['end of next week', [2016, february, 12]], //friday
      //punted weeks with days
      ['this monday', [2016, february, 8]],
      // ['two mondays from now', [2016, february, 22]],
      // ['3 mondays from now', [2016, february, 29]],
      // ['three sundays from now', [2016, february, 28]],
      // ['four mondays from now', [2016, march, 22]], //todo: bug
      ['next monday', [2016, february, 8]],
      ['monday next week', [2016, february, 8]],
      ['the monday after next', [2016, february, 15]],
      ['the tuesday after next', [2016, february, 16]],
      // ['three thursdays from now', [2016, february, 25]],
    ],
  },
  {
    today: [2016, april, 19],
    tests: [
      ['4pm', [2016, april, 19]],
      ['03/03/2016', [2016, march, 3]],
      ['june fifth 2016', [2016, june, 5]],
      ['june five 2016', [2016, june, 5]],
      ['new years', [2017, january, 1]],
      ['tomorrow', [2016, april, 20]],
      ['this june', [2016, june, 1]], //relyear
      ['third week of may', [2016, may, 16]], //relmonth
      ['this weekend', [2016, april, 23]], //relweek
      ['next weekend', [2016, april, 30]],
      ['summer 1992', [1992, june, 1]],
      ['one hour from today', [2016, april, 19]],
      ['24 hours from today', [2016, april, 20]],
      ['two days from today', [2016, april, 21]],
      ['two weeks from today', [2016, may, 3]],
      ['two months from today', [2016, june, 19]],
      ['three years from today', [2019, april, 19]],
      ['three years after yesterday', [2019, april, 18]],
      ['a month after yesterday', [2016, may, 18]],
      ['a month after new years', [2017, february, 1]],
      // ['2 hours after midnight', [2016, april, 20]],
      // ['the last weekend this month', [2016, april, 30]],
      // ['the last weekend of this month', [2016, april, 30]]
    ],
  },
  {
    today: [2016, may, 11],
    tests: [
      ['on the 18th', [2016, may, 18]],
      ['may 11th', [2016, may, 11]],
      ['thursday the 12th', [2016, may, 12]],
      ['may 13', [2016, may, 13]],
      ['may the 17th', [2016, may, 17]],
      ['may 18th', [2016, may, 18]],
      ['may ninth', [2016, may, 9]],
      ['may nineteenth', [2016, may, 19]],
      ['may 24', [2016, may, 24]],
      ['may twenty five', [2016, may, 25]],
      ['may 26th', [2016, may, 26]],
      ['this friday', [2016, may, 13]],
      ['this wednesday', [2016, may, 18]],
      ['next tuesday', [2016, may, 17]],
      ['two days after may 26th', [2016, may, 28]],
      ['two days after next tuesday', [2016, may, 19]],
      ['may 12th, 2018', [2018, may, 12]],
      ['last week of february', [2017, february, 20]],
      ['first week of march 2019', [2019, march, 4]],
      ['by next week', [2016, may, 11]],
      ['before next week', [2016, may, 11]],
      ['after next week', [2016, may, 20]],
      // ['thanksgiving 2018', [2018, november, 22]],
      // ['two weeks after thanksgiving, 2018', [2018, december, 6]],
      //
      ['june 5th to august 19th', [2016, june, 5]],
      ['between june 5th and august 19th 2017', [2016, june, 5]],
      ['two days before christmas', [2016, december, 23]],
      ['christmas', [2016, december, 25]],
    ],
  },
  {
    today: [2017, may, 11],
    tests: [
      ['thanksgiving', [2017, november, 23]],
      ['two weeks after thanksgiving', [2017, december, 7]],
      ['this thanksgiving', [2017, november, 23]],
    ],
  },
  {
    today: [2016, may, 11],
    tests: [
      ['july 5th', [2016, july, 5]],
      ['on july 5th', [2016, july, 5]],
      // ['5/25', [2016, may, 25]],
      ['in the next week', [2016, may, 16]],
      ['next week', [2016, may, 16]],
      ['may nineteenth', [2016, may, 19]],
      ['next thursday', [2016, may, 19]],
      ['next tuesday', [2016, may, 17]],
      ['first week of march 2019', [2019, march, 4]],
      ['by next week', [2016, may, 11]],
      ['before next week', [2016, may, 11]],
      ['after next week', [2016, may, 20]],
      ['two days before christmas', [2016, december, 23]],
      ['today', [2016, may, 11]],
      ['weds', [2016, may, 18]],
      ['in 8 days', [2016, may, 19]],
      ['between june 5th and august 19th 2017', [2016, june, 5]], //....
      ['tomorrow early in the day', [2016, may, 12]],
      ['tomorrow morning', [2016, may, 12]],
      ['tomorrow am', [2016, may, 12]],
      ['tomorrow pm', [2016, may, 12]],
      ['tomorrow noon', [2016, may, 12]],
      ['tomorrow afternoon', [2016, may, 12]],
      ['tomorrow evening', [2016, may, 12]],
      ['tomorrow night', [2016, may, 12]],
      ['tomorrow late night', [2016, may, 12]],
      ['tomorrow late at night', [2016, may, 12]],
    ],
  },
  {
    today: [2016, september, 28],
    tests: [
      ['saturday morning', [2016, october, 1]],
      ['saturday early in the day', [2016, october, 1]],
      ['saturday am', [2016, october, 1]],
      ['saturday pm', [2016, october, 1]],
      ['saturday noon', [2016, october, 1]],
      ['saturday afternoon', [2016, october, 1]],
      ['saturday evening', [2016, october, 1]],
      ['saturday night', [2016, october, 1]],
      ['saturday late night', [2016, october, 1]],
      ['saturday late at night', [2016, october, 1]],
    ],
  },
  {
    //this/next/last
    today: [2016, october, 4], //a tuesday
    tests: [
      //(implicit)
      ['wednesday', [2016, october, 5]],
      ['thurs', [2016, october, 6]],
      ['fri', [2016, october, 7]],
      ['sat', [2016, october, 8]],
      ['sunday', [2016, october, 9]],
      ['monday', [2016, october, 10]],
      ['tuesday', [2016, october, 11]],
      //this
      ['this wednesday', [2016, october, 5]],
      ['this thurs', [2016, october, 6]],
      ['this friday', [2016, october, 7]],
      ['this saturday', [2016, october, 8]],
      ['this sunday', [2016, october, 9]],
      ['this monday', [2016, october, 10]],
      ['this tuesday', [2016, october, 11]],
      //next
      ['next wednesday', [2016, october, 12]],
      ['next thurs', [2016, october, 13]],
      ['next friday', [2016, october, 14]],
      ['next saturday', [2016, october, 15]],
      ['next sunday', [2016, october, 9]], //this=next here
      ['next monday', [2016, october, 10]],
      ['next tuesday', [2016, october, 11]],
      //last
      ['last wednesday', [2016, september, 28]],
      ['last thurs', [2016, september, 29]],
      ['last friday', [2016, september, 30]],
      ['last saturday', [2016, october, 1]],
      ['last sunday', [2016, october, 2]],
      ['last monday', [2016, october, 3]],
      ['last tuesday', [2016, september, 27]],

      //same logic for months
      ['this october', [2016, october, 1]],
      ['next october', [2017, october, 1]],
      ['last october', [2015, october, 1]],

      ['this september', [2017, september, 1]],
      ['next september', [2017, september, 1]], //this=next
      ['last september', [2016, september, 1]],

      ['this december', [2016, december, 1]],
      ['next december', [2016, december, 1]], //this=next
      ['last december', [2015, december, 1]],

      //same logic for layups
      ['this month', [2016, october, 1]],
      ['next month', [2016, november, 1]],
      ['last month', [2016, september, 1]],
      ['this day', [2016, october, 4]],
      ['next day', [2016, october, 5]],
      ['last day', [2016, october, 3]],
      ['this week', [2016, october, 3]],
      ['next week', [2016, october, 10]],
      ['last week', [2016, september, 26]],
      ['this year', [2016, january, 1]],
      ['next year', [2017, january, 1]],
      ['last year', [2015, january, 1]],
      ['this weekend', [2016, october, 8]],
      ['next weekend', [2016, october, 15]],
      ['last weekend', [2016, october, 1]],
      ['this quarter', [2016, october, 1]],
      ['next quarter', [2017, january, 1]],
      ['last quarter', [2016, july, 1]],
    ],
  },
  {
    //times
    today: [2017, october, 7, 6], //friday at 6am
    tests: [
      ['today', [2017, october, 7]],
      ['tonight', [2017, october, 7]],
      ['this morning', [2017, october, 7]],
      ['this evening', [2017, october, 7]],
      ['this afternoon', [2017, october, 7]],
      ['7pm this afternoon', [2017, october, 7]],
      ['2:00 in the morning', [2017, october, 7]],
      // ['2:00pm today', [2017, october, 7]],
      ['this day', [2017, october, 7]],
      ['5pm this evening', [2017, october, 7]],
      ['tonight at 5pm', [2017, october, 7]],
      ['sometime during today', [2017, october, 7]],
      ['dinnertime', [2017, october, 7]],
      // ['after lunch', [2017, october, 7]],
      ['this night', [2017, october, 7]],
      ['this morning', [2017, october, 7]],
      //tomorrow
      // ['in the morning', [2017, october, 8]],
      // ['5am in the morning', [2017, october, 8]],
      ['tomorrow in the morning', [2017, october, 8]],
      ['tmrw morning', [2017, october, 8]],
      // ['5 oclock in the morning', [2017, october, 8]],
      ['dinnertime tomorrow', [2017, october, 8]],
      ['tomorrow in the afternoon', [2017, october, 8]],
      ['in the evening tomorrow', [2017, october, 8]],
      // ['in the early evening tomorrow', [2017, october, 8]],
      // ['after today', [2017, october, 8]],
      // ['after tonight', [2017, october, 8]],
    ],
  },
  {
    today: [2016, october, 1],
    tests: [
      ['on the 1st', [2016, october, 1]],
      ['on the 21st', [2016, october, 21]],
      ['on the 2nd', [2016, october, 2]],
      ['on the 22nd', [2016, october, 22]],
      ['on the 3rd', [2016, october, 3]],
      ['on the 23rd', [2016, october, 23]],
    ],
  },
  {
    today: [2016, october, 15],
    tests: [
      ['on the 1st', [2016, november, 1]],
      ['on the fourteenth', [2016, november, 14]],
      ['on the sixteenth', [2016, october, 16]],
      ['on the 20th', [2016, october, 20]],
      ['on the 30th', [2016, october, 30]],
      ['on the 10th of october', [2016, october, 10]],
      ['on the 10th october', [2016, october, 10]],
      ['on october 10th', [2016, october, 10]],
      ['on october the 10th', [2016, october, 10]],
    ],
  },
  {
    today: [2016, october, 15], //tricky years
    tests: [
      ['october 10th this year', [2016, october, 10]],
      ['november 10th this year', [2016, november, 10]],

      ['november 10th 2017', [2017, november, 10]],
      ['november 10th 2022', [2022, november, 10]],
      ['november 10th 1998', [1998, november, 10]],
      ['nov 10th, 1998', [1998, november, 10]],

      ['november 10th next year', [2017, november, 10]],
      ['november 10th in a year', [2017, november, 10]],
      // ['november 10th a year from now', [2017, november, 10]],
      ['november 10th in two years', [2018, november, 10]],

      ['next year on june 10th', [2017, june, 10]],
      ['this year on june 10th', [2016, june, 10]],
      ['last year on june 10th', [2015, june, 10]],

      ['april fools 2019', [2019, april, 1]],
      ['april fools next year', [2017, april, 1]],

      ['next year in june', [2017, june, 1]],
      // ['next year after june', [2017, july, 1]],
    ],
  },
  {
    today: [2016, november, 13],
    tests: [
      ['in a week', [2016, november, 20]],
      ['in about one week', [2016, november, 20]],
      ['in basically one week from now', [2016, november, 20]],
      ['on a week from now', [2016, november, 20]],
      ['a week from today', [2016, november, 20]],
      ['about a week following today', [2016, november, 20]],
      ['a week and a half from now', [2016, november, 23]],
      ['about a week and a half from now', [2016, november, 23]],
      ['starting a week and a half after today', [2016, november, 23]],
      ['a month from now', [2016, december, 13]],
    ],
  },
  {
    today: [2016, august, 1],
    tests: [
      ['a month from now', [2016, september, 1]],
      ['a month and a half from now', [2016, september, 12]],
      ['a year from now', [2017, august, 1]],
      ['a year and a half from now', [2018, february, 1]],
      ['one year and a half from now', [2018, february, 1]],
      // ['one and a half years from now', [2018, february, 1]],
    ],
  },
]

test('start dates', t => {
  Object.keys(tests).forEach(k => {
    const context = {
      today: tests[k].today,
      timezone: 'Canada/Eastern',
    }
    tests[k].tests.forEach(a => {
      let want = spacetime(a[1], context.timezone)
        .startOf('day')
        .iso()
      let json = nlp(a[0])
        .dates(context)
        .json()[0]
      let start = json.date.start
      t.equal(start, want, a[0])
    })
  })
  t.end()
})
