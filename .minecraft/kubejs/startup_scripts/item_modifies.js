// priority: 0

ItemEvents.modification(event => {

    // ----- / Stackable Amounts / ----- //

    event.modify('minecraft:ender_pearl', item => {
      item.maxStackSize = 48
    })
    event.modify('minecraft:bucket', item => {
        item.maxStackSize = 48
    })
    event.modify('exposure:color_film', item => {
        item.maxStackSize = 48
    })
    event.modify('exposure:black_and_white_film', item => {
        item.maxStackSize = 48
    })
    event.modify('minecraft:snowball', item => {
        item.maxStackSize = 48
    })
    event.modify('minecraft:egg', item => {
        item.maxStackSize = 48
    })
    event.modify('supplementaries:bomb_blue', item => {
        item.maxStackSize = 48
    })
    event.modify('supplementaries:bomb', item => {
        item.maxStackSize = 48
    })
    event.modify('etcetera:eggple', item => {
        item.maxStackSize = 48
    })
    event.modify('etcetera:golden_eggple', item => {
        item.maxStackSize = 48
    })
    event.modify('galosphere:silver_bomb', item => {
        item.maxStackSize = 48
    })
    event.modify('minecraft:cake', item => {
        item.maxStackSize = 64
    })
    event.modify('minecraft:potion', item => {
        item.maxStackSize = 16
    })
    event.modify('minecraft:splash_potion', item => {
        item.maxStackSize = 16
    })
    event.modify('minecraft:lingering_potion', item => {
        item.maxStackSize = 16
    })
    event.modify('minecraft:minecart', item => {
        item.maxStackSize = 16
    })



    // ----- / Unstackable Items / ----- //

    event.modify('waterballoon:balloon_bazooka', item => {
        item.maxStackSize = 1
    })
    event.modify('waterballoon:slingshot', item => {
        item.maxStackSize = 1
    })

  })

console.info('Modified Kubje.js items')