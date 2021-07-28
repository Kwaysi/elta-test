function importAll(r: object) {
  let images = {};
  // @ts-ignore
  r.keys().map((item) => {
    // @ts-ignore
    return (images[item.replace('./', '')] = r(item));
  });
  return images;
}

// @ts-ignore
export const images = importAll(require.context('./', false, /\.(svg|png)$/));
