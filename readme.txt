Mission:

- create a basic vue.js app which will display the ship name, its captain and two options. warp out or fall back.
- It will also display the current status of the ship.
- give user an option to select the ship, and warp the ship out of fedration space. By warping, shipXO must be replaced with shipFO.

Execution:

- app and ship component

- app will hold all the necessary information of the system.

- ship component will hold the data required for the system to work.
- using click and hover events select the ship.
- when wrap is clicked, the captain is replaced with shipFO. Also, the ship status is changed from docked to warp.

- component emits when warp is clicked this will inturn trigger function to change ship status.