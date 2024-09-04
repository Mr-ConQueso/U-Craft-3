// priority: 0

ServerEvents.recipes(event => {

    // ----- / SelfExpression & Etc... / ----- //

    event.replaceInput(
        [{mod: 'selfexpression'}, {mod: 'selfexpression_slim'}],
        'selfexpression:cloth',
        'etcetera:cotton_flower'
      )


    // ----- / Backpacked / ----- //
      
    event.replaceInput(
      ({output: 'backpacked:backpack'}),
      'minecraft:rabbit_hide',
      'minecraft:leather'
    )


    // ----- / Create & BOP Rose Quartz compat / ----- //

    event.remove({ output: 'biomesoplenty:rose_quartz_block' })

    event.shaped('biomesoplenty:rose_quartz_block', [
      'AAA', 
      'AAA',
      'AAA'  
    ], {
      A: 'create:rose_quartz', 
    }
  )

    event.shapeless('9x create:rose_quartz', [
      'biomesoplenty:rose_quartz_block'
    ])

    event.replaceInput(
      ({output: 'mobcompack:lightened_glass'}),
      'biomesoplenty:rose_quartz_chunk',
      'create:rose_quartz'
    )

    event.replaceInput(
      ({output: 'mobcompack:rose_tinted_monocle'}),
      'biomesoplenty:rose_quartz_chunk',
      'create:rose_quartz'
    )

    event.replaceInput(
      ({output: 'mobcompack:rose_tinted_monocle'}),
      'minecraft:netherite_scrap',
      'born_in_chaos_v1:dark_metal_ingot'
    )


    // ----- / Aquamirae / ----- //

    event.replaceInput(
      ({output: 'aquamirae:abyssal_brigantine'}),
      'obscure_api:astral_dust',
      'aquamirae:abyssal_amethyst'
    )

    // ----- / VS Eureka / ----- //

    event.remove({ id: 'vs_eureka:balloon_leather' })
    event.remove({ id: 'vs_eureka:balloon_paper' })
    event.remove({ id: 'vs_eureka:balloon_membrane' })
    event.remove({ id: 'vs_eureka:balloon_wool' })


    event.shaped('2x vs_eureka:balloon', [
      'ABA', 
      'B B',
      'ABA'  
    ], {
      A: 'minecraft:stick',
      B: 'minecraft:paper',
    }
  )

  event.shaped('2x vs_eureka:balloon', [
    'ABA', 
    'B B',
    'ABA'  
  ], {
    A: 'minecraft:stick',
    B: 'minecraft:white_wool',
  }
)

  // ----- / Ocean's Delight / ----- //

  event.replaceInput(
    ({output: 'oceansdelight:cabbage_wrapped_elder_guardian'}),
    'oceansdelight:cooked_elder_guardian_slice',
    'rpg_better_elder_guardian_1201:raw_elder_meat'
  )


    console.log('All recipes executed')
  })



console.info('Loaded Kube.js recipes)')

