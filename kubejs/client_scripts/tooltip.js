ItemEvents.tooltip(event => {
    event.add(`create:shadow_steel`, `将异彩化合物投入虚空得到，暗影钢在完成转化后会飘上来。`)
    event.addAdvanced(`create:refined_radiance`, (item, advanced, text) => {
        text.add(1, Text.of(`一种用光辉锻造的化合物材料，将异彩化合物投入信标光束中进行神秘转化得到。(v0.4 后 MC 1.18 中主世界最低 Y 可达到 -64，在 Y=0 以下将异彩化合物投入信标光束将不会获得光辉石）`))
        text.add(2, Text.of(`或者将异彩化合物投在光源附近，附近的光源会缓缓被破坏然后异彩化合物会转化。`))
    })
})