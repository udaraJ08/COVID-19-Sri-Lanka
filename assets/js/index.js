let navVis = false

$(window).ready(() => {
  $('#mobileNav').css('display', 'none')
})

$('#hmbBtn').on('click', () => {
  if (navVis == false) {
    $('#mobileNav').fadeIn()
    $('#mobileNav').css({
      display: 'flex',
    })

    navVis = true
  } else {
    $('#mobileNav').hide('slide', { direction: 'right' }, 1000)
    $('#mobileNav').css({})
    navVis = false
  }
})
