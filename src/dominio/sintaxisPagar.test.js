const sintaxisPagar = require("./sintaxisPagar");

test('sintaxisPagar("","")', () => {
    expect(sintaxisPagar("","")).toBe(false);
});

test('sintaxisPagar("papas","")', () => {
    expect(sintaxisPagar("papas","")).toBe(false);
});

test('sintaxisPagar("gomitas",120)', () => {
    expect(sintaxisPagar("gomitas",120)).toBe(true);
});

test('sintaxisPagar("",-20)', () => {
    expect(sintaxisPagar("",-20)).toBe(false);
});

test('sintaxisPagar("celular",-5000)', () => {
    expect(sintaxisPagar("celular",-5000)).toBe(false);
});
