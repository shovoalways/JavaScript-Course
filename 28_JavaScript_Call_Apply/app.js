/*
 * JavaScript Call and Apply Method
 */

const greenLine = {
  bus: 'Green Line Paribahan',
  bCode: 'GL',
  ticket: [],
  book(setNumber, name) {
    console.log(
      `${name} booked a seat on ${this.bus} ticket ${this.bCode}-${setNumber}`
    );
    this.ticket.push({ ticketInfo: `${this.bCode}-${setNumber}`, name });
  },
};
greenLine.book('C1', 'Ali Hossain');
greenLine.book('C2', 'Rayyan Hossain');
console.log(greenLine);

const shohagh = {
  bus: 'Shohagh Paribahan',
  bCode: 'SH',
  ticket: [],
};

const book = greenLine.book;

// book('B1', 'Kawcher Hossain');

book.call(shohagh, 'B1', 'Kawcher Hossain');
book.call(shohagh, 'B2', 'Durjoy Hossain');
book.call(greenLine, 'B2', 'Durjoy Hossain');
console.log(shohagh);

const hanif = {
  bus: 'Hanif Paribahan',
  bCode: 'HN',
  ticket: [],
};

book.call(hanif, 'B2', 'Durjoy Hossain');

// Apply

const ticketData = ['B2', 'Durjoy Hossain'];
book.apply(greenLine, ticketData);
book.apply(hanif, ['A2', 'Ahad Hossain']);
