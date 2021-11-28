const sintaxisAgregar = require("./sintaxisAgregar");

test('sintaxisAgregar("","")', () => {
    expect(sintaxisAgregar("","")).toBe(false);
});

test('sintaxisAgregar("papas","")', () => {
    expect(sintaxisAgregar("papas","")).toBe(false);
});

test('sintaxisAgregar("",120)', () => {
    expect(sintaxisAgregar("",120)).toBe(false);
});

test('sintaxisAgregar("",-20)', () => {
    expect(sintaxisAgregar("",-20)).toBe(false);
});

test('sintaxisAgregar("escalera",-500)', () => {
    expect(sintaxisAgregar("escalera",-500)).toBe(false);
});

test('sintaxisAgregar("sueldo",15000)', () => {
    expect(sintaxisAgregar("sueldo",15000)).toBe(true);
});
