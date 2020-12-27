export class InsertTool {
  constructor(parent) {
    this._parent = parent;
    this._cell = null;
    this._prev = null;
    this._blinkTimer = 0;
    this._luminance = 1;
  }

  LoseFocus() {
    if (this.prev) {
      this._parent.MarkDirty(this.prev.cell);
      this._prev.cell.RemoveVoxel(
        this._prev.cell._Key(
          this._prevVoxel.position[0],
          this._prevVoxel.position[1],
          this._prevVoxel.position[2],
        )
      );
      this._prev = null;
      this._prevVoxel = null;
    }
  }
}