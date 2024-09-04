// priority: 0

StartupEvents.modifyCreativeTab('create:create', event => {
    event.add('balancedflight:flight_anchor')
})

/*
StartupEvents.registry('creative_mode_tab', event => {
    event.create('dirt').icon(() => 'minecraft:dirt').content(() => [
        'minecraft:dirt',
        'minecraft:grass_block'
    ])
})
*/
/*
let banList=[
    'minecraft:carrot'
]

for (let [a,b] in banlist) {
    StartupEvents.modifyCreativeTab(b, event => {
        for (let [c,d] in banlist) {
            event.remove(d)
        }
    });
};
*/
/*
StartupEvents.modifyCreativeTab('minecraft:redstone_blocks', event => {
    event.add('kubejs:machine_block')
    event.icon = 'kubejs:machine_block'
    event.displayName = Text.green('Machine Blocks')
})
*/

console.info('Loaded Kube.js creative tabs)')