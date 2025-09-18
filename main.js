__DELETE_ME__

import * as THREE from 'three';
import { scene, camera, renderer, resizeRenderer, createLights, initOrbitControls, getOrbitControls, mountRenderer } from './scene.js';
import { createScenery } from './entities/scenery.js';
import { createWaterfall, updateWaterfall } from './entities/waterfall.js';
import { initControls } from './systems/controls.js';
import { initGame, updateGame } from './systems/game.js';
import { initDevTools } from './systems/dev.js';

const scenery = createScenery(); scene.add(scenery);
const waterfall = createWaterfall(); scene.add(waterfall);
createLights(scene);

initDevTools(scene); initGame(scene); initControls(scene, camera);

mountRenderer(document.getElementById('game-container'));
window.addEventListener('resize', resizeRenderer);

function animate() {
  requestAnimationFrame(animate);
  const controls = getOrbitControls(); if (controls?.enabled) controls.update();
  updateWaterfall(waterfall); updateGame(scene);
  renderer.render(scene, camera);
}
animate();

