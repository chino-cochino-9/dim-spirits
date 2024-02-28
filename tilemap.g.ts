// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level5":
            case "level5":return tiles.createTilemap(hex`2000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010000010101010101010101000000000000000000010202020202020202020201000001020202020202020100000000000000000001020202020202020202020100000102020202020202010000000000000000000102020202020202020202010000010202020202020201000000000000000000010202020202020202020201010101020202020202020100000000000000000001020202020202020202020102020202020202020202010000000000000000000102020202020202020202010202020202020202020201000000000000000000010202020202020202020202020202020202020202020100000000000000000001020202020202020202020102020202020202020202010000000000000000000102020202020202020202010202020202020202020201000000000000000000010202020202020202020201020202020202020202020100000000000000000001010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
....2..........2..........2.....
....2..........2..........2.....
....2..........2..........2.....
....22222222222222222222222.....
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast1], TileScale.Sixteen);
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
