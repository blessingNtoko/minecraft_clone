import * as THREE from 'three';

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
      this._parent.MarkDirty(this._prev.cell);
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

  PerformAction() {
    this.LoseFocus();

    const camera = this._parent._game._graphics._camera;
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(camera.quaternion);

    const ray = new THREE.Ray(camera.position, forward);
    const intersections = this._parent._FindIntersections(ray, 5);
    if (!intersections.length) {
      return;
    }

    const possibleCoords = [...intersections[0].voxel.position];
    possibleCoords[1] += 1;

    if (intersections[0].cell.HasVoxelAt(
      possibleCoords[0], possibleCoords[1], possibleCoords[2]
    )) {
      intersections[0].cell.InsertVoxel({
        position: [...possibleCoords],
        type: 'stone',
        visible: true
      }, true);
    }
  }

  Update(timeInSec) {
    const camera = this._parent._game._graphics._camera;
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(camera.quaternion);

    const ray = new THREE.Ray(camera.position, forward);
    const intersections = this._parent._FindIntersections(ray, 5);
    if (intersections.length) {
      if (this._prev) {
        this._parent.MarkDirty(this._prev.cell);
        this._prev.cell.RemoveVoxel(
          this._prev.cell._Key(
            this._prevVoxel.position[0],
            this._prevVoxel.position[1],
            this._prevVoxel.position[2],
          )
        )
      }
      const cur = intersections[0];
      const newVoxel = {
        position: [...cur.voxel.position],
        visible: true,
        type: 'stone',
        blinker: true
      };
      newVoxel.position[1] += 1;

      if (cur.cell.HasVoxelAt(newVoxel.position[0], newVoxel.position[1], newVoxel.position[2])) {
        return;
      }

      this._prev = cur;
      this._prevVoxel = newVoxel;
      this._blinkTimer -= timeInSec;
      if (this._blinkTimer < 0) {
        this._blinkTimer = 0.25;
        if (this._luminance == 1) {
          this._luminance = 2;
        } else {
          this._luminance = 1;
        }
      }
      const k = cur.cell._Key(newVoxel.position[0], newVoxel.position[1], newVoxel.position[2]);
      intersections[0].cell.InsertVoxel(newVoxel);
      intersections[0].cell._cells[k].luminance = this._luminance;
    }
  }
}

export class DeleteTool {
  constructor(parent) {
    this._parent = parent;
    this._cell = null;
    this._blinkTimer = 0;
    this._luminance = 1;
  }

  LoseFocus() {
    if (this._prev) {
      this._prev.cell._cells[this._prev.voxel.key].luminance = 1;
    }
  }
}
