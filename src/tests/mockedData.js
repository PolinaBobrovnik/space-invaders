/* eslint-disable max-len */
const mockedRadar =
  '----o--oo----o--ooo--ooo---------o---oo-o----oo---o--o---------o----o------o----------------o--o--o-\n--o-o-----oooooooo-oooooo-------o----o------ooo-o---o--o----o------o--o---ooo-----o--oo-o------o----\n--o--------oo-ooo-oo-oo-oo------------------ooooo-----o-----o------o---o--o--o-o-o------o----o-o-o--\n-------o--oooooo--o-oo-o--o-o-----oo--o-o-oo--o-oo-oo-o--------o-----o------o-ooooo---o--o--o-------\n------o---o-ooo-ooo----o------o-------o---oo-ooooo-o------o----o--------o-oo--ooo-oo-------------o-o\n-o--o-----o-o---o-ooooo-o-------o----o---------o-----o-oo-----------oo----ooooooo-ooo-oo------------\no-------------ooooo-o--o--o--o-------o--o-oo-oo-o-o-o----o-------------o--oooo--ooo-o----o-----o--o-\n--o-------------------------oo---------oo-o-o--ooo----o-----o--o--o----o--o-o-----o-o------o-o------\n-------------------o-----------------o--o---------------o--------o--oo-o-----oo-oo---o--o---o-----oo\n----------o----------o------------------o--o----o--o-o------------oo------o--o-o---o-----o----------\n------o----o-o---o-----o-o---------oo-o--------o---------------------------------o-o-o--o-----------\n---------------o-------------o-------o-------------------o-----o---------o-o-------------o-------oo-\n-o--o-------------o-o--------o--o--oo-------------o----ooo----o-------------o----------oo----o---o-o\n-o--o-------------o----oo------o--o-------o--o-----------o----o-----o--o----o--oo-----------o-------\n-o-----oo-------o------o---------------o--o----------o-----o-------o-----------o---o-o--oooooo-----o\n-o--------o-----o-----o---------oo----oo---o-----------o---o--oooo-oo--o-------o------oo--oo--o-----\n------------o-------------------o----oooo-------------oo-oo-----ooo-oo-----o-------o-oo-oooooooo---o\n-----------------------------------oooooooo---o-----o-------o--oooooo-o------------o-o-ooooooo-o----\n------------o------o-------o-------oo-oo--o--o---------o--o-o-o-ooooo-o--------------oo-o----o-oo-o-\n---o-o----------o--------oo----o----oooooooo-------o----o-o-o-o-----o-o-----o----------ooo-oo--o---o\n-o-o---------o-o---------------o--o--o--ooo---ooo-------o------oo-oo------------o--------o--o-o--o--\n-------oo---------------------------o-oo----------o------o-o-------o-----o----o-----o-oo-o-----o---o\n---o--------o-----o-------o-oo-----oo--oo-o----oo----------o--o---oo------oo----o-----o-------o-----\n---o--ooo-o---------o-o----o------------o---------o----o--o-------o-------------o----------------oo-\n---o------o----------------o----o------o------o---oo-----------o-------------o----------oo---------o\n--oo---------------o--o------o---o-----o--o-------------o------o-------o-----o-----o----o------o--o-\n-o-------o----------o-o-o-------o-----o--o-o-----------o-oo-----------o------o---------o-----o-o----\n----------o----o-------o----o--o------o------------o---o---------------oo----o-----ooo--------------\n----o--------oo----o-o----o--o------ooo----o-oooo---o--o-oo--------o-oo-----o-o---o-o--o-----oo-----\n------o--------o-ooooo----o---o--o-----o---------------o-o-------o-----o----------------------------\no-------oo----o--oooooo-o---o--o------oooo----------o-oo-------o---o----------o------oo-------------\n-o---o----------o--oo-oo-o---o-----o-o-----------------------oo--o------o------o--------------------\n-----oo-o-o-o---ooooooooo----o----o--------o--o---oo---o------------o----------o-o---o------o-o--oo-\n------o------o---ooo-o---------------------------o--o---o---o----o--o-------o-----o------o----o----o\n-------o----------ooo-o-----o----o---o--o-oo--o--o-o--o------o--o-oo---ooo------------------------o-\n-o-------o------o-o--ooo--o---o---oo-----o----o-------------o----o-ooo-o------o--o-o------o-o-------\n---oo--o---o-o---------o---o--------------o--o-----o-------o-----o--o---o-oo--------o----o----o-----\no------o----oo-o-----------oo--o---o--------o-o------o-------o-o------o-oo---------o-----oo---------\n----o--o---o-o-----------o---o------------o-------o----o--o--o--o-o---------------o-----------------\n-------oo--o-o-----o-----o----o-o--o----------------------o-------o------o----oo----ooo---------o---\no-----oo-------------------o--o-----o-----------o------o-------o----o-----------o----------------o--\n--o---o-------o------------o--------------------o----o--o-------------oo---o---------oo--------o----\n--o--------o---------o------------o------o-------o------------o-------o---o---------ooooo-----------\n------o--------------o-o-o---------o---o-------o--o-----o-------o-o----------o-----oo-ooo----------o\n--o---------------o----o--oo-------------o---------o-------------------oo---------oo-o-ooo----------\n-o-----------o------ooo----o----------------ooo-----o--------o--o---o-----------o-o-oooooo--------oo\n-o---o-------o---o-oooo-----o-------------------o----oo-----------------o--o--------o--o------o--o--\n-------o---o------oooooo--o----ooo--o--------o-------o----------------------------oo-oo-o--o--------\no--oo------o-----oo--o-oo------------oo--o------o--o-------------oo----o------------oooo-o------oo--\n-----o----------ooooooooo--------------oo--------------oo-----o-----o-o--o------o----------o----o---';

