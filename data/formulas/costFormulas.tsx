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

export const craftingCosts: Record<string, (purchasedProjects: number) => number> = {
    0: (purchasedProjects) =>
      5e2 * (1.1 + (0.1 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 5, 0) / 500 )),
    1: (purchasedProjects) =>
        5e3 * (2.9 + ( 0.3 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 199, 0) / 500)),
    2: (purchasedProjects) =>
      5e4 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    3: (purchasedProjects) =>
      5e7 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    4: (purchasedProjects) =>
      5e10 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    5: (purchasedProjects) =>
      5e13 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    6: (purchasedProjects) =>
      5e16 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    7: (purchasedProjects) =>
      5e19 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    8: (purchasedProjects) =>
      5e22 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    9: (purchasedProjects) =>
      5e25 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    10: (purchasedProjects) =>
      5e28 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
    11: (purchasedProjects) =>
      5e31 * (20 + (10 * purchasedProjects)) ** (purchasedProjects * (1 + Math.max(purchasedProjects - 99, 0 ) / (1000 / 3))),
}

export const salvageUpgradesCost: Record<string, (upgradeLevel: number) => number> = {
  0: (upgradeLevel) =>
    1 * (upgradeLevel) ** (upgradeLevel * (1 + Math.max(upgradeLevel - 5, 0) / 500 )),
  1: (upgradeLevel) =>
    2 * (upgradeLevel) ** (upgradeLevel * (1 + Math.max(upgradeLevel - 5, 0) / 500 )),
  2: (upgradeLevel) =>
    3 * (upgradeLevel) ** (upgradeLevel * (1 + Math.max(upgradeLevel - 5, 0) / 500 )),
  3: (upgradeLevel) =>
    4 * (upgradeLevel) ** (upgradeLevel * (1 + Math.max(upgradeLevel - 5, 0) / 500 )),
  4: (upgradeLevel) =>
    5 * (upgradeLevel) ** (upgradeLevel * (1 + Math.max(upgradeLevel - 5, 0) / 500 )),
  5: (upgradeLevel) =>
    6 * (upgradeLevel) ** (upgradeLevel * (1 + Math.max(upgradeLevel - 5, 0) / 500 )),
  6: (upgradeLevel) =>
    7 * (upgradeLevel) ** (upgradeLevel * (1 + Math.max(upgradeLevel - 5, 0) / 500 )),
  7: (upgradeLevel) =>
    8 * (upgradeLevel) ** (upgradeLevel * (1 + Math.max(upgradeLevel - 5, 0) / 500 )),
  8: (upgradeLevel) =>
    9 * (upgradeLevel) ** (upgradeLevel * (1 + Math.max(upgradeLevel - 5, 0) / 500 )),
  9: (upgradeLevel) =>
    10 * (upgradeLevel) ** (upgradeLevel * (1 + Math.max(upgradeLevel - 5, 0) / 500 )),
  10: (upgradeLevel) =>
    11 * (upgradeLevel) ** (upgradeLevel * (1 + Math.max(upgradeLevel - 5, 0) / 500 )),
}