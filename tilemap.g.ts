// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000101010101010101010101010100000001020202020202020202020201000000010202020202020202020202010000000102020202020202020202020100000001020202020202020202020201000000010202020202020202020202010000000102020202020202020202020100000001020202010101010101010101000000010202010000000000000000000000000102020100000000000000000000000001020201000000000000000000000000010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . 2 2 2 2 2 2 2 2 2 . . 
. 2 . . 2 . . . . . . . . . . . 
. 2 . . 2 . . . . . . . . . . . 
. 2 . . 2 . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.tilePath5], TileScale.Sixteen);
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
