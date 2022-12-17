

    const  BubbleTemplate = (name, id, text, date, image) => {
        return (`
        <img src="https://www.gstatic.com/webp/gallery/2.jpg" alt="Picture">
        <div class="clearfix"></div>
        <div class="ul_section_full">
            <ul class="ul_msg">
                <li><strong>${name}</strong></li>
                <li>${text} </li>
            </ul>
            <div class="clearfix"></div>
            <ul class="ul_msg2">
                <li><a href="#"><i class="fa fa-pencil"></i> </a></li>
            </ul>
        </div>
        `)
    }
