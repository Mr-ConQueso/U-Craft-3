

LootJS.modifiers((event) => {

  event.addBlockLootModifier("biomesoplenty:rose_quartz_cluster").replaceLoot("biomesoplenty:rose_quartz_chunk", "create:rose_quartz", true);

  event
        .addEntityLootModifier("rpg_better_elder_guardian_1201:nothingness")
        .addWeightedLoot([
          Item.of("creategbd:elder_guardian_beam_capacitor").withChance(5),
        ]);


});



console.info('Loaded Loot.js loot tables scripts)')

