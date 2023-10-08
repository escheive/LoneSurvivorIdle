export const generatorCosts: Record<string, (purchasedGenerators: number) => number> = {
  0: (purchasedGenerators) =>
    (1 + 0.3 * purchasedGenerators) ** (1 + purchasedGenerators * 0.15),
  1: (purchasedGenerators) =>
    100 * ( 10 * purchasedGenerators) ** (purchasedGenerators * 0.2),
  2: (purchasedGenerators) =>
    1e4 * ( 10 * purchasedGenerators) ** (purchasedGenerators * 0.2),
  3: (purchasedGenerators) =>
    1e6 * ( 10 * purchasedGenerators) ** (purchasedGenerators * 0.2),
  4: (purchasedGenerators) =>
    1e9 * ( 10 * purchasedGenerators) ** (purchasedGenerators * 0.2),
  5: (purchasedGenerators) =>
    1e12 * ( 10 * purchasedGenerators) ** (purchasedGenerators * 0.2),
  6: (purchasedGenerators) =>
    1e15 * ( 10 * purchasedGenerators) ** (purchasedGenerators * 0.2),
  7: (purchasedGenerators) =>
    1e18 * ( 10 * purchasedGenerators) ** (purchasedGenerators * 0.2),
  8: (purchasedGenerators) =>
    1e21 * ( 10 * purchasedGenerators) ** (purchasedGenerators * 0.2),
  9: (purchasedGenerators) =>
    1e24 * ( 10 * purchasedGenerators) ** (purchasedGenerators * 0.2),
}

export const craftingCosts: Record<string, (purchasedProjects: number) => number> = {
    0: (purchasedProjects) =>
      500 * (1 + 0.3 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
    1: (purchasedProjects) =>
      5e3 * (1 + 0.4 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
    2: (purchasedProjects) =>
      5e4 * (1 + 0.5 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
    3: (purchasedProjects) =>
      5e7 * (1 + 0.6 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
    4: (purchasedProjects) =>
      5e10 * (1 + 0.7 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
    5: (purchasedProjects) =>
      5e13 * (1 + 0.8 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
    6: (purchasedProjects) =>
      5e16 * (1 + 0.9 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
    7: (purchasedProjects) =>
      5e19 * (1 + 1 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
    8: (purchasedProjects) =>
      5e22 * (1 + 1.1 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
    9: (purchasedProjects) =>
      5e25 * (1 + 1.2 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
    10: (purchasedProjects) =>
      5e28 * (1 + 1.3 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
    11: (purchasedProjects) =>
      5e31 * (1 + 1.4 * purchasedProjects) ** (0.6 + purchasedProjects * 0.4),
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