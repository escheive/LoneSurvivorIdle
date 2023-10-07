export const generatorCosts: Record<string, (purchasedGenerators: number) => number> = {
  0: (purchasedGenerators) =>
    3 * (1.065 + (0.004 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 999, 0) / 1000)),
  1: (purchasedGenerators) =>
    2e3 * (2.9 + ( 0.3 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 199, 0) / 500)),
  2: (purchasedGenerators) =>
    1e8 * (20 + (10 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 99, 0 ) / (1000 / 3))),
  3: (purchasedGenerators) =>
    4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
  4: (purchasedGenerators) =>
    5e46 * (220 + 80 * purchasedGenerators) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 49, 0) / 200)),
  5: (purchasedGenerators) =>
    6e200 * (6e5 + 6e5 * purchasedGenerators) ** (purchasedGenerators * (1 + purchasedGenerators / (500 / 3))),
  6: (purchasedGenerators) =>
    47e500 * (7e7 + 7e7 * purchasedGenerators) ** (purchasedGenerators * (1 + purchasedGenerators / 50)),
  7: (purchasedGenerators) =>
    4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
  8: (purchasedGenerators) =>
    4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
  9: (purchasedGenerators) =>
    4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
}
// export const generatorCosts: Record<string, (purchasedGenerators: number) => number> = {
//   generatorOne: (purchasedGenerators) =>
//     3 * (1.065 + (0.004 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 999, 0) / 1000)),
//   generatorTwo: (purchasedGenerators) =>
//     2e3 * (2.9 + ( 0.3 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 199, 0) / 500)),
//   generatorThree: (purchasedGenerators) =>
//     1e8 * (20 + (10 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 99, 0 ) / (1000 / 3))),
//   generatorFour: (purchasedGenerators) =>
//     4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
//   generatorFive: (purchasedGenerators) =>
//     5e46 * (220 + 80 * purchasedGenerators) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 49, 0) / 200)),
//   generatorSix: (purchasedGenerators) =>
//     6e200 * (6e5 + 6e5 * purchasedGenerators) ** (purchasedGenerators * (1 + purchasedGenerators / (500 / 3))),
//   generatorSeven: (purchasedGenerators) =>
//     47e500 * (7e7 + 7e7 * purchasedGenerators) ** (purchasedGenerators * (1 + purchasedGenerators / 50)),
//   generatorEight: (purchasedGenerators) =>
//     4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
//   generatorNine: (purchasedGenerators) =>
//     4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
//   generatorTen: (purchasedGenerators) =>
//     4e18 * (50 + (30 * purchasedGenerators)) ** (purchasedGenerators * (1 + Math.max(purchasedGenerators - 74, 0) / 200)),
// }

export const craftingCosts: Record<string, (purchasedProjects: number) => number> = {
    scrapCompressor: (purchasedProjects) =>
      5e2 * (1.1 + (0.1 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 5, 0) / 500 )),
    scavengersToolkit: (purchasedProjects) =>
        5e3 * (2.9 + ( 0.3 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 199, 0) / 500)),
    scrapAggregator: (purchasedProjects) =>
      5e4 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    resourceRefinery: (purchasedProjects) =>
      5e7 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    recyclingPlant: (purchasedProjects) =>
      5e10 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    materialFabricator: (purchasedProjects) =>
      5e13 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    materialSynthesizer: (purchasedProjects) =>
      5e16 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    techSalvageMatrix: (purchasedProjects) =>
      5e19 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    techInnovator: (purchasedProjects) =>
      5e22 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    innovationLab: (purchasedProjects) =>
      5e25 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    nexusCoreIntegration: (purchasedProjects) =>
      5e28 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    generatorOverclocker: (purchasedProjects) =>
      5e31 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
      masterScavengersBlueprint: (purchasedProjects) =>
      5e34 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
}