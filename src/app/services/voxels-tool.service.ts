import { Injectable } from '@angular/core';
import { InsertTool, DeleteTool } from './voxelClasses/classes.js';

@Injectable({
  providedIn: 'root'
})
export class VoxelsToolService {

  constructor() { }

  public voxels_tool() {
    return {
      InsertTool: InsertTool,
      DeleteTool: DeleteTool
    };
  }
}
