
var more = 20
var add = 20
var add_2 = 30

document.getElementById("demo").innerHTML = more.toString()
document.getElementById("demo_2").innerHTML = add_2.toString()

function myFunction() {
    add=add+20
    more=more+10
    add_2=add_2-10
  document.getElementById("progress_bar").style.width = `${20+ add}%`
  if (more<50) {
    document.getElementById("demo").innerHTML = `${more}`.toString()
    document.getElementById("demo_2").innerHTML = `${add_2}`.toString()
  } else {
    document.getElementById("demo").innerHTML = "50"
    document.getElementById("demo_2").innerHTML = "0"
    document.getElementById("done").innerHTML = `<small style="font-size:16px;">Your order ships</small> <span class='text-success fw-bold'>FREE</span>+<span class='my-cart fw-bold'>PREMIER</span>`
    
    document.getElementById('PR_par').innerHTML = `Activate <span class='fw-bold my-cart'>PREMIER</span> status at no extra cost to recieve <span class='fw-bold free_shipping'> $50 bonus</span> applied to this order. Get exclusive perks, Free Shipping, plus earn 4% LE Dollars back for 1 year.`
  }
}



