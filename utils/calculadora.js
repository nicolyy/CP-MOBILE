export const calcularParcela = (valor, taxaJuros, numParcelas, valorEntrada) => {
  const i = parseFloat(taxaJuros) / 100;
  const n = parseInt(numParcelas);
  const PV = valor - valorEntrada;
  const CF = (i * Math.pow((1 + i), n)) / (Math.pow((1 + i), n) - 1);
  return {
    PMT1: PV * CF,
    PMT2: PV * CF,
    PMT3: PV * CF,
  };
};