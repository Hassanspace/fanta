var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 90%",
        end:"70% 60%",
        scrub:true,
        //markers:true,
    }
})

tl.to("#orangefanta",{
    duration:1,
    top:"115%",
   left:"15%"
},"orange")

tl.to("#orange-cut",{
    duration:1,
    top:"170%",
   left:"25%"
},"orange")
tl.to("#orange-full",{
    duration:1,
    width:"15%",
    top:"165%",
   right:"15%"
},"orange")
tl.to("#leaf1",{
    duration:1,
    rotate:"410deg",
    top:"110%",
   left:"81%"
},"orange")
tl.to("#leaf2",{
    duration:1,
    rotate:"410deg",
    top:"110%",
   left:"10%"
},"orange")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".three",
        start:"20% 90%",
        end:"3% 60%",
        scrub:true,
        
    }
})
tl2.from("#lemon",{
    duration:1,
    left:"-70%",
    rotate:"-90deg",
    top:"110%"

},"lemon")
tl2.from("#yellow",{
    duration:1,
    left:"-70%",
    rotate:"90deg",
    top:"110%"

},"lemon")

tl2.from("#berry",{
    duration:1,
    right:"-70%",
    rotate:"90deg",
    top:"110%"

},"lemon")
tl2.from("#purple",{
    duration:1,
    right:"-70%",
    rotate:"-90deg",
    top:"110%"

},"lemon")

tl2.to("#orangefanta",{
    duration:1,
    rotate:"360",
    left:"42%",
    width:"14%",
    top:"215%",
   

},"lemon")
tl2.to("#orange-cut",{
    duration:1,
    left:"42.5%",
    
    top:"200%"

},"lemon")



