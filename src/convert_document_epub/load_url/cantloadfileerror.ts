export default class CantLoadFileError extends Error {
  constructor(url: string) {
    super(`Can't load file "${url}"`);
  }
}
