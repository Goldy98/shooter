// export class GameConfig {
//   static areaDimension = 4;
// }

export type Coords = {
  x: number;
  y: number;
};

export class AbstractCell {
  containEnnemy: boolean;

  constructor(readonly coords: Coords) {
    this.containEnnemy = false;
  }

  makeEnnemyAppear() {
    this.containEnnemy = true;
  }

  makeEnnemyDisappear() {
    this.containEnnemy = false;
  }
}

export class AbstractGameArea {
  cells: AbstractCell[] = [];
  currentEnnemyLandIndex: number | null = null;
  score = {
    ennemyKilled: 0,
    time: 0,
  };

  constructor(readonly areaDimension: number) {
    for (let i = 1; i < areaDimension + 1; i++) {
      for (let j = 1; j < areaDimension + 1; j++) {
        this.cells.push(
          new AbstractCell({
            x: i,
            y: j,
          })
        );
      }
    }

    console.table(this.cells);

    // this.#setUpEnnemyAppearance();
  }

  killEnnemy() {
    this.score.ennemyKilled++;
  }

  makeEnnemyAppear(atIndex: number) {
    console.log("atIndex:", atIndex);
    if (this.currentEnnemyLandIndex !== null)
      this.cells[this.currentEnnemyLandIndex].makeEnnemyDisappear();
    this.cells[atIndex].makeEnnemyAppear();
    this.currentEnnemyLandIndex = atIndex;
  }

  findIndexByCoords(coords: Coords) {
    const { x, y } = coords;
    return this.cells.findIndex((el) => el.coords.x === x && el.coords.y === y);
  }

  findCellByCoords(coords: Coords): AbstractCell {
    console.log("coords:", coords);
    const { x, y } = coords;
    const theCell = this.cells.find(
      (el) => el.coords.x === x && el.coords.y === y
    );
    if (!theCell)
      throw new Error(
        "Unknow cell with coordinates: " + JSON.stringify(coords)
      );

    return theCell;
  }
}
