const linkStore = [
    {
      id: 1,
      icon: '',
      text: 'ระบบจ่ายตรงเงินเดือน\r\nของกรมบัญชีกลาง ',
      url: 'http://epayroll.cgd.go.th/CGDREG/CGDWEB/index.jsp'
    },
    {
      id: 4,
      icon: '',
      text: 'ระบบบำเหน็จบำนาญและสวัสดิการ\r\nรักษาพยาบาล (Digital Pension)',
      url: 'https://dps.cgd.go.th/efiling-pension'
    },
    {
      id: 7,
      icon: '',
      text: 'ระบบตรวจสอบสิทธิรักษาพยาบาล',
      url: 'https://mbdb.cgd.go.th/wel/'
    },
    {
      id: 10,
      icon: '',
      text: 'รายชื่อสถานพยาบาลเอกชน\r\nกรณีนัดผ่าตัดล่วงหน้า',
      url: 'https://mbdb.cgd.go.th/wel/searchsgr.jsp'
    },
    {
      id: 13,
      icon: '',
      text: 'บัญชีรายการและรหัสมาตรฐาน\r\nการตรวจทางห้องปฏิบัติการ',
      url: 'https://www.this.or.th/tllcgd.php'
    },
    {
      id: 2,
      icon: '',
      text: 'ระบบบริหารการเงินการคลังภาครัฐ\r\n(GFMIS)',
      url: 'http://www.gfmis.go.th/'
    },
    {
      id: 3,
      icon: '',
      text: 'ระบบการจัดซื้อจัดจ้างภาครัฐ\r\n(e-GP​)',
      url: 'http://www.gprocurement.go.th'
    },
    {
      id: 15,
      icon: '',
      text: 'ระบบบูรณาการฐานข้อมูลสวัสดิการสังคม\r\n(e-Social Welfare)',
      url: 'https://govwelfare.cgd.go.th/welfare/home'
    },
    {
      id: 16,
      icon: '',
      text: 'ระบบการรับชำระเงินกลางของบริการภาครัฐ\r\n(e-Payment)',
      url: 'https://epayment.cgd.go.th/e-payment/home'
    },
    {
      id: 5,
      icon: '',
      text: 'ระบบบริหารงบประมาณ\r\n(AFMIS)',
      url: 'https://afmis.cgd.go.th/afmis'
    },
    {
      id: 11,
      icon: '',
      text: 'ระบบฐานข้อมูลการใช้จ่ายเงินทดรองราชการฯ\r\n(DIMS)',
      url: 'https://dims.cgd.go.th/Dims/login.jsf'
    },
    {
      id: 6,
      icon: '',
      text: 'ระบบฐานข้อมูลงานตรวจสอบภายในภาครัฐ\r\nแบบอิเล็กทรอนิกส์',
      url: 'https://iais.cgd.go.th/login'
    },
    
    
    {
      id: 9,
      icon: '',
      text: 'ระบบบริหารจัดการเงินนอกงบประมาณ',
      url: 'https://nbms.cgd.go.th'
    },
    
    
    {
      id: 12,
      icon: '',
      text: 'ระบบลงทะเบียนฝึกอบรม',
      url: 'http://e-reg.cgd.go.th/cgdr'
    },
    
    {
      id: 8,
      icon: '',
      text: 'ระบบความรับผิดทางละเมิดและแพ่ง',
      url: 'https://tcls.cgd.go.th'
    },
    {
      id: 14,
      icon: '',
      text: 'ระบบสารสนเทศกฎหมาย',
      url: 'https://saraban-law.cgd.go.th/CGDWeb/index.jsp'
    },
]

const dataListTemplate = document.querySelector("[data-list-template]")
const dataListContainer = document.querySelector("[data-list-container]")
const searchInput = document.querySelector("[data-search]")
const dataItemText = document.querySelector("[data-item-text]")
const clearInput = document.querySelector("[data-clear]")

let data = bindData(linkStore)

clearInput.addEventListener("click", () => {
    searchInput.value = ''
    data.forEach(link => {
        link.element.classList.toggle("hide", false)
    })
    
})

searchInput.addEventListener("input", e => {
    const value = e.target.value
    
    data.forEach(link => {        
      const isVisible = link.text.includes(value)
      
      link.element.classList.toggle("hide", !isVisible)
    })
  })


function bindData(showData){
    return showData.map(link => {
        
        const card = dataListTemplate.content.cloneNode(true).children[0]
        // console.log(card)
        const text = card.querySelector("[data-text]")
        const url = card.querySelector("[data-url]")
        // const item = card.querySelector("[data-item]")
        text.setAttribute('style', 'white-space: pre;');
        text.textContent = link.text
        url.link = link.url  
        card.addEventListener("mouseup",()=>{
            window.open(link.url,'_blank')
        })
        dataListContainer.append(card)
        return {id: link.id, text: link.text, url: link.url, element: card}
    
    })
}
const socials = document.querySelectorAll("[class*='icon']")
console.log(socials)
// const mycards = document.querySelectorAll("[data-item]")
// mycards.forEach(icard=>{
//     icard.addEventListener('mouseup',e=>{
//         cons
//     })
// })
