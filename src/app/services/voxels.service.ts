import { Injectable } from '@angular/core';
import * as THREE from 'three';
import * as SimplexNoise from 'simplex-noise';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { MathService } from './math.service';
import { UtilsService } from './utils.service';
import { VoxelsShaderService } from './voxels-shader.service';
import { VoxelsToolService } from './voxels-tool.service';

@Injectable({
  providedIn: 'root'
})
export class VoxelsService {

  constructor(
    private math: MathService,
    private utils: UtilsService,
    private voxelShader: VoxelsShaderService,
    private voxelTool: VoxelsToolService
  ) { }

  public voxels() {
    const voxelHeight = 128;
    const oceanLevel = Math.floor(voxelHeight * .12);
    const beachLevel = oceanLevel + 2;
    const snowLevel = Math.floor(voxelHeight * .8);
    const mountainLevel = Math.floor(voxelHeight * .5);

    const N1 = new SimplexNoise();
    const N2 = new SimplexNoise();
    const N3 = new SimplexNoise();
  }
}
