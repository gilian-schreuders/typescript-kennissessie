type LastigType = {
  heeftNested?: {
    nogEenNested?: {
      alWeerEenNested?: {
        stop: boolean;
      };
    };
  };
};

const lastigObject: LastigType = {
  heeftNested: {
    nogEenNested: {
      alWeerEenNested: {
        stop: true,
      },
    },
  },
};

/**
 * Erg omslachtig
 */
function getStopNietHandig(type: LastigType): boolean {
  if (
    type &&
    type.heeftNested &&
    type.heeftNested.nogEenNested &&
    type.heeftNested.nogEenNested.alWeerEenNested &&
    type.heeftNested.nogEenNested.alWeerEenNested.stop
  ) {
    return type.heeftNested.nogEenNested.alWeerEenNested.stop;
  }

  return false;
}

/**
 * Met Elvis:
 */
function getStopElvis(type: LastigType): boolean {
  if (type?.heeftNested?.nogEenNested?.alWeerEenNested?.stop) {
    return type.heeftNested.nogEenNested.alWeerEenNested.stop;
  }

  return false;
}

// Korter:
function getStopElvisKorter(type: LastigType): boolean {
  return type?.heeftNested?.nogEenNested?.alWeerEenNested?.stop ?? false;
}
