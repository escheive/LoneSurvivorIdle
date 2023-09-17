export const generatorCosts: Record<string, (purchasedGenerators: number) => number> = {
  generatorOne: (purchasedGenerators) =>
    3 * (1.065 + (0.004 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 999, 0) / 1000)),
  generatorTwo: (purchasedGenerators) =>
    2e3 * (2.9 + ( 0.3 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 199, 0) / 500)),
  generatorThree: (purchasedGenerators) =>
    1e8 * (20 + (10 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 99, 0 ) / (1000 / 3))),
  generatorFour: (purchasedGenerators) =>
    4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
  generatorFive: (purchasedGenerators) =>
    5e46 * (220 + 80 * purchasedGenerators) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 49, 0) / 200)),
  generatorSix: (purchasedGenerators) =>
    6e200 * (6e5 + 6e5 * purchasedGenerators) ** (purchasedGenerators * (1 + purchasedGenerators / (500 / 3))),
  generatorSeven: (purchasedGenerators) =>
    47e500 * (7e7 + 7e7 * purchasedGenerators) ** (purchasedGenerators * (1 + purchasedGenerators / 50)),
  generatorEight: (purchasedGenerators) =>
    4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
  generatorNine: (purchasedGenerators) =>
    4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
  generatorTen: (purchasedGenerators) =>
    4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
}