// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level5":
            case "level5":return tiles.createTilemap(hex`2000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010000010101010101010101000000000000000000010202020202020202020201000001020202020202020100000000000000000001020202020202020202020100000102020202020202010000000000000000000102020202020202020202010000010202020202020201000000000000000000010202020202020202020201010101020202020202020100000000000000000001020202020202020202020102020202020202020202010000000000000000000102020202020202020202010202020202020202020201000000000000000000010202020202020202020202020202020202020202020100000000000000000001020202020202020202020202020202020202020202010000000000000000000102020202020202020202010202020202020202020201000000000000000000010202020202020202020201020202020202020202020100000000000000000001020202020202020202020101020202020202020202010100000000000000000102020202020202020202020101020202020202020202010000000000000000010202020202020202020202020201020202020202020201010000000000000001010101020202020202020202020101020202020202020201000000000000000000000001010101010102020202020102020202020202020201000000000000000000000000000000010202020202010202020202020202020101000000000000000001010101010101020202020202020202020202020202020100000000000000010102020202020202020202020202020202020202020202010000000000000001020202020202020202020202020202020202020202020201000000000000000102020202020202020202020202010202020202020202020100000000000000010202020202020202020202020101020202020202020202010000000000000001020202020202020202020201010202020202020202020100000000000000000001010202020202020201010102020202020202020201010000000000000000000001010202020202010102020202020202020202020100000000000000000000000000010101010101020202020202020201010101000000000000000000000000000000000001010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
................................
................................
....222222222222..222222222.....
....2..........2..2.......2.....
....2..........2..2.......2.....
....2..........2..2.......2.....
....2..........2222.......2.....
....2..........2..........2.....
....2..........2..........2.....
....2.....................2.....
....2.....................2.....
....2..........2..........2.....
....2..........2..........2.....
....2..........22.........22....
....2...........22.........2....
....2.............2........22...
....2222..........22........2...
........222222.....2.........2..
.............2.....2.........22.
.......2222222................2.
......22......................2.
......2.......................2.
......2.............2.........2.
......2............22.........2.
......2...........22.........2..
.......22.......222.........22..
........22.....22...........2...
..........222222........2222....
.............222222222222.......
................................
................................
................................
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
