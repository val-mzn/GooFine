function ShowHide(id, value, query) {
    all = document.querySelectorAll("#rso > div")

    target = "all"
    
    if      (id == "btn_ts")  { changeDisplayElement("Top stories") }
    else if (id == "btn_pas") { changeDisplayElement("People also ask") }
    else if (id == "btn_v")   { changeDisplayElement("Videos") }
    else if (id == "btn_lr")  { changeDisplayElement("Local results") }
    else if (id == "btn_dict")  { changeDisplayElement("Dictionary") }
    else if (id == "btn_mr")  { changeDisplayElement("Map results") }
    
    else if (id == "btn_ab")  { changeDisplayQuery("#appbar") }
    else if (id == "btn_rhs") { changeDisplayQuery("#rhs") }
    else if (id == "btn_tw")  { changeDisplayQuery("g-scrolling-carousel") }
    else if (id == "btn_bs")  { changeDisplayQuery("#botstuff") }
    else if (id == "btn_t")   { changeDisplayQuery("#rso > div > div > div > table, #rso > div > div > table") }
    else if (id == "btn_sr")  { changeDisplayQuery("#rso > div .g > div > ul") }
    else if (id == "btn_if")  { changeDisplayQuery("g-section-with-header") }
    else if (id == "btn_ec")  { changeDisplayQuery("g-expandable-container") }
    else if (id == "btn_ci")  { changeDisplayQuery("div[role='contentinfo']") }
    else if (id == "btn_nav")  { changeDisplayQuery("#xjs") }
    else if (id == "btn_nav_top")  { changeDisplayQueryFirst("div[role='navigation']") }
    else if (id == "btn_sf")  { changeDisplayQuery("#searchform, #sfcnt") }
    
    function changeDisplayElement(name) {
        for (let entry of all) {
            
            try{
                t0 = entry.className
                t1 = entry.getElementsByTagName("div")[0].className
                t2 = entry.getElementsByTagName("div")[0].getElementsByTagName("div")[0].className
                t3 = entry.getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[0].className
            }
            catch{

            }
           
            if (t0 == null) { t0 = "" }
            if (t1 == null) { t1 = "" }
            if (t2 == null) { t2 = "" }
            if (t3 == null) { t3 = "" }
    
            pass = false
            if (t0.startsWith('mnr-c')) { pass = true }
    
            if (t0.startsWith('g')) { pass = true }
            if (t1.startsWith('g')) { pass = true }
            if (t2.startsWith('g')) { pass = true }
            if (t3.startsWith('g')) { pass = true }
            
            if(!pass){
                if (entry.textContent.includes(name)) {
                    if (value) {
                        entry.style.display = "none"
                    }
                    else {
                        entry.style.display = "inline"
                    }
                }
            }
        }
        
    }
    
    function changeDisplayQuery(query){
        if(value){
            document.querySelectorAll(query).forEach(item => item.style.display = "none")
        }
        else{
            document.querySelectorAll(query).forEach(item => item.style.display = "block")
        }
    }

    function changeDisplayQueryFirst(query){
        if(value){
            document.querySelector(query).style.display = "none"
        }
        else{
            document.querySelector(query).style.display = "block"
        }
    }
}
