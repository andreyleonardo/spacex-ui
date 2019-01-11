const _Date = Date;

const mockDate = (date = '2018-10-10') => {
  const DATE_TO_USE = new Date(date);
  global.Date = jest.fn(() => DATE_TO_USE);
  global.Date.UTC = _Date.UTC;
  global.Date.parse = _Date.parse;
  global.Date.now = _Date.now;
};

const clearMock = () => { global.Date = _Date; };

export { mockDate, clearMock };