const mockedInvaders = [
  '---oo---\n--oooo--\n-oooooo-\noo-oo-oo\noooooooo\n--o--o--\n-o-oo-o-\no-o--o-o',
  '--o-----o--\n---o---o---\n--ooooooo--\n-oo-ooo-oo-\nooooooooooo\no-ooooooo-o\no-o-----o-o\n---oo-oo---',
];

const mockedResult =
  '----o--oo----o--ooo--ooo---------o---oo-o----xx---o--o---------o----o------o----------------o--o--o-\n--o-o-----oooooooo-oooooo-------o----o------xxxxo---o--o----o------o--o---oov-----v--oo-o------o----\n--o--------oo-ooo-oo-oo-oo-----------------xxxxxx-----o-----o------o---o--o--v-o-v------o----o-o-o--\n-------o--oooooo--o-oo-o--o-o-----oo--o-o-xx-xx-xx-oo-o--------o-----o------vvvvvvv---o--o--o-------\n------o---o-ooo-ooo----o------o-------o---xxxxxxxx-o------o----o--------o-ovv-vvv-vv-------------o-o\n-o--o-----o-o---o-ooooo-o-------o----o------x--x-----o-oo-----------oo----vvvvvvvvvvv-oo------------\no-------------ooooo-o--o--o--o-------o--o-ox-xx-x-o-o----o-------------o--vovvvvvvv-v----o-----o--o-\n--o-------------------------oo---------oo-x-x--xox----o-----o--o--o----o--v-v-----v-v------o-o------\n-------------------o-----------------o--o---------------o--------o--oo-o-----vv-vv---o--o---o-----oo\n----------o----------o------------------o--o----o--o-o------------oo------o--o-o---o-----o----------\n------o----o-o---o-----o-o---------oo-o--------o---------------------------------o-o-o--o-----------\n---------------o-------------o-------o-------------------o-----o---------o-o-------------o-------oo-\n-o--o-------------o-o--------o--o--oo-------------o----ooo----o-------------o----------vo----v---o-o\n-o--o-------------o----oo------o--o-------o--o-----------o----v-----v--o----o--oo-------v---v-------\n-o-----oo-------o------o---------------o--o----------o-----o---v---v-----------o---o-o-vvvvvvv-----o\n-o--------o-----o-----o---------oo----xx---o-----------o---o--vvvvvvv--o-------o------vv-vvv-vv-----\n------------o-------------------o----xxxx-------------oo-oo--vv-vvv-vv-----o-------o-vvvvvvvvvvv---o\n-----------------------------------oxxxxxxo---o-----o-------vvvvvvvvvvv------------o-v-vvvvvvv-v----\n------------o------o-------o-------xx-xx-xx--o---------o--o-v-vvvvvvv-v--------------vovo----v-vo-o-\n---o-o----------o--------oo----o---xxxxxxxxo-------o----o-o-v-v-----v-v-----o----------ovv-vv--o---o\n-o-o---------o-o---------------o--o--x--xoo---ooo-------o------vv-vv------------o--------o--o-o--o--\n-------oo---------------------------x-xx-x--------o------o-o-------o-----o----o-----o-oo-o-----o---o\n---o--------o-----o-------o-oo-----xox-ox-x----oo----------o--o---oo------oo----o-----o-------o-----\n---o--ooo-o---------o-o----o------------o---------o----o--o-------o-------------o----------------oo-\n---o------o----------------o----o------o------o---oo-----------o-------------o----------oo---------o\n--oo---------------o--o------o---o-----o--o-------------o------o-------o-----o-----o----o------o--o-\n-o-------o----------o-o-o-------o-----o--o-o-----------o-oo-----------o------o---------o-----o-o----\n----------o----o-------o----o--o------o------------o---o---------------oo----o-----ooo--------------\n----o--------oo----xxo----o--o------ooo----o-oooo---o--o-oo--------o-oo-----o-o---o-o--o-----oo-----\n------o--------o-oxxxx----o---o--o-----o---------------o-o-------o-----o----------------------------\no-------oo----o--xxxxxx-o---o--o------oooo----------o-oo-------o---o----------o------oo-------------\n-o---o----------xx-xx-xx-o---o-----o-o-----------------------oo--o------o------o--------------------\n-----oo-o-o-o---xxxxxxxxo----o----o--------o--o---oo---o------------o----------o-o---o------o-o--oo-\n------o------o---oxo-x---------------------------o--o---o---o----o--o-------o-----o------o----o----o\n-------o---------xoxx-x-----o----o---o--o-oo--o--o-o--o------o--o-oo---ooo------------------------o-\n-o-------o------x-x--xox--o---o---oo-----o----o-------------o----o-ooo-o------o--o-o------o-o-------\n---oo--o---o-o---------o---o--------------o--o-----o-------o-----o--o---o-oo--------o----o----o-----\no------o----oo-o-----------oo--o---o--------o-o------o-------o-o------o-oo---------o-----oo---------\n----o--o---o-o-----------o---o------------o-------o----o--o--o--o-o---------------o-----------------\n-------oo--o-o-----o-----o----o-o--o----------------------o-------o------o----oo----ooo---------o---\no-----oo-------------------o--o-----o-----------o------o-------o----o-----------o----------------o--\n--o---o-------o------------o--------------------o----o--o-------------oo---o---------xx--------o----\n--o--------o---------o------------o------o-------o------------o-------o---o---------xxxxo-----------\n------o--------------o-o-o---------o---o-------o--o-----o-------o-o----------o-----xxxxxx----------o\n--o---------------o----o--oo-------------o---------o-------------------oo---------xx-xxoxx----------\n-o-----------o------ooo----o----------------ooo-----o--------o--o---o-----------o-xxxxxxxx--------oo\n-o---o-------o---o-oooo-----o-------------------o----oo-----------------o--o--------x--x------o--o--\n-------o---o------oooooo--o----ooo--o--------o-------o----------------------------ox-xx-x--o--------\no--oo------o-----oo--o-oo------------oo--o------o--o-------------oo----o----------x-xoox-x------oo--\n-----o----------ooooooooo--------------oo--------------oo-----o-----o-o--o------o----------o----o---';

module.exports = {mockedRadar, mockedInvaders, mockedResult};
